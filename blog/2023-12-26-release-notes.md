---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Home Assistant Supervised
tags: ["home assistant", "zigbee2mqtt"]
---

import BrowserWindow from '@site/src/components/BrowserWindow';

## Szanowni Użytkownicy,

Z przyjemnością chcielibyśmy Was poinformować o znaczącej zmianie, która wpłynie na naszą platformę w pozytywny sposób. Po przemyślanej analizie oraz wysłuchaniu Waszych opinii, zdecydowaliśmy się na przejście z systemu operacyjnego Adroid Termux na Linux, a co za tym idzie, z Home Assistant Core na Home Assistant Supervised.

 ![D](/img/en/blog/202312/linux.jpeg)


 <!--truncate-->


## Dlaczego ta zmiana?

### 1. Asystent Głosowy Wbudowany w Home Assistant

W 2023 roku Home Assistant pracował nad wbudowanym w system asystentem głosowym. Pracę te dobiegają końca i w efekcie nasze rozwiązanie oparte na usługach STT i TTS wbudowanych w system Android przestało być niezbędne do działania asystenta.
![yolca](/img/en/blog/202312/yolca.jpeg)
Zdecydowaliśmy się rozwijać i wspierać rozwiązanie dostarczane przez Home Assistant.
W naszym wpisie na blogu opisujemy jak dodać własne wyrażenie włączające mikrofon “Wake Word:
[Hey Yolca - “Wake Word”, własne wyrażenie włączające mikrofon](https://ai-speaker.discourse.group/t/hey-yolca-wake-word-wlasne-wyrazenie-wlaczajace-mikrofon/3668)
To pierwszy s serii wpisów w których będziemy zajmowali się asystentem głosowym wbudowanym w Home Assistant.

### 2. Kontenery Docker-a i dodatki Home Assistant

Kontenery Docker to lekkie, przenośne i samowystarczalne jednostki oprogramowania, które umożliwiają pakowanie, dostarczanie i uruchamianie aplikacji w izolowanym środowisku.
W przypadku Androida kontererami były Aplikacje, ale prawda jest taka, że Home Assistant działa na kontenerach Dockera a nie Anroida.
Dzięki przejściu na Linux-a będziemy mieli dostęp do wszystkich dodatków Home Assistant.

![docker](/img/en/blog/202312/docker.jpeg)

### 3. Łatwiejsze Aktualizacje Systemu

Zmiana na Linux ułatwi proces aktualizacji systemu Home Assistant.
Aktualizacja systemu Home Assistant w przypadku działania Home Assistant w kontenerze sprowadza się do aktualizacji kontenera Docker. Tak samo aktualizowane są dodatki które działają też w kontenerach Docker.
To ułatwia proces aktualizacji ponieważ aplikacje są pakowane wraz ze wszystkimi niezbędnymi zależnościami i konfiguracją, co sprawia, że są przenośne między różnymi środowiskami. Oznacza to, że to, co działa na jednym systemie, powinno działać na innym bez większych modyfikacji.

![docker2](/img/en/blog/202312/docker2.jpeg)

### 4. Pakiety Linux-a

W przypadku Termux, liczba dostępnych pakietów jest mniej imponująca w porównaniu do tradycyjnych dystrybucji Linuxa na komputerach stacjonarnych lub serwerach. Termux jest środowiskiem do uruchamiania terminala na systemie Android, a liczba pakietów jest ograniczona ze względu na specyficzne wymagania i ograniczenia środowiska Android.

W ostatnich latach Termux znacząco rozszerzył swoją ofertę, a liczba dostępnych pakietów stale rośnie. Aktualnie Termux oferuje dostęp do wielu popularnych narzędzi i programów, w tym edytory tekstowe, języki programowania, narzędzia programistyczne, serwery, narzędzia sieciowe itp. Jednak liczba pakietów nie jest w dziesiątkach tysięcy, jak w przypadku tradycyjnych dystrybucji.

![debian](/img/en/blog/202312/debian.jpeg)

W przypadku systemu Linux bazującego na dystrybucji Debian mamy do dyspozycji praktycznie wszystkie pakiety Linux-a a co za tym idzie możemy instalować na bramce więcej pożytecznych rzeczy.

### 5. Obsługa adapterów i seriala

W systemie Android, który jest zaprojektowany głównie z myślą o urządzeniach mobilnych, takich jak smartfony i tablety, obsługa portu szeregowego (serial port) nie jest domyślnie wbudowana.

Większość producentów adapterów (Zigbee, Z-Wave, Thread, Lora ...) nie oferuje obsługugi USB ale wymaga obsługi portu szeregowego. Taka komunikacja jest zwykle bardziej istotna w kontekście bramek IoT, systemów do kontroli przemysłowej i innych specjalizowanych zastosowań. Natomiast urządzenia Android są głównie ukierunkowane na obsługę standardowych interfejsów komunikacyjnych, takich jak USB, Bluetooth czy Wi-Fi.

![debian](/img/en/blog/202312/serial.jpeg)

Obchodziliśmy te ogranicznia z różnym skutkiem, kompilując jądro Linux-a i/lub urzywając adapterów które rozumiały komunikację USB.
Teraz dzięki przejściu na system Linux, będziemy w stanie obsługiwać każdy adapter.


### Dziękujemy za Wasze zrozumienie i wsparcie. Ta zmiana ma na celu podniesienie standardów naszego systemu i dostarczenie Wam jeszcze lepszego doświadczenia z Home Assistant.


## Jak przystąpić do aktualizacji?

Instrukcje dotyczące aktualizacji oraz migracji są dostępne na naszym forum:

- [DEV1, DEV2, DEV3](https://ai-speaker.discourse.group/t/home-assistant-supervised-na-dev1-dev2-i-dev-bt/3562/1)

- [DEV3 i PRO1](https://ai-speaker.discourse.group/t/home-assistant-supervised-na-dev3-i-pro1/3550/1)

Wystarczy zaopatrzyć się w kartę SD lub pendrive i można pobrać nasze obrazy Linuxa z już zainstalowanym i skonfigurowanym Home Assistant, następnie trzeba nagrać obraz systemu na nośnik i uruchomić bramkę na nowym systemie.

![Aktualizacja](/img/en/blog/202312/linux1.png)

## Gotowe karty SD

Dla osób które chciały by kupić gotową kartę z zainstalownym systemem Home Assistant oferujemy w naszym sklepie nowy produkt - [SDCARD 128GB - HOME ASSISTANT SUPERVISED](https://get-iot.com/index.php?id_product=33&id_product_attribute=42&rewrite=sdcard-128gb-home-assistant-supervised&controller=product&id_lang=2#/32-wersja_bramki-dev3):

[![SD](/img/en/blog/202312/sd-card.png)](https://get-iot.com/index.php?id_product=33&id_product_attribute=42&rewrite=sdcard-128gb-home-assistant-supervised&controller=product&id_lang=2#/32-wersja_bramki-dev3)


## Bramki AIS

Nowo sprzedawane bramki AIS, dostarczane są już z zainstalowanym systemem Linux oraz Home Assistant Supervised - [AIS DOM DEV-3 BRAMKA IOT&AUDIO - WERSJA DEWELOPERSKA](https://get-iot.com/index.php?id_product=27&rewrite=ais-dom-dev-3-bramka-lotaudio-wersja-deweloperska&controller=product&id_lang=2)

[![SD](/img/en/blog/202312/dev3.png)](https://get-iot.com/index.php?id_product=27&rewrite=ais-dom-dev-3-bramka-lotaudio-wersja-deweloperska&controller=product&id_lang=2)


-------------------------------------------------------------------------------------

## AIS Android, co nowego na kanale ALFA :)

Na kanale alfa, będziemy nadal wydawać wersje. Z uwagi jednak na argumenty opisane powyżej: kłopotliwą aktualizację, brak wsparcia dla wszystkich pakietów linux-a, brak obsługi wszystkich adapterów(brak obsługi seriala) w systemie Android, brak obsługi kontenerów w systemie Android, zalecamy przejście na system Linux i Home Assistant Supervised.

![Aktualizacja](/img/en/blog/202312/android.jpeg)


### Python
Home Assistant serwer jest napisany i działa z Pythonem 3. Na bramce dostarczamy najnowszą, stabilną, wspieraną przez Home Assistant wersję Python.

<BrowserWindow url="http://ais-dom.local">
<center>
![](/img/en/blog/202312/python.png)
</center>
</BrowserWindow>

### mqtt
Mosquitto to broker komunikatów, który implementuje protokoły MQTT w wersjach 5.0, 3.1.1 i 3.1. Mosquitto jest lekki i nadaje się do stosowania na wszystkich urządzeniach, od bramki AIS czy komputerów jednopłytkowych o niskim poborze mocy po pełne serwery.

<BrowserWindow url="http://ais-dom.local">
<center>
![](/img/en/blog/202312/mqtt.png)
</center>
</BrowserWindow>

### Clang
Narzędzie clang to kompilator używany do kompilowania języków programowania, takich jak C, C, Objective C i Objective C, do kodu maszynowego. 
Clang na bramce używamy do kompilowania rozszerzeń Pythona - używamy tego samego kompilatora do budowania rozszerzeń, którego użyto do zbudowania dystrybucji Pythona. Dzięki obecności clang na bramce AIS, można oczywiście kompilować własne programy napisane w C/C++ i je uruchamiać bezpośrednio na bramce AIS.

<BrowserWindow url="http://ais-dom.local">
<center>
![](/img/en/blog/202312/clang.png)
</center>
</BrowserWindow>

### FFmpeg
FFmpeg umożliwia platformie Home Assistant przetwarzanie strumieni wideo i audio.

<BrowserWindow url="http://ais-dom.local">
<center>
![](/img/en/blog/202312/ffmpeg.png)
</center>
</BrowserWindow>

### Coder
W tej wersji dostarczamy platformę developerską ``Coder``. Dzięki niej można w łatwy sposób rozwijać własne programy lub edytować konfigurację systemu bezpośrednio na bramce AIS.

<BrowserWindow url="http://ais-dom.local">
<center>
![](/img/en/blog/202312/code.png)
</center>
</BrowserWindow>

### Tmux
Naszym domyślnym terminalem jest teraz Tmux. Tmux pozwala nam ponownie się połączyć do utraconej sesji ssh, czy też pomóc w zarządzaniu długo trwającymi skryptami. Dodatkowo możemy skorzystać z opcji podziału okna na kilka terminali i zarządzać na ekranie jednocześnie kilkoma programami na raz.

<BrowserWindow url="http://ais-dom.local">
<center>
![](/img/en/blog/202312/tmux.png)
</center>
</BrowserWindow>

### ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt

Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.32.1.
W najnowszej wersji jest obsługiwanych [ponad 3000 urządzeń od ponad 380 producentów](https://www.zigbee2mqtt.io/supported-devices/):

[![](/img/en/blog/202306/zigbee2mqtt.png)](https://www.zigbee2mqtt.io/supported-devices/)


Szczegóły w dokumentacji Zigbee2Mqtt: https://www.zigbee2mqtt.io/


O nowościach w poszczególnych wersjach Zigbee2Mqtt można poczytać na stronie projektu w serwisie Github:

- [1.32.1](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.32.1)


### ![](/img/en/blog/202101/hass.png) Asystent domowy


Najnowsza wersja Asystenta domowego 2023.7.2, czyli naszego pakietu ``ais-dom`` bazującego na Home Assistant Core.
W najnowszej wersji [dostępne jest 3489 integracji](https://www.home-assistant.io/integrations/):



[![](/img/en/blog/202306/ha.png)](https://www.home-assistant.io/integrations/)




O nowościach w poszczególnych wersjach Home Assistant można poczytać na blogu Home Assistant:


- 2023.7 [![](https://www.home-assistant.io/images/blog/2023-07/social.png)](https://www.home-assistant.io/blog/2023/07/07/release-20237/)
- 2023.8 [![](https://www.home-assistant.io/images/blog/2023-08/social.png)](https://www.home-assistant.io/blog/2023/08/02/release-20238/)
- 2023.9 [![](https://www.home-assistant.io/images/blog/2023-09/social.png)](https://www.home-assistant.io/blog/2023/09/06/release-20239/)
- 2023.10 [![](https://www.home-assistant.io/images/blog/2023-10/social.png)](https://www.home-assistant.io/blog/2023/10/04/release-202310/)

--------

##### AI-Speaker 12/2023
