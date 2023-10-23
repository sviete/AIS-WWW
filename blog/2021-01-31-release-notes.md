---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Celina
tags: ["ais dom", "home assistant", "zigbee2mqtt"]
---

<div class="IntroAisBlogMenu" >
<div>

![AIS](/img/en/blog/202101/celina.png)

</div>

<h2>Ewolucja</h2>

</div>

![AIS Aplikacja mobilna](/img/en/blog/202101/mob_app.png) Aplikacja Mobilna ![AIS Kamery](/img/en/blog/202101/camera.png) Kamery ![AIS Media Cast](/img/en/blog/202101/mobile-request.png) Przekierowanie mediów ![AIS Zigbee2Mqtt](/img/en/blog/202101/zigbee.png) Zigbee2Mqtt ![AIS TV](/img/en/blog/202101/tv.png) Sterowanie TV ![AIS TTS](/img/en/blog/202101/tts_icon.png) Tekst powitalny ![AIS HA](/img/en/blog/202101/hass.png) Asystent domowy ![AIS Edit](/img/en/blog/202101/bridge.png) MQTT bridge

<!--truncate-->


## ABC bezproblemowej aktualizacji

:::tip Kopia zapasowa.
### ![A](/img/en/blog/202009/alpha-a-circle.png) Kopia zapasowa.

UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important Konsola i logi na bramce.
### ![B](/img/en/blog/202009/alpha-b-circle.png)Konsola i logi na bramce.

W razie problemów z aktualizacją, sprawdź procedurę [Aktualizacja z konsoli](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step).
To może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution Poczekaj cierpliwie.
### ![C](/img/en/blog/202009/alpha-c-circle.png) Cierpliwość. Pierwsze uruchomienie po aktualizacji trwa dłużej - poczekaj cierpliwie.

 **Po aktualizacji pierwsze uruchomienie może trwać nawet 20 minut.**
 W tym czasie aktualizowane są biblioteki do integracji dodanych na bramce i baza danych jest migrowana do nowego formatu.
 **Poczekaj cierpliwie na zakończenie aktualizacji.**
:::

## ![](/img/en/blog/202101/celina.png) Ewolucja

:::caution Animacje.
Animacje wyświetlą się tylko na ekranach o szerokości co najmniej 600px. Mogą nie być wyświetlane na telefonie.
:::

Asystent domowy i AI-Speaker konsekwentnie ewoluuje i przekształca się z oprogramowania poprzez bramkę w głośnik. Jesteśmy na ostatniej prostej, dokładnie tu:

<div className="shapeshifter play"></div>

Do pełnej realizacji planu brakuje nam tego ostatniego kroku, w którym bramka staje się głośnikiem:

<div className="shapeshifter2 play"></div>


Kwestią dyskusyjną nie jest już, czy AIS wyda głośnik, ale de facto ;) kiedy AIS wyda głośnik.
Jak niewiele brakuje, żeby te elementy połączyć w całość, pokażemy już za kilka tygodni (na 99% jeszcze w lutym 2021), kiedy wydamy KIT do przerobienia bramki w głośnik.

