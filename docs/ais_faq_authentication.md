---
title: "Jak działa logowanie do aplikacji."
sidebar_label: Jak działa logowanie do aplikacji
---

## Na czym polega logowanie do Asystenta domowego?

W celu zapewnienia maksymalnego bezpieczeństwa (gdy bramka dostępna jest z Internetu), a jednocześnie umożliwienia łatwej autentykacji (gdy bramka działa tylko lokalnie) udostępniamy kilka mechanizmów autentykacji.

Dodatkowo, w celu ułatwienia korzystania z aplikacji, umożliwiamy zapamiętanie danych logowania w przeglądarce/kliencie.

Użytkownikom, którym zależy na najwyższym poziomie bezpieczeństwa, udostępniamy moduł uwierzytelniania wieloskładnikowego (Multi-factor authentication).

W dokumentacji nakreślono, jak działa [zabezpieczenie dostępu do aplikacji](/docs/ais_bramka_remote_www_index), poniżej postaramy się wytłumaczyć to na przykładach.


### Logowanie, gdy bramka działa w sieci lokalnej

Gdy bramka działa tylko w sieci lokalnej, to standardowo umożliwiamy do wyboru trzy sposoby autentykacji:
- łatwe logowanie w zaufanej sieci (wystarczy wybrać użytkownika z listy, żeby się zalogować bez podawania hasła)
- logowanie za pomocą nazwy użytkownika i hasła
- logowanie za pomocą hasła API
konfiguracja tych trzech sposobów autentykacji wygląda tak:


konfiguracja tych trzech sposobów autentykacji wygląda tak:

```yaml
homeassistant:
  auth_providers:
    - type: trusted_networks
    - type: homeassistant
    - type: legacy_api_password
```

#### Mechanizm logowania **"Zaufane sieci"**

W aplikacji ta konfiguracja przy wybranym pierwszym sposobie autentykacji **trusted_networks** (Zaufane sieci) wygląda tak, jak przedstawiono poniżej:

![Logowanie w sieci lokalnej](/img/en/faq/auth_trusted_networks.png)

#### Mechanizm logowania **"Login i hasło"**

Przy wybranym drugim sposobie autentykacji **homeassistant** (Logowanie za pomocą nazwy użytkownika i hasła) wygląda tak, jak przedstawiono poniżej:

![Logowanie w sieci lokalnej](/img/en/faq/auth_homeassistant.png)

#### Mechanizm logowania **"Hasło do API"**

Przy wybranym trzecim sposobie autentykacji **legacy_api_password** (Hasło do API) wygląda tak, jak przedstawiono poniżej:

![Logowanie w sieci lokalnej](/img/en/faq/auth_legacy_api_password.png)


### Logowanie, gdy bramka ma włączony dostęp z Internetu

W przypadku, gdy włączony jest dostęp z Internetu, to **dla bezpieczeństwa automatycznie wyłączamy możliwość prostego logowania**.

![Włączenie dostępu z Internetu](/img/en/faq/access_form_internet.png)

Automatycznie konfiguracja jest taka, jak opisano w dokumentacji [wyłączenie łatwego logowania](/docs/ais_bramka_remote_www_index)

```yaml
homeassistant:
  auth_providers:
    - type: homeassistant
```
Taka konfiguracja jak powyżej oznacza, że możemy logować się tylko za pomocą loginu i hasła. Nie ma już możliwości wyboru prostego sposobu autentykacji.

![Włączenie dostępu z Internetu](/img/en/faq/auth_access_form_internet_on.png)


## Jak to się dzieje, że po pierwszym logowaniu nie muszę się już logować ponownie?

Przy pierwszym logowaniu pytamy, czy zapamiętać dane logowania.

![Zapamiętanie danych logowania](/img/en/faq/remember_auth.png)

Zapamiętanie danych logowania polega na zapisaniu ich w przeglądarce/kliencie, z którego się logujemy.
Dopóki dane są zapamiętane i dopóki używamy tej samej przeglądarki, nie będziemy pytali o dane logowania.

## Jak zapomnieć dane logowania na kliencie?

Wystarczy się wylogować, w tym celu przechodzimy do profilu użytkownika i naciskamy przycisk **Wyloguj**

![Wylogownie](/img/en/faq/logaut.png)


## Jak dodać innych użytkowników?

Przechodzimy do **Konfiguracja**, następnie wybieramy **Użytkownicy**.

![Dodanie użytkownika](/img/en/faq/add_user.png)

W celu dodania nowego użytkownika naciskamy przycisk plusika po prawej stronie na dole, wypełniamy formularz z danymi użytkownika i naciskamy przycisk **UTWÓRZ**.

![Zapisanie użytkownika](/img/en/faq/add_user_save.png)


