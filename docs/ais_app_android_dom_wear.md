---
title: "AIS dom Wear OS"
sidebar_label: AIS dom Wear
---


## Wprowadzenie

AIS dom Wear OS to niezależna (niewymagająca aplikacji mobilnej) aplikacja, która działa na urządzeniach z systemem Wear OS.


![Wear OS](/img/en/blog/202009/wear_os_1.jpeg)


## Instalacja na zegarku

Aplikacja dostępna jest za darmo (bez reklam, mikropłatności itp) w sklepie [Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom) pod nazwą AIS dom.
<center>

![Google Play](/img/en/frontend/barcode_go_to_apk_in_google_play.png)

![Google Play](/img/main/google-play-badge.png)

</center>

Kod źródłowy aplikacji dostępny jest w naszym [publicznie dostępnym repozytorium](https://github.com/sviete/AIS-dom-wear)
Podpisane wersje publikujemy też na naszym [serwisie ze składowymi systemu](https://powiedz.co/ota/)



## Integracja z bramką


### Kreator integracji na bramce

Integrację rozpoczynamy na bramce uruchamiając krator integracji.


![Wear OS](/img/en/frontend/wear_os_wiz_1.png)

Następnie przechodzimy krok po kroku prosty konfigurator integracji:

![Wear OS](/img/en/frontend/wear_os_wiz_2.png)

![Wear OS](/img/en/frontend/wear_os_wiz_3.png)

![Wear OS](/img/en/frontend/wear_os_wiz_4.png)

![Wear OS](/img/en/frontend/wear_os_wiz_5.png)

### Wpisanie kodu PIN w aplikacji na zegarku


Po pierwszym uruchomieniu aplikacji na zegarku należy podać jednorazowy kod PIN wygenerowany podczas dodawania integracji na bramce.

<center>

![Wear OS](/img/en/frontend/wear_os_wiz_6.png)

</center>

:::caution Uwaga
Kod PIN jest ważny tylko 2 minuty. Jeśli przegapiłeś to okno czasowe i nie wpisałeś kodu PIN na zegarku, to wykonaj integrację **AIS Wear OS** ponownie.
:::


Po wpisaniu i zatwierdzeniu kodu na zegarku

<center>

![Wear OS](/img/en/frontend/wear_os_wiz_7.png)

</center>

pojawi się informacja o identyfikatorze bramki, do której nastąpiło połączenie i nastąpi przekierowanie na ekran główny aplikacji

<center>

![Wear OS](/img/en/frontend/wear_os_wiz_8.png)

</center>


## Używanie aplikacji

### Komendy głosowe

Po pierwszym naciśnięciu mikrofonu pojawi się pytanie o dostęp do mikrofonu

<center>

![Wear OS](/img/en/frontend/wear_os_wiz_10.png)

</center>


Gdy pozwolimy na dostęp, to możemy wysyłać komendy głosowe do swojej bramki AIS dom.

### Synchronizacja z bramką

Możemy włączyć synchronizację z bramką, w ten sposób zezwalamy na wysyłanie do aplikacji na zegarku zapytań z bramki. Działa to w podobny sposób jak Komendy wysyłane z bramki do aplikacji mobilnej
<center>

![Wear OS](/img/en/frontend/wear_os_wiz_11.png)

</center>

:::info Informacja
Docelowo będziemy okresowo wysyłać z zegarka do bramki raporty (tętno, aktywność ...) podobnie jak z aplikacji mobilnej.
:::


