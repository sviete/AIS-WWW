module.exports = {
  "System": {
    "Kontrolery": [
      "ais_bramka_index",
      "ais_bramka_pro1",
      "ais_bramka_connect",
      {
        "type": "category",
        "label": "Pierwsze uruchomienie kontrolera",
        "link": {
          "type": "generated-index"
        },
        "collapsed": false,
        "items": [
          "ais_bramka_first_run_the_gate_linux",
          {
            "type": "category",
            "label": "Android",
            "link": {
              "type": "generated-index"
            },
            "collapsed": false,
            "items": [
              "ais_bramka_first_run_the_gate",
              "ais_bramka_first_run",
              {
                "type": "category",
                "label": "Początkowa konfiguracja Asystenta domowego",
                "link": {
                "type": "generated-index"
                },
                "collapsed": false,
                "items": [
                  "ais_bramka_first_run_step_account",
                  "ais_bramka_first_run_step_location",
                  "ais_bramka_first_run_step_integration",
                  "ais_bramka_first_run_step_mobile"
                ]
              },
            ]
          },
        ]
      },
      {
        "type": "category",
        "label": "Automatyzacje na kontrolerze",
        "link": {
          "type": "generated-index"
          },
          "collapsed": false,
        "items": [
          "ais_bramka_automation",
          "ais_bramka_automation_blueprint",
          "ais_bramka_automation_helpers",
          "ais_bramka_key_event_automation",
          "ais_bramka_tag_automation",
          "ais_bramka_calendar_event_automation",
          "ais_bramka_presence_detection"
        ]
    },
    ],


    "Zarządzanie kontrolerem z systemem Android": [
    {
      "type": "category",
      "label": "Dostęp w sieci lokalnej",
      "link": {
        "type": "generated-index"
      },
      "collapsed": false,
      "items": [
          "ais_bramka_remote_index",
          "ais_bramka_remote_http",
          "ais_bramka_remote_ftp",
          "ais_bramka_remote_ssh",
          "ais_bramka_remote_adb",
          "ais_bramka_mqtt"
        ]
    },
    {
      "type": "category",
      "label": "Dostęp z Internetu",
      "link": {
        "type": "generated-index"
      },
      "collapsed": false,
      "items": [
      "ais_bramka_remote_www_index",
      "ais_bramka_remote_dom_others"
     ]
    },
    {
      "type": "category",
      "label": "Portal Integratora",
      "link": {
        "type": "generated-index"
      },
      "collapsed": false,
      "items": [
        "ais_dom_cloud_index",
        "ais_dom_cloud_login",
        "ais_dom_cloud_gates",
        "ais_dom_cloud_gate_backup",
        "ais_dom_cloud_update_chanel",
        "ais_dom_cloud_content",
        "ais_dom_cloud_services",
        "ais_dom_cloud_services_terms"
      ]
    },
    {
      "type": "category",
      "label": "Ustawienia zaawansowane",
      "link": {
        "type": "generated-index"
      },
      "collapsed": false,
      "items": [
      "ais_bramka_services",
      "ais_bramka_settings",
      "ais_bramka_api_index",
      "ais_bramka_api_command",
      "ais_bramka_api_led"
      ],
    },
    {
      "type": "category",
      "label": "Reset urządzenia do ustawień fabrycznych",
      "link": {
        "type": "generated-index"
      },
      "collapsed": false,
      "items": [
      "ais_bramka_reset_index"
      ],
    },
  ],
  "Zarządzanie kontrolerem z systemem Linux": [
    "ais_bramka_linux_info"
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
      "ais_app_android_dom_tablet",
      "ais_app_android_dom_mob",
      "ais_app_android_dom_wear",
      "ais_app_android_launcher",
      "ais_app_android_explorer"
    ],
    "Aplikacje iOS": [
      "ais_app_ios_mob"
    ],
    "Komendy głosowe": [
      "ais_app_assistent_commands",
      "ais_app_assistent_add_command"
    ],
    "Aktualizacja": [
      "ais_bramka_update_index",
      "ais_bramka_update_auto",
      "ais_bramka_update_logs",
      "ais_bramka_update_manual"
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
      "ais_app_youtube_dl",
      "ais_app_spotify",
      "ais_app_drives",
      "ais_app_books",
      "ais_app_add_media",
    ],
    "Wbudowane inne integracje": [
      "ais_app_ai_integration",
      "ais_app_tts",
      "ais_app_android",
      "ais_app_ai_integration_google_home",
      "ais_app_ai_integration_nbp",
      "ais_app_auto_proxy",
      "ais_app_supla",
      "ais_app_integration_manager",
      "ais_app_integration_terminal",
      "ais_app_integration_ftp",
      "ais_app_integration_zigbee",
      "ais_app_integration_zwave",
      "ais_app_integration_usb",
      "ais_app_integration_mqtt"
    ],
    "Integracje dodatkowe": [
      "ais_iot_index",
    ]
  },
  "Urządznia": {
    "AIS Adapter 1": [
      "ais_zigbee_index"
    ],
    "Conbee 2": [
      "zigbee_conbee2"
    ],
    "SLZB-06M": [
      "zigbee_slzb_06m"
    ],
  "Bramka Blutooth LE": [
      "ais_iot_ble"
    ],
  "Pilot radiowy z mikrofonem": [
    "ais_remote_index",
    "ais_remote_modes",
    "ais_remote_mode_on_tv",
    "ais_remote_mode_off_tv",
    "ais_remote_faq_index"
  ],
  "AI-Speaker (DEV KIT1)": [
    "ais_dev_kit_1_index",
    "ais_dev_kit_1_parts",
    "ais_dev_kit_1_instruction",
    "ais_dev_kit_1_controll_from_ais",
    "ais_dev_kit_1_project",
    "ais_dev_kit_1_audio",
    "ais_dev_kit_1_codes",
    "ais_dev_kit_1_files"
  ],
  },
  "Oferta PRO": {
    "AIS PRO": [
    "ais_dom_pro_index",
    "ais_dom_pro_network",
    "ais_dom_pro_protect"
    ]
  }
};
