---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.109.7
tags: [:notifications", "tasmota", "zigbee", "home assistant"]
---

# 0.109.7 Powiadomienia, Tasmota, Zigbee

- ![Powiadomienia](/img/en/blog/202005/megaphone.png) Powiadomienia z bramki... nielimitowane! :)
- ![Tasmota](/img/en/blog/202005/tasmota_small.png) Aktualizacja AIS-Tasmota, oprogramowania do urządzeń WiFi, [1261 urządzeń](https://templates.blakadder.com/index.html)
- ![Zigbee](/img/en/blog/202004/honeybee.png) Aktualizacja Zigbee2Mqtt, [741 urządzenia od 133 różnych producentów](https://www.zigbee2mqtt.io/information/supported_devices.html)
- ![SUPLA](/img/en/blog/202005/supla.png) Konfiguracja ilości zapytań do serwisu SUPLA
- ![Icons](/img/en/blog/202004/house.png) Nowy Home Assistant



<!--truncate-->

:::tip Wskazówka
UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important informacja
W razie problemów po aktualizacji sprawdź procedurę [Aktualizacja z konsoli](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step)- to może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution Uwaga
Po aktualizacji zalecamy reset domyślnej konfiguracji interfejsu, lub ręczne poprawienie wyświetlania encji ``sensor.aisknowledgeanswer``, dokładny opis na forum: https://ai-speaker.discourse.group/t/beta-nowa-wersja-0-109-wydana-na-kanale-beta/423/47
:::


## ![Powiadomienia](/img/en/blog/202005/megaphone.png) Powiadomienia z bramki

Na bramce dostępna jest nowa usługa ais_ai_service.mob_notify, która umożliwia wysłanie z bramki powiadomienia do aplikacji mobilnej AIS dom.
Dzięki temu za pomocą automatyzacji możemy informować o zdarzeniach w naszym domu wybraną aplikację mobilną.

Powiadomienia są nielimitowane, mogą zawierać zdjęcie oraz tekst do przeczytania.
Opis funkcjonalności dostępny jest w dokumentacji Powiadomienia z bramki

![Notify](/img/en/frontend/gallery_notify_1.png)

![Notify](/img/en/frontend/gallery_notify_4.png)

:::caution Uwaga
Wymagana aplikacja AIS dom w wersji minimum 1.1.8.Notify.
:::

:::caution Uwaga
Żeby powiadomienia zaczęły działać, należy wylogować się i zalogować ponownie w aplikacji mobilnej.
:::

Zastosowaliśmy nowy schemat autentykacji bazujący na mechanizmie IndieAuth.
![Powiadomienia](/img/en/blog/202005/mob_auth.png)


## ![Tasmota](/img/en/blog/202005/tasmota_small.png) Aktualizacja AIS-Tasmota

Tym razem dwie binarki, bo połączyliśmy popularne funkcje dostępne na różnych urządzeniach (gniazdka, rolety, panele dotykowe itd…) w jedną kompilację.
Czyli ta jedna kompilacja ma wszystkie popularne funkcjonalności i będzie działać na wszystkich modułach.

![Oprogramowanie bramki](/img/en/iot/iot_device_menu.png)


## ![Zigbee](/img/en/blog/202004/honeybee.png) Aktualizacja Zigbee2Mqtt do wersji 1.13.0

### [741 urządzenia od 133 różnych producentów](https://www.zigbee2mqtt.io/information/supported_devices.html) 🥰


Aktualizacja Zigbee, tak samo jak aktualizacji innych składowych, wykona się automatycznie.

![Oprogramowanie bramki](/img/en/blog/202005/update.png)


## ![SUPLA](/img/en/blog/202005/supla.png) Konfiguracja ilości zapytań do serwisu SUPLA

Dodaliśmy możliwość definiowania interwału skanowania dla integracji SUPLA.
W ten sposób każdy może ustalić sobie jak często może pytać o status swoich urządzeń (w zależności od ilości urządzeń które ma i aktualnych limitów w SUPLA).
Szczegóły w dokumentacji [Integracja SUPLA](/docs/ais_app_supla)

![SUPLA](/img/en/blog/202005/supla_limit.png)




## ![Icons](/img/en/blog/202004/house.png) Nowy Home Assistant

Najnowszy (stabilny) Home Assistant <a href="https://www.home-assistant.io/blog/2020/04/29/release-109/" target="_blank">0.109.6</a> jak zwykle sporo nowości ❤️


----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)
AI-Speaker 05/2020
----
