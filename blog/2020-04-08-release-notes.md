---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.107.7
---

#  0.107.7

## Fibaro, Pulpity, logi i baza danych

<!--truncate-->

:::important
Migracja do nowej wersji będzie niestety bardziej skomplikowana niż normalna aktualizacja, ponieważ musimy odinstalować aplikację i zainstalować jej nową wersję (podpisaną naszym kluczem).
Dokładną procedurę "krok po kroku" opisujemy na forum. **Zaplanuj sobie migrację, gdy będziesz miał czas (około jednej godziny), żeby wykonać spokojnie całość krok po kroku wg instrukcji:**

[`Link do instrukcji na forum`](https://ai-speaker.discourse.group/t/wip-reczna-akualizacja-serwsiu-ais-dom-na-bramce/299).
:::

![Serwer](/img/en/blog/202003/new_server.png)

**Jest to oczywiście "jednorazowa akcja", gdy będziemy już mieli zainstalowaną aplikację serwer, z wersją 2.x.x to kolejne jej aktualizacje serwera będą automatyczne tak jak dotychczas.**


:::tip
Nic się nie stanie, jeśli nie wykonasz migracji - nadal będziesz dostawał aktualizację aplikacji Asystent domowy.
Wszystko będzie działało tak jak dotychczas. Nie będziesz miał jedynie dostępu do najnowszych usług takich jak włączanie mikrofonu czy odtwarzanie wideo.

Jeśli coś pójdzie nie tak i nie uda Ci się wykonać migracji, to też nic się nie stanie. W takim przypadku napisz do nas na serwis `info@sviete.pl` i postaramy się pomóc - w najgorszym wypadku, wyślesz nam bramkę a my ją zaktualizujemy - oczywiście usługa bezpłatna, relax :)
:::

## Nowa strona dokumentacji

Skoro tu jesteś, to pewnie zauważyłeś, że mamy nową stronę dokumentacji. Doszliśmy do wniosku, że wersjonowanie dokumentacji jest zbyt skomplikowane i że trzeba to zrobić prościej, od tej pory dokumentacja dotyczy jednej wersji - aktualnej.

Stara strona działała na GitHub i zostawimy ją jeszcze, bo sporo linków do niej prowadzi, ale nie będziemy jej aktualizować.

**Kilka dni zajmie zindeksowanie dokumentacji przez wyszukiwarkę - wyszukiwanie na nowej stronie zacznie działać poprawnie z czasem.**

## API

Mamy coraz więcej użytkowników, którzy mają fajne pomysły na wykorzystanie bramki. Mamy nadzieję, że opis API ułatwi każdemu wykonanie zaawansowanych automatyzacji (włączenie mikrofonu po otwarciu drzwi itd.) i integracji z innymi systemami (np. bramką Fibaro).


Tu jest [`link do dokumentacji API`](/docs/ais_bramka_api_index)

![Usługi](/img/en/frontend/services_2.png)


## Przed aktualizacją

:::tip
UWAGA Przed aktualizacją zalecamy wykonać [`kopię zapasową konfiguracji`](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important
W razie problemów po aktualizacji sprawdź procedurę [`Aktualizacja ręczna`](/docs/ais_bramka_update_manual) lub [`Wykonanie pełnego resetu aplikacji`](/docs/ais_bramka_reset_ais_step_by_step)- to może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::


## Home Assistant

Najnowszy (stabilny) Home Assistant <a href="https://www.home-assistant.io/blog/2020/02/26/release-106/" target="_blank">0.106.6</a>


----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)
AI-Speaker 03/2020
----
