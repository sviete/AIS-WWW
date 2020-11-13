---
title: "AIS Kalendarze"
sidebar_label: AIS Kalendarze
---

# Wprowadzenie

AIS Kalendarze jest to integracja Asystenta domowego z Kalendarzami.

Idea jest taka, żeby można było pobierać dane o wydarzeniach występujących w czasie z różnych miejsc i agregować je w jednym miejscu na kalendarzu w aplikacji Asystent domowy. Wydarzenia do kalendarzy można dodawać za pomocą automatyzacji - po wystąpieniu zdarzeń w systemie, na podstawie zdarzeń z kalendarzy można też wyzwalać automatyzacje.

## Kalendarze Google

Pierwszym źródłem danych do kalendarza Asystent domowy są Kalendarze Google.
Integracja działa poprzez oficjalne [Google Calendar API](https://developers.google.com/calendar) i pozwala na wymianę zdarzeń pomiędzy Asystentem domoowym a Kalendarzami Google. 

![AIS scan](/img/en/frontend/ais_calendars_1.png)


### Dodanie integracji

Integrację dodajamy za pomocą kreatora dostępnego w **Konfiguracja** -> **Integracje** -> **AIS Kalendarze Google**

![AIS scan](/img/en/frontend/ais_calendars_2.png)



:::caution UWAGA

Integracja wymaga autoryzacji dostępu po stronie Google. **Wymgane jest wykonanie tego kroku z przeglądarki internetowej** w której otworzymy stronę Google w nowej karcie a po pomyślnej autoryzacji zamkniemy ją i wrócimy do Asystenta domowego.
:::

![AIS scan](/img/en/frontend/ais_calendars_3.png)


Logujemy się na konto Google i udzielamy zgody na dostęp do kalendarzy dla Asystenta domowego.
![AIS scan](/img/en/frontend/ais_calendars_4.png)


Po otrzymaniu zgody zostaniemy automatycznie przekierowani do aplikacji Asystent domowy gdzie pojawi się integracja z kalendarzami.
![AIS scan](/img/en/frontend/ais_calendars_5.png)

### Dodanie zdarzenia do kalendarza

Możesz skorzystać z usługi **google.add_event**, aby utworzyć nowe wydarzenie w kalendarzu. 
Identyfikator Twojego podstawowego kalendarza **calendar_id** to adres email, inne identfikatory kalendarzy do których masz dostęp można znaleźć w pliku **~/AIS/google_calendars.yaml**. 

![AIS scan](/img/en/frontend/ais_calendars_7.png)


Oczywiście akcję dodania zdarzenia do kalendarza można wywołać z automatyzacji i np. zaznaczyć w kalendarzu czas rozpoczęcia sezonu grzewczego którego definicja znajduje się w par. 2 pkt. 20 rozporządzenia Ministra Gospodarki z dnia 15 stycznia 2007 r. w sprawie szczegółowych warunków funkcjonowania systemów ciepłowniczych.



### Uruchomienie automatyzacji na podstawie zdarzenia z kalendarza


Kalendarze dostępne są też w encjach systemu jako czujniki binarne z atrybutami. Możemy je zobaczyć, jeśli klikniemy w **Narzędzia deweloperskie** na pasku bocznym i przejdziemy do zakładki **STANY**, a następnie wyszukamy encje ``calendar.``

![AIS scan](/img/en/frontend/ais_calendars_8.png)

Gdy zdarzenie z kalendarza jest aktywne to status sensora ma wartość **on** a w jego atrybutach widzimy opis zdarzenia.
Dzięki temu Kalendarza można używać jako zewnętrznego harmonogramu wydarzeń uruchamiających automatyzację, zamiast kodowania wyzwalaczy automatyzacji "na stałe" w automatyzacjach.


> TODO Pokażemy to na przykładzie Automatyzacja wyzwalana zdarzeniem z kalendarza.


### Rozwiązywania problemów

#### Zablokowanie dostępu do integracji w Google


https://myaccount.google.com/permissions


![AIS scan](/img/en/frontend/ais_calendars_6.png)


