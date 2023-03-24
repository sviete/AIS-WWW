---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.105.7 Dyski zdalne i wymienne
---


##  0.105.7 Dyski zdalne i wymienne

![Dyski](/img/en/frontend/drives_all.png)


<!--truncate-->

:::tip Wskazówka
UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

W tej wersji przenieśliśmy zależności pakietów (w celu wyeliminowania błędu wielokrotnego instalowania niektórych pakietów z zależnościami). **Aktualizacja może potrwać 40 minut** - poczekaj cierpliwie na koniec aktualizacji. Komunikatami głosowymi informujemy o postępach aktualizacji, możesz śledzić szczegóły wykonywanych czynności podczas aktualizacji łącząc się do bramki po ssh i przeglądając logi poleceniem **pm2 logs**.

:::important informacja
W razie problemów po aktualizacji sprawdź procedurę [Aktualizacja z konsoli](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step)- to może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

## Dyski zdalne i wymienne

W tej wersji znacznie usprawniliśmy funkcjonalność dysków wymiennych i zdalnych.
Dyski wymienne to dołączone do urządzenia karty SD lub pamięci USB.
Dyski zdalne to dyski/usługi przechowywania danych w chmurach.

![Dyski](/img/en/frontend/drives_all.png)

Od tej wersji te dwa typy dysków automatycznie monutujemy w folderze użytkownika w podfolderach:

- dyski-wymienne
- dyski-zdalne

``` bash
$ cd ~/dom
ls
dysk-wewnętrzny  dyski-wymienne  dyski-zdalne  dyski-zewnętrzne
```

