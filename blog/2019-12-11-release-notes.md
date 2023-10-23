---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.102 Galeria i QR kody
---

## Wersja systemu 0.102.4 z dnia 11 grudnia 2019 roku,


![](/img/en/blog/201912/galeria2.png)

<!--truncate-->

## Galeria

Żeby ułatwić dodawanie zdjęć pomieszczeń, do aplikacji dodaliśmy nowy komponent galeria. Czyli wystarczy wysłać zejęcie do urządzenia a następnie umieścić je na karcie w aplikacji.
Jak to działa opisaliśmy w [Konfiguracja interfejsu użytkownika](/docs/ais_app_ui_config#dodanie-własnej-karty)

![](/img/en/blog/201912/galeria.png)


Od tej wersji do galerii można dodawać łatwo (z aplikacji) zdjęcia i wyświetlać je w interfejsie jako karty dla urządzeń. W kolejnej wersji opiszemy, w jaki sposób dodać automatyzację, która po wystąpieniu zdarzenia (np. dzwonek do drzwi) wykonuje zdjęcie kamerą lub nagrywa krótki filmik i wyświetlić go na telewizorze, lub wysłać powiadomienie.




## Kreator i skanowanie identyfikatora bramki

W najnowsze wersji naszej aplikacji mobilnej dodaliśmy konfigurację ustawień aplikacji mobilej przy pomocy kreatora.


Dodaliśmy też możliwość zeskanowania aparatem kodu QR z identyfikatorem bramki.


Jeżeli w parametrach połączenia z bramką, podamy identyfikator bramki (a nie adres URL), to aplikacja sama będzie w stanie sama ustalić możliwe połączenie z bramką (lokalne lub przez tunel). Wyjaśniamy jak takie łączenie działa w dokumentacji aplikacji AIS dom.


Skanowanie identyfikatora bramki dodaliśmy też do naszego [Panelu Integratora](https://powiedz.co/ords/f?p=DOM1) co powinno ułatwić dodawanie konta

![Asystent](/img/en/blog/qr_code_web.png)


## Nowe okno konwersacji w przeglądarce

W aplikacji webowej, z każdego widoku można teraz wywołać konwersację z Asystentem w przeglądarce (wybierając ikonkę chat na górze po prawej stronie).

Ponieważ można komendy mówić lub wpisywać zmieniliśmy ikonkę z mikrofonu na ikonkę chat/pogawędka:


![](/img/en/blog/201912/new_conversation.png)


## Dostosuj swój interfejs!

Odblokowujemy pierszą stronę (default_view) do edycji bo przecież każdy dom jest unikalny :)
Od wersji 0.102 dostarczamy i aktualizujemy dwa widoki **Audio** i **Jednostki**


* W widoku **Audio** dostarczamy odtwarzacz oraz darmową kolekcję treści audio
* W widoku **Jednostki** automatycznie wypełniamy karty pozycjami spełniającymi określone kryteria, w ten sposób podpowiadamy jak możesz tworzyć własne karty. Sprawdz konfigurację kart na tym widoku i ją kopiuj do własnych widoków.

W instrukcji wyjaśniamy [jak włączyć tryb konfiguracji](/docs/ais_app_ui_config).

![Asystent](/img/en/blog/201912/lovelace_custom.png)

Pracujemy nad tym, żeby dwa ostatnie nasze widoki **Audio** i **Jednostki** też przenieść do menu aplikacji - docelowo wszystkie widoki będą odblokowane do edycji.


## Home Assistant

Najnowszy (stabilny) [Home Assistant 0.102.3](https://www.home-assistant.io/blog/2019/11/20/release-102/)

Wraz z nowym edytorem scen dostępnym z aplikacji, dzięki któremu można zapisać bieżący status urządzeń jako scenę, a następnie aktywować ją komendą głosową [Uruchamianie automatyzacji
](/docs/ais_app_assistent_commands#uruchamianie-automatyzacji)

```text
'Uruchom {nazwa automatyzacji}'
lub
'Automatyzacja {nazwa automatyzacji}'
```

Aby włączyć dodawanie i edycję scen z aplikacji należy postępować wg opisu z dokumentacji [Home Assistant](https://www.home-assistant.io/docs/scene/editor/). Bramki, które będziemy wysyłali z wersją > 0.102 będą miały edytor scen już automatycznie włączony.


![Asystent](/img/en/blog/201912/scene_editor.png)


## Discourse!

Na prośbę użytkowników dodamy możliwość komentarzy pod postami i być może powstanie z tego jakieś forum - jeżeli będą chętni, żeby prowadzić na nim dyskusję i pomagać innym. Szczegóły już niebawem.

![Discourse](/img/en/blog/201912/Discourse.png)


----
Zapraszamy do aktualizacji! I
AI-Speaker 12/2019
