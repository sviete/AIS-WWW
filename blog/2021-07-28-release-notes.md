---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Iga
tags: ["ais pro1", "mqtt", "home assistant", "zigbee", "tasmota"]
---

<div class="IntroAisBlogMenu" >

![AIS](/img/en/blog/202107/iga.png)

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


## ![](/img/en/blog/202107/iga.png) Iga



### AIS PRO1

Bramka AIS PRO1 to nie tylko najmocniejszy na rynku procesor ARM i topowe rozwiązania sprzętowe, ale też nasz nowy model biznesowy i pierwsza oferta AIS skierowana do klienta biznesowego.
Jesteśmy w stanie zrobić na tym sprzęcie bardzo dużo, od skompilowania jądra po wszystkie warstwy systemowe z usługami, aplikacjami aż do aplikacji działającej w przeglądarce.


![](/img/en/blog/202107/aispro1.png)


Jeżeli chodzi o układy ARM dostępne na rynku, to z AIS PRO1 może się równać najnowszy ODROID N2+. Dla zobrazowania- tak to wygląda w stosunku do RPi3 czy do najmocniejszej bramki Fibaro HC3 z 4 rdzeniowym układem Arm Cortex A53 (1.2GHz)

![](/img/en/blog/202107/AIS-PRO1-Benchmark.png)

AIS PRO1 może też być łatwą aktualizacją zasobów sprzętowych i kilkukrotnym przyspieszeniem systemu dla naszych obecnych użytkowników. Wiemy, że wielu z Was czekało na bramkę AIS PRO1, dlatego dla Was (obecnych użytkowników bramek AIS) zaoferowaliśmy możliwość zakupu AIS PRO1 bez dodatkowych usług, umów i gwarancji SLA (dodatkowo płatne rzeczy, które oferujemy tylko klientom biznesowym).

Oczywiście każdy może też poczekać i kupić komercyjne, kompleksowe rozwiązanie z gwarancjami, montażem i wszystkim tym, co zaoferują firmy budujące systemy na AIS PRO1.
Można też zostać przy bramce DEV1/2/3 i dalej samemu integrować i budować swój smart home. Za jakiś czas zaoferujemy też opcję AIS Easy (o tym poniżej). 

Mamy nadzieję, że każdy będzie w stanie znaleźć w ten sposób rozwiązanie dopasowane do swoich wymagań i zasobności portfela.


### AI-Speaker.org

To nasza nowa domena https://ai-speaker.org/, która jest hostowana na serwerze Fosshost. Tu przenosimy darmowe usługi z bramek DEV.

Udało nam się zaangażować naszego użytkownika i przyjaciela Adama do administrowania tej domeny. Adam wcześniej rozwiązał nam problem z siecią w innym projekcie. Teraz podjął się administracji serwera Fosshost i już wdrożył tam , czego smami nie potrafiliśmy zrobić. **Serwer z Fosshost będzie zarządzany przez bardzo zdolnego administratora Linuxa z wieloletnim doświadczeniem. Dzięki Adam!**

![](/img/en/blog/202107/ais-org.png)


### Tunel Cloudflare


Ulepszamy nasz zdalny tunel do bramki, od tej wersji zastosowaliśmy rozwiązanie Cloudflare.
Cloudflare to nie tylko udostępnienie bramki w Internecie, ale też ochrona jej przed bezpośrednimi atakami z Internetu. W ten sposób zabezpieczamy **serwer Home Assistant/AIS dom** działający na bramce AIS podczas gdy włączony jest zdalny dostęp. 

![](/img/en/blog/202107/tunel.png)

W kolejnej wersji planujemy dodać jeszcze jeden mechanizm zabezpieczający.

:::info
Wszystkie bramki na wersji beta mają nowy tunel, wg naszych obserwacji jest bardziej stabilnie - zdalny dostęp nie "przycina się" w przypadku pobierania większej ilości danych. Gdyby jednak po aktualizacji komuś przestał działać tunel, to trzeba:

