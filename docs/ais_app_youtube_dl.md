---
title: "YouTube"
sidebar_label: Muzyka z YouTube
---

## YouTube

YouTube to obecnie największy dostępny w Internecie serwis z darmową muzyką. Możemy odtworzyć praktycznie dowolną treść audio, wystarczy powiedzieć ***YouTube {nazwa do wyszukania}***

![AIS News](/img/en/frontend/ais_integration_yt.png)


## Sterowanie pilotem

Wyszukiwanie na YouTube można też uruchamiać za pomocą naszego dedykowanego [Pilota radiowego](/docs/en/next/ais_remote_index.html) (nie jest do tego potrzebna aplikacja z ekranem). Pilotem można wykonać wyszukanie głosowo mówiąc [odpowiednią komendę](/docs/en/ais_app_assistent_commands.html), lub za pomocą wirtualnej klawiatury oraz zwrotnego czytania wpisywanych liter.


## YouTube API

Na urządzeniu dostarczamy integrację z serwisem YouTube. Używamy oficjalnego i darmowego [API v3](https://developers.google.com/youtube/v3/getting-started) do wyszukiwania audio w tym serwisie.

## youtube-dl

Wyszukane pozycje odtwarzamy za pomocą [youtube-dl](https://github.com/ytdl-org/youtube-dl/), popularnego programu do odtwarzania/pobierania treści audio/video z [setek stron Internetowych](http://ytdl-org.github.io/youtube-dl/supportedsites.html).
