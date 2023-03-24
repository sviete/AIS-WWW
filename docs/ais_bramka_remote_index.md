---
title: "Dostęp do bramki w lokalnej sieci"
sidebar_label: Wprowadzenie
---

Będąc w sieci lokalnej możesz połączyć się z bramką za pomocą popularnych narzędzi: http(s), ftp, ssh. Dzięki temu możliwe jest używanie aplikacji bramki w przeglądarce internetowej oraz kontrolowanie bramki jak zdalnego serwera.


:::important informacja
 Żeby połączyć się z bramką kluczowe jest ustalenie, **czy bramka jest widoczna w Twojej sieci po lokalnej nazwie hosta z rozszerzeniem .local, czy tylko po adresie IP?** Lokalna nazwa hosta bramki ustawiona jest fabrycznie jako **ais-dom**. Z taką nazwą  hosta (**ais-dom**) bramka zgłasza się w lokalnej sieci. Następnie bramka rozgłasza swoje usługi (HTTP, FTP, SSH, MQTT) w sieci lokalnej za pomocą mechanizmu Multicast DNS (Zeroconf/Avahi/Bonjour). Jest to tak zwana usługa zero-config – nie wymaga żadnej konfiguracji, aby korzystać z połączenia pomiędzy urządzeniami w sieci lokalnej.
:::

W przypadku systemów firmy Apple, mDNS jest wspierany “fabrycznie” przez usługę Bonjour, w przypadku Linuxa, obsługę zapewnia Avahi, które jest automatycznie zainstalowane we wszystkich popularnych dystrybucjach. Aby otrzymać tę samą funkcjonalność w Windows, musimy sobie zainstalować [Bonjour dla Windows](https://support.apple.com/kb/dl999?locale=pl_PL).

>**We wszystkich przykładach w dokumentacji zakładamy, że bramka jest dostępna pod nazwą hosta ais-dom.local, jeżeli w twojej lokalnej sieci jest inaczej, to łącząc się z bramką za pomocą przykładów z dokumentacji zmień nazwę hosta ais-dom.local na lokalny adres IP**.

## Sprawdzenie adresu IP w aplikacji

W aplikacji "Asystent domowy" wybierz z menu pozycję **Konfiguracja**, nastepnie **Konfiguracja bramki AIS dom**. W sekcji **Sieć WiFi** możesz zobaczyć swój lokalny adres IP.

![Ustawienia sieci](/img/en/bramka/ais_bramka_ip_address.png)

Możesz też wybrać z menu pozycję [Przydatne linki](/docs/ais_bramka_services), by zobaczyć adresy usług w Twojej sieci.


## Zapytanie asystenta o adres IP

O stan każdego komponentu w systemie możesz też zapytać Asystenta, w tym celu wystarczy, że powiesz:

```text
Jaki jest adres IP
```

lub

```text
Jaka jest lokalna nazwa hosta
```
