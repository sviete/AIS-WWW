---
title: "API systemu"
sidebar_label: API systemu
---


## RESTful API

RESTful API pozwala na interakcję z bramką z innych systemów lub aplikacji.

Asystent Domowy udostępnia serwer WWW na porcie 8123 (https) oraz 8180 (http)

* http://ais-dom.local:8180/ tu znajduje się aplikacja do kontrolowania systemu
* http://ais-dom.local:8180/api/ tu znajduje się RESTful API


> Interfejs API akceptuje i zwraca tylko obiekty zakodowane w JSON.



## Wywoływanie/testowanie usług w apllikacji

> Aby sprawdzić dostępne usługi w aplikacji, z głównego menu przejdź do "Narzędzia deweloperskie" -> z tego miejsca możesz wywoływać/testować dowolne usługi dostępne na bramce.


W celu wywołania usługi:
1. usługę do wywołania wybieramy z listy,
2. podajemy parametry do przekazania w formacie JSON, np.
przykładowy parametr w formacie JSON:
```JSON
{"text": "Cześć, jak się masz?"}
```
3. naciskamy przycisk "CALL SERVICE".

Każda usługa ma:
- a) opis
- b) wylistowane parametry (parametr, opis i przykładowa wartość parametru)

![Ustawienia sieci](/img/en/frontend/services_1.png)



## Wywoływanie usług z curl


### GET /api/


Przykład komedny `curl`:

```bash
$ curl -X GET -H "Authorization: Bearer ABCDEFGH" \
       -H "Content-Type: application/json" http://ais-dom.local:8180/api/
```


Zwraca następującą odpowiedź, jeżeli API działa:

```json
{
  "message": "API running."
}
```


### POST /api/services/&lt;domain>/&lt;service>

Komponenty dostępne na bramce udostępniają swoje usługi. Najczęstszym przypadkiem wywołania usługi komponentu jest automatyczne wywołanie jej w systemie po wystąpieniu okreśonego zdarzenia.
Dodatkowo usługę można również wywołać z zewnętrznego systemu za pomocą API.

Przykład komedny `curl` wywołującej czytanie tekstu przez bramkę:

```bash
$ curl -X POST -H "Authorization: Bearer ABCDEFGH" \
       -H "Content-Type: application/json" \
       -d '{"text": "Cześć! Jak się masz?"}' \
       http://ais-dom.local:8180/api/services/ais_ai_service/say_it
```
