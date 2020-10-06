---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.115.9
tags: [media, galeria, zigbee2mqtt, home assistant, tasmota]
---

# 0.115.9 Media

- ![AIS Media](/img/en/blog/202010/folders.png) **Biblioteka multimediów**
- ![AIS Galeria](/img/en/blog/202010/gallery.png) Galeria
- ![Zgłoszenia audio](/img/en/blog/202010/ai.png) Wyszukiwanie źródła audio
- ![Zigbee](/img/en/blog/202007/zigbee.png) Zigbee2Mqtt 1.5.0
- ![Tasmota](/img/en/blog/202005/tasmota_small.png) Tasmota 8.5.1 Hannah
- ![Home Assistant](/img/en/blog/202010/ha.png) Home Assistant 0.115.6 wydanie urodzinowe!


<!--truncate-->

## ABC bezproblemowej aktuazliacji

:::tip Kopia zapasowa.
### ![A](/img/en/blog/202009/alpha-a-circle.png) Kopia zapasowa.

UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important Konsola i logi na bramce.
### ![B](/img/en/blog/202009/alpha-b-circle.png)Konsola i logi na bramce.

W razie problemów z aktualizacją, sprawdź procedurę [Aktualizacja ręczna](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step).
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

Tworzenie ładnego interfejsu jest teraz jeszcze prostsze z ulepszoną galerią i możliwością dodawania zdjęć swoich pomieszczeń, także bezpośrednio z aparatu w aplikacji mobilnej - co wyjaśniamy poniżej, w dokumentacji i na nowym wideo na YoutTube.



## ![AIS Media](/img/en/blog/202010/folders.png) Biblioteka multimediów


TODO


## ![AIS Galeria](/img/en/blog/202010/gallery.png) Galeria

W dokumentacji naszgo komponentu galeria, opisujemy jej nowe funkcjonalności - w tym możliwość dodawania i przycinania zdjęć pomieszczeń bezpośrednio z telefonu.

Jak to działa prezentujemy na filmie poniżej:
<iframe width="560" height="315"  src="" frameBorder="0" allowFullScreen></iframe>



## ![Zgłoszenia audio](/img/en/blog/202010/ai.png) Wyszukiwanie źródła audio

TODO


## ![Zigbee](/img/en/blog/202007/zigbee.png) Zigbee2Mqtt 1.5.0

zigbee2mqtt rozwija się w rekordowym tempie.


TODO


## ![](/img/en/blog/202005/tasmota_small.png) Tasmota 8.5.1 Hannah

TODO



## ![](/img/en/blog/202007/hass.png) Home Assistant 0.115.6


Najnowszy (stabilny) [Home Assistant 0.115.6](https://www.home-assistant.io/blog/2020/09/17/release-115/)

Wydanie urodzione podstawy naszego systemu :) Kartka z życzeniemi dostarczona ![](/img/en/blog/202010/love-letter.png)

![Home Assistant](/img/en/blog/202010/kartka.png)



----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)

##### AI-Speaker 09/2020
