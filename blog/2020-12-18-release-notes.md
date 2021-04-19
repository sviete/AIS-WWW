---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: AIS 20/21 - podsumowanie i zapowiedzi
tags: ["2020", "2021", "DEV2", "PRO", "EASY", "AI-SPEAKER"]
---

[![AIS DEV2 First run](/img/en/bramka/first_run_video.png)](https://youtu.be/1qSQWAFizCM?cc_load_policy=1)


<div class="IntroAisBlogMenu" >
<a href="#ais-2020"> Podsumowanie roku 2020</a>
<div>

![AIS 2020](/img/en/blog/202012/2020_icon.png)

</div>
</div>


<div class="IntroAisBlogMenu" >
<a href="#ais-2021"> AIS DEV2</a>
<div>

![AIS DEV2](/img/en/blog/202012/dev2_icon.png)

</div>
</div>

<div class="IntroAisBlogMenu" >

<a href="#ais-pro"> AIS PRO</a>
<div>

![AIS PRO](/img/en/blog/202012/pro_icon.png)

</div>
</div>

<div class="IntroAisBlogMenu" >

<a href="#ais-easy"> AIS EASY</a>

<div>

![AIS EASY](/img/en/blog/202012/easy_icon.png)

</div>
</div>

<div class="IntroAisBlogMenu" >
<a href="#ai-speaker"> AI-Speaker</a>
<div>

![AIS](/img/en/blog/202012/speaker_icon.png)

</div>
</div>

<!--truncate-->


## AIS 2020

W 2020 roku  wydaliśmy 17 wersji systemu (18 wydanie w drodze). Uruchomiliśmy forum. Połączyliśmy dokumentację ze stroną projektu. Chyba jako jedni z pierwszych dostrzegliśmy potencjał Zigbee2Mqtt (pewnie dlatego, że jeden z głównych elementów naszej bramki to wbudowany broker MQTT) i to my wprowadziliśmy go do sprzedaży w Polsce. Wytrwale i konsekwentnie dostarczaliśmy na bramki tysiące linijek kodu rozwijając i stabilizując system Asystent domowy :)

2020 to dla nas bardzo udany czas, to rok w którym przekonywaliśmy, że:
- można sterować światłem w domu bez konieczności informowania o każdym włączeniu i wyłączeniu serwisu w chmurze chińskiego producenta przełącznika (i Asystenta Google w USA), bo działanie lokalne jest szybsze i lepsze,
- nie trzeba mieć serwera w garażu do sterowania automatyzacjami w domu,
- da się zintegrować urządzenia różnych producentów i sprowadzić do wspólnego API
- dostęp do usług/API i możliwość zautomatyzowania daje ogromne możliwości sterowania i łączenia elementów w całość bez ryzyka uzależnienia się od jednego dostawcy.

Rozmawialiśmy też z producentami, którzy od dziesiątek lat są na rynku i dzisiaj nie mają jeszcze problemów ze sprzedażą, ale powoli czują, że nadchodzi czas, gdy zwykłe urządzenie to będzie za mało. Bo klienci stali się bardziej wyrafinowani, mają większe zasoby finansowe i potrzeby, szukają czegoś więcej niż włącznik światła, chcą kompleksowych rozwiązań smart dom.

Zauważyliśmy też, że część klientów zaczyna dostrzegać, że producent zamkniętego rozwiązania nie jest w stanie zaspokoić ich potrzeb. Bo nikt w ofercie nie ma wszystkich urządzeń, a to że klimatyzacja działa z aplikacji mobilnej firmy X, oświetlenie firmy Y a ogrzewanie firmy Z... itd. to za mało. Ważne jest, aby urządzenia rozumiały standardowe protokoły IoT i integrowały się z innymi urządzeniami- tylko wtedy można sterować urządzeniami z różnych systemów, definiować sceny i zautomatyzować dom.

Rok 2020 był dla nas ogromnym krokiem na drodze wypracowania kompleksowej oferty dla producentów i końcowego użytkownika. Słuchamy uważnie naszych użytkowników, chętnie podejmujemy też rozmowy z producentami i jesteśmy otwarci na realizowanie projektów. Jednocześnie nie zapominamy o tym, co nas wyróżnia, o naszych wartościach - sterowaniu lokalnym i poszanowaniu prywatności.

![](/img/en/blog/202012/ais_slucham_cie.png)

