---
title: "Dostęp do bramki z Internetu"
sidebar_label: Wprowadzenie
---


Możesz skonfigurować dostęp do Twojej lokalnej bramki przez Internet. Dzięki temu będziesz mógł sterować automatyką w swoim domu (także głosowo) nie tylko w swojej lokalnej sieci, ale też z dowolnego miejsca z dostępem do Internetu.

Najprostszym ze sposobów na dostęp do bramki z Internetu jest tunelowanie połączenia TCP (**usługa, którą obecnie oferujemy za darmo dla użytkowników bramek**).

![Zdalny dostęp kod QR](/img/en/bramka/http_remote_access_qr.png)

## Zalety

Zalety tego rozwiązania:
- brak potrzeby konfiguracji routera
- nie naruszamy ustawień DNS i zapory sieciowej
- nie potrzebujemy publicznego adresu IP

## Jak to działa

Każde urządzenie posiada swój unikalny identyfikator, jest on losowo generowany przy pierwszym uruchomieniu i pozostaje stały przez cały okres użytkowania urządzenia.
Gdy włączysz dostęp z Internetu, otwieramy połączenie TCP pomiędzy Twoim urządzeniem a naszym serwerem i tworzymy na serwerze unikalny (na bazie identyfikatora urządzenia), publicznie dostępny adres URL.
Adres ten pełni funkcję proxy - wszystkie wywołania do naszego serwera adresowane identyfikatorem bramki przekazujemy do lokalnie działającego serwera na bramce.

Kody źródłowe klienta działającego na urządzeniach są dostępne tu: [dom-tunnel](https://www.npmjs.com/package/dom-tunnel), otwarta licencja MIT.


## Bezpieczeństwo

:::caution
W celu zachowania większego bezpieczeństwa, gdy dostęp do urządzenia z Internetu jest włączony, automatycznie blokujemy możliwość łatwego logowania do aplikacji (wybór użytkownika bez podawania hasła). Dodatkowo zalecamy włączenie modułu uwierzytelniania wieloskładnikowego. Więcej informacji w dokumentacji Home Assistant [Multi-factor authentication](https://www.home-assistant.io/docs/authentication/multi-factor-auth/)
:::


## Włączenie dostępu

W celu włączenia tunelowania należy w aplikacji przejść do ustawień zdalnego dostępu do bramki (sekcja dostępna po wybraniu z menu po lewej stronie opcji **Konfiguracja** a następnie pierwszej opcji na liście **Usawienia bramki AIS dom**).


![Konfiguracja bramki](/img/en/bramka/http_remote_access_step_1.png)

następnie wybierz opcję **Zdalny dostęp**


![Zdalny dostęp](/img/en/bramka/http_remote_access_step_2.png)   

Uruchom szyfrowany tunel

![Zdalny dostęp](/img/en/bramka/http_remote_access_step_3.png)   

![Zdalny dostęp](/img/en/bramka/http_remote_access_step_4.png)   


## Unikalny adres URL

Po włączeniu dostępu z Internetu Twoja bramka będzie dostępna pod unikalnym adresem

https://identyfikator-twojej-bramki.paczka.pro


Adres jest dość skomplikowany ale nie musisz go przepisywać - możesz zeskanować kod QR telefonem.
