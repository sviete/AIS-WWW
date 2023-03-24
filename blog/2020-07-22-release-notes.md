---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.112.6
tags: ["location", "demo", "home assistant", "wizard"]
---

# 0.112.6 Location, Location, Location... 

- ![Location](/img/en/blog/202007/gps.png) Raportowanie lokalizacji
- ![Kreator](/img/en/blog/202007/magic-wand.png) Ulepszone kreatory początkowej konfiguracji
- ![Komendy](/img/en/blog/202007/mobile-request.png) Wysyłanie komend do aplikacji mobilnej 
- ![Demo](/img/en/blog/202007/eye.png) DEMO Aplikacji
- ![Home Assistant](/img/en/blog/202007/hass.png) Nowy Home Assistant





<!--truncate-->

:::tip Wskazówka
UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important informacja
W razie problemów po aktualizacji sprawdź procedurę [Aktualizacja z konsoli](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step)- to może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution Ważna informacja o aktualizacji!
 **Po aktualizacji pierwsze uruchomienie może trwać nawet 20 minut.**

 ![wait](/img/en/blog/202007/wait.png) w tym czasie aktualizowane są biblioteki do integracji dodanych na bramce i baza danych jest migrowana do nowego formatu.

 **Poczekaj cierpliwie na zakończenie aktualizacji.**
:::


## ![Location](/img/en/blog/202007/gps.png) Raportowanie lokalizacji

Aktualizacje lokalizacji mogą być wysyłane z różnych urządzeń/aplikacji do Asystenta domowego. Następnie na podstawie lokalizacji osoby (zmiana strefy) mogą być wykonywane automatyzacje.

Żeby ułatwić konfigurację i używanie tej funkcjonalności Asystenta domowego dodaliśmy wysyłanie lokalizacji bezpośrednio z naszej mobilnej aplikacji do bramki AIS dom. 

:::tip Ta funkcjonalność wymaga aplikacji AIS dom w wersji 1.3.0 lub nowszej.
Oczywiście to, czy dane o lokalizacji będą wysyłane zależy od tego, czy przyznasz uprawnienia do sprawdzania lokalizacji dla aplikacji AIS dom i włączysz serwis raportujący lokalizację.
:::

Żeby wysyłać dane o lokalizacji wystarczy:

1. Zaktualizować aplikację mobilną do wersji 1.3.0 lub nowszej
![Location](/img/en/blog/202007/mob_app_version.png)

2. Uruchomić serwis "Raportowanie lokalizacji"
![Location](/img/en/blog/202007/mob_app_location_1.png)

3. Zezwolić aplikacji AIS na dostęp do lokalizacji urządzenia
![Location](/img/en/blog/202007/mob_app_location_2.png)

4. W powiadomieniu AIS pojawi się informacja **GPS** - raportowanie lokalizacji do bramki
![Location](/img/en/blog/202007/mob_app_location_3.png)

W efekcie na mapie w aplikacji webowej dostaniemy informację o lokalizacji naszego telefonu: 
![Location](/img/en/blog/202007/location_in_web_app1.png)

Możemy łatwo kliknąć na bieżącym położeniu i utworzyć strefę z bieżącej lokalizacji:
![Location](/img/en/blog/202007/location_in_web_app2.png)

![Location](/img/en/blog/202007/location_in_web_app3.png)

Gdy już mamy dodane strefy to możemy dodać automatyzacje oparte na strefach. 
Opisujemy to w dokumentacji [Automatyzacje oparte na lokalizacji](/docs/ais_bramka_presence_detection) 


Możemy też dodać kartę mapy do interfejsu
![Location](/img/en/blog/202007/location_in_web_app6.png)

i wyświetlać na niej ścieżkę z zarejsetrowanych lokalizacji:
![Location](/img/en/blog/202007/location_in_web_app5.png)



## ![Kreator](/img/en/blog/202007/magic-wand.png) Ulepszone kreatory początkowej konfiguracji

Poprawiliśmy konfiguratory konfiguracji początkowej - tu też ma być prościej i ładniej ;) 

### W aplikacji webowej:

- dodaliśmy osobny ekran do pobrania konfiguracji z AI-Speaker
![Konto właściciela](/img/en/bramka/onboarding_step_1_1.png)

- bardziej podkreślamy, jeśli krok wymaga połączenia z internetem
![Konto właściciela](/img/en/bramka/onboarding_step_2_0.png)

- w ostanim kroku konfiguracji dodaliśmy informacje o aplikacjach mobilnych
![Konto właściciela](/img/en/blog/202007/wizard_mob_app.png)

Cały proces konfiguracji wstępnej wykonywanej na bramce opisany jest w dokumentacji [Pierwsze uruchomienie](/docs/ais_bramka_first_run_step_account)


### W aplikacji mobilnej:

- dodaliśmy ekran z uprawnieniami do lokalizacji
<img src="/img/en/frontend/ais_dom_new_wizard_1_1_mob_apk.png" alt="AIS Dom"/>

- dodaliśmy możliwość połączenia z naszą bramką DEMO
<img src="/img/en/frontend/ais_dom_new_wizard_3_mob_apk.png" alt="AIS Dom"/>

Cały proces konfiguracji wstępnej wykonywanej w aplikacji mobilnej opisany jest w dokumentacji AIS dom, Konfiguracja za pomocą kreatora


## ![Komendy](/img/en/blog/202007/mobile-request.png) Wysyłanie komend do aplikacji mobilnej 

Na bramce dostępna jest usługa ``ais_ai_service.mob_request``, która umożliwia wysłanie z bramki komendy (zapytania/żądania) do aplikacji mobilnej **AIS dom**.
Dzięki temu za pomocą automatyzacji możemy zdalnie z bramki włączyć mikrofon na urządzeniu mobilnym lub zapytać o aktualną lokalizację urządzenia. 

:::info
**Pomysł pojawił się na forum (dzięki za inspiracje!), spodobała nam się ta funkcjonalność, więc ją dodaliśmy :)**

Docelowo pokażemy na przykładach jak wykorzystać tę funkcjonalność i opiszemy w dokumentacji pełne API.
:::

![Notify](/img/en/blog/202007/mic_on_service.png)


:::warning UWAGA
Można z bramki (do której jesteśmy zalogowani) wysłać komendę do urządzenia mobilnego i zdalnie "zmusić" je do jej wykonania, tylko jeśli włączony jest stosowny dostęp (do mikrofonu i/lub lokalizacji) na urządzeniu mobilnym.

Pokazujemy w powiadomieniu, że taka zdalna komenda jest uruchomiona - żeby było to jasne dla właściciela urządzenia.
:::


## ![Demo](/img/en/blog/202007/eye.png) DEMO Aplikacji


Pracujemy nad dodaniem [DEMO aplikacji Asystent domowy](https://demo.ai-speaker.com/), na którym zaprezentujemy podstawowe możliwości Asystenta domowego.

Celem wersji demo jest zaprezentowanie możliwoście Asystenta domowego oraz możliwość prezentowania przykładowych propozycji rozwiązania zagadnień zgłaszanych do nas.


![DEMO](/img/en/blog/202007/demo.png)




## ![Home Assistant](/img/en/blog/202007/hass.png) Nowy Home Assistant


Najnowszy (stabilny) [Home Assistant 0.112.5](https://www.home-assistant.io/blog/2020/07/01/release-112/)
Jak zwykle fajne nowości i kolejne integracje łatwo dostępne z poziomu aplikacji 🥳

![Home Assistant](/img/en/blog/202007/ha_0.112.png)



----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)
AI-Speaker 07/2020
----
