---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Leon
tags: ["mqtt", "home assistant", "zigbee"]
---

<div class="IntroAisBlogMenu" >

![AIS](/img/en/blog/202112/lion.png)

</div>

<!--truncate-->


## ABC bezproblemowej aktualizacji

:::tip Kopia ![A](/img/en/blog/202112/cloud-upload.png)

Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji).
W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.

:::

:::important Konsola ![B](/img/en/blog/202112/console.png)

W razie problemów z aktualizacją z aplikacji, uruchom [aktualizację z konsoli](/docs/ais_bramka_update_manual), w ten sposób będziesz miał na bieżąco wgląd w logi i postęp aktualizacji oraz będziesz mógł zdiagnozować przyczynę problemu.
:::

:::caution Poczekaj ![C](/img/en/blog/202112/timer-sand.png)

Aktualizacja i pierwsze uruchomienie po aktualizacji może trwać dłużej - poczekaj cierpliwie.
W każdej chwili możesz sprawdzić status systemu (dowiedzieć się co robi bramka) w konsoli komendą ``htop`` i/lub ``pm2 logs``
:::

## Potrzebujesz pomocy?

:::warning Reset ![D](/img/en/blog/202112/broom.png)
Jeżeli nie jesteś w stanie zdiagnozować problemu - nie przejmuj się, jesteśmy przygotowani, żeby Ci pomóc.
Stworzyliśmy specjalnie dla Ciebie prostą procedurę, która pomoże przywrócić domyślne kody i ustawienia systemu - zapoznaj się z opisem: [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step).
:::


