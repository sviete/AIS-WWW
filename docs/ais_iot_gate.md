---
title: Wprowadzenie
sidebar_label: Wprowadzenie
---

Urządzenia z oprogramowaniem **AIS dom** w bardzo łatwy sposób można zintegrować z bramką **AIS dom**. Taka integracja umożliwia [łatwą konfigurację urządzenia](/docs/ais_iot_gate/#konfiguracja-urządzenia) oraz wykorzystanie [pełnych możliwości urządzenia](#możliwości-urządzenia-po-dodaniu-do-bramki).

## Dostęp do urządzeń AIS dom z aplikacji

Ustawienia Twoich urządzeń z oprogramowaniem AIS dom dostępne są po wybraniu z menu po lewej stronie opcji **Konfiguracja** a następnie drugiej opcji na liście **Konfiguracja urządzeń AIS dom**. Tak jak to pokazano na zdjęciu poniżej.

![Menu Konfiguracja urządzeń AIS dom](/img/en/iot/iot_ais_dom_devices_menu.png)

### Producent AI-Speaker

W tabeli z urządzeniami AIS dom wyświetlamy wszystkie urządzenia działające na naszym [darmowym oprogramowaniu](/docs/ais_iot_firmware_index) Producentem jest **AI-Speaker**.


![Tabela z urządzeniami AIS dom](/img/en/iot/iot_ais_dom_devices_table.png)



### Menu urządznia

Po wybraniu urządzenia przechodzimy do widoku w którym mamy dostępne wszystkie informacje o urządzeniu, jego encje, dostęp do menu na urządzeniu oraz możliwość dodania automatyzacji, scen oraz skryptów powiązanych z urządzeniem.

![RF 433](/img/en/iot/iot_ais_dom_device_config_0.png)


Dostępne opcje konfiguracji zależą od tupu urządzenia, w przypadku Bramki RF 433, na tej stronie możemy nauczyć Asystenta kodów pilota radiowego (lub innego urządzenia wysyłającego kody radiowe o częstotliwości 433) i łatwo dodać przyciski wysyłające nauczone kody do aplikacji. Więcej w sekcji [Bramka RF 433](/docs/ais_iot_gate_device_rf433).


![RF 433](/img/en/iot/iot_ais_dom_device_config.png)


Z tego miejsca możemy też przejść do wszystkich opcji konfiguracji dostępnych na urządzeniu

![RF 433](/img/en/iot/iot_ais_dom_device_config1.png)


oraz do konsoli urządzenia

![RF 433](/img/en/iot/iot_ais_dom_device_config2.png)




## Możliwości urządzenia po dodaniu do bramki

Po dodaniu urządzenia do bramki AIS dom, można:

- sterować urządzeniem głosowo:
wystarczy nazwać urządzenie np. "światło w sypialni" lub "podlewanie trawnika" a następnie powiedzieć "włącz światło w sypialni" lub "włącz podlewanie trawnika". Więcej w sekcji [Wbudowane komendy](/docs/ais_app_assistent_commands).

- automatyzować sterowanie:
w aplikacji można w prosty sposób stworzyć reguły włączenia bądź wyłączenia urządzeń w zależności od obecności, pozycji słońca czy statusu innych urządzeń. Więcej w sekcji [Automatyzacja Asystenta domowego](/docs/ais_bramka_automation)

- tworzyć sceny:
Sceny to definicja stanu, w którym chcesz, aby były Twoje urządzenia. Na przykład w scenie, którą nazwiemy "romantyczna kolacja" można określić, że światło główne powinno być włączone, kinkiety powinny być przyciemnione i ma być odtwarzana romantyczna playlista ze Spotify. Podobnie możemy dodać scenę "oglądanie filmu", gdzie rolety są zasłonięte, światło główne wyłączone a telewizor odtwarza film z Netflix-a.


- logować i analizować historię statusu urządzeń. W interfejsie użytkownika wyświetlamy wykresy pozwalające na sprawdzenie stanu urządzeń w czasie. Dzięki temu możemy monitorować np. zmiany temperatury w pokojach, historię odtwarzania audio oraz status wszystkich innych urządzeń zintegrowanych z bramką.
