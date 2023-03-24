---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.115.9
tags: ["media", "galeria", "zigbee2mqtt", "home assistant", "tasmota"]
---

# 0.115.9 Media

- ![AIS Media](/img/en/blog/202010/folders.png) **Biblioteka multimediów**
- ![AIS Galeria](/img/en/blog/202010/gallery.png) Galeria
- ![Zgłoszenia audio](/img/en/blog/202010/ai.png) Wyszukiwanie źródła audio
- ![Zigbee](/img/en/blog/202007/zigbee.png) Zigbee2Mqtt 1.5.0
- ![Tasmota](/img/en/blog/202005/tasmota_small.png) Tasmota 8.5.1 Hannah
- ![Home Assistant](/img/en/blog/202010/ha.png) Home Assistant 0.115.6 wydanie urodzinowe!


<!--truncate-->

## ABC bezproblemowej aktualizacji

:::tip Kopia zapasowa.
### ![A](/img/en/blog/202009/alpha-a-circle.png) Kopia zapasowa.

UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important Konsola i logi na bramce.
### ![B](/img/en/blog/202009/alpha-b-circle.png)Konsola i logi na bramce.

W razie problemów z aktualizacją, sprawdź procedurę [Aktualizacja z konsoli](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step).
To może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution Poczekaj cierpliwie.
### ![C](/img/en/blog/202009/alpha-c-circle.png) Cierpliwość. Pierwsze uruchomienie po aktualizacji trwa dłużej - poczekaj cierpliwie.

 **Po aktualizacji pierwsze uruchomienie może trwać nawet 20 minut.**
 W tym czasie aktualizowane są biblioteki do integracji dodanych na bramce i baza danych jest migrowana do nowego formatu.
 **Poczekaj cierpliwie na zakończenie aktualizacji.**
:::


## UWAGA - zniknie karta z pogodą

Pracujmy nad tym, żeby bramka uruchamiała się jak najszybciej. Przyczyną długiego uruchamiania może być brak dostępu do Internetu lub problem z siecią.
Naszym założeniem jest działanie także bez dostępu Internetu. Dlatego, żeby uniknąć czekania, na usługi online na starcie przestajemy dostarczać “skonfigurowane z pudełka” integracje, które do działania wymagają połączenia z Internetem.

Objaw będzie taki, że po tej aktualizacji zniknie pogoda - bo pobranie danych o pogodzie wymagało połączenia z serwisem OpenWeatherMap i DarkSky.
Jeżeli ktoś nadal ma nasz domyślny widok w aplikacji to po aktualizacji będzie taki efekt:
![](/img/en/blog/202010/pogoda.png)

Żeby to naprawić wystarczy przejść do konfiguracji interfejsu:
![](/img/en/blog/202010/pogoda2.png)

i usunąć “osierocone encje”:

![](/img/en/blog/202010/pogoda3.png)

Nowy “fabryczny wygląda aplikacji” będzie teraz taki:
![](/img/en/blog/202010/pogoda4.png)


Oczywiście zachęcamy do skonfigurowania własnego interfejsu - o to chodzi w tym systemie :)

Tworzenie ładnego interfejsu jest teraz jeszcze prostsze z ulepszoną galerią i możliwością dodawania zdjęć swoich pomieszczeń, także bezpośrednio z aparatu w aplikacji mobilnej - co wyjaśniamy poniżej, w dokumentacji i na nowym wideo na YouTube.



## ![AIS Media](/img/en/blog/202010/folders.png) Biblioteka multimediów


