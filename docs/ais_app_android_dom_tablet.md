---
title: "AIS dom Panel"
sidebar_label: AIS dom Panel
---


## Wprowadzenie

Dotykowy panel sterowania

Po zainstalowaniu naszej aplikacji AIS dom na tablet z systemem Android możesz otrzymać funkcjonalność "Dotykowego panelu / Smart panel" do sterowania automatyką domową i multimediami.

![Smart glass ustawienia](/img/en/frontend/app_smart_glass_go_to_settings.png)

Funcjonalność panelu sterowania można włączyć w ustawieniach aplikacji:

![Mob](/img/en/frontend/panel_special_functions.png)



## Odtwarzacz audio

### Sterowanie odtwarzaczem na bramce

Można zdalnie sterować odtwarzaczem na bramce z powiadomienia w aplikacji:
![Mob](/img/en/frontend/panel_remote_controll_audio.png)


### Przekierowanie mediów z bramki

W aplikacji AIS dom wbudowany jest odtwarzacz multimediów który można [zintegrować z bramką](ais_app_player#dodatkowe-odtwarzacze-ais),
Dzięki czemu można przesyłać treści multimedialne z bramki do zdalnego klienta (Panelu sterowania):

![Smart glass ustawienia](/img/en/frontend/redirect_media_to_client_gate.png)


![Smart glass ustawienia](/img/en/frontend/redirect_media_to_client.png)


## Wideo dmofon

Na wbudowany odtwarzacz mediów na bramce można przekierować też obraz z kamery oraz nazwę automatyzacji, która ma być wykonana po naciśnięciu przycisku otwarcia drzwi/bramy.

![Mob](/img/en/frontend/video_doorbell.png)


W opisie [API bramki](ais_bramka_api_index#zasób-command), w zasobie ```command``` umieściliśmy opis i składnię komendy ```showCamera``` która realizuje tę funkcjonalność. 
Ta funkcjonalność będzie też docelowo wbudowana i łatwo wywoływana z poziomu aplikacji (bez potrzeby użycia API).

## Powiększenie aplikacji

Ta opcja pozwala dostosować/wyskalować wielkość [aplikacji internetowej Asystent domowy](/docs/ais_app_index) w naszym panelu sterowania.  

![Smart glass ustawienia](/img/en/frontend/zoom_in_panel.png)

Działa to analogicznie jak funkcjonalność powiększania stron w przeglądarce internetowej.

![Smart glass ustawienia](/img/en/frontend/app_smart_glass_go_to_settings_4.png)




## Nasłuchiwanie wyrażenia aktywującego

![Smart glass ustawienia](/img/en/frontend/app_smart_glass_go_to_settings_5.png)

:::caution Uwaga.
Ta opcja jest w fazie eksperymentalnej i może nie działać poprawnie - np. nie wykrywać poprawnie każdego wypowiedzianego słowa kluczowego lub mylić się i wykrywać podobne słowa jako słowa kluczowe.
:::


Jeśli włączysz tę opcję, to uruchomisz w "Panelu sterowania" usługę mikrofonu nasłuchującego wybranego wyrażenia. Jest to tak zwane wyrażenie aktywujące rejestrowanie i przetwarzanie komendy, zwane też "key word" lub "trigger word". Możesz też dostosować czułość nasłuchiwania wyrażenia aktywującego. Do wykrywania wyrażeń aktywujących używamy bardzo dokładnego i lekkiego silnika Porcupine.

>  **Uwaga:** Parametr czułości nasłuchiwania. Wyższa wartość czułości obniża wskaźnik pominięć **ale kosztem wzrostu częstości fałszywych alarmów**. Aby uzyskać więcej informacji dotyczących tego jak to działa warto odwiedzić stronę firmy, która dostarcza to rozwiązanie: https://picovoice.ai/

Zmodyfikowaliśmy zasadę działania Asystenta domowego- w przypadku, gdy komenda pochodzi z urządzenia z włączonym nasłuchiwaniem słowa aktywującego, to staramy się być bardziej dosłownym a "mniej się domyślać" o co chodziło użytkownikowi. Ma to na celu zminimalizowanie wykonywania niepotrzebnych komend w przypadku omyłkowego włączenia nasłuchiwania komendy. Jednak rozwiązanie jest jeszcze na bardzo wczesnym etapie, dlatego zalecamy stosować tę usługę pod kontrolą (i np. wyłączać ją na noc), żeby uniknąć niepotrzebnych wykonań komend i niespodziewanego uruchomienia odtwarzacza audio czy innych domowych urządzeń.



## Sterowanie gestami

Ikona z prawej strony na dolnym pasku aplikacji, pozwala na przełączanie aplikacji w tryb sterowania gestami - by przełączyć w tryb sterowania gestami należy nacisnąć i przytrzymać tę ikonę.

![Sterowanie gestami](/img/en/frontend/remote_gesture_mode.png)


### Definiowanie gestów

Gesty możemy definiować w ustawieniach aplikacji.

Z menu dostępnego w ustawieniach wybieramy opcję "Definiowanie gestów"

![Definiowanie gestów](/img/en/remote/remote_gesture_mode_2.png)


Klikamy przysisk "Dodaj" by przejść do definiowania nowego gestu

![Definiowanie gestów](/img/en/remote/remote_gesture_mode_3.png)


Rysujemy na ekranie gest i zapisujemy go wraz z komendą

![Definiowanie gestów](/img/en/remote/remote_gesture_mode_4.png)




## Komendy wysyłane z bramki do aplikacji klienta 

Na bramce dostępna jest usługa ``ais_ai_service.mob_request``, która umożliwia wysłanie z bramki komendy (zapytania/żądania) do aplikacji kilenta **AIS dom**.
Dzięki temu za pomocą automatyzacji możemy zdalnie z bramki włączyć mikrofon na urządzeniu mobilnym lub zapytać o aktualną lokalizację urządzenia. 

![Notify](/img/en/blog/202007/mic_on_service.png)

:::info
Na przykładach na forum pokazujemy jak wykorzystać tę funkcjonalność, poniżej znajduje się opis serwisów jakie są dostępne.
:::

| komenda   |     dane/parametry      |  opis |
|----------|:-------------:|------|
| micOn | |  Zdalne włączenie mikrofonu na urządzeniu w celu odebrania komendy głosowej |
| locationUpdate | | Wysłania żądania aktualizacji lokalizacji, uruchomienie serwisu lokalizacji na 30 sekund |
| locationServiceOn |  | Zdalne włączenie serwisu lokalizacji na telefonie |
| locationServiceOff |  | Zdalne wyłączenie serwisu lokalizacji na telefonie |
| hotWordServiceOn |  | Zdalne włączenie serwisu nasłuchiwania słowa aktywującego komendę głosową na telefonie |
| hotWordServiceOff |  | Zdalne wyłączenie serwisu nasłuchiwania słowa aktywującego komendę głosową na telefonie |
| audioServiceOn |  | Zdalne włączenie serwisu odtwarzacza audio na telefonie |
| audioServiceOff |  | Zdalne wyłączenie serwisu odtwarzacza audio na telefonie |
| sayIt |  { "text": "Cześć co słychać" }| Przesłanie do telefonu tekstu do powiedzenia |
| playAudio |  { "url": "https://an.cdn.eurozet.pl/ant-kat.mp3" }| Przesłanie do telefonu adresu audio do odtwarzania |
| stopAudio |  | Zdalne zatrzymanie odtwarzania audio na telefonie |
| findPhone |  | Zdalne włączenie wyszukiwania telefonu - telefon zwiększa głośność na 100%, mówi "Tu jestem" i dzwoni |

:::warning UWAGA
Można z bramki (do której jesteśmy zalogowani) wysłać komendę do urządzenia mobilnego i zdalnie "zmusić" je do jej wykonania, tylko jeśli włączony jest stosowny dostęp (do mikrofonu i/lub lokalizacji) na urządzeniu mobilnym.

Pokazujemy w powiadomieniu, że taka zdalna komenda jest uruchomiona - żeby było to jasne dla właściciela urządzenia.
:::

