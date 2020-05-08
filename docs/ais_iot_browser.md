---
title: Obsługa urządzenia z przeglądarki
sidebar_label: Obsługa urządzenia z przeglądarki
---

## Wprowadzenie

:::tip
Jeśli jesteś posiadaczem **bramki IoT AIS dom** i chcesz podłączyć do niej **urządzenie AIS dom**, to możesz pominąć ten opis i przejść do **[Obsługa urządzenia z bramki AIS dom](/docs/ais_iot_gate) gdzie opisaliśmy jak dodać urządzenie za pomocą prostego kreatora.**
:::

Urządzenie z oprogramowaniem **AIS dom** jest autonomiczne i do podstawowych funkcjonalności nie potrzebuje żadnego dodatkowego komponentu, takiego jak lokalna bramka czy zdalny serwer (chmura). Poniżej przedstawiamy, w jaki sposób urządzenie może być sterowane za pomocą dowolnej przeglądarki internetowej.

## Konfiguracja Wi-Fi
Urządzenia AIS dom zapewniają bezprzewodowy punkt dostępu do łatwej konfiguracji Wi-Fi.

Podłącz urządzenie do źródła zasilania, następnie wprowadź je w tryb konfiguracji (bezprzewodowego punktu dostępu) wciskając szybko 4 razy przycisk na urządzeniu, tak jak to pokazano na animacji poniżej:


<img src="/img/en/iot/ais_s20_2.gif" align="center"/>


<img src="/img/en/iot/iot_ais_dom_wifi_step1.png" width="300px" align="left"/>



 Teraz na smartfonie (komputerze, tablecie, laptopie albo innym urządzeniu obsługującym sieć i Wi-Fi) wyszukaj punkt dostępu Wi-Fi o nazwie **dom_xxx_yyyyyy_zzzz** (gdzie xxx_yyyyyy_zzzz jest nazwą modelu i unikalnym identyfikatorem urządzenia) i połącz się z nim. W tym przykładzie punkt dostępu Wi-Fi ma nazwę dom_s20_3EB39C_5020.

:::important
Bezprzewodowy punkt dostępu na urządzeniu jest **aktywny tylko przez 3 minuty**. Jeśli przegapisz to okno czasowe, może być konieczne ponowne wprowadzenie go w tryb parowania.
:::

<img src="/img/en/iot/iot_ais_dom_wifi_step2.png" width="300px" align="right"/>
Po połączeniu się z Wi-Fi na urządzeniu otwórz http://192.168.4.1 w przeglądarce internetowej. Niektóre urządzenia mogą wyświetlić powiadomienie o potrzebie zalogowania się do sieci Wi-Fi, wybranie tej opcji powinno otworzyć powyższy adres automatycznie.


Na tej stronie (http://192.168.4.1) możesz przeskanować dostępne sieci Wi-Fi, następnie z listy wykrytych sieci wybrać swoją sieć Wi-Fi, do której chcesz podłączyć urządzenie.
<img src="/img/en/iot/iot_ais_dom_wifi_step3.png" width="300px" align="left"/>


Podaj następujące informacje:
- **SSID** - nazwa sieci Wi-Fi, do której podłączasz urządzenie.
> **Uwaga** w Identyfikatorze SSID ważna jest wielkość liter
- **Hasło** - hasło do sieci Wi-Fi, do której podłączasz urządzenie.
> **Uwaga** Hasło Wi-Fi musi mieć mniej niż 32 znaki i nie może zawierać znaków specjalnych (np. gwiazdki) lub białych znaków

Sprawdź, czy podałeś poprawne dane do sieci i kliknij **Zapisz**, aby zastosować ustawienia. Urządzenie uruchomi się ponownie i połączy się z siecią domową.
<img src="/img/en/iot/iot_ais_dom_wifi_step4.png" width="300px" align="center"/>



:::important
**UWAGA to jeszcze nie koniec!**
-----
Wysłaliśmy do urządzenia parametry, z jaką siecią WiFi ma się łączyć (skonfigurowaliśmy je do działania w naszej sieci WiFi). **Teraz należy ustalić jaki adres IP ma urządzenie w naszej sieci** - ten adres nadaje router i nie wiemy, jaki on jest.

Żeby ustalić, jaki adres IP ma urządzenie w naszej sieci, należy przejść do kolejnego punktu tej instrukcji [Adres IP urządzenia](/docs/ais_iot_browser#adres-ip-urządzenia).

Po ustaleniu adresu IP będziemy mogli otworzyć ten adres IP za pomocą przeglądarki internetowej z dowolnego urządzenia (komputera, telefonu, tabletu itd.) podłączonego do tej samej sieci i będziemy mieli pełny dostęp do urządzenia w swojej lokalnej sieci.
:::

## Adres IP urządzenia

Sprawdź adres IP nowo podłączonego urządzenia w Twojej sieci.

Możesz to zrobić na swoim routerze, wystarczy, że sprawdzisz jakie IP ma nowo podłączone urządzenie o tej samej nazwie, co miał punkt dostępu Wi-Fi na urządzeniu (w tym przykładzie było to dom_s20_3EB39C_5020).

Jeśli nie masz dostępu do routera, możesz znaleźć swoje nowe urządzenie za pomocą skanera IP, np:

* [Fing](https://www.fing.com/products/) - na Androida lub iOS
* [Angry IP Scanner](https://angryip.org/) - open source dla systemów Linux, Windows i Mac (wymagana Java)
* [Super Scan](https://sectools.org/tool/superscan/) - darmowe narzędzie dostępne tylko w systemie Windows

Gdy ustalisz jaki adres IP ma urządzenie, to otwórz ten adres IP za pomocą przeglądarki internetowej i **masz pełny dostęp do urządzenia w swojej lokalnej sieci**.

![MQTT aktywacja](/img/en/iot/iot_web_app.png)
