---
title: "Obsługa kart dźwiękowych"
sidebar_label: Obsługa kart dźwiękowych
---

### Wprowadzenie

> Opis w przygotowaniu

### Wyświetlenie wszystkich kart dzwiękowych

Wszystkie karty audio, które są dostepne w systemie (podłączone i z zainstalowanym sterownikiem) listujemy komendą w konsoli:

```bash
cat /proc/asound/cards
```
wynik powinien być podobny do tego poniżej:

```bash
$ cat /proc/asound/cards
 0 [AMLM8AUDIO     ]: AML-M8AUDIO - AML-M8AUDIO
                      AML-M8AUDIO
 1 [CameraB409241  ]: USB-Audio - USB Camera-B4.09.24.1
                      OmniVision Technologies, Inc. USB Camera-B4.09.24.1 at usb-xhci-hcd.0.auto-2, h
 2 [dabaizhiyin16k1]: USB-Audio - dabaizhiyin16k16b
                      dabaizhiyin dabaizhiyin16k16b at usb-xhci-hcd.0.auto-1.3, full speed
```

### Testowanie kart dźwiękowych

```bash
$ su -c 'tinymix -D 0'
```

> TODO
