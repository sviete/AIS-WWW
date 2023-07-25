---
title: "Aktualizacja z konsoli"
sidebar_label: Aktualizacja z konsoli
---

## Wprowadzenie

System jest otwarty i obsługuje ponad 2480 komponentów. Wiele z tych komponentów jest automatycznie rozpoznawanych i automatycznie instaluje dodatkowe zależne pakiety.

Poniższa procedura może okazać się przydatna dla osób, które chcą obserwować przebieg procesu aktualizacji oraz dla osób, które mają problem z aktualizacją z aplikacji.

![Aktualizacja](/img/en/bramka/update_from_console.png)

Aktualizacja z konsoli nie jest trudna i sprowadza się oczywiście do tych samych kroków, co w przypadku aktualizacji automatycznej. Te kroki to:

1. Aktualizacja środowiska Linux-a
2. Aktualizacja aplikacji zigbee2mqtt
3. Aktualizacja platformy automatyzacji
4. Aktualizacja aplikacji Android


## Skrypt aktualizacji

### Logowanie do konsoli
Skrypt uruchamiamy tak samo jak komendę w konsoli. Do konsoli bramki możemy zalogować się z innego klienta w sieci lokalnej po [dostęp po SSH](/docs/ais_bramka_remote_ssh) lub bezpośrednio z deweloperskich narzędzi w aplikacji webowej Asystent domowy.

:::tip
Do wykonywania aktualizacji za pomocą skryptu uruchamianego z konsoli, zalecamy zalogowanie się do bramki z natywnego klienta SSH. Dzięki temu będziemy pewni, że unikniemy zerwania połączenia podczas korzystania z konsoli w przeglądarce.
:::

![Aktualizacja](/img/en/bramka/ais_console.png)


## Uruchomienie skryptu aktualizacji w konsoli

Komenda aktualizacyjna zależy od kanału aktualizacyjnego, na którym jesteśmy. Kanał aktualizacyjny dla bramki wybieramy w [Portalu integratora](/docs/ais_dom_cloud_login)

### Oprogramowanie na kanale aktualizacji PROD

Dla kanału **PROD** (stabilnego) komendy, które należy wykonać w konsoli:

```bash
curl -L https://raw.githubusercontent.com/sviete/AIS-utils/master/releases/prod.sh -o prod.sh
chmod +x prod.sh
./prod.sh
```

### Oprogramowanie na kanale aktualizacji BETA

Dla kanału **BETA** komendy, które należy wykonać w konsoli:

```bash
curl -L https://raw.githubusercontent.com/sviete/AIS-utils/master/releases/beta.sh -o beta.sh
chmod +x beta.sh
./beta.sh
```

### Oprogramowanie na kanale aktualizacji ALFA

Dla kanału **ALFA** komendy, które należy wykonać w konsoli:

```bash
curl -L https://raw.githubusercontent.com/sviete/AIS-utils/master/releases/alfa.sh -o alfa.sh
chmod +x alfa.sh
./alfa.sh
```



### Skrypt aktualizujący składowe systemu

Kody skryptów aktualizacji dostępne są w repozytorium github pod adresami:

- PROD -> https://raw.githubusercontent.com/sviete/AIS-utils/master/releases/prod.sh
- BETA -> https://raw.githubusercontent.com/sviete/AIS-utils/master/releases/beta.sh
- ALFA -> https://raw.githubusercontent.com/sviete/AIS-utils/master/releases/alfa.sh

```bash
#!/data/data/com.termux/files/usr/bin/bash
# AIS
# Homepage: https://ai-speaker.com
################################################
# Install ais-dom on PROD chanel
# run it by executiong in AIS dom console:
# curl -L https://raw.githubusercontent.com/sviete/AIS-utils/master/releases/prod.sh -o prod.sh
# chmod +x prod.sh
# ./prod.sh
#
# ...

```

## Niezgodność wersji

:::caution Uwaga
W przypadku bramek, które nie są aktualizowane na bieżąco, może pojawić się niezgodność wersji i aktualizacja zostanie zatrzymana.
:::


Ponieważ system jest złożony i rozwija się bardzo szybko, może się zdarzyć, że podczas aktualizacji nie będziemy w stanie zapewnić łatwej aktualizacji wszystkich składowych na bramce. Bo nie jesteśmy w stanie przetestować aktualizacji z każdej wersji do wersji najnowszej. W celu niedopuszczenia do wystąpienia problemów podczas aktualizacji lub podczas ponownego uruchomienia systemu, będziemy blokowali możliwość aktualizacji starszych wersji bezpośrednio do najnowszej wersji.


![Aktualizacja](/img/en/bramka/update_from_console_to_old.png)

Gdy zobaczysz lub usłyszysz na głośniku taki komunikat jak powyżej, to wykonaj "Pełny reset aplikacji" - przebieg tej procedury opisany jest w dokumentacji [Pełny reset aplikacji](/docs/ais_bramka_reset_ais_step_by_step), znajduje się tam też wideo prezentujące przebieg procesu pełnego resetu.
