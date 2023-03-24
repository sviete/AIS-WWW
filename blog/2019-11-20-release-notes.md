---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.101.4 RF 433 i IKEA TRÅDFRI
---

## Wersja systemu 0.101.4 z dnia 20 listopada 2019 roku,


## RF 433 i urządzenia AIS dom

![RF 433](/img/en/iot/iot_ais_dom_device_rf433_learn_step_7.png)

Żeby umożliwić połączenie pilotów (do bram, rolet), przełączników, czujników i itp. urządzeń komunikujących się za pomocą transmisji radiowej 433 MHz z bramką AIS dom, potrzebujemy dodatkowego urządzenia umożliwiającego wysyłanie i odbieranie kodów RF 433. Polecamy do tego celu urządzenie Sonoff RF Bridge 433 z alternatywnym oprogramowaniem umożliwiającym łatwą integrację z bramką AIS dom (MQTT) oraz obsługującym większą ilość protokołów (oryginalny Sonoff obsługuje tylko jeden protokół z 24 bitami).

<!--truncate-->

![RF 433](/img/en/iot/iot_ais_dom_device_rf433_map.png)

Pokazujemy też jak to działa na video:

<div>
<iframe width="560" height="315"  src="https://www.youtube.com/embed/NEFd_T3gqNU" frameBorder="0" allowFullScreen></iframe>
</div>

## IKEA TRÅDFRI

Od wersji 0.101 dodaliśmy integrację z IKEA Trådfri jako domyślnie wbudowaną - nie trzeba już doinstalowywać żadnych pakietów.
Szczegóły w dokumentacji Integracja IKEA Trådfri

![Konfiguracja IKEA](/img/en/bramka/integration_ikea_0.jpg)

A tak to może wyglądać w aplikacji Asystent domowy:

<video width="100%" height="100%" playsInline="" autoPlay="" muted="" loop="">
  <source src="/video/ikea.webm" type="video/webm"/>
</video>

## Przykłady IFTTT

W integracjach dodaliśmy podkategorię z przykładami. Na początek wyjaśniamy krok po kroku jak założyć konto w serwisie IFTTT i zbudować nasz pierwszy Aplet. Aplet to wg terminologii serwisu IFTTT coś, co łączy ze sobą dwie lub więcej aplikacji lub urządzeń i umożliwia zrobienie czegoś, czego te aplikacje lub urządzenia nie mogłyby zrobić same.
W kolejnym przykładzie wyjaśniamy jak dodać Aplet uruchamiający dowolną akcję w Asystencie domowym z serwisu IFTTT.

![IFTTT](/img/en/blog/examples_ifttt.png)


## TuneIn

Łączymy się z API TuneIn, w tej wersji dodaliśmy dwie nowe kategorie w naszych radiach **Popularne TuneIn** i **Trendy TuneIn**. W kolejnych wersjach dodamy wyszukiwanie audio TuneIn i dodawanie do ulubionych.

![IFTTT](/img/en/blog/tunein_start.png)

## Wyszukiwanie w dokumentacji

Sebastian znalazł fajny sposób na dodanie wyszukiwania do naszej dokumentacji.
Zostaliśmy zweryfikowani przez www.algolia.com 👋

![IFTTT](/img/en/blog/algolia.png)

 i mamy już możliwość wyszukiania na stronie z dokumentacją

 ![IFTTT](/img/en/blog/algolia2.png)

## Dni pracujące

Inspiracja do dodania do naszej domyślnej konfiguracji czujnika dnia pracującego/wolnego w Polsce pochodzi on naszego użytkownika Darka - dzięki :)
Czujnik wskazuje, czy bieżący dzień jest dniem roboczym, czy nie z uwzględnieniem informacji o świętach państwowych.

![Dni pracujące](/img/en/blog/working_days.png)

Celem jest ułatwienie dodawania automatyzacji z uwzględnieniem dni.

![Dni pracujące](/img/en/blog/working_days1.png)

## Pozostałe istotne zmiany

> Informujemy głosowo o instalowaniu zależności i wyłączamy domyślnie zapis historii.

Poniżej wyjaśniamy, dlaczego zdecydowaliśmy się tak zrobić.

