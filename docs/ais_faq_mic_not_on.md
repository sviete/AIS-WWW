---
title: "Czy macie stale włączony mikrofon?"
sidebar_label: Czy macie stale włączony mikrofon?
---

## Czy macie stale włączony mikrofon?

**Nie mamy**, w naszym rozwiązaniu mikrofon musi być fizycznie włączony przez użytkownika przed wydaniem komendy głosowej.  


## Z jakiego mikrofonu można wydawać komendy?


Obecnie po wyjęciu z pudełka, mamy dobrze działające sterownie głosowe "z bliska" (tzw. near field), z jakiego mikrofonu wydawana jest komenda głosowa, nie ma dla nas znaczenia.

Wspieramy kilka możliwości:
- mikrofon w aplikacji webowej 
- mikrofon w telefonie z systemem Android i z zainstalowaną naszą darmową aplikacją dostępną w Google Play
- mikrofon w zegarku z systemem Wear OS i z zainstalowaną naszą darmową aplikacją dostępną w Google Play
- z naszego dedykowanego pilota radiowego z wbudowanym mikrofonem

Gwarantujemy działanie wspomnianych wyżej mikrofonów.
Bardzo możliwe, że zadziała też mikrofon USB, który masz w domu, ale nie możemy tego być pewni. 


## Czemu mikrofon nie jest cały czas włączony?

Stale włączony mikrofon niesie ze sobą kilka problemów, które obecnie nie są jeszcze do końca rozwiązane:

- Kontrowersje związane z prywatnością
Nie da się rozpoznać słowa kluczowego występującego przed komendą bez stałego nagrywania i rozpoznawania (zamiany mowy na tekst) jakie słowa zostały powiedziane.
Łatwo można być posądzonym o podsłuchiwanie rozmów. Te problemy mają obecnie wszyscy dostawcy tego typu rozwiązań.

- Macierz mikrofonów
Nie wystarczy mikrofonu włączyć, trzeba mieć odpowiedni sprzęt (macierz mikrofonów), który będzie w stanie kierunkowo nagrać komendę wydaną z daleka (far field microphone) oraz odfiltrować muzykę i inne "szumy" w pomieszczeniu. Takie rozwiązania są obecnie drogie i nie zawsze działają dobrze.

- Obciążenie procesora
Ciągłe nagrywanie i rozpoznawanie tekstu wiąże się z dodatkowym obciążeniem procesora na urządzeniu (rzędu 30%), a co za tym idzie dodatkowym użyciem prądu.
Chcemy, żeby nasze urządzenie było ECO. Obecnie ciągle włączona bramka zużywa miesięcznie do 2 KWh (złotówkę za prąd miesięcznie).


## Jak dodać sterowanie z daleka i ciągle włączony mikrofon?

Produkt jest otwarty, są publicznie dostępne źródła, jest root, porty USB - nikomu nie zabraniamy dodać sobie takiej funkcjonalności.

Jako mikrofon można próbować zastosować kamerę Sony PlayStation Eye, która ma 4 mikrofony https://en.wikipedia.org/wiki/PlayStation_Eye#Microphone i jest do kupienia za 15 zł w Internecie.

Samo trenowanie wykrywania słowa rozpoczynającego komendę (wake word detection, keyword spotting, trigger word detection, hotword detection) można zrobić gotowym otwartym rozwiązaniem, np. coś takiego jak te projekty:
https://github.com/Picovoice/Porcupine 
https://github.com/MycroftAI/mycroft-precise




