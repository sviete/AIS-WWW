---
title: "Dodawanie komendy"
sidebar_label: Dodawanie komendy
---

## Komenda w automatyzacji

Najprostszy sposób na dodanie własnej komendy głosowej to poprzedzenie nazwy automatyzacji zwrotem "Jolka: [własna komenda]". 

Np: "Jolka: podlej trawnik":

![Działanie komend](/img/en/frontend/jolka-assistant-automation.png)


## Odpowiedź asystenta

W zdefiniowanej automatyzacji można dodać szereg akcji, takich jak uruchomienia urządzeń oraz wywołanie usług.
Jedną z takich usług może być głosowa odpowiedź asystenta:

![Akcja](/img/en/frontend/action_say_it.png)


## Dialog

Nazywając automatyzację z prefiksem "Jolka:" możemy zbudować prosty dialog, w którym asystent po głosowej komendzie wykona zadanie; zapyta, czy coś jeszcze i włączy dołączony do bramki mikrofon, żeby przyjąć kolejną komendę:

![Akcja](/img/en/frontend/action_dialog.png)


działanie takiego dialogu

![Akcja](/img/en/frontend/action_dialog_2.png)


## Opcje zaawansowane


**ais_ai_service.say_it**
To usługa zamiany tekstu na mowę - czytanie tekstu przez asystenta.

Usługi można testować/wywoływać z **Narzędzi deweloperskich**

![Test nowej komendy](/img/en/frontend/conversation_dev_service.png)


Możemy dynamicznie przekazywać informację do usługi za pomocą funkcjonalności szablonów  **data_template**. 
Szablony można tworzyć/sprawdzać w **Narzędziach deweloperskich**

![Test nowej komendy](/img/en/frontend/conversation_dev_template.png)


szczegóły w [dokumentacji dla developerów Home Assistant](https://www.home-assistant.io/docs/configuration/templating/)
