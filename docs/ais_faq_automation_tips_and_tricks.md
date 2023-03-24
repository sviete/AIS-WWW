---
title: "Automatyzacje wskazówki i porady"
sidebar_label: Automatyzacje wskazówki i porady
---

W Asystencie domowym prawie wszystko jest możliwe do skonfigurowania. Niestety nie wszystkie opcje można konfigurować z interfejsu użytkownika, ale pracujemy nad tym.
W tym miejscu podpowiadamy, jak można utworzyć definicję automatyzacji na wybranych przypadkach z życia.


## Jak utworzyć warunek który ma działać tylko w dni robocze od pon do pt?

Zapoznaj się z opisem [wprowadzenie do automatyzacji Asystenta domowego](/docs/ais_bramka_automation), żeby poznać podstawy dodawania automatyzacji w systemie.
Dodaj automatyzację z warunkiem typu czas i odpowiednimi wyzwalaczami oraz akcjami.

![komunikacja MQTT](/img/en/faq/automation_tips_1.png)

Zapoznaj się z dokumentacją Home Assistant na temat definiowania warunków [condition](https://www.home-assistant.io/docs/scripts/conditions/)

Przejdz do [konsoli na urządzeniu](/docs/ais_bramka_remote_ssh)
Edytuj automayzację w pliku **~/AIS/automations.yaml**

![komunikacja MQTT](/img/en/faq/automation_tips_2.png)

Po zapisaniu ręcznych zmian w konfiguracji przejdź do kontroli serwera, by sprawdzić poprawność konfiguracji i przeładować definicję Automatyzacji.

![komunikacja MQTT](/img/en/faq/automation_tips_3.png)
