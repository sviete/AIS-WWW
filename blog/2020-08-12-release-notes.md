---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.113.4
tags: ["location", "gps", "demo", "home assistant", "zigbee2mqtt", "apk api"]
---

# 0.113.4 Gdzie jest Jolka?

- ![GPS](/img/en/blog/202008/spy.png) Raportowanie adresu [...](/blog/2020/08/12/release-notes#location-raportowanie-adresu)
- ![Komendy](/img/en/blog/202007/mobile-request.png) Zdalne zapytania o aktualną lokalizację osoby [...](/blog/2020/08/12/release-notes#komendy-zdalne-zapytania-i-komendy) 
- ![Demo](/img/en/blog/202008/demo_icon.png) DEMO Aplikacji [...](/blog/2020/08/12/release-notes#demo-demo-aplikacji)
- ![Tasmota](/img/en/blog/202005/tasmota_small.png) Tasmota 8.4.0 George [...](/blog/2020/08/12/release-notes#tasmota-tasmota-840-george)
- ![Zigbee](/img/en/blog/202007/zigbee.png) Zigbee2Mqtt 1.14.2 [...](/blog/2020/08/12/release-notes#zigbee-zigbee2mqtt-1142)
- ![EXTA LIFE](/img/en/blog/202007/exta_life.png) Najnowsza wersja integracji EXTA LIFE [...](/blog/2020/08/12/release-notes#exta-life-najnowsza-wersja-integracji-exta-life)
- ![Home Assistant](/img/en/blog/202007/hass.png) Home Assistant 1.13.3 [...](/blog/2020/08/12/release-notes#home-assistant-nowy-home-assistant)


<!--truncate-->

## ABC bezproblemowej aktualizacji

:::tip A Kopia zapasowa.
UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important B Konsola i logi.
W razie problemów z aktualizacją, sprawdź procedurę [Aktualizacja z konsoli](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step).
To może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution C Pierwsze uruchomienie po aktualizacji
 **Po aktualizacji pierwsze uruchomienie może trwać nawet 20 minut.**
 W tym czasie aktualizowane są biblioteki do integracji dodanych na bramce i baza danych jest migrowana do nowego formatu.
 **Poczekaj cierpliwie na zakończenie aktualizacji.**
:::


## ![Location](/img/en/blog/202008/spy.png) Raportowanie adresu


Istnieją różne sposoby wykrywania obecności w systemie Asystent domowy. Wiemy, że nie każdy jest w stanie zrozumieć webhooki, api... i inne techniczne zawiłości, dlatego dodaliśmy łatwe raportowanie lokalizacji z naszej aplikacji AIS dom bezpośrednio do bramki w domu.

![Location](/img/en/blog/202008/presence_detection_00.png)

W dokumentacji wyjaśniamy jak skonfigurować [wykrywanie obecności i stowrzyć automatyzację opartą na strefach](/docs/ais_bramka_presence_detection). 

Dodaliśmy też nową komendę [sprawdzenie lokalizacji osoby](/docs/ais_app_assistent_commands/#sprawdzenie-lokalizacji-osoby), czyli wystarczy zapytać 

```text
Gdzie jest {osoba}
```
lub

```text
Lokalizacja {osoba}
```

żeby otrzymać informację o lokalizacji. Jest to najbardziej aktualna lokalizacja zaraportowana do bramki z powiązanych z osobą urządzeń śledzących.
Przesyłamy z aplikacji kilka danych dotyczących lokalizacji, także adres osoby (jeśli uda się go ustalić po współrzędnych). W ten sposób odpowiedź na pytanie "Gdzie jest osoba x" jest bardziej informacyjna.

![Location](/img/en/blog/202008/person_info.png)


:::info Ta funkcjonalność wymaga aplikacji AIS dom w wersji 1.4.4 lub nowszej.
Oczywiście to, czy dane o adresie będą wysyłane, zależy od tego, czy:

1. Przyznasz uprawnienia do sprawdzania lokalizacji dla aplikacji AIS dom
2. Włączysz serwis raportujący lokalizację
3. Uda się ustalić adres dla wykrytych współrzędnych (jeżeli nie, to wysyłamy do bramki same współrzędne z GPS)
:::



## ![Komendy](/img/en/blog/202007/mobile-request.png) Zdalne zapytania i komendy

Możemy z bramki wysłać komendę do aplikacji mobilnej i np. zapytać o aktualną lokalizację osoby. 

Na bramce dostępna jest usługa ``ais_ai_service.mob_request``, która umożliwia wysłanie z bramki komendy (zapytania/żądania) do aplikacji mobilnej **AIS dom**.
Dzięki temu za pomocą automatyzacji możemy zdalnie z bramki zapytać o aktualną lokalizację urządzenia (włączyć zdalnie raportowanie lokalizacji).

Opis dostępnych komend znajduje się w dokumentacji Komendy wysyłane z bramki do aplikacji mobilnej


:::caution UWAGA
Można z bramki (do której jesteśmy zalogowani) wysłać komendę do urządzenia mobilnego i zdalnie włączyć raportowanie lokalizacji lub mikrofon, **tylko jeśli włączony jest stosowny dostęp (do mikrofonu i/lub lokalizacji) na urządzeniu mobilnym**.

Pokazujemy w powiadomieniu, że taka zdalna komenda jest uruchomiona - żeby było to jasne dla właściciela urządzenia.
:::


## ![Demo](/img/en/blog/202008/demo_icon.png) DEMO Aplikacji


Trwają dalsze prace nad dodaniem [DEMO aplikacji Asystent domowy](https://demo.ai-speaker.com/), na którym prezentujemy podstawowe możliwości Asystenta domowego.
Chcemy zaprezentować na osobnych widokach podstawowe encje*, jakie są dostępne w Asystencie domowym. 

*Encje to reprezentacje urządzeń (najczęściej), każda encja definiuje możliwości danego typu urządzenia.
Dzięki temu użytkownik, który sprawdzi jak w systemie działa sterowanie żarówką firmy np. IKEA, będzie wiedział, że tak samo zadziała sterowanie żarówką PHILIPS itd. (bez względu na protokoły i API użyte przez producentów tych urządzeń).

![DEMO](/img/en/blog/202008/demo.png)

Demo z założenia ma być interaktywne - można kliknąć i sterować urządzeniami albo powiedzieć komendę i wypróbować jak działa. Dodatkowo planujemy pokazać na kamerze efekt tego, co robimy w systemie - demo podłączone jest do prawdziwych urządzeń.

Encje, które opisujemy na początku, to:
- Air Quality
- Alarm Control Panel
- Binary Sensor
- Cam
- Climate
- Cover
- Device tracker
- Fan
- Light
- Lock
- Media Player
- Person
- Remote
- Sensor
- Switch
- Vacuum
- Water Heater
- Weather


## ![Tasmota](/img/en/blog/202005/tasmota_small.png) Tasmota 8.4.0 George

Wydaliśmy kolejną kompilację oprogramowania do urządzeń IoT na bazie ESP8266. 

Jak zwykle doszło kilka poprawek i ulepszeń, opisujemy je wszsytkie na naszym forum:
https://ai-speaker.discourse.group/t/ais-tasmota-v8-4-0-george/640

Największa zmiana to dodanie większej ilości kompilacji. Wszystkie warianty dostępne są w naszym serwisie [Github FIRMWARE](https://github.com/sviete/AIS-Tasmota/tree/firmware)

![AIS Tasmota](/img/en/blog/202008/ais_tasmota.png)

Doszła też kompilacje dla ESP32, na razie jeszcze eksperymentalnie, ale już widzimy, że Tasmota jest bardziej stabilna i ma większe możliwości niż inne rozwiązania dla ESP32. 
Mamy nadzieję, że zaowocuje to niebawem wieloma fajnymi dodatkami do Asystenta domowego :)
![AIS ESP32](/img/en/blog/202008/ESP32.png)



## ![Zigbee](/img/en/blog/202007/zigbee.png) Zigbee2Mqtt 1.14.2

Głównie poprawki działania, ale też jak zwykle nowe urządzenia. Cały log zmian znajdziecie tu:
[![AIS zigbee2mqtt](/img/en/blog/202008/zigbee2mqtt.png)](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.14.2)


## ![EXTA LIFE](/img/en/blog/202007/exta_life.png) Najnowsza wersja integracji EXTA LIFE

Cytując dgtal1
> Kolejna wersja integracji z kilkoma poprawkami oraz dodanym wsparciem dla obsługi urządzeń z serii Exta Free, tych, które oficjalnie wspiera oprogramowanie kontrolera EFC-01.
Cały log zmian tu:
[![AIS exta](/img/en/blog/202008/exta.png)](https://github.com/dgtal1/extalife_custom_component/releases/tag/2.0b2)


## ![Home Assistant](/img/en/blog/202007/hass.png) Nowy Home Assistant


Najnowszy (stabilny) [Home Assistant 0.113.3](https://www.home-assistant.io/blog/2020/07/22/release-113/)
Poprawki w automatyzacji - opisane na naszym forum: https://ai-speaker.discourse.group/t/0-113-beta-wydana/594

![Home Assistant](/img/en/blog/202008/ha_0.13.3.png)



----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)
AI-Speaker 07/2020
----
