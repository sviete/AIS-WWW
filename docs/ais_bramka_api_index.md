---
title: "API systemu"
sidebar_label: API systemu
---


## Wprowadzenie

RESTful API działa na protokole http. Komunikacja poprzez ten protokół odbywa się za pomocą kilku standardowych metod, my wykorzystujemy głównie metodę POST (do wysłania danych) i GET (do pobierania). Webserwisy udostępniane są jako zasoby do których dostęp możliwy jest poprzez odpowiedni adres URL wywoływany z poziomu protokołu http za pomocą określonej metody.

Na bramce mamy dwa serwisy RESTful:

1. **API bramki** (dostep do natywnych zasobów systemu Android) na porcie 8122
2. **Standardowe webowe API Home Assistant/Asystenta domowego** na tych samych portach co serwer WWW (80 i 8180 lub w przypadku dostępu z zewnątrz 433)  

:::tip
Interfejsy API akceptują i zwracają tylko obiekty zakodowane w JSON.

W przykładach poniżej używamy lokalnej nazwy hosta bramki: ais-dom.local, jeżeli bramka nie jest dostępna w Twojej sieci pod tą nazwą to zamiast ais-dom.local użyj jej lokalnego adresu IP.
:::
## RESTful API bramki

Obecnie dostępne są 2 zasoby `http://ais-dom.local:8122/text_to_speech` i `http://ais-dom.local:8122/command`

:::caution
**To api dostępne jest tylko w sieci lokalnej, dlatego nie wymagamy autentykacji i szyfrowania.**

Jeżeli chcesz wywołać API na bramce z zewnątrz, to robimy to przez API Asystenta domowego, tam wymagamy autentykacji i mamy szyfrowanie (protokół https). Całe lokalne API bramki jest dostępne przez API Asystenta domowego - opisujemy to dokładnie poniżej.
:::


### Zasób /text_to_speech

Ten zasób pozwala nam na wysłanie do bramki metodą POST tekstu do przeczytania:

```
curl -v --header "Content-Type: application/json" \
--request POST  \
--data '{"text":"Witaj Jolka"}' \
http://ais-dom.local:8122/text_to_speech
```

### Zasób /command

Ten zasób pozwala nam na wysłanie komendy do wykonania, przykładowa komenda to wysłanie audio do odtwarzania na bramce:

```
curl -v --header "Content-Type: application/json" \
--request POST  \
--data '{"playAudio": "http://stream3.polskieradio.pl:8080/"}' \
http://ais-dom.local:8122/command
```

Dostępne komendy

