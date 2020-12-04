---
title: "AIS Narodowy Bank Polski"
sidebar_label: AIS NBP
---

## Wprowadzenie

AIS NBP jest to integracja Asystenta domowego z serwisem api.nbp.pl który umożliwia pobieranie kursów walut oraz cen złota z Narodowego Banku Polskiego.


![AIS NBP](/img/en/frontend/ais_nbp1.png)


## Dodanie integracji

Aby skonfigurować AIS NBP, przejdź do konfiguracji a następnie do panelu integracji. Naciśnij pomarańczowy przycisk z ikonką "plus" w prawym dolnym rogu ekranu, żeby otworzyć listę dostępnych integracji. Wybierz z listy integrację **AIS NBP**

![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp2.png)


Potiwerdz, że chcesz dodaś integraję:

![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp3.png)


Wybież jakie waluty chcesz obserwować i naciśnij **ZATWIERDZ**:

![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp4.png)


## Encje integracji

Integracja dodaje kilka sensorów (w zależności od ilości wybranych walut do śledzenia), sensory są automatycznie cyklicznie odświeżane tak żeby ich wartość reprezentowała aktualne kursy w NBP.
![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp5.png)

Encje mogą być dodane do interfejsu w ten spoób można prezentować ich status w wybrany sposób.

## Komendy głosowe

O status encji nbp pytamy tak samo jak o status każdej innej encji w wsytemie:
![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp6.png)


## Automatyzacje

Możemy też dodać odpowiednią automatyzację, której wyzwalaczem będzie stan sensora nbp.
Np. gdy cena złota lub kurs wybranej waluty osiągnie pożądany przez nas poziom, dostaniemy powiadomienie, że to dobry czas na wykonanie transakcji. 

![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp7.png)


## Usunięcie integracji

Integracje usuwamy przechodząc do konfiguracji a następnie do panelu integracji i wybierając opcję usuń:

![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp8.png)


## Dodatkowa informacja

Integracje AIS NBP powstała na [forum Asystenta domowego](https://ai-speaker.discourse.group/t/wlasna-integracja-7-przyklad-nowej-integracji/1029) jako przykład/szablon opisujący dodawanie własnej nowej integracji do Asystenta domowego.

![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp9.png)


