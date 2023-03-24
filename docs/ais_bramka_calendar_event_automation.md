---
title: "Automatyzacja wyzwalana zdarzeniem z kalendarza"
sidebar_label: Automatyzacja wyzwalana zdarzeniem z kalendarza
---

## Wprowadzenie

Kalendarza można używać jako zewnętrznego harmonogramu zdarzeń / komend do wykonania w sytemie zamiast kodowania ich na stałe w automatyzacjach.


![AIS scan](/img/en/frontend/ais_calendars_10.png)

Poniżej na przykładzie pokażemy jak wykonać automatyzację, która przychodzące zdarzenia z kalendarza będzie wykonywała tak jak komendy.
W ten sposób można sterować urządzeniami, włączać automatyzacje, wysyłać powiadomienia, uruchamiać muzykę itd.


### Kalendarze

Kalendarze dostępne są w encjach systemu jako czujniki binarne z atrybutami. Możemy je zobaczyć, jeśli klikniemy w **Narzędzia deweloperskie** na pasku bocznym i przejdziemy do zakładki **STANY**, a następnie wyszukamy encje ``calendar.``

![AIS scan](/img/en/frontend/ais_calendars_8.png)

Gdy zdarzenie z kalendarza jest aktywne, to status czujnika ma wartość **on** a w jego atrybutach widzimy opis aktywnego zdarzenia.



## Przykład - Automatyzacja wykonująca wydarzenie z kalendarza jako komendę


### Nazwa automatyzacji

Dodajemy automatyzację o nazwie np. ``Wydarzenie z kalendarza``:

![Calendar](/img/en/frontend/calendar_automation_1.png)

### Wyzwalacz

Jako wyzwalacz tej automatyzacji wybieramy zmianę stanu na `on` naszego czujnika z wydarzeniami z kalendarza:

![Calendar](/img/en/frontend/calendar_automation_2.png)


### Akcja do wykonania

Akcja do wykonania to uruchomienie serwisu wykonującego komendę. Komendą jest wiadomość z kalendarza:

``` yaml
service: ais_ai_service.process
data_template:
  text: '{{ state_attr(''calendar.tomek_sviete_pl'', ''message'') }}'

```

![Calendar](/img/en/frontend/calendar_automation_3.png)


### Kod automatyzacji

Gotowy do przeklejenia (oczywiście należy zmienić nazwę kalendarza na własną) kod automatyzacji w formacie YAML:

``` yaml
alias: Wydarzenie z kalendarza
description: wykonuje wiadomość z kalendarza jako komendę
trigger:
  - platform: state
    entity_id: calendar.tomek_sviete_pl
    to: 'on'
condition: []
action:
  - service: ais_ai_service.process
    data_template:
      text: '{{ state_attr(''calendar.tomek_sviete_pl'', ''message'') }}'
mode: single

```


![Calendar](/img/en/frontend/calendar_automation_4.png)




### Działanie automatyzacji

Zdarzenia, które dodaliśmy w kalendarzu Google:

![Calendar](/img/en/frontend/calendar_automation_5.png)


są wyświetlane w kalendarzu Asystenta domowego:

![Calendar](/img/en/frontend/calendar_automation_6.png)


ostatnie zdarzenie pokazywane jest w stanach, w encji kalendarza:

![Calendar](/img/en/frontend/calendar_automation_7.png)


Gdy encja kalendarza ma status ``on``, to wiadomość z kalendarza wysyłana jest do wykonania jako komenda (tak samo, jak komenda głosowa czy komenda wpisywana w pole czatu z Jolką).
W efekcie Jolka wykonuje komendę - czyli w naszym przykładzie mówi/czyta tekst:

![Calendar](/img/en/frontend/calendar_automation_8.png)




## Schemat automatyzacji

Automatyzację wyzwalaną przez wydarzenie z kalendarza możemy w łatwy sposób utworzyć na podstawie gotowego [schematu automatyzacji](ais_bramka_automation_blueprint).

Wystarczy, że:
1. Wybierzemy predefiniowany schemat **Wykonanie wydarzenie z kalendarza jako komendy**

![Dodanie nowej automatyzacji](/img/en/bramka/blueprint_calendar_0.png)

2. Uzupełnimy i zapiszemy zdefiniowany szablon:

![Dodanie nowej automatyzacji](/img/en/bramka/blueprint_calendar.png)
