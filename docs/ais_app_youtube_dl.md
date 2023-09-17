---
title: "YouTube"
sidebar_label: Muzyka z YouTube
---

## YouTube

YouTube to obecnie największy dostępny w Internecie serwis z darmową muzyką. Możemy odtworzyć praktycznie dowolną treść audio, wystarczy powiedzieć ***YouTube nazwa_do_wyszukania***

![AIS News](/img/en/frontend/ais_integration_yt.png)


## Sterowanie pilotem

Wyszukiwanie na YouTube można też uruchamiać za pomocą naszego dedykowanego [Pilota radiowego](/docs/ais_remote_index) (nie jest do tego potrzebna aplikacja z ekranem). Pilotem można wykonać wyszukanie głosowo mówiąc [odpowiednią komendę](/docs/ais_app_assistent_commands), lub za pomocą wirtualnej klawiatury oraz zwrotnego czytania wpisywanych liter.


## Inrofmacje Technicznie

### YouTube API

Na urządzeniu dostarczamy integrację z serwisem YouTube. Używamy oficjalnego i obecnie darmowego [API v3](https://developers.google.com/youtube/v3/getting-started) do wyszukiwania audio w tym serwisie.

### youtube-dl

Wyszukane pozycje w API odtwarzamy za pomocą [youtube-dl](https://github.com/ytdl-org/youtube-dl/), popularnego programu do odtwarzania/pobierania treści audio/video z [setek stron Internetowych](http://ytdl-org.github.io/youtube-dl/supportedsites.html).

:::caution Uwaga
Youtube-dl przez jakiś czas był zablokowany przez Microsoft w serwisie Github z powodu zgłoszenia naruszenia praw autorskich.
Wzbudziło to sporo kontrowersji i wywołało debatę -> czy można prezentować darmowe i publiczne treści dostępne w Internecie w swojej aplikacji?

Zadeklarowaliśmy wtedy na forum AI-Speaker, że jeżeli rzeczywiście używanie Youtube-dl okaże się naruszeniem czyiś praw autorskich, to oczywiście się dostosujemy i usuniemy integrację z naszego systemu.

Ostatecznie jednak repozytorium kodów Youtube-dl zostało odblokowane i Microsoft na blogu wyjaśnił, że skarga była bezpodstawna [Standing up for developers: youtube-dl is back](https://github.blog/2020-11-16-standing-up-for-developers-youtube-dl-is-back/).

**Dbamy o to, żeby wszystkie kody, rozwiązania i integracje AI-Speaker były w 100% legalne. Jeżeli Youtube-dl lub jakikolwiek inny komponent, który używamy, zostanie uznany za naruszający prawa autorskie, to będziemy taki komponent usuwali z systemu.**
:::