Dziękujemy, że jesteście z nami. Wiemy, że nie wszystko jest proste i nie wszystko działa tak dobrze jak powinno.
Zapewniamy, że robimy co w naszej mocy, żeby rok 2021 był rokiem, w którym postaramy się odpowiedzieć na kolejne potrzeby, bo **Słuchamy Cię!** Nie mylić z podsłuchujemy Cię ;)



## AIS 2021


### ![](/img/en/blog/202012/dev2_icon.png) AIS DEV2

Wydajemy bramkę DEV2, która ma 2 razy więcej RAM i ROM niż DEV1 no i jest 2 razy mniejsza. Odrobiliśmy lekcje DEV1 i poprawiliśmy sporo rzeczy "pod spodem", dodatkowo cała bramka wg nas jest teraz ładniejsza. Ma też kod QR na plakietce znamionowej- po zeskanowaniu aparatem w telefonie poprowadzi do instalacji naszej aplikacji. Bramka ma też wbudowany tag NFC, dzięki czemu jej uruchomienie jest prostsze.
Nie jest to jakaś rewolucja w stosunku do DEV1, ale ewolucja i zgodność z prawem Moore’a (wymyślonym przez pracownika firmy Intel) - czyli 2 razy więcej w 2 razy mniejszej obudowie co 2 lata.

Nasz system dojrzewa i wersja nie-beta to już kwestia bardziej tygodni niż miesięcy. Chcemy mieć zawsze w ofercie wersję DEV, która będzie konkurencją cenową i funkcjonalną dla RPi i innych rozwiązań DIY. Dlatego nadal jest to DEV z root-em a nie zamknięty produkt.

![DEV2](/img/en/blog/202012/dev2.jpg)


Bardzo szanujemy kreatywnych ludzi, którzy potrafią sami rozwiązywać problemy a nie je stwarzać, bo nie sztuką jest udowadnianie, że coś nie działa, że się nie da... to jest nam w stanie udowodnić 5 letnia Asia - jak jej damy dostęp root do bramki ;)

Sztuką jest dostarczenie bramki IoT za 200zł, którą da się sterować całym mieszkaniem czy biurem.
My udowodniliśmy, że to możliwe. Sami sterujemy oświetleniem, roletami i ogrzewaniem w naszym biurze za pomocą naszej bramki DEV. Dodatkowo bramka odtwarza audio i wykonuje dziesiątki automatyzacji. Nie mamy najmniejszej potrzeby, żeby tą bramkę zastępować czymś innym - jesteśmy dumni z tego rozwiązania :)

DEV2 to parametry porównywalne (w sumie trochę nawet lepsze) z Fibaro HC3, przy 10 krotnie mniejszej cenie.

![DEV2](/img/en/bramka/first_run_4.jpeg)

Na bramce DEV dostarczamy największą na świecie platformę do automatyki domowej Home Assistant, broker MQTT, aplikację Zigbee2Mqtt, lokalny TTS, piękny nowoczesny i konfigurowalny interfejs użytkownika, wbudowany odtwarzacz audio wraz z biblioteką audio, i oczywiście Asystenta głosowego. Do tego dodajemy darmowy zdalny dostęp, aplikację mobilną oraz na zegarek i wbudowane łatwo konfigurowalne integracje AIS.
To wszystko w cenie w jakiej inni oferują jeden przełącznik... ;)

AIS DEV to bramka AIoT o ogromnych możliwościach i najbardziej przystępnej cenie na rynku. To jest bardzo dobry, bezkonkurencyjny produkt w segmencie DIY. I tak już zawsze będzie z naszymi bramkami AIS DEV!


### ![](/img/en/blog/202012/pro_icon.png) AIS PRO

Część naszych użytkowników to zaawansowani technicznie pasjonaci automatyki, którzy niemal codziennie coś integrują. Otrzymujemy też maile od użytkowników, którzy chętnie skorzystaliby z naszego rozwiązania, ale chcieliby żeby na urządzeniu “działało wszystko”. Wszystko czyli: baza danych, rejestracja wideo z kamer, setki urządzeń w kilkupiętrowym domu. To wszystko podłączone po zigbee, wifi, knx itd..
Takich złożonych systemów automatyki nie da się dostarczyć za 200 zł i uczciwie musieliśmy przyznać, że nie mamy rozwiązania dedykowanego do tak zaawansowanych zastosowań.
Użytkownicy takich systemów mogą używać kilku bramek (po jednej na piętro) lub są skazani na mini serwer w garażu i 50 zł rachunku za prąd, który ten serwer zużywa.

