---
title: "AIS Narodowy Bank Polski"
sidebar_label: AIS NBP
---

## Wprowadzenie

AIS NBP jest to integracja Asystenta domowego z serwisem api.nbp.pl, który umożliwia pobieranie kursów walut oraz cen złota z Narodowego Banku Polskiego.


![AIS NBP](/img/en/frontend/ais_nbp1.png)


## Dodanie integracji

Aby skonfigurować AIS NBP, przejdź do konfiguracji a następnie do panelu integracji. Naciśnij pomarańczowy przycisk z ikonką "plus" w prawym dolnym rogu ekranu, żeby otworzyć listę dostępnych integracji. Wybierz z listy integrację **AIS NBP**

![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp2.png)


Potwierdź, że chcesz dodać integrację:

![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp3.png)


Wybierz, jakie waluty chcesz obserwować i naciśnij **ZATWIERDŹ**:

![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp4.png)


## Encje integracji

Integracja dodaje kilka sensorów (w zależności od ilości wybranych walut do śledzenia), sensory są automatycznie i cyklicznie odświeżane tak, żeby ich wartość reprezentowała aktualne kursy w NBP.

![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp5.png)

Encje mogą być dodane do interfejsu, w ten sposób można prezentować ich status w wybrany sposób.

## Komendy głosowe

O status encji NBP pytamy tak samo, jak o status każdej innej encji w systemie:

![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp6.png)


## Automatyzacje

Możemy też dodać odpowiednią automatyzację, której wyzwalaczem będzie stan sensora nbp.
Np. gdy cena złota lub kurs wybranej waluty osiągnie pożądany przez nas poziom, dostaniemy powiadomienie, że to dobry czas na wykonanie transakcji. 

![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp7.png)


## Usunięcie integracji

Integracje usuwamy przechodząc do konfiguracji a następnie do panelu integracji i wybierając opcję usuń:

![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp8.png)


## Dodatkowa informacja

Integracja AIS NBP powstała na [forum Asystenta domowego](https://ai-speaker.discourse.group/t/wlasna-integracja-7-przyklad-nowej-integracji/1029) jako przykład/szablon opisujący dodawanie własnej, nowej integracji do Asystenta domowego.

![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp9.png)


