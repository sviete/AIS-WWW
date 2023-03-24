---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.110.7
tags: ["armbian", "zigbee", "home assistant", "stress tests"]
---

# 0.110.7 Home Assistant, Armbian, Stress testy bramki, Zigbee

- ![Home Assistant](/img/en/blog/202006/hass.png) Nowy Home Assistant - jedno z największych wydań :)
- ![Armbian](/img/en/blog/202006/armbian.png) Armbian - uruchomienie Linuxa z najnowszym jądrem 5.x na bramce AIS dom
- ![Stress](/img/en/blog/202006/tuning.png) Stres testy bramki i poprawki
- ![Zigbee](/img/en/blog/202006/zigbee.png) Kolejna aktualizacja Zigbee2Mqtt, już [785 urządzeń od 140 różnych producentów](https://www.zigbee2mqtt.io/information/supported_devices.html)



<!--truncate-->

:::tip Wskazówka
UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important informacja
W razie problemów po aktualizacji sprawdź procedurę [Aktualizacja z konsoli](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step)- to może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution Uwaga
 **Po aktualizacji pierwsze uruchomienie może trwać nawet 20 minut.**

 ![wait](/img/en/blog/202006/wait.png) w tym czasie aktualizowane są biblioteki do integracji dodanych na bramce...

 **Poczekaj cierpliwie na zakończenie aktualizacji.**
:::


## ![Home Assistant](/img/en/blog/202006/hass.png) Nowy Home Assistant - jedno z największych wydań :)


Najnowszy (stabilny) [Home Assistant 0.110.7](https://www.home-assistant.io/blog/2020/05/20/release-110/)
Tym razem oprócz nowości i kolejnych integracji, pojawiło się też sporo poprawek zmniejszających rozmiar i przyśpieszających działanie aplikacji!

![Home Assistant](/img/en/blog/202006/ha_integrations.png)


## ![Armbian](/img/en/blog/202006/armbian.png) Armbian - uruchomienie Linuxa z najnowszym jądrem 5.x na bramce AIS dom


Armbian to system operacyjny na bazie Linux dla wielu komputerów jednopłytkowych (SBC).
Czym jest Armbian i co potrafi opisane jest w oficjalnej dokumentacji Armbian: https://docs.armbian.com/ i na jego forum: https://forum.armbian.com/
Armbian to bardzo dojrzały projekt i jeżeli ktoś szuka “czystego Linuxa” z najnowszym jądrem 5.5.x do serwerowych zastosowań, to będzie to dobry wybór (3 lata temu robiliśmy naszą platformę do głośnika na Armbian i serwerze muzycznym Mopidy, niestety multimedia to nie jest mocna strona czystego Linuxa, dlatego mamy teraz Android).

![Armbian](/img/en/blog/202006/armbian.jpeg)

Na forum pokazujemy krok po kroku jak:

1. Uruchomić Armbian na bramce ais dom -> [opis na forum](https://ai-speaker.discourse.group/t/armbian-ubuntu-na-bramce-ais-dom/500)

![Armbian](/img/en/blog/202006/armbian_1.png)

2. Wykonać testy porównawcze na Armbian -> [opis na forum](https://ai-speaker.discourse.group/t/benchmarking-na-armbian/501)

![Armbian](/img/en/blog/202006/animated.gif)

3. Zainstalować Supervised Home Assistant na Armbian i/lub wiele innych gotowych aplikacji -> [opis na forum](https://ai-speaker.discourse.group/t/armbian-supervised-home-assistant-na-bramce-ais-dom/511)

![Armbian](/img/en/blog/202006/armbian_softy.png)




## ![Stress](/img/en/blog/202006/tuning.png) Stres testy bramki i poprawki

Podczas prac nad wersją 0.110 wykonaliśmy szereg stres testów.  Efektem tych testów jest zmiana trybu zarządzania wejściem i wyjściem na bramce (io scheduler w Linux).

Na forum dodaliśmy opis -> [wprowadzenie do tematu stres testów](https://ai-speaker.discourse.group/t/armbian-stres-testy-na-bramce/512)

![Stress](/img/en/blog/202006/stress.png)

Nasz faworyt to test za pomocą aplikacji monkey :monkey_face:
Tu też nie ma wielkiej filozofii… ale jest wielka ilość (setki tysięcy) bardzo losowych zdarzeń, co daje dość ciekawy efekt :wink:

<iframe width="720" height="460"  src="https://www.youtube.com/embed/-1uBMCmMaHg" frameBorder="0" allowFullScreen></iframe>

## ![Zigbee](/img/en/blog/202004/honeybee.png) Aktualizacja Zigbee2Mqtt do wersji 1.13.1

### [785 urządzeń od 140 różnych producentów](https://www.zigbee2mqtt.io/information/supported_devices.html)


Aktualizacja Zigbee, tak samo jak aktualizacja innych składowych, wykona się automatycznie.

![Oprogramowanie bramki](/img/en/blog/202006/update.png)




----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)
AI-Speaker 06/2020
----
