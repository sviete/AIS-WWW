---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.107.8
---

# 0.107.8 Fibaro, Pulpity, Pomocnicy, logi i baza danych

![Serwer](/img/en/blog/202004/fibaro.png)

<!--truncate-->

:::tip Wskazówka
UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important informacja
W razie problemów po aktualizacji sprawdź procedurę [Aktualizacja z konsoli](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step)- to może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

# Konfigurator integracji Fibaro

W tej wersji dodaliśmy graficzny konfigurator do integracji z bramką Fibaro HC.
Całość konfiguracji komunikacji z Fibaro wymaga tylko podania danych dostępu - wypełnienie i zatwierdzenie formatki w aplikacji.

> 🥳 Dziękujemy bardzo naszemu użytkownikowi **Panu Mariuszowi** za zdalne udostępnienie nam bramki na potrzeby dodania tej integracji 🥰

![Fibaro config](/img/en/frontend/fibaro_config.png)

Integracja oparta jest na API, które napisał [Klaudiusz Staniek](https://github.com/kstaniek), a następnie użytkownik [pbalogh77](https://forum.fibaro.com/topic/32395-home-assistant-integrates-fibaro-hclhc2/) dodał do Home Assistant i ogłosił na forum Fibaro.

Cały projekt integracji z Fibaro trwa już kilka lat w Home Assistant. My ze swojej strony dodaliśmy konfigurator, żeby każdy bez potrzeby edycji plików mógł dodać taką integrację i głosowo sterować swoimi urządzeniami Fibaro, tak samo, jak wszystkimi innymi urządzeniami podłączonymi do bramki AIS dom.

> Nie jesteśmy w żaden sposób związani z Fibaro - nie mamy żadnej umowy. Nie posiadamy też sprzętu Fibaro. Dlatego nie dodajemy tej integracji do listy wbudowanych i oficjalnie wspieranych na bramce AIS dom.

Użytkownicy Fibaro mogą dzielić się swoimi doświadczeniami na naszym forum. W tym wątku, wyjaśniamy [jak działa integracja Fibaro - co jest możliwe](https://ai-speaker.discourse.group/t/ais-pytan-kilka-laika/209/10)



# Pulpity nawigacyjne

Możesz tworzyć wiele konfiguracji interfejsu i zapisywać je jako "Pulpity nawigacyjne".

Ta funkcjonalność pozwala na dostosowanie pulpitu do preferencji użytkownika oraz do możliwości urządzenia, na którym pulpit jest prezentowany.

![Pulpit](/img/en/blog/202004/pulpit.png)

Czyli możesz mieć pulpit z głównym układem (automatycznie generowanym), do wyświetlania w przeglądarce na desktopie, pulpit prezentujący wykresy na TV podłączonym do bramki, osobny pulpit dla dzieci, specjalny na tablet, który jest na ścianie, inny na telefonie, osobny z bardziej kolorowym tematem dla żony 🥰 itp.

![Pulpit](/img/en/blog/202004/dashboardy.png)

Więcej w dokumentacji [Pulpity nawigacyjne](/docs/ais_app_dashboards)



# Pomocnicy automatyzacji

Podczas tworzenia zaawansowanych automatyzacji występuje potrzeba użycia dodatkowego pola do zapisu stanu lub wprowadzenia danych. Do tej pory takie pola były definiowane w konfiguracji systemu w plikach 🥺 YAML - teraz jest już łatwiej i można to robić w aplikacji 🥳.
Czyli każdy użytkownik (nie tylko ekspert) może już zarządzać takimi dodatkowymi encjami i to bez restartowania systemu po dodaniu nowego pola. WOW ;)

![Pomocnik automatyzacji](/img/en/bramka/automation_helpers3.png)

W dokumentacji pokazujemy jak to działa na [przykładzie prostego budzika](/docs/ais_bramka_automation_helpers)


![Pomocnik karta](/img/en/bramka/automation_helpers13.png)


# Logi i baza danych

Żeby włączyć logowanie w systemie Asystent domowy, wystarczy wybrać lokalizację na dysku wymiennym, w której będzie zapisywany plik z rejestrem działań w systemie. Dodatkowo można też określić poziom szczegółowości logowania.

Więcej w dokumentacji [Zapis logów systemu do pliku](/docs/ais_bramka_configuration_logs_and_db#zapis-logów-systemu-do-pliku)

![Konfiguracja zapisu logów](/img/en/bramka/bramka_ais_dom_config_logs.png)

Gdy chcemy mieć dostęp do historii zdarzeń w systemie, to możemy zapisywać zdarzenia na zewnętrznym dysku lub w zdalnej bazie danych.
Jak to zrobić wyjaśniamy w dokumentacji [Zapis zdarzeń do bazy danych](/docs/ais_bramka_configuration_logs_and_db#zapis-zdarzeń-do-bazy-danych)

![Konfiguracja zapisu zdarzeń](/img/en/bramka/bramka_ais_dom_config_db.png)

## Home Assistant

Najnowszy (stabilny) Home Assistant <a href="https://www.home-assistant.io/blog/2020/03/18/release-107/" target="_blank">0.107.7</a>

Poza fajnymi rzeczami opisanymi powyżej doszły ułatwienia i ulepszenia w obszarze edytowania interfejsu użytkownika - sprawdźcie sami, my dajemy 👍 👍 👍

----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)
AI-Speaker 04/2020
----
