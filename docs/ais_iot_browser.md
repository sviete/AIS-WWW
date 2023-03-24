---
title: Konfiguracja urządzenia z przeglądarki
sidebar_label: Konfiguracja urządzenia z przeglądarki
---

## Wprowadzenie

Urządzenie z oprogramowaniem **AIS dom** jest autonomiczne i do podstawowych funkcjonalności nie potrzebuje żadnego dodatkowego komponentu, takiego jak lokalna bramka czy zdalny serwer (chmura). Poniżej przedstawiamy, w jaki sposób urządzenie może być konfigurowane i sterowane za pomocą dowolnej przeglądarki internetowej.

## Konfiguracja Wi-Fi

Urządzenia AIS dom zapewniają bezprzewodowy punkt dostępu do łatwej konfiguracji Wi-Fi.

### Wprowadzenie urządzenia w tryb parowania / bezprzewodowego punktu dostępu

Jeśli podłączasz urządzenie po raz pierwszy do swojej sieci WiFi, to żeby wprowadzić je w tryb bezprzewodowego punktu dostępu wystarczy podłączyć urządzenie do źródła zasilania.

![wifi](/img/en/iot/iot_ais_dom_wifi_step1.png)


:::caution
Jeśli urządzenie było już dodane do sieci to, żeby ponownie wprowadzić je w tryb bezprzewodowego punktu dostępu, należy **nacisnąć i przytrzymać przez 4 sekundy** przycisk na urządzeniu, lub w krótkich odstępach czasu nacisnąć przycisk 6 razy (lub więcej).
:::

Następnie na smartfonie (komputerze, tablecie, laptopie albo innym urządzeniu obsługującym sieć i Wi-Fi) wyszukaj punkt dostępu Wi-Fi o nazwie **dom_xxx_yyyyyy_zzzz** (gdzie xxx_yyyyyy_zzzz jest nazwą modelu i unikalnym identyfikatorem urządzenia) i połącz się z nim. W tym przykładzie punkt dostępu Wi-Fi ma nazwę dom_s20_3EB39C_5020.



> Bezprzewodowy punkt dostępu na urządzeniu jest **aktywny tylko przez 3 minuty**. Jeśli przegapisz to okno czasowe, może być konieczne ponowne wprowadzenie go w tryb parowania.
W tym celu wystarczy, że odłączysz urządzenia od zasilania i połączysz ponownie lub **naciśniesz i przytrzymasz przez 4 sekundy przycisk na urządzeniu**, lub nacisnąć 6 razy (lub więcej) przycisk w krótkich odstępach czasu.


> Kiedy łączy się z siecią na urządzeniu, możesz otrzymać ostrzeżenie, że nie ma połączenia z Internetem i zostać poproszony o połączenie z inną siecią. **Nie zezwalaj urządzeniu mobilnemu na wybór innej sieci.**


### Połączenie do urządzenia i dodanie go do domowego WiFi

Po połączeniu się z Wi-Fi na urządzeniu otwórz http://192.168.4.1 w przeglądarce internetowej.
Niektóre urządzenia mogą wyświetlić powiadomienie o potrzebie zalogowania się do sieci Wi-Fi, wybranie tej opcji powinno otworzyć powyższy adres automatycznie.

![wifi](/img/en/iot/iot_ais_dom_wifi_step2.png)


Na tej stronie (http://192.168.4.1) możesz przeskanować dostępne sieci Wi-Fi, następnie z listy wykrytych sieci wybrać swoją sieć Wi-Fi, do której chcesz podłączyć urządzenie.

![wifi](/img/en/iot/iot_ais_dom_wifi_step3.png)


Podaj następujące informacje:
- **SSID** - nazwa sieci Wi-Fi, do której podłączasz urządzenie.
> **Uwaga** w Identyfikatorze SSID ważna jest wielkość liter
- **Hasło** - hasło do sieci Wi-Fi, do której podłączasz urządzenie.
> **Uwaga** Hasło Wi-Fi musi mieć mniej niż 32 znaki i nie może zawierać znaków specjalnych (np. gwiazdki) lub białych znaków


Sprawdź, czy podałeś poprawne dane do sieci i kliknij **Zapisz**, aby zastosować ustawienia. Urządzenie uruchomi się ponownie i połączy się z siecią domową:

![wifi](/img/en/iot/iot_ais_dom_wifi_step4.png)



:::important informacja
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
