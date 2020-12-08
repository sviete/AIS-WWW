---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Asia
tags: [google calendars, home assistant, automatyzacje, zigbee2mqtt, tasmota]
---

# Asia

- ![AIS](/img/en/blog/202010/mechanical-arm.png) **Asia**
- ![AIS Kalendarze](/img/en/blog/202011/ais_calendar.png) Kalendarze AIS
- ![Zigbee](/img/en/blog/202007/zigbee.png) Zigbee2Mqtt 1.16.1
- ![Tasmota](/img/en/blog/202005/tasmota_small.png) Tasmota v9.1.0 Imogen
- ![Home Assistant](/img/en/blog/202007/hass.png) Home Assistant 0.117.6


<!--truncate-->

## ABC bezproblemowej aktualizacji

:::tip Kopia zapasowa.
### ![A](/img/en/blog/202009/alpha-a-circle.png) Kopia zapasowa.

UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important Konsola i logi na bramce.
### ![B](/img/en/blog/202009/alpha-b-circle.png)Konsola i logi na bramce.

W razie problemów z aktualizacją, sprawdź procedurę [Aktualizacja ręczna](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step).
To może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution Poczekaj cierpliwie.
### ![C](/img/en/blog/202009/alpha-c-circle.png) Cierpliwość. Pierwsze uruchomienie po aktualizacji trwa dłużej - poczekaj cierpliwie.

 **Po aktualizacji pierwsze uruchomienie może trwać nawet 20 minut.**
 W tym czasie aktualizowane są biblioteki do integracji dodanych na bramce i baza danych jest migrowana do nowego formatu.
 **Poczekaj cierpliwie na zakończenie aktualizacji.**
:::


## ![](/img/en/blog/202012/asia.png) Asia

Od tej wersji zmieniamy nazwy wersji systemu z numerów na imiona.

Nazywając naszą werję systemu **Asia** nie chdziło nam o brytyjską grupę muzyczną Asia, ani też o planetoidę o numerze katalogowym 67, ani też prowincję rzymską, lub też Asię która w mitologii greckiej była jedną z Nereid... 

**Asia**, wg nas, to zdrobnienie imienia Joanna. Wg [wikipedia.pl](https://pl.wikipedia.org/wiki/Joanna) Asia to zdrobnienie imienia żeńskiego, odpowiednika imienia Jan pochodzącego z języka hebrajskiego: Jo-hanan – „Jahwe jest łaskawy”.

Cel zmiany nazw wersji(po za tym, że lubimy Asię, Asia zaczyna się na literę A i oczywiście, że cieszymy się z tego, że Bóg jest dla nas łaskawy :) ) z numerów na imiona jest taki, żeby łatiwiej nam było zapamiętać, jaką mamy wersję systemu.
Tak samo jak łatwiej pamiętamy, że zaparkowaliśmy na parkingu **Jeżyk** a nie na pargingu o numerze **0.108.5**.

Po tym początkowym wyjaśnieniu, witamy w systemie **Asia** i zapraszamy do aktualizacji :)



### Automatyzacja wyzwalana zdarzeniem z kalendarza

Kalendarza można używać jako zewnętrznego harmonogramu zdarzeń / komend do wykonania w systemie zamiast kodowania ich na stałe w automatyzacjach.

![AIS scan](/img/en/frontend/ais_calendars_10.png)


Dodanie integracji z kalendarzem opisane jest w: [AIS Kalendarze](/docs/ais_app_ai_integration_google_calendars)

Na przykładzie pokazujemy jak wykonać automatyzację, która przychodzące zdarzenia z kalendarza wykonuje tak jak komendy: [Automatyzacja wyzwalana zdarzeniem z kalendarza](/docs/ais_bramka_calendar_event_automation)



### Automatyzacja wyzwalana skanem

Możemy zeskanować aparatem w telefonie QR kod i wysłać go do bramki w celu uruchomienia automatyzacji. Podobnie jak w przypadku taga NFC:

![AIS scan](/img/en/bramka/ais_scan_tags.png)


szczegóły w dokumentacji: [Automatyzacja wyzwalana skanem](/docs/ais_bramka_tag_automation)


### Automatyzacja wyzwalana przyciskiem

Podczas sterowania w trybie bez monitora, naciśnięcie przycisku na pilocie, klawiaturze czy innym kontrolerze podłączonym do bramki, przesyłane jest do Asystenta domowego jako zdarzenie. Takie zdarzenia mogą wyzwalać automatyzację. Opisujemy to na przykładzie: [Automatyzacja wyzwalana przyciskiem](/docs/ais_bramka_key_event_automation)

![AIS button](/img/en/bramka/ais_remote_key_events.jpg)

