---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Ola
tags: ["mqtt", "home assistant", "zigbee"]
---

<div class="IntroAisBlogMenu" >

![AIS](/img/en/blog/202306/ais_version.png)

</div>

:::caution
To jest informacja o testowej wersji systemu, pracę nad tą wersją oraz nad tym opisem jeszcze trwają.
:::

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

## ![](/img/en/blog/202306/ais_version.png) Ola

W tej wersji systemu przejdziemy z Asystenta AIS na Asystenta Home Assistant (nowość w wersji Home Assistant 2023.02). 
W dokumentacji udostępnimy zbiór komend które rozumie asystent.

[![](/img/en/blog/202306/asystent.png)](https://www.home-assistant.io/docs/assist/)


### ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt

Aktualizacja Zigbee2Mqtt do najnowszej wersji.
W najnowszej wersji jest obsługiwanych [ponad 2700 urządzeń od ponad 350 producentów](https://www.zigbee2mqtt.io/supported-devices/):

Szczegóły w dokumentacji Zigbee2Mqtt: https://www.zigbee2mqtt.io/


### ![](/img/en/blog/202101/hass.png) Asystent domowy


Najnowsza wersja Asystenta domowego, czyli naszego pakietu ``ais-dom`` bazującego na Home Assistant Core.
W najnowszej wersji [dostępne jest ponad 2400 integracji](https://www.home-assistant.io/integrations/):

[![](/img/en/blog/202306/ha.png)](https://www.home-assistant.io/integrations/)




Szczegóły w dokumentacji Home Assistant: https://www.home-assistant.io/integrations/

--------

##### AI-Speaker 01/2023
