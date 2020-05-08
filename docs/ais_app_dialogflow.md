---
title: "Dialogflow"
sidebar_label: Dialogflow
---


## Wprowadzenie

Dialogflow to serwis który pozwala na integrację z wieloma popularnymi platformami do przesyłania wiadomości, wirtualnym asystentem i innymi platformami IoT.

![Konfiguracja Dialogflow](/img/en/bramka/dialogflow_1.png)


## Integracja

:::tip
Asystent domowy może uruchamiać usługi na podstawie komunikatów przychodzących z Dialogflow przez HTTPS. Żeby umożliwić odbieranie takich komunikatów należy [włączyć dostęp  do bramki z Internetu](/docs/ais_bramka_remote_www_index).
:::

Aby skonfigurować Dialogflow, przejdź do konfiguracji a następnie do panelu integracji. Naciśnij pomarańczowy przycisk z ikonką "plus" w prawym dolnym rogu ekranu, żeby otworzyć listę dostępnych integracji. Wybierz z listy integrację **AIS Dialogflow**

![Konfiguracja IFTTT](/img/en/bramka/dialogflow_0.png)

### Adres URL do przesyłania zdażeń z Dialogflow

Po wybraniu tej integracji otrzymasz adres URL który należy użyć w konfiguracji ["Dialogflow Webhook"](https://dialogflow.com/docs/fulfillment#webhook) aby wysłać zdarzenia do Asystenta domowego z Dialogflow.

![Konfiguracja Dialogflow](/img/en/bramka/dialogflow_2.png)
