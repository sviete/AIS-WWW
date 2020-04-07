---
title: "Pomocnicy Automatyzacji"
sidebar_label: Pomocnicy Automatyzacji
---

## Wprowadzenie

Podczas tworzenia zaawansowanych automatyzacji może wystąpić potrzeba użycia dodatkowego pola do zapisu stanu lub wprowadzenia danych.
Elementy takie nazywamy "Pomocnikami Automatyzacji" i możemy je definiować w aplikacji.

## Przejście do Pomocników Automatyzacji

W aplikacji Asystent domowy otwórz menu (klikając ikonę w lewym górnym rogu), a następnie kliknij w konfigurację. Wybierz z listy dostępnych elementów konfiguracji Asystenta domowego pozycję "Pomocnicy"

![Pomocnicy automatyzacji](/img/en/bramka/automation_helpers.png)

## Ekran z listą Pomocników Automatyzacji

Na ekranie z listą "Pomocników Automatyzacji" możemy wybrać pozycję do edycji (klikając w nią) lub zdefiniować nowy element - klikając przycisk "plus" w prawym dolnym rogu.

![Pomocnicy automatyzacji](/img/en/bramka/automation_helpers2.png)

## Definicja Pomocnika Automatyzacji

Z listy wybieramy jakiego typu element chcemy utworzyć, by potem przejść do definicji jego atrybutów.

![Pomocnicy automatyzacji](/img/en/bramka/automation_helpers3.png)

Po zdefiniowaniu elementu możemy umieścić go na karcie w interfejsie oraz użyć w automatyzacji.


## Przykład - prosty budzik

### Zdefiniujmy Pomocnika typu "Data i/lub godzina"

![Pomocnik data godzina](/img/en/bramka/automation_helpers4.png)

Po zdefiniowaniu atrybutów jak na obrazku powyżej naciskamy "UTWÓRZ".

### Umieszczamy Pomocnika na karcie


Przechodzimy do naszego pulpitu i na wybranym widoku tworzymy nową kartę.
Może to być najprostsza karta wyświetlająca nasz element ``input_datetime.budzik``
![Pomocnik karta](/img/en/bramka/automation_helpers5.png)

Oczywiście kartę możemy "upiększyć" dodając ręcznie obrazek, np. zdjęcie szefowej, która czeka na raport itd.:

![Pomocnik karta](/img/en/bramka/automation_helpers6.png)

Kod karty w YAML:

``` yaml
type: entities
title: Budzik
header:
  image: >-
    https://www.wikihow.com/images/thumb/6/64/Deal-With-a-Moody-Boss-Step-10.jpg/aid236433-v4-728px-Deal-With-a-Moody-Boss-Step-10.jpg.webp
  type: picture
entities:
  - entity: input_datetime.budzik
```

![Pomocnik karta](/img/en/bramka/automation_helpers13.png)


### Użycie Pomocnika w automatyzacji

#### Definiujemy nową automatyzację:

![Pomocnik automatyzacja](/img/en/bramka/automation_helpers7.png)

Jako wyzwalacz możemy zastosować szablon - sprawdzimy w nim, czy aktualny czas jest równy ustawionemu w polu budzik:

![Pomocnik szablon](/img/en/bramka/automation_helpers8.png)

#### Kod szablonu:

``` javascript
{{ states('sensor.time') ==
(state_attr('input_datetime.budzik', 'timestamp') | int
| timestamp_custom('%H:%M', True)) }}
```

:::tip
Kody szablonów możesz sprawdzać w "Narzędzia developerskie" -> "SZABLON"
:::

![Pomocnik szablon](/img/en/bramka/automation_helpers9.png)

![Pomocnik szablon](/img/en/bramka/automation_helpers10.png)

![Pomocnik szablon](/img/en/bramka/automation_helpers11.png)

#### Wykonanie akcji

Akcja automatyzacji może być tekstem, którym Jolka nas obudzi, dodatkowo możemy włączyć radio lub dowolną inną muzykę z dysku czy serwisu zdalnego.

![Pomocnik szablon](/img/en/bramka/automation_helpers12.png)

Oczywiście w razie potrzeby możemy też zaświecić światło, stopniowo zwiększać głośność audio itp.
