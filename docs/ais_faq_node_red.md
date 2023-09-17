---
title: "Jak dodać Node-RED?"
sidebar_label: Jak dodać Node-RED?
---

## Wprowadzenie

Celem tego opisu jest wyjaśnienie na przykładzie kilku rzeczy:

- jak zainstalować dodatkowy serwer na bramce (na przykładzie Node-RED)
- w jaki sposób dodać automatyczne uruchamianie tego serwera (po każdym restarcie bramki) do menadżera procesów PM2 działającego na bramce
- w jaki sposób dodać nowy widok z aplikacją do interfejsu Asystenta domowego
- w jaki sposób wygenerować token w Aystencie domowym i dać zewnętrznej aplikacji dostęp do API Asystenta domowego
- jak wywołać przykładowy serwis w Asystencie domowym z Node-RED za pomocą API

![Node-RED](/img/en/faq/node_red_hey_jolka.png)


## Instalacja Node-RED

Przechodzimy do [konsoli na bramce](/docs/ais_bramka_remote_ssh) i wklejamy/wpisujemy w niej komendę:

```bash
npm i -g --unsafe-perm node-red && termux-fix-shebang /data/data/com.termux/files/usr/bin/node-red
```

Efekt powinien być taki jak na poniższym obrazku:

![Node-RED](/img/en/faq/node_red_install.png)


### Uruchomienie serwera Node-RED

W konsoli wpisujemy komendę:
```bash
node-red
```

Efekt powinien być taki jak na poniższym obrazku:

![Node-RED](/img/en/faq/node_red_start.png)

Na tym etapie mamy już zainstalowany i działający serwer NODE-red na bramce. W przeglądarce możemy wejść na adres http://ip-bramki-w-lokalnej-seieci:1880 i korzystać z aplikacji NODE-red

![Node-RED](/img/en/faq/node_red_in_browser.png)


### Zatrzymanie serwera Node-RED

W konsoli wciskamy kombinację klawiszy **Ctrl +c** efekt powinien być taki jak na poniższym obrazku:


![Node-RED](/img/en/faq/node_red_stop_in_console.png)


### Automatyczny start serwera Node-RED

Jeżeli chcemy, by Node-RED był uruchamiany automatycznie, to dodajemy takie zadanie dla menadżera procesów PM2, wpisując w konsoli na bramce:

```bash
pm2 start node-red --node-args="--max-old-space-size=128" && pm2 save
```
Efekt powinien być taki jak na poniższym obrazku:

![Node-RED](/img/en/faq/node_red_start_from_pm2.png)


### Dodanie aplikację Node-RED jako widok w naszym Asystencie domowym

Włczamy [Konfigurację interfejsu użytkownika](/docs/ais_app_ui_config)

Dodajemy nowy widok Node-RED:

![Node-RED](/img/en/faq/node_red_view.png)

W widoku Node-RED dodajemy nową kartę typu IFRAME

![Node-RED](/img/en/faq/node_red_new_card.png)

W konfiguracji karty podajemy adres serwera Node-RED działającego na naszej bramce:

![Node-RED](/img/en/faq/node_red_new_card_2.png)

Wracamy do ustawień widoku i możemy przełączyć nasz widok w tryb panela (opcja "Panel Mode") co spowoduje, że nasza karta z Node-RED będzie zajmowała całą szerokość widoku.

![Node-RED](/img/en/faq/node_red_view_panel_mode.png)


Efekt powinien być taki jak na poniższym obrazku:

![Node-RED](/img/en/faq/node_red_in_view.png)


## Połączenie z Node-RED do Asystenta domowego

### Instalacja wtyczki do Asystenta domowego

W konsoli przechodzimy do folderu z node-red i instalujemy wtyczkę "node-red-contrib-home-assistant-websocket" wpisując/wklejając poniższe komendy:

```bash
cd ~/.node-red
npm install node-red-contrib-home-assistant-websocket
```

Efekt powinien być taki jak na poniższym obrazku:

![Node-RED](/img/en/faq/node_red_install_plugin_to_hass.png)

następnie restartujemy proces node-red, wpisując komendę:

```bash
pm2 restart node-red
```

Efekt powinien być taki jak na poniższym obrazku:

![Node-RED](/img/en/faq/node_red_reset_from_pm2.png)



### Konfigurujemy połączenie z Asystentem domowym

W Asystencie domowym przechodzimy do konfiguracji naszego profilu (klikając w menu na ikonkę po lewej stronie na dole - tą z piwerszą literką naszego loginu) i generujemy długoterminowy token dostępu dla Node-RED

![Node-RED](/img/en/faq/node_red_long_token.png)

Kopiujemy wygenerowany token ponieważ nie będzie on ponownie wyświetlany:

![Node-RED](/img/en/faq/node_red_long_token_copy.png)

Wracamy do widoku z Node-RED i konfigurujemy połączenie z Asystentem domowym.
W tym celu z listy dostępnych pozycji wybieramy "home assistant" -> "call service", klikamy na ten wybrany element i przechodzimy do konfiguracji połączenia

Podajemy adres url i token wygenerowany w poprzednim kroku w Asystencie domowym.
URL: **http://localhost:8180**
Token: **Twój token wygenerowany w Asystencie domowym**

![Połaczenie z asystentem](/img/en/faq/Node-red-Home-Assistant-connection.png)


Naciskamy przycisk **Deploy** w Node-RED, żeby ustanowić połączenia z Asystentem domowym.

![Połaczenie z asystentem](/img/en/faq/node_red_deploy.png)



### Definicja wywołania serwisu w Asystencie domowym z Node-RED

Żeby wywołać sewis zdefiniowany w Asystencie domowym, kliknijmy ponownie na nasz element "call service" i wpiszmy/wybierzmy następujące parametry serwisu:

- Name: **Cześć Jolka**
- Domain: **ais_ai_service**
- Service: **say_it**
- Data: **"text":"Cześć :)"**


![Połaczenie z asystentem](/img/en/faq/node_red_home_assistant_service_definition.png)


### Wywołanie serwisu w Asystencie domowym z Node-RED

Żeby wywołać ręcznie nasz testowy serwis dodajmy pierwszy element z listy: "inject", następnie połączmy nasze elementy węzły żeby otrzymać przepływ taki jak na rysunku poniżej.

![Node-RED](/img/en/faq/node_red_test_call_service.png)

Zapisujemy definicję naszego przepływu za pomocą przycisku **Deploy** a następnie naciskamy z lewej strony na nasz element "inject" by ręcznie uruchomić przepływ:

![Node-RED](/img/en/faq/node_red_call_service.png)

W efekcie otrzymac 3 rzeczy:

- komunikaty w aplikacji Node-RED o pomyślnym zapisaniu zdefiniowanego przepływu oraz o pomyślnym wykonaniu wywołania naszej usługi (tak jak to pokazano na obrazku powyżej)
- jeżli mamy podłączony do bramki głośnik lub monitor/tv z głośnikami to powinniśmy usłyszeć jak asystent czyta wpisany przez nas tekst **Cześć :)**
- w aplikacji Asystent domowy możemy zobaczyć, że wpisany przez nas tekst został przetworzony przez asystenta

![Node-RED](/img/en/faq/node_red_to_ais.png)
