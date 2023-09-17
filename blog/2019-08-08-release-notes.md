---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.96.10 System Wear OS, uproszczenia w aplikacji
---

## Wersja systemu 0.96.10 z dnia 8 sierpnia 2019 roku,

### Wear OS

Nasza <a href="https://play.google.com/store/apps/details?id=pl.sviete.dom" target="_blank">darmowa aplikacja klienta AIS dom</a> (aplikacja, która pozwala na zdalne sterowanie twoją bramką i wysyłanie komend głosowych) została dostosowana do działania na systemie Wear OS.

Dzięki temu możliwe jest włączanie muzyki i sterowanie urządzeniami domowymi za pomocą komend głosowych przesyłanych do bramki z zegarka czy innych urządzeń z systemem Wear OS. Zobaczcie, jak to działa na filmie poniżej :)

<iframe width="560" height="315"  src="https://www.youtube.com/embed/_PY8FsPDQzA" frameBorder="0" allowFullScreen></iframe>

<!--truncate-->

### Tryb zaawansowany w aplikacji webowej

W ramach prac nad wersją 1.0 upraszczamy domyślny interfejs użytkownika aplikacji Asystent domowy. Od wersji 0.96 ukrywamy zaawansowane opcje konfiguracji oraz konsolę dla końcowych użytkowników, tryb zaawansowany oraz konsola dostępne są tylko dla administratorów.


![Menu dla administratora](/img/en/blog/new_menu_for_admins.png)

Oczywiście pierwszy użytkownik jest administratorem i to on, w konfiguracji, może dodawać konta dla innych użytkowników/domowników z określeniem grupy: Administratorzy lub Użytkownicy.

![Grupa użytkownika](/img/en/blog/user_group.png)

### Informacje o zdefiniowanych automatyzacjach i statusie osób

Na pierwszej stronie dodaliśmy kartę z informacją o statusie osób oraz kartę z informacją o zdefiniowanych automatyzacjach.
Informacje te dostępne też są z pilota (bez monitora).

Automatyzacje możemy włączać głosowo nową komendą: "Uruchom + nazwa_automatyzacji" lub "Automatyzacja " + nazwa_ automatyzacji
[Komendy głosowe](/docs/ais_app_assistent_commands#uruchamianie-automatyzacji)


![Osoby i automatyzacje](/img/en/blog/persons_and_automations.png)


### Pozostałe istotne zmiany

- Ulepszony tryb parowania na urządzeniu. Żeby wprowadzić urządzenie w tryb parowania, wystarczy nacisnąć szybko od 3 do 7 razy przycisk na urządzeniu (wcześniej należało nacisnąć dokładnie 4 razy) lub przytrzymać go przez 4 sekundy. Tryb parowania dostępny będzie przez 4 minuty (wcześniej były 3 minuty). Uruchamianie menedżera WiFi (AP na urządzeniu i serwer z aplikacją do ustawiania parametrów WiFi) na kanale 1 (wcześniej był to kanał 13).
- Zapamiętywanie wyboru głosu asystenta, możliwość niezależnego wyboru głosu na bramce (głośniku) i w mobilnej aplikacji kliencie
- Najnowszy Home Assistant <a href="https://www.home-assistant.io/blog/2019/07/17/release-96/" target="_blank">0.96</a>
- Wyszukiwanie integracji w aplikacji. Coraz więcej urządzeń i usług można dodawać za pomocą kreatorów w aplikacji, wybranie integracji do dodania ułatwia nowe pole wyszukiwania.

![Wyszukiwanie integracji](/img/en/blog/search_integration.png)

- Grupa ustawienia sieci dostępna z aplikacji webowej

![Ustawienia sieci](/img/en/blog/network_settings.png)
