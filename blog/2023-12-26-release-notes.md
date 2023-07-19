---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Paweł
tags: ["home assistant", "zigbee2mqtt"]
---

<div class="IntroAisBlogMenu" >

![AIS](/img/en/blog/202312/ais_version.png)

:::caution

To jest informacja o rozwojowej wersji systemu, która zostanie wydana w grudniu 2023. Pracę nad tą wersją oraz nad jej opisem jeszcze trwają.
:::

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

## Wersja systemu Paweł <img src="/img/en/blog/202312/ais_version.png" alt="drawing" width="100"/>

W tej wersji systemu aktualizujemy środowisko Linux i dostarczamy najnowsze wersje pakietów: apt bash binutils binutils-libs busybox c-ares ca-certificates clang cloudflared cmake command-not-found coreutils curl dash debianutils dialog diffutils dos2unix dpkg ed ffmpeg fontconfig freetype fribidi gawk gdk-pixbuf git glib gpgv grep htop inetutils krb5 ldns less libandroid-support libaom libarchive libass libassuan libbluray libc++ libcap libcompiler-rt libcurl libdav1d libedit libexpat libffi libgc libgcrypt libgd libgnutls libgpg-error libiconv libicu libidn2 libjpeg-turbo libllvm liblzma libmosquitto libmpfr libnettle libnghttp2 libopenblas libopus libpng librav1e libresolv-wrapper libsixel libsoxr libsqlite libssh2 libtiff libunistring libuuid libuv libvidstab libvpx libwebp libx264 libx265 libxml2 libxslt lld llvm lsof make mosquitto nano ncurses ncurses-ui-libs ndk-sysroot nodejs openssh openssh-sftp-server openssl openssl-1.1 p7zip pcre2 perl postgresql psmisc python python-cryptography python-numpy rclone readline rhash sed tar termux-keyring termux-tools ttyd unbound util-linux w3m wget xz-utils zlib zstd.

### Python

![](/img/en/blog/202312/python.png)

### mqtt

![](/img/en/blog/202312/mqtt.png)

### Clang

![](/img/en/blog/202312/clang.png)

### FFmpeg

![](/img/en/blog/202312/ffmpeg.png)


### ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt

Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.32.1.
W najnowszej wersji jest obsługiwanych [ponad 2900 urządzeń od ponad 370 producentów](https://www.zigbee2mqtt.io/supported-devices/):

[![](/img/en/blog/202306/zigbee2mqtt.png)](https://www.zigbee2mqtt.io/supported-devices/)


Szczegóły w dokumentacji Zigbee2Mqtt: https://www.zigbee2mqtt.io/


O nowościach w poszczególnych wersjach Zigbee2Mqtt można poczytać na stronie projektu w serwisie Github:

- [1.32.1](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.32.1)


### ![](/img/en/blog/202101/hass.png) Asystent domowy


Najnowsza wersja Asystenta domowego 2023.7.2, czyli naszego pakietu ``ais-dom`` bazującego na Home Assistant Core.
W najnowszej wersji [dostępne jest 2476 integracji](https://www.home-assistant.io/integrations/):



[![](/img/en/blog/202306/ha.png)](https://www.home-assistant.io/integrations/)




O nowościach w poszczególnych wersjach Home Assistant można poczytać na blogu Home Assistant:


- 2023.7 [![](https://www.home-assistant.io/images/blog/2023-07/social.png)](https://www.home-assistant.io/blog/2023/07/05/release-20237/)


--------

##### AI-Speaker 12/2023
