---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.103 Zigbee
---

## Wersja systemu 0.103.8 z dnia 15 stycznia 2020, Zigbee!


![](/img/en/blog/202001/zigbee2mqtt_logo.png)

W tej wersji dodaliśmy możliwość łatwego korzystania z urządzeń **Zigbee bez potrzeby stosowania bramek producentów**.
<!--truncate-->
Rozwiązanie oparte jest na projekcie [Zigbee2MQTT](https://www.zigbee2mqtt.io/). I jest całkowicie zintegrowane z naszym oprogramowaniem, dzięki czemu możesz łatwo dodać swoje urządzenia Zigbee do całej infrastruktury inteligentnego domu działającej na systemie Asystent domowy.

Integracja sprowadza się do włożenia do portu USB [odpowiednio zaprogramowanego](https://www.zigbee2mqtt.io/getting_started/flashing_the_cc2531)  urządzenia CC2531.
Asystent domowy sam [rozpozna to urządzenie USB](/docs/ais_app_integration_usb#zigbee-usb-sniffer), poinformuje głosowo, że uruchamia serwis Zigbee i automatycznie pojawi się nowa opcja w aplikacji.


![Zigbee2MQTT](/img/en/blog/202001/zigbee2mqtt_new_menu.png)

Więcej w [naszej dokumentacji integracji Zigbee](/docs/ais_app_integration_zigbee)

Na stronie projektu Zigbee2MQTT możesz sprawdzić [listę **(około 500 urządzeń, 100 producentów)**](https://www.zigbee2mqtt.io/information/supported_devices) urządzeń, które są wspierane.

## Społecznościowe forum AI-Speaker!

Na prośbę użytkowników dodajemy możliwość komentarzy pod postami i być może powstanie z tego forum -jeżeli będą chętni, żeby prowadzić na nim dyskusję i pomagać innym użytkownikom.
Niebawem zaprosimy wszystkich do dodawania konta i zachęcimy do brania udziału w dyskusjach, już teraz można zapoznać się z zasadami, które zaproponowaliśmy na początek: https://ai-speaker.discourse.group/t/witamy-na-spolecznosciowym-forum-ai-speaker/28

Chcemy pomóc zbudować to miejsce i oddać je społeczności - użytkownicy, którzy zaangażują się i będą publikować, zostaną automatycznie promowani na moderatorów / administratorów.

Jeśli masz projekt związany z Asystentem domowym, który wykonałeś i masz ochotę go opisać dla innych to będziemy bardzo wdzięczni 🥰
Wszystkich którzy mają ochotę opublikować swój projekt zapraszamy do sekcji **Projekty** https://ai-speaker.discourse.group/c/projekty im więcej ciekawych rzeczy opublikujemy tym większa szansa, że to miejsce będzie żyło i się rozwijało.



![Discourse](/img/en/blog/202001/discourse_manifest.png)


## Standaryzacja portów

Usługi działające na bramce będą dostępne na tych samych portach co dotychczas a dodatkowo na standardowych (dobrze znanych) portach.
Jak to dokładnie działa wyjaśniamy [na forum](https://ai-speaker.discourse.group/t/dlaczego-porty-uslug-dzialajacych-na-bramce-sa-niestandardowe/57)

Nazwa      | Protokół | Porty | Komenda/URL                                               | Opis
----       | ----     | ------- | -------                                                | -----------
 Aplikacja | http     | **80** / `8180`  | [http://ais-dom.local](http://ais-dom.local) | serwer http
 FTP       | ftp      | **21** / `1024`  | [ftp://ais-dom.local](ftp://ais-dom.local)   | serwer ftp
 SSH       | ssh      | **22** / `8022`  | ```ssh ais-dom```         | serwer ssh
 MQTT      | mqtt     | **1883**  | ```mosquitto_sub -h ais-dom.local -t '#'```     | serwer mqtt

## Kopia zapasowa ustawień

W konfiguracji oprogramowania bramki dodaliśmy opcję wykonywania i przywracania [kopii zapsowej konfiguracji bramki](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji)

W tym miejscu możesz, sprawdzić poprawność ustawień bramki, wykonać jej kopię i przesłać ją do portalu integratora. Ponieważ konfiguracja może zawierać hasła i tokeny dostępu do usług, zalecamy zaszyfrować ją hasłem. Gdy kopia jest zabezpieczona hasłem, to można ją otworzyć/przywrócić tylko po podaniu hasła.

![Oprogramowanie bramki](/img/en/bramka/config_ais_dom_section1_2.png)


## Audio w osobnym panelu

Widok audio przenieśliśmy do osobnego panelu w aplikacji.

![Audio panel](/img/en/blog/202001/audio_new_tab.png)

Od tej wersji będziemy dostarczali/blokowali tylko jeden widok, na którym prezentujemy przykładowe karty.

![Audio panel](/img/en/blog/202001/default_view.png)


## Rozpoznwanie urządzeń USB

Na bramce dostarczamy działającą w tle usługę USB, której celem jest wykrywanie zmian stanu urządzeń USB (połączenie i rozłączanie). Usługa monitoruje zdarzenia za pomocą mechanizmu inotify dostępnego w systemie Linux, następnie zmienia je w format zrozumiały dla Asystenta domowego. Dzięki temu Asystent domowy powiadamia komunikatem głosowym o tym, jakie urządzenie zostało dodane i jeżeli obsługa danego urządzenia jest wspierana, to Asystent wykona dalsze akcje związane z obsługą danego urządzenia, takie jak:
- dodanie dysków
- uruchomienie karty audio
- uruchmienie serwsisu do obsługi Zigbee

Więcej w dokumentacji [USB rozpoznawanie urządzeń](/docs/ais_app_integration_usb)

![HID USB](/img/en/bramka/usb_integration_zigbee.png)


## Dodawanie zdalnych dysków FTP

W odpowiedzi na pomysł obsługi dysków sieciowych zgłoszony na forum [Integracja z dyskiem sieciowym w sieci lokalnej](https://ai-speaker.discourse.group/t/integracja-z-dyskiem-sieciowym-w-sieci-lokalnej/94) dodaliśmy obsługę FTP i opisaliśmy technicznie jak działa Rclone, które dostarczamy na bramce do obsługi dysków zdalnych [Dyski sieciowe - Rclone](https://ai-speaker.discourse.group/t/dyski-sieciowe-rclone/97)

![FTP1](/img/en/blog/202001/rclone_ftp.png)
![FTP2](/img/en/blog/202001/rclone_ftp2.png)

## Autentykacja PIN w aplikacji

W przypadku systemu Wear OS najłatwiej wykonać konfigurację z bramką za pomocą jednorazowego kodu PIN.

Proces jest bardzo prosty, wystarczy w sekcji **Szyfrowany tunel** wybrać opcję **GENERUJ KOD PIN**

![Automatyzacje](/img/en/frontend/ais_dom_wizard_4_wear_apk.png)

następnie kod, który się pojawi, należy przepisać w aplikacji Wear (masz na to 2 minuty)

![Automatyzacje](/img/en/frontend/ais_dom_wizard_5_wear_apk.png)

Całość opisana jest w [AIS dom Wear OS](/docs/ais_app_android_dom_wear)


## Rozbudowa nawigacji pilotem

Do pozycji menu **Dom** dodaliśmy grupę **Sceny**, w której znajdują się wszystkie zdefiniowane sceny w systemie i można je uruchamiać pilotem.

Oraz grupę **Urządzenia**, w tej grupie mamy teraz następujące pozycje:
- Przełączniki
- Światła
- Czujniki
- Termostaty
- Zasłony
- Odkurzacze
- Zamki
- Kamery
- Wentylatory


## TAURON - pobieranie informacji o energii oddanej do sieci

Zaktualizowaliśmy integrację TAURON autorstwa [Piotra Machowskiego](https://github.com/PiotrMachowski/Home-Assistant-custom-components-Tauron-AMIplus) o pobieranie danych o energii oddanej do sieci.

Dane pobierane są do 6 sensorów:
- Roczne zużycie energii
- Miesięczne zużycie energii
- Dzienne zużycie energii
- Energia oddana do sieci w ciągu roku
- Energia oddana do sieci w ciągu miesiąca
- Energia oddana do sieci w ciągu dnia

Takie dane zestawione z danymi o produkcji prądu ułatwiają nam zorientowanie się, czy mamy nadwyżkę prądu oddaną do sieci - przydatne, gdy mamy nadprodukcje i możliwość jej zużycia, przez np. dogrzanie się prądem w zimie i zaoszczędzenie na gazie.

![Integracja TAURON](/img/en/frontend/integration_tauron_4.1.png)

## Home Assistant

Najnowszy (stabilny) [Home Assistant 0.103.0](https://www.home-assistant.io/blog/2019/12/11/release-103/)

Z ciekawych rzeczy, które bardzo nam się przydadzą, to możliwość definiowania/edycji automatyzacji z aplikacji w formacie YAML. Każdy pojedynczy wyzwalacz, warunek lub akcję można edytować jak YAML. Umożliwia to definiowanie bardzo skomplikowanych automatyzacji w edytorze automatyki i umożliwia szybkie kopiowanie części automatyzacji.


![Asystent](/img/en/blog/202001/automatuon_yaml_editor.png)


----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)

AI-Speaker 01/2020
----
