---
title: "Konfiguracja interfejsu użytkownika"
sidebar_label: Konfiguracja
---

## Włączenie trybu konfiguracji
Włączenie konfiguracji interfejsu użytkownika następuje poprzez wybranie w aplikacji opcji **"Konfiguracja interfejsu użytkownika"** dostępnej w prawym górnym rogu każdej strony w aplikacji.

![Konfiguracja interfejsu użytkownika](/img/en/frontend/lovelace-ui-conf1.png)


![Konfiguracja interfejsu użytkownika opcja](/img/en/frontend/frontend-card-edit-1.png)



### Dodanie nowego widoku

Możesz sam tworzyć i zmieniać widoki (zakładki w aplikacji), np. możesz dodać widoki **"Salon"**, **"Łazienka"**, **"Sypialnia"** i umieścić w nich na [kartach](/docs/en/ais_app_cards.html) urządzenia znajdujące się w tych pomieszczeniach.


![Konfiguracja interfejsu użytkownika](/img/en/frontend/lovelace-ui-conf2.png)



### Dodanie własnej karty

Gdy masz już własny widok, to możesz umieścić na nim kartę. Poniżej pokażemy, w jaki sposób dodać kartę pokazującą naszą sypialnię i jak na takiej karcie umieścić urządzenia, które mamy w tym pomieszczeniu.

1. Zrób zdjęcie pomieszczenia i dodaj je do galerii.
Jeżeli używasz Asystenta domowego z telefonu, to zdjęcie do galerii będziesz mógł dodać bezpośrednio z aparatu. W przypadku przeglądarki zdjęcie możesz wysłać z dysku komputera.
Po dodaniu zdjęcia skopiuj lub zapamietaj jego lokalny adres na bramce **/local/img/<nazwa_pliku>**


![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_1.png)


2. Przejdź do nowego widoku i w trybie edycji dodaj nową kartę typu Obraz (glance)

![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_2.png)


3. Wypełnij formatkę z parametrami karty

Podaj ścieżkę do obrazu z galerii

![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_4.png)

następnie wybierz encje z systemu, które chcesz pokazywać (którymi chcesz sterować) na karcie

![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_3.png)


4. Zapisz zmiany i korzystaj z nowej karty

![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_5.png)



## Informacje techniczne
Więcej informacji technicznych oraz demo interfejsu można znaleźć na stronie projektu platformy Home Assistant [Lovelace UI](https://www.home-assistant.io/lovelace/) https://www.home-assistant.io/lovelace/


![Konfiguracja interfejsu użytkownika opcja](/img/en/frontend/frontend-cards-ui-config-on.png)

### Kopia konfiguracji

Gdy jesteś w trybie konfiguracji intefrejsu użytkownika, możesz wybrać opcję **"Ręczny edytor konfiguracji"** dostępną w prawym górnym rogu każdej strony w aplikacji będącej w trybie konfiguracji.

![Konfiguracja interfejsu użytkownika kopia](/img/en/frontend/lovelace-ui-conf-raw.png)


To spowoduje wyświetlenie tekstowej, surowej wersji konfiguracji interfejsu

![Konfiguracja interfejsu użytkownika kopia](/img/en/frontend/lovelace-ui-conf-raw-save.png)

Wersję tekstową możesz zapisać do pliku jako kopię zapasową, następnie można eksperymentować z własnymi ustwieniami. Gdyby coś poszło nie tak, to zawsze można wrócić do wersji pierwotnej poprzez wklejenie tekstowej wersji konfiguracji w tym miejscu.

Moźesz też pobrać naszą domyślną konfigurację.
Aktualna domyślna konfiguracja dostępna jest tu [Domyślna konfiguracja interfejsu użytkownika](https://raw.githubusercontent.com/sviete/AIS-utils/master/patches/scripts/lovelace)


### Własny interfejs użytkownika

Gdy mamy potrzebę zmiany całego interfejsu użytkownika włącznie z trzema pierwszymi kartami - domyślnie zablokowanymi (nadpisywanymi przy uruchamianiu), możemy to zrobić dodając do pliku konfiguracyjnego configuration.yaml wpis:   

```yaml
lovelace:
  mode: yaml
```

oraz utworzyć plik **ui-lovelace.yaml** w folderze ~/AIS (na urządzeniu) z wyglądem naszego interfejsu. Od tego momentu nie mamy już możliwości korzystania z wbudowanego edytora konfiguracji ale za to możemy modyfikować wszystkie zakładki interfejsu użytkownika.
Warto przed włączeniem tej opcji skopiować aktualny wygląd interfejstu posługując się powyższą instrukcją [Kopia konfiguracji](#kopia-konfiguracji) i wkleić zawartość do pliku **ui-lovelace.yaml**. Od teraz możemy już zmieniać wszystkie zakładki wedle własnych upodobań.


### Kalendarz Google

W trybie ręcznej konfiguracji interfejsu możemy np. zintegrować swoje kalendarze w Google i wyświetlać je w interfejsie Asystenta. Ciekawym rozwiązaniem jest powiązanie kalendarza Google z aplikacją w telefonie z Androidem i wyświetlanie wpisów w Asystencie Domowym.

#### Klucz api z Google

Aby uruchomić integrację z kalendarzem Google należy wygenrować klucz api w aplikacji Google.
[Integracja z Asystentem Domowym - generowanie klucza API](https://www.home-assistant.io/integrations/calendar.google/)

Wymagana konfiguracja to dodanie wpisu do pliku configuration.yaml zgodnie z poniższą instrukcją:

```yaml
google:
  client_id: YOUR_CLIENT_ID
  client_secret: YOUR_CLIENT_SECRET
```

oraz dodanie wpisu do **ui-lovelace.yaml** i skopiowanie z [repozytorium https://github.com/ljmerza/calendar-card](https://github.com/ljmerza/calendar-card) zawartości calendar-card lub zainstalowanie pluginu calendar-card poprzez [HACS](https://github.com/custom-components/hacs).

```yaml
resources:
  - url: /community_plugin/calendar-card/calendar-card.js
    type: js
```

#### Wstawienie własnego kalendarza do karty interfejsu użytkownika:

```yaml
- type: "custom:calendar-card"
  title: Kalendarz
  progressBar: true
  numberOfDays: 14
  entities:
    - calendar.nazwa_kalendarza
```

Edycja pliku google_calendars.yaml

```yaml
- cal_id: nazwa_kalendarza
  entities:
  - device_id: moj_kalendarz
    ignore_availability: true
    name: nazwa_kalendarza
    track: true
```
Po uruchomieniu integracji z Google plik google_calendars.yaml zostanie wypełniony danymi wszystkich naszych kalendarzy, które możemy wykorzystać w Asystencie Domowym.

Kalendarz Google ze świętami w Polsce możemy np. wykorzystać w automatyzacjach, które mają zadziałać tylko w święta lub w przypadku ustawienia "pobudki" nie uruchamiać zdarzenia w Święta 🥳
