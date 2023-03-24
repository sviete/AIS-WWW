---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.108.9
tags: ["zigbee", "mqtt", "home assistant"]
---

# 0.108.9 Zigbee, Ikony, Poprawki 🥳

- ![Zigbee](/img/en/blog/202004/honeybee.png) Aktualizacja Zigbee2Mqtt [692 urządzenia od 123 różnych producentów](https://www.zigbee2mqtt.io/information/supported_devices)
- ![Icons](/img/en/blog/202004/picture.png) Ikony i loga w aplikacji
- ![Icons](/img/en/blog/202004/house.png) Nowy Home Assistant
- ![Bugs](/img/en/blog/202004/bug.png) Poprawki błędów



<!--truncate-->

:::tip Wskazówka
UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important informacja
W razie problemów po aktualizacji sprawdź procedurę [Aktualizacja z konsoli](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step)- to może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

## ![Zigbee](/img/en/blog/202004/honeybee.png) Aktualizacja Zigbee2Mqtt

### [692 urządzenia od 123 różnych producentów](https://www.zigbee2mqtt.io/information/supported_devices.html) 🥰


Dodaliśmy możliwość wykonania kopii konfiguracji Zigbee2Mqtt. Zdecydowaliśmy się dodać to jako oddzielną opcję w aplikacji. Dzięki temu, w zależności od potrzeby, można dodawać/przywracać tylko kopię konfiguracji Home Assistant, Zigbee2Mqtt lub wszystko razem.

![Kopia konfiguracji bramki](/img/en/bramka/config_ais_dom_section1_2.png)

Dodaliśmy aktualizację Zigbee2Mqtt z wersji 1.8.0 do wersji 1.12.2 (którą mamy od jakiegoś czasu przetestowaną na bramce). Kolejne stabilne wersje Zigbee2Mqtt będziemy już wydawali na bieżąco.
Aktualizacja Zigbee2Mqtt będzie działała tak samo łatwo, jak każda aktualizacja.

![Oprogramowanie bramki](/img/en/bramka/config_ais_dom_section1.png)




## ![Icons](/img/en/blog/202004/picture.png) Ikony i loga w aplikacji

Dodaliśmy ikony i loga do naszych integracji:

![Ikony](/img/en/blog/202004/icons_in_app.png)

to dopiero początek, w kolejnej wersji strona integracji będzie znacznie ładniejsza i bardziej funkcjonalna :)



## ![Bugs](/img/en/blog/202004/bug.png) Poprawki błędów

Poprawiliśmy sporo błędów, ale to też dopiero początek. Powoli zamykamy naszą "podstawową funkcjonalność dostępną z pudełka" i będziemy skupiać się na poprawkach.

W nadchodzących wydaniach pojawi się integracja z Z-Wave, piszemy o tym na forum:
https://ai-speaker.discourse.group/t/z-wave-zapowiedz-integracji-przez-dongle-zwave2mqtt/413

![zwave2mqtt](/img/en/blog/202004/zwave2mqtt.png)

oraz sporo zmian w aplikacji mobilnej - powiadomienia oraz raportowanie lokalizacji, o tym też więcej na forum:
https://ai-speaker.discourse.group/t/planowane-zmiany-w-aplikacji-mobilnej/412


![zwave2mqtt](/img/en/blog/202004/authentication.png)


To będzie nasza minimalna funkcjonalność z pudełka. Po tym skupimy się na dopracowaniu całości i poprawkach ułatwiających używanie systemu.


Postępy z prac można śledzić w naszych repozytoriach kodu na github https://github.com/sviete


Wszystkich chętnych posiadających zdolności programistyczne zapraszamy do kodowania :)

Dodaliśmy nowy dział na forum - wprowadzenie do programowania na bramce, w którym pokazujemy na prostych przykładach jak dodać na bramce program w C, Python, Node.JS i Bash, a następnie wywołać go z poziomu Asystenta domowego.

https://ai-speaker.discourse.group/c/programowanie/15

To dział dla Tych śmiałków, którzy wolą się uczyć i zmieniać własną rzeczywistość 💪 niż czekać i narzekać na forach, że Google, Apple czy Amazon nie dał nam funkcjonalności x.
Podejściu "dej mnie mam horom curke" w AI-Speaker mówimy stanowcze... chyba nie ;)





## ![Icons](/img/en/blog/202004/house.png) Nowy Home Assistant

Najnowszy (stabilny) Home Assistant <a href="https://www.home-assistant.io/blog/2020/04/08/release-108/" target="_blank">0.108.9</a> jak zwykle sporo nowości ❤️ i ułatwień 👍


----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)
AI-Speaker 04/2020
----
