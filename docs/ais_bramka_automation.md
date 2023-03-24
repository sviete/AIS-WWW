---
title: "Definiowanie Automatyzacji"
sidebar_label: Definiowanie Automatyzacji
---

## Wprowadzenie

Po podłączeniu i skonfigurowaniu urządzeń nadszedł czas, aby dodać pierwszą automatyzację. W tym przewodniku pokazujemy jak stworzyć prostą regułę automatyzacji, która włącza oświetlenie, gdy zachodzi słońce.


## Przejście do automatyzacji

W aplikacji Asystent domowy otwórz menu (klikając ikonę w lewym górnym rogu) a następnie kliknij w konfigurację.

![Ekran z listą automatyzacji](/img/en/bramka/automation1.png)

## Ekran z listą automatyzacji
Teraz kliknij na automatyzację. Jest to ekran z listą automatyzacji, z którego można zarządzać wszystkimi automatyzacjami w systemie.

![Przejście do automatyzacji](/img/en/bramka/automation2.png)

## Definicja automatyzacji

Kliknij pomarańczowy przycisk w prawym dolnym rogu, aby utworzyć nową automatyzację. Zostanie wyświetlony ekran do konfiguracji automatyzacji.

![Dodanie nowej automatyzacji](/img/en/bramka/automation3.png)

### Ustawienie nazwy automatyzacji

Pierwszą rzeczą, jaką zrobimy, jest ustawienie nazwy. Wprowadź „Włącz oświetlenie bramy wjazdowej po zachodzie słońca”.

![Ustawienie nazwy automatyzacji](/img/en/bramka/automation4.png)

### Wyzwalacze automatyzacji

Drugim krokiem jest określenie, co powinno uruchomić naszą automatyzację. W tym przypadku chcemy użyć zdarzenia **zachód słońca**, aby ją uruchomić. Możemy dodać też przesunięcie czasowe tak, żeby włączyć oświetlenie np. na 15 minut przed zachodem (ponieważ po zachodzie jest już dość ciemno).

W sekcji wyzwalacza kliknij rozwijaną listę i zmień typ wyzwalacza na **Słońce**. Następnie wybierz **zachód słońca**. Ponieważ chcemy, aby nasza automatyzacja była uruchamiana 15 minut przed faktycznym zachodem słońca, dlatego dodajmy -0:15 do przesunięcia. Oznacza to, że uruchomimy ją 15 minut przed faktycznym zachodem słońca.

![Dodanie nowej automatyzacji](/img/en/bramka/automation5.png)

### Akcje automatyzacji

Po zdefiniowaniu naszego wyzwalacza przejdź w dół do sekcji Akcje (pomijając opcjonalną sekcję Warunki).

Upewnij się, że typ akcji jest ustawiony na **Urządzenie** i wybierz urządzenie z listy **Lampy zewnętrzne** - oczywiście w Twoim przypadku może być inaczej w zależności od tego jak nazwałeś swoje urządzenie. Nastepnie w polu **Akcja** wybierz **Włącz lampy zewnętrzne**

![Dodanie nowej automatyzacji](/img/en/bramka/automation6.png)

:::tip Wskazówka
W ten sam sposób, w jednej automatyzacji możesz też dodać akcję `opóźnienie`, a następnie akcję `wyłącz`, żeby mieć sterowanie w jednym miejscu.
:::
![Dodanie nowej automatyzacji](/img/en/bramka/automation_6_1.png)

Kliknij pomarańczowy przycisk w prawym dolnym rogu, aby zapisać definicję automatyzacji.

### Edycja i zarządzanie

**Gratulacje! Dodałeś pierwszą automatyzację :)**

Możesz wrócić do ekranu z listą automatyzacji, z którego można zarządzać i edytować wszystkie automatyzacje w systemie.

![Dodanie nowej automatyzacji](/img/en/bramka/automation8.png)

Z tego miejsca możesz też wypróbować działanie swojej nowej automatyzacji uruchamiając ją ręcznie

![Dodanie nowej automatyzacji](/img/en/bramka/automation9.png)


## Schemat automatyzacji

Powyższą automatyzację możemy w łatwy sposób utworzyć na podstawie gotowego [schematu automatyzacji](ais_bramka_automation_blueprint).

Wystarczy, że:
1. Wybierzemy predefiniowany schemat **Oświetlenie po zachodzie słońca**

![Dodanie nowej automatyzacji](/img/en/bramka/blueprint_light_0.png)

2. Uzupełnimy i zapiszemy zdefiniowany szablon:

![Dodanie nowej automatyzacji](/img/en/bramka/blueprint_light.png)