## Jak zabezpieczyć się bardziej?

Podczas gdy udostępniamy bramkę przez Internet, ryzykujemy, że ktoś z zewnątrz, kto zna adres naszej bramki, może próbować się na nią włamać.

Na bramce działa cała automatyka domowa, często też alarm oraz automatyczne otwieranie drzwi. Dlatego w przypadku udostępniania bramki z Internetu należy zachować szczególną czujność.

Zdajemy sobie sprawę z zagrożenia i staramy się je maksymalnie niwelować, w tym celu:

1. Podczas włączenia dostępu z Internetu wymuszamy logowanie za pomocą nazwy użytkownika i hasła - nie ma możliwości łatwego logowania.

2. Wszystkie hasła użytkowników na bramce są przechowywane w postaci [zaszyfrowanej i z dodatkiem soli](https://pl.wikipedia.org/wiki/S%C3%B3l_(kryptografia)), co sprawia, że atakujący nie może odczytać hasła, nawet jeśli ma dostęp do pliku.

Dodatkowo rekomendujemy włączenie modułu uwierzytelniania wieloskładnikowego (Multi-factor authentication).

Moduł uwierzytelniania wieloskładnikowego po podaniu hasła (czyli coś, co już wiemy) wymaga podania kolejnego jednorazowego hasła, które ma określony czas ważności i jest przesyłane na telefon (czyli coś, co tylko my dostaniemy).

W celu włączenia tego zabezpieczenia należy przejść do **profilu użytkownika**, w regionie **Moduły uwierzytelniania wieloskładnikowego** wybrać opcję **WŁĄCZ** a następnie postępować zgodnie z instrukcją.


![Uwierzytelnianie wieloskładnikowe](/img/en/faq/auth_mfa_2.png)


Po włączeniu uwierzytelniania wieloskładnikowego po zalogowaniu się loginem i hasłem będziemy jeszcze musieli podać hasło jednorazowe z telefonu.

![Uwierzytelnianie wieloskładnikowe](/img/en/faq/auth_mfa_mob.png)



## Jak mogę sam ustalić preferowany dla mnie sposób logowania?

Wystarczy nadpisać naszą domyślną konfigurację i wg własnych potrzeb usunąć lub dodać dostawcę autentykacji.

Pokażemy jak to zrobić krok po kroku:

1. Przechodzimy do konsoli

![Konsola](/img/en/faq/go_to_console.png)

2. W konsoli przechodzimy do edycji konfiguracji autentykacji

```bash
$ cd AIS
$ nano configuration.yaml  
```

3. Nadpisujemy domyślną konfigurację systemu

W dokumentacji opisaliśmy jak działa [Zaawansowana konfiguracja Asystenta domowego](/docs/ais_gate_faq_config_yaml)

Jeżeli chcemy, żeby logowanie było zawsze za pomocą loginu i hasła (nawet gdy bramka nie jest dostępna przez Internet) to podajemy następującą konfigurację:

```yaml
homeassistant:
  auth_providers:
    - type: homeassistant
```

![Edycja konfiguracji](/img/en/faq/edit_configuration.png)


4. Upewniamy się, że po zmianach konfiguracja jest prawidłowa i restartujemy system

> W pliku konfiguracyjnym configuration.yaml ważna jest ilość spacji, dlatego po zmianach w konfiguracji upewnij się, że wszystko jest nadal prawidłowe. W tym celu przejdź do **Konfiguracja** i wybierz opcje **Kontrola serwera**, a następnie naciśnij przycisk **Sprawdź konfigurację**.

![Sprawdzenie konfiguracji](/img/en/faq/reload_config.png)


Po tej zmianie w konfiguracji opisanej powyżej i ponownym uruchomieniu systemu, bez względu na to, czy dostęp z Internetu do bramki jest włączony czy nie, będziemy mieli możliwość logowania tylko przez podanie użytkownika i hasła.


## Jak mogę sam dodać własny sposób logowania?

Zapraszamy do zapoznania się z [dokumentacją dla developerów systemu Home Assistant]( https://developers.home-assistant.io/docs/auth_index.html).

Jeżeli potrafisz programować w języku Python, to możesz dodać własną autentykację, tylko dla siebie i w swojej lokalnej instalacji.

Jesteśmy otwarci na propozycje ulepszenia systemu. Jeśli uważasz, że Twoje rozwiązanie jest dobre, to możesz zaproponować je do użycia dla tysięcy innych użytkowników. Gdy twój kod przejdzie weryfikacje programistów rozwijających platformę Home Assistant i społeczności zorganizowanej wokół projektu, to zostanie dodany do Home Assistant, a następnie wydamy go z kolejną wersją Asystenta domowego.
