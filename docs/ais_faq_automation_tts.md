---
title: "Jak dodać Automatyzację z powiadomieniami głosowymi?"
sidebar_label: Automatyzacja z powiadomieniami głosowymi
---

## Wprowadzenie do automatyzacji

Zapoznaj się z opisem [wprowadzenie do automatyzacji Asystenta domowego](/docs/ais_bramka_automation), żeby poznać podstawy dodawania automatyzacji w systemie.


## Przykład - Mówienie godziny

W tym przykładzie pokażemy, w jaki sposób dodać informowanie przez Asystenta o godzinie (konkretnie o pełnych godzinach, w przedziale czasu od 8 do 22).

![Automatyzacja](/img/en/faq/tts_time_0.png)


### Wyzwalacz - szablon czasu

Za pomocą wyzwalacza szablonu czasu można wywołać automatyzację, jeśli godzina, minuta lub sekunda bieżącego czasu odpowiada określonej przez nas wartości. Poprzedzenie watości znakiem "/" oznacza, że dopasowanie będzie prawidłowe ilekroć wartość jest podzielna przez tę liczbę.

Jeśli w pole godzina wpiszemy "/2" oznacza to, że chcemy wywołać automatyzację co 2 godziny.

W naszym przypadku chcemy mówić, która jest godzina co godzinę, dlatego dopasowanie będzie takie: /1

![Automatyzacja](/img/en/faq/tts_time_1.png)


### Warunek - przedział czasu

Warunki są opcjonalną częścią automatyzacji i można ich użyć, aby w niektórych warunkach zapobiec wykonania automatyzacji po jej uruchomieniu.
W naszym przypadku chcemy zapobiec mówieniu godziny w nocy, dlatego dodamy warunek typu czas:

![Automatyzacja](/img/en/faq/tts_time_2.png)


### Akcja - wywołanie usługi

Akcje są wykonywane przez Asystenta domowego po uruchomieniu automatyzacji.
Wszystkie czynności jakie wykonuje Asystent domowy, takie jak włączenie światła, ustawienie temperatury, włączenie radia czy też sprawdzenie pogody, zdefiniowane są w formie usługi (serwisu). Jedną z podstawowych usług w Asystencie domowym jest usługa przetwarzania komendy i wykonania na jej podstawie akcji. Usługa ta nazywa się **ais_ai_service.process** i przyjmuje jeden parametr **text** komendę do wykonania. W naszym przypadku chcemy zapytać o godzinę, dlatego jako komendę napiszmy: **która godzina**


![Automatyzacja](/img/en/faq/tts_time_3.png)


### Test działania

Nowo dodaną akcję możemy przetestować, wybierając ją na ekranie gównym Asystenta domowego i naciskając uruchom, jeśli wszystko zrobiliśmy dobrze to asystent powinien nam powiedzieć która godzina.

![Automatyzacja](/img/en/faq/tts_time_4.png)
