---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.104.5 Słucham Cię
---


# 0.104.5 Słucham Cię :)

![](/img/en/blog/202002/ai-speaker.png)

"Słucham Cię" to motto naszego projektu. Chcemy, żeby to nie był tylko slogan, ponieważ staramy się słuchać potrzeb i opinii naszych Klientów.

W tej wersji rozpoczynamy obsługę "słowa klucza" (słowa aktywującego mikrofon) oraz wprowadzamy bardziej zaawansowaną obsługę odtwarzaczy dodanych do Asystenta domowego.

<!--truncate-->

## Wykrywanie słowa kluczowego

Wprowadzamy (na początek do naszej aplikacji na system Android a docelowo do wszystkich naszych aplikacji), **możliwość włączenia wykrywania słowa kluczowego** - mechanizm wyzwalający rejestrowanie polecenia głosowego.

![](/img/en/blog/202002/porcupine.png)

Po testach zdecydowaliśmy się zastosować bardzo dokładny i lekki silnik aktywujący [Porcupine](https://picovoice.ai/). O wyborze tego rozwiązania zadecydowały jego cechy:
- Użycie do trenowania głębokich sieci neuronowych przeszkolonych w rzeczywistych sytuacjach.
- Kompaktowy i wydajny. Może pracować z tak małą jak 20 KB RAM.
- Międzyplatformowy. Jest zaimplementowany w ANSI C. Producent wspiera wiele platform: Raspberry Pi, Beagle Bone, Android, iOS, watchOS, Linux (x86_64), Mac, Windows, WebAssembly.
- Skalowalny. Może wykrywać wiele poleceń głosowych jednocześnie bez dodatkowego obciążenia procesora / pamięci.
- Częściowo otwarty - mamy do dyspozycji zestaw predefiniowanych "wyrażeń aktywujących" na różne platformy za darmo.



To jest nasza aplikacja testowa do wykrywania słów aktywujących komendę, która działa na urządzeniach z Androidem.

https://github.com/sviete/AIS-hotword


![](/img/en/blog/202002/ais_hot_word.png)


> Rozwiązanie to na początku jest wbudowane w naszą aplikację dostępną w Google Play.
> Aktywacja mikrofonu będzie wymagała świadomego włączenia przez użytkownika. O tym, że mikrofon jest włączony, informujemy stosownym powiadomieniem. **Rozwiązanie jest 100% offline - działa bez połączenia z Internetem - słuchamy Cię, ale nie podsłuchujemy!**



![](/img/en/blog/202002/ais_hot_word_1.png)

Na początek dostarczymy kilka słów aktywujących do wyboru, są to wytrenowane zwroty dostępne na licencji Apache License 2.0, dzięki czemu możemy ich użyć w naszym projekcie.


Umożliwimy też dostosowanie czułości nasłuchiwania do własnych potrzeb.

Ta funkcjonalność w połączeniu z odtwarzaczem i rozkładem pomieszczeń (floor plan) pozwoli na łatwe zbudowanie panelu do sterowania naszym domem - wystarczy na tablecie zainstalować naszą darmową aplikację :)


[AI-Speaker](https://play.google.com/store/apps/details?id=pl.sviete.dom&hl=en)

Docelowo mamy ambicję, by zastosować własne słowo aktywujące, które będzie kojarzone z naszą marką. Z tego, co się orientujemy, będzie to pierwszy tego typu projekt w Polsce, który zajmie trochę czasu i zasobów. Na tą chwilę nie podajemy terminów.


Więcej szczegółów jak to działa w dokumentacji [Dotykowy panel sterowania](/docs/ais_app_android_dom_tablet)


![Przekierowanie mediów](/img/en/frontend/apk_hot_word_options.png)


## Odtwarzacze

Dodaliśmy możliwość bardziej zaawansowanej obsługi odtwarzaczy. Poza wbudowanym odtwarzaczem mediów, który dostarczamy na urządzeniu (wraz ze skonfigurowanymi serwisami dostarczającymi media do odtwarzania) mamy teraz możliwość:

- przekierowania mediów na inne odtwarzacze:

![Przekierowanie mediów](/img/en/frontend/player_redirect.png)


- grupowanie odtwarzaczy:

![Grupowanie odtwarzaczy](/img/en/frontend/player_grup.png)


- wysyłanie tekstu do przeczytania na grupę głośników (tylko jeżeli głośnik posiada mechanizm TTS)

![Wysyłanie tekstu na grupę głośników](/img/en/frontend/player_tts.png)



Więcej szczegółów jak to działa w dokumentacji [Odtwarzacze](/docs/ais_app_player)


Dodatkowo telefon/tablet/TvBox z systemem Android może być teraz też odtwarzaczem, możesz też wysyłać do niego powiadomienia głosowe. Wystarczy zainstalować naszą darmową aplikację. Z aplikacji możesz też teraz łatwo sterować mediami na bramce z innego urządzenia (telefonu).

[AI-Speaker](https://play.google.com/store/apps/details?id=pl.sviete.dom&hl=en)


![Sterowanie mediami na bramce z telefonu](/img/en/frontend/mob_notification_media.png)

Więcej szczegółów jak to działa w dokumentacji Sterowanie mediami na bramce z telefonu


## Nowa wersja naszej aplikacji na zegarki z WearOS

Zmieniliśmy sposób komunikacji z bramką, dzięki czemu otrzymujemy powiadomienia głosowe/tekstowe o wykonaniu akcji nie tylko na bramce, ale też na kliencie, który wysyła komendę.
W skrócie wygląda to teraz tak:


![](/img/en/blog/202002/watch_1.jpg)
![](/img/en/blog/202002/watch_2.jpg)


## Zigbee2MQTT

Łatwiejsza zmiana nazwy urządzenia- wystarczy kliknąć węzeł urządzenia na mapie, aktualna nazwa zostanie automatycznie wpisana do formularza zmiany nazwy.

<iframe width="560" height="315"  src="https://www.youtube.com/embed/jYW2V8zgcDI" frameBorder="0" allowFullScreen></iframe>


## Generowanie stylów CSS dla kart (floor plan)

Docelowo planujemy zrobić to bardziej na zasadzie "drag & drop", tak żeby każdy mógł rozmieścić swoje urządzenia na planie i nimi sterować.
Można zapoznać się ze zarysem funkcjonalności zaprezentowanej na forum: https://ai-speaker.discourse.group/t/rzut-podlogi-floor-plan/155

![Floor plan](/img/en/blog/202002/floor_plan.png)


## Home Assistant

Najnowszy (stabilny) [Home Assistant](https://www.home-assistant.io/blog/2020/01/15/release-104)

Bardzo podoba nam się ulepszona obsługa encji i możliwość usuwania niedostępnych pozycji bezpośrednio z interfejsu użytkownika.

![Asystent](/img/en/blog/202002/ha_entity_del.png)


---
Zapraszamy do aktualizacji i [komentowania na forum](https://ai-speaker.discourse.group/)
AI-Speaker 02/2020
---
