---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.100.4 Google Home
---

## Wersja systemu 0.100.4 z dnia 30 października 2019 roku,

## Google Home

Integracja z [Google Home](/docs/ais_app_ai_integration_google_home)

Dostarczamy **AIS Google Home** integrację Asystenta domowego z platformą programistyczną dla Asystenta Google.
Integracja działa poprzez oficjalne [Google Assistant SDK](https://developers.google.com/assistant) i pozwala na wysyłanie poleceń i zadawanie pytań do Asystenta Google z poziomu Asystenta domowego.

![Konfiguracja AIS Google Home](/img/en/bramka/ais_google_home_1.png)

<!--truncate-->
Czyli [Asystentka Jolka](/docs/ais_app_ai_integration) działa lokalnie i ogarnia rzeczy w Twoim domu, a jeśli chcesz możesz włączyć Assystenta Google i uzyskać na bramce funkcjonalność urządzenie typu Google Home 🥳

W przypadku gdy zapytasz o coś lub wyślesz komendę do Asystenta Google to dostaniesz oryginalną odpowiedz audio zwracane przez serwis Google Assistant. Więc możesz rozmawiać z dwoma asystentami na raz 👧 👨 🚀


## Android SDK

Wszystkie zostały zmigrowane do SdkVersion 28.
Przy okazji odświeżyliśmy wygląd w kilku miejscach w aplikacjach a w dokumentacji dodaliśmy opis aplikacji wraz z linkami do kodu źródłowego w repozytorium.

![AIS dom APK](/img/en/frontend/ais_launcher_apk_screen.png)


## Wygląd aplikacji

### Poprawiony tryb nocny

Sebastian poprawił kolory w trybie nocnym
![AIS dom Tryb nocny](/img/en/blog/ais_dom_dark_mode_colors.png)

### Definicję własnego interfejsu

Nasz użytkownik Darek dostarczył nam ciekawy sposób, na definicję własnego interfejsu oraz dodatkowo opisał fajne rozwiązania z kalendarzem.
[link do opisu w dokumentacji](/docs/ais_app_ui_config#własny-interfejs-użytkownika).
Dziękujemy i zachęcemy każdego do edycji dokumentacji [Zaangażuj się](/docs/ais_faq_where_is_the_code#zaangażuj-się) 🥰


## Zrób coś, gdy...

Najnowszy (stabilny) Home Assistant <a href="https://www.home-assistant.io/blog/2019/10/10/release-100/" target="_blank">0.100</a> a w nim jak zwykle sporo nowości w tym możliwość rozpoczęcia definiowania automatyzacji z poziomu urządzenia.


![Automatyzacja urządzenia](/img/en/blog/automation_from_device.png)


## Tasmota++

Częstym pytaniem które się ostatnio pojawia jest działanie z urządzeniami z oprogramowaniem Tasmota.
W FAQ dodaliśmy sekcję [Kompatybilność z Tasmota](/docs/ais_faq_iot_ap_mode) gdzie wyjaśniamy, że **na bramce jest broker MQTT dlatego każde urządzenie, które rozumie MQTT może działać z Asystentem domowym**.
Opisujemy też jak to działa oraz jak to staramy się robić, żeby było najłatwiej jak się da!

PS
Dodaliśmy też najnowszą wersję oprogramowania do urządzeń AIS dom, piękne kolory w konsoli to nie wszystko ;) w FAQ opisujemy też [jakie ułatwienia dostarczamy](/docs/ais_faq_iot_ap_mode#jakie-ułatwienia-dostarczamy)  


![Reset 5](/img/en/iot/iot_device_menu_upgrade_6.png)


----
Zapraszamy do aktualizacji!
AI-Speaker 10/2019
