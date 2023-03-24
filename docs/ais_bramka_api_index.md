---
title: "API systemu"
sidebar_label: API systemu
---


## Wprowadzenie

RESTful API działa na protokole http. Komunikacja poprzez ten protokół odbywa się za pomocą kilku standardowych metod, my wykorzystujemy głównie metodę POST (do wysłania danych) i GET (do pobierania). Webserwisy udostępniane są jako zasoby, do których dostęp możliwy jest poprzez odpowiedni adres URL wywoływany z poziomu protokołu http za pomocą określonej metody.

Na bramce mamy dwa webowe API:

1. **API bramki** (dostęp do natywnych zasobów systemu Android) na porcie 8122
2. **Standardowe webowe API Home Assistant/Asystenta domowego** na tych samych portach, co serwer WWW (80 i 8180 lub w przypadku dostępu z zewnątrz 433)  

:::tip Wskazówka
Interfejsy API akceptują i zwracają tylko obiekty zakodowane w JSON.

W przykładach poniżej używamy lokalnej nazwy hosta bramki: ais-dom.local, jeżeli bramka nie jest dostępna w Twojej sieci pod tą nazwą to zamiast ais-dom.local użyj jej lokalnego adresu IP.
:::
## Lokalne API bramki

Obecnie dostępne są 2 zasoby `http://ais-dom.local:8122/text_to_speech` i `http://ais-dom.local:8122/command`

:::caution Uwaga
**To api dostępne jest tylko w sieci lokalnej, dlatego nie wymagamy uwierzytelnienia i szyfrowania.**

Wywołanie API bramki spoza sieci lokalnej (z Internetu) możliwe jest przez API Asystenta domowego. Takie wywołania wymagają uwierzytelnienia i szyfrowania (protokół https).
Całe lokalne API bramki jest dostępne przez API Asystenta domowego - opisujemy to dokładnie poniżej.
:::

**Tekst JSON MUSI być zakodowany w Unicode. Domyślne kodowanie to UTF-8.**

Znaki inne niż ASCII (np. symbole istniejące w językach świata), przed wysłaniem do api należy skonwertować do ich znaków kodowych w UTF-8. Takie konwertowanie wykonywane jest zwykle automatycznie przez program / klienta REST.


### Zasób /text_to_speech

Ten zasób pozwala nam na wysłanie do bramki metodą POST tekstu do przeczytania:

```
curl -v --header "Content-Type: application/json" \
--request POST  \
--data '{"text":"Witaj Jolka"}' \
http://ais-dom.local:8122/text_to_speech
```

Dostępne parametry TTS

| Parametr | Domyślna wartość | Opis / Dostępne opcje |
| --- | --- | --- |
| `text` | - | Tekst do przeczytania / Dowolny tekst|
| `pitch` | 1.0  | Ton mowy / 1.0 to normalny ton, niższe wartości obniżają ton syntetyzowanego głosu, większe wartości go zwiększają.|
| `rate` |  1.0  | Szybkość mowy / 1.0 to normalna szybkość mowy, niższe wartości spowalniają mowę (0,5 to połowa normalnej szybkości mowy), większe wartości ją przyspieszają (2,0 to dwukrotność normalnej szybkości mowy).|
| `language` | `pl_PL` | Język / Inne dostępne opcje to uk_UA, en_GB, en_US|
| `path` | - | Ścieżka do zapisu pliku w formacie wav|


Dla uproszczenia, zasób **text_to_speech** pozwala też na wywolanie metodą **GET** - czyli wystarczy np. wkleić adres bramki z tekstem do przeczytania do przeglądarki internetowej żeby wywołać API.
W przypadku metody GET należy parametry podać w ciągu zapytania (Query string). Przykłady komunikatów wywoływanych metodą GET:

- informacja o alarmie pożarowym po angielsku

`http://ais-dom.local:8122/text_to_speech?language=en_GB&rate=1&pitch=1&text=Attention. Attention. This is Fire alarm! Evacuation on fire route number five in two minutes`


- informacja o przerwie po ukraińsku

`http://ais-dom.local:8122/text_to_speech?language=uk_UA&rate=1&pitch=1&text=Ми запрошуємо вас на 30-хвилинну перерву на сніданок. Смачного.`


- ogłoszenie po polsku

`http://ais-dom.local:8122/text_to_speech?language=pl_PL&rate=1&pitch=1&text=Mamy więcej zamówień do zrealizowania, prosimy chętnych o pozostanie 2 godziny dłużej w pracy. Płacimy 200% extra.`


Przykład wywołania API z języka Python
``` python
import requests
requests.post('http://ais-dom.local:8122/text_to_speech', json={'text':'cześć'})
```


### Zasób /command

Ten zasób pozwala nam na wysłanie komendy do wykonania. Przykładowa komenda to wysłanie audio do odtwarzania na bramce:

```
curl -v --header "Content-Type: application/json" \
--request POST  \
--data '{"playAudio": "http://stream3.polskieradio.pl:8080/"}' \
http://ais-dom.local:8122/command
```

Dostępne komendy