Najczęstszym problemem zgłaszanym do serwisu jest długie uruchamianie po aktualizacji. Część użytkowników nie sprawdza logów i jeżeli urządzenie nie uruchamia się szybko po aktualizacji, resetuje je, wyłączając z prądu. Dostaliśmy też zwrot jednego urządzenia do serwisu, które zostało przełączone na kanał beta, uruchamiało się długo... i podejrzewamy, że zostało w ten sposób popsute (lub było wadliwe od początku). Nie jest to duża procentowa skala jednak bardzo nas to zmartwiło :( .

Dokładamy wszelkich starań, żeby wszystkie urządzenia działały dobrze (każde testujemy po programowaniu), **dlatego potraktowaliśmy tę pierwszą reklamację bardzo serio i postanowiliśmy się temu problemowi przyjrzeć**.


Zbadaliśmy, co jest przyczyną problemu z długim uruchamianiem po aktualizacji i okazało się, że są to 2 rzeczy:

1. **Instalacja zależności**, która następuje przy pierwszym uruchomieniu po aktualizacji, może trwać kilkanaście minut (w zależności od ilości integracji, które się ma dodane).

2. **Migracja bazy danych**, która następuje przy pierwszym uruchomieniu, może trwać kolejne naście minut (w zależności od tego, jaka zmiana była w modelu danych, jakie ma się ustawienia logowania danych i ile posiada się encji w systemie).


Są to problemy trudne do wyeliminowania i wyjaśnienia dla użytkownika, ponieważ nie wiemy jak dużo integracji ma użytkownik i urządzeń, nie wiemy, jaki szybkie jest łącze internetowe, więc nie jesteśmy w stanie określić, jak długo potrwa aktualizacja.

Informacja o statusie aktualizacji w aplikacji oraz sprawdzanie logów z postępu aktualizacji, okazało się niewystarczające (szczególnie gdy użytkownik ma problem ze wzrokiem i/lub używa urządzenia jako głośnika).

Podjęliśmy jednak pewne kroki, żeby zniwelować te problemy:

### Instalacja zależności

Żeby zniwelować pierwszy problem, dodaliśmy komunikaty głosowe podczas instalowania dodatkowych pakietów przez Asystenta domowego przy pierwszym uruchomieniu.
Czyli od tej wersji podczas aktualizacji usłyszysz standardowe komunikaty:
- Aktualizacja. Pobieram...
- Aktualizacja. Instaluje...
- Aktualizacja. Restartuje...

a następnie (przy pierwszym uruchomieniu po aktualizacji):

- Instaluje zależności pakietu: ... ; poczekaj.
- Instaluje zależności pakietu: ... ; poczekaj.
- Instaluje zależności pakietu: ... ; poczekaj.
... itd. w zależności ile masz dodanych integracji, do których jest aktualizacja pakietów. Żebyś wiedział, że coś się dzieje i nie ma potrzeby wyłączać urządzenia.


### Migracja bazy danych

Z bazą danych sytuacja jest jeszcze bardziej skomplikowana. Największy nasz klient produkuje urządzenie dla osób niewidomych i niedowidzących, użytkownicy ci korzystają głównie z audio i komend głosowych. Nigdy nie interesowała ich historia logowana przez rekorder i nie są w stanie sami go konfigurować / wyłączyć.

Część zaawansowanych użytkowników bardzo ceni sobie logowanie danych i oferowany przez nas domyślne ustawienia logowania oraz miejsce na urządzeniu nie są dla nich wystarczające. Zaawansowani użytkownicy i tak sami ustawiają sobie preferencje logowania mp na osobnym urządzeniu NAS w dowolnej relacyjnej bazie danych, którą preferują (MySQL, MariaDB, PostgreSQL, czy MS SQL Server) gdzie mają możliwość logowania i analizowania terabajtów danych. Użytkownicy Ci wiedzą, że takiej bazie trzeba zapewnić miejsce a migracja takich volumenów po aktualizacji może zająć kilka godzin lub dni (autentyczne przypadki z forum Home Assistant).

Biorąc pod uwagę powyższe oraz to, że bez rekordera urządzenie działa i aktualizuje się szybciej oraz po aktualizacji uruchamia w bardziej przewidywalnym czasie **postanowiliśmy wyłączyć domyślne zapisywanie historii do bazy danych**.

Nie jest to idealne rozwiązanie, bo część użytkowników chcących mieć podstawowe dane historyczne będzie zmuszona je włączyć samemu w konfiguracji zgodnie z opisem w dokumentacji:  [Recorder](https://www.home-assistant.io/integrations/recorder/).

Takie rozwiązanie jest jednak kompromisem pomiędzy użytkownikami, którzy nie potrzebują logowania i nie potrafią je wyłączyć (a zależy im na tym, żeby urządzenie się szybko aktualizowało i uruchamiało po aktualizacji) a tymi użytkownikami, którzy potrzebują, potrafią włączyć oraz zadbać o to, żeby baza nie zajęła całego miejsca na urządzeniu.

> Jeżeli po aktualizacji brakuje Ci zakładki Historia, to możesz ją dodać łatwo w swojej konfiguracji.
Oczywiście pamiętaj, że jeżeli masz dziesiątki urządzeń, które generują tysiące zdarzeń to kilka wolnych GB które mamy na urządzeniu może szybko się skończyć. Dlatego najpierw zalecamy zapoznać się z ustawieniami komponentu **[Recorder](https://www.home-assistant.io/integrations/recorder/).**

![Historia](/img/en/blog/history.png)

Wystarczy dodać 2 linie do pliku z [konfiguracją](/docs/ais_gate_faq_config_yaml):

```yaml
recorder:
history:
```




## Home Assistant

Najnowszy (stabilny) [Home Assistant](https://www.home-assistant.io/blog/2019/10/30/release-101/" target="_blank">0.101) Z integracją Airly https://airly.eu/pl/ autorstwa naszego rodaka [Maciej Bieniek](https://github.com/bieniu) gratulacje 👏 https://www.home-assistant.io/integrations/airly/ Oraz ogromna ilość poprawek i ulepszeń - do tej wersji ponad 300 programistów dostarczyło ponad tysiąc zmian. Imponujące 👌


## TODO

Obiecaliśmy opisać sterowanie ogrzewaniem, które zrobiliśmy w biurze, niestety bieżąca wersja się rozrosła i zabrakło nam czasu na porządny opis i schematy... **dostarczymy na dniach opis w dokumentacji**.

Nasz użytkownik Piotr wysłał nam info jak skonfigurować Z-wave na bramce. Wielkie dzięki - lubimy takich pro 💪 userów. Dodajemy to też sobie do TODO i w kolejnych wersjach planujemy udostępnić tą funkcjonalność dla wszystkich zainteresowanych.

Pracujemy nad integracją Zigbee i mamy pewne postępy :) chodzi o to, żeby sterować ściemnianymi żarówkami z IKEA po 30 zł bez bramki IKEA :). Mamy nadzieję zaprezentować gotowe rozwiązanie w kolejnych aktualizacjach. Tak to obecnie wygląda.

![zigbee_dev](/img/en/blog/zigbee_dev.png)


----
Zapraszamy do aktualizacji!
AI-Speaker 11/2019