Tak jak zapowiadaliśmy, opublikujemy szczegółową instrukcję tak, żeby każdy mógł sam kupić potrzebne elementy (niekoniecznie od nas - bo nawet nie będziemy mieli dużo takich zestawów) i przerobić bramkę w głośnik.
Na forum można poczytać o szczegółach [Projekt DEV KIT głośnik](https://ai-speaker.discourse.group/t/dev-kit-glosnik-ankieta/1108)


![](/img/en/blog/202101/dev-kit.jpeg)

## ![](/img/en/blog/202012/mob_app.png) Aplikacja mobilna 2.0.2.CamCast

Najnowsza aplikacja AIS dom to kolejne uproszczenia i nowe możliwości.

Ponieważ aplikacja działa na różnych urządzeniach (od zegarka poprzez telefon, tablet do TV), to żeby łatwiej było wybrać, w jaki sposób chcemy ją wykorzystywać, dodaliśmy możliwość włączania dodatkowych funkcjonalności w zależności od tego, do czego chcemy używać aplikacji.
Oczywiście moglibyśmy to robić automatycznie w zależności od typu urządzenia, ale nie chcemy nikogo ograniczać i narzucać "jedynie słusznego rozwiązania". Dzięki temu można użyć starego telefonu jako panelu sterowania (a nie tylko tabletu) itd.

![Mob](/img/en/frontend/mob_special_functions.png)

O wszystkich funkcjonalnościach aplikacji można przeczytać w aktualnej dokumentacji:
- [AIS dom Mobile](/docs/ais_app_android_dom_mob)
- [AIS dom Panel](/docs/ais_app_android_dom_tablet)


Nazwa aplikacji to 2.0.2.CamCast bo w tej wersji dodaliśmy przekierowywanie treści video i obrazu z kamer z bramki do aplikacji AIS dom.
Żeby aplikacja AIS dom była zdalnym odtwarzaczem należy ją dodać za pomocą kreatora integracji [Dodanie odtwarzacza do bramki](/docs/ais_app_player#dodanie-odtwarzacza-do-bramki)

![AIS Radio](/img/en/frontend/ais_exo_player_add_new2.png)

Na wbudowany odtwarzacz mediów w aplikacji AIS dom, można teraz przekierowywać z bramki już nie tylko audio, tak jak jest to opisane tu [Przekierowanie Mediów](/docs/ais_app_player#przekierowanie-mediów)

![Smart glass ustawienia](/img/en/frontend/redirect_media_to_client_gate.png)


ale też wideo wraz z audio z kamer:

![Mob](/img/en/frontend/video_doorbell.png)


:::caution UWAGA przekirowanie obrazu z kamery nie jest jeszcze proste
W opisie [API bramki](/docs/ais_bramka_api_index), w zasobie ```command``` umieściliśmy opis i składnię komendy ```showCamera``` która realizuje tę funkcjonalność.
Ta komenda dostepna też jest jako usługa na bramce ```redirect_camera_stream```
Funkcjonalność ta będzie docelowo łatwo wywoływana z poziomu aplikacji (bez potrzeby użycia API).
:::


## ![](/img/en/blog/202101/tv.png) Sterowanie TV


Jeżeli podłączymy bramkę do TV lub monitora to możemy teraz zdalnie (z przeglądarki lub aplikacji AIS dom) sterować aktywnościami/ekranami na bramce:

![Gate to tv](/img/en/frontend/gate_to_tv.jpeg)

W ten sposób możemy odtwarzać treści wideo z serwisów lub kamer.

Na forum dodaliśmy opis w jaki sposób bramka może sterować urządzeniemi podłączonymi po HDMI za pomocą funkcji HDMI-CEC [HDMI-CEC sterowanie urządzeniami podłączonymi po HDMI](https://ai-speaker.discourse.group/t/hdmi-cec-sterowanie-urzadzeniami-podlaczonymi-po-hdmi/1254)


![Gate to tv](/img/en/blog/202101/cec.jpeg)

Połączenie tych funkcjonalności pozwala na wykonanie wideodomofonu. W przyszłości udostępnimy to w formie szablonu automatyzacji.


## ![](/img/en/blog/202101/tts_icon.png) Tekst powitalny


W [Konfiguracja bramki - ustawienia głosu asystenta](/docs/ais_bramka_configuration_tts) dodaliśmy możliwość zdefiniowania lub wyłączenia (definiując pusty tekst) tekstu powitalnego.

![Oprogramowanie bramki](/img/en/bramka/config_ais_dom_section4.jpeg)


## ![](/img/en/blog/202101/zigbee.png) Zigbee2Mqtt


Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.7.0
Sporo poprawek i oczywiście wsprawcie dla nowych urządzeń, wszystkie szczegóły tu [1.17.0](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.17.0)

Dodaliśmy możliwość zmiany konfiguracji zigbee2mqtt oraz restartu serwisu zigbee z poziomu aplikacji:

![Oprogramowanie bramki](/img/en/blog/202101/zigbee_config.png)

Może to być pomocne w przypadku problemów i do zmiany kanału, na którym działa zigbee:
Szczegóły w dokumentacji [AIS Zigbee2MQTT](/docs/ais_app_integration_zigbee)
i na forum: [Zigbee2mqtt cc2531 - przestało działać
](https://ai-speaker.discourse.group/t/zigbee2mqtt-cc2531-przestalo-dzialac/743/93)



## ![](/img/en/blog/202101/hass.png) Asystent domowy

Najnowsza wersja Asystenta domowego, czyli naszego pakietu ``ais-dom`` bazującego na najnowszym stabilnym Home Assistant Core.

![Asystent domowy](/img/en/blog/202101/ha_social.png)

Szczegółowy opis zmian w Home Assistant dostępny na blogu projektu Home Assistant: [2021.1: Happy New Year!](https://www.home-assistant.io/blog/2021/01/06/release-20211/)


## ![](/img/en/blog/202101/bridge.png) MQTT bridge

Tak jak zapowiedzialiśmy na forum [Budujemy mosty](https://ai-speaker.discourse.group/t/kolejna-celina-beta-wydana/1277)

![MQTT Bridge](/img/en/blog/202101/mqtt_bridge.jpeg)

Pozwoli to na łatwą integrację z SUPLA Cloud, porozumieliśmy się w tej sprawie z zespołem SUPLA i otrzymaliśmy dostęp do wykonania takiej integracji.
W kolejnej wersji skupimy się na tym temacie tak, żeby cała integracja sprowadziła się do kilku kliknięć w aplikacji.


Gdyby ktoś chciał już testować integrację z MQTT Supla to w konfiguracji MQTT dodaliśmy możliwość zmiany konfiguracji brokera MQTT z poziomu aplikacji

 ![MQTT](/img/en/integrations/mqtt_edit_mosquito_config.png)


 Więcej informacji w dokumentacji: [Konfiguracja brokera mqtt](/docs/ais_app_integration_mqtt#konfiguracja-brokera-mqtt)




-------

##### AI-Speaker 01/2021
