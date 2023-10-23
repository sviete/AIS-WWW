---
title: ""
sidebar_label: Opis produktu AIS-Adapter-1
---

## Zigbee 3.0 Adapter

![ais](/img/AIS-ADAPTER-1/bramka.png)

**AIS-adapter-1** pełni funkcję adaptera Zigbee, umożliwiającego transmisję pakietów Zigbee poprzez połączenia Ethernet lub WiFi. Adapter Zigbee pozwala na integrację urządzeń różnych producentów (m.in. Tuya, IKEA, Xiaomi, Gledopto, Moes, Sonoff i innych) w jednolity system.

Głównymi atutami **AIS-adapter-1** jest to, że obsługuje 128 urządzeń zigbee (będących jednocześnie online), ma zasięg 200 metrów i można go podłączyć do lokalnej sieci za pomocą kabla LAN - w ten sposób można uzyskać pewne i dobre połączenie systemu automatyki z siecią Zigbee.

**Cechy adaptera**:

- Obsługuje podłączenie 128 urządzeń podrzędnych
- Oferuje zasięg ponad 200 metrów
- Jest zasilany kablem USB C (w zestawie)
- Możliwość podłączenia do sieci lokalnej za pomocą WiFi lub kabla LAN 10/100 Mbps (w zestawie)
- Kompatybilny z inteligentnymi produktami ZigBee 3.0 (takimi jak czujniki, światła, przełączniki, itd.)
- Oprogramowanie adaptera działa na wydajnym chipie Espressif ESP32, dzięki temu adapter może pełnić też funkcję bramki Bluetooth LE*
- Komunikacja radiowa działa na chipie EFR32MG21, dzięki temu adapter jednocześnie obsługiwać komunikację bezprzewodową poprzez interfejsy Zigbee oraz Thread (Matter)*

``*`` - Funkcjonalność wymaga zmiany oprogramowania adaptera

## Specyfikacja

Wydajny układ ESP32 zapewnia komunikację z adapterem (WiFi i Ethernet), dodatkowo na tym procesorze działa oprogramowanie do konfiguracji adaptera. Zasoby układu wykorzystywane są w około 25%, ESP32 posiada obsługę łączności Bluetooth LE, dlatego w przyszłości można dodać do adaptera funkcjonalność obsługi bramki Bluetooth LE.

![esp](/img/AIS-ADAPTER-1/esp.png)

Komunikacja Zigbee realizowana jest przez układ **EFR32MG21A020F768IM32** który oparty jest na rdzeniu ARM Cortex-M33 taktowanym z częstotliwością 80 MHz, posiada 768 kB Flash Storage, 64 kB RAM, jego radio ma maksymalną moc wyjściową 20dBm.
Istotne jest to, że układ EFR32MG21 posiada wieloprotokołowy moduł radiowy 2,4 GHz 802.15.4, który może jednocześnie obsługiwać zarówno transmisję Zigbee 3.0 (EmberZNet/EZSP), jak i Thread/Matter (OpenThread/Spinel) - dzięki temu w przyszłości adapter będzie mógł obsługiwać Zigbee i Thread.

![efr](/img/AIS-ADAPTER-1/efr.png)

 **AIS-adapter-1 specyfikacja**

- Napięcie wejściowe: AC 100 ~ 240V 50 / 60Hz
- Chip: ESP32 i EFR32MG21
- Zigbee: 3.0, Wifi 2.4, Ethernet, Bluetooth LE
- Częstotliwość: IEEE 802.11b/G/n 2.4G
- Temperatura pracy:-10 ~ 55 ℃
- Materiał: ABS + PC
- Rozmiar produktu: 95*95*22.5mm + przewody (w komplecie)

## Kompatybilność

**AIS-adapter-1** jest kompatybilny z wbudowaną w Home Assistant integracją  [Zigbee Home Automation](https://www.home-assistant.io/integrations/zha/) oraz z [Zigbee2mqtt](https://www.zigbee2mqtt.io/) - dzięki temu adapter może działać ze wszystkimi popularnymi systemami do automatyki domowej. Adapter jest gotowy do pracy po wyjęciu z pudełka i podłączeniu do sieci LAN oraz zasilania. W oprogramowaniu adaptera udostępniamy generator konfiguracji do ZHA i Z2M dzięki czemu integracja sprowadza się do kliknięcia i skopiowania wygenerowanej konfiguracji.

![efr](/img/AIS-ADAPTER-1/ha.png)

## Oprogramowanie

Oprogramowanie dostępne na urządzeniu jest przez nas rozwijane i udostępniane w repozytorium [Github](https://www.github.com/sviete). Poniżej opiszemy główne funkcjonalności oprogramowania.

![about](/img/AIS-ADAPTER-1/about.png)

W zakładce `General` możemy wybrać tryb pracy adaptera ``LAN mode`` (domyślnie) lub ``WiFi mode``, dodatkowo możemy też skonfigurować czy diody mają być włączone czy nie.

![general](/img/AIS-ADAPTER-1/general.png)

W menu `Ethernet` dostępne są ustawienia sieci LAN.

![ethernet](/img/AIS-ADAPTER-1/ethernet.png)

W menu `WiFi` mamy do dyspozycji konfigurację połączenia z siecią WiFi.

![wifi](/img/AIS-ADAPTER-1/wifi.png)

W zakładce `Z2M and ZHA` znajdują się ustawienia portu szeregowego(po którym urządzenie komunikuje się z zewnętrznymi systemami) oraz się konfigurator ustawień z systemami Home Assistant i Zigbee2Mqtt.

![ha](/img/AIS-ADAPTER-1/z2m.png)

W zakładce `Security` mamy możliwość ustawienia opcji bezpieczeństwa urządzenia - możemy ustawić hasło administratora i zablokować nieautoryzowany dostęp do aplikacji z konfiguracją.

![ha](/img/AIS-ADAPTER-1/security.png)

W menu `System Control` możemy ustawić nazwę pod jaką urządzenie będzie dostępne w sieci oraz zrestartować urządzenie.

![ha](/img/AIS-ADAPTER-1/system_control.png)

W zakładce `System tools` dostępna jest aktualizacja systemu. możliwość przeglądania i edycji plików konfiguracyjnych oraz konsola z komunikacją zigbee.

![ha](/img/AIS-ADAPTER-1/system_tools.png)

## Dostępność i cena

:::warning Sklep
<center>
<button className="snipcart-add-item button button--outline button--secondary button--lg"
              data-item-id="ais-adapter-1"
              data-item-description="AIS ADAPTER 1, Zigbee 3.0 Adapter {info} urządzeń zigbee (będących jednocześnie online), ma zasięg 200 metrów i działa w sieci LAN."
              data-item-image="/img/ais_adapter_1.png"
              data-item-name="AIS ADAPTER 1"
              data-item-price="{&quot;usd&quot;:45,&quot;eur&quot;:40, &quot;pln&quot;: 179}"
              data-item-custom1-name="Wiadomość"
              data-item-custom1-type="textarea"
              >
              Dodaj do koszyka  
            </button>
[Urządzenie jest też dostępne na naszych aukcjach na platformie allegro.pl](https://allegro.pl/uzytkownik/AI-Speaker)
<br/>
[<img src="/img/allegro.png" alt="drawing" width="200"/>](https://allegro.pl/uzytkownik/AI-Speaker)
</center>
:::