---
title: "Własny komponent w Asystencie domowym"
sidebar_label: Własny komponent w Asystencie domowym
---

## Cel dodania własnego komponentu

Przeszukałeś 1700 gotowych komponentów i nie znalazłeś możliwości integracji ze swoim urządzeniem? Coś nie do końca działa tak jak byś chciał i masz pomysł jak zrobić to lepiej? Siłą projektów OpenSource jest to, że masz dostęp do kodu i masz możliwość jego zmiany pod własne potrzeby. Nadszedł czas, aby napisać swój pierwszy kod do integracji.

Poniżej opiszemy krok po krok,u w jaki sposób dodać najprostszy komponent do Asystenta domowego.
Bardziej obszerne przykłady integracji są dostępne w <a href="https://github.com/home-assistant/example-custom-config/tree/master/custom_components/" target="_blank">repozytorium przykładowych własnych integracji Home Assistant</a>


## Folder z własnymi komponentami

W konsoli przechodzimy do folderu z konfiguracją Asystenta domowego

```bash
cd ~/AIS
```

dodajemy folder custom_components

```bash
mkdir custom_components
```

następnie w folderze custom_components dodajemy folder dla naszego komponentu, nazwijmy go **hej_dom**


```bash
cd custom_components
mkdir hej_dom
```

przechodzimy do folderu hej_dom i dodajemy 2 pliki:

1. **manifest.json** z opisem naszej integracji

```json
{
  "domain": "hej_dom",
  "name": "Moja integracja",
  "documentation": "https://link-do-dokumentacji.pl",
  "dependencies": [],
  "codeowners": [],
  "requirements": []
}
```

2. **__init__.py** z kodem naszej integracji

```python
DOMAIN = 'hej_dom'

async def async_setup(hass, config):
    hass.states.async_set('hej_dom.info', 'Cześć!')

    # Zwróć True, aby wskazać, że inicjalizacja komponentu powiodłTo jest całkiem proste — wprowadzimy Cię w ten proces krok po kroku.
a się.
    return True
```

### Dodanie naszej integracji do konfiguracji systemu

W konsoli przechodzimy do folderu z konfiguracją Asystenta domowego.

```bash
cd ~/AIS
```

Ulubionym edytorem tekstowym otwieramy plik configuration.yaml

```bash
nano configuration.yaml
```

i dodajemy na końcu następująca konfigurację.

```yaml
hej_dom:
```


### Sprawdzenie konfiguracji i Restart serwera

Upewnijmy się, że nasza konfiguracja jest poprawna — w tym celu kliknij przycisk **Sprawdź konfigurację** dostępny w opcjach ogólnych systemu. Następnie restartujemy serwer przyciskiem **Uruchom ponownie**

![](/img/en/bramka/faq_sensor_4.png)


### Nowa encja w systemie

W informacjach o stanie encji systemu możemy już odszukać nasz nowo dodany element systemu (encja hej_dom) i zobaczyć jego status oraz atrybuty

![](/img/en/bramka/faq_custom_component_1.png)

Oczywiście ten przykład to tylko wprowadzenie w temat, Twój docelowy komponent na pewno będzie bardziej przydatny niż ten z naszego przykładu. Celowo nie dodawaliśmy w kodzie żadnej logiki, żeby nie zaciemniać zagadnienia. Docelowy komponent może sprawdzać kursy walut, wyliczać prawdopodobieństwo wzrostów na giełdzie czy opadów lub zamawiać głosowo piwo — pełna dowolność, my nie osądzamy ;)
Następnie taki nowy komponent możesz w łatwy sposób połączyć z innymi w systemie Asystent domowy za pomocą automatyzacji i gdy np. zapowiadany jest deszcz -> nie włączasz podlewania trawnika lub gdy w kalendarzu masz rocznicę ślubu, to Asystent przypomina Ci o tym głosowo (a z czasem, będzie zamawiał kolację i włączał scenę romantyczną w salonie, itp).


### Dodanie komponentu do wydania Asystenta domowego

Jeżeli dojdziesz do wniosku, że Twój komponent jest tak fajny, że chcesz go udostępnić innym, to preferowana droga by to wykonać to **pull request do Home Assistant**

https://github.com/home-assistant/home-assistant

w ten sposób Twój komponent zostanie sprawdzony i przetestowany przez setki programistów oraz tysiące użytkowników, a następnie trafi oficjalnie do Asystenta domowego wraz w najnowszą wersją Home Assistenta.


### Problemy

Może się zdarzyć, że dodana własna integracja (w tym przykłdzie sterowanie telewizorem) nie przechodzi walidacji i nie działa poprawnie, objawia się to zwykle w ten sposób

![](/img/en/bramka/faq_custom_component_2.png)

oznacza to, że nie udało się Asystentowi domowemu zwalidować i zaimportować komponentu z folderu custom_components. Przyczyną może być błąd w kodzie lub brak na urządzeniu biblioteki, która używana jest w tej integracji.
To, co należy w takim przypadku zrobić, to sprawdzić kod integracji oraz dostępność na urządzeniu bibliotek stosowanych w integracji.

![](/img/en/bramka/faq_custom_component_3.png)

W powyższym przypadku widzimy, że w kodzie importowany jest pakiet wakeonlan, ale nie jest on dostępny na urządzeniu, więc go doinstalowujemy ręcznie.

Następnie wracamy do sprawdzenia konfiguracji, restart serwera i możemy już sterować naszym telewizorem.

![](/img/en/bramka/faq_custom_component_4.png)


Gdy stosujemy własny komponent w logach pojawi się stosowne ostrzeżenie

![](/img/en/bramka/faq_custom_component_5.png)
