---
title: S26, inteligentne gniazdo WiFi
sidebar_label: Inteligentne gniazdo WiFi
---

## Opis

1. erase all flash and reset parameters to firmware defaults but keep Wi-Fi settings and restart
Reset 5


2. add new settings
Backlog ssid2 8DB0839D; password2 094FAFE8; SetOption57 1; SetOption3 0; WifiConfig 4

SetOption3 0 - disable MQTT
WifiConfig 4 - disable Wi-Fi config but retry other AP without restart
SetOption57 - Wi-Fi network re-scan every 44 minutes with switch to +10dB stronger signal if detected (only visible networks)

LedPower - LED power state as on or off
0 = turn LED OFF and set LedState 0
1 = turn LED ON and set LedState 0
2 = toggle LED and set LedState 0
(Use Backlog LedPower 0; SetOption31 1 to disable LED even when Wi-Fi or MQTT is not connected)

SetOption31 - Disable status LED blinking during Wi-Fi and MQTT connection problems.LedPower must be set to 0 for this feature to work.
0 = LED blinking enabled (default)
1 = LED blinking disabled
