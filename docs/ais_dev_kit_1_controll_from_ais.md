---
title: "Sterowanie z AIS"
sidebar_label: Sterowanie z AIS
---

## Opis

Płyta wzmacniacza audio połączona jest z płytą bramki AIS dom szeregowo interfejsem TTL, dzięki czemu możemy sterować wzmacniaczem audio (equalizerem i układem Bluetooth audio) z Asystenta domowego.


## Sterowanie odtwarzaczem z aplikacji


Podłączony w ten sposób głośnik do bramki jest sterowany z poziomu aplikacji:

![|624x301](https://lh4.googleusercontent.com/SgDKRIgFL7uAmm6cJBoGRz-D9B6YOYctD2Lo6jyAL-vHkgjcKf8HGMAXREvxlcurOZi5zatJODrGezH-257j39LIjoJPRVO6eFgVU9jBjvhB5P4Lcz4gcopy5QGvdmwzCcFcGp_B)

Można go też wybrać jako głośnik, na którym chcemy odtwarzać media z biblioteki mediów:

![|624x271](https://lh5.googleusercontent.com/CzJlEQfKaFKfdsANUzk3UhFHxXPeH-yi57YX0tPF8fXNGf_WWPZkJi9F2EsNYZ_j7q196ys5FdEJGBFiuLv4GTfa6F1pF9V2oXgyyf1gROPS6psQ55S8JAjPWNlRxEhpadJkY8NJ)

Komendy głosowe, które odnoszą się do sterowania audio, domyślnie dotyczą głośnika, który jest podłączony do bramki.

![|624x372](https://lh6.googleusercontent.com/LCoyXBIiz9IhySLsVMgvF3_aRo9jx_b8eSG4q0z2a88bTc3TmAdMNa1VcTJRXLZXDhSDaa_kpET8pYR71MBRAOIYtN9zeqTlGRu15fpkKB2_HVHRCK7sSqabiGlD0J4NRGUDsp3t)


## Sterowanie equalizerem z aplikacji


W szczegółach głośnika mamy do wyboru 9 trybów dźwięku, które obsługuje płyta audio

![|624x379](https://lh6.googleusercontent.com/RLITeT3QE9qpkVigdX46d7oQMXOJYFCAkK_zdh_qX72Tvu7nxG7gEJ2wvQks_tMVv2_bw0izaHJNFejrCWqR0WrNnZJyUU0wRxpKmi9m4w6nLYi1o-FYPmLIRNi8xq0cjdpCz4Fx)


## Sterowanie płytą audio z poziomu API w aplikacji

W narzędziach deweloperskich udostępniamy usługi integracji ais_amplifier_service, które służą do komunikacji z płytą audio - umożliwiają przesyłanie komend interfejsem TTL do płyty audio.

![|624x368](https://lh3.googleusercontent.com/Qj6yc_l7UgZSG59Vky7sOCkpv4u0KjlM6lBmzCLawHcC0544-a2oR-Sb6_BJYOA6aPwLhZcBTcoOKwLSGTuvuD-PaD2k4puC3zHYzjveTnhc4E7WRNS-mx3-zIQF9wgttNiIO2id)

Usługa ais_amplifier_service.change_work_mode pozwala na zmianę trybu głośnika, obsługiwane są tryby AUX lub BT:

![|624x299](https://lh6.googleusercontent.com/3PFL8bi-luUbhf_6ay-jAysIHogqlKU8IbdHOYc3LDESNg1rXKk6zOpWjLl6XWhvWE9haIOLuPOOAE-yBmwQfaVXucja5tC2gDFCdRtoe3Ri9XoGujGD4mYZH8ATLZoLHB7RM7gD)

Usługa ais_amplifier_service.exec_command pozwala na przesłanie dowolnej instrukcji sterującej do płyty audio po TTL:

![|624x331](https://lh4.googleusercontent.com/22tYXfNYZKfsl5dtFrQsxAalWysBR-gxgT_KxMxEYvyGVhE_4SpqKMuDgvDSrXALrEhGANDQ04Wx1WI4Ka7ph8ZUUogIZk-zs2Rc1SHBdV749SEdXAT-uvg6X_k99y-9CTs9GcGm)


## Pełna lista komend 

Pełna lista komend dostępna jest w naszym repozytorium na stronie https://github.com/sviete/BK3266

![|624x523](https://lh3.googleusercontent.com/Sq9rvuSQX1fjqvne9khXxe_EHNJaeslIuF-JRkf7lPxypZu6lPbUN5S3DLHSIMT0JtoHyxWR-E_DM9KsMTKBM34senx0PUS9HI6P4JftVv_vYyCYKjzzB3TsHXUWpWWt8qw6Et6a)

Część komend dotyczy obsługi radia FM czy sterowania odtwarzaniem treści audio z karty SD lub pamięci USB wpiętej bezpośrednio do płyty audio - komend/funkcjonalności tych nigdy nie testowaliśmy, bo nie było nam to potrzebne.

Na płycie audio dostępne jest też złącze do mikrofonu. Nie wiadomo jednak czy i jak BK3266 obsługuje funkcjonalność mikrofonu - a to dlatego, że Beken nie zaktualizował swojej witryny internetowej o żadne informacje o chipie BK3266. Nie udało się nam też ustalić w korespondencji z firmą Beken, w jaki sposób można obsługiwać mikrofon software’owo. Dlatego nie dodaliśmy mikrofonu do DEV KIT SPEAKER 1. 
