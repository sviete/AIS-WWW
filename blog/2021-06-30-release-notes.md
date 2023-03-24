---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Hugo
tags: ["ais dom", "mqtt", "tts", "home assistant", "zigbee", "tasmota", "zwave"]
---

<div>

![AIS](/img/en/blog/202106/tts_local.png)

</div>

<!--truncate-->


## ABC bezproblemowej aktualizacji

:::tip Kopia zapasowa.
### ![A](/img/en/blog/202009/alpha-a-circle.png) Kopia zapasowa.

UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important Konsola i logi na bramce.
### ![B](/img/en/blog/202009/alpha-b-circle.png) Konsola i logi na bramce.

W razie problemów z aktualizacją, sprawdź procedurę [Aktualizacja z konsoli](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step).
To może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution Poczekaj cierpliwie.
### ![C](/img/en/blog/202009/alpha-c-circle.png) Cierpliwość. Aktualizacja i pierwsze uruchomienie po aktualizacji trwa dłużej - poczekaj cierpliwie.

 **Po aktualizacji pierwsze uruchomienie może trwać długo.**
 W tym czasie aktualizowane są biblioteki do integracji dodanych na bramce.
 **Poczekaj cierpliwie na zakończenie aktualizacji.
 Możesz sprawdzić status uruchamiania (dowiedzieć się co robi system) w konsoli komendą ``htop`` i/lub ``pm2 logs``**
:::



## ![](/img/en/blog/202106/hugo.png) Hugo



### 🆓 Darmowe usługi ☁️


Nasze usługi w chmurze na bramkach DEV są hostowane przez organizację fosshost.org.

![](/img/en/blog/202106/fosshost_big.png)

Fosshost to organizacja non-profit, skupiona na wspieraniu projektów OpenSource.

Węcej o darmowych usługach AIS w dokumentacji [Usługi zdalne, zasady](/docs/ais_dom_cloud_services_terms)



### zWave i Zigbee

Od tej wersji wspieramy jednoczesną możliwość używania 2 adapterów. Jolka sama rozpozna, na którym porcie jest adapter ``/dev/ttyACM...`` dostosuje ustawienia serwisów oraz je uruchomi.

Więcje informacji w dokumentacji integracji: [Zwave](/docs/ais_app_integration_zwave) i [Zigbee](/docs/ais_app_integration_zigbee)

![](/img/en/blog/202106/zwave.png)


### Ustawienia USB

W konfiguracji można wybrać czy Asystent ma sam rozpoznawać adaptery USB i uruchamiać automatycznie domyślne usługi Zigbee i Zwave. Oraz czy ma głosowo powiadamiać o dodaniu i usunięciu urządzenia USB.


![](/img/en/blog/202106/usb.png)


Jeżeli chcesz korzystać z innych integracji do zWave i Zigbee niż nasze standardowe Zigbee2Mqtt i zWaveJs2Mqtt, to wystarczy, że wyłączysz automatyczne rozpoznawania urządzeń i sam skonfigurujesz integrację wg własnych potrzeb.


[Dokumentacja - Konfiguracja bramki - USB](/docs/ais_bramka_configuration_usb)


### Filtrowanie zapisu zdarzeń


Niektóre integracje potrafią rejestrować z bardzo dużą częstotliwością i generować ogromne ilości danych, dlatego wymagamy zdefiniowania filtra zapisu do bazy. Filtr pozwala na określenie, co ma być zapisywane w bazie (parametr include) oraz czego nie chcemy zapisywać (parametr exclude). Używamy nazewnictwa zgodnego z Home Assistant. W standardowej konfiguracji dostarczamy przykładową konfigurację filtra, w którym są zdefiniowane wszystkie możliwe atrybuty.


![](/img/en/blog/202106/filtr.png)


Więcej informacji w dokumentacji [Konfiguracja bramki - Logi i baza danych](/docs/ais_bramka_configuration_logs_and_db)

### AIS TTS Local, ulepszenia

![](/img/en/blog/202106/tts_local.png)


