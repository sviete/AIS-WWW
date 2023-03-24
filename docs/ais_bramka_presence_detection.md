---
title: "Konfigurowanie wykrywania obecności"
sidebar_label: Wykrywanie obecności
---

## Wprowadzenie

Wykrywanie obecności ma na celu ustalenie, czy i kto jest w domu (lub innej zdefiniowanej strefie), co jest bardzo cennym źródłem automatyzacji. Wiedza o tym, kto jest w domu lub gdzie jest, pozwala nam na całą gamę opcji automatyzacji, przykładowe użycie:
- Wyślij mi powiadomienie, gdy moje dziecko dotrze do szkoły
- Włącz klimatyzację w domu, kiedy wychodzę z pracy
- Otwórz bramę i włącz na 30 minut oświetlenie zewnętrzne, jeżeli jest noc i moje auto pojawia się w strefie przed bramą wjazdową

![Wykrywanie obecności](/img/en/bramka/presence_detection_14.png)

## Wykrywanie obecności

Istnieją różne sposoby wykrywania obecności w systemie Asystent domowy. Najłatwiejszym i zalecanym przez nas sposobem jest włączenie raportowania obecności w naszej aplikacji AIS dom, na telefonie - po zalogowaniu się z telefonu do aplikacji na bramce możesz w łatwy sposób przypisać telefon do osoby i przesyłać zmiany lokalizacji bezpośrednio do bramki domowej.

![AIS dom GPS](/img/en/bramka/presence_detection_00.png)


Inną aplikacją dostarczającą szczegółowe informacje o lokalizacji jest aplikacja OwnTracks, która działa zarówno dla Androida, jak i iOS.
OwnTracks warto polecić bo tak jak AIS dom, jest też darmowa i otwarto źródłowa, wykryte zmiany lokalizacji wysyła bezpośrednio do systemu Asystent domowy.
Można ją skonfigurować za pomocą integracji dostępnej w konfiguracji systemu - w dokumentacji [integracji OwnTracks](/docs/ais_app_owntracks) pokazujemy krok po kroku jak to zrobić.


## Osoby

Dodanie osoby umożliwia podłączenie do niej wielu urządzeń raportujących lokalizację. Gdy używanych jest wiele urządzeń śledzących, lokalizacja jest określana z uwzględnieniem typu urządzenia śledzącego:
- stacjonarne (Router lub lokalizator Bluetooth)
- mobilne (GPS)

Kiedy jesteś w domu, twoją pozycję określają najpierw stacjonarne trackery (jeśli istnieją), a następnie GPS. Kiedy jesteś poza domem, twoja pozycja jest określana najpierw przez GPS, a następnie przez stacjonarne urządzenia śledzące.


### Dodanie osoby

Aby dodać nową osobę, przejdź do konfiguracji a następnie wybierz opcję **Osoby**.

![Dodanie osoby](/img/en/bramka/presence_detection_10.png)


Naciśnij pomarańczowy przycisk z ikonką "plus" w prawym dolnym rogu ekranu, żeby otworzyć formularz dodawania osoby. Wybierz urządzenia raportujące lokalizację, tak jak to pokazano poniżej.

![Dodanie osoby](/img/en/bramka/presence_detection_9.png)


### Ustawienie zdjęcia osoby

Podczas dodawania lub edycji osoby możesz dodać jej zdjęcie które będzie wyświetlane w aplikacji i na mapie.


![Dodanie zdjęcia osoby](/img/en/bramka/presence_detection_8.png)


Osoba na mapie i na kartach w aplikacji będzie teraz wyświetlana wraz ze zdjęciem.

![Dodanie osoby](/img/en/bramka/presence_detection_11.png)


## Strefy

Strefy pozwalają nazywać obszary na mapie. Obszary te mogą być następnie użyte do nazwania aktualnej lokalizacji śledzonego użytkownika lub użycia wejścia / wyjścia ze strefy jako wyzwalacza lub warunku automatyzacji. Strefy można skonfigurować na stronie integracji na ekranie konfiguracji.

### Dodanie strefy

Aby skonfigurować nową stefę, przejdź do konfiguracji a następnie wybierz opcję **Strefy**.

![Dodanie strefy](/img/en/bramka/presence_detection_12.png)

Dodaj strefy które Cię interesują wypełniając formularz strefy w podobny sposób jak przedstawiono na przykładzie poniżej.

![Dodanie strefy](/img/en/bramka/presence_detection_13.png)




## Automatyzacje oparte na lokalizacji


Wyzwalacze strefy oraz geolokalizacji mogą uruchamiać się, gdy osoba wchodzi w strefę lub gdy opuszcza strefę. W celu dodania automatyzacji opartej na lokalizacji, podczas dodawania automatyzacji wybierz typ wyzwalacza **Strefa**, następnie wybierz osobę, której dotyczy sprawdzenie lokalizacji.

![Dodanie automatyzacji](/img/en/bramka/presence_detection_15.png)

W kolejnym kroku wybierz strefę oraz zaznacz typ zdarzenia (wejście w strefę lub opuszczenie strefy)

![Dodanie automatyzacji](/img/en/bramka/presence_detection_16.png)


## Schemat automatyzacji

Automatyzację wyzwalaną przez zmianę lokalizacji możemy w łatwy sposób utworzyć na podstawie gotowego [schematu automatyzacji](ais_bramka_automation_blueprint).

Wystarczy, że:
1. Wybierzemy predefiniowany schemat **Powiadomienie po opuszczeniu strefy**

![Dodanie nowej automatyzacji](/img/en/bramka/blueprint_zone_0.png)

2. Uzupełnimy i zapiszemy zdefiniowany szablon:

![Dodanie nowej automatyzacji](/img/en/bramka/blueprint_zone.png)
