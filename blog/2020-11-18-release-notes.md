---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.117.7
tags: [google calendars, home assistant, automatyzacje]
---

# 0.116.7 Automatyzujemy

- ![AIS](/img/en/blog/202010/mechanical-arm.png) **Automatyzujemy**
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




## ![](/img/en/blog/202010/mechanical-arm.png) Automatyzujemy zdarzeniami


W tej wersji opisujemy nowe możliwości wyzwalania automatyzacji - wyzwalaczami automatyzacji mogą być zdarzenia z kalendarza, skany QR kodów z aplikacji mobilnej, przyciski z kontrolerów podłaczonych do bramki.

### Automatyzacja wyzwalana zdarzeniem z kalendarza

Kalendarza można używać jako zewnętrznego harmonogramu zdarzeń / komend do wykonania w sytemie zamiast kodowania ich na stałe w automatyzacjach.

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
**Integracja jest w trakcie weryfikacji po stronie Google.** Dostarczyliśmy wszystkie wymagane rzeczy, ale to czy i kiedy Google zatwierdzi naszą integrację, nie jest jeszcze ustalone. Jesteśmy w kontakcie z "The Google Cloud Trust & Safety Team" i na bieżąco wyjaśniamy, jak działa nasza integracja i do czego ma służyć użytkownikom.
:::

Nie znaczy to jednak, że przyszłość integracji Kalendarze AIS nie jest jeszcze pewna i może zniknąć z Asystenta domowego.
Kalendarz jako sposób wyzwalania automatyzacji ma szanse być prostrzym sposobem na harmonogramowanie zdaań w Asystencie domowym (sterowanie ogrzewaniem itp.). Dlatego jeżeli nie dostaniemy autoryzacji od Google lub integracja nie będzie działać prawidłowo, to postawimy własny kalendarz CalDAV w portalu integratora.


![AIS scan](/img/en/frontend/ais_calendars_3.png)

Opis jak dodać integrację [AIS Kalendarze](/docs/ais_app_ai_integration_google_calendars)


## ![](/img/en/blog/202007/zigbee.png) Zigbee2Mqtt 1.16.1

Sporo poprawek i ulepszeń, oraz oczywiście obsługa nowych urządzeń. Opis całego wydania dostępny na stronie projektu:  https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.16.0

![](/img/en/blog/202011/z2m.png)



## ![](/img/en/blog/202005/tasmota_small.png) Tasmota v9.1.0 Imogen

Cała lista zmian, nowości i poprawek dostępna jest na stronie projektu Tasmota: https://github.com/arendst/Tasmota/releases/tag/v9.1.0

Nasze kompilacje udostępniamy są tu: https://github.com/sviete/AIS-Tasmota/tree/firmware

Pracujemy nad uproszczeniem dodawania urządzeń do bramki oraz automatycznej aktualizacji oprogramowania w urządzeniach.W portalu integratora można zobaczyć przypisane do bramki urządzenia z naszą kompilacją oprogramowania Tasmota:
![Home Assistant](/img/en/blog/202011/iot.png)

Pracujemy nad tym, żeby dołączenie nowego urządzenia z oprogramowaniem AIS Tasmota było jeszcze łatwiejsze podobnie jak jego aktualizacja. Szczegóły pojawią się przy kolejnych wydaniach systemu.

## ![](/img/en/blog/202007/hass.png) Home Assistant 0.117.6


Najnowszy (stabilny) Home Assistant 0.117.6, cała lista nowości dostępna jest na stronie projektu: [Home Assistant 0.117.6](https://www.home-assistant.io/blog/2020/10/28/release-117/)



![Home Assistant](/img/en/blog/202011/ha_social.png)



----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)

##### AI-Speaker 09/2020
