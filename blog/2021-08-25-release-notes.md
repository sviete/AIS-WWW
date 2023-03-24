---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Jarek
tags: ["ais pro1", "mqtt", "home assistant", "zigbee"]
---

<div class="IntroAisBlogMenu" >

![AIS](/img/en/blog/202108/jarek.png)

</div>

<!--truncate-->


## ABC bezproblemowej aktualizacji

:::tip Kopia zapasowa.
### ![A](/img/en/blog/202009/alpha-a-circle.png) Kopia zapasowa.

UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important Konsola i logi na bramce.
### ![B](/img/en/blog/202009/alpha-b-circle.png) Konsola i logi na bramce.

W razie problemów z aktualizacją, sprawdź procedurę [Aktualizacja z konsoli](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step).
To może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution Poczekaj cierpliwie.
### ![C](/img/en/blog/202009/alpha-c-circle.png) Cierpliwość. Aktualizacja i pierwsze uruchomienie po aktualizacji trwa dłużej - poczekaj cierpliwie.

 **Po aktualizacji pierwsze uruchomienie może trwać długo.**
 W tym czasie aktualizowane są biblioteki do integracji dodanych na bramce.
 **Poczekaj cierpliwie na zakończenie aktualizacji.
 Możesz sprawdzić status uruchamiania (dowiedzieć się co robi system) w konsoli komendą ``htop`` i/lub ``pm2 logs``**
:::


## ![](/img/en/blog/202108/jarek.png) Jarek



### PRO cdn.

Jarek to kontynuacja nowego ładu w AIS i rozszerzenie oferty PRO

![](/img/en/blog/202107/aispro1.png)


Sieć to podstawa bezproblemowego działania nowoczesnego systemu automatyki i to właśnie ona może być przyczyną większości problemów. 
Konfiguracja sieci to ogromny i skomplikowany temat, problemy z takimi elementami jak: NAT, Port Forwarding, DHCP, TCP/UDP, Firewall... powodują problemy z działaniem całego systemu. Dlatego postanowiliśmy zaoferować gotowe rozwiązanie dla warstwy sieciowej zaawansowanych instalacji do automatyki domowej. Obecnie rozwiązanie to oferujemy tylko dla klientów biznesowych, z czasem zamierzamy wprowadzić je do szerszej oferty tak, żeby każdy był w stanie kupić gotową, skonfigurowaną i przystosowaną do IoT "sieć do automatyki domowej" z dostępem VPN.
Rozwiązania w warstwie sieciowej są częścią projektu AIS Easy, nad którym pracujemy.


Oferujemy usługę integracji warstwy sieciowej. Kierujemy ją obecnie do integratorów systemów IoT oraz dostawców systemów do automatyki. Więcej o tym w dokumentacji [Infrastruktura sieciowa](/docs/ais_dom_pro_network)

![AIS UISP](/img/en/pro/uisp_map.png)





### Wideodomofon 

Udostępniliśmy SIP serwer, który może działać na bramce:

![AIS UISP](https://aws1.discourse-cdn.com/free1/uploads/ai_speaker/original/2X/1/17ee19773ea2a6eaed8deacbb77b233d8c19287b.png)

Więcej informacji na temat tego projektu na forum [AIS SIP (VoIP) Serwer / Broker na Bramce AIS](https://ai-speaker.discourse.group/t/ais-sip-voip-serwer-broker-na-bramce-ais/1982)


Wbudowaliśmy też klienta SIP w AIS-dom:

![AIS UISP](https://aws1.discourse-cdn.com/free1/uploads/ai_speaker/original/2X/c/c0fb05e10bc4dd334c7bb3fb22475f61d7a63700.jpeg)

Więcej informacji na temat tego projektu na forum [AIS SIP 2 (IP Phone) Klient w aplikacji AIS](https://ai-speaker.discourse.group/t/ais-sip-2-ip-phone-klient-w-aplikacji-ais/2052)


Są to dwa podstawowe komponenty do zbudowania wideodomofonu i są też częścią projektu AIS Easy, nad którym pracujemy.


### Zdalny dostęp do aplikacji działającej na bramce

Aktualizujemy binarkę Tunel Cloudflare do najnowszej wersji [Tunel Cloudflare](https://github.com/cloudflare/cloudflared/releases/tag/2021.8.2)

![](/img/en/blog/202107/tunel.png)

Istotne w tej aktualizacji jest to, że Cloudflare rozwiązało zgłaszany przez nas problem. Poprawka daje nam nowe możliwości wykorzystania tunelu, o czym napiszemy jeszcze.


### AIS Easy

To nowy projekt, który realizujemy. Chodzi o to, żeby użytkownikom było łatwiej i jednocześnie, żeby nie trzeba było opłacać integratora do systemu automatyki domowej.
Wymyśliliśmy, jak to zrobić i mamy nadzieję, że spodoba się to wielu użytkownikom.

Projekt będziemy realizować do końca roku, a już za kilka dni poprosimy Was o wypełnienie ankiety, żeby bardziej zrozumieć problemy, których rozwiązanie powinniśmy zaoferować.
Zdradzę, że za wypełnienie ankiety będą gwarantowane nagrody 🎉 

Będzie też pytanie konkursowe - autor najlepszej odpowiedzi która zdobędzie ❤️ Jolki dostanie główną nagrodę od AIS!

![](/img/en/blog/202108/open_question.jpg)


Po znajomości zdradzimy Wam kilka pytań, żebyście się mogli lepiej przygotować ;)


![](/img/en/blog/202108/ankieta_1.png)

![](/img/en/blog/202108/ankieta_2.png)

![](/img/en/blog/202108/ankieta_3.png)

![](/img/en/blog/202108/ankieta_4.png)



### ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt


Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.21.0 Ponad **1600** wspieranych urządzeń.

Wszystkie szczegóły tu [1.21.0](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.21.0)


### ![](/img/en/blog/202101/hass.png) Asystent domowy 2021.8

 
Najnowsza wersja Asystenta domowego, czyli naszego pakietu ``ais-dom`` bazującego na najnowszym stabilnym Home Assistant Core.

![](/img/en/blog/202108/ha.png)


Opis wszystkich zmian i nowości [2021.8](https://www.home-assistant.io/blog/2021/08/04/release-20218/)

Jest POWER! :)

![](/img/en/blog/202108/power.png)




--------

##### AI-Speaker 08/2021
