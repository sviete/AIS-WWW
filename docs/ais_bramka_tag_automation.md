---
title: "Automatyzacja wyzwalana tagiem NFC"
sidebar_label: Automatyzacja wyzwalana tagiem NFC
---

## Wprowadzenie

Zamiast mówić komendę lub wpisywać ją w okienko czatu z Asystentem domowym możemy przyłożyć odblokowany telefon do taga NFC i przesłać do bramki jego identyfikator oraz zarejestrować zdarzenie skanowania takiego taga.

Funkcjonalność skanowania tagów NFC wbudowana jest w naszą mobilną aplikację [AIS dom - skanowanie tagów NFC](/docs/ais_app_android_dom#skanowanie-tag%C3%B3w-nfc).

Po zeskanowaniu taga NFC wyzwalamy na bramce zdarzenie **tag_scanned** a w danych tego zdarzenia (w **event_data**) przekazujemy identyfikator taga **tag_id**.
Pozwala to na dodanie automatyzacji, której wyzwalaczem jest zdarzenie skanowanie taga NFC.

Poniżej opiszemy dwa przykłady wykorzystania tego mechanizmu.


## Przykład 1. - Informacja głosowa o zeskanowanym identyfikatorze

Dodajemy automatyzację o nazwie ``Skan taga NFC z identyfikatorem``:

![NFC](/img/en/bramka/nfc_auto_example1.png)

Jako wyzwalacz tej automatyzacji wybieramy zdarzenie typu ``tag_scanned``:

![NFC](/img/en/bramka/nfc_auto_example2.png)

Akcja do wykonania to uruchomienie serwisu mówiącego tekst. Tekstem jest informacja o zeskanowanym identyfikatorze:

``` yaml
service: ais_ai_service.say_it
data_template:
  text: Zeskanowano kod NFC {{ trigger.event.data.tag_id }}

```

![NFC](/img/en/bramka/nfc_auto_example3.png)




## Przykład 2. - Wyłączenie światła po zeskanowaniu określonego identyfikatora NFC

Dodajemy automatyzację ``Włącz światło w salonie po skanie karty płatniczej``:

![NFC](/img/en/bramka/nfc_auto_example4.png)

Wyzwalacz tej automatyzacji to zdarzenie typu ``tag_scanned`` z określonym identyfikatorem ``tag_id``


![NFC](/img/en/bramka/nfc_auto_example5.png)


Akcja do wykonania to przełączenie (toggle) naszego światła w salonie:

![NFC](/img/en/bramka/nfc_auto_example6.png)


## Wideo prezentujące działanie

<iframe width="560" height="315"  src="https://www.youtube.com/embed/nzRBeRZZX7Q" frameBorder="0" allowFullScreen></iframe>

