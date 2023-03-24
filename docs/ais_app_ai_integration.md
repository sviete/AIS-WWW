---
title: "Integracja Asystentka Jolka"
sidebar_label: Asystentka Jolka
---

## Wbudowany Asystent

System posiada komponent umożliwiający wydawanie komend i przesyłanie zapytań do wbudowanego programu, który zamienia polecenie na intencję, a następnie wykonuje akcję powiązaną z intencją. Program ten nazywamy wbudowanym asystentem.

![ai](/img/en/frontend/jolka-assistant-integration.png)

 Z asystentem możesz rozmawiać:
- przez naciśnięcie mikrofonu w aplikacji webowej (w przeglądarkach obsługujących wprowadzanie głosowe)
- przez mikrofon w telefonie z systemem Android i z zainstalowaną naszą darmową aplikacją dostępną w [Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom)
- przez wywołanie usługi rozmowy z naszego dedykowanego [pilota radiowego](/docs/ais_remote_index) z wbudowanym mikrofonem.
- wpisując komendy tekstowe do asystenta w pole tekstowe w aplikacji.

![ai](/img/en/frontend/ais_integration_ai_1.png)

## Dostępne komendy

Tu jest [lista poleceń](/docs/ais_app_assistent_commands), które asystent rozumie loklanie (bez potrzeby łączenia się z żadnym serwisem zewnętrznym).
Np. gdy pytasz "Jaka jest temperatura w kuchni" asystent "rozumie", że intencją jest sprawdzenie statusu czujnika o nazwie "Temperatura w kuchni".

Gdy asystent nie jest w stanie zrozumieć komendy lokalnie, to stara się uzyskać informację w zewnętrznych serwisach lub wyszukać ją w Internecie.
Udzielając odpowiedzi na pytania typu "kto to jest... ", "kim jest... ", "znajdź informację o..." asystent korzysta z zasobów bazy wiedzy "Google Knowledge Graph". Korzystanie z tego typu bazy wiedzy ma na celu selekcję możliwie najistotniejszych treści i udzielenia krótkiej odpowiedzi na pytanie.
Źródłem informacji do Google Knowledge Graph jest głównie Wikipedia.
Sięgamy też po informacje bezpośrednio z Wikipedii oraz z usług internetowych, w tym serwisów Google.

![ai](/img/en/frontend/ais_integration_ai_2.png)

Jeśli dodasz integrację [Google Home](/docs/ais_app_ai_integration_google_home), to możesz bezpośrednio wysyłać komendy do Asystenta Google, wystarczy, że poprzedzisz komendę słowem "Google", np. "Google, jaka jest pogoda" lub "Google opowiedz jakiś dowcip" itd..



## Automatyzacje uruchamiane komendą

Jeśli poprzedzedzimy nazwę automatyzacji zwrotem "Jolka: [nazwa automatyzacji]". 

Np: "Jolka: podlej trawnik":

![Działanie komend](/img/en/frontend/jolka-assistant-automation.jpeg)

To po wypowiedzeniu komendy [nazwa automatyzacji] asystent zrozumie, że chodzi nam o uruchomienie automatyzacji o tej nazwie.



Dodatkowo każdą zdefiniowaną w systemie automatyzację możemy uruchomić komendą głosową. Wystarczy powiedzieć:

```text
'Jolka {nazwa automatyzacji}'
```
lub 

```text
'Uruchom {nazwa automatyzacji}'
```

lub

```text
'Automatyzacja {nazwa automatyzacji}'
```

w ten sposób można łatwo dodawać głosowe sterowanie praktycznie dowolnym urządzeniem, które mamy zintegrowane w systemie. Przykładowo, gdy chcemy dodać uruchomienie odkurzania głosowo, to wystarczy, że dodamy automatyzację o nazwie np. **Odkurzanie** (lub Start odkurzania), która będzie wywoływała akcję **vacuum.start**. Po zdefiniowaniu takiej akcji wystarczy powiedzieć **"Uruchom odkurzanie"**, by głosowo uruchomić odkurzanie 💪



## Więcej o komendach głosowych

Więcej o wbudowanych komendach: [Wbudowane komendy](ais_app_assistent_commands) i o możliwości definiowania własnych nowych komend: [Dodawanie komendy](ais_app_assistent_add_command).