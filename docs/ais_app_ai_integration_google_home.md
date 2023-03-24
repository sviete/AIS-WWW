---
title: "AIS Google Home"
sidebar_label: AIS Google Home
---

## Wprowadzenie

AIS Google Home jest to integracja Asystenta domowego z platformą programistyczną dla Asystenta Google.
Integracja działa poprzez oficjalne [Google Assistant SDK](https://developers.google.com/assistant) i pozwala na konwersację z Asystentem Google z poziomu Asystenta domowego. 


![Konfiguracja AIS Google Home](/img/en/bramka/ais_google_home_1.png)


## Integracja


Aby skonfigurować AIS Google Home, przejdź do konfiguracji a następnie do panelu integracji. Naciśnij pomarańczowy przycisk z ikonką "plus" w prawym dolnym rogu ekranu, żeby otworzyć listę dostępnych integracji. Wybierz z listy integrację **AIS Google Home**

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_0.png)


### JSON OAuth2 z Google


Integracja AIS Google Home wymaga konfiguracji projektu w Google oraz rejestracji naszego urządzenia - aby Asystent Google reagował na polecenia odpowiednie dla naszego urządzenia.

Poniżej pokażemy przykładowo jak wykonać rejestracje urządzenia w Google krok po kroku. 

:::caution uwaga
**Integracja po stronie Google**

API do Asystenta Google jest intensywnie rozwijane przez Google, dlatego proces integracji po stronie Google może się zmieniać.
Jeżeli opis poniżej nie jest aktualny to należy postępować zgodnie z najnowszym opisem/przewodnikiem Google dostępnym na stronie [Integrate with the Google Assistant](https://developers.google.com/assistant/sdk/guides/service/python/embed/config-dev-project-and-account). 
:::



1. Zaloguj się do platformy umożliwiającej rozszerzenie funkcjonalności Asystenta Google https://console.actions.google.com/

2. Utwórz nowy projekt 

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_3.png)

aby kontynuować należy zatwierdzić warunki serwisu

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_3_1.png)


3. Podaj nazwę, zmień jezyk projektu na Polski oraz lokalizację na Polska. Następnie naciśnij **Create project**

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_4.png)

4. Wybierz opcję **Device registration** 

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_5.png)

5. Naciśnij **REGISTER MODEL**

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_6.png)

7. Podaj nazwę produktu, producenta oraz wybierz typ urządzenia **Speaker**

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_7.png)

8. Pobierz plik oAuth2.0 i zapisz go na swoim dysku (będzie nam potrzebny w kolejnym kroku)

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_8.png)

9. Zaznacz wszystkie cechy (All traits) i zapisz konfigurację

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_9.png)


### Włączenia API dla Asystenta Google

Kolejnym krokiem, który należy zrobić po stronie Google, jest włączenie API dla Asystenta. W tym celu należy:

1. Przejść w nowej karcie przeglądarki do [Google API](https://console.developers.google.com/apis/api/embeddedassistant.googleapis.com/overview)

aby kontynuować należy zatwierdzić warunki serwisu

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_9_1.png)

2. Włączyć **Google Assistant API** dla naszego projektu

Wybierzmy (upewnijmy się, że mamy wybrany) nasz projekt **AI-Speaker**

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_9_2.png)

wyszukajmy i włączmy **Google Assistant API**  dla projektu

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_10.png)

3. Przejść do **Dane logowania** i wybrać **SKONFIGURUJ EKRAN AKCEPTACJI**

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_11.png)

4. Wypełnić pole **Nazwa aplikacji** oraz wybrać **Adres e-mail pomocy** następnie nacisnąć przycisk **Zapisz** na dole

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_12.png)



### Poświadczenie oAuth2 dla urządzenia

Wracamy do naszego ekranu integracji w Asystencie domowym i w pole **Poświadczenie oAuth2 dla urządzenia** wklejamy całą zawartość pliku **JSON OAuth2** pobranego z Google

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_13.png)

następnie naciskamy **SUBMIT**, by przejść do kolejnego ekranu


Klikamy na **link uwierzytelniający** 
![Konfiguracja Google Home](/img/en/bramka/ais_google_home_14.png)

i logujemy się na konto w Google 

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_15.png)

Pozwalamy AI-Speaker na dostęp

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_16.png)

Skopiuj kod

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_17.png)

Wracamy do aplikacji Asystent domowy i wklejamy go w pole **Kod**

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_18.png)

Otrzymamy nową integrację
![Konfiguracja Google Home](/img/en/bramka/ais_google_home_19.png)


## Działanie Asystenta Google

### Wywołanie Asystenta Google z Asystenta domowego

Żeby komenda była wysyłana bezpośrednio do Assystenta Google wystarczy ją poprzedzić słowem Google 

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_22.png)


### Wywołanie Asystenta Google z API Asystenta domowego

AIS Google Home, podobnie jak inne integracje, udostępnia swoje usługi, dzięki czemu można automatyzować wysyłanie komendy do Asystenta Google z naszej bramki na podstawie statusu naszych urządzeń czy naszej obecności itp.

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_23.png)



## Rozwiązywanie Problemów

:::caution Uwaga
API do tworzenia urządzeń z Asystentem Google jest ciągle rozwijane. Programiści, którzy tworzą integrację z Google Home wiedzą, że nie wszytko jeszcze działa tak jak powinno. **Sprawdź poniższe dodatkowe kroki, jeżeli coś nie działa.**
:::


### Język w Google Home

 Jednym z częstych problemów jest język, w jakim Google Asystent komunikuje się z nami. Żeby był to język polski, to w tej chwili trzeba jeszcze w aplikacji mobilnej Google Home ustawić dwa języki polski i angielski - tak jak to pokazano poniżej:

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_20.png)
![Konfiguracja Google Home](/img/en/bramka/ais_google_home_21.png)


### Informacja typu "Zaloguj się"

Jeżeli otrzymujesz informację typu "Zaloguj się na swoje konto", to upewnij się, że na koncie, które dodałeś do integracji z Google Assistant masz możliwość korzystania z Asystenta Google. W tym celu uruchom Google Assistant na tablecie lub telefonie, wybierz konto, które autoryzowałeś w integracji na bramce z Asystentem domowym i upewnij się, że działa z telefonu.

Dzieje się tak dlatego, że na niektórych kontach (np. firmowych lub dla edukacji) dodanych w Google administrator kont może decydować o włączeniu dostępu do Asystenta Google.

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_24.png)

Jeżeli Asystent Google działa z innych urządzeń (na koncie, które podaliśmy przy integracji z Asystentem domowym), tak jak pokazano na rysunku poniżej:

![Konfiguracja Google Home](/img/en/bramka/ais_google_home_25.png)

to można przejść do wywoływania Asystenta Google z Asystenta domowego.


### Brak odpowiedzi tekstowej

API Google Home nie zapewnia odpowiedzi tekstowej na wszystkie żądania. Asystent Google jest oparty na odpowiedziach audio (czyli do głośnika zwracane jest audio do odtworzenia), a nie tekst do przeczytania przez syntezator mowy (tak jak w przypadku Asystenta domowego).

Wiecej informacji w przykładowym projekcie [Google SDK w Github](https://github.com/googlesamples/assistant-sdk-nodejs/issues/13)