W tej wersji dodaliśmy możliwość przeglądania biblioteki multimediów oraz wysyłania ich (Cast'owanie) do wybranego odtwarzacza.

![AIS Galeria](/img/en/blog/202010/media_browser.png)

> Asystent domowy jest jedynie kontrolerem, który wysyła link do mediów. Same media odtwarzane są bezpośrednio przez docelowy odtwarzacz (ten, do którego wysłaliśmy link).
Jeżeli odtwarzacz, do którego wysyłamy link do mediów, nie ma wbudowanej obsługi Spotify, czy nie jest w stanie odtwarzać wideo, to przesłana do niego treść nie zadziała.
**Oczywiście media, które przeglądamy w bibliotece, możemy odtwarzać na wbudowanym odtwarzaczu na bramce i możemy przesyłać na inne bramki (docelowo głośniki).**


Dodatkowo można odtwarzać multimedia bezpośrednio w przeglądarce.

![AIS Galeria](/img/en/blog/202010/play_in_browser.png)



## ![AIS Galeria](/img/en/blog/202010/gallery.png) Galeria


![AIS Galeria](/img/en/blog/202010/img1.png)


Jak to działa prezentujemy na filmie poniżej:
<iframe width="560" height="315"  src="https://www.youtube.com/embed/iIJcAOnQ6HI" frameBorder="0" allowFullScreen></iframe>


## ![Zgłoszenia audio](/img/en/blog/202010/ai.png) Wyszukiwanie lepszego źródła audio

Jeżeli jest problem z odtwarzaniem jakiegoś radia, to możesz automatycznie sprawdzić, czy jest dostępne bardziej aktualne źródło:
![AIS Galeria](/img/en/blog/202010/audio_report_1.png)

Jeżeli automatyczne sprawdzenie nie pomoże, to będzie można wysłać informację o tym problemie do AI-Speaker.

![AIS Galeria](/img/en/blog/202010/audio_report_2.png)

Gdy otrzymamy zgłosznie to postaramy się jak najszybciej naprawić ten problem.
Jeżeli zarejstrowałeś się w serwisie integratora, to zostaniesz poinformowany o rozwiązaniu zgłosznia - prześlemy Ci wiadomość na podany w panelu integratora adres email/login.


## ![Zigbee](/img/en/blog/202007/zigbee.png) Zigbee2Mqtt 1.5.0

Aktualizacja zigbee to już nie tylko nowe urządzenia (a wspieranych urządzeń jest już 1015) :)
![AIS Galeria](/img/en/blog/202010/zigbee1.png)

Ale też nowa aplikacja, całkowicie zintegrowana z Asystentem domowym:
![AIS Galeria](/img/en/blog/202010/zigbee2.png)

![AIS Galeria](/img/en/blog/202010/zigbee3.png)

![AIS Galeria](/img/en/blog/202010/zigbee4.png)

Oczywiście są to bardzo świeże funkcjonalności i nie wszystko jeszcze działa tak jakbyśmy chcieli, ale potencjał jest spory i jeszcze kilka aktualizacji i będziemy to mieli doszlifowane ;)
**Zostawiamy jeszcze dotychczasowy interfejs do konfiguracji zigbee, ale w kolejnej wersji przejdziemy już tylko na ten nowy.**
Gdyby ktoś miał problem z działaniem czy zrozumieniem nowego interfesju, to na stronie projektu [Zigbee2Mqtt](https://github.com/koenkk/zigbee2mqtt) można zgłszać problemy i pomysły na usprawnienie działania.
Dziennik zmian w wersji 1.5.0 dostępny na stronie projektu [Zigbee2Mqtt](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.15.0)

## ![](/img/en/blog/202005/tasmota_small.png) Tasmota 8.5.1 Hannah

Udostępniliśmy też najnowszą kompilację Tasmota z numerem 8.5.1

![Tasmota](/img/en/blog/202010/tasmota1.png)

Są to kompilacje, których używamy w urządzeniach przez nas sprzedawanych. **Każdy zaawansowany użytkownik może z nich korzystać za darmo** i wgrywać do swoich urządzeń.
Do wyboru mamy ponad [1600 urządzeń](https://templates.blakadder.com/index.html):

![Tasmota](/img/en/blog/202010/tasmota2.png)

Na forum tłumaczymy jak to zrobić na przykładzie [zaworu do podlewania](https://ai-speaker.discourse.group/t/ponad-1540-urzadzen-wifi-co-to-znaczy/707)

Dziennik zmian w wersji 8.5.1 jest dostępny na stronie projektu [Tasmota](https://github.com/arendst/Tasmota/releases/tag/v8.5.1)



## ![](/img/en/blog/202007/hass.png) Home Assistant 0.115.6


Najnowszy (stabilny) [Home Assistant 0.115.6](https://www.home-assistant.io/blog/2020/09/17/release-115/)

Wydanie urodzinowe głównej składowej naszego systemu :)

Kartka z życzeniemi wysłana ![](/img/en/blog/202010/love-letter.png) i dostarczona:

![Home Assistant](/img/en/blog/202010/kartka.png)



----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)

##### AI-Speaker 09/2020
