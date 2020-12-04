---
title: "AIS Galeria"
sidebar_label: AIS Galeria
---


Jeśli chcesz udostępniać zdjęcia z Asystenta domowego, to możesz to zrobić, dodając je do galerii.
Pliki dodane do galerii można następnie wyświetlić w przeglądarce, przechodząc do odpowiedniego adresu URL.
Dzięki temu możesz zdjęcia z kamer lub pliki graficzne dodane z innych programów używać jako tło kart (np. widok pomieszczenia) w aplikacji Asystent domowy lub wysyłać w powiadomieniach.

![Galeria](/img/en/frontend/gallery_1.png)


:::caution Uwaga
Żeby można było wyświetlać zdjęcia w powiadomieniach, folder z galerią umieszczony jest na "białej liście" (whitelist_external_dirs) w Asystencie domowym. Oznacza to, że znając adres URL zdjęcia, można je wyświetlić bez konieczności logowania do systemu. Dlatego zalecamy nie umieszczać w galerii żadnych prywatnych zdjęć.
:::

## Ręczne dodawanie zdjęć

Zdjęcia można dodawać po wybraniu przycisku plus na stronie z galerią. Zdjęcie można wybrać z dysku, przeciągnąć i upuścić lub dodać bezpośrednio z aparatu telefonu (w przypadku gdy używamy aplikacji z telefonu).

![Galeria](/img/en/frontend/gallery_2.png)

![Galeria](/img/en/frontend/gallery_2.1.png)


## Wyświetlanie zdjęć na karcie

Zdjęcia dodane do galerii przechowywane są na urządzeniu.

:::tip Wskazówka
Zmieniać wygląd aplikacji(dodawać karty) może tylko użytkownik z uprawnieniami administratora.
:::

Żeby zastosować wybrane zdjęcie jako okładkę do karty w aplikacji, wystarczy:

- przejść do galerii i wybrać zdjęcie:
![Galeria](/img/en/frontend/gallery_3.1.png)

- wybrać opcję "DODAJ DO INTERFEJSU UŻYTKOWNIKA"
![Galeria](/img/en/frontend/gallery_3.png)

- wybrać widok
![Galeria](/img/en/frontend/gallery_4.png)

- wybrać opcję "DODAJ DO INTERFEJSU UŻYTKOWNIKA"
![Galeria](/img/en/frontend/gallery_5.png)

W efekcie otrzymamy kartę z wbyranym tłem.
Kartę tą możemy konfigurować tak żeby pokazywała stan naszego urządzenia. Klikając kartę, możemy sterować wybranym urządzeniem (np. włączać podlewanie trawnika).
![Galeria](/img/en/frontend/gallery_6.png)

Więcej o konfiguracji interfejsu użytkownika jest w sekcji [Konfiguracja interfejsu użytkownika](/docs/ais_app_ui_config)


## Wysyłanie zdjęcia w powiadomieniu

Zdjęcia dodane do galerii możemy wysłać w powiadomieniu do aplikacji mobilnej AIS dom.
:::note
Wymagana aplikacja [AIS dom](/docs/ais_app_android_dom) w wersji minimum 1.1.8.Notify
:::

Żeby wysłać zdjęcie w powiadomieniu, wystarczy:

- skopiować jego adres zewnętrzny z galerii
![Galeria](/img/en/frontend/gallery_notify_1.png)

- skopiować unikalny identyfikator aplikacji mobilnej z której łączymy się z bramką i do której chcemy wysłać powiadomienie
![Galeria](/img/en/frontend/gallery_notify_2.png)

- wywołać usługę **ais_ai_service.mob_notify**
![Galeria](/img/en/frontend/gallery_notify_3.png)

W efekcie otrzymamy na telefonie powiadomienie
![Galeria](/img/en/frontend/gallery_notify_4.png)


:::tip Wskazówka
Oczywiście cały proces można zautomatyzować tak, żeby zdjęcie było zapisywane w galerii i powiadomienie było wysłane automatycznie po wystąpieniu zdarzenia w systemie.
:::

## Dodawanie zdjęcia z kamery

Jeżeli mamy zintegrowane kamery wideo to możemy zautomatyzować nagrywanie obrazu z tych kamer (np. po wykryciu ruchu lub po naciśnięciu dzwonka do drzwi).

![Galeria](/img/en/frontend/gallery_7.png)

Tu pokażemy jak ręcznie (bez automatyzacji) wywołać usługę nagrywania do galerii, takie samo wywołanie usługi nagrywania można dodać do automatyzacji.

Jeżeli chcemy zapisać nagranie w galerii, to należy podać pełną ścieżkę do folderu na bramce, w którym znajduje się nasza galeria (ta ścieżka to /data/data/pl.sviete.dom/files/home/AIS/www/img) oraz nazwę naszego nagrania, np.:

**/data/data/pl.sviete.dom/files/home/AIS/www/img/rec1.mp4**

![Galeria](/img/en/frontend/gallery_8.png)



## Dodanie interaktywnego rzutu pomieszczenia

> Opis i funkcjonalność w przygotowaniu

![Galeria](/img/en/frontend/gallery_9.png)