Istotne zmiany:
- Dyski wymienne i zdalne montujemy z uprawnieniem do zapisu - czyli możesz już nie tylko przeglądać i odtwarzać treści na dyskach zdalnych i wymiennych, ale także zapisywać dane z bramki na tych dyskach. Użytkownicy, którzy wiedzą, jaką to daje funkcjonalność (zapisywanie zdjęć czy filmów z kamer) mogą już teraz jej używać. Użytkownicy, którzy są mniej obeznani ze strukturą katalogów w systemie Linux i poleceniami konsoli powinni poczekać, aż te funkcjonalności zostaną dokładniej opisane w dokumentacji i będą w aplikacji.
- Do montowania dysków zdalnych używamy [libfuse](https://pl.wikipedia.org/wiki/FUSE) i [rclone](https://rclone.org/) co upraszcza nam kod i przyśpiesza przeglądanie dysków zdalnych i odtwarzanie z nich treści.
- Konfigurację rclone przenieśliśmy z folderu ~/dom/rclone.conf do ukrytego folderu ~/AIS/.dom/rclone.conf Umożliwia nam to tworzenie kopii zapasowej konfiguracji dysków zdalnych (bo w kopii zapasowej mamy konfigurację z folderu ~/AIS)
- dyski-zewnętrzne to pozostałość po wcześniejszej implementacji, w której montowaliśmy dyski (USB czy karty SD) tylko do odczytu. Zostawimy to jeszcze przez 2 miesiące, bo może ktoś używał tej lokalizacji (po tym czasie należy zmienić w swoich automatyzacjach i serwisach lokalizację dyski-zewnętrzne na dyski-wymienne).

:::caution Uwaga
Jeżeli usuwasz/modyfikujesz/dodajesz coś z dysków zdalnych lub wymiennych na bramce, to doradzamy użyć dysku, na którym nie ma nic cennego (dodanie dysku Google czy Mega na nowe konto to nie problem). W ten sposób nie stracisz żadnych danych w razie błędu w automatyzacji czy komendzie.
:::

## Niezniszczalna bramka

Rozpoczęliśmy pracę nad projektem "Niezniszczalna bramka".

Zauważyliśmy, że część naszych użytkowników, żeby mieć integrację z nowym urządzeniem w domu jest w stanie wkleić każdy kod z sieci do bramki.
Następnie mieć do nas pretensje, że coś się nie aktualizuje / nie działa tak jak powinno :(
Widzimy na forum, że część osób nie przejmuje się tym jak działa i co robi taki niestandardowy komponent. Obserwujemy też jaki procent problemów dotyczy pracy na wersji beta z zainstalowanymi niestandardowymi komponentami.

:::caution Uwaga
Dlatego jeszcze raz ostrzegamy przed instalowaniem niestandardowych komponentów, z jakiegoś powodu takie komponenty nie znalazły się oficjalnie w Asystencie domowym. Pamiętaj, że robisz to na własną odpowiedzialność. **To tak jak instalowanie aplikacji z nieznanych źródeł - może być wszystko OK a możesz zainstalować wirusa, który zniszczy twój system**.
:::


###  Możliwe konsekwencje instalacji niestandardowych komponentów:

- Wpływ na stabilność systemu. Te kody mogą być źle napisane, robić coś w pętli i zawieszać / restartować urządzenie. Tłumaczymy to na przykładzie integracji niestandardowej, która jest w stanie logować 1 000 000 (tak, milion!) wpisów w ciągu godziny https://ai-speaker.discourse.group/t/dlaczego-niestandardowe-komponenty-nie-sa-bezpieczne/288 Oczywiście o zgrozo komponent ten jest bardzo powszechnie używany.
- Wpływ na aktualizacje automatyczne. Nikt nie testował tych kodów i nie sprawdzał ich zależności (pakietów, które doinstalowują). Komponenty te mogą instalować pakiety w innych wersjach niż oficjalne, przetestowane i wspierane a w konsekwencji mogą blokować oficjalne aktualizacje.
- Legalność. Komponenty niestandardowe mogą używać API producentów bez ich zgody. Pamiętaj, żeby robić to świadomie, bo **odpowiedzialność za wszystko, co sam doinstalowujesz i używasz na bramce, spoczywa na Tobie**.

:::important informacja
Na etapie DEV nie chcemy blokować użytkownikom instalowania dowolnych kodów na bramce. Ponieważ jednak z jakiegoś powodu na koniec odpowiedzialność spada na nas, poczynimy kroki, aby uodpornić nasze urządzenie na tego typu praktyki.
:::

### Plan w projekcie "Niezniszczalna bramka":

1. Wraz z aktualną wersją 0.105.7 przenosimy bazę danych i logi do pamięci urządzenia.
2. Wraz z aktualną wersją 0.105.7 wprowadzamy tryb awaryjny. To nowy tryb w Home Assistant pozwalający na uruchomienie aplikacji webowej w przypadku problemów z konfiguracją użytkownika (dotychczas w przypadku problemów z konfiguracją system się nie uruchamiał i trzeba było sprawdzać logi z konsoli). Teraz aplikacja webowa powinna się uruchomić ze stosownym powiadomieniem. W wersji 0.106 będziemy kontynuowali wdrażanie tego trybu. Naszym celem jest, aby Asystent domowy zawsze się uruchamiał i zapewniał interfejs do pracy bez względu na to, co zostało doinstalowane i w jaki sposób.
3. W wersji 0.106 dostarczymy aktualizację serwisu na bramce. Wyłączymy aktywność webview (ten ekran z mikrofonem i aplikacją webową działającą w ramce). Zostawimy Asystenta domowego na bramce jako sam serwis. Nasze bramki działają w trybie “sterowania bez monitora” - nie mają uruchomionej aktywności ramki z aplikacją. Ta aplikacja to przeglądarka Chrome, która potrzebuje dość sporo zasobów (procesor i pamięć). To powinno przyśpieszyć i ustabilizować działanie Asystenta domowego.
4. W kolejnej wersji udostępnimy mechanizm dual boot. Dzięki temu każdy będzie mógł uruchomić system z karty SD (jak w RPi) lub USB. W ten sposób będzie można uruchomić “czystego” Linux-a z Dokerem i Home Assistant i sprawdzić, czy takie działanie jest stabilniejsze.


## Poprawki w wyglądzie aplikacji

Nasz znajomy grafik przejrzał aplikację i podpowiedział nam kilka rzeczy.
Efektem jest poprawiony widok aplikacji webowej (tło i logo na pierwszej stronie).
Jak to zostało zrobione, opisaliśmy na blogu tak, żeby każdy mógł dodawać własne style do widoków i kart:
- [Tło widoku](https://ai-speaker.discourse.group/t/wlasne-ladne-tlo-dla-widoku-w-aplikacji/265)
- [Stylizacja karty](https://ai-speaker.discourse.group/t/stylizacja-karty-w-aplikacji/273)

Dodaliśmy też kilka zmian w wyglądzie aplikacji mobilnej.

![tablet](/img/en/blog/202002/tablet.png)


## Nowe pakiety binarne

Nowe wersje kilku binarek:
- libmosquitto 1.6.8 arm [upgradable from: 1.6.7-1]
- libwebsockets 3.2.99.3 arm [upgradable from: 3.2.99.1-1]
- mosquitto 1.6.8 arm [upgradable from: 1.6.7-1]
- rclone 1.51.0 arm [upgradable from: 1.49.5]
- ttyd 1.6.0 arm [upgradable from: 1.5.2-2]
- nowa binarka libfuse

Powinno dać się zauważyć spore przyśpieszenia działania konsoli w aplikacji webowej.

## Home Assistant

Najnowszy (stabilny) Home Assistant <a href="https://www.home-assistant.io/blog/2020/02/05/release-105/" target="_blank">0.105.5</a>

Bardzo podoba nam się nowy edytor stref.

![Edytor stref](/img/en/bramka/presence_detection_13.png)


----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)
AI-Speaker 02/2020
----