:::important Programowanie w serwisie ![D](/img/en/blog/202112/lifebuoy.png)
Jeżeli nie jesteś w stanie wykonać procedury pełnego resetu i Twój system nadal nie działa, to możesz wysłać nam urządzenie do zaprogramowania.
Szczegóły opisane na forum w wątku: [Programowanie w serwisie](https://ai-speaker.discourse.group/t/usluga-programowania-urzadzen-w-ai-speaker/1368)
:::

## ![](/img/en/blog/202112/mini_lion.png) Leon


W tej wersji systemu uprościliśmy sposób instalacji oraz zmieniliśmy cykl wydawniczy (jesteśmy bardziej niezależni od wydań Home Assistant i innych składowych systemu) i kanały z kodami systemu. Dodatkowo, oficjalnie wydajemy nowe aplikacje mobilne w Apple App Store i Google Play.

Te zmiany to oczywiście odpowiedź na potrzeby naszych użytkowników oraz na dostosowanie naszej oferty PRO do wymagań klientów biznesowych.


### AIS - zmiany w wydawaniu wersji


#### Nowy kalendarz wydań

Tak jak zapowiadaliśmy i wyjaśniliśmy jakiś czas temu na forum - wprowadzamy nowy kanał wydań ALFA i zmieniamy częstotliwość wydań:


[![](/img/en/blog/202112/wydania_zapowiedz.png)](https://ai-speaker.discourse.group/t/wydania-ais-zapowiedz-zmiany/2163)


Nowe daty wydań na poszczególnych kanałach:
- Kanał ALFA -
tu wydajemy na bieżąco, jak coś napiszemy albo zintegrujemy z HA, Zigbee2Mqtt itd…

- Kanał BETA -
na BETA będziemy wydawali tak, jak dotychczas na PROD, czyli raz w miesiącu, ale w pierwszą środę miesiąca.

- Kanał PROD -
na tym kanale będziemy wydawali początkowo co 3 miesiące a docelowo co 6 miesięcy, w ostatni piątek miesiąca.


#### Prostszy sposób instalacji

Nie kompilujemy już zależności na bramkach. Dzięki temu jesteśmy w stanie łatwiej instalować nowe wersje dostarczając (kopiując) już skompilowane pakiety z naszych bramek. Oczywiście kompilacja ze źródeł nadal jest możliwa i jeśli ktoś dokładnie wie, co robi, to może nadal kompilować na bramce źródła programów w wielu językach (C/C++, Go, Rust, TS/NodeJs itd..).

Aktualizacja systemu z aplikacji:

![AIS](/img/en/blog/202112/instalacja_z_aplikacji.png)

Aktualizacja systemu z konsoli:

![Aktualizacja](/img/en/bramka/update_from_console.png)


#### Pomoc - "Software release manager" i "Zigbee2Mqtt package builder" 

Dodatkowo miło nam poinformować, że mamy pomoc ze strony społeczności przy wydawaniu wersji:

- **"Software release manager"** to nowa funkcja, którą przyjął nasz użytkownik Stravi, który będzie pomagał wykonywać nam wersje i je udostępniać na kanałach aktualizacji.

- **"zigbee2mqtt package builder"** - budowanie paczek do Zigbee2Mqtt przyjął na siebie nasz użytkownik Adam


#### Dziękujemy za zaangażowanie się i pomoc :)

To nie koniec, z czasem będziemy ten cały proces **"budowania i wydawania wersji"** oddawać w ręce społeczności i w ten sposób my będziemy mieli mniej pracy a Wy większą kontrolę nad oprogramowaniem działającym na Waszych bramkach ais dom.


### AIS PRO1 -pierwszy większy komercyjny projekt na PRO1

AIS PRO1 był od kilku miesięcy rozwiajany pod komercyjny projekt domowej rozdzielnicy elektrycznej z automatyką przewodową.

Można sporo powiedzieć o tym projekcie miłych i dobrych rzeczy. Jednak jak mawiali moi rodzice, **dobrze jest być miłym, ale ważniejsze jest być szczerym** - gdy przed wdrożeniem okazało się, że nie ma zakładanego wolumenu sprzedaży oraz budżetu na serwis, to niestety wszystko legło w gruzach :(

![End of The Pro](/img/en/blog/202112/end_of_the_pro.jpg )

Oczywiście porzucenie tego projektu nie było dla nas proste. Byliśmy w ten projekt zaangażowani na 150%. Minie jeszcze trochę czasu zanim się uda wszystko przepracować, podnieść z dołka i wrócić silniejszym z lepszym projektem.


![End of The Pro](/img/en/blog/202112/obawy.jpg)


Na tą chwilę wiemy, że model biznesowy sam się nie zrobi i że jak klient sam nas znajduje i nie do końca wie co chce zrobić, to trzeba dość szybko "mocnego firewall-a wdrażać, bo inaczej szkoda czasu". 
Oczywiście są też pozytywne aspekty - lekcje życia są bezcenne i następnym razem będzie lepiej - to wiemy na pewno! :) 


### AIS - aplikacje dodatkowe

Odświeżyliśmy aplikację na tablet, publikujemy też nowe wersje aplikacji mobilnych i na zegarki. Podczas pierwszego uruchamiania bramki AIS dom, informujemy o możliwości pobrania dodatkowych aplikacji na tablet (panel sterowania) oraz na urządzenia mobilne.

![AIS](/img/en/blog/202112/aplikacje_ais.jpeg)



### Menedżer plików

Na bramce dostarczamy menedżer plików w formie aplikacji webowej. Menedżer plików zawiera edytor plików tekstowych oraz podgląd plików (tekst, audio, wideo). Aplikacja umożliwia pracę z plikami i katalogami w przeglądarce internetowej z dowolnego komputera, telefonu komórkowego lub tabletu.


![WEB cmd](/img/en/bramka/web_cmd.png)

więcej informacji w dokumentacji integracji [Menedżer plików](/docs/ais_app_integration_manager)

### AIS Android

Integrujemy się mocniej z systemem Android na bramce, dodaliśmy dwie wbudowane na bramkach AIS dom intgracje:

#### 1. AIS ADB 
To nowa wbudowana na bramkach AIS dom integracja.

![AIS](/img/en/blog/202112/AIS_Android.png)


Więcej o integracji w dokumentacji [AIS Android](/docs/ais_app_android)
#### Geneza powstania integracji

Nasza bramka działa na systemie Android. Zasadniczą różnicą pomiędzy bramką AIS DEV a Raspberry PI jest to, że AIS dom nie jest tylko serwerem bez interfejsu użytkownika (headless server), ale także pełnoprawnym urządzeniem do konsumpcji multimediów (media consumption device - fantazyjna nazwa dla urządzenia, które posiada odtwarzacze multimediów).

Na forum pojawiły się integracje z KODI, Amazon Prime, Plex i zainspirowało nas to do wprowadzenia oficjalnej integracji umożliwiającej sterowanie multimediami w systemie Android. Sterowanie odbywa się po interfejsie ADB, który obsługuje Android.

Dzięki systemowi Android, bramka AIS dom świetnie obsługuje multimedia, dzięki czemu jest oczywiście bardziej funkcjonalna dla końcowego użytkownika (w porównaniu z RaspberryPi).

![AIS](/img/en/blog/202112/RIP.jpeg)


W pierwszej wersji integracji AIS Android skupiliśmy się na sterowaniu odtwarzaczem Spotify, który jest fabrycznie zainstalowany na bramce.
Przeglądanie biblioteki Spotify zostało w ten sposób rozdzielone od odtwarzania wybranych pozycji na odtwarzaczu Spotify. Więcej na ten temat znajdziecie w dokumentacji: [Biblioteka Spotify](/docs/ais_app_spotify)



#### 2. AIS Android remote screen 
To nowa wbudowana na bramkach AIS dom aplikacja, która umożliwia przeglądanie ekranu aplikacji i systemu Android w aplikacji działającej w przeglądarce internetowej (lub mobilnym webview).

[![](/img/en/blog/202112/android.png)](https://github.com/sviete/AIS-ScreenStream)


 Główną ideą jest pokazywanie ekranu natywnych aplikacji systetmu Android, takich jak np. Spotify, w aplikacji webowej AI-Speaker. 

[![](/img/en/blog/202112/android2.png)](https://github.com/sviete/AIS-ScreenStream)


### AIS Easy - podsumowanie ankiety

![](/img/en/blog/202108/open_question.jpg)

Niektórzy z Was naprawdę przyłożyli się do zadania i opisali ciekawe rozwiązania, za co oczywiście dziękujemy, bo lektura była przednia! Bardzo możliwe, że w przyszłości jakaś część tych rozwiązań trafi pod Wasze strzechy :) A tym, którzy opisywali np. sterowanie domem już nie za pomocą głosu, ale myśli, musimy niestety powiedzieć, że raczej będą musieli czekać troszkę dłuuuużej ;) 
Nagroda główna (za odpowiedź na pytanie otwarte), czyli bramka AIS PRO1 powędruje do pewnego Pana, który w ankiecie opisał kilka super fajnych i ciekawych rzeczy. Obiecał, że pojawi się na forum, pochwali się nagrodą i pokaże społeczności, jak zrobić z nią kilka fajnych i całkowicie legalnych projektów (musieliśmy tu malutką część odfiltrować) ;) Nie będziemy przeklejać wpisu z ankiety, poczekamy na rozwinięcie z opisem krok po kroku dla Was wszystkich - nie możemy się już doczekać!

Z całego tego zamieszania z PRO1 jesteśmy też do tyłu z budową naszej siedziby i z zestawami AIS EASY... ale AIS EASY i tak miało trwać około 2 lat.
Poszliśmy teraz w prefabrykaty - drukowane ściany ze strunobetonu :) więc baaardzo możliwe, że zdążymy z czasem i za 2 lata pijemy kawę tu :) 