## ![](/img/en/blog/202011/ais_calendar.png) Integracja Kalendarze AIS

Dodaliśmy nową integrację - Kalendarze AIS.

Obecnie źródłem danych do kalendarza Asystent domowy są Kalendarze Google. Integracja działa poprzez oficjalne Google Calendar API i pozwala na wymianę zdarzeń pomiędzy Asystentem domowym a Kalendarzami Google.

:::caution UWAGA
**Integracja jest w trakcie weryfikacji po stronie Google.** Dostarczyliśmy wszystkie wymagane rzeczy, ale to czy i kiedy Google zatwierdzi naszą integrację, nie jest jeszcze ustalone. 
Jesteśmy w kontakcie z Google Cloud Trust & Safety Team i na bieżąco wyjaśniamy, jak działa nasza integracja i do czego ma służyć użytkownikom.
:::

Nie znaczy to jednak, że przyszłość integracji Kalendarze AIS nie jest jeszcze pewna i może zniknąć z Asystenta domowego.
Kalendarz jako sposób wyzwalania automatyzacji ma szanse być prostszym sposobem na harmonogramowanie zadań w Asystencie domowym (sterowanie ogrzewaniem itp.). Dlatego jeżeli nie dostaniemy autoryzacji od Google lub integracja nie będzie działać prawidłowo, to uruchomimy kalendarz CalDAV w portalu integratora.

**Podsumowując - Kalendarze AIS to integracja, która będzie w systemie Asystent domowy i będzie działać z każdą wersją coraz łatwiej i lepiej.**


![AIS scan](/img/en/frontend/ais_calendars_3.png)

Opis jak dodać integrację [AIS Kalendarze](/docs/ais_app_ai_integration_google_calendars)


## ![](/img/en/blog/202007/zigbee.png) Zigbee2Mqtt 1.16.1

Poprawki i ulepszenia, oraz oczywiście obsługa nowych urządzeń. Opis całego wydania dostępny na stronie projektu [Zigbee2Mqtt](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.16.0)

![](/img/en/blog/202011/z2m.png)



## ![](/img/en/blog/202005/tasmota_small.png) Tasmota v9.1.0 Imogen

Cała lista zmian, nowości i poprawek dostępna jest na stronie projektu [Tasmota](https://github.com/arendst/Tasmota/releases/tag/v9.1.0)

Nasze kompilacje udostępniamy tutaj [AIS-Tasmota](https://github.com/sviete/AIS-Tasmota/tree/firmware)

Pracujemy nad tym, żeby dołączenie nowego urządzenia z oprogramowaniem AIS Tasmota było jeszcze łatwiejsze, podobnie jak jego aktualizacja. 
W portalu integratora można zobaczyć przypisane do bramki urządzenia z naszą kompilacją oprogramowania Tasmota:

![Home Assistant](/img/en/blog/202011/iot.png)

Szczegóły jak to działa będziemy opisywać przy kolejnych aktualizacjach aplikacji i dokumentacji.
Obecny proces dodawania urządzeń IoT działa bez zmian. Nowy proces dodania urządzenia IoT wygląda na diagramie teraz tak: 

![diagram](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgUHJ6ZXDFgnl3IGF1dG9yeXphY2ppIHByenkgZG9kYXdhbml1IG5vd2VnbyB1cnrEhWR6ZW5pYSBJT1QgZG8gYnJva2VyYSB3IEFJUwoKVXNlciAtPiBNb2I6IERvZGFqADcFAC8LZQpNb2IgLT4gSU9UOiBQYXJhbWV0cnkgcG_FgsSFYwBXBldpRmkgaSBNUVRUCklPVCAtPiBBSVM6IE1hbSB0YWtpZSBwADAJY3p5IGplc3QgT0s_CkFJUwBTCcWBxIVjeiBzacSZIHoARwUgegA5BW1pADYJYW1pCm5vdGUgcmlnaHQgb2YAgTQGQ3pla2FtIMW8ZWJ5IHphcHl0YcSHIEFJUwBpBUlPVABQBgCBLAh5xYJvAIFPCACBIwVDAA4YAIEZCQCCHAVUYWsAgW8Jb24AOglVc2VyOiBTdWtjZXMgbWFzegCCMhIK&s=default)


## ![](/img/en/blog/202007/hass.png) Home Assistant 0.117.6


Najnowszy (stabilny) Home Assistant 0.117.6, oczywiście jak zwykle jest ogromna liczba poprawek i nowych rzeczy. 
Cała lista nowości dostępna jest na stronie projektu: [Home Assistant 0.117.6](https://www.home-assistant.io/blog/2020/10/28/release-117/)



![Home Assistant](/img/en/blog/202011/ha_social.png)



----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)

##### AI-Speaker 09/2020
