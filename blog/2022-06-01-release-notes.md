---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Maja
tags: ["mqtt", "home assistant", "zigbee"]
---

<div class="IntroAisBlogMenu" >

![AIS](/img/en/blog/202206/ais_version.png)

</div>


<!--truncate-->


## ABC bezproblemowej aktualizacji

:::tip Kopia ![A](/img/en/blog/202112/cloud-upload.png)

Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji).
W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.

:::

:::important Konsola ![B](/img/en/blog/202112/console.png)

W razie problemów z aktualizacją z aplikacji, uruchom [aktualizację z konsoli](/docs/ais_bramka_update_manual), w ten sposób będziesz miał na bieżąco wgląd w logi i postęp aktualizacji oraz będziesz mógł zdiagnozować przyczynę problemu.
:::

:::caution Poczekaj ![C](/img/en/blog/202112/timer-sand.png)

Aktualizacja i pierwsze uruchomienie po aktualizacji może trwać dłużej - poczekaj cierpliwie.
W każdej chwili możesz sprawdzić status systemu (dowiedzieć się co robi bramka) w konsoli komendą ``htop`` i/lub ``pm2 logs``
:::

## Potrzebujesz pomocy?

:::warning Reset ![D](/img/en/blog/202112/broom.png)
Jeżeli nie jesteś w stanie zdiagnozować problemu - nie przejmuj się, jesteśmy przygotowani, żeby Ci pomóc.
Stworzyliśmy specjalnie dla Ciebie prostą procedurę, która pomoże przywrócić domyślne kody i ustawienia systemu - zapoznaj się z opisem: [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step).
:::


:::important Programowanie w serwisie ![D](/img/en/blog/202112/lifebuoy.png)
Jeżeli nie jesteś w stanie wykonać procedury pełnego resetu i Twój system nadal nie działa, to możesz wysłać nam urządzenie do zaprogramowania.
Szczegóły opisane na forum w wątku: [Programowanie w serwisie](https://ai-speaker.discourse.group/t/usluga-programowania-urzadzen-w-ai-speaker/1368)
:::

## ![](/img/en/blog/202102/honeybee.png) Maja


W tej wersji systemu dodaliśmy integrację umożliwiającą komunikację ze sterownikiem Eaton Easy PLC.
Dzięki temu możliwe jest sterowanie przewodowe z AIS za pomocą sterownika Eaton Easy. Rozwiązanie wymaga specjalnego programowania po stronie sterownika PLC i dlatego ta integracja będzie wspierana w naszej ofercie PRO.

![](/img/en/integrations/ais_easy.png)


### ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt

Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.25.1.
W najnowszej wersji jest obsługiwanych 2195 urządzeń od 301 producentów:


![](/img/en/blog/202206/z2m.png)

Szczegóły w dokumentacji Zigbee2Mqtt: https://www.zigbee2mqtt.io/



### ![](/img/en/blog/202101/hass.png) Asystent domowy


Najnowsza wersja Asystenta domowego 2022.5, czyli naszego pakietu ``ais-dom`` bazującego na Home Assistant Core.
W najnowszej wersji jest obsługiwanych 1969 integracji:

![](/img/en/blog/202206/ha.png)


Szczegóły w dokumentacji Home Assistant: https://www.home-assistant.io/integrations/

--------

##### AI-Speaker 12/2021
