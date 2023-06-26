---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Ola
tags: ["home assistant", "zigbee2mqtt"]
---

<div class="IntroAisBlogMenu" >

![AIS](/img/en/blog/202306/ais_version.png)

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

## ![](/img/en/blog/202306/ais_version.png) Ola

W tej wersji systemu dostarczamy kody z 11 wydań zigbee2mqtt: 1.29.0, 1.29.1, 1.29.2, 1.30.0, 1.30.1, 1.30.2, 1.30.3, 1.30.4, 1.31.0, 1.31.1, 1.31.2 oraz kody z 6 wydań Home Assistant: 2023.1, 2023.2, 2023.3, 2023.4, 2023.5, 2023.6.


### ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt

Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.31.2.
W najnowszej wersji jest obsługiwanych [ponad 2900 urządzeń od ponad 370 producentów](https://www.zigbee2mqtt.io/supported-devices/):

[![](/img/en/blog/202306/zigbee2mqtt.png)](https://www.zigbee2mqtt.io/supported-devices/)


Szczegóły w dokumentacji Zigbee2Mqtt: https://www.zigbee2mqtt.io/


O nowościach w poszczególnych wersjach Zigbee2Mqtt można poczytać na stronie projektu w serwisie Github:

- [1.29.0](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.29.0)
- [1.29.1](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.29.1)
- [1.29.2](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.29.2)
- [1.30.0](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.30.0)
- [1.30.1](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.30.1)
- [1.30.2](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.30.2)
- [1.30.3](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.30.3)
- [1.30.4](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.30.4)
- [1.31.0](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.31.0)
- [1.31.1](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.31.1)
- [1.31.2](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.31.2)

### ![](/img/en/blog/202101/hass.png) Asystent domowy


Najnowsza wersja Asystenta domowego 2023.6.3, czyli naszego pakietu ``ais-dom`` bazującego na Home Assistant Core.
W najnowszej wersji [dostępne jest 2476 integracji](https://www.home-assistant.io/integrations/):



[![](/img/en/blog/202306/ha.png)](https://www.home-assistant.io/integrations/)




O nowościach w poszczególnych wersjach Home Assistant można poczytać na blogu Home Assistant:


- 2023.1 [![](https://www.home-assistant.io/images/blog/2023-01/social.png)](https://www.home-assistant.io/blog/2023/01/04/release-20231/)

- 2023.2 [![](https://www.home-assistant.io/images/blog/2023-02/social.png)](https://www.home-assistant.io/blog/2023/02/01/release-20232/)

- 2023.3 [![](https://www.home-assistant.io/images/blog/2023-03/social.png)](https://www.home-assistant.io/blog/2023/03/01/release-20233/)

- 2023.4 [![](https://www.home-assistant.io/images/blog/2023-04/social.png)](https://www.home-assistant.io/blog/2023/04/05/release-20234/)

- 2023.5 [![](https://www.home-assistant.io/images/blog/2023-05/social.png)](https://www.home-assistant.io/blog/2023/05/03/release-20235/)

- 2023.6 [![](https://www.home-assistant.io/images/blog/2023-06/social.png)](https://www.home-assistant.io/blog/2023/06/07/release-20236/)

--------

##### AI-Speaker 06/2023