| Komenda | Przykładowa wartość | Opis |
| --- | --- | --- |
| `playAudio` | `http://stream3.<br/>polskieradio.<br/>pl:8080/` | Odtwarzanie audio/video |
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
| `micOn` | `true` | Włączenie mikrofonu |
| `micOff` | `true` | Wyłączenie mikrofonu |
| `addBookmark` | `true` | Dodanie zakładki do odtwarzanych multimediów, przydatne przy audiobookach |
| `goToActivity` | `ActivityMenu` | Przejście do aktywności (ekranu na bramce). Dostępne opcje to:<ul><li>`ActivityMenu` - "Aktywność menu - sterowanie na monitorze",</li><li>`SplashScreenActivity` - "Sterowanie bez monitora",</li><li>`ExoPlayerActivity` - "Aktywność odtwarzacz multimediów",</li><li>`ConsoleActivity` - "Konsola Asystenta domowego", </li><li>`AndroidSettingsActivity` - "Ustawienia systemu Android",</li><li>`SettingsActivity`  - "Ustawienia Serwisu Asystent domowy na bramce",</li><li>`FilesActivity` - "Aplikacja menedżer plików na bramce",</li><li>`AndroidWifiActivity` - "Ustawienia WiFi w systemie Android",</li><li>`SpotifyActivity` - "Przejście do aplikacji Spotify"</li></ul>  |
| `showCamera` | `{"streamUrl": "rtsp://192.168.2.38/unicast", "haCamId": "camera.domek"}` | Wyświetlanie wideo (obraz i dźwięk) z kamery w aktywności. W parametrze haCamId podajemy identyfikator camery w Asystencie domowym - z tym identyfikatorem zostaną zgłoszone zdarzenia naciśnięcia przycisków (otwieranie drzwi/bramy) w systemie. |



## RESTful API Home Assistant

Asystent Domowy udostępnia serwer WWW na porcie 80 oraz 8180

* http://ais-dom.local:8180/ tu znajduje się aplikacja do kontrolowania systemu
* http://ais-dom.local:8180/api/ tu znajduje się RESTful API


### Wywoływanie/testowanie usług w aplikacji

:::tip Wskazówka
Aby sprawdzić dostępne usługi w aplikacji, z głównego menu przejdź do `Narzędzia deweloperskie` -> `USŁUGI` Z tego miejsca możesz wywoływać/testować dowolne usługi dostępne na bramce.
:::

:::important informacja
Każda usługa ma w aplikacji:
- opis
- wylistowane parametry (parametr, opis i przykładowa wartość parametru)

dlatego nie będziemy szczegółowo opisywać usług w dokumentacji, podamy tu tylko przykładowe wywołania.
:::

W celu wywołania/przetestowania usługi:

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

:::tip Wskazówka
Całe API bramki (opisane szczegółowo powyżej), dostępne jest z poziomu Asystenta domowego za pomocą usługi `ais_ai_service.publish_command_to_frame`.

Dzięki temu możemy wywoływać api na bramce także z zewnątrz, w bezpieczny sposób (szyfrowanie i uwierzytelnienie tokenem).
:::

![Usługi](/img/en/frontend/services_2.png)


### Wywoływanie usług z curl

:::important informacja
Żeby wywołać API Asystenta domowego z zewnętrznego systemu, potrzebujemy token dostępu.
Najpierw z poziomu aplikacji wygenerujmy długoterminowy token dostępu (long-lived access token), który będzie ważny 10 lat.
:::

#### Generowanie tokena dostępu

Przechodzimy w aplikacji na nasz profil, następnie przewijamy na dół strony i wybieramy `UTWÓRZ TOKEN`:

![Tokeny](/img/en/frontend/tokens_1.png)

podajemy nazwę dla tokena:

![Tokeny](/img/en/frontend/tokens_2.png)

kopiujemy token:

![Tokeny](/img/en/frontend/tokens_3.png)

:::caution Uwaga
Nie ma możliwości ponownego sprawdzenia wartości tokena, dlatego należy go skopiować w bezpieczne miejsce.

Jeżeli chcemy odwołać dostęp do api, to usuwamy token.
:::

![Tokeny](/img/en/frontend/tokens_4.png)


#### Metoda GET na zasobie /api/

Sprawdzamy czy /api/ jest dostępne i czy działa nam uwierzytelnianie.

```bash
curl -v -H "Authorization: Bearer TOKEN-DOSTĘPU" \
       -H "Content-Type: application/json" http://ais-dom.local:8180/api/
```


Zwraca następującą odpowiedź, jeżeli API działa:

```json
{"message": "API running."}
```


### Metoda POST na /api/services/&lt;domain>/&lt;service>

Komponenty dostępne na bramce udostępniają swoje usługi. Te same usługi komponentu, które automatycznie wywołujemy w systemie po wystąpieniu okreśonego zdarzenia, można również wywołać z zewnętrznego systemu za pomocą API.


Przykład wywołania usługi czytania tekstu przez bramkę za pomocą curl:

```bash
curl -X POST -H "Authorization: Bearer TOKEN-DOSTĘPU" \
       -H "Content-Type: application/json" \
       -d '{"text": "Cześć! Jak się masz?"}' \
       http://ais-dom.local:8180/api/services/ais_ai_service/say_it
```