1. Wyłączyć zdalny dostęp w aplikacji, odczekać aż Jolka powie, że wyłączyła.
2. Włączyć ponownie zdalny dostęp w aplikacji i odczekać aż Jolka powie, że włączyła.
3. Poczekać kilka minut aż DNS-y z Cloudflare się rozpropagują.
:::



### Python 3.9.6

Aktualizacja binerek, Python do najnowszej wersji i 24 inne pakiety, w tym własna wersja pakietu command-not-found - nie podpowiadamy już w konsoli używania pkg, ale apt.


![](/img/en/blog/202107/python.png)

Python jest tu istotny, bo to właśnie w tym języku napisana jest platforma do automatyki Home Assistant.


### AIS Fade in

Ulepszyliśmy mechanizm przyciszania i podgłaśniania audio podczas włączania mikrofonu oraz czytania przez Jolkę.
Po wciśnięciu mikrofonu na pilocie oraz podczas startu komunikatu głosowego ściszamy multimedia do 10%, a gdy Jolka skończy mówić, to stopniowo podgłaśniamy odtwarzane media → “Fade in”.

![](https://aws1.discourse-cdn.com/free1/uploads/ai_speaker/optimized/2X/d/decf05916341b345e3be3a5beccb55faaffea4aa_2_690x483.jpeg)

 
### Rozwijalna karta

Dodaliśmy nowy typ karty '''ais-expansion-panel''' która umożliwia zwijanie i rozwijanie elementów interfejsu.

![](/img/en/blog/202107/aisep1.png)

Kartę tą obecnie wykorzystujemy do grupowania odtwarzaczy oraz do dodatkowych opcji związanych z dźwiękiem na bramce PRO.

![](/img/en/blog/202107/aisep2.png)

Na bramce PRO możliwy jest audio routing - przekierowanie audio na wybrane wyjście (jack, spdif, hdmi albo wszystkie)


### Animowana pogoda

Coś miłego dla oka :) animowane ikonki z pogodą:

![](/img/en/blog/202107/pogoda.gif)




### ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt


Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.2.0 Ponad **1540** wspieranych urządzeń.
Daliśmy też poprawkę do działania Conbee2.

Wszystkie szczegóły tu [1.20.0](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.20.0)


### ![](/img/en/blog/202101/hass.png) Asystent domowy 2021.7

 
Najnowsza wersja Asystenta domowego, czyli naszego pakietu ``ais-dom`` bazującego na najnowszym stabilnym Home Assistant Core.

![](/img/en/blog/202107/ha.png)


Opis wszystkich zmian i nowości [2021.7](https://www.home-assistant.io/blog/2021/07/07/release-20217/)


## Zapowiedzi

### Wideodomofon

Już za kilka dni na kanale BETA wydamy nową dużą funkcjonalność - wideodomofon.
To sporo nowego kodu, prace w tym temacie trwały już od jakiegoś czasu... aktualizacja będzie we wszystkich warstwach systemu:
- serwis na bramce
- aplikacja na tablecie
- ustawienia w panelu integratora

Oczywiście wyjaśnimy dokładnie, jak to działa i opiszemy konfigurację. Tak mniej więcej będzie to wyglądało w aplikacji na tablecie:


![](/img/en/blog/202107/vido1.jpg)

![](/img/en/blog/202107/vido2.jpg)



### AIS Easy

To nowy projekt, który realizujemy. Chodzi o to, żeby było użytkownikom łatwiej, a jednocześnie, żeby nie trzeba było opłacać integratora do systemu automatyki domowej.
Wymyśliliśmy jak to zrobić i mamy nadzieję, że spodoba się to wielu użytkownikom.

Projekt będziemy realizować do końca roku, a już za 3-4 tygodnie poprosimy Was o wypełnienie ankiety, żeby bardziej zrozumieć problemy, których rozwiązanie powinniśmy zaoferować.

**Będzie też niespodzianka za wypełnienie ankiety :)**




--------

##### AI-Speaker 07/2021
