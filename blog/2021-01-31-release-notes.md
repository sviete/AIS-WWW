---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Celina
tags: [ais dom, home assistant, zigbee2mqtt]
---

<div class="IntroAisBlogMenu" >
<div>

![AIS](/img/en/blog/202101/celina.png)

</div>

<h2>Ewolucja</h2>

</div>

![AIS Aplikacja mobila](/img/en/blog/202101/mob_app.png) Aplikacja Mobila ![AIS Kamery](/img/en/blog/202101/camera.png) Kamery ![AIS Media Cast](/img/en/blog/202101/mobile-request.png) Przekirowanie mediów ![AIS Zigbee2Mqtt](/img/en/blog/202101/zigbee.png) Zigbee2Mqtt

![AIS TV](/img/en/blog/202101/tv.png) Sterowanie TV ![AIS Edit](/img/en/blog/202101/edit.png) Edycja konfiguracji ![AIS Edit](/img/en/blog/202101/bridge.png) MQTT bridge ![AIS HA](/img/en/blog/202101/hass.png) Home Assistant
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

## ![](/img/en/blog/202101/celina.png) Ewolucja

:::caution Animacje.
Animacje wyświetlą się tylko na ekranach o szerokości co najmniej 600px. Mogą nie być wyświetlane na telefonie.
:::

Asystent domowy i AI-Speaker powolij i konsekwentnie ewoluuje i przekształca się z oprogramowania do głośnika.
Jesteśmy na ostatniej prostej, dokładnie tu:

<div className="shapeshifter play"></div>


Do pełnej realizacji planu brakuje nam tego ostatniego kroku w którym bramka staje się głośnikiem:
<div className="shapeshifter2 play"></div>



## ![](/img/en/blog/202012/mob_app.png) Aplikacja mobilna 2.0.2.CamCast

1. Kilka poprawek i optymalizacji.
Największa poprawka dotyczy wysyłania komend głosowych w sieci lokalnej, przy wyłączonym tunelu i przy podaniu w parametrach połączenia z bramką jej identyfikatora (a nie lokalnego adresu URL).
Okazało się, że jest tu błąd - dzięki za zgłoszenia. To już powinno działać OK.

2. Ulepszone sterowanie głośnością bramki (głośnika AIS) za pomocą przycisków vol+ / vol- w aplikacji mobilnej.

![App VOL](/img/en/blog/202012/mob_app_vol.png)

3. Nowe wytrenowane Wake / Hot Word-y

![Hey Maya](/img/en/blog/202012/mob_app_hot_word.png)

Funkcjonalność nadal w menu eksperymentalnym w aplikacji mobilnej.
Więcej informacji na forum [Trenujemy nowe Wake / Hot Word-y](https://ai-speaker.discourse.group/t/trenujemy-nowe-wake-hot-word-y/1075)

![Hey Maya](/img/en/blog/202012/hey_maya.png)


## ![](/img/en/blog/202012/christmas-tree.png) Życzymy Wszystkim spełniania marzeń w 2021!

**W 2021 wydawać będziemy wersję raz na miesiąc.** 

Pierwsze wydanie BETA będzie w pierwszą środę każdego miesiąca, a wydanie na kanale STABILNYM będzie w ostatnią środę każdego miesiąca.

![Calendar](/img/en/blog/202012/calendar_releases.png)

-------

##### AI-Speaker 12/2020
