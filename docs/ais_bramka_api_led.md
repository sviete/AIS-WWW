---
title: "Sterowanie diodą LED"
sidebar_label: Sterowanie diodą LED
---

Usługa **ais_shell_command.led** pozwala na sterowanie diodą led umieszczoną z przodu urządzenia.
Wymagany jest jeden parametr **brightness**, przykładowe wartości parametru to:
- 0 - czerwony,
- 255 - niebieski,
- timer - uruchomienie funkcji mrugania,
- heartbeat - uruchomienie funkcji bicia serca


Przykładowo- żeby dioda pulsowała w rytmie bicia serca wywołujemy usługę ais_shell_command.led z takimi parametrami:

```JSON
{"brightness": "heartbeat"}
```


![Ustawienia sieci](/img/en/frontend/services_led.png)