Na blogu wyjaśniamy dlaczego to właśnie lokalny TTS działający na bramce AIS nadaje się do profesjonalnych zastosowań:
[AIS - profesjonalny offline TTS](https://ai-speaker.discourse.group/t/ais-profesjonalny-offline-tts/1893)


Ponieważ inne głośniki nie potrafią tak, jak bramka AIS, jednocześnie odtwarzać muzyki i czytać tekstu (bo nie mają TTS), dlatego od tej wersji wysyłamy do nich powiadomienie w postaci audio:

![](/img/en/blog/202106/tts.jpeg)


### Conbee2

Zostaliśmy oficjalnym dystrybutorem Conbee2 w Polsce

![](/img/en/blog/202106/ais.jpeg)


Więcej na forum: [Zigbee ConBee 2 już w sprzedaży!](https://ai-speaker.discourse.group/t/zigbee-conbee-2-juz-w-sprzedazy/1844)

To nie koniec fajnych rzeczy, które zamierzamy wprowadzić do sprzedaży i wspierać - będzie się działo ;)

![](/img/en/blog/202106/ais2.jpeg)


### ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt


Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.9.1 Ponad **1490** wspieranych urządzeń i interfejs w języku Polskim:


![z2m](/img/en/blog/202106/zigbee2mqtt_pl.png)

Wszystkie szczegóły tu [1.19.1](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.19.1)


### ![](/img/en/blog/202101/hass.png) Asystent domowy

Najnowsza wersja Asystenta domowego, czyli naszego pakietu ``ais-dom`` bazującego na najnowszym stabilnym Home Assistant Core.
W tej wersji jest sporo poprawek i aktualizacji bibliotek. W tym **UWAGA** aktualizacja frontend (aplikacji webowej), aby korzystał z Lit 2.0 (komponenty webowe w aplikacji):

https://lit.dev/


Czyli oczywiście jak zwykle będzie mnóstwo świetnych ulepszeń, ale także kilka przełomowych zmian.

:::caution Lit 2.0. - Duża aktualizacja bibliotek w aplikacji webowej
###  Wszystkie nasze elementy w aplikacji webowej zostały przetestowane i działaję bez problemów z Lit 2.0

Jeżeli używasz niestandardowych kart czy innych elementów interfejsu to ich autor musi zapewnić zgodności karty z Lit 2.0... inaczej może być problem z wyświetlaniem tej karty w aplikacji webowej.
:::


Szczegółowy opis zmian w Home Assistant dostępny na blogu projektu Home Assistant: 

[Upgrade to Lit 2.0](https://developers.home-assistant.io/blog/2021/05/19/lit-2.0)


## Ogłoszenia 

### PRO START

Dodajemy do dokumentacji informację o bramce PRO, to ostatni etap przed jej wprowadzeniem do oferty.

![pro](/img/en/blog/202106/pro.png)

Pro to nie tylko nowa, szybka bramka, to też nasz nowy model biznesowy i pierwsza oferta dedykowana dla klienta biznesowego z możliwością dodania funkcjonalności oraz gwarancji na usługi. 

Napiszemy o PRO więcej, jak tylko skończymy uzupełniać dokumentację - postaramy się do końca tygodnia.


-------------------------------------------------------------------------

### ![](/img/en/blog/202105/placard.png) AIS DEV3

Wprowadziliśmy już na stałe do oferty nową bramkę **AIS DEV3** - jest to jak do tej pory najszybsza, najprostsza w konfiguracji i obsłudze bramka AIS.

AIS DEV3 to bramka, którą możesz sterować urządzeniami głosowo kilka minut po jej wyjęciu z pudełka.
Dodatkowo masz wbudowaną obsługę audio, zdalny dostęp i konfiguracje za pośrednictwem interfejsu użytkownika. Dzięki AIS DEV3 nie trzeba już nagrywać systemu na kartę SD, majstrować przy ustawieniach routera, wiedzieć co to dynamiczny DNS lub YAML. Oczywiście bez żadnych opłat miesięcznych i reklam w aplikacji.

![AIS dom DEV3](/img/en/bramka/ais_dev3_in_box.jpg)


Zobaczcie co mówi o bramce AIS DEV3 Hugo:
:::tip Hugo

"Bardzo dobrze działa mi się na AIS DEV3! To naprawdę świetny sprzęt o ogromnych możliwościach! Szczerze polecam."

:::

![Greta](/img/en/blog/202106/hugo.png)


Parametry nowej bramki są opisane tu: [Bramka AIoT](/docs/ais_bramka_index), dodaliśmy też nowy konfigurator, który ma ułatwić [Pierwsze uruchomienie](/docs/ais_bramka_first_run_the_gate).

-------

##### AI-Speaker 06/2021
