---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Greta
tags: ["ais dom", "home assistant", "zigbee2mqtt", "ais-tasmota"]
---

<div class="IntroAisBlogMenu" >
<div>

![AIS](/img/en/blog/202105/greta.png)

</div>

<h2>Greta</h2>

</div>

:::caution Uwaga - BETA.

 **To jest informacja o wydaniu wersji beta systemu AIS 
 (a zatem prace nad ostateczną wersją są jeszcze w toku).**

Wydanie na kanale stabilnym  ![AIS Tasmota](/img/en/blog/202105/construction_3.png) planowane jest na 26 maja 2021.

:::



<!--truncate-->


## ABC bezproblemowej aktualizacji

:::tip Kopia zapasowa.
### ![A](/img/en/blog/202009/alpha-a-circle.png) Kopia zapasowa.

UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important Konsola i logi na bramce.
### ![B](/img/en/blog/202009/alpha-b-circle.png) Konsola i logi na bramce.

W razie problemów z aktualizacją, sprawdź procedurę [Aktualizacja ręczna](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step).
To może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution Poczekaj cierpliwie.
### ![C](/img/en/blog/202009/alpha-c-circle.png) Cierpliwość. Pierwsze uruchomienie po aktualizacji trwa dłużej - poczekaj cierpliwie.

 **Po aktualizacji pierwsze uruchomienie może trwać długo.**
 W tym czasie aktualizowane są biblioteki do integracji dodanych na bramce i baza danych jest migrowana do nowego formatu.
 **Poczekaj cierpliwie na zakończenie aktualizacji. 
 Możesz sprawdzić status uruchamiania(dowiedzieć się co robi system) w konsoli komendą ``htop`` i/lub ``pm2 logs``** 
:::



## ![](/img/en/blog/202105/greta.png) Greta


W tej wersji aktualizujemy następujące pakiety binarne:
- Python do najnowszej wersji 3.9.4
- Rclone do najnowszej wersji 1.55
- FFmpeg do najnowszej wersji 4.4
- Clang/llvm do najnowszej wersji 12.0.0

... i jeszcze ponda 20 innych pakietów zainstalowanych na bramce.

Aktualizacja może trwać dłużej, w zależności od tego ile macie na bramkach integracji i jakie dodatkowe pakiety zostaną zainstalowane lub czasami skompilowane na bramce.
Poczekajcie cierpliwie, zawsze można sprawdzić co robi bramka w konsoli poleceniem ``htop``


### ![](/img/en/blog/202104/robot.png) Tasmota 9.4.0 Leslie

Uwaga wykryliśmy błąd w Tasmota, w pewnych okolicznościach (po utracie połączenia z MQTT i wystąpieniu problemu z ustaleniem adresu IP bramki MQTT) może dojść do tego, że urządzenie zrestartuje się szybko 6 razy i zmieni model.
Jest wpis na blogu w tym temacie. 
Jeżeli kogoś dotknoł taki problem (tak jak nas) to sugerujemy aktualizację do wersji AIS-Tasmota 9.4.0 Leslie w której zablokowaliśmy samoczynną zmianę modelu urządzenia. 



### ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt


Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.8.3 Ponad **1430** wspieranych urządzeń. 
To jest wydanie poprawkowe, wszystkie szczegóły tu [1.18.3](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.18.3)

![z2m](/img/en/blog/202103/z2m.png)


Gdyby ktoś miał problem ze swoim adapterem Zigbee to tak jak już wspominaliśmy - dodaliśmy usługę programania urządzeń - szczegóły na forum:

 [![](/img/en/blog/202102/ais_devices_suport.png)](https://ai-speaker.discourse.group/t/usluga-programowania-urzadzen-w-ai-speaker/1368)



### ![](/img/en/blog/202101/hass.png) Asystent domowy

Najnowsza wersja Asystenta domowego, czyli naszego pakietu ``ais-dom`` bazującego na najnowszym stabilnym Home Assistant Core.

![Asystent domowy](/img/en/blog/202104/social.png)

Szczegółowy opis zmian w Home Assistant dostępny na blogu projektu Home Assistant: [2021.4: For our advanced users](https://www.home-assistant.io/blog/2021/04/07/release-20214/)

Największa zmiana to możliwość śledzienia wykonania automatyzacji. Poniższy zrzut ekranu przedstawia poprzednie uruchomienie automatyzacji. Automatyzacja jest wyświetlana za pomocą interaktywnego wykresu, który przedstawia ścieżkę, którą przeszła automatyzacja. Każdy węzeł na wykresie można kliknąć, aby wyświetlić szczegółowe informacje o tym, co stało się z automatyzacją podczas tego konkretnego kroku. 👏 brawo HA! Bardzo ładnie! 

![](/img/en/blog/202104/trace.jpeg)



## ![](/img/en/blog/202105/placard.png) AIS DEV3 

Wprowadziliśmy już na stałe do oferty nową bramkę **AIS DEV3** - jest to jak do tej pory najszybsza, najprostsza w konfiguracji i obsłudze bramka AIS.

![AIS dom DEV2](/img/en/bramka/ais_dev3_in_box.jpg)


Parametry nowej bramki są opisane tu: [Bramka AIoT](/docs/ais_bramka_index), dodaliśmy też nowy konfigurator, który ma ułatwić [Pierwsze uruchomienie](/docs/ais_bramka_first_run_the_gate).

Zobaczcie co mówi o nim Greta:
:::tip Greta

"Szczerze polecam AIS DEV3! To naprawdę świetny sprzęt o ogromnych możliwościach!." 

:::

![Greta](/img/en/blog/202105/greta.png)

-------

##### AI-Speaker 05/2021
