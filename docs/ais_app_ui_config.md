---
title: "Konfiguracja wybranego pulpitu"
sidebar_label: Konfiguracja pulpitu
---

## Włączenie trybu konfiguracji
Włączenie konfiguracji wybranego pulpitu następuje poprzez wybranie w aplikacji opcji **"Konfiguracja interfejsu użytkownika"** dostępnej w prawym górnym rogu każdego pulpitu.

![Konfiguracja interfejsu użytkownika](/img/en/frontend/lovelace-ui-conf1.png)




### Dodanie nowego widoku

Możesz sam tworzyć i zmieniać widoki (zakładki w aplikacji), np. możesz dodać widoki **"Salon"**, **"Łazienka"**, **"Sypialnia"** i umieścić w nich na [kartach](/docs/ais_app_cards) urządzenia znajdujące się w tych pomieszczeniach.


![Konfiguracja interfejsu użytkownika](/img/en/frontend/lovelace-ui-conf2.png)



### Dodanie własnej karty

Gdy masz już własny widok, to możesz umieścić na nim kartę. Poniżej pokażemy, w jaki sposób dodać kartę pokazującą naszą sypialnię i jak na takiej karcie umieścić urządzenia, które mamy w tym pomieszczeniu.

1. Zrób zdjęcie pomieszczenia i dodaj je do [galerii](/docs/ais_app_integration_gallery).
Jeżeli używasz Asystenta domowego z telefonu, to zdjęcie do galerii będziesz mógł dodać bezpośrednio z aparatu. W przypadku przeglądarki zdjęcie możesz wysłać z dysku komputera.
Po dodaniu zdjęcia w galerii możesz wyświetlić informacje o zdjęciu


![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_1.png)


2. W okienku z informacją o zdjęciu naciśnij przycisk **DODAJ DO INTERFEJSU UŻYTKOWNIKA**

![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_2.png)


3. Wybierz pulpit i widok


![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_4.png)

następnie poniownie naciśnij **DODAJ DO INTERFEJSU UŻYTKOWNIKA** 

![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_5.png)


4. Dostosowywanie karty

Kartę możesz dostosować - wybrać encje z systemu, które chcesz na niej pokazywać na karcie oraz którymi chcesz sterować dotykając/klikając kartę

![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_3.png)

Status urządzenia **Światło w biurze** może być prezentowany na karcie, światło zapalone / włączone:

![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_6.png)

światło wyłączone:

![Konfiguracja interfejsu użytkownika](/img/en/frontend/galery_7.png)





## Informacje techniczne
Więcej informacji technicznych oraz demo interfejsu można znaleźć na stronie projektu platformy Home Assistant [Lovelace UI](https://www.home-assistant.io/lovelace/) https://www.home-assistant.io/lovelace/


### Kopia konfiguracji interfejsu użytkownika

Gdy jesteś w trybie konfiguracji intefrejsu użytkownika, możesz wybrać opcję **"Manualny edytor konfiguracji"** dostępną w prawym górnym rogu każdej strony w aplikacji będącej w trybie konfiguracji.

![Konfiguracja interfejsu użytkownika kopia](/img/en/frontend/lovelace-ui-conf-raw.png)


To spowoduje wyświetlenie tekstowej wersji konfiguracji interfejsu

![Konfiguracja interfejsu użytkownika kopia](/img/en/frontend/lovelace-ui-conf-raw-save.png)

Wersję tekstową możesz zapisać do pliku jako kopię zapasową, następnie można eksperymentować z własnymi ustwieniami. Gdyby coś poszło nie tak, to zawsze można wrócić do wersji pierwotnej poprzez wklejenie tekstowej wersji konfiguracji w tym miejscu.


### Reset pulpitu

Jeżeli coś poszło nie tak z naszą konfiguracją pulpitu, to zawsze możemy go całkowicie wyczyścić i zacząć konfigurację od nowa. Wystarczy, będąc w trybie "Ręcznej konfiguracji" usunąć całą definicję pulpitu, a następnie zapisać zmiany.

![Konfiguracja interfejsu użytkownika reset](/img/en/frontend/lovelace_reset_dashboard.png)
