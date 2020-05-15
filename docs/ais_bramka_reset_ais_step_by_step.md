---
title: "Pełny reset aplikacji"
sidebar_label: Wykonanie pełnego resetu aplikacji
---

## Wykonanie pełnego resetu aplikacji

Pełny reset aplikacji polega na usunięciu wszystkich ustawień i kodów aplikacji **Asystent domowy** na bramce i nadpisaniu ich domyślnymi, najnowszymi kodami i ustawieniami.
 **Pełny reset aplikacji to bezpieczny i prosty sposób na rozwiązywanie problemów z urządzeniem**

:::tip Wskazówka
Jeśli eksperymentujesz z ustawieniami systemu, tworzysz własne integracje, zmieniasz kody na bramce, nadpisujesz konfigurację i coś działa nie tak, to
opisany tu **Pełny reset aplikacji** jest zalecanym bezpiecznym sposobem na rozwiązywanie problemów z systemem.
:::



Jeżeli nie definiowałeś własnych integracji i konfiguracji, to ten sposób może być najwygodniejszy do szybkiej aktualizacji systemu.

Od strony użytkownika wykonanie tego kroku jest bardzo proste i sprowadza się do przejścia do ustawień `serwisu Asystent domowy` na bramce i wybrania opcji z menu aplikacji - tak jak to pokazano na wideo poniżej.
Cały proces jest szybki, restart zajmuje około 4 minuty (jeśli mamy łącze internetowe z transferem na poziomie 10 Mbps).
Trwa to tak szybko, ponieważ nie musimy analizować, pobierać i aktualizować wszystkich zainstalowanych pakietów systemu, jak to ma miejsce podczas normalnej aktualizacji.

![Ustawienia serwisu Asystent domowy](/img/en/bramka/settings_ais_service.png)


![Ustawienia serwisu Asystent domowy](/img/en/bramka/settings_ais_service_app_reset.png)

:::caution Uwaga
**Uwaga!** po takim restarcie / takiej aktualizacji mamy kompletnie nowy system Asystent domowy z domyślnymi ustawieniami i część urządzeń może wymagać ponownej integracji z bramką.

Jeśli wykonałeś wcześniej działającą kopię konfiguracji, to po wykonaniu resetu możesz ją przywrócić korzystając z opcji [kopia zapasowa konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji)
:::

## Co się dzieje podczas resetu ustawień Asystenta domowego do domyślnych

Technicznie procedura polega na wykonaniu trzech kroków:

1. Skasowaniu wszystkich bieżących kodów i konfiguracji użytkownika.
2. Pobraniu spakowanej paczki startowej z najnowszą wersją kodów i konfiguracji Asystenta domowego.
3. Rozpakowaniu najnowszej wersji z domyślnymi ustawieniami.


## Przebieg pełnego resetu na wideo

<iframe width="560" height="315"  src="https://www.youtube.com/embed/3FO9hBl1V90" frameborder="0" allowfullscreen></iframe>
