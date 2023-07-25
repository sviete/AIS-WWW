---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Nikodem
tags: ["mqtt", "home assistant", "zigbee"]
---

<div class="IntroAisBlogMenu" >

![AIS](/img/en/blog/202212/ais_version.png)

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

## ![](/img/en/blog/202212/ais_version.png) Nikodem

W tej wersji systemu przechodzimy na pakiety Termux. Termux to otwarty emulator terminala dla Androida, który pozwala na uruchomienie środowiska Linux na urządzeniu z Androidem. Ponadto za pomocą menedżera pakietów aplikacji można zainstalować dodatkowe oprogramowanie. Pakiety Linuxa w Termux są skompilowane z Android NDK i mają poprawki zgodności, aby działały na Androidzie.

![](/img/en/blog/202212/termux.png)

W repozytoriach Termux znajduje się ponad 1000 pakietów. Dodatkowo możesz skompilować własne pakiety bo Termux dostarcza też różne narzędzia do budowania, w tym kompilatory dla języków takich jak C, C++, Go, Rust. Dostępne są również interpretery dla popularnych języków, takich jak NodeJS, Python, Ruby.


:::caution **Przejście na binarki Termux zalecane jest tylko na nowych bramkach DEV-3 i PRO-1**,
osoby które mają starsze bramki zachęcemy do zakupu nowszej bramki w promocji opisanej na forum: [Na problemy - PROMOCJA](https://ai-speaker.discourse.group/t/na-problemy-promocja/3122)
:::

[![](/img/en/blog/202301/promo.jpeg)](https://ai-speaker.discourse.group/t/na-problemy-promocja/3122)

Na poniższym diagramie zobrazowaliśmy jak uzyskać aktualizację w zależności od modelu bramki.
```mermaid
sequenceDiagram
    participant DEV-1 DEV-2 DEV-BT
    loop Sprawdzenie wersji
        DEV-1 DEV-2 DEV-BT->>DEV-1 DEV-2 DEV-BT: Twój system jest aktualny. Wersja AIS Serwer
    end
    Note right of DEV-1 DEV-2 DEV-BT: Starsza wersja bramki <br/>brak aktualizacji.
    participant DEV-3 PRO-1
    DEV-3 PRO-1->>DEV-3 PRO-1 na Termux: Aktualizacja do Termux
    participant DEV-3 PRO-1 na Termux
    DEV-1 DEV-2 DEV-BT-->>DEV-3 PRO-1 na Termux: Zakup bramki DEV-3 lub PRO-1
    loop Sprawdzenie wersji
        DEV-3 PRO-1 na Termux->>DEV-3 PRO-1 na Termux: Aktualizacja do najnowszej wersji
    end
    Note right of DEV-3 PRO-1 na Termux: Nowsza wersja bramki <br/>aktualizacja oprogrmowania!
```


Jak przejść na Termux opisaliśmy krok po kroku na forum: [Przejscie na binarki Termux](https://ai-speaker.discourse.group/t/przejscie-na-binarki-termux/2977)

Co i jak można zrobić w Termux opisane jest na stronach: [Termux Wiki](https://wiki.termux.com/wiki/Getting_started)


### ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt

Aktualizacja Zigbee2Mqtt do najnowszej wersji.
W najnowszej wersji jest obsługiwanych [ponad 2500 urządzeń od ponad 340 producentów](https://www.zigbee2mqtt.io/supported-devices/):


[![](/img/en/blog/202301/z2m.png)](https://www.zigbee2mqtt.io/supported-devices/)

Szczegóły w dokumentacji Zigbee2Mqtt: https://www.zigbee2mqtt.io/


### ![](/img/en/blog/202101/hass.png) Asystent domowy


Najnowsza wersja Asystenta domowego, czyli naszego pakietu ``ais-dom`` bazującego na Home Assistant Core.
W najnowszej wersji [dostępne jest ponad 2480 integracji](https://www.home-assistant.io/integrations/):

[![](/img/en/blog/202301/ha.png)](https://www.home-assistant.io/integrations/)


Szczegóły w dokumentacji Home Assistant: https://www.home-assistant.io/integrations/

--------

##### AI-Speaker 01/2023
