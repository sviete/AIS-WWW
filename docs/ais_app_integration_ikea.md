---
title: "IKEA Trådfri"
sidebar_label: IKEA Trådfri
---

## Wprowadzenie

Integracja pozwala połączyć bramę IKEA Trådfri z Asystentem domowym. Brama może kontrolować podłączone do niej kompatybilne urządzenia oparte na Zigbee.

![Konfiguracja IKEA](/img/en/bramka/integration_ikea_0.jpg)


## Integracja


Aby skonfigurować Trådfri, przejdź do konfiguracji a następnie do panelu integracji. Naciśnij pomarańczowy przycisk z ikonką "plus" w prawym dolnym rogu ekranu, żeby otworzyć listę dostępnych integracji. Wybierz z listy integrację **IKEA TRADFRI**

![Konfiguracja IKEA](/img/en/bramka/integration_ikea_1.png)


### Konfiguracja

Dodając integrację z bramką IKEA Trådfri należy podać adres IP bramki w sieci oraz kod bezpieczeństwa, który znajduje się na dole bramki.

![Konfiguracja IKEA](/img/en/bramka/integration_ikea_2.png)

W następnym kroku dodajemy urządzenia do pomieszczeń i na tym kończymy konfigurację integracji.

![Konfiguracja IKEA](/img/en/bramka/integration_ikea_3.png)


## Sterowanie z aplikacji

Po dodaniu integracji można sterować głosowo urządzeniami IKEA, sterować nimi z aplikacji oraz używać ich w automatyzacjach tak samo, jak wszystkich innych urządzeń.

<video width="100%" height="100%" playsInline autoPlay muted loop>
  <source src="/video/ikea.webm" type="video/webm" />
</video>


## Sterowanie z API Asystenta domowego

W systemie Asystent domowy, wszystkie typy urządzeń (żarówka, przełącznik, czujnik) mają to samo API niezależnie od producenta danego urządzenia.

![IKEA in APP](/img/en/bramka/integration_ikea_5.png)


## Pakiety - uwaga

Wszystkie pakiety binarne potrzebne do sterowania urządzeniami IKEA dodaliśmy jako domyślne w wersji 0.101 - jeżeli kupiłeś bramkę z tą wersją lub większą nie musisz już nic doinstalowywać.
Jeżeli kipiłeś bramkę z wcześniejszą wersją to przed dodaniem integracji z IKEA Trådfri możesz [wykonać pełny reset](/docs/ais_bramka_reset_ais_step_by_step) do aktualnych domyślnych kodów lub zainstalować 2 pakiety autoconf i libsigsegv ręcznie.
Czyli w [konsoli](/docs/ais_bramka_remote_ssh) uruchamiamy takie polecenie:

```bash
apt install autoconf libsigsegv -y
```

![IKEA API](/img/en/bramka/integration_ikea_6.png)
