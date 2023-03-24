---
title: "Dostęp do bramki z Internetu"
sidebar_label: Wprowadzenie
---


Możesz skonfigurować dostęp do Twojej lokalnej bramki przez Internet. Dzięki temu będziesz mógł sterować automatyką w swoim domu (także głosowo) nie tylko w swojej lokalnej sieci, ale też z dowolnego miejsca z dostępem do Internetu.

Najprostszym ze sposobów na dostęp do bramki z Internetu jest użycie wbudowanego szyfrowanego tunelu. 

Jest to **usługa, którą obecnie oferujemy za darmo dla wszystkich użytkowników bramek: <span class="mdi mdi-dev-to"></span> <span class="mdi mdi-professional-hexagon"></span>**

![Zdalny dostęp kod QR](/img/en/bramka/http_remote_access_qr.png)


## Zalety

Zalety tego rozwiązania:
- brak potrzeby konfiguracji routera
- nie naruszamy ustawień DNS i zapory sieciowej
- nie potrzebujemy publicznego adresu IP

## Jak to działa

Każde urządzenie posiada swój unikalny identyfikator, jest on losowo generowany przy pierwszym uruchomieniu i pozostaje stały przez cały okres użytkowania urządzenia.
Gdy włączysz dostęp z Internetu, uruchamiamy [Tunel Cloudflare](https://www.cloudflare.com/products/tunnel/) pomiędzy Twoim urządzeniem a siecią Cloudflare. Na naszym serwerze paczka.pro tworzymy unikalny (na bazie identyfikatora urządzenia), publicznie dostępny adres URL.
Wszystkie wywołania do naszego serwera adresowane identyfikatorem bramki Cloudflare przekazuje do lokalnie działającego serwera na bramce.


## Bezpieczeństwo

:::caution Uwaga
W celu zachowania większego bezpieczeństwa, gdy dostęp do urządzenia z Internetu jest włączony, automatycznie blokujemy możliwość łatwego logowania do aplikacji (wybór użytkownika bez podawania hasła).

Dodatkowo zalecamy włączenie modułu uwierzytelniania wieloskładnikowego. Więcej informacji w dokumentacji Home Assistant [Multi-factor authentication](https://www.home-assistant.io/docs/authentication/multi-factor-auth/)
:::


## Włączenie dostępu

W celu włączenia tunelowania należy w aplikacji przejść do ustawień zdalnego dostępu do bramki (sekcja dostępna po wybraniu z menu po lewej stronie opcji **Konfiguracja** a następnie pierwszej opcji na liście **Usawienia bramki AIS dom**).


![Konfiguracja bramki](/img/en/bramka/http_remote_access_step_1.png)

następnie wybierz opcję **Zdalny dostęp** i uruchom szyfrowany tunel

![Zdalny dostęp](/img/en/bramka/http_remote_access_step_3.png)   

![Zdalny dostęp](/img/en/bramka/http_remote_access_step_4.png)   


## Unikalny adres URL

Po włączeniu dostępu z Internetu Twoja bramka będzie dostępna pod unikalnym adresem

https://identyfikator-twojej-bramki.paczka.pro


Adres jest dość skomplikowany ale nie musisz go przepisywać - możesz zeskanować kod QR telefonem.


## <span class="mdi mdi-professional-hexagon"></span> Bramka PRO 

Na bramce PRO możemy dodatkowo zaoferować abonament na usługę WireGuard® - szybką i nowoczesną sieć VPN, która wykorzystuje najnowocześniejszą kryptografię: https://www.wireguard.com/

Więcej informacji o usługach i zasadach [Usługi zdalne, zasady](/docs/ais_dom_cloud_services_terms)