---
title: "Inne metody na dostęp zdalny"
sidebar_label: Inne metody na dostęp zdalny
---

:::caution Uwaga
Gdy dodajesz dostęp z Internetu do swojej bramki, to **pamiętaj o  bezpieczeństwie**. Należy odpowiednio skonfigurować logowanie do Asystenta domowego w celu zabezpieczenia dostępu, patrz opis: [Zabezpieczenie dostępu do aplikacji](#zabezpieczenie-dostępu-do-aplikacji).
:::

## Przekierowanie portów na routerze

Jedną z metod na udostępnienie bramki z Internetu jest przekierowanie portów na routerze. W przypadku aplikacji sprowadza się to do przekierowania portu 8123 z bramki na wolny port na routerze. Router jest dostępny z Internetu, więc wywołując jego adres na udostępnionym porcie można uzyskać dostęp do aplikacji Asystent domowy. To, jak wykonać takie przekierowanie, zależy do modelu routera. Szczegółowy opis należy sprawdzić w instrukcji danego routera.


## TOR

Możliwe jest zdefiniowanie dostępu do bramki przez Internet w sieci Tor Onion.
Usługa Tor Onion pozwala na zdalny dostęp do aplikacji Asystent domowy działającej na bramce w twojej sieci lokalnej za pośrednictwem standardowych portów.

Dostęp do urządzenia za pośrednictwem Tora jest najbezpieczniejszą metodą ponieważ oferuje silne szyfrowanie, dodatkowo Twoja bramka nie jest widoczna w zwykłym Internecie. Niestety nie jest to zbyt efektywna moteda, ponieważ sieć TOR jest zwykle dość wolna.


### Instalacja potrzebnych pakietów

Zainstaluj TOR wykonując w konsoli komendę:

```bash
$ apt install tor
```

### Ustawienia serwisu Onion

Należy zmodyfikować domyślny plik konfiguracyjny tor znajdujący się w lokalizacji $PREFIX/etc/tor/torrc
Wykonaj tą komendę, by udostępnić na bramce serwis SSH oraz HTTP w Onion:

```bash
$ echo "SOCKSPort 127.0.0.1:9050
HiddenServiceDir /data/data/com.termux/files/home/.tor/hidden_dom
HiddenServicePort 22 127.0.0.1:8022
HiddenServicePort 80 127.0.0.1:8180" > $PREFIX/etc/tor/torrc
```


Następnie trzeba utworzyć katalog, w którym będą przechowywane informacje o ukrytych usługach:

```bash
$ mkdir -p ~/.tor/hidden_dom
```

Uruchom usługę Tor wpisując w konsoli:

```bash
$ tor
```

poczekaj, aż serwis się uruchomi, pojawi się kilka logów aż na końcu będzie:


```bash
 Bootstrapped 100%: Done
```
zamknij serwis kombinacją klawiszy: Ctrl+c


### Nazwa hosta w Onion

Żeby sprawdzić unikalną nazwę hosta bramki w Onion wykonaj w konsoli:

```bash
$ cat ~/.tor/hidden_dom/hostname
```

wynik powinien być podobny do poniższego:

```bash
$ ytdv3tvdeh8u6koz.onion
```


### Łączenie z serwisem


> Pamiętaj, że usługa `TOR` powinna działać na obu stronach (klient / serwer), w przeciwnym razie pojawią się błędy połączenia.

- SSH.
Programem do połączenia z serwisem SSH może być torsocks

Zainstaluj torsocks wykonując w konsoli komendę:

```bash
$ apt install torsocks
```

Żeby połączyć się ze konsolą bramki przez sieć TOR, w konsoli swojego klienta wpisz polecenie:

```bash
$ torsocks ssh ytdv3tvdeh8u6koz.onion -i id_rsa_ais
```

- HTTP.
Do połączenia z aplikacją użyj specjalnej przeglądarki działającej w sieci Onion Tor, możesz ją pobrać z tego adresu: https://www.torproject.org/projects/torbrowser.html.en
w adresie przeglądarki wpisz swoją unikalną nazwę hosta w sieci Onion


### Dodanie serwisu tor do menedżera procesów

Żeby TOR był uruchamiany automatycznie po każdym restarcie bramki, dodaj go do menedżera procesów PM2 wykonując następującą komendę w konsoli:

```bash
$ pm2 start tor --name tor && pm2 save
```


## Serveo
---

Inny sposób na dostęp do bramki z Internetu, który nie wymaga konfiguracji routera oraz instalowania żadnych dodatkowych pakietów, to wykorzystanie **usługi zdalnego przekazywania portów SSH**. Ta metoda zostanie dokładnie opisana poniżej wraz z przykładami.


### Dostęp do aplikacji z sieci Internet

żeby udostępnić aplikację w sieci Internet, w konsoli bramki wykonaj komendę:

```bash
$ ssh -R 80:localhost:8180 serveo.net
```
Opcja -R nakazuje klientowi SSH żądanie przekierowania portów z serwera i żądań proxy do określonego hosta i portu (Twojej bramki). Poddomena serwera serveo.net zostanie przypisana do przekazywania ruchu HTTP.

W odpowiedzi w konsoli pojawi się informacja typu:

```bash
Hi there
Forwarding HTTP traffic from https://alias.serveo.net
Press g to start a GUI session and ctrl-c to quit.
```

teraz w celu połączenia się ze swoją bramką z Internetu, wpisz w przeglądarce:

https://**alias**.serveo.net

> W powyższym przypadku **alias** został wygenerowany/nadany automatycznie. Jest on unikalny dla każdej instancji i w Twoim przypadku będzie inny.

Możesz też podać własny alias który chciałbyś mieć w adresie i jeżeli będzie wolny to zostanie przypisany do Ciebie. W celu podania własnego aliasa np. **bramka** w konsoli wpisujemy następującą komendę:


```bash
$ ssh -R bramka:80:localhost:8180 serveo.net
```


### Dostęp do konsoli bramki z sieci Internet

w podobny sposób jak aplikację, możesz też przekierować połączenie ssh, w tym celu w konsoli wpisz:

```bash
$ ssh -R bramka:22:localhost:8022 serveo.net
```

W odpowiedzi w konsoli pojawi się informacja typu:

```bash
Hi there
Forwarding SSH traffic from alias "bramka"
Press g to start a GUI session and ctrl-c to quit.
```

teraz w celu połączenia się ze swoją bramką po ssh będąc poza lokalną siecią wystarczy, że wpiszesz w konsoli:

```bash
$ ssh -o ProxyCommand="ssh -W bramka:22 serveo.net" bramka -i id_rsa_ais
```



 ### Zapisanie zdalnego przekazywania portów SSH

- autossh

 W celu zapewnienia, że zdalne przekierowanie portów będzie automatycznie odnawiane, zamiast ssh zastosujemy autossh, w tym celu w konsoli instalujemy pakiet:

 ```bash
 $ apt install autossh
 ```

W celu uruchamiania dostępu po każdym restarcie bramki, możemy posłużyć się menedżerem procesów PM2.

> Należy zwrócić uwagę, że w poniższych przykładach **bramka**, to tylko przykładowy alias - definiując proces należy podać własny alias

- zdefiniowanie procesu dostępu do aplikacji w PM2

```bash
$ pm2 start autossh --name ext-http \
    -- -M 0 -o ServerAliveInterval=60 -R bramka:80:localhost:8180 serveo.net
```

- zdefiniowanie procesu dostępu do konsoli w PM2

```bash
$ pm2 start autossh --name ext-ssh \
    -- -M 0 -o ServerAliveInterval=60 -R bramka:22:localhost:8022 serveo.net
```

- zapisanie zdefiniowanych procesów

```bash
$ pm2 save
```


## Zabezpieczenie dostępu do aplikacji

Gdy bramka działa tylko w sieci lokalnej, umożliwiamy trzy sposoby autentykacji:
- logowanie za pomocą nazwy użytkownika i hasła
- łatwe logowanie w zaufanej sieci (wystarczy wybrać użytkownika z listy, żeby się zalogować bez podawania hasła)
- logowanie za pomocą hasla API

konfiguracja autentykacji wygląda tak:

```yaml
homeassistant:
  auth_providers:
    - type: trusted_networks
    - type: homeassistant
    - type: legacy_api_password
```

W aplikacji wygląda to tak:

![Logowanie w sieci lokalnej](/img/en/frontend/frontend_local_login.png)


### Wyłączenie łatwego logowania

Tak łatwe metody autentykacji nie są odpowiednie w przypadku dostępu z Internetu, dlatego gdy dostęp z Internetu jest włączony to automatycznie zmieniamy konfigurację autentykacji na następującą:

```yaml
homeassistant:
  auth_providers:
    - type: homeassistant
```

Przy włączonym dostępie z Internetu wymagane jest logowanie do aplikacji:

![Logowanie z Internetu](/img/en/frontend/frontend_internet_login.png)


###  Włączenie modułu uwierzytelniania wieloskładnikowego

Moduł uwierzytelniania wieloskładnikowego po podaniu hasła (czyli coś, co już wiemy) wymaga podania kolejnego jednorazowego hasła, które ma określony czas ważności i jest przesyłane na telefon (czyli coś, co tylko my dostaniemy). W celu włączenia tego zabezpieczenia należy przejść do 'ustawienia użytkownika' a następnie postępować zgodnie z instrukcją zamieszczoną w regionie **Moduły uwierzytelniania wieloskładnikowego**


![Hasło jednorazowe](/img/en/bramka/totp_settings.png)
