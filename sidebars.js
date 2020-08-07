module.exports = {
  "System": {
    "Bramka IoT": [
      "ais_bramka_index",
      "ais_bramka_connect",
      "ais_bramka_first_run",
      {
        "type": "category",
        "label": "Początkowa konfiguracja Asystenta domowego",
        "items": [
          "ais_bramka_first_run_step_account",
          "ais_bramka_first_run_step_restore_from_backup",
          "ais_bramka_first_run_step_location",
          "ais_bramka_first_run_step_integration",
          "ais_bramka_first_run_step_mobile"
        ]
      },
      {
        "type": "category",
        "label": "Zarządzanie bramką z poziomu Asystenta domowego",
        "items": [
          "ais_bramka_configuration",
          "ais_bramka_configuration_software",
          "ais_bramka_configuration_wifi",
          "ais_bramka_configuration_screen",
          "ais_bramka_configuration_tts",
          "ais_bramka_configuration_night_mode",
          "ais_bramka_configuration_remote_access",
          "ais_bramka_configuration_logs_and_db",
          "ais_bramka_configuration_restart_stop"
        ]
      },
      {
        "type": "category",
        "label": "Automatyzacje",
        "items": [
          "ais_bramka_automation",
          "ais_bramka_automation_helpers",
          "ais_bramka_presence_detection"
        ]
    },
    ],
    "Dostęp w sieci lokalnej": [
      "ais_bramka_remote_index",
      "ais_bramka_remote_http",
      "ais_bramka_remote_ftp",
      "ais_bramka_remote_ssh",
      "ais_bramka_remote_adb",
      "ais_bramka_mqtt"
    ],
    "Dostęp z Internetu": [
      "ais_bramka_remote_www_index",
      "ais_bramka_remote_dom_others"
    ],
    "Portal Integratora": [
      "ais_dom_cloud_index",
      "ais_dom_cloud_login",
      "ais_dom_cloud_gates",
      "ais_dom_cloud_gate_backup",
      "ais_dom_cloud_content",
      "ais_dom_cloud_services"
    ],
    "Ustawienia zaawansowane": [
      "ais_bramka_services",
      "ais_bramka_settings",
      "ais_bramka_api_index",
      "ais_bramka_api_command",
      "ais_bramka_api_led"
    ],
    "Reset urządzenia do ustawień fabrycznych": [
      "ais_bramka_reset_index"
    ]
  },
  "Aplikacja": {
    "Aplikacja internetowa": [
      "ais_app_index",
      "ais_app_dashboards",
      "ais_app_views",
      "ais_app_cards",
      "ais_app_ui_config"
    ],
    "Aplikacje Android": [
      "ais_app_android_dom",
      "ais_app_android_dom_tablet",
      "ais_app_android_dom_wear",
      "ais_app_android_launcher",
      "ais_app_android_explorer"
    ],
    "Komendy głosowe": [
      "ais_app_assistent_commands",
      "ais_app_assistent_add_command"
    ],
    "Aktualizacja": [
      "ais_bramka_update_index",
      "ais_bramka_update_auto",
      "ais_bramka_update_logs",
      "ais_bramka_update_manual",
      "ais_bramka_update_force"
    ],
    "Pełny reset aplikacji": [
      "ais_bramka_reset_ais_step_by_step"
    ]
  },
  "Integracje": {
    "Wbudowane integracje audio": [
      "ais_app_player",
      "ais_app_radio",
      "ais_app_podcast",
      "ais_app_news",
      "ais_app_youtube_dl",
      "ais_app_spotify",
      "ais_app_drives",
      "ais_app_books"
    ],
    "Wbudowane inne integracje": [
      "ais_app_ai_integration",
      "ais_app_integration_gallery",
      "ais_app_ai_integration_google_home",
      "ais_app_integration_ikea",
      "ais_app_supla",
      "ais_app_tauron",
      "ais_app_owntracks",
      "ais_app_ifttt",
      {
        "type": "category",
        "label": "IFTTT przykłady",
        "items": [
          "ais_app_ifttt_platform_account",
          "ais_app_ifttt_time",
          "ais_app_ifttt_action"
        ]
      },
      "ais_app_dialogflow",
      "ais_app_integration_usb",
      "ais_app_integration_zigbee"
    ],
    "Integracje dodatkowe": [
      "ais_iot_index",
      "ais_iot_add_to_gate"
    ]
  },
  "Urządznia": {
  "Inteligentne gniazdo WiFi": [
      "ais_iot_s26",
      "ais_iot_browser",
      "ais_iot_mqtt",
      "ais_iot_apk"
    ],
  "Pilot radiowy z mikrofonem": [
    "ais_remote_index",
    "ais_remote_modes",
    "ais_remote_mode_on_tv",
    "ais_remote_mode_off_tv",
    "ais_remote_faq_index"
  ],
  "Zigbee USB CC2531": [
    "ais_zigbee_index"
  ],
  "Zarządzanie urządzeniami AIS dom z bramki": [
    "ais_iot_gate",
    "ais_iot_gate_add_device",
    "ais_iot_gate_remove_device",
    "ais_iot_gate_device_rf433"
  ],
    "Oprogramowanie dla urządzeń AIS dom": [
      "ais_iot_firmware_index",
      "ais_iot_firmware_upgrade"
    ]
  }
};
