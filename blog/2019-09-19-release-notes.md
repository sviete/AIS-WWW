---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.98.9 Tryb nocny, start autoaktualizacji
---

## Wersja systemu 0.98.9 z dnia 19 września 2019 roku,

## Tryb nocny

W ustawieniach bramki dodaliśmy możliwość włączenia automatycznego uruchamiania trybu nocnego.

![AIS dom Tryb nocny](/img/en/blog/ais_dom_dark_mode.gif)

<!--truncate-->

Gdy "uruchamianie trybu nocnego jest włączone" to o wybranej godzinie startu trybu nocnego asystent automatycznie:
- zredukuje głośność czytanych powiadomień do 20%,
- zredukuje głośność odtwarzacza audio do 20%,
- zmieni motyw wyglądu aplikacji na nocny.

Oczywiście o wybranej godzinie zakończenia trybu nocnego głośność i wygląd zostaną automatycznie przywrócone do wartości przed ciszą nocną.


## Nie nadpisujemy widoków i kart użytkownika

Przez kilka miesięcy intensywnie rozwijaliśmy interfejs w aplikacji i niektóre aktualizacje nadpisywały ustawienia wyglądu zdefiniowane przez użytkownika.

Miło nam Cię poinformować, że od wersji 0.98 nie będziemy już nadpisywali widoków tworzonych przez Ciebie. Będziemy jedynie aktualizować trzy pierwsze widoki (dom, audio i urządzenia). Reszta należy do Ciebie- nadszedł czas, żebyś przejął/przejęła kontrolę nad konfiguracją interfejsu!

W instrukcji wyjaśniamy [jak włączyć tryb konfiguracji](/docs/ais_app_ui_config).
W FAQ dodaliśmy przykład, jak dodać [własną kartę z wykresem temperatury procesora](/docs/ais_gate_faq_config_yaml) oraz bardziej zaawansowany tutorial [jak dodać Node-RED](/docs/ais_faq_node_red), w którym pokazujemy, jak zainstalować na bramce Node-RED oraz jak zintegrować go z aplikacją Asystent domowy (dziękujemy Łukaszowi G. za podesłanie pomysłu).

![AIS dom Tryb nocny](/img/en/blog/0.88_definiuj_vidoki_i_karty.png)




## Nowy, ładniejszy wygląd list z pozycjami audio

Popawiliśmy wygląd list wyszukiwania oraz dodaliśmy możliwość usuwania utworów z list odtwarzania (Spotify i YouTube).

![AIS dom remove from list](/img/en/blog/remove_from_yt_list.png)



## Integracja z Google Drive została oficjalnie zweryfikowana i zaakceptowana przez Google

Teraz w łatwiejszy spoób będzie można dodać dysk zdalny Google Drive.

![Google Drive](/img/en/blog/drive_logowanie.png)



## Ustawienia ekranu z aplikacji

W konfiguracji bamki dodaliśmy możliwość dostosowania obrazu do rozmiaru ekranu.
Jeżeli obraz na Twoim monitorze lub telewizorze podłączonym do bramki za pomocą złącza HDMI jest ucięty lub przesunięty, to w tym miejscu możesz dostosować obraz do rozmiaru ekranu.

![Google Drive](/img/en/blog/ustawienia_ekranu.png)



## Start prac nad autoaktualizacją systemu

Dodanie cichego trybu nocnego oraz nienadpisywanie interfejsu to pierwszy krok do funkcjonalności automatycznych aktualizacji systemu. Od wersji 1.0 będziemy nadal oczywiście rozwijać funkcjonalność system i aktualizować na bieżąco pakiety, ale planujemy dodać opcjonalną możliwość włączenia automatycznej aktualizacji do najnowszej wersji systemu.

### Auto-aktualizacja pierwszego pakietu youtube-dl

W bieżącej wersji (0.98.9) dodajemy automatyczną aktualizację pierwszego pakietu youtube-dl.

 <a href="https://github.com/ytdl-org/youtube-dl/" target="_blank">youtube-dl</a> to program napisany w języku Python, który pozwala na pobieranie treści audio-video z setek darmowych stron dostępnych w Internecie - <a href="http://ytdl-org.github.io/youtube-dl/supportedsites.html" target="_blank">lista stron wspieranych przez youtube.dl</a>.
My obecnie używamy tego programu na bramkach do odtwarzania muzyki z serwisu YouTube.com.

Program jest stosunkowo mały, ale wymaga dość częstej aktualizacji, ponieważ sposób prezentowania treści audio na darmowych stronach bardzo często się zmienia. Z uwagi na częste aktualizacje tego pakietu uznaliśmy, że to najlepszy kandydat na sprawdzenie działania naszego mechanizmu automatycznej aktualizacji. Od wersji 0.98, jeżeli będzie dostępna zweryfikowana przez nas nowa wersja programu youtube-dl to bramka automatycznie ją zainstaluje.



## Pozostałe istotne zmiany

- Blokowanie możliwości "odpinania mikrofonu" (latający mikrofon nad innymi aplikacjami) w przypadku działania na bramce (Dziękujemy Tomkowi B. za zgłoszenie problemu).

- Cisza nocna, nie powiadamiamy o nowej wersji w nocy (to pomysł innego użytkownika - dziękujemy bardzo).

- Automatycznie na starcie wyłączamy możliwość sterowania urządzeniem przez HDMI CEC, ponieważ niektóre monitory/telewizory mogły w ten sposób usypiać/wyłączać bramkę. (Ten problem pojawił się w najnowszej kompilacji obrazu systemu i został nam zgłoszony przez kilku użytkowników. Znaleźliśmy natychmiast obejście. a w tej wersji dostarczamy poprawkę dla wszystkich urządzeń.)

-  Najnowszy (stabilny) Home Assistant <a href="https://www.home-assistant.io/blog/2019/08/28/release-98/" target="_blank">0.98</a> z jak zwykle mnóstwem nowości i ulepszeń.



----
Zapraszamy do aktualizowania.

2019.09.19 Zespół Asystent domowy.