Rozumiemy potrzebę posiadania wszystkiego. Już na pierwszych zajęciach z ekonomii studenci dowiadują się, że potrzeby człowieka są nieograniczone. Dla pasjonatów automatyki domowej, którym nie chodzi tylko o to, żeby sterować światłem, ogrzewaniem i bramą, zakup mocnej bramki z ogromną ilością zasobów sprzętowych jest naturalnym wyborem. Sensowność istnienia takiej bramki na rynku pokazuje też ostatnia zapowiedź Home Assistant.

Dlatego w 2021 chcemy zaproponować alternatywę dla mini serwerów z procesorami Intel. Będzie to bramka AIS PRO, z najbardziej wydajnym 6 rdzeniowym procesorem ARM dostępnym na rynku. Bramka, która będzie miała tak mocne parametry, że cały system uruchomi się w kilka sekund a jednocześnie nie będzie się przegrzewał i do pracy na pełnych obrorach wystarczy jej pasywne chłodzenie, dzięki czemu będzie zużywał 1/10 energii, którą zużywa procesor Intel. Bramka AIS PRO to coś więcej niż IoT & Audio. To prawdziwy multimedialny kombajn dla tych, co chcą mieć wszystko! :)

Nad ofertą takiej bramki pracowaliśmy już jakiś czas (finalizujemy umowę z naszym partnerem), Home Assitant trochę nas ubiegł z zapowiedzią. Oczywiście to tylko świadczy o sensowności tej drogi. Ponieważ bramka Home Assistant to serwer bez multimediów i nie ma w nim elementów potrzebnych do projektu inteligentnego głośnika, nasza bramka PRO, która będzie miała całego Home Assistanta, będzie uzupełniała możliwości bramki HA.

![](/img/en/blog/202012/ais_arm.jpeg)

Z tym produktem chcemy trafić do dystrybutorów / instalatorów automatyki, chcemy żeby na tym produkcie nasi partnerzy zarabiali i mogli oferować go końcowym klientom. Oczywiście super wydajne podzespoły i marże dystrybutorów spowodują, że to nie będzie tani produkt, taki jak nasza bramka DEV.
**Zapewniamy, że będzie to bardzo dobra, funkcjonalna i cenowa alternatywa dla mini serwerów PC.**


### ![](/img/en/blog/202012/easy_icon.png) AIS EASY

Zdajemy sobie sprawę, że miarą sukcesu w dzisiejszym świecie nie są najbardziej zaawansowane rozwiązania, ale te najprostsze :)

Proste i tanie produkty realizujące konkretną potrzebę to coś, co zawsze dobrze radzi sobie na rynku - chcemy też dostarczyć łatwe w użyciu produkty... bo skoro sprzedajemy bramkę z asystentem głosowym, to chyba potrafimy też dostarczyć sterowanie rolet czy przełącznik świateł :)

<div class="AisCenterImg">
<img src="/img/en/blog/202012/ais_easy.jpg" alt="AIS Easy" width="200"/>
</div>

Wprowadzimy do oferty produkty, które tak jak nasze inteligentne gniazdko, realizują podstawowe rzeczy w prosty sposób.
Od takich produktów typu sterowanie bramy smartfonem, czy sterowanie światłem albo roletami, zwykle zaczyna się przygodę z automatyką domową.

#### Chcemy, żeby próg wejścia w świat automatyki domowej był w 2021 niższy, dla wszystkich!




### ![](/img/en/blog/202012/speaker_icon.png) AI-Speaker

Inteligentny głośnik, to zdecydowanie najbardziej ambitny produkt, nad którym pracujemy. Połączenie bramki IoT & audio, mikrofonu, w obudowie ze wzmacniaczem i głośnikiem tak, żeby otrzymać aktywny inteligentny głośnik sterujący automatyką i ładnie odtwarzający audio... niestety nie jest takie proste, jak się może wydawać.

Z głośnikiem jest tak, że jesteśmy bliżej niż dalej :) Każda aktualizacja systemu i bramki DEV przybliża nas powoli do celu.

Mamy nadzieję, że uda nam się zaoferować ten produkt w 2021 roku.

Mamy to szczęście, że nie gonią nas terminy, dotacje, inwestorzy, opłaty za serwery w Amazon cloud czy inne zobowiązania, które zmuszałyby nas do szybkiego wypuszczania kolejnych produków (w celu utrzymania poprzenich).  

Dlatego możemy uczciwie zadeklarować, że "zrobimy co w naszej mocy i wydamy jak tylko będzie gotowy" :)


## Życzymy Wszystkim spełniania marzeń w 2021!


----

##### AI-Speaker 12/2020
