---
title: "USB rozpoznawanie urządzeń"
sidebar_label: Urządzenia USB
---

## Wprowadzenie

Na bramce dostarczamy działającą w tle usługę USB, której celem jest wykrywanie zmian stanu urządzeń USB (połączenie i rozłączanie). Usługa monitoruje zdarzenia za pomocą mechanizmu inotify dostępnego w systemie Linux, następnie zmienia je w format zrozumiały dla Asystenta domowego. Dzięki temu Asystent domowy powiadamia komunikatem głosowym o tym, jakie urządzenie zostało dodane i jeżeli obsługa danego urządzenia jest wspierana, to Asystent wykona dalsze akcje związane z obsługą danego urządzenia, takie jak:
- dodanie dysków
- uruchomienie karty audio
- uruchmienie serwsisu do obsługi Zigbee


## Pamięć USB

Gdy dysk flash USB, karta pamięci SD, lub urządzenie obsługujące MTP (np aparat czy telefon komórkowy) jest podłączone do bramki AIS dom, to bramka obsługuje takie urządzenie w trybie hosta USB.
W tym trybie bramka zapewnia napięcie 5V na linii VBUS portu USB dla dołączonego urządzenia, pamięć flash jest rejestrowana jako nowy dysk zewnętrzny dostępny dla użytkownika.
Asystent domowy informuje, że rozpoznał dysk komunikatem "Dysk zewnętrzny podłączony" i można już przeglądać dysk i odtwarzać z niego audio.

![Audio panel](/img/en/bramka/usb_integration_drive.png)


## USB Audio

Na bramce dostępna jest karta audio posiadająca 3 wbudowane interfejsy do przesyłania audio:
- av
- hdmi
- spdif

```
cat /proc/asound/cards
0 [AMLM8AUDIO     ]: AML-M8AUDIO - AML-M8AUDIO
                     AML-M8AUDIO
```

Dodatkowo każde urządzenie audio zgodne ze specyfikacją USB i działające w trybie akcesoriów USB może obsługiwać dźwięk (jako interfejs USB przesyłający audio).
Po włożeniu urządzenia USB (zgodnego ze specyfikacją USB dla urządzeń audio) do bramki, Asystent domowy rozpozna je i poinformuje głosowo, że urządzenie zostało dodane i automatycznie użyje nowo dodanego urządzenia do odtwarzania audio.

![Audio panel](/img/en/bramka/usb_integration_audio.png)

```
$ cat /proc/asound/cards
 0 [AMLM8AUDIO     ]: AML-M8AUDIO - AML-M8AUDIO
                      AML-M8AUDIO
 1 [AUDIO          ]: USB-Audio - USB  AUDIO
                      USB  AUDIO at usb-xhci-hcd.0.auto-1.2, full speed
```

Istnieje też możliwość kontroli urządzeń audio z poziomu konsoli, ale ten temat dotyczy użytkowników, którzy chcieliby sami konfigurować i programować audio na urządzeniu. Zostanie opisany szerzej na forum projektu Asystenta domowego.

```
$ su -c "tinymix -D 0"
Mixer name: 'AML-M8AUDIO'
Number of controls: 10
ctl	type	num	name                                     value
0	INT	2	DAC Digital Playback Volume              251 251
1	ENUM	1	DAC Extra Digital Gain                   0dB
2	BOOL	1	Audio i2s mute                           Off
3	ENUM	1	Output Swap                             
4	BOOL	1	Audio spdif mute                         Off
5	BOOL	1	Ext Spk Switch                           Off
6	ENUM	1	Lineout right N switch                   LORN_SEL_DACR_INV
7	ENUM	1	Lineout right P switch                   LORP_SEL_DACR
8	ENUM	1	Lineout left N switch                    LOLN_SEL_DACL_INV
9	ENUM	1	Lineout left P switch                    LOLP_SEL_DACL
```

## Akcesoria USB HID

Urządzenia USB HID (Human Interface Devices) to urządzenia używane głównie do kontrolowania działania systemu. Typowe przykłady urządzeń klasy HID to kontrolery takie jak:
- pilot radiowy AI-Speaker,
- klawiatury,
- myszy,
- joysticki,
- czytniki kodów kreskowych

Definicja USB HID (Human Interface Device) określa standardowy sposób komunikacji HID z hostem obsługującym urządzenia tego typu.
Jeżeli urządzenie spełnia standard USB HID, to powinno być automatycznie rozpoznane i dodane przez Asystenta domowego, co zostanie zakomunikowane głosowo przez asystenta:

![HID USB](/img/en/bramka/usb_integration_hid.png)

## Zigbee USB sniffer


Po dodaniu urządzenia Zigbee USB CC2531 do portu USB bramki, Asystent domowy poinformuje o tym głosowo, uruchomi usługę do komunikacji z zigbee oraz aplikację do konfiguracji urządzeń zigbee:

![USB Zigbee](/img/en/bramka/usb_integration_zigbee.png)

Szczegóły w opisie działania [Zigbee2MQTT](/docs/ais_app_integration_zigbee)


## Biblioteka libusb

Na bramce dostarczamy [libusb](https://libusb.info/). Jest to biblioteka C, która zapewnia ogólny dostęp do urządzeń USB.
Biblioteka ta umożliwia aplikacjom (działającym na bramce) na komunikowanie się ze sprzętem USB. Obsługiwane są wszystkie wersje protokołu USB, od 1.0 do 3.1(najnowsza).

