---
title: "IFTTT Godzina"
sidebar_label: IFTTT Godzina
---


## Wprowadzenie

W tym przykładzie pokażemy krok po kroku jak wykonać Aplet w serwisie IFTTT. Aplet to wg terminologii serwisu IFTTT coś, co łączy ze sobą dwie lub więcej aplikacji, lub urządzeń i umożliwia zrobienie czegoś, czego te aplikacje lub urządzenia nie mogłyby zrobić same.

Nasz przykładowy aplet będzie wysyłał do Asystenta domowego informacje o godzinie (konkretnie o pełnych godzinach), a Asystent domowy będzie tę godzinę czytał.

Oczywiście podaną funkcjonalność można osiągnąć też łatwo lokalnie za pomocą automatyzacji, opisujemy to w [FAQ Mówienie godziny](/docs/ais_faq_automation_tts), celem tego przykładu jest jednak pokazanie na prostym przykładzie ogólnej zasady działania apletu w serwisie IFTTT.


## Dodanie apletu

Jako trigger apletu wybieramy serwis **Date & Time** -> **Every hour at**

![Konfiguracja IFTTT](/img/en/frontend/example_ifttt_time_1.png)

następnie naciskamy **Add action**

![Konfiguracja IFTTT](/img/en/frontend/example_ifttt_11.png)

wybieramy akcję **Weebhooks** -> **Make a webhook request**. W polu URL wklejamy adres URL z integracji z IFTTT z Asystenta domowego

![Konfiguracja IFTTT](/img/en/frontend/example_ifttt_21.png)

ustawiamy pola: Metod: **POST** i Content type: **application/json**

![Konfiguracja IFTTT](/img/en/frontend/example_ifttt_13.png)

w pole Body wpisujemy komunikat w formacie JSON z atrybutem **CheckTime** zwracanymi przez serwis **Date & Time**

``` json
  {
    "action": "say_it",
    "img": "http://www.ai-speaker.com/images/Asia.png",
    "text": "{{CheckTime}}"
  }
```

![Konfiguracja IFTTT](/img/en/frontend/example_ifttt_time_2.png)


na koniec podajemy nazwę i opis naszego apletu i wciskamy **Save**

![Konfiguracja IFTTT](/img/en/frontend/example_ifttt_time_4.png)

## Aktywowanie apletu

Teraz pozostało nam aktywować i uruchomić aplet, w tym celu klikamy na nasz aplet

![Konfiguracja IFTTT](/img/en/frontend/example_ifttt_time_5.png)

a następnie klikamy przycisk **Turn ON**

![Konfiguracja IFTTT](/img/en/frontend/example_ifttt_time_6.png)

i jeszcze przycisk **Connect**

![Konfiguracja IFTTT](/img/en/frontend/example_ifttt_time_7.png)


W ustawieniach naszego apletu na platformie IFTTT możemy sprawdzać jego wykonania

![Konfiguracja IFTTT](/img/en/frontend/example_ifttt_time_8.png)

a w naszym lokalnym Asystencie domowym powinniśmy usłyszeć/zobaczyć stosowną informację.
