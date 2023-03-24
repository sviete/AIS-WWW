---
title: "Automatyzacja wyzwalana skanem"
sidebar_label: Automatyzacja wyzwalana skanem
---

## Wprowadzenie

Zamiast mówić komendę lub wpisywać ją w okienko czatu z Asystentem domowym możemy przyłożyć odblokowany telefon do taga NFC i przesłać do bramki komendę do wykonania.
Możemy też zeskanować aparatem w telefonie QR kod i wysłać go do bramki w celu uruchomienia automatyzacji.

Funkcjonalność skanowania kodów QR oraz tagów NFC wbudowana jest w naszą mobilną aplikację AIS dom - skanowanie.

![AIS scan](/img/en/bramka/ais_scan_tags.png)

### Obsługiwane skany

Staramy się umożliwić skanowanie wszystkich tagów, obsługujemy je na 4 sposoby:

#### 1. Skan identyfikatora bramki AIS

Po zeskanowaniu identyfikatora bramki AIS, ustalamy dane do połączenia i łączymy z bramką.

![AIS scan](/img/en/bramka/nfc_ais_scan.png)


#### 2. Tagi NFC z danymi tekstowymi

Jeżeli w zeskanowanym tagu zapisany jest rekord z danymi tekstowymi - ``text/plain`` to zeskanowane dane traktujemy jako komendę tekstową i wysyłamy ją do bramki.
W ten sposób możemy zapisać na tagu [dowolną komendę którą rozumie Asystent domowy](/docs/ais_app_assistent_commands/) i sterować dowolnymi urządzeniami lub uruchamiać audio czy automatyzację w systemie.

![NFC text](/img/en/bramka/nfc_text_data.png)


#### 3. Tagi z identyfikatorem danych ais/event

Rozpoznajemy identyfikator zasobów URI ``ais/event``

![NFC event](/img/en/bramka/nfc_ais_data.png)


Po zeskanowaniu taga NFC z identyfikatorem danych ais/event wyzwalamy na bramce zdarzenie **tag_scanned** a w danych tego zdarzenia (w **event_data**) przekazujemy dane zapisane w rekordzie typu ``ais/event``.
Pozwala to na dodanie automatyzacji, której wyzwalaczem jest zdarzenie skanowanie taga NFC.
Poniżej opiszemy dwa przykłady wykorzystania tego mechanizmu.



#### 4. Inne

Możesz też zeskanować np. swoją kartę bankomatową, zegarek, głośnik i inne urządzenia/przedmioty które mają tag NFC.
Jeśli uda nam się odczytać z nich identyfikator to potraktujemy go jak ais/event i wyzwolimy na bramce zdarzenie **tag_scanned** a w danych tego zdarzenia (w **event_data**) przekazujemy identyfikator zeskanowanego taga: **tag_id**.

:::info
Do zapisu tekstu do tagów NFC polecamy darmową aplikację [NFC Tools](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc&hl=pl).
Aplikacja ta jest bardzo intuicyjna. Po jej uruchomieniu w pierwszej zakładce możemy odczytać tag NFC i sprawdzić, czy jest odblokowany do zapisu. Jeżeli tag jest zapisywalny, to przechodzimy do zakładki **ZAPIS** i wybieramy opcję **Dodaj pozycję**. Następnie wybieramy pozycję typu **Tekst** i wprowadzamy tekst polecenia/komendy, która ma być wykonana na bramce, np. ``Włącz radio Eska Rock`` i zatwierdzamy **OK**.
:::


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



## Schemat automatyzacji

Automatyzację wyzwalaną przez skan TAG-a możemy w łatwy sposób utworzyć na podstawie gotowego [schematu automatyzacji](ais_bramka_automation_blueprint).

Wystarczy, że:
1. Wybierzemy predefiniowany schemat **Wykonanie komendy po zeskanowaniu TAG-a**

![Dodanie nowej automatyzacji](/img/en/bramka/blueprint_tag_0.png)

2. Uzupełnimy i zapiszemy zdefiniowany szablon:

![Dodanie nowej automatyzacji](/img/en/bramka/blueprint_tag.png)