| Komenda | Przykładowa wartość | Opis |
| --- | --- | --- |
| `playAudio` | `http://stream3.polskieradio.pl:8080/` | Odtwarzanie audio/video |
| `stopAudio` | `true` | Zatrzymanie odtwarzacza |
| `pauseAudio` | `true` | Pauza odtwarzacza |
| `setVolume` | `50` | Ustawienie głośności odtwarzacza od 0 do 100 |
| `upVolume` | `true` | Głośniej, to samo co naciśnięcie przycisku w pilocie |
| `downVolume` | `true` | Ciszej, to samo co naciśnięcie przycisku w pilocie |
| `setPlaybackPitch` | `1` | Częstotliwość audio, szczegóły w [dokumentacji PlaybackParams Android] (https://developer.android.com/reference/android/media/PlaybackParams) |
| `setPlaybackSpeed` | `1` | Szybkość odtwarzania |
| `seekTo` | `100` | Przewiń do pozycji w Milisekundach (ms) |
| `skipTo` | `100` | Przeskocz do pozycji w Milisekundach (ms) |
| `tone` | `86` | Odtworzenie tonu , szczegóły w [dokumentacji ToneGenerator Android] (https://developer.android.com/reference/android/media/ToneGenerator) |
| `setPlayerShuffle` | `false` | Odtwarzanie losowe, przydatne przy Spotify |
| `setTtsVoice` | `pl-pl-x-oda-local` | Zmiana głosu asystenta, dostępne opcje to: `pl-pl-x-oda-network` - "Jola online", `pl-pl-x-oda-local` - "Jola lokalnie", `pl-pl-x-oda#female_1-local` - "Celina", `pl-pl-x-oda#female_2-local` - "Anżela", `pl-pl-x-oda#female_3-local` - "Asia", `pl-pl-x-oda#male_1-local` - "Sebastian", `pl-pl-x-oda#male_2-local` - "Bartek", `pl-pl-x-oda#male_3-local` - "Andrzej" |
| `micOn` | `true` | Włączenie mikrofonu |
| `micOff` | `true` | Wyłączenie mikrofonu |
| `addBookmark` | `true` | Dodanie zakładki do odtwarzanych multimediów, przydatne przy audiobookach |
| `goToActivity` | `ActivityMenu` | Przejście do aktywności (ekranu na bramce). Dostępne opcje to: `ActivityMenu` - "Aktywność menu - sterowanie na monitorze", `SplashScreenActivity` - "Sterowanie bez monitora", `ExoPlayerActivity` - "Aktywność odtwarzacz multimediów", `ConsoleActivity` - "Konsola Asystenta domowego", `AndroidSettingsActivity` - "Ustawienia systemu Android", `SettingsActivity`  - "Ustawienia Serwisu Asystent domowy na bramce", `FilesActivity` - "Aplikacja menedżer plików na bramce", `AndroidWifiActivity` - "Ustawienia WiFi w systemie Android" |



## RESTful API Home Assistant

Asystent Domowy udostępnia serwer WWW na porcie 80 oraz 8180

* http://ais-dom.local:8180/ tu znajduje się aplikacja do kontrolowania systemu
* http://ais-dom.local:8180/api/ tu znajduje się RESTful API


### Wywoływanie/testowanie usług w apllikacji

:::tip
Aby sprawdzić dostępne usługi w aplikacji, z głównego menu przejdź do `Narzędzia deweloperskie` -> `USŁUGI` z tego miejsca możesz wywoływać/testować dowolne usługi dostępne na bramce.
:::

:::important
Każda usługa ma w aplikacji:
- opis
- wylistowane parametry (parametr, opis i przykładowa wartość parametru)

dlatego nie będziemy szczegółowo opisywać usług w dokumentacji, podamy tu tylko przykładowe wywołania.
:::

W celu wywołania/przetesotowania usługi:

1. Zaloguj się do aplikacji Asystent domowy z uprawnieniami `Administrator`.
2. Przejdź do `Narzędzia deweloperskie` -> `USŁUGI`.
3. Wybierz usługę do wywołania z dostępnej listy.
4. Podajemy parametry do przekazania w formacie JSON lub YAML.
5. Naciśnij przycisk "Wywołaj usługę".

Przykładowy parametr w formacie JSON:
```json
{"text": "Cześć, jak się masz?"}
```

odpowiednik w formacie YAML:
```yaml
text: "Cześć, jak się masz?"
```

![Usługi](/img/en/frontend/services_1.png)

:::tip
Cale RESTful API bramki (opisane szczegółowo powyżej), dostępne jest z poziomu Asystenta domowego za pomocą usługi `ais_ai_service.publish_command_to_frame`.

Dzięki temu możemy wywoływać api na bramce także z zewnątrz, w bezpieczny sposów (szyfrowania i autentykacja tokenem).
:::

![Usługi](/img/en/frontend/services_2.png)


### Wywoływanie usług z curl

:::important
Żeby wywołać API Asystenta domowego z zewnętrznego systemu potrzebujemy token dostępu.
Najpierw z poziomu aplikacji wygenerujmy długoterminowy token dostępu (long-lived access token), który będzie ważny 10 lat.
:::

#### Generowanie tokena dostępu

Przechodzimy w aplikacji na nasz profil, następnie przewijamy na dół strony i wybieramy `UTWÓRZ TOKEN`:

![Tokeny](/img/en/frontend/tokens_1.png)

podajemy nazwę dla tokena:

![Tokeny](/img/en/frontend/tokens_2.png)

kopiujemy token:

![Tokeny](/img/en/frontend/tokens_3.png)

:::caution
Nie ma możliwości ponownego sprawdzenia wartości tokena, dlatego należy go skopiować w bezpieczne miejsce.

Jeżeli chcemy odwołać dostęp do api to usuwamy token.
:::

![Tokeny](/img/en/frontend/tokens_4.png)


#### Metoda GET na zasobie /api/

Sprawdzamy czy /api/ jest dostępne i czy działa nam autentykacja.

```bash
curl -v -H "Authorization: Bearer TOKEN-DOSTĘPU" \
       -H "Content-Type: application/json" http://ais-dom.local:8180/api/
```


Zwraca następującą odpowiedź, jeżeli API działa:

```json
{"message": "API running."}
```


### Metoda POST na /api/services/&lt;domain>/&lt;service>

Komponenty dostępne na bramce udostępniają swoje usługi. Te same usługi komponentu które automatyczne wywołujemy w systemie po wystąpieniu okreśonego zdarzenia można również wywołać z zewnętrznego systemu za pomocą API.


Przykład wywołania usługi czytanie tekstu przez bramkę za pomocą curl:

```bash
curl -X POST -H "Authorization: Bearer TOKEN-DOSTĘPU" \
       -H "Content-Type: application/json" \
       -d '{"text": "Cześć! Jak się masz?"}' \
       http://ais-dom.local:8180/api/services/ais_ai_service/say_it
```
