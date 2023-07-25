---
title: "Własny pakiet do systemu Linux"
sidebar_label: Własny pakiet do systemu Linux
---

## Środowisko Linux-a, które mamy na urządzeniu

Na urządzeniu dostarczamy emulator terminala i zestaw programów działających w konsoli (binarki skompilowane pod architekturę procesora na urządzeniu z uwzględnieniem prefiksu środowiska).
Nasz system współdzieli jądro Linuksa z systemem Android. Dzięki temu mamy multimedia z Androida oraz interfejs tekstowy do shell-a i repozytorium pakietów APT z dodatkowymi binarkami na jednym urządzeniu w tym samym czasie.
Jest to kompletne środowisko Linuxa, ale z jedną główną różnicą w stosunku do tradycyjnych dystrybucji — nasze środowisko jest z prefiksem.
Środowisko z prefiksem (prefixed environment) oznacza, że struktura katalogów jest nieco inna niż w klasycznych dystrybucjach — np. w Ubuntu mamy /bin a w AIS-linux mamy $PREFIX /bin, gdzie $PREFIX w naszym przypadku odnosi się do /data/data/com.termux/files/usr.

![](/img/en/bramka/faq_linux_package_compilation_1.png)


## Kompilacja pakietu

Prefiks robi różnicę w instalacji i kompilacji pakietów. Tworząc naszą dystrybucję wzorowaliśmy się na Termux - którego jesteśmy forkiem.
Kompilacja pakietów jest taka sama jak w Termux https://wiki.termux.com/wiki/Main_Page wykonujemy ją w kontenerze Dokera https://github.com/sviete/AIS-linux-packages, a następnie umieszczamy pakiet w repozytorium https://github.com/sviete/DOM-APT-REPO


### Dodanie skompilowanego pakietu do repozytorimu AIS-linux

Jeżeli chciałbyś, żeby Twoja binarka była dostępna w naszym repozytorium AIS-linux (by mogła być instalowana przy pomocy menadżera pakietów apt), to preferowana droga, to wykonanie **pull request do Termux**

https://github.com/termux/termux-packages

w ten sposób Twój komponent zostanie sprawdzony i przetestowany przez setki programistów oraz tysiące użytkowników, a następnie trafi oficjalnie do Asystenta domowego wraz w najnowszą wersją pakietów z Termux.
