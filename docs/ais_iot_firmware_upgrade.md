---
title: Aktualizacja oprogramowania urządzeń automatyki domowej
sidebar_label: Aktualizacja oprogramowania
---

:::tip Wskazówka
Obecnie aktualizacja wymaga wgrania nowego oprogramowania do urządzenia z przeglądarki internetowej.
:::

## Aktualizacja krok po kroku

### Pobranie plików

Pliki ze skompilowaną najnowszą wersją oprogramowania dla urządzeń dostępne są w naszym serwisie pod adresem [OTA](https://www.ai-speaker.com/ota/)
Pobierz najnowsze wersje 2 plików:

- [tasmota-minimal.bin](https://powiedz.co/ota/dom/tasmota-minimal.bin)
- [tasmota-PL.bin](https://powiedz.co/ota/dom/tasmota-PL.bin)

![OTA AIS dom](/img/en/iot/iot_ais_dom_device_rf433_firmware.png)


### Ustalenie adresu IP urządzenia

W systemie Asystent domowy przejdź do grupy "Menu" -> "Konfiguracja" -> "Konfiguracja Urządzeń AIS dom" a następnie wybierz urządzenie i sprawdz jego status by odczytać jego aktualny adres IP


![Urządzenia w Twojej sieci](/img/en/iot/iot_device_discovery.png)



### Menu urządzenia

Znając IP urządzenia, wpisz go w przeglądarce internetowej, by przejść do strony urządzenia. 
![Główne menu urządzenia](/img/en/iot/iot_device_menu.png)

W głównym menu, aplikacji na urządzeniu wybierz opcję "Aktualizacja oprogramowania"
![Główne menu urządzenia](/img/en/iot/iot_device_menu_go_to_update.png)




### Pierwszy plik, tasmota-minimal.bin

Wybierz plik **tasmota-minimal.bin** i naciśnij "Start aktualizacji"

![Pierwszy plik](/img/en/iot/iot_device_menu_upgrade_1.png)


Odczekaj, aż pojawi się informacja o powodzeniu aktualizacji i wróć do menu głównego

![Pierwszy plik](/img/en/iot/iot_device_menu_upgrade_2.png)


Z głównego menu rzejdź do wgrywania kolejnego pliku

![Pierwszy plik](/img/en/iot/iot_device_menu_upgrade_3.png)


### Drugi plik, tasmota-PL.bin

Wybierz plik **tasmota-PL.bin** i naciśnij "Start aktualizacji"

![Drugi plik](/img/en/iot/iot_device_menu_upgrade_4.png)


Odczekaj, aż pojawi się informacja o powodzeniu aktualizacji.
Następnie urządzenie się zrestartuje i powróci do głównego menu.



### Konsola

Z głównego menu możemy przejść do konsoli urządzenia

![Przejście do konsoli](/img/en/iot/iot_device_menu_upgrade_5.png)


Jeżel chcesz mieć pewność, że urządzenie pracuje z domyślnymi ustawieniami to w konsoli urządzenia, wykonaj polecenie **Reset 5** dzięki temu będziesz miał pewność, że urządzenie będzie korzystało tylko z nowych ustawień.

:::important informacja
Uwaga polecenie **Reset 5**  wykasuje wszystkie ustawienia urządzenia (poza konfiguracją WiFi), jeśli urządzenie komunikowało się z systemem automatyki domowej, to może być konieczne nowe parowanie/konfiguracja.
:::

![Reset 5](/img/en/iot/iot_device_menu_upgrade_6.png)


## Konfiguracja

Po poleceniu **Reset 5** urzadzenie wymaga ponownej konfiguracji ustawień. Konfiguracja przesyłana jest podczas dodawania urządzenia do bramki ale możemy ją też wykonać ręcznie - w tym celu wybieramy opcję "Konfiguracja"

![Reset 5](/img/en/iot/iot_device_menu_upgrade_7.png)

### Typ urządzenia

Jeżeli chcemy zmienić typ urządzenia z domyślnego (w naszej kompilacji S2X - gniazdko) na inny lub skonfigurować GPIO urządzenia, to przechodzimy do opcji "Konfiguracja modułu"

![Reset 5](/img/en/iot/iot_device_menu_upgrade_8.png)

wybieramy opdpowiednie dla nas opcje i zapisujemy

![Reset 5](/img/en/iot/iot_device_menu_upgrade_9.png)

### Nazwa urządzenia

Nazwa urządzenia dostępna jest w pozycji "Inne konfiguracje"

![Reset 5](/img/en/iot/iot_device_menu_upgrade_10.png)

w tym miejscu można też włączyć komunkację z MQTT

![Reset 5](/img/en/iot/iot_device_menu_upgrade_11.png)



## Wariant oprogramowania Tasmota


Oprogramowanie Tasmota działa na ogromnej liczbie urządzeń z ESP8266, dodatkowo obsługuje wiele protokołów komunikacji, funkcji oraz umożliwia dołączania np. czujników, silników, wyświetlaczy itd.. To powoduje, ogromną ilość możliwych konfiguracji i kompilacji. 
Nasza kompilacja obsługuje większość funkcji. Udostepniamy 2 pliki binarne:

- **tasmota-minimal.bin** - to jest specjalna wersja umożliwiającą aktualizację OTA (bez programatora). Ta wersja służy tylko do wykonania aktualizacji i NIE powinna być używana. Układ ESP8266 ma 1 MB pamięci, a oprogramowanie Tasmota z wszystkimi funkcjami, które mamy włączone zajmuje ponad 600 KB. 
Czyli w uproszczeniu, z dostępnego 1 MB miejsca na oprogramowanie, mamy na urządzeniu ponad 600 KB zajętego miejsca przez aktualne oprogramowanie i niecałe 400 KB wolnego miejsca. Nie możemy przesłać 600 KB z aktualizacją, bo taki plik się nie zmieści... dlatego wykonujemy pewną "sztuczkę" - w pierwszym kroku podmieniamy oprogramowanie na urządzeniu, które zajmuje 600 KB na oprogramowanie minimal, które zajmuje 266 KB, a w kolejnym kroku wysyłamy docelowe oprogramowanie, bo mamy ponad 600 KB miejsca.

- **tasmota-PL.bin** - to jest kompilacja, która obsługuje większość funkcji i jest przez nas wgrywana do urządzeń. Obecnie sprzedajemy gniazdo S26, dlatego w tej kompilacji taki moduł jest ustawiony jako domyślny.

### Dostępne funkcje i czujniki w naszej kompilacji

| Feature or Sensor     | minimal | tasmota |
|-----------------------|---------|---------|
| MY_LANGUAGE pl_PL     | x | x |
| USE_ARDUINO_OTA       | - | - |
| USE_DOMOTICZ          | - | x |
| USE_HOME_ASSISTANT    | - | x |
| USE_MQTT_TLS          | - | - |
| USE_MQTT_TLS_CA_CERT  | - | - |
| USE_MQTT_AWS_IOT      | - | - |
| USE_4K_RSA            | - | - |
| USE_KNX               | - | x |
| USE_WEBSERVER         | x | x |
| USE_JAVASCRIPT_ES6    | - | - |
| USE_WEBSEND_RESPONSE  | - | - |
| USE_EMULATION_HUE     | - | x |
| USE_EMULATION_WEMO    | - | x |
| USE_DISCOVERY         | - | x |
| WEBSERVER_ADVERTISE   | - | x |
| MQTT_HOST_DISCOVERY   | - | x |
| USE_TIMERS            | - | x |
| USE_TIMERS_WEB        | - | x |
| USE_SUNRISE           | - | x |
| USE_RULES             | - | x |
| USE_SCRIPT            | - | - |
| USE_EXPRESSION        | - | - |
| SUPPORT_IF_STATEMENT  | - | - |
| USE_HOTPLUG           | - | - |
|                       |   |   |
| Feature or Sensor     | minimal | tasmota |
| ROTARY_V1             | - | - |
| USE_SONOFF_RF         | - | x |
| USE_RF_FLASH          | - | x |
| USE_SONOFF_SC         | - | x |
| USE_TUYA_MCU          | - | x |
| USE_ARMTRONIX_DIMMERS | - | x |
| USE_PS_16_DZ          | - | x |
| USE_SONOFF_IFAN       | - | x |
| USE_BUZZER            | - | x |
| USE_ARILUX_RF         | - | x |
| USE_SHUTTER           | - | x |
| USE_DEEPSLEEP         | - | x |
| USE_EXS_DIMMER        | - | x |
| USE_DEVICE_GROUPS     | - | x |
| USE_PWM_DIMMER        | - | x |
| USE_KEELOQ            | - | - |
| USE_SONOFF_D1         | - | x |
|                       |   |   |
| Feature or Sensor     | minimal | tasmota |
| USE_LIGHT             | - | x |
| USE_WS2812            | - | x |
| USE_WS2812_DMA        | - | - |
| USE_MY92X1            | - | x |
| USE_SM16716           | - | x |
| USE_SM2135            | - | x |
| USE_SONOFF_L1         | - | x |
| USE_ELECTRIQ_MOODL    | - | x |
|                       |   |   |
| USE_ENERGY_SENSOR     | - | x |
| USE_PZEM004T          | - | x |
| USE_PZEM_AC           | - | x |
| USE_PZEM_DC           | - | x |
| USE_MCP39F501         | - | x |
| USE_SDM120            | - | - |
| USE_SDM630            | - | - |
| USE_DDS2382           | - | - |
| USE_DDSU666           | - | - |
| USE_SOLAX_X1          | - | - |
| USE_LE01MR            | - | - |
|                       |   |   |
| USE_ADC_VCC           | x | - |
| USE_COUNTER           | - | x |
| USE_DS18x20           | - | x |
| USE_DHT               | - | x |
| USE_MAX31855          | - | - |
| USE_MAX31865          | - | - |
| USE_THERMOSTAT        | - | - |
|                       |   |   |
| Feature or Sensor     | minimal | tasmota |
| USE_I2C               | - | x |
| USE_SHT               | - | - |
| USE_HTU               | - | - |
| USE_BMP               | - | - |
| USE_BME680            | - | - |
| USE_BH1750            | - | - |
| USE_VEML6070          | - | - |
| USE_ADS1115           | - | - |
| USE_INA219            | - | - |
| USE_INA226            | - | - |
| USE_SHT3X             | - | - |
| USE_TSL2561           | - | - |
| USE_TSL2591           | - | - |
| USE_MGS               | - | - |
| USE_SGP30             | - | - |
| USE_SI1145            | - | - |
| USE_LM75AD            | - | - |
| USE_APDS9960          | - | - |
| USE_MCP230xx          | - | - |
| USE_PCA9685           | - | - |
| USE_MPR121            | - | - |
| USE_CCS811            | - | - |
| USE_MPU6050           | - | - |
| USE_DS3231            | - | - |
| USE_MGC3130           | - | - |
| USE_MAX44009          | - | - |
| USE_SCD30             | - | - |
| USE_SPS30             | - | - |
| USE_ADE7953           | - | x |
| USE_VL53L0X           | - | - |
| USE_MLX90614          | - | - |
| USE_CHIRP             | - | - |
| USE_PAJ7620           | - | - |
| USE_PCF8574           | - | - |
| USE_HIH6              | - | - |
| USE_DHT12             | - | - |
| USE_DS1624            | - | - |
| USE_AHT1x             | - | - |
| USE_HDC1080           | - | - |
| USE_WEMOS_MOTOR_V1    | - | - |
| USE_IAQ               | - | - |
| USE_AS3935            | - | - |
|                       |   |   |
| Feature or Sensor     | minimal | tasmota |
| USE_SPI               | - | - |
| USE_MHZ19             | - | - |
| USE_SENSEAIR          | - | - |
| USE_PMS5003           | - | - |
| USE_NOVA_SDS          | - | - |
| USE_HPMA              | - | - |
| USE_SERIAL_BRIDGE     | - | x |
| USE_MP3_PLAYER        | - | - |
| USE_AZ7798            | - | - |
| USE_PN532_HSU         | - | - |
| USE_RDM6300           | - | - |
| USE_IBEACON           | - | - |
| USE_GPS               | - | - |
| USE_HM10              | - | - |
| USE_HRXL              | - | - |
| USE_TASMOTA_SLAVE     | - | - |
| USE_OPENTHERM         | - | - |
|                       |   |   |
| USE_NRF24             | - | - |
| USE_MIBLE             | - | - |
| USE_ZIGBEE            | - | - |
|                       |   |   |
| USE_IR_REMOTE         | - | x |
| USE_IR_RECEIVE        | - | x |
| USE_IR_REMOTE_FULL    | - | - |
|                       |   |   |
| USE_SR04              | - | - |
| USE_TM1638            | - | - |
| USE_HX711             | - | - |
| USE_TX2x_WIND_SENSOR  | - | - |
| USE_WINDMETER         | - | - |
| USE_RC_SWITCH         | - | - |
| USE_RF_SENSOR         | - | - |
| USE_HRE               | - | - |
| USE_A4988_STEPPER     | - | - |


### Ułatwienia w naszej kompilacji

#### Tryb parowania

Umożliwiamy łatwe wprowadzenie w tryb parowania przez szybkie naciśnięcie przycisku na urządzeniu od 3 do 7 razy lub poprzez naciśnięcie i przytrzymanie przycisku na urządzeniu przez 4 sekundy.
Motywacją do tej zmiany było umożliwienie łatwego dodawania urządzeń do naszego systemu przez osoby starsze oraz mające problem ze wzrokiem (dla części osób szybkie wciśnięcie dokładnie cztery razy w krótkich odstępach czasu tak, żeby dioda odpowiednio migała… było “troszkę” problematyczne).

#### Wyszukiwanie bramki

Urządzenia do sterowania nie potrzebują Internetu (serwisu w chmurze producenta). To bardzo ułatwia dostępność i przyśpiesza działanie sterowania, ale niesie ze sobą też kilka wyzwań technologicznych.
Główny problem to jak znaleźć bramkę w lokalnej sieci. Dla osób zaznajomionych z technologią ustawienie stałego IP dla bramki nie jest problemem, ale są też osoby, które nie wiedzą (i nie chcą wiedzieć) co to jest IP.
My ten problem rozwiązujemy i umożliwiamy urządzeniu wyszukanie bramki, czyli mając nasze oprogramowanie i bramkę możesz ją przełączać z Ethernet na WiFi, zmieniać jej adres IP a urządzenia i tak ją znajdą i się z nią połączą.
Tu ważne jest, żeby nazwa unikalnego klienta MQTT (którą ma każde urządzenie) zaczynała się od identyfikatora bramki. Przy takiej konfiguracji urządzenie samo będzie “szukało bramki” w sieci lokalnej. To oczywiście wysyłamy z bramki do urządzenia podczas “parowania urządzenia z bramką”.

#### Współpraca z Asystentem domowym

W naszej kompilacji oprogramowania Tasmota automatycznie ustawiamy na urządzeniu, żeby przedstawiało się bramce (mqtt discovery). Wszystkie urządzenia dodane są też do grupy dom. Bramka po uruchomieniu publikuje na tę grupę prośbę o przedstawienie się do urządzeń i ustala komunikację z nowymi urządzeniami. Szczegółowo opisane jest to w dokumentacji w sekcji MQTT

#### Ustawienia lokalne

W naszej kompilacji oprogramowania Tasmota ma lokalne polskie ustawienia:

- polskie menu,
- regionalne serwery czasu NTP (pl.pool.ntp.org, 0.pl.pool.ntp.org),
- strefę czasową dla Polski,
- lokalizacja to środek polski (52.069528, 19.480300) do wykorzystania podczas ustawiania charmonogramu opartego na wschodzie i zachodzie słońca.