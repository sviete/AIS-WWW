---
title: "Konfiguracja wybranego pulpitu"
sidebar_label: Konfiguracja pulpitu
---

## Włączenie trybu konfiguracji
Włączenie konfiguracji wybranego pulpitu następuje poprzez wybranie w aplikacji opcji **"Konfiguracja interfejsu użytkownika"** dostępnej w prawym górnym rogu każdego pulpitu.

![Konfiguracja interfejsu użytkownika](/img/en/frontend/lovelace-ui-conf1.png)


![Konfiguracja interfejsu użytkownika opcja](/img/en/frontend/frontend-card-edit-1.png)



### Dodanie nowego widoku

Możesz sam tworzyć i zmieniać widoki (zakładki w aplikacji), np. możesz dodać widoki **"Salon"**, **"Łazienka"**, **"Sypialnia"** i umieścić w nich na [kartach](/docs/ais_app_cards) urządzenia znajdujące się w tych pomieszczeniach.


![Konfiguracja interfejsu użytkownika](/img/en/frontend/lovelace-ui-conf2.png)



### Dodanie własnej karty

Gdy masz już własny widok, to możesz umieścić na nim kartę. Poniżej pokażemy, w jaki sposób dodać kartę pokazującą naszą sypialnię i jak na takiej karcie umieścić urządzenia, które mamy w tym pomieszczeniu.

1. Zrób zdjęcie pomieszczenia i dodaj je do galerii.
Jeżeli używasz Asystenta domowego z telefonu, to zdjęcie do galerii będziesz mógł dodać bezpośrednio z aparatu. W przypadku przeglądarki zdjęcie możesz wysłać z dysku komputera.
Po dodaniu zdjęcia skopiuj lub zapamietaj jego lokalny adres na bramce **/local/img/<nazwa_pliku>**


![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_1.png)


2. Przejdź do nowego widoku i w trybie edycji dodaj nową kartę typu Obraz (glance)

![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_2.png)


3. Wypełnij formatkę z parametrami karty

Podaj ścieżkę do obrazu z galerii

![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_4.png)

następnie wybierz encje z systemu, które chcesz pokazywać (którymi chcesz sterować) na karcie

![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_3.png)


4. Zapisz zmiany i korzystaj z nowej karty

![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_5.png)



## Informacje techniczne
Więcej informacji technicznych oraz demo interfejsu można znaleźć na stronie projektu platformy Home Assistant [Lovelace UI](https://www.home-assistant.io/lovelace/) https://www.home-assistant.io/lovelace/


![Konfiguracja interfejsu użytkownika opcja](/img/en/frontend/frontend-cards-ui-config-on.png)

### Kopia konfiguracji

Gdy jesteś w trybie konfiguracji intefrejsu użytkownika, możesz wybrać opcję **"Ręczny edytor konfiguracji"** dostępną w prawym górnym rogu każdej strony w aplikacji będącej w trybie konfiguracji.

![Konfiguracja interfejsu użytkownika kopia](/img/en/frontend/lovelace-ui-conf-raw.png)


To spowoduje wyświetlenie tekstowej, surowej wersji konfiguracji interfejsu

![Konfiguracja interfejsu użytkownika kopia](/img/en/frontend/lovelace-ui-conf-raw-save.png)

Wersję tekstową możesz zapisać do pliku jako kopię zapasową, następnie można eksperymentować z własnymi ustwieniami. Gdyby coś poszło nie tak, to zawsze można wrócić do wersji pierwotnej poprzez wklejenie tekstowej wersji konfiguracji w tym miejscu.


### Reset pulpitu

Jeżeli coś poszło nie tak z naszą konfiguracją pulpitu, to zawsze możemy go całkowicie wyczyścić i zacząć konfigurację od nowa. Wystarczy, będąc w trybie "Ręcznej konfiguracji" usunąć całą definicję pulpitu, a następnie zapisać zmiany.

![Konfiguracja interfejsu użytkownika reset](/img/en/frontend/lovelace_reset_dashboard.png)
