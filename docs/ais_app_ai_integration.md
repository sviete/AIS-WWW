---
title: "Integracja Asystentka Jolka"
sidebar_label: Asystentka Jolka
---

## Wbudowany Asystent

System posiada komponent umożliwiający wydawanie komend i przesyłanie zapytań do wbudowanego programu, który zamienia polecenie na intencję, a następnie wykonuje akcję powiązaną z intencją. Program ten nazywamy wbudowanym asystentem.

<img src="/img/en/frontend/ais_integration_ai_1.png" width="860" align="right"/>


 Z asystentem możesz rozmawiać:
- przez naciśnięcie mikrofonu w aplikacji webowej (w przeglądarkach obsługujących wprowadzanie głosowe)
- przez mikrofon w telefonie z systemem Android i z zainstalowaną naszą darmową aplikacją dostępną w [Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom)
- przez wywołanie usługi rozmowy z naszego dedykowanego [pilota radiowego](ais_remote_index) z wbudowanym mikrofonem.
- wpisując komendy tekstowe do asystenta w pole tekstowe w aplikacji.


## Dostępne komendy

Tu jest [lista poleceń](/docs/en/ais_app_assistent_commands.html), które asystent rozumie loklanie (bez potrzeby łączenia się z żadnym serwisem zewnętrznym).
Np. gdy pytasz "Jaka jest temperatura w kuchni" asystent "rozumie", że intencją jest sprawdzenie statusu czujnika o nazwie "Temperatura w kuchni".

Gdy asystent nie jest w stanie zrozumieć komendy lokalnie, to stara się uzyskać informację w zewnętrznych serwisach lub wyszukać ją w Internecie.
Udzielając odpowiedzi na pytania typu "kto to jest... ", "kim jest... ", "znajdź informację o..." asystent korzysta z zasobów bazy wiedzy "Google Knowledge Graph". Korzystanie z tego typu bazy wiedzy ma na celu selekcję możliwie najistotniejszych treści i udzielenia krótkiej odpowiedzi na pytanie.
Źródłem informacji do Google Knowledge Graph jest głównie Wikipedia.
Sięgamy też po informacje bezpośrednio z Wikipedii oraz z usług internetowych, w tym serwisów Google.


<img src="/img/en/frontend/ais_integration_ai_2.png" width="860" align="right"/>

Jeśli dodasz integrację [Google Home](/docs/en/ais_app_ai_integration_google_home.html), to możesz bezpośrednio wysyłać komendy do Asystenta Google, wystarczy, że poprzedzisz komendę słowem "Google", np. "Google, jaka jest pogoda" lub "Google opowiedz jakiś dowcip" itd..



## Automatyzacje uruchamiane komendą

Każdą zdefiniowaną w systemie automatyzację możemy uruchomić komendą głosową. Wystarczy powiedzieć:


```text
'Uruchom {nazwa automatyzacji}'
```
lub

```text
'Automatyzacja {nazwa automatyzacji}'
```

w ten sposób można łatwo dodawać głosowe sterowanie praktycznie dowolnym urządzeniem które mamy zintegrowane w systemie. Przykładowo, gdy chcemy dodać uruchomienie odkurzania głosowo, to wystarczy, że dodamy automatyzację o nazwie np. **Odkurzanie** (lub Start odkurzania) która będzie wywoływała akcję **vacuum.start**. Po zdefiniowanie takiej akcji wystarczy powiedzieć **"Uruchom odkurzanie"** by głosowo uruchomić odkurzanie 💪.


![Automatyzacje](/img/en/frontend/ais_automatization_vacuum_1.png)

W analogiczny sposób możemy dodać kolejne automatyzacje takie jak wstrzymanie (vacuum.pause), wznowienie (vacuum.start), i koniec odkurzania (vacuum.return_to_base), w ten sposób możemy sterować głosowo naszym odkurzaczem.

![Automatyzacje](/img/en/frontend/ais_automatization_vacuum_2.png)


## Dodawanie własnej komendy