[![](/img/en/blog/202112/ais_easy.jpeg)](https://tasmota.github.io/docs/)


Oczywiście gdyby ktoś chciał pogadać o interesach, to zawsze możemy też spotkać się tu:

[![](/img/en/blog/202112/ais1.jpg)](https://tasmota.github.io/docs/)

[![](/img/en/blog/202112/ais2.jpg)](https://tasmota.github.io/docs/)



### ![](/img/en/blog/202112/robot.png) Tasmota 10.0.0 Norman

Kolejne wydanie oprogramowania dla urządzeń z układem ESP. W dokumentacji projektu przeczytacie o wszystkich zmianach i nowościach:

[![](/img/en/blog/202112/tasmota.png)](https://tasmota.github.io/docs/)


Nam się najbardziej podoba nowa funkcjonalność -Tasmota Mesh (TasMesh), która zapewnia komunikację między węzłami/brokerami za pomocą ESP-NOW. Oznacza to, że może niedługo urządzenia z ESP będzie można parować tak prosto, jak Zigbee.

Opisaliśmy tę wizję tu: 
https://github.com/arendst/Tasmota/discussions/14193

[![](/img/en/blog/202112/tasmo.png)](https://github.com/arendst/Tasmota/discussions/14193)



### ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt

Kliknijcie i zobaczcie nową stronę domową projektu Zigbee2Mqtt:
[![](/img/en/blog/202112/z2m.png)](https://www.zigbee2mqtt.io/)


Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.22.1 (w sumie dostarczamy kody z 3 wersji):

- [1.21.2](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.21.2)
- [1.22.0](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.22.0)
- [1.22.1](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.22.0)



### ![](/img/en/blog/202101/hass.png) Asystent domowy


Najnowsza wersja Asystenta domowego, czyli naszego pakietu ``ais-dom`` bazującego na Home Assistant Core.
Tym razem dostarczamy aż 3 wydania Home Assistant! **Naprawdę sporo ulepszeń i nowości, zobaczcie sami**:

[![](https://www.home-assistant.io/images/blog/2021-10/social.png)](https://www.home-assistant.io/integrations/#version/2021.10)

[![](https://www.home-assistant.io/images/blog/2021-11/social.png)](https://www.home-assistant.io/integrations/#version/2021.11)

[![](https://www.home-assistant.io/images/blog/2021-12/social.png)](https://www.home-assistant.io/blog/2021/12/11/release-202112/)

--------

##### AI-Speaker 12/2021
