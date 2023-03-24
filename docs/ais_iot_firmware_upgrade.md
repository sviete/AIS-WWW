---
title: Aktualizacja oprogramowania urządzeń automatyki domowej
sidebar_label: Aktualizacja oprogramowania
---

:::tip Wskazówka
Obecnie aktualizacja wymaga wgrania nowego oprogramowania do urządzenia z przeglądarki internetowej.
Pracujemy nad automatyczną aktualizacją OTA, tak żeby urządzenia miały możliwość automatycznej aktualizacji oprogramowania.
:::


## Aktualizacja krok po kroku

:::danger ostrzeżenie
**NIE PRÓBUJ AKTUALIZOWAĆ BEZPOŚREDNIO DO BIEŻĄCEJ WERSJI.**
Sprawdź ścieżkę aktualizacji na stronie projektu [TASMOTA](https://tasmota.github.io/docs/Upgrading/#migration-path) lub skontaktuj się z nami [info@ai-speaker.com](mailto:info@ai-speaker.com) w celu uzyskania informacji o bezpiecznej ścieżce migracji do najnowszej wersji z Twojej bieżącej wersji oprogramowania.
:::

### Pobranie plików

Pliki ze skompilowaną najnowszą wersją oprogramowania dla urządzeń dostępne są w serwisie Github [FIRMWARE](https://github.com/sviete/AIS-Tasmota/tree/firmware) gdzie automatycznie kompilujemy wiele wariantów oprogramowania dla każdej wersji.

![FIRMWARE AIS dom](/img/en/iot/iot_ais_dom_github_firmware.png)


## Konfiguracja

Konfiguracja przesyłana jest automatycznie do urządzenia podczas parowania (dodawania urządzenia do bramki), ale możemy ją też wykonać ręcznie - w tym celu w menu urządzenia wybieramy opcję "Konfiguracja"

![Reset 5](/img/en/iot/iot_device_menu_upgrade_7.png)

### Typ urządzenia

Jeżeli chcemy zmienić typ urządzenia z domyślnego (w naszej kompilacji S2X - gniazdko) na inny lub skonfigurować wyjścia i wejścia urządzenia (GPIO urządzenia), to przechodzimy do opcji "Konfiguracja modułu":

![Reset 5](/img/en/iot/iot_device_menu_upgrade_8.png)

Wybieramy odpowiednie dla nas opcje i zapisujemy:

![Reset 5](/img/en/iot/iot_device_menu_upgrade_9.png)

### Nazwa urządzenia

Nazwa urządzenia dostępna jest w pozycji "Inne konfiguracje"

![Reset 5](/img/en/iot/iot_device_menu_upgrade_10.png)

w tym miejscu można też włączyć komunikację z MQTT

![Reset 5](/img/en/iot/iot_device_menu_upgrade_11.png)

Ręczna konfiguracja połączenia MQTT opisana jest tu -> [Skonfiguruj MQTT za pomocą interfejsu w aplikacji na urządzeniu](/docs/ais_iot_mqtt)


## Wariant oprogramowania Tasmota


Oprogramowanie Tasmota działa na ogromnej liczbie urządzeń z ESP8266, dodatkowo obsługuje wiele protokołów komunikacji, funkcji oraz umożliwia dołączenie np. czujników, silników, wyświetlaczy itd. To powoduje ogromną ilość możliwych konfiguracji i kompilacji.
Nasza kompilacja, którą udostępniamy i instalujemy na sprzedawanych przez nas urządzeniach, obsługuje większość funkcji. W naszym repozytorium kodów udostępniamy wszystkie warianty kompilacji.

### Dostępne funkcje i czujniki

W kompilacji, którą udostępniamy i wgrywamy do naszych urządzeń mamy następujące ustawienia:

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


### AIS vs Tasmota

Jesteśmy kompatybilni z Tasmota i dodatkowo mamy kilka ułatwień w naszej kompilacji.

#### Tryb parowania

Umożliwiamy łatwe wprowadzenie w tryb parowania **poprzez naciśnięcie i przytrzymanie przycisku na urządzeniu przez 4 sekundy** lub przez szybkie naciśnięcie przycisku na urządzeniu 6 razy (lub więcej).
Motywacją do tej zmiany było umożliwienie łatwego dodawania urządzeń do naszego systemu przez osoby starsze oraz mające problem ze wzrokiem (dla części osób szybkie wciśnięcie dokładnie 6 razy w krótkich odstępach czasu tak, żeby dioda odpowiednio migała… było “troszkę” problematyczne).

#### Wyszukiwanie bramki

Urządzenia do sterowania nie potrzebują Internetu (serwisu w chmurze producenta). To bardzo ułatwia dostępność i przyśpiesza działanie sterowania, ale niesie ze sobą też kilka wyzwań technologicznych.
Główny problem to jak znaleźć bramkę w lokalnej sieci. Dla osób zaznajomionych z technologią ustawienie stałego IP dla bramki nie jest problemem, ale są też osoby, które nie wiedzą (i nie chcą wiedzieć) co to jest IP.
My ten problem rozwiązujemy i umożliwiamy urządzeniu wyszukanie bramki, czyli mając nasze oprogramowanie, możesz przełączać bramkę AIS-dom z Ethernet na WiFi, zmieniać jej adres IP a urządzenia i tak ją znajdą i się z nią połączą.
:::tip
Tu ważne jest, żeby nazwa unikalnego Klienta MQTT (którą ma każde urządzenie) zaczynała się od identyfikatora bramki.
Przy takiej konfiguracji urządzenie samo będzie “szukało bramki” w sieci lokalnej.
Ten parametr oczywiście wysyłamy z bramki do urządzenia podczas “parowania urządzenia z bramką”.
:::
![OTA AIS dom](/img/en/iot/mqtt_client.png)

#### Automatyczna komunikacja z Asystentem domowym

Automatycznie ustawiamy na urządzeniu, żeby przedstawiało się bramce (mamy włączone mqtt discovery). Wszystkie urządzenia z naszym oprogramowaniem automatycznie **dodane są do grupy dom** (nasłuchują poleceń wysyłanych do takiej grupy).
Bramka po uruchomieniu publikuje na tę grupę prośbę o przedstawienie się do urządzeń i ustala komunikację z nowymi urządzeniami. Każde urządzenie po restarcie lub zmianie parametrów wysyła do bramki informacje o swoim statusie oraz tym jak się z nim komunikować. Szczegółowo opisane jest to w dokumentacji bramki, w [sekcji MQTT](/docs/ais_bramka_mqtt)

#### Ustawienia lokalne

Nasza kompilacja oprogramowania Tasmota ma lokalne polskie ustawienia:

- polskie menu,
- regionalne serwery czasu NTP (pl.pool.ntp.org, 0.pl.pool.ntp.org),
- strefę czasową dla Polski,
- lokalizacja to środek polski (52.069528, 19.480300) do wykorzystania podczas ustawiania charmonogramu opartego na wschodzie i zachodzie słońca.


### Zabezpiecznia

W naszej kompilacji od wersji 9.1.0 dodaliśmy mechanizm zabezpieczenia (safeguard), przed wgraniem niepoprawnej wersji oprogramowania (z pominięciem ścieżki migracji).
Jest to element mechanizmu aktualizacji online, nad którym pracujemy.