Możesz skonfigurować własne zdania/sentencje do przetworzenia na akcje w systemie. Działa to poprzez odwzorowywanie zdań na intencje, a następnie skonfigurowanie skryptu w celu obsługi tych intencji.

> Obecnie, żeby dodać nową komendę, należy dodać ją do plików konfiguracji. Dodawanie komend z interfejsu aplikacji będzie rozwijane w przyszłości.
**UWAGA - dodając własne intencje nadpisujesz domyślną konfigurację Asystenta domowego.**
 Nadpisanie konfiguracji ma wpływ na działanie systemu.
W przypadku problemów z działaniem systemu zalecamy usunięcie własnych wpisów z konfiguracji i sprawdzenie działania z domyślną konfiguracją.

### Uproszczony diagram działania komend w Asystencie domowym:
![Działanie komend](/img/en/frontend/frontend-assistant-diagram.png)



### Lokalizacja konfiguracji Asystenta

Katalog z konfiguracją domyślnie znajduje się na urządzeniu (bramce) w folderze **/data/data/pl.sviete.dom/files/home/AIS**

ścieżkę do katalogu możesz sprawdzić w aplikacji pod adresem http://ais-dom.local:8180/developer-tools/info -> narzędzia deweloperskie -> informacje:

![Konfiguracja folder](/img/en/frontend/frontend-assistant-config.png)

Katalog z konfiguracją dostępny jest w lokalnej sieci po ssh lub ftp:

![Folder konfiguracji po FTP](/img/en/frontend/frontend-assistant-config-ftp.png)


### Definicja sentencji

Bezpośrednio w katalogu konfiguracji utwórz plik **conversation.yaml**,
w pliku conversation.yaml dodaj sentencje, które mają wywoływać twoje nowe intencje. Przykładowo, jeżeli chcesz, by Twój asystent odpowiadał Ci, ile czasu jeszcze zostało do końca pracy to możesz zdefiniować coś takiego:

```yaml
intents:
  WhenEOD:
    - ile do końca pracy
    - kiedy koniec pracy
    - kiedy do domu
```
![Definiowanie sentencji](/img/en/frontend/frontend-assistant-config-1.png)


### Definicja intencji

Bezpośrednio w katalogu konfiguracji utwórz plik **intents.yaml**,
w pliku intents.yaml dodaj intencje oraz akcje, które mają zostać wywołane po wykryciu intencji. Posługując się naszym przykładem możemy zrobić coś takiego:

```yaml
WhenEOD:
  speech:
      text: Nie wiem, zapytaj szefa :)
  action:
    service: ais_ai_service.say_it
    data_template:
      text: "Jest {{ states.sensor.time.state }}. Nie wiem, zapytaj szefa :)"
```

![Definiowanie intencji](/img/en/frontend/frontend-assistant-config-2.png)


### Dodaj sentencje i intencje do głównego pliku konfiguracji

W katalogu konfiguracji znajduje się plik configuration.yaml, na końcu tego pliku dodaj lokalizację skryptu z intencjami oraz modułu konwersacja - dopisz te 2 linie na końcu pliku:

```yaml
intent_script: !include intents.yaml
conversation: !include conversation.yaml
```
![Dodanie sentencji i intencji do konfiguracji](/img/en/frontend/frontend-assistant-config-3.png)

### Wypróbuj działanie nowej komendy

> **UWAGA:** Uruchom ponownie Asystenta domowego w celu przetesowania nowej konfiguracji

![Test nowej komendy](/img/en/frontend/frontend-assistant-config-4.png)


## API asystenta

Asystent, tak jak każda integracja, udostępnia swoje usługi, dzięki czemu można [automatyzować](/docs/en/next/ais_bramka_automation.html) także tą funkcjonalność i np. uruchamiać [automatyczne mówienie godziny](/docs/en/ais_faq_automation_tts.html) o pełnych godzinach.

![Godzinaais_app_android_index](/img/en/faq/tts_time_3.png)
