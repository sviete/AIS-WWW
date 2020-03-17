---
title: "Wykonywanie komendy"
sidebar_label: Wykonywanie komendy
---

Usługa **ais_ai_service.process** pozwala na wykonanie komendy tekstowej na bramce.
Wymagany jest jeden parametr **text**, tekst pytania/komendy. Przykładowe wartości parametru to:
- Włącz radio RMF
- Która godzina
- Jaka jest pogoda
- Włącz światło w kuchni
- Znajdz informacje o NATO


Przykład komedny `curl` wywołującej odtwarzanie muzyki z YouTube:

```bash
$ curl -X POST -H "Authorization: Bearer ABCDEFGH" \
       -H "Content-Type: application/json" \
       -d '{"text": "YouTube Pink Floyd the wall"}' \
       http://ais-dom.local:8180/api/services/ais_ai_service/process
```
