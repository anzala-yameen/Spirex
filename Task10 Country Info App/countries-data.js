/**
 * SpireX Foundation - Frontend Web Development Internship
 * Task 10: Country Information App
 * Comprehensive Global Countries Dataset (197 Sovereign Nations)
 * Intern: Anzala Yameen | Intern ID: 140 | Date: September 2026
 */

const COUNTRIES_DATA = [
  {
    "name": "Afghanistan",
    "officialName": "Islamic Republic of Afghanistan",
    "code": "AF",
    "alpha3Code": "AFG",
    "capital": "Kabul",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 38928346,
    "area": 652230,
    "currency": "AFN",
    "currencyName": "Afghan afghani",
    "currencySymbol": "؋",
    "languages": [
      "Pashto",
      "Dari"
    ],
    "flag": "🇦🇫",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/af.svg",
    "callingCode": "+93",
    "borders": [
      "IRN",
      "PAK",
      "TKM",
      "UZB",
      "TJK",
      "CHN"
    ],
    "latlng": [
      33,
      65
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".af"
    ]
  },
  {
    "name": "Albania",
    "officialName": "Republic of Albania",
    "code": "AL",
    "alpha3Code": "ALB",
    "capital": "Tirana",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 2877797,
    "area": 28748,
    "currency": "ALL",
    "currencyName": "Albanian lek",
    "currencySymbol": "L",
    "languages": [
      "Albanian"
    ],
    "flag": "🇦🇱",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/al.svg",
    "callingCode": "+355",
    "borders": [
      "MNE",
      "GRC",
      "MKD",
      "UNK"
    ],
    "latlng": [
      41,
      20
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".al"
    ]
  },
  {
    "name": "Algeria",
    "officialName": "People's Democratic Republic of Algeria",
    "code": "DZ",
    "alpha3Code": "DZA",
    "capital": "Algiers",
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 43851044,
    "area": 2381741,
    "currency": "DZD",
    "currencyName": "Algerian dinar",
    "currencySymbol": "د.ج",
    "languages": [
      "Arabic"
    ],
    "flag": "🇩🇿",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/dz.svg",
    "callingCode": "+213",
    "borders": [
      "TUN",
      "LBY",
      "NER",
      "ESH",
      "MRT",
      "MLI",
      "MAR"
    ],
    "latlng": [
      28,
      3
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".dz",
      "الجزائر."
    ]
  },
  {
    "name": "Andorra",
    "officialName": "Principality of Andorra",
    "code": "AD",
    "alpha3Code": "AND",
    "capital": "Andorra la Vella",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 77265,
    "area": 468,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Catalan"
    ],
    "flag": "🇦🇩",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ad.svg",
    "callingCode": "+376",
    "borders": [
      "FRA",
      "ESP"
    ],
    "latlng": [
      42.5,
      1.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ad"
    ]
  },
  {
    "name": "Angola",
    "officialName": "Republic of Angola",
    "code": "AO",
    "alpha3Code": "AGO",
    "capital": "Luanda",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 32866272,
    "area": 1246700,
    "currency": "AOA",
    "currencyName": "Angolan kwanza",
    "currencySymbol": "Kz",
    "languages": [
      "Portuguese"
    ],
    "flag": "🇦🇴",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ao.svg",
    "callingCode": "+244",
    "borders": [
      "COG",
      "COD",
      "ZMB",
      "NAM"
    ],
    "latlng": [
      -12.5,
      18.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ao"
    ]
  },
  {
    "name": "Antigua and Barbuda",
    "officialName": "Antigua and Barbuda",
    "code": "AG",
    "alpha3Code": "ATG",
    "capital": "Saint John's",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 97929,
    "area": 442,
    "currency": "XCD",
    "currencyName": "Eastern Caribbean dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇦🇬",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ag.svg",
    "callingCode": "+1268",
    "borders": [],
    "latlng": [
      17.05,
      -61.8
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ag"
    ]
  },
  {
    "name": "Argentina",
    "officialName": "Argentine Republic",
    "code": "AR",
    "alpha3Code": "ARG",
    "capital": "Buenos Aires",
    "region": "Americas",
    "subregion": "South America",
    "population": 45195774,
    "area": 2780400,
    "currency": "ARS",
    "currencyName": "Argentine peso",
    "currencySymbol": "$",
    "languages": [
      "Spanish"
    ],
    "flag": "🇦🇷",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ar.svg",
    "callingCode": "+54",
    "borders": [
      "BOL",
      "BRA",
      "CHL",
      "PRY",
      "URY"
    ],
    "latlng": [
      -34,
      -64
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ar"
    ]
  },
  {
    "name": "Armenia",
    "officialName": "Republic of Armenia",
    "code": "AM",
    "alpha3Code": "ARM",
    "capital": "Yerevan",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 2963243,
    "area": 29743,
    "currency": "AMD",
    "currencyName": "Armenian dram",
    "currencySymbol": "֏",
    "languages": [
      "Armenian"
    ],
    "flag": "🇦🇲",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/am.svg",
    "callingCode": "+374",
    "borders": [
      "AZE",
      "GEO",
      "IRN",
      "TUR"
    ],
    "latlng": [
      40,
      45
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".am"
    ]
  },
  {
    "name": "Australia",
    "officialName": "Commonwealth of Australia",
    "code": "AU",
    "alpha3Code": "AUS",
    "capital": "Canberra",
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "population": 25499884,
    "area": 7692024,
    "currency": "AUD",
    "currencyName": "Australian dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇦🇺",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/au.svg",
    "callingCode": "+61",
    "borders": [],
    "latlng": [
      -27,
      133
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".au"
    ]
  },
  {
    "name": "Austria",
    "officialName": "Republic of Austria",
    "code": "AT",
    "alpha3Code": "AUT",
    "capital": "Vienna",
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 9006398,
    "area": 83871,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "German"
    ],
    "flag": "🇦🇹",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/at.svg",
    "callingCode": "+43",
    "borders": [
      "CZE",
      "DEU",
      "HUN",
      "ITA",
      "LIE",
      "SVK",
      "SVN",
      "CHE"
    ],
    "latlng": [
      47.33333333,
      13.33333333
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".at"
    ]
  },
  {
    "name": "Azerbaijan",
    "officialName": "Republic of Azerbaijan",
    "code": "AZ",
    "alpha3Code": "AZE",
    "capital": "Baku",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 10139177,
    "area": 86600,
    "currency": "AZN",
    "currencyName": "Azerbaijani manat",
    "currencySymbol": "₼",
    "languages": [
      "Azerbaijani"
    ],
    "flag": "🇦🇿",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/az.svg",
    "callingCode": "+994",
    "borders": [
      "ARM",
      "GEO",
      "IRN",
      "RUS",
      "TUR"
    ],
    "latlng": [
      40.5,
      47.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".az"
    ]
  },
  {
    "name": "Bahamas",
    "officialName": "Commonwealth of the Bahamas",
    "code": "BS",
    "alpha3Code": "BHS",
    "capital": "Nassau",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 393244,
    "area": 13943,
    "currency": "BSD",
    "currencyName": "Bahamian dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇧🇸",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/bs.svg",
    "callingCode": "+1242",
    "borders": [],
    "latlng": [
      24.25,
      -76
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".bs"
    ]
  },
  {
    "name": "Bahrain",
    "officialName": "Kingdom of Bahrain",
    "code": "BH",
    "alpha3Code": "BHR",
    "capital": "Manama",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 1701575,
    "area": 765,
    "currency": "BHD",
    "currencyName": "Bahraini dinar",
    "currencySymbol": ".د.ب",
    "languages": [
      "Arabic"
    ],
    "flag": "🇧🇭",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/bh.svg",
    "callingCode": "+973",
    "borders": [],
    "latlng": [
      26,
      50.55
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".bh"
    ]
  },
  {
    "name": "Bangladesh",
    "officialName": "People's Republic of Bangladesh",
    "code": "BD",
    "alpha3Code": "BGD",
    "capital": "Dhaka",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 164689383,
    "area": 147570,
    "currency": "BDT",
    "currencyName": "Bangladeshi taka",
    "currencySymbol": "৳",
    "languages": [
      "Bengali"
    ],
    "flag": "🇧🇩",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/bd.svg",
    "callingCode": "+880",
    "borders": [
      "MMR",
      "IND"
    ],
    "latlng": [
      24,
      90
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".bd"
    ]
  },
  {
    "name": "Barbados",
    "officialName": "Barbados",
    "code": "BB",
    "alpha3Code": "BRB",
    "capital": "Bridgetown",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 287375,
    "area": 430,
    "currency": "BBD",
    "currencyName": "Barbadian dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇧🇧",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/bb.svg",
    "callingCode": "+1246",
    "borders": [],
    "latlng": [
      13.16666666,
      -59.53333333
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".bb"
    ]
  },
  {
    "name": "Belarus",
    "officialName": "Republic of Belarus",
    "code": "BY",
    "alpha3Code": "BLR",
    "capital": "Minsk",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 9449323,
    "area": 207600,
    "currency": "BYN",
    "currencyName": "Belarusian ruble",
    "currencySymbol": "Br",
    "languages": [
      "Belarusian",
      "Russian"
    ],
    "flag": "🇧🇾",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/by.svg",
    "callingCode": "+375",
    "borders": [
      "LVA",
      "LTU",
      "POL",
      "RUS",
      "UKR"
    ],
    "latlng": [
      53,
      28
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".by"
    ]
  },
  {
    "name": "Belgium",
    "officialName": "Kingdom of Belgium",
    "code": "BE",
    "alpha3Code": "BEL",
    "capital": "Brussels",
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 11589623,
    "area": 30528,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Dutch",
      "French",
      "German"
    ],
    "flag": "🇧🇪",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/be.svg",
    "callingCode": "+32",
    "borders": [
      "FRA",
      "DEU",
      "LUX",
      "NLD"
    ],
    "latlng": [
      50.83333333,
      4
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".be"
    ]
  },
  {
    "name": "Belize",
    "officialName": "Belize",
    "code": "BZ",
    "alpha3Code": "BLZ",
    "capital": "Belmopan",
    "region": "Americas",
    "subregion": "Central America",
    "population": 397628,
    "area": 22966,
    "currency": "BZD",
    "currencyName": "Belize dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇧🇿",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/bz.svg",
    "callingCode": "+501",
    "borders": [
      "GTM",
      "MEX"
    ],
    "latlng": [
      17.25,
      -88.75
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".bz"
    ]
  },
  {
    "name": "Benin",
    "officialName": "Republic of Benin",
    "code": "BJ",
    "alpha3Code": "BEN",
    "capital": "Porto-Novo",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 12123200,
    "area": 112622,
    "currency": "XOF",
    "currencyName": "West African CFA franc",
    "currencySymbol": "Fr",
    "languages": [
      "French"
    ],
    "flag": "🇧🇯",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/bj.svg",
    "callingCode": "+229",
    "borders": [
      "BFA",
      "NER",
      "NGA",
      "TGO"
    ],
    "latlng": [
      9.5,
      2.25
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".bj"
    ]
  },
  {
    "name": "Bhutan",
    "officialName": "Kingdom of Bhutan",
    "code": "BT",
    "alpha3Code": "BTN",
    "capital": "Thimphu",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 771608,
    "area": 38394,
    "currency": "BTN",
    "currencyName": "Bhutanese ngultrum",
    "currencySymbol": "Nu.",
    "languages": [
      "Dzongkha"
    ],
    "flag": "🇧🇹",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/bt.svg",
    "callingCode": "+975",
    "borders": [
      "CHN",
      "IND"
    ],
    "latlng": [
      27.5,
      90.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".bt"
    ]
  },
  {
    "name": "Bolivia",
    "officialName": "Plurinational State of Bolivia",
    "code": "BO",
    "alpha3Code": "BOL",
    "capital": "Sucre",
    "region": "Americas",
    "subregion": "South America",
    "population": 11673021,
    "area": 1098581,
    "currency": "BOB",
    "currencyName": "Bolivian boliviano",
    "currencySymbol": "Bs.",
    "languages": [
      "Spanish",
      "Quechua",
      "Aymara"
    ],
    "flag": "🇧🇴",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/bo.svg",
    "callingCode": "+591",
    "borders": [
      "ARG",
      "BRA",
      "CHL",
      "PRY",
      "PER"
    ],
    "latlng": [
      -17,
      -65
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".bo"
    ]
  },
  {
    "name": "Bosnia and Herzegovina",
    "officialName": "Bosnia and Herzegovina",
    "code": "BA",
    "alpha3Code": "BIH",
    "capital": "Sarajevo",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 3280819,
    "area": 51209,
    "currency": "BAM",
    "currencyName": "Bosnia and Herzegovina convertible mark",
    "currencySymbol": "KM",
    "languages": [
      "Bosnian",
      "Croatian",
      "Serbian"
    ],
    "flag": "🇧🇦",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ba.svg",
    "callingCode": "+387",
    "borders": [
      "HRV",
      "MNE",
      "SRB"
    ],
    "latlng": [
      44,
      18
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ba"
    ]
  },
  {
    "name": "Botswana",
    "officialName": "Republic of Botswana",
    "code": "BW",
    "alpha3Code": "BWA",
    "capital": "Gaborone",
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 2351627,
    "area": 582000,
    "currency": "BWP",
    "currencyName": "Botswana pula",
    "currencySymbol": "P",
    "languages": [
      "English",
      "Setswana"
    ],
    "flag": "🇧🇼",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/bw.svg",
    "callingCode": "+267",
    "borders": [
      "NAM",
      "ZAF",
      "ZMB",
      "ZWE"
    ],
    "latlng": [
      -22,
      24
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".bw"
    ]
  },
  {
    "name": "Brazil",
    "officialName": "Federative Republic of Brazil",
    "code": "BR",
    "alpha3Code": "BRA",
    "capital": "Brasília",
    "region": "Americas",
    "subregion": "South America",
    "population": 212559417,
    "area": 8515767,
    "currency": "BRL",
    "currencyName": "Brazilian real",
    "currencySymbol": "R$",
    "languages": [
      "Portuguese"
    ],
    "flag": "🇧🇷",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/br.svg",
    "callingCode": "+55",
    "borders": [
      "ARG",
      "BOL",
      "COL",
      "GUF",
      "GUY",
      "PRY",
      "PER",
      "SUR",
      "URY",
      "VEN"
    ],
    "latlng": [
      -10,
      -55
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".br"
    ]
  },
  {
    "name": "Brunei",
    "officialName": "Nation of Brunei, Abode of Peace",
    "code": "BN",
    "alpha3Code": "BRN",
    "capital": "Bandar Seri Begawan",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 437479,
    "area": 5765,
    "currency": "BND",
    "currencyName": "Brunei dollar",
    "currencySymbol": "$",
    "languages": [
      "Malay"
    ],
    "flag": "🇧🇳",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/bn.svg",
    "callingCode": "+673",
    "borders": [
      "MYS"
    ],
    "latlng": [
      4.5,
      114.66666666
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".bn"
    ]
  },
  {
    "name": "Bulgaria",
    "officialName": "Republic of Bulgaria",
    "code": "BG",
    "alpha3Code": "BGR",
    "capital": "Sofia",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 6948445,
    "area": 110879,
    "currency": "BGN",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Bulgarian"
    ],
    "flag": "🇧🇬",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/bg.svg",
    "callingCode": "+359",
    "borders": [
      "GRC",
      "MKD",
      "ROU",
      "SRB",
      "TUR"
    ],
    "latlng": [
      43,
      25
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".bg"
    ]
  },
  {
    "name": "Burkina Faso",
    "officialName": "Burkina Faso",
    "code": "BF",
    "alpha3Code": "BFA",
    "capital": "Ouagadougou",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 20903273,
    "area": 272967,
    "currency": "XOF",
    "currencyName": "West African CFA franc",
    "currencySymbol": "Fr",
    "languages": [
      "French"
    ],
    "flag": "🇧🇫",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/bf.svg",
    "callingCode": "+226",
    "borders": [
      "BEN",
      "CIV",
      "GHA",
      "MLI",
      "NER",
      "TGO"
    ],
    "latlng": [
      13,
      -2
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".bf"
    ]
  },
  {
    "name": "Burundi",
    "officialName": "Republic of Burundi",
    "code": "BI",
    "alpha3Code": "BDI",
    "capital": "Gitega",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 11890784,
    "area": 27834,
    "currency": "BIF",
    "currencyName": "Burundian franc",
    "currencySymbol": "Fr",
    "languages": [
      "Kirundi",
      "French"
    ],
    "flag": "🇧🇮",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/bi.svg",
    "callingCode": "+257",
    "borders": [
      "COD",
      "RWA",
      "TZA"
    ],
    "latlng": [
      -3.5,
      30
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".bi"
    ]
  },
  {
    "name": "Cabo Verde",
    "officialName": "Republic of Cabo Verde",
    "code": "CV",
    "alpha3Code": "CPV",
    "capital": "Praia",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 555987,
    "area": 4033,
    "currency": "CVE",
    "currencyName": "Cape Verdean escudo",
    "currencySymbol": "Esc",
    "languages": [
      "Portuguese"
    ],
    "flag": "🇨🇻",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/cv.svg",
    "callingCode": "+238",
    "borders": [],
    "latlng": [
      16,
      -24
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".cv"
    ]
  },
  {
    "name": "Cambodia",
    "officialName": "Kingdom of Cambodia",
    "code": "KH",
    "alpha3Code": "KHM",
    "capital": "Phnom Penh",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 16718965,
    "area": 181035,
    "currency": "KHR",
    "currencyName": "Cambodian riel",
    "currencySymbol": "៛",
    "languages": [
      "Khmer"
    ],
    "flag": "🇰🇭",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/kh.svg",
    "callingCode": "+855",
    "borders": [
      "LAO",
      "THA",
      "VNM"
    ],
    "latlng": [
      13,
      105
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".kh"
    ]
  },
  {
    "name": "Cameroon",
    "officialName": "Republic of Cameroon",
    "code": "CM",
    "alpha3Code": "CMR",
    "capital": "Yaoundé",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 26545863,
    "area": 475442,
    "currency": "XAF",
    "currencyName": "Central African CFA franc",
    "currencySymbol": "Fr",
    "languages": [
      "English",
      "French"
    ],
    "flag": "🇨🇲",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/cm.svg",
    "callingCode": "+237",
    "borders": [
      "CAF",
      "TCD",
      "COG",
      "GNQ",
      "GAB",
      "NGA"
    ],
    "latlng": [
      6,
      12
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".cm"
    ]
  },
  {
    "name": "Canada",
    "officialName": "Canada",
    "code": "CA",
    "alpha3Code": "CAN",
    "capital": "Ottawa",
    "region": "Americas",
    "subregion": "Northern America",
    "population": 37742154,
    "area": 9984670,
    "currency": "CAD",
    "currencyName": "Canadian dollar",
    "currencySymbol": "$",
    "languages": [
      "English",
      "French"
    ],
    "flag": "🇨🇦",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ca.svg",
    "callingCode": "+1",
    "borders": [
      "USA"
    ],
    "latlng": [
      60,
      -95
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ca"
    ]
  },
  {
    "name": "Central African Republic",
    "officialName": "Central African Republic",
    "code": "CF",
    "alpha3Code": "CAF",
    "capital": "Bangui",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 4829767,
    "area": 622984,
    "currency": "XAF",
    "currencyName": "Central African CFA franc",
    "currencySymbol": "Fr",
    "languages": [
      "French",
      "Sango"
    ],
    "flag": "🇨🇫",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/cf.svg",
    "callingCode": "+236",
    "borders": [
      "CMR",
      "TCD",
      "COD",
      "COG",
      "SSD",
      "SDN"
    ],
    "latlng": [
      7,
      21
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".cf"
    ]
  },
  {
    "name": "Chad",
    "officialName": "Republic of Chad",
    "code": "TD",
    "alpha3Code": "TCD",
    "capital": "N'Djamena",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 16425864,
    "area": 1284000,
    "currency": "XAF",
    "currencyName": "Central African CFA franc",
    "currencySymbol": "Fr",
    "languages": [
      "French",
      "Arabic"
    ],
    "flag": "🇹🇩",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/td.svg",
    "callingCode": "+235",
    "borders": [
      "CMR",
      "CAF",
      "LBY",
      "NER",
      "NGA",
      "SDN"
    ],
    "latlng": [
      15,
      19
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".td"
    ]
  },
  {
    "name": "Chile",
    "officialName": "Republic of Chile",
    "code": "CL",
    "alpha3Code": "CHL",
    "capital": "Santiago",
    "region": "Americas",
    "subregion": "South America",
    "population": 19116201,
    "area": 756102,
    "currency": "CLP",
    "currencyName": "Chilean peso",
    "currencySymbol": "$",
    "languages": [
      "Spanish"
    ],
    "flag": "🇨🇱",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/cl.svg",
    "callingCode": "+56",
    "borders": [
      "ARG",
      "BOL",
      "PER"
    ],
    "latlng": [
      -30,
      -71
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".cl"
    ]
  },
  {
    "name": "China",
    "officialName": "People's Republic of China",
    "code": "CN",
    "alpha3Code": "CHN",
    "capital": "Beijing",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 1439323776,
    "area": 9706961,
    "currency": "CNY",
    "currencyName": "Chinese yuan",
    "currencySymbol": "¥",
    "languages": [
      "Chinese"
    ],
    "flag": "🇨🇳",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/cn.svg",
    "callingCode": "+86",
    "borders": [
      "AFG",
      "BTN",
      "MMR",
      "HKG",
      "IND",
      "KAZ",
      "NPL",
      "PRK",
      "KGZ",
      "LAO",
      "MAC",
      "MNG",
      "PAK",
      "RUS",
      "TJK",
      "VNM"
    ],
    "latlng": [
      35,
      105
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".cn",
      ".中国",
      ".中國",
      ".公司",
      ".网络"
    ]
  },
  {
    "name": "Colombia",
    "officialName": "Republic of Colombia",
    "code": "CO",
    "alpha3Code": "COL",
    "capital": "Bogotá",
    "region": "Americas",
    "subregion": "South America",
    "population": 50882891,
    "area": 1141748,
    "currency": "COP",
    "currencyName": "Colombian peso",
    "currencySymbol": "$",
    "languages": [
      "Spanish"
    ],
    "flag": "🇨🇴",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/co.svg",
    "callingCode": "+57",
    "borders": [
      "BRA",
      "ECU",
      "PAN",
      "PER",
      "VEN"
    ],
    "latlng": [
      4,
      -72
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".co"
    ]
  },
  {
    "name": "Comoros",
    "officialName": "Union of the Comoros",
    "code": "KM",
    "alpha3Code": "COM",
    "capital": "Moroni",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 869601,
    "area": 1862,
    "currency": "KMF",
    "currencyName": "Comorian franc",
    "currencySymbol": "Fr",
    "languages": [
      "Arabic",
      "French"
    ],
    "flag": "🇰🇲",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/km.svg",
    "callingCode": "+269",
    "borders": [],
    "latlng": [
      -12.16666666,
      44.25
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".km"
    ]
  },
  {
    "name": "Congo",
    "officialName": "Republic of the Congo",
    "code": "CG",
    "alpha3Code": "COG",
    "capital": "Brazzaville",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 5518087,
    "area": 342000,
    "currency": "XAF",
    "currencyName": "Central African CFA franc",
    "currencySymbol": "Fr",
    "languages": [
      "French"
    ],
    "flag": "🇨🇬",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/cg.svg",
    "callingCode": "+242",
    "borders": [
      "AGO",
      "CMR",
      "CAF",
      "COD",
      "GAB"
    ],
    "latlng": [
      -1,
      15
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".cg"
    ]
  },
  {
    "name": "Costa Rica",
    "officialName": "Republic of Costa Rica",
    "code": "CR",
    "alpha3Code": "CRI",
    "capital": "San José",
    "region": "Americas",
    "subregion": "Central America",
    "population": 5094118,
    "area": 51100,
    "currency": "CRC",
    "currencyName": "Costa Rican colón",
    "currencySymbol": "₡",
    "languages": [
      "Spanish"
    ],
    "flag": "🇨🇷",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/cr.svg",
    "callingCode": "+506",
    "borders": [
      "NIC",
      "PAN"
    ],
    "latlng": [
      10,
      -84
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".cr"
    ]
  },
  {
    "name": "Croatia",
    "officialName": "Republic of Croatia",
    "code": "HR",
    "alpha3Code": "HRV",
    "capital": "Zagreb",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 4105267,
    "area": 56594,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Croatian"
    ],
    "flag": "🇭🇷",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/hr.svg",
    "callingCode": "+385",
    "borders": [
      "BIH",
      "HUN",
      "MNE",
      "SRB",
      "SVN"
    ],
    "latlng": [
      45.16666666,
      15.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".hr"
    ]
  },
  {
    "name": "Cuba",
    "officialName": "Republic of Cuba",
    "code": "CU",
    "alpha3Code": "CUB",
    "capital": "Havana",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 11326616,
    "area": 109884,
    "currency": "CUP",
    "currencyName": "Cuban peso",
    "currencySymbol": "$",
    "languages": [
      "Spanish"
    ],
    "flag": "🇨🇺",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/cu.svg",
    "callingCode": "+53",
    "borders": [],
    "latlng": [
      21.5,
      -80
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".cu"
    ]
  },
  {
    "name": "Cyprus",
    "officialName": "Republic of Cyprus",
    "code": "CY",
    "alpha3Code": "CYP",
    "capital": "Nicosia",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 1207359,
    "area": 9251,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Greek",
      "Turkish"
    ],
    "flag": "🇨🇾",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/cy.svg",
    "callingCode": "+357",
    "borders": [],
    "latlng": [
      35,
      33
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".cy"
    ]
  },
  {
    "name": "Czech Republic",
    "officialName": "Czech Republic",
    "code": "CZ",
    "alpha3Code": "CZE",
    "capital": "Prague",
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 10708981,
    "area": 78865,
    "currency": "CZK",
    "currencyName": "Czech koruna",
    "currencySymbol": "Kč",
    "languages": [
      "Czech"
    ],
    "flag": "🇨🇿",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/cz.svg",
    "callingCode": "+420",
    "borders": [
      "AUT",
      "DEU",
      "POL",
      "SVK"
    ],
    "latlng": [
      49.75,
      15.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".cz"
    ]
  },
  {
    "name": "Democratic Republic of the Congo",
    "officialName": "Democratic Republic of the Congo",
    "code": "CD",
    "alpha3Code": "COD",
    "capital": "Kinshasa",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 89561403,
    "area": 2344858,
    "currency": "CDF",
    "currencyName": "Congolese franc",
    "currencySymbol": "FC",
    "languages": [
      "French"
    ],
    "flag": "🇨🇩",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/cd.svg",
    "callingCode": "+243",
    "borders": [
      "AGO",
      "BDI",
      "CAF",
      "COG",
      "RWA",
      "SSD",
      "TZA",
      "UGA",
      "ZMB"
    ],
    "latlng": [
      0,
      25
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".cd"
    ]
  },
  {
    "name": "Denmark",
    "officialName": "Kingdom of Denmark",
    "code": "DK",
    "alpha3Code": "DNK",
    "capital": "Copenhagen",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 5792202,
    "area": 43094,
    "currency": "DKK",
    "currencyName": "Danish krone",
    "currencySymbol": "kr",
    "languages": [
      "Danish"
    ],
    "flag": "🇩🇰",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/dk.svg",
    "callingCode": "+45",
    "borders": [
      "DEU"
    ],
    "latlng": [
      56,
      10
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".dk"
    ]
  },
  {
    "name": "Djibouti",
    "officialName": "Republic of Djibouti",
    "code": "DJ",
    "alpha3Code": "DJI",
    "capital": "Djibouti",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 988000,
    "area": 23200,
    "currency": "DJF",
    "currencyName": "Djiboutian franc",
    "currencySymbol": "Fr",
    "languages": [
      "French",
      "Arabic"
    ],
    "flag": "🇩🇯",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/dj.svg",
    "callingCode": "+253",
    "borders": [
      "ERI",
      "ETH",
      "SOM"
    ],
    "latlng": [
      11.5,
      43
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".dj"
    ]
  },
  {
    "name": "Dominica",
    "officialName": "Commonwealth of Dominica",
    "code": "DM",
    "alpha3Code": "DMA",
    "capital": "Roseau",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 71986,
    "area": 751,
    "currency": "XCD",
    "currencyName": "Eastern Caribbean dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇩🇲",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/dm.svg",
    "callingCode": "+1767",
    "borders": [],
    "latlng": [
      15.41666666,
      -61.33333333
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".dm"
    ]
  },
  {
    "name": "Dominican Republic",
    "officialName": "Dominican Republic",
    "code": "DO",
    "alpha3Code": "DOM",
    "capital": "Santo Domingo",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 10847910,
    "area": 48671,
    "currency": "DOP",
    "currencyName": "Dominican peso",
    "currencySymbol": "$",
    "languages": [
      "Spanish"
    ],
    "flag": "🇩🇴",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/do.svg",
    "callingCode": "+1809",
    "borders": [
      "HTI"
    ],
    "latlng": [
      19,
      -70.66666666
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".do"
    ]
  },
  {
    "name": "East Timor",
    "officialName": "Democratic Republic of Timor-Leste",
    "code": "TL",
    "alpha3Code": "TLS",
    "capital": "Dili",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 1318445,
    "area": 14874,
    "currency": "USD",
    "currencyName": "United States dollar",
    "currencySymbol": "$",
    "languages": [
      "Portuguese",
      "Tetum"
    ],
    "flag": "🇹🇱",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/tl.svg",
    "callingCode": "+670",
    "borders": [
      "IDN"
    ],
    "latlng": [
      -8.83333333,
      125.91666666
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".tl"
    ]
  },
  {
    "name": "Ecuador",
    "officialName": "Republic of Ecuador",
    "code": "EC",
    "alpha3Code": "ECU",
    "capital": "Quito",
    "region": "Americas",
    "subregion": "South America",
    "population": 17643054,
    "area": 276841,
    "currency": "USD",
    "currencyName": "United States dollar",
    "currencySymbol": "$",
    "languages": [
      "Spanish"
    ],
    "flag": "🇪🇨",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ec.svg",
    "callingCode": "+593",
    "borders": [
      "COL",
      "PER"
    ],
    "latlng": [
      -2,
      -77.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ec"
    ]
  },
  {
    "name": "Egypt",
    "officialName": "Arab Republic of Egypt",
    "code": "EG",
    "alpha3Code": "EGY",
    "capital": "Cairo",
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 102334404,
    "area": 1002450,
    "currency": "EGP",
    "currencyName": "Egyptian pound",
    "currencySymbol": "£",
    "languages": [
      "Arabic"
    ],
    "flag": "🇪🇬",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/eg.svg",
    "callingCode": "+20",
    "borders": [
      "ISR",
      "LBY",
      "PSE",
      "SDN"
    ],
    "latlng": [
      27,
      30
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".eg",
      ".مصر"
    ]
  },
  {
    "name": "El Salvador",
    "officialName": "Republic of El Salvador",
    "code": "SV",
    "alpha3Code": "SLV",
    "capital": "San Salvador",
    "region": "Americas",
    "subregion": "Central America",
    "population": 6486205,
    "area": 21041,
    "currency": "USD",
    "currencyName": "United States dollar",
    "currencySymbol": "$",
    "languages": [
      "Spanish"
    ],
    "flag": "🇸🇻",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/sv.svg",
    "callingCode": "+503",
    "borders": [
      "GTM",
      "HND"
    ],
    "latlng": [
      13.83333333,
      -88.91666666
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".sv"
    ]
  },
  {
    "name": "Equatorial Guinea",
    "officialName": "Republic of Equatorial Guinea",
    "code": "GQ",
    "alpha3Code": "GNQ",
    "capital": "Malabo",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 1402985,
    "area": 28051,
    "currency": "XAF",
    "currencyName": "Central African CFA franc",
    "currencySymbol": "Fr",
    "languages": [
      "Spanish",
      "French"
    ],
    "flag": "🇬🇶",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gq.svg",
    "callingCode": "+240",
    "borders": [
      "CMR",
      "GAB"
    ],
    "latlng": [
      2,
      10
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".gq"
    ]
  },
  {
    "name": "Eritrea",
    "officialName": "State of Eritrea",
    "code": "ER",
    "alpha3Code": "ERI",
    "capital": "Asmara",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 3546421,
    "area": 117600,
    "currency": "ERN",
    "currencyName": "Eritrean nakfa",
    "currencySymbol": "Nfk",
    "languages": [
      "Tigrinya",
      "Arabic"
    ],
    "flag": "🇪🇷",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/er.svg",
    "callingCode": "+291",
    "borders": [
      "DJI",
      "ETH",
      "SDN"
    ],
    "latlng": [
      15,
      39
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".er"
    ]
  },
  {
    "name": "Estonia",
    "officialName": "Republic of Estonia",
    "code": "EE",
    "alpha3Code": "EST",
    "capital": "Tallinn",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 1326535,
    "area": 45227,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Estonian"
    ],
    "flag": "🇪🇪",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ee.svg",
    "callingCode": "+372",
    "borders": [
      "LVA",
      "RUS"
    ],
    "latlng": [
      59,
      26
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ee"
    ]
  },
  {
    "name": "Eswatini",
    "officialName": "Kingdom of Eswatini",
    "code": "SZ",
    "alpha3Code": "SWZ",
    "capital": "Mbabane",
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 1160164,
    "area": 17364,
    "currency": "SZL",
    "currencyName": "Swazi lilangeni",
    "currencySymbol": "L",
    "languages": [
      "English",
      "Swati"
    ],
    "flag": "🇸🇿",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/sz.svg",
    "callingCode": "+268",
    "borders": [
      "MOZ",
      "ZAF"
    ],
    "latlng": [
      -26.5,
      31.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".sz"
    ]
  },
  {
    "name": "Ethiopia",
    "officialName": "Federal Democratic Republic of Ethiopia",
    "code": "ET",
    "alpha3Code": "ETH",
    "capital": "Addis Ababa",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 114963588,
    "area": 1104300,
    "currency": "ETB",
    "currencyName": "Ethiopian birr",
    "currencySymbol": "Br",
    "languages": [
      "Amharic"
    ],
    "flag": "🇪🇹",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/et.svg",
    "callingCode": "+251",
    "borders": [
      "DJI",
      "ERI",
      "KEN",
      "SOM",
      "SSD",
      "SDN"
    ],
    "latlng": [
      8,
      38
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".et"
    ]
  },
  {
    "name": "Fiji",
    "officialName": "Republic of Fiji",
    "code": "FJ",
    "alpha3Code": "FJI",
    "capital": "Suva",
    "region": "Oceania",
    "subregion": "Melanesia",
    "population": 896445,
    "area": 18272,
    "currency": "FJD",
    "currencyName": "Fijian dollar",
    "currencySymbol": "$",
    "languages": [
      "English",
      "Fijian"
    ],
    "flag": "🇫🇯",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/fj.svg",
    "callingCode": "+679",
    "borders": [],
    "latlng": [
      -18,
      175
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".fj"
    ]
  },
  {
    "name": "Finland",
    "officialName": "Republic of Finland",
    "code": "FI",
    "alpha3Code": "FIN",
    "capital": "Helsinki",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 5540720,
    "area": 338424,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Finnish",
      "Swedish"
    ],
    "flag": "🇫🇮",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/fi.svg",
    "callingCode": "+358",
    "borders": [
      "NOR",
      "SWE",
      "RUS"
    ],
    "latlng": [
      64,
      26
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".fi"
    ]
  },
  {
    "name": "France",
    "officialName": "French Republic",
    "code": "FR",
    "alpha3Code": "FRA",
    "capital": "Paris",
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 65273511,
    "area": 551695,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "French"
    ],
    "flag": "🇫🇷",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/fr.svg",
    "callingCode": "+33",
    "borders": [
      "AND",
      "BEL",
      "DEU",
      "ITA",
      "LUX",
      "MCO",
      "ESP",
      "CHE"
    ],
    "latlng": [
      46,
      2
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".fr"
    ]
  },
  {
    "name": "Gabon",
    "officialName": "Gabonese Republic",
    "code": "GA",
    "alpha3Code": "GAB",
    "capital": "Libreville",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 2225734,
    "area": 267668,
    "currency": "XAF",
    "currencyName": "Central African CFA franc",
    "currencySymbol": "Fr",
    "languages": [
      "French"
    ],
    "flag": "🇬🇦",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ga.svg",
    "callingCode": "+241",
    "borders": [
      "CMR",
      "COG",
      "GNQ"
    ],
    "latlng": [
      -1,
      11.75
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ga"
    ]
  },
  {
    "name": "Gambia",
    "officialName": "Republic of the Gambia",
    "code": "GM",
    "alpha3Code": "GMB",
    "capital": "Banjul",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 2416668,
    "area": 10689,
    "currency": "GMD",
    "currencyName": "dalasi",
    "currencySymbol": "D",
    "languages": [
      "English"
    ],
    "flag": "🇬🇲",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gm.svg",
    "callingCode": "+220",
    "borders": [
      "SEN"
    ],
    "latlng": [
      13.46666666,
      -16.56666666
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".gm"
    ]
  },
  {
    "name": "Georgia",
    "officialName": "Georgia",
    "code": "GE",
    "alpha3Code": "GEO",
    "capital": "Tbilisi",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 3989167,
    "area": 69700,
    "currency": "GEL",
    "currencyName": "lari",
    "currencySymbol": "₾",
    "languages": [
      "Georgian"
    ],
    "flag": "🇬🇪",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ge.svg",
    "callingCode": "+995",
    "borders": [
      "ARM",
      "AZE",
      "RUS",
      "TUR"
    ],
    "latlng": [
      42,
      43.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ge"
    ]
  },
  {
    "name": "Germany",
    "officialName": "Federal Republic of Germany",
    "code": "DE",
    "alpha3Code": "DEU",
    "capital": "Berlin",
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 83783942,
    "area": 357114,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "German"
    ],
    "flag": "🇩🇪",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/de.svg",
    "callingCode": "+49",
    "borders": [
      "AUT",
      "BEL",
      "CZE",
      "DNK",
      "FRA",
      "LUX",
      "NLD",
      "POL",
      "CHE"
    ],
    "latlng": [
      51,
      9
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".de"
    ]
  },
  {
    "name": "Ghana",
    "officialName": "Republic of Ghana",
    "code": "GH",
    "alpha3Code": "GHA",
    "capital": "Accra",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 31072940,
    "area": 238533,
    "currency": "GHS",
    "currencyName": "Ghanaian cedi",
    "currencySymbol": "₵",
    "languages": [
      "English"
    ],
    "flag": "🇬🇭",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gh.svg",
    "callingCode": "+233",
    "borders": [
      "BFA",
      "CIV",
      "TGO"
    ],
    "latlng": [
      8,
      -2
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".gh"
    ]
  },
  {
    "name": "Greece",
    "officialName": "Hellenic Republic",
    "code": "GR",
    "alpha3Code": "GRC",
    "capital": "Athens",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 10423054,
    "area": 131990,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Greek"
    ],
    "flag": "🇬🇷",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gr.svg",
    "callingCode": "+30",
    "borders": [
      "ALB",
      "BGR",
      "TUR",
      "MKD"
    ],
    "latlng": [
      39,
      22
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".gr"
    ]
  },
  {
    "name": "Grenada",
    "officialName": "Grenada",
    "code": "GD",
    "alpha3Code": "GRD",
    "capital": "St. George's",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 112523,
    "area": 344,
    "currency": "XCD",
    "currencyName": "Eastern Caribbean dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇬🇩",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gd.svg",
    "callingCode": "+1473",
    "borders": [],
    "latlng": [
      12.11666666,
      -61.66666666
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".gd"
    ]
  },
  {
    "name": "Guatemala",
    "officialName": "Republic of Guatemala",
    "code": "GT",
    "alpha3Code": "GTM",
    "capital": "Guatemala City",
    "region": "Americas",
    "subregion": "Central America",
    "population": 17915568,
    "area": 108889,
    "currency": "GTQ",
    "currencyName": "Guatemalan quetzal",
    "currencySymbol": "Q",
    "languages": [
      "Spanish"
    ],
    "flag": "🇬🇹",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gt.svg",
    "callingCode": "+502",
    "borders": [
      "BLZ",
      "SLV",
      "HND",
      "MEX"
    ],
    "latlng": [
      15.5,
      -90.25
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".gt"
    ]
  },
  {
    "name": "Guinea",
    "officialName": "Republic of Guinea",
    "code": "GN",
    "alpha3Code": "GIN",
    "capital": "Conakry",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 13132795,
    "area": 245857,
    "currency": "GNF",
    "currencyName": "Guinean franc",
    "currencySymbol": "Fr",
    "languages": [
      "French"
    ],
    "flag": "🇬🇳",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gn.svg",
    "callingCode": "+224",
    "borders": [
      "CIV",
      "GNB",
      "LBR",
      "MLI",
      "SEN",
      "SLE"
    ],
    "latlng": [
      11,
      -10
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".gn"
    ]
  },
  {
    "name": "Guinea-Bissau",
    "officialName": "Republic of Guinea-Bissau",
    "code": "GW",
    "alpha3Code": "GNB",
    "capital": "Bissau",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 1968001,
    "area": 36125,
    "currency": "XOF",
    "currencyName": "West African CFA franc",
    "currencySymbol": "Fr",
    "languages": [
      "Portuguese"
    ],
    "flag": "🇬🇼",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gw.svg",
    "callingCode": "+245",
    "borders": [
      "GIN",
      "SEN"
    ],
    "latlng": [
      12,
      -15
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".gw"
    ]
  },
  {
    "name": "Guyana",
    "officialName": "Co-operative Republic of Guyana",
    "code": "GY",
    "alpha3Code": "GUY",
    "capital": "Georgetown",
    "region": "Americas",
    "subregion": "South America",
    "population": 786552,
    "area": 214969,
    "currency": "GYD",
    "currencyName": "Guyanese dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇬🇾",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gy.svg",
    "callingCode": "+592",
    "borders": [
      "BRA",
      "SUR",
      "VEN"
    ],
    "latlng": [
      5,
      -59
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".gy"
    ]
  },
  {
    "name": "Haiti",
    "officialName": "Republic of Haiti",
    "code": "HT",
    "alpha3Code": "HTI",
    "capital": "Port-au-Prince",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 11402528,
    "area": 27750,
    "currency": "HTG",
    "currencyName": "Haitian gourde",
    "currencySymbol": "G",
    "languages": [
      "French",
      "Haitian Creole"
    ],
    "flag": "🇭🇹",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ht.svg",
    "callingCode": "+509",
    "borders": [
      "DOM"
    ],
    "latlng": [
      19,
      -72.41666666
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ht"
    ]
  },
  {
    "name": "Honduras",
    "officialName": "Republic of Honduras",
    "code": "HN",
    "alpha3Code": "HND",
    "capital": "Tegucigalpa",
    "region": "Americas",
    "subregion": "Central America",
    "population": 9904607,
    "area": 112492,
    "currency": "HNL",
    "currencyName": "Honduran lempira",
    "currencySymbol": "L",
    "languages": [
      "Spanish"
    ],
    "flag": "🇭🇳",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/hn.svg",
    "callingCode": "+504",
    "borders": [
      "GTM",
      "SLV",
      "NIC"
    ],
    "latlng": [
      15,
      -86.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".hn"
    ]
  },
  {
    "name": "Hungary",
    "officialName": "Hungary",
    "code": "HU",
    "alpha3Code": "HUN",
    "capital": "Budapest",
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 9660351,
    "area": 93028,
    "currency": "HUF",
    "currencyName": "Hungarian forint",
    "currencySymbol": "Ft",
    "languages": [
      "Hungarian"
    ],
    "flag": "🇭🇺",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/hu.svg",
    "callingCode": "+36",
    "borders": [
      "AUT",
      "HRV",
      "ROU",
      "SRB",
      "SVK",
      "SVN",
      "UKR"
    ],
    "latlng": [
      47,
      20
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".hu"
    ]
  },
  {
    "name": "Iceland",
    "officialName": "Iceland",
    "code": "IS",
    "alpha3Code": "ISL",
    "capital": "Reykjavik",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 341243,
    "area": 103000,
    "currency": "ISK",
    "currencyName": "Icelandic króna",
    "currencySymbol": "kr",
    "languages": [
      "Icelandic"
    ],
    "flag": "🇮🇸",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/is.svg",
    "callingCode": "+354",
    "borders": [],
    "latlng": [
      65,
      -18
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".is"
    ]
  },
  {
    "name": "India",
    "officialName": "Republic of India",
    "code": "IN",
    "alpha3Code": "IND",
    "capital": "New Delhi",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 1380004385,
    "area": 3287590,
    "currency": "INR",
    "currencyName": "Indian rupee",
    "currencySymbol": "₹",
    "languages": [
      "Hindi",
      "English"
    ],
    "flag": "🇮🇳",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/in.svg",
    "callingCode": "+91",
    "borders": [
      "BGD",
      "BTN",
      "MMR",
      "CHN",
      "NPL",
      "PAK"
    ],
    "latlng": [
      20,
      77
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".in"
    ]
  },
  {
    "name": "Indonesia",
    "officialName": "Republic of Indonesia",
    "code": "ID",
    "alpha3Code": "IDN",
    "capital": "Jakarta",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 273523615,
    "area": 1904569,
    "currency": "IDR",
    "currencyName": "Indonesian rupiah",
    "currencySymbol": "Rp",
    "languages": [
      "Indonesian"
    ],
    "flag": "🇮🇩",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/id.svg",
    "callingCode": "+62",
    "borders": [
      "TLS",
      "MYS",
      "PNG"
    ],
    "latlng": [
      -5,
      120
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".id"
    ]
  },
  {
    "name": "Iran",
    "officialName": "Islamic Republic of Iran",
    "code": "IR",
    "alpha3Code": "IRN",
    "capital": "Tehran",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 83992949,
    "area": 1648195,
    "currency": "IRR",
    "currencyName": "Iranian rial",
    "currencySymbol": "﷼",
    "languages": [
      "Persian"
    ],
    "flag": "🇮🇷",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ir.svg",
    "callingCode": "+98",
    "borders": [
      "AFG",
      "ARM",
      "AZE",
      "IRQ",
      "PAK",
      "TUR",
      "TKM"
    ],
    "latlng": [
      32,
      53
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ir",
      "ایران."
    ]
  },
  {
    "name": "Iraq",
    "officialName": "Republic of Iraq",
    "code": "IQ",
    "alpha3Code": "IRQ",
    "capital": "Baghdad",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 40222493,
    "area": 438317,
    "currency": "IQD",
    "currencyName": "Iraqi dinar",
    "currencySymbol": "ع.د",
    "languages": [
      "Arabic",
      "Kurdish"
    ],
    "flag": "🇮🇶",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/iq.svg",
    "callingCode": "+964",
    "borders": [
      "IRN",
      "JOR",
      "KWT",
      "SAU",
      "SYR",
      "TUR"
    ],
    "latlng": [
      33,
      44
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".iq"
    ]
  },
  {
    "name": "Ireland",
    "officialName": "Republic of Ireland",
    "code": "IE",
    "alpha3Code": "IRL",
    "capital": "Dublin",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 4937786,
    "area": 70273,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Irish",
      "English"
    ],
    "flag": "🇮🇪",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ie.svg",
    "callingCode": "+353",
    "borders": [
      "GBR"
    ],
    "latlng": [
      53,
      -8
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ie"
    ]
  },
  {
    "name": "Israel",
    "officialName": "State of Israel",
    "code": "IL",
    "alpha3Code": "ISR",
    "capital": "Jerusalem",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 8655535,
    "area": 20770,
    "currency": "ILS",
    "currencyName": "Israeli new shekel",
    "currencySymbol": "₪",
    "languages": [
      "Hebrew",
      "Arabic"
    ],
    "flag": "🇮🇱",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/il.svg",
    "callingCode": "+972",
    "borders": [
      "EGY",
      "JOR",
      "LBN",
      "PSE",
      "SYR"
    ],
    "latlng": [
      31.47,
      35.13
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".il"
    ]
  },
  {
    "name": "Italy",
    "officialName": "Italian Republic",
    "code": "IT",
    "alpha3Code": "ITA",
    "capital": "Rome",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 60461826,
    "area": 301336,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Italian"
    ],
    "flag": "🇮🇹",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/it.svg",
    "callingCode": "+39",
    "borders": [
      "AUT",
      "FRA",
      "SMR",
      "SVN",
      "CHE",
      "VAT"
    ],
    "latlng": [
      42.83333333,
      12.83333333
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".it"
    ]
  },
  {
    "name": "Ivory Coast",
    "officialName": "Republic of Côte d'Ivoire",
    "code": "CI",
    "alpha3Code": "CIV",
    "capital": "Yamoussoukro",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 26378274,
    "area": 322463,
    "currency": "XOF",
    "currencyName": "West African CFA franc",
    "currencySymbol": "Fr",
    "languages": [
      "French"
    ],
    "flag": "🇨🇮",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ci.svg",
    "callingCode": "+225",
    "borders": [
      "BFA",
      "GHA",
      "GIN",
      "LBR",
      "MLI"
    ],
    "latlng": [
      8,
      -5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ci"
    ]
  },
  {
    "name": "Jamaica",
    "officialName": "Jamaica",
    "code": "JM",
    "alpha3Code": "JAM",
    "capital": "Kingston",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 2961167,
    "area": 10991,
    "currency": "JMD",
    "currencyName": "Jamaican dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇯🇲",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/jm.svg",
    "callingCode": "+1876",
    "borders": [],
    "latlng": [
      18.25,
      -77.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".jm"
    ]
  },
  {
    "name": "Japan",
    "officialName": "Japan",
    "code": "JP",
    "alpha3Code": "JPN",
    "capital": "Tokyo",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 126476461,
    "area": 377930,
    "currency": "JPY",
    "currencyName": "Japanese yen",
    "currencySymbol": "¥",
    "languages": [
      "Japanese"
    ],
    "flag": "🇯🇵",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/jp.svg",
    "callingCode": "+81",
    "borders": [],
    "latlng": [
      36,
      138
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".jp",
      ".みんな"
    ]
  },
  {
    "name": "Jordan",
    "officialName": "Hashemite Kingdom of Jordan",
    "code": "JO",
    "alpha3Code": "JOR",
    "capital": "Amman",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 10203134,
    "area": 89342,
    "currency": "JOD",
    "currencyName": "Jordanian dinar",
    "currencySymbol": "د.ا",
    "languages": [
      "Arabic"
    ],
    "flag": "🇯🇴",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/jo.svg",
    "callingCode": "+962",
    "borders": [
      "IRQ",
      "ISR",
      "PSE",
      "SAU",
      "SYR"
    ],
    "latlng": [
      31,
      36
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".jo",
      "الاردن."
    ]
  },
  {
    "name": "Kazakhstan",
    "officialName": "Republic of Kazakhstan",
    "code": "KZ",
    "alpha3Code": "KAZ",
    "capital": "Nur-Sultan",
    "region": "Asia",
    "subregion": "Central Asia",
    "population": 18776707,
    "area": 2724900,
    "currency": "KZT",
    "currencyName": "Kazakhstani tenge",
    "currencySymbol": "₸",
    "languages": [
      "Kazakh",
      "Russian"
    ],
    "flag": "🇰🇿",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/kz.svg",
    "callingCode": "+7",
    "borders": [
      "CHN",
      "KGZ",
      "RUS",
      "TKM",
      "UZB"
    ],
    "latlng": [
      48,
      68
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".kz",
      ".қаз"
    ]
  },
  {
    "name": "Kenya",
    "officialName": "Republic of Kenya",
    "code": "KE",
    "alpha3Code": "KEN",
    "capital": "Nairobi",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 53771296,
    "area": 580367,
    "currency": "KES",
    "currencyName": "Kenyan shilling",
    "currencySymbol": "Sh",
    "languages": [
      "English",
      "Swahili"
    ],
    "flag": "🇰🇪",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ke.svg",
    "callingCode": "+254",
    "borders": [
      "ETH",
      "SOM",
      "SSD",
      "TZA",
      "UGA"
    ],
    "latlng": [
      1,
      38
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ke"
    ]
  },
  {
    "name": "Kiribati",
    "officialName": "Independent and Sovereign Republic of Kiribati",
    "code": "KI",
    "alpha3Code": "KIR",
    "capital": "Tarawa",
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 119449,
    "area": 811,
    "currency": "AUD",
    "currencyName": "Australian dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇰🇮",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ki.svg",
    "callingCode": "+686",
    "borders": [],
    "latlng": [
      1.41666666,
      173
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ki"
    ]
  },
  {
    "name": "Kosovo",
    "officialName": "Republic of Kosovo",
    "code": "XK",
    "alpha3Code": "XKX",
    "capital": "Pristina",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 1810366,
    "area": 10908,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Albanian",
      "Serbian"
    ],
    "flag": "🇽🇰",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/xk.svg",
    "callingCode": "+383",
    "borders": [
      "ALB",
      "MKD",
      "MNE",
      "SRB"
    ],
    "latlng": [
      42.666667,
      21.166667
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".xk"
    ]
  },
  {
    "name": "Kuwait",
    "officialName": "State of Kuwait",
    "code": "KW",
    "alpha3Code": "KWT",
    "capital": "Kuwait City",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 4270571,
    "area": 17818,
    "currency": "KWD",
    "currencyName": "Kuwaiti dinar",
    "currencySymbol": "د.ك",
    "languages": [
      "Arabic"
    ],
    "flag": "🇰🇼",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/kw.svg",
    "callingCode": "+965",
    "borders": [
      "IRQ",
      "SAU"
    ],
    "latlng": [
      29.5,
      45.75
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".kw"
    ]
  },
  {
    "name": "Kyrgyzstan",
    "officialName": "Kyrgyz Republic",
    "code": "KG",
    "alpha3Code": "KGZ",
    "capital": "Bishkek",
    "region": "Asia",
    "subregion": "Central Asia",
    "population": 6524195,
    "area": 199951,
    "currency": "KGS",
    "currencyName": "Kyrgyzstani som",
    "currencySymbol": "с",
    "languages": [
      "Kyrgyz",
      "Russian"
    ],
    "flag": "🇰🇬",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/kg.svg",
    "callingCode": "+996",
    "borders": [
      "CHN",
      "KAZ",
      "TJK",
      "UZB"
    ],
    "latlng": [
      41,
      75
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".kg"
    ]
  },
  {
    "name": "Laos",
    "officialName": "Lao People's Democratic Republic",
    "code": "LA",
    "alpha3Code": "LAO",
    "capital": "Vientiane",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 7275560,
    "area": 236800,
    "currency": "LAK",
    "currencyName": "Lao kip",
    "currencySymbol": "₭",
    "languages": [
      "Lao"
    ],
    "flag": "🇱🇦",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/la.svg",
    "callingCode": "+856",
    "borders": [
      "MMR",
      "KHM",
      "CHN",
      "THA",
      "VNM"
    ],
    "latlng": [
      18,
      105
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".la"
    ]
  },
  {
    "name": "Latvia",
    "officialName": "Republic of Latvia",
    "code": "LV",
    "alpha3Code": "LVA",
    "capital": "Riga",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 1886198,
    "area": 64559,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Latvian"
    ],
    "flag": "🇱🇻",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/lv.svg",
    "callingCode": "+371",
    "borders": [
      "BLR",
      "EST",
      "LTU",
      "RUS"
    ],
    "latlng": [
      57,
      25
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".lv"
    ]
  },
  {
    "name": "Lebanon",
    "officialName": "Lebanese Republic",
    "code": "LB",
    "alpha3Code": "LBN",
    "capital": "Beirut",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 6825445,
    "area": 10452,
    "currency": "LBP",
    "currencyName": "Lebanese pound",
    "currencySymbol": "ل.ل",
    "languages": [
      "Arabic",
      "French"
    ],
    "flag": "🇱🇧",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/lb.svg",
    "callingCode": "+961",
    "borders": [
      "ISR",
      "SYR"
    ],
    "latlng": [
      33.83333333,
      35.83333333
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".lb"
    ]
  },
  {
    "name": "Lesotho",
    "officialName": "Kingdom of Lesotho",
    "code": "LS",
    "alpha3Code": "LSO",
    "capital": "Maseru",
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 2142249,
    "area": 30355,
    "currency": "LSL",
    "currencyName": "Lesotho loti",
    "currencySymbol": "L",
    "languages": [
      "English",
      "Sesotho"
    ],
    "flag": "🇱🇸",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ls.svg",
    "callingCode": "+266",
    "borders": [
      "ZAF"
    ],
    "latlng": [
      -29.5,
      28.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ls"
    ]
  },
  {
    "name": "Liberia",
    "officialName": "Republic of Liberia",
    "code": "LR",
    "alpha3Code": "LBR",
    "capital": "Monrovia",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 5057681,
    "area": 111369,
    "currency": "LRD",
    "currencyName": "Liberian dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇱🇷",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/lr.svg",
    "callingCode": "+231",
    "borders": [
      "GIN",
      "CIV",
      "SLE"
    ],
    "latlng": [
      6.5,
      -9.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".lr"
    ]
  },
  {
    "name": "Libya",
    "officialName": "State of Libya",
    "code": "LY",
    "alpha3Code": "LBY",
    "capital": "Tripoli",
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 6871292,
    "area": 1759540,
    "currency": "LYD",
    "currencyName": "Libyan dinar",
    "currencySymbol": "ل.د",
    "languages": [
      "Arabic"
    ],
    "flag": "🇱🇾",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ly.svg",
    "callingCode": "+218",
    "borders": [
      "DZA",
      "TCD",
      "EGY",
      "NER",
      "SDN",
      "TUN"
    ],
    "latlng": [
      25,
      17
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ly"
    ]
  },
  {
    "name": "Liechtenstein",
    "officialName": "Principality of Liechtenstein",
    "code": "LI",
    "alpha3Code": "LIE",
    "capital": "Vaduz",
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 38128,
    "area": 160,
    "currency": "CHF",
    "currencyName": "Swiss franc",
    "currencySymbol": "Fr",
    "languages": [
      "German"
    ],
    "flag": "🇱🇮",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/li.svg",
    "callingCode": "+423",
    "borders": [
      "AUT",
      "CHE"
    ],
    "latlng": [
      47.26666666,
      9.53333333
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".li"
    ]
  },
  {
    "name": "Lithuania",
    "officialName": "Republic of Lithuania",
    "code": "LT",
    "alpha3Code": "LTU",
    "capital": "Vilnius",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 2722289,
    "area": 65300,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Lithuanian"
    ],
    "flag": "🇱🇹",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/lt.svg",
    "callingCode": "+370",
    "borders": [
      "BLR",
      "LVA",
      "POL",
      "RUS"
    ],
    "latlng": [
      56,
      24
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".lt"
    ]
  },
  {
    "name": "Luxembourg",
    "officialName": "Grand Duchy of Luxembourg",
    "code": "LU",
    "alpha3Code": "LUX",
    "capital": "Luxembourg",
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 625978,
    "area": 2586,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "French",
      "German",
      "Luxembourgish"
    ],
    "flag": "🇱🇺",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/lu.svg",
    "callingCode": "+352",
    "borders": [
      "BEL",
      "FRA",
      "DEU"
    ],
    "latlng": [
      49.75,
      6.16666666
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".lu"
    ]
  },
  {
    "name": "Madagascar",
    "officialName": "Republic of Madagascar",
    "code": "MG",
    "alpha3Code": "MDG",
    "capital": "Antananarivo",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 27691018,
    "area": 587041,
    "currency": "MGA",
    "currencyName": "Malagasy ariary",
    "currencySymbol": "Ar",
    "languages": [
      "French",
      "Malagasy"
    ],
    "flag": "🇲🇬",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/mg.svg",
    "callingCode": "+261",
    "borders": [],
    "latlng": [
      -20,
      47
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".mg"
    ]
  },
  {
    "name": "Malawi",
    "officialName": "Republic of Malawi",
    "code": "MW",
    "alpha3Code": "MWI",
    "capital": "Lilongwe",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 19129952,
    "area": 118484,
    "currency": "MWK",
    "currencyName": "Malawian kwacha",
    "currencySymbol": "MK",
    "languages": [
      "English",
      "Chichewa"
    ],
    "flag": "🇲🇼",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/mw.svg",
    "callingCode": "+265",
    "borders": [
      "MOZ",
      "TZA",
      "ZMB"
    ],
    "latlng": [
      -13.5,
      34
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".mw"
    ]
  },
  {
    "name": "Malaysia",
    "officialName": "Malaysia",
    "code": "MY",
    "alpha3Code": "MYS",
    "capital": "Kuala Lumpur",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 32365999,
    "area": 330803,
    "currency": "MYR",
    "currencyName": "Malaysian ringgit",
    "currencySymbol": "RM",
    "languages": [
      "Malay"
    ],
    "flag": "🇲🇾",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/my.svg",
    "callingCode": "+60",
    "borders": [
      "BRN",
      "IDN",
      "THA"
    ],
    "latlng": [
      2.5,
      112.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".my"
    ]
  },
  {
    "name": "Maldives",
    "officialName": "Republic of the Maldives",
    "code": "MV",
    "alpha3Code": "MDV",
    "capital": "Malé",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 540544,
    "area": 300,
    "currency": "MVR",
    "currencyName": "Maldivian rufiyaa",
    "currencySymbol": ".ރ",
    "languages": [
      "Dhivehi"
    ],
    "flag": "🇲🇻",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/mv.svg",
    "callingCode": "+960",
    "borders": [],
    "latlng": [
      3.25,
      73
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".mv"
    ]
  },
  {
    "name": "Mali",
    "officialName": "Republic of Mali",
    "code": "ML",
    "alpha3Code": "MLI",
    "capital": "Bamako",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 20250833,
    "area": 1240192,
    "currency": "XOF",
    "currencyName": "West African CFA franc",
    "currencySymbol": "Fr",
    "languages": [
      "French"
    ],
    "flag": "🇲🇱",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ml.svg",
    "callingCode": "+223",
    "borders": [
      "DZA",
      "BFA",
      "GIN",
      "CIV",
      "MRT",
      "NER",
      "SEN"
    ],
    "latlng": [
      17,
      -4
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ml"
    ]
  },
  {
    "name": "Malta",
    "officialName": "Republic of Malta",
    "code": "MT",
    "alpha3Code": "MLT",
    "capital": "Valletta",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 441543,
    "area": 316,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Maltese",
      "English"
    ],
    "flag": "🇲🇹",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/mt.svg",
    "callingCode": "+356",
    "borders": [],
    "latlng": [
      35.83333333,
      14.58333333
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".mt"
    ]
  },
  {
    "name": "Marshall Islands",
    "officialName": "Republic of the Marshall Islands",
    "code": "MH",
    "alpha3Code": "MHL",
    "capital": "Majuro",
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 59190,
    "area": 181,
    "currency": "USD",
    "currencyName": "United States dollar",
    "currencySymbol": "$",
    "languages": [
      "English",
      "Marshallese"
    ],
    "flag": "🇲🇭",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/mh.svg",
    "callingCode": "+692",
    "borders": [],
    "latlng": [
      9,
      168
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".mh"
    ]
  },
  {
    "name": "Mauritania",
    "officialName": "Islamic Republic of Mauritania",
    "code": "MR",
    "alpha3Code": "MRT",
    "capital": "Nouakchott",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 4649658,
    "area": 1030700,
    "currency": "MRU",
    "currencyName": "Mauritanian ouguiya",
    "currencySymbol": "UM",
    "languages": [
      "Arabic"
    ],
    "flag": "🇲🇷",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/mr.svg",
    "callingCode": "+222",
    "borders": [
      "DZA",
      "MLI",
      "SEN",
      "ESH"
    ],
    "latlng": [
      20,
      -12
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".mr"
    ]
  },
  {
    "name": "Mauritius",
    "officialName": "Republic of Mauritius",
    "code": "MU",
    "alpha3Code": "MUS",
    "capital": "Port Louis",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 1271768,
    "area": 2040,
    "currency": "MUR",
    "currencyName": "Mauritian rupee",
    "currencySymbol": "₨",
    "languages": [
      "English",
      "French"
    ],
    "flag": "🇲🇺",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/mu.svg",
    "callingCode": "+230",
    "borders": [],
    "latlng": [
      -20.28333333,
      57.55
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".mu"
    ]
  },
  {
    "name": "Mexico",
    "officialName": "United Mexican States",
    "code": "MX",
    "alpha3Code": "MEX",
    "capital": "Mexico City",
    "region": "Americas",
    "subregion": "Central America",
    "population": 128932753,
    "area": 1964375,
    "currency": "MXN",
    "currencyName": "Mexican peso",
    "currencySymbol": "$",
    "languages": [
      "Spanish"
    ],
    "flag": "🇲🇽",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/mx.svg",
    "callingCode": "+52",
    "borders": [
      "BLZ",
      "GTM",
      "USA"
    ],
    "latlng": [
      23,
      -102
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".mx"
    ]
  },
  {
    "name": "Micronesia",
    "officialName": "Federated States of Micronesia",
    "code": "FM",
    "alpha3Code": "FSM",
    "capital": "Palikir",
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 115023,
    "area": 702,
    "currency": "USD",
    "currencyName": "",
    "currencySymbol": "",
    "languages": [
      "English"
    ],
    "flag": "🇫🇲",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/fm.svg",
    "callingCode": "+691",
    "borders": [],
    "latlng": [
      6.91666666,
      158.25
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".fm"
    ]
  },
  {
    "name": "Moldova",
    "officialName": "Republic of Moldova",
    "code": "MD",
    "alpha3Code": "MDA",
    "capital": "Chișinău",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 4033963,
    "area": 33846,
    "currency": "MDL",
    "currencyName": "Moldovan leu",
    "currencySymbol": "L",
    "languages": [
      "Romanian"
    ],
    "flag": "🇲🇩",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/md.svg",
    "callingCode": "+373",
    "borders": [
      "ROU",
      "UKR"
    ],
    "latlng": [
      47,
      29
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".md"
    ]
  },
  {
    "name": "Monaco",
    "officialName": "Principality of Monaco",
    "code": "MC",
    "alpha3Code": "MCO",
    "capital": "Monaco",
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 39242,
    "area": 2.02,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "French"
    ],
    "flag": "🇲🇨",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/mc.svg",
    "callingCode": "+377",
    "borders": [
      "FRA"
    ],
    "latlng": [
      43.73333333,
      7.4
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".mc"
    ]
  },
  {
    "name": "Mongolia",
    "officialName": "Mongolia",
    "code": "MN",
    "alpha3Code": "MNG",
    "capital": "Ulaanbaatar",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 3278290,
    "area": 1564110,
    "currency": "MNT",
    "currencyName": "Mongolian tögrög",
    "currencySymbol": "₮",
    "languages": [
      "Mongolian"
    ],
    "flag": "🇲🇳",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/mn.svg",
    "callingCode": "+976",
    "borders": [
      "CHN",
      "RUS"
    ],
    "latlng": [
      46,
      105
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".mn"
    ]
  },
  {
    "name": "Montenegro",
    "officialName": "Montenegro",
    "code": "ME",
    "alpha3Code": "MNE",
    "capital": "Podgorica",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 628066,
    "area": 13812,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Montenegrin"
    ],
    "flag": "🇲🇪",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/me.svg",
    "callingCode": "+382",
    "borders": [
      "ALB",
      "BIH",
      "HRV",
      "UNK",
      "SRB"
    ],
    "latlng": [
      42.5,
      19.3
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".me"
    ]
  },
  {
    "name": "Morocco",
    "officialName": "Kingdom of Morocco",
    "code": "MA",
    "alpha3Code": "MAR",
    "capital": "Rabat",
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 36910560,
    "area": 446550,
    "currency": "MAD",
    "currencyName": "Moroccan dirham",
    "currencySymbol": "د.م.",
    "languages": [
      "Arabic"
    ],
    "flag": "🇲🇦",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ma.svg",
    "callingCode": "+212",
    "borders": [
      "DZA",
      "ESH",
      "ESP"
    ],
    "latlng": [
      32,
      -5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ma",
      "المغرب."
    ]
  },
  {
    "name": "Mozambique",
    "officialName": "Republic of Mozambique",
    "code": "MZ",
    "alpha3Code": "MOZ",
    "capital": "Maputo",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 31255435,
    "area": 801590,
    "currency": "MZN",
    "currencyName": "Mozambican metical",
    "currencySymbol": "MT",
    "languages": [
      "Portuguese"
    ],
    "flag": "🇲🇿",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/mz.svg",
    "callingCode": "+258",
    "borders": [
      "MWI",
      "ZAF",
      "SWZ",
      "TZA",
      "ZMB",
      "ZWE"
    ],
    "latlng": [
      -18.25,
      35
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".mz"
    ]
  },
  {
    "name": "Myanmar",
    "officialName": "Republic of the Union of Myanmar",
    "code": "MM",
    "alpha3Code": "MMR",
    "capital": "Naypyidaw",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 54409800,
    "area": 676578,
    "currency": "MMK",
    "currencyName": "Burmese kyat",
    "currencySymbol": "Ks",
    "languages": [
      "Burmese"
    ],
    "flag": "🇲🇲",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/mm.svg",
    "callingCode": "+95",
    "borders": [
      "BGD",
      "CHN",
      "IND",
      "LAO",
      "THA"
    ],
    "latlng": [
      22,
      98
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".mm"
    ]
  },
  {
    "name": "Namibia",
    "officialName": "Republic of Namibia",
    "code": "NA",
    "alpha3Code": "NAM",
    "capital": "Windhoek",
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 2540905,
    "area": 825615,
    "currency": "NAD",
    "currencyName": "Namibian dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇳🇦",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/na.svg",
    "callingCode": "+264",
    "borders": [
      "AGO",
      "BWA",
      "ZAF",
      "ZMB"
    ],
    "latlng": [
      -22,
      17
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".na"
    ]
  },
  {
    "name": "Nauru",
    "officialName": "Republic of Nauru",
    "code": "NR",
    "alpha3Code": "NRU",
    "capital": "Yaren",
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 10824,
    "area": 21,
    "currency": "AUD",
    "currencyName": "Australian dollar",
    "currencySymbol": "$",
    "languages": [
      "English",
      "Nauruan"
    ],
    "flag": "🇳🇷",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/nr.svg",
    "callingCode": "+674",
    "borders": [],
    "latlng": [
      -0.53333333,
      166.91666666
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".nr"
    ]
  },
  {
    "name": "Nepal",
    "officialName": "Federal Democratic Republic of Nepal",
    "code": "NP",
    "alpha3Code": "NPL",
    "capital": "Kathmandu",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 29136808,
    "area": 147181,
    "currency": "NPR",
    "currencyName": "Nepalese rupee",
    "currencySymbol": "₨",
    "languages": [
      "Nepali"
    ],
    "flag": "🇳🇵",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/np.svg",
    "callingCode": "+977",
    "borders": [
      "CHN",
      "IND"
    ],
    "latlng": [
      28,
      84
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".np"
    ]
  },
  {
    "name": "Netherlands",
    "officialName": "Kingdom of the Netherlands",
    "code": "NL",
    "alpha3Code": "NLD",
    "capital": "Amsterdam",
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 17134872,
    "area": 41850,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Dutch"
    ],
    "flag": "���🇱",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/nl.svg",
    "callingCode": "+31",
    "borders": [
      "BEL",
      "DEU"
    ],
    "latlng": [
      52.5,
      5.75
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".nl"
    ]
  },
  {
    "name": "New Zealand",
    "officialName": "New Zealand",
    "code": "NZ",
    "alpha3Code": "NZL",
    "capital": "Wellington",
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "population": 4822233,
    "area": 270467,
    "currency": "NZD",
    "currencyName": "New Zealand dollar",
    "currencySymbol": "$",
    "languages": [
      "English",
      "Māori"
    ],
    "flag": "🇳🇿",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/nz.svg",
    "callingCode": "+64",
    "borders": [],
    "latlng": [
      -41,
      174
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".nz"
    ]
  },
  {
    "name": "Nicaragua",
    "officialName": "Republic of Nicaragua",
    "code": "NI",
    "alpha3Code": "NIC",
    "capital": "Managua",
    "region": "Americas",
    "subregion": "Central America",
    "population": 6624554,
    "area": 130373,
    "currency": "NIO",
    "currencyName": "Nicaraguan córdoba",
    "currencySymbol": "C$",
    "languages": [
      "Spanish"
    ],
    "flag": "🇳🇮",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ni.svg",
    "callingCode": "+505",
    "borders": [
      "CRI",
      "HND"
    ],
    "latlng": [
      13,
      -85
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ni"
    ]
  },
  {
    "name": "Niger",
    "officialName": "Republic of Niger",
    "code": "NE",
    "alpha3Code": "NER",
    "capital": "Niamey",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 24206644,
    "area": 1267000,
    "currency": "XOF",
    "currencyName": "West African CFA franc",
    "currencySymbol": "Fr",
    "languages": [
      "French"
    ],
    "flag": "🇳🇪",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ne.svg",
    "callingCode": "+227",
    "borders": [
      "DZA",
      "BEN",
      "BFA",
      "TCD",
      "LBY",
      "MLI",
      "NGA"
    ],
    "latlng": [
      16,
      8
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ne"
    ]
  },
  {
    "name": "Nigeria",
    "officialName": "Federal Republic of Nigeria",
    "code": "NG",
    "alpha3Code": "NGA",
    "capital": "Abuja",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 206139589,
    "area": 923768,
    "currency": "NGN",
    "currencyName": "Nigerian naira",
    "currencySymbol": "₦",
    "languages": [
      "English"
    ],
    "flag": "🇳🇬",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ng.svg",
    "callingCode": "+234",
    "borders": [
      "BEN",
      "CMR",
      "TCD",
      "NER"
    ],
    "latlng": [
      10,
      8
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ng"
    ]
  },
  {
    "name": "North Korea",
    "officialName": "Democratic People's Republic of Korea",
    "code": "KP",
    "alpha3Code": "PRK",
    "capital": "Pyongyang",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 25778816,
    "area": 120538,
    "currency": "KPW",
    "currencyName": "North Korean won",
    "currencySymbol": "₩",
    "languages": [
      "Korean"
    ],
    "flag": "🇰🇵",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/kp.svg",
    "callingCode": "+850",
    "borders": [
      "CHN",
      "KOR",
      "RUS"
    ],
    "latlng": [
      40,
      127
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".kp"
    ]
  },
  {
    "name": "North Macedonia",
    "officialName": "Republic of North Macedonia",
    "code": "MK",
    "alpha3Code": "MKD",
    "capital": "Skopje",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 2083374,
    "area": 25713,
    "currency": "MKD",
    "currencyName": "denar",
    "currencySymbol": "den",
    "languages": [
      "Macedonian"
    ],
    "flag": "🇲🇰",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/mk.svg",
    "callingCode": "+389",
    "borders": [
      "ALB",
      "BGR",
      "GRC",
      "UNK",
      "SRB"
    ],
    "latlng": [
      41.83333333,
      22
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".mk"
    ]
  },
  {
    "name": "Norway",
    "officialName": "Kingdom of Norway",
    "code": "NO",
    "alpha3Code": "NOR",
    "capital": "Oslo",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 5421241,
    "area": 323802,
    "currency": "NOK",
    "currencyName": "Norwegian krone",
    "currencySymbol": "kr",
    "languages": [
      "Norwegian"
    ],
    "flag": "🇳🇴",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/no.svg",
    "callingCode": "+47",
    "borders": [
      "FIN",
      "SWE",
      "RUS"
    ],
    "latlng": [
      62,
      10
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".no"
    ]
  },
  {
    "name": "Oman",
    "officialName": "Sultanate of Oman",
    "code": "OM",
    "alpha3Code": "OMN",
    "capital": "Muscat",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 5106626,
    "area": 309500,
    "currency": "OMR",
    "currencyName": "Omani rial",
    "currencySymbol": "ر.ع.",
    "languages": [
      "Arabic"
    ],
    "flag": "🇴🇲",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/om.svg",
    "callingCode": "+968",
    "borders": [
      "SAU",
      "ARE",
      "YEM"
    ],
    "latlng": [
      21,
      57
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".om"
    ]
  },
  {
    "name": "Pakistan",
    "officialName": "Islamic Republic of Pakistan",
    "code": "PK",
    "alpha3Code": "PAK",
    "capital": "Islamabad",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 220892340,
    "area": 881912,
    "currency": "PKR",
    "currencyName": "Pakistani rupee",
    "currencySymbol": "₨",
    "languages": [
      "Urdu",
      "English"
    ],
    "flag": "🇵🇰",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/pk.svg",
    "callingCode": "+92",
    "borders": [
      "AFG",
      "CHN",
      "IND",
      "IRN"
    ],
    "latlng": [
      30,
      70
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".pk"
    ]
  },
  {
    "name": "Palau",
    "officialName": "Republic of Palau",
    "code": "PW",
    "alpha3Code": "PLW",
    "capital": "Ngerulmud",
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 18094,
    "area": 459,
    "currency": "USD",
    "currencyName": "United States dollar",
    "currencySymbol": "$",
    "languages": [
      "English",
      "Palauan"
    ],
    "flag": "🇵🇼",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/pw.svg",
    "callingCode": "+680",
    "borders": [],
    "latlng": [
      7.5,
      134.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".pw"
    ]
  },
  {
    "name": "Palestine",
    "officialName": "State of Palestine",
    "code": "PS",
    "alpha3Code": "PSE",
    "capital": "Ramallah",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 5101414,
    "area": 6220,
    "currency": "ILS",
    "currencyName": "Israeli new shekel",
    "currencySymbol": "₪",
    "languages": [
      "Arabic"
    ],
    "flag": "🇵🇸",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ps.svg",
    "callingCode": "+970",
    "borders": [
      "ISR",
      "EGY",
      "JOR"
    ],
    "latlng": [
      31.9,
      35.2
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ps",
      "فلسطين."
    ]
  },
  {
    "name": "Panama",
    "officialName": "Republic of Panama",
    "code": "PA",
    "alpha3Code": "PAN",
    "capital": "Panama City",
    "region": "Americas",
    "subregion": "Central America",
    "population": 4314767,
    "area": 75417,
    "currency": "PAB",
    "currencyName": "Panamanian balboa",
    "currencySymbol": "B/.",
    "languages": [
      "Spanish"
    ],
    "flag": "🇵🇦",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/pa.svg",
    "callingCode": "+507",
    "borders": [
      "COL",
      "CRI"
    ],
    "latlng": [
      9,
      -80
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".pa"
    ]
  },
  {
    "name": "Papua New Guinea",
    "officialName": "Independent State of Papua New Guinea",
    "code": "PG",
    "alpha3Code": "PNG",
    "capital": "Port Moresby",
    "region": "Oceania",
    "subregion": "Melanesia",
    "population": 8947024,
    "area": 462840,
    "currency": "PGK",
    "currencyName": "Papua New Guinean kina",
    "currencySymbol": "K",
    "languages": [
      "English"
    ],
    "flag": "🇵🇬",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/pg.svg",
    "callingCode": "+675",
    "borders": [
      "IDN"
    ],
    "latlng": [
      -6,
      147
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".pg"
    ]
  },
  {
    "name": "Paraguay",
    "officialName": "Republic of Paraguay",
    "code": "PY",
    "alpha3Code": "PRY",
    "capital": "Asunción",
    "region": "Americas",
    "subregion": "South America",
    "population": 7132538,
    "area": 406752,
    "currency": "PYG",
    "currencyName": "Paraguayan guaraní",
    "currencySymbol": "₲",
    "languages": [
      "Spanish",
      "Guaraní"
    ],
    "flag": "🇵🇾",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/py.svg",
    "callingCode": "+595",
    "borders": [
      "ARG",
      "BOL",
      "BRA"
    ],
    "latlng": [
      -23,
      -58
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".py"
    ]
  },
  {
    "name": "Peru",
    "officialName": "Republic of Peru",
    "code": "PE",
    "alpha3Code": "PER",
    "capital": "Lima",
    "region": "Americas",
    "subregion": "South America",
    "population": 32971854,
    "area": 1285216,
    "currency": "PEN",
    "currencyName": "Peruvian sol",
    "currencySymbol": "S/.",
    "languages": [
      "Spanish"
    ],
    "flag": "🇵🇪",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/pe.svg",
    "callingCode": "+51",
    "borders": [
      "BOL",
      "BRA",
      "CHL",
      "COL",
      "ECU"
    ],
    "latlng": [
      -10,
      -76
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".pe"
    ]
  },
  {
    "name": "Philippines",
    "officialName": "Republic of the Philippines",
    "code": "PH",
    "alpha3Code": "PHL",
    "capital": "Manila",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 109581078,
    "area": 342353,
    "currency": "PHP",
    "currencyName": "Philippine peso",
    "currencySymbol": "₱",
    "languages": [
      "Filipino",
      "English"
    ],
    "flag": "🇵🇭",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ph.svg",
    "callingCode": "+63",
    "borders": [],
    "latlng": [
      13,
      122
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ph"
    ]
  },
  {
    "name": "Poland",
    "officialName": "Republic of Poland",
    "code": "PL",
    "alpha3Code": "POL",
    "capital": "Warsaw",
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 37846611,
    "area": 312679,
    "currency": "PLN",
    "currencyName": "Polish złoty",
    "currencySymbol": "zł",
    "languages": [
      "Polish"
    ],
    "flag": "🇵🇱",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/pl.svg",
    "callingCode": "+48",
    "borders": [
      "BLR",
      "CZE",
      "DEU",
      "LTU",
      "RUS",
      "SVK",
      "UKR"
    ],
    "latlng": [
      52,
      20
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".pl"
    ]
  },
  {
    "name": "Portugal",
    "officialName": "Portuguese Republic",
    "code": "PT",
    "alpha3Code": "PRT",
    "capital": "Lisbon",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 10196709,
    "area": 92090,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Portuguese"
    ],
    "flag": "🇵🇹",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/pt.svg",
    "callingCode": "+351",
    "borders": [
      "ESP"
    ],
    "latlng": [
      39.5,
      -8
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".pt"
    ]
  },
  {
    "name": "Qatar",
    "officialName": "State of Qatar",
    "code": "QA",
    "alpha3Code": "QAT",
    "capital": "Doha",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 2881053,
    "area": 11586,
    "currency": "QAR",
    "currencyName": "Qatari riyal",
    "currencySymbol": "ر.ق",
    "languages": [
      "Arabic"
    ],
    "flag": "🇶🇦",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/qa.svg",
    "callingCode": "+974",
    "borders": [
      "SAU"
    ],
    "latlng": [
      25.5,
      51.25
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".qa",
      "قطر."
    ]
  },
  {
    "name": "Romania",
    "officialName": "Romania",
    "code": "RO",
    "alpha3Code": "ROU",
    "capital": "Bucharest",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 19237691,
    "area": 238391,
    "currency": "RON",
    "currencyName": "Romanian leu",
    "currencySymbol": "lei",
    "languages": [
      "Romanian"
    ],
    "flag": "🇷🇴",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ro.svg",
    "callingCode": "+40",
    "borders": [
      "BGR",
      "HUN",
      "MDA",
      "SRB",
      "UKR"
    ],
    "latlng": [
      46,
      25
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ro"
    ]
  },
  {
    "name": "Russia",
    "officialName": "Russian Federation",
    "code": "RU",
    "alpha3Code": "RUS",
    "capital": "Moscow",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 145934462,
    "area": 17098242,
    "currency": "RUB",
    "currencyName": "Russian ruble",
    "currencySymbol": "₽",
    "languages": [
      "Russian"
    ],
    "flag": "🇷🇺",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ru.svg",
    "callingCode": "+7",
    "borders": [
      "AZE",
      "BLR",
      "CHN",
      "EST",
      "FIN",
      "GEO",
      "KAZ",
      "PRK",
      "LVA",
      "LTU",
      "MNG",
      "NOR",
      "POL",
      "UKR"
    ],
    "latlng": [
      60,
      100
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ru",
      ".su",
      ".рф"
    ]
  },
  {
    "name": "Rwanda",
    "officialName": "Republic of Rwanda",
    "code": "RW",
    "alpha3Code": "RWA",
    "capital": "Kigali",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 12952218,
    "area": 26338,
    "currency": "RWF",
    "currencyName": "Rwandan franc",
    "currencySymbol": "Fr",
    "languages": [
      "Kinyarwanda",
      "English",
      "French"
    ],
    "flag": "🇷🇼",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/rw.svg",
    "callingCode": "+250",
    "borders": [
      "BDI",
      "COD",
      "TZA",
      "UGA"
    ],
    "latlng": [
      -2,
      30
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".rw"
    ]
  },
  {
    "name": "Saint Kitts and Nevis",
    "officialName": "Federation of Saint Christopher and Nevis",
    "code": "KN",
    "alpha3Code": "KNA",
    "capital": "Basseterre",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 53199,
    "area": 261,
    "currency": "XCD",
    "currencyName": "Eastern Caribbean dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇰🇳",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/kn.svg",
    "callingCode": "+1869",
    "borders": [],
    "latlng": [
      17.33333333,
      -62.75
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".kn"
    ]
  },
  {
    "name": "Saint Lucia",
    "officialName": "Saint Lucia",
    "code": "LC",
    "alpha3Code": "LCA",
    "capital": "Castries",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 183627,
    "area": 616,
    "currency": "XCD",
    "currencyName": "Eastern Caribbean dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇱🇨",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/lc.svg",
    "callingCode": "+1758",
    "borders": [],
    "latlng": [
      13.88333333,
      -60.96666666
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".lc"
    ]
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "officialName": "Saint Vincent and the Grenadines",
    "code": "VC",
    "alpha3Code": "VCT",
    "capital": "Kingstown",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 110940,
    "area": 389,
    "currency": "XCD",
    "currencyName": "Eastern Caribbean dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇻🇨",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/vc.svg",
    "callingCode": "+1784",
    "borders": [],
    "latlng": [
      13.25,
      -61.2
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".vc"
    ]
  },
  {
    "name": "Samoa",
    "officialName": "Independent State of Samoa",
    "code": "WS",
    "alpha3Code": "WSM",
    "capital": "Apia",
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 198414,
    "area": 2842,
    "currency": "WST",
    "currencyName": "Samoan tālā",
    "currencySymbol": "T",
    "languages": [
      "Samoan",
      "English"
    ],
    "flag": "🇼🇸",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ws.svg",
    "callingCode": "+685",
    "borders": [],
    "latlng": [
      -13.58333333,
      -172.33333333
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ws"
    ]
  },
  {
    "name": "San Marino",
    "officialName": "Most Serene Republic of San Marino",
    "code": "SM",
    "alpha3Code": "SMR",
    "capital": "San Marino",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 33931,
    "area": 61,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Italian"
    ],
    "flag": "🇸🇲",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/sm.svg",
    "callingCode": "+378",
    "borders": [
      "ITA"
    ],
    "latlng": [
      43.76666666,
      12.41666666
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".sm"
    ]
  },
  {
    "name": "Sao Tome and Principe",
    "officialName": "Democratic Republic of São Tomé and Príncipe",
    "code": "ST",
    "alpha3Code": "STP",
    "capital": "São Tomé",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 219159,
    "area": 964,
    "currency": "STN",
    "currencyName": "São Tomé and Príncipe dobra",
    "currencySymbol": "Db",
    "languages": [
      "Portuguese"
    ],
    "flag": "🇸🇹",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/st.svg",
    "callingCode": "+239",
    "borders": [],
    "latlng": [
      1,
      7
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".st"
    ]
  },
  {
    "name": "Saudi Arabia",
    "officialName": "Kingdom of Saudi Arabia",
    "code": "SA",
    "alpha3Code": "SAU",
    "capital": "Riyadh",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 34813871,
    "area": 2149690,
    "currency": "SAR",
    "currencyName": "Saudi riyal",
    "currencySymbol": "ر.س",
    "languages": [
      "Arabic"
    ],
    "flag": "🇸🇦",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/sa.svg",
    "callingCode": "+966",
    "borders": [
      "IRQ",
      "JOR",
      "KWT",
      "OMN",
      "QAT",
      "ARE",
      "YEM"
    ],
    "latlng": [
      25,
      45
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".sa",
      ".السعودية"
    ]
  },
  {
    "name": "Senegal",
    "officialName": "Republic of Senegal",
    "code": "SN",
    "alpha3Code": "SEN",
    "capital": "Dakar",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 16743927,
    "area": 196722,
    "currency": "XOF",
    "currencyName": "West African CFA franc",
    "currencySymbol": "Fr",
    "languages": [
      "French"
    ],
    "flag": "🇸🇳",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/sn.svg",
    "callingCode": "+221",
    "borders": [
      "GMB",
      "GIN",
      "GNB",
      "MLI",
      "MRT"
    ],
    "latlng": [
      14,
      -14
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".sn"
    ]
  },
  {
    "name": "Serbia",
    "officialName": "Republic of Serbia",
    "code": "RS",
    "alpha3Code": "SRB",
    "capital": "Belgrade",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 8737371,
    "area": 88361,
    "currency": "RSD",
    "currencyName": "Serbian dinar",
    "currencySymbol": "дин.",
    "languages": [
      "Serbian"
    ],
    "flag": "🇷🇸",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/rs.svg",
    "callingCode": "+381",
    "borders": [
      "BIH",
      "BGR",
      "HRV",
      "HUN",
      "UNK",
      "MKD",
      "MNE",
      "ROU"
    ],
    "latlng": [
      44,
      21
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".rs",
      ".срб"
    ]
  },
  {
    "name": "Seychelles",
    "officialName": "Republic of Seychelles",
    "code": "SC",
    "alpha3Code": "SYC",
    "capital": "Victoria",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 98347,
    "area": 452,
    "currency": "SCR",
    "currencyName": "Seychellois rupee",
    "currencySymbol": "₨",
    "languages": [
      "French",
      "English"
    ],
    "flag": "🇸🇨",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/sc.svg",
    "callingCode": "+248",
    "borders": [],
    "latlng": [
      -4.58333333,
      55.66666666
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".sc"
    ]
  },
  {
    "name": "Sierra Leone",
    "officialName": "Republic of Sierra Leone",
    "code": "SL",
    "alpha3Code": "SLE",
    "capital": "Freetown",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 7976983,
    "area": 71740,
    "currency": "SLL",
    "currencyName": "Sierra Leonean leone",
    "currencySymbol": "Le",
    "languages": [
      "English"
    ],
    "flag": "🇸🇱",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/sl.svg",
    "callingCode": "+232",
    "borders": [
      "GIN",
      "LBR"
    ],
    "latlng": [
      8.5,
      -11.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".sl"
    ]
  },
  {
    "name": "Singapore",
    "officialName": "Republic of Singapore",
    "code": "SG",
    "alpha3Code": "SGP",
    "capital": "Singapore",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 5850342,
    "area": 710,
    "currency": "SGD",
    "currencyName": "Singapore dollar",
    "currencySymbol": "$",
    "languages": [
      "English",
      "Malay",
      "Chinese",
      "Tamil"
    ],
    "flag": "🇸🇬",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/sg.svg",
    "callingCode": "+65",
    "borders": [],
    "latlng": [
      1.36666666,
      103.8
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".sg",
      ".新加坡",
      ".சிங்கப்பூர்"
    ]
  },
  {
    "name": "Slovakia",
    "officialName": "Slovak Republic",
    "code": "SK",
    "alpha3Code": "SVK",
    "capital": "Bratislava",
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 5459642,
    "area": 49037,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Slovak"
    ],
    "flag": "🇸🇰",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/sk.svg",
    "callingCode": "+421",
    "borders": [
      "AUT",
      "CZE",
      "HUN",
      "POL",
      "UKR"
    ],
    "latlng": [
      48.66666666,
      19.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".sk"
    ]
  },
  {
    "name": "Slovenia",
    "officialName": "Republic of Slovenia",
    "code": "SI",
    "alpha3Code": "SVN",
    "capital": "Ljubljana",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 2078938,
    "area": 20273,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Slovenian"
    ],
    "flag": "🇸🇮",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/si.svg",
    "callingCode": "+386",
    "borders": [
      "AUT",
      "HRV",
      "ITA",
      "HUN"
    ],
    "latlng": [
      46.11666666,
      14.81666666
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".si"
    ]
  },
  {
    "name": "Solomon Islands",
    "officialName": "Solomon Islands",
    "code": "SB",
    "alpha3Code": "SLB",
    "capital": "Honiara",
    "region": "Oceania",
    "subregion": "Melanesia",
    "population": 686884,
    "area": 28896,
    "currency": "SBD",
    "currencyName": "Solomon Islands dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇸🇧",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/sb.svg",
    "callingCode": "+677",
    "borders": [],
    "latlng": [
      -8,
      159
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".sb"
    ]
  },
  {
    "name": "Somalia",
    "officialName": "Federal Republic of Somalia",
    "code": "SO",
    "alpha3Code": "SOM",
    "capital": "Mogadishu",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 15893222,
    "area": 637657,
    "currency": "SOS",
    "currencyName": "Somali shilling",
    "currencySymbol": "Sh",
    "languages": [
      "Somali",
      "Arabic"
    ],
    "flag": "🇸🇴",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/so.svg",
    "callingCode": "+252",
    "borders": [
      "DJI",
      "ETH",
      "KEN"
    ],
    "latlng": [
      10,
      49
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".so"
    ]
  },
  {
    "name": "South Africa",
    "officialName": "Republic of South Africa",
    "code": "ZA",
    "alpha3Code": "ZAF",
    "capital": "Pretoria",
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 59308690,
    "area": 1221037,
    "currency": "ZAR",
    "currencyName": "South African rand",
    "currencySymbol": "R",
    "languages": [
      "English",
      "Afrikaans",
      "Zulu"
    ],
    "flag": "🇿🇦",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/za.svg",
    "callingCode": "+27",
    "borders": [
      "BWA",
      "LSO",
      "MOZ",
      "NAM",
      "SWZ",
      "ZWE"
    ],
    "latlng": [
      -29,
      24
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".za"
    ]
  },
  {
    "name": "South Korea",
    "officialName": "Republic of Korea",
    "code": "KR",
    "alpha3Code": "KOR",
    "capital": "Seoul",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 51269185,
    "area": 100210,
    "currency": "KRW",
    "currencyName": "South Korean won",
    "currencySymbol": "₩",
    "languages": [
      "Korean"
    ],
    "flag": "🇰🇷",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/kr.svg",
    "callingCode": "+82",
    "borders": [
      "PRK"
    ],
    "latlng": [
      37,
      127.5
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".kr",
      ".한국"
    ]
  },
  {
    "name": "South Sudan",
    "officialName": "Republic of South Sudan",
    "code": "SS",
    "alpha3Code": "SSD",
    "capital": "Juba",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 11193725,
    "area": 619745,
    "currency": "SSP",
    "currencyName": "South Sudanese pound",
    "currencySymbol": "£",
    "languages": [
      "English"
    ],
    "flag": "🇸🇸",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ss.svg",
    "callingCode": "+211",
    "borders": [
      "CAF",
      "COD",
      "ETH",
      "KEN",
      "SDN",
      "UGA"
    ],
    "latlng": [
      7,
      30
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ss"
    ]
  },
  {
    "name": "Spain",
    "officialName": "Kingdom of Spain",
    "code": "ES",
    "alpha3Code": "ESP",
    "capital": "Madrid",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 46754778,
    "area": 505992,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Spanish"
    ],
    "flag": "🇪🇸",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/es.svg",
    "callingCode": "+34",
    "borders": [
      "AND",
      "FRA",
      "GIB",
      "PRT",
      "MAR"
    ],
    "latlng": [
      40,
      -4
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".es"
    ]
  },
  {
    "name": "Sri Lanka",
    "officialName": "Democratic Socialist Republic of Sri Lanka",
    "code": "LK",
    "alpha3Code": "LKA",
    "capital": "Sri Jayawardenepura Kotte",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 21413249,
    "area": 65610,
    "currency": "LKR",
    "currencyName": "Sri Lankan rupee",
    "currencySymbol": "Rs රු",
    "languages": [
      "Sinhala",
      "Tamil"
    ],
    "flag": "🇱🇰",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/lk.svg",
    "callingCode": "+94",
    "borders": [
      "IND"
    ],
    "latlng": [
      7,
      81
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".lk",
      ".இலங்கை",
      ".ලංකා"
    ]
  },
  {
    "name": "Sudan",
    "officialName": "Republic of the Sudan",
    "code": "SD",
    "alpha3Code": "SDN",
    "capital": "Khartoum",
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 43849260,
    "area": 1886068,
    "currency": "SDG",
    "currencyName": "Sudanese pound",
    "currencySymbol": "PT",
    "languages": [
      "Arabic",
      "English"
    ],
    "flag": "🇸🇩",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/sd.svg",
    "callingCode": "+249",
    "borders": [
      "CAF",
      "TCD",
      "EGY",
      "ERI",
      "ETH",
      "LBY",
      "SSD"
    ],
    "latlng": [
      15,
      30
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".sd"
    ]
  },
  {
    "name": "Suriname",
    "officialName": "Republic of Suriname",
    "code": "SR",
    "alpha3Code": "SUR",
    "capital": "Paramaribo",
    "region": "Americas",
    "subregion": "South America",
    "population": 586632,
    "area": 163820,
    "currency": "SRD",
    "currencyName": "Surinamese dollar",
    "currencySymbol": "$",
    "languages": [
      "Dutch"
    ],
    "flag": "🇸🇷",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/sr.svg",
    "callingCode": "+597",
    "borders": [
      "BRA",
      "GUF",
      "GUY"
    ],
    "latlng": [
      4,
      -56
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".sr"
    ]
  },
  {
    "name": "Sweden",
    "officialName": "Kingdom of Sweden",
    "code": "SE",
    "alpha3Code": "SWE",
    "capital": "Stockholm",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 10099265,
    "area": 450295,
    "currency": "SEK",
    "currencyName": "Swedish krona",
    "currencySymbol": "kr",
    "languages": [
      "Swedish"
    ],
    "flag": "🇸🇪",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/se.svg",
    "callingCode": "+46",
    "borders": [
      "FIN",
      "NOR"
    ],
    "latlng": [
      62,
      15
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".se"
    ]
  },
  {
    "name": "Switzerland",
    "officialName": "Swiss Confederation",
    "code": "CH",
    "alpha3Code": "CHE",
    "capital": "Bern",
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 8654622,
    "area": 41284,
    "currency": "CHF",
    "currencyName": "Swiss franc",
    "currencySymbol": "Fr.",
    "languages": [
      "German",
      "French",
      "Italian"
    ],
    "flag": "🇨🇭",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ch.svg",
    "callingCode": "+41",
    "borders": [
      "AUT",
      "FRA",
      "ITA",
      "LIE",
      "DEU"
    ],
    "latlng": [
      47,
      8
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ch"
    ]
  },
  {
    "name": "Syria",
    "officialName": "Syrian Arab Republic",
    "code": "SY",
    "alpha3Code": "SYR",
    "capital": "Damascus",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 17500658,
    "area": 185180,
    "currency": "SYP",
    "currencyName": "Syrian pound",
    "currencySymbol": "£",
    "languages": [
      "Arabic"
    ],
    "flag": "🇸🇾",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/sy.svg",
    "callingCode": "+963",
    "borders": [
      "IRQ",
      "ISR",
      "JOR",
      "LBN",
      "TUR"
    ],
    "latlng": [
      35,
      38
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".sy",
      "سوريا."
    ]
  },
  {
    "name": "Taiwan",
    "officialName": "Republic of China (Taiwan)",
    "code": "TW",
    "alpha3Code": "TWN",
    "capital": "Taipei",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 23816775,
    "area": 36193,
    "currency": "TWD",
    "currencyName": "New Taiwan dollar",
    "currencySymbol": "$",
    "languages": [
      "Chinese"
    ],
    "flag": "🇹🇼",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/tw.svg",
    "callingCode": "+886",
    "borders": [],
    "latlng": [
      23.5,
      121
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".tw",
      ".台灣",
      ".台湾"
    ]
  },
  {
    "name": "Tajikistan",
    "officialName": "Republic of Tajikistan",
    "code": "TJ",
    "alpha3Code": "TJK",
    "capital": "Dushanbe",
    "region": "Asia",
    "subregion": "Central Asia",
    "population": 9537645,
    "area": 143100,
    "currency": "TJS",
    "currencyName": "Tajikistani somoni",
    "currencySymbol": "ЅМ",
    "languages": [
      "Tajik"
    ],
    "flag": "🇹🇯",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/tj.svg",
    "callingCode": "+992",
    "borders": [
      "AFG",
      "CHN",
      "KGZ",
      "UZB"
    ],
    "latlng": [
      39,
      71
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".tj"
    ]
  },
  {
    "name": "Tanzania",
    "officialName": "United Republic of Tanzania",
    "code": "TZ",
    "alpha3Code": "TZA",
    "capital": "Dodoma",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 59734218,
    "area": 945087,
    "currency": "TZS",
    "currencyName": "Tanzanian shilling",
    "currencySymbol": "Sh",
    "languages": [
      "Swahili",
      "English"
    ],
    "flag": "🇹🇿",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/tz.svg",
    "callingCode": "+255",
    "borders": [
      "BDI",
      "COD",
      "KEN",
      "MWI",
      "MOZ",
      "RWA",
      "UGA",
      "ZMB"
    ],
    "latlng": [
      -6,
      35
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".tz"
    ]
  },
  {
    "name": "Thailand",
    "officialName": "Kingdom of Thailand",
    "code": "TH",
    "alpha3Code": "THA",
    "capital": "Bangkok",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 69799978,
    "area": 513120,
    "currency": "THB",
    "currencyName": "Thai baht",
    "currencySymbol": "฿",
    "languages": [
      "Thai"
    ],
    "flag": "🇹🇭",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/th.svg",
    "callingCode": "+66",
    "borders": [
      "MMR",
      "KHM",
      "LAO",
      "MYS"
    ],
    "latlng": [
      15,
      100
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".th",
      ".ไทย"
    ]
  },
  {
    "name": "Togo",
    "officialName": "Togolese Republic",
    "code": "TG",
    "alpha3Code": "TGO",
    "capital": "Lomé",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 8278724,
    "area": 56785,
    "currency": "XOF",
    "currencyName": "West African CFA franc",
    "currencySymbol": "Fr",
    "languages": [
      "French"
    ],
    "flag": "🇹🇬",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/tg.svg",
    "callingCode": "+228",
    "borders": [
      "BEN",
      "BFA",
      "GHA"
    ],
    "latlng": [
      8,
      1.16666666
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".tg"
    ]
  },
  {
    "name": "Tonga",
    "officialName": "Kingdom of Tonga",
    "code": "TO",
    "alpha3Code": "TON",
    "capital": "Nuku'alofa",
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 105695,
    "area": 747,
    "currency": "TOP",
    "currencyName": "Tongan paʻanga",
    "currencySymbol": "T$",
    "languages": [
      "English",
      "Tongan"
    ],
    "flag": "🇹🇴",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/to.svg",
    "callingCode": "+676",
    "borders": [],
    "latlng": [
      -20,
      -175
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".to"
    ]
  },
  {
    "name": "Trinidad and Tobago",
    "officialName": "Republic of Trinidad and Tobago",
    "code": "TT",
    "alpha3Code": "TTO",
    "capital": "Port of Spain",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 1399488,
    "area": 5130,
    "currency": "TTD",
    "currencyName": "Trinidad and Tobago dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇹🇹",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/tt.svg",
    "callingCode": "+1868",
    "borders": [],
    "latlng": [
      11,
      -61
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".tt"
    ]
  },
  {
    "name": "Tunisia",
    "officialName": "Tunisian Republic",
    "code": "TN",
    "alpha3Code": "TUN",
    "capital": "Tunis",
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 11818619,
    "area": 163610,
    "currency": "TND",
    "currencyName": "Tunisian dinar",
    "currencySymbol": "د.ت",
    "languages": [
      "Arabic"
    ],
    "flag": "🇹🇳",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/tn.svg",
    "callingCode": "+216",
    "borders": [
      "DZA",
      "LBY"
    ],
    "latlng": [
      34,
      9
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".tn"
    ]
  },
  {
    "name": "Turkey",
    "officialName": "Republic of Türkiye",
    "code": "TR",
    "alpha3Code": "TUR",
    "capital": "Ankara",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 84339067,
    "area": 783562,
    "currency": "TRY",
    "currencyName": "Turkish lira",
    "currencySymbol": "₺",
    "languages": [
      "Turkish"
    ],
    "flag": "🇹🇷",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/tr.svg",
    "callingCode": "+90",
    "borders": [
      "ARM",
      "AZE",
      "BGR",
      "GEO",
      "GRC",
      "IRN",
      "IRQ",
      "SYR"
    ],
    "latlng": [
      39,
      35
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".tr"
    ]
  },
  {
    "name": "Turkmenistan",
    "officialName": "Turkmenistan",
    "code": "TM",
    "alpha3Code": "TKM",
    "capital": "Ashgabat",
    "region": "Asia",
    "subregion": "Central Asia",
    "population": 6031200,
    "area": 488100,
    "currency": "TMT",
    "currencyName": "Turkmenistan manat",
    "currencySymbol": "m",
    "languages": [
      "Turkmen"
    ],
    "flag": "🇹🇲",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/tm.svg",
    "callingCode": "+993",
    "borders": [
      "AFG",
      "IRN",
      "KAZ",
      "UZB"
    ],
    "latlng": [
      40,
      60
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".tm"
    ]
  },
  {
    "name": "Tuvalu",
    "officialName": "Tuvalu",
    "code": "TV",
    "alpha3Code": "TUV",
    "capital": "Funafuti",
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 11792,
    "area": 26,
    "currency": "AUD",
    "currencyName": "Australian dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇹🇻",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/tv.svg",
    "callingCode": "+688",
    "borders": [],
    "latlng": [
      -8,
      178
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".tv"
    ]
  },
  {
    "name": "Uganda",
    "officialName": "Republic of Uganda",
    "code": "UG",
    "alpha3Code": "UGA",
    "capital": "Kampala",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 45741007,
    "area": 241550,
    "currency": "UGX",
    "currencyName": "Ugandan shilling",
    "currencySymbol": "Sh",
    "languages": [
      "English",
      "Swahili"
    ],
    "flag": "🇺🇬",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ug.svg",
    "callingCode": "+256",
    "borders": [
      "COD",
      "KEN",
      "RWA",
      "SSD",
      "TZA"
    ],
    "latlng": [
      1,
      32
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ug"
    ]
  },
  {
    "name": "Ukraine",
    "officialName": "Ukraine",
    "code": "UA",
    "alpha3Code": "UKR",
    "capital": "Kyiv",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 43733762,
    "area": 603500,
    "currency": "UAH",
    "currencyName": "Ukrainian hryvnia",
    "currencySymbol": "₴",
    "languages": [
      "Ukrainian"
    ],
    "flag": "🇺🇦",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ua.svg",
    "callingCode": "+380",
    "borders": [
      "BLR",
      "HUN",
      "MDA",
      "POL",
      "ROU",
      "RUS",
      "SVK"
    ],
    "latlng": [
      49,
      32
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ua",
      ".укр"
    ]
  },
  {
    "name": "United Arab Emirates",
    "officialName": "United Arab Emirates",
    "code": "AE",
    "alpha3Code": "ARE",
    "capital": "Abu Dhabi",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 9890402,
    "area": 83600,
    "currency": "AED",
    "currencyName": "United Arab Emirates dirham",
    "currencySymbol": "د.إ",
    "languages": [
      "Arabic"
    ],
    "flag": "🇦🇪",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ae.svg",
    "callingCode": "+971",
    "borders": [
      "OMN",
      "SAU"
    ],
    "latlng": [
      24,
      54
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ae",
      "امارات."
    ]
  },
  {
    "name": "United Kingdom",
    "officialName": "United Kingdom of Great Britain and Northern Ireland",
    "code": "GB",
    "alpha3Code": "GBR",
    "capital": "London",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 67886011,
    "area": 242900,
    "currency": "GBP",
    "currencyName": "British pound",
    "currencySymbol": "£",
    "languages": [
      "English"
    ],
    "flag": "🇬🇧",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gb.svg",
    "callingCode": "+44",
    "borders": [
      "IRL"
    ],
    "latlng": [
      54,
      -2
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".uk"
    ]
  },
  {
    "name": "United States",
    "officialName": "United States of America",
    "code": "US",
    "alpha3Code": "USA",
    "capital": "Washington, D.C.",
    "region": "Americas",
    "subregion": "Northern America",
    "population": 331002651,
    "area": 9372610,
    "currency": "USD",
    "currencyName": "United States dollar",
    "currencySymbol": "$",
    "languages": [
      "English"
    ],
    "flag": "🇺🇸",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/us.svg",
    "callingCode": "+1",
    "borders": [
      "CAN",
      "MEX"
    ],
    "latlng": [
      38,
      -97
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".us"
    ]
  },
  {
    "name": "Uruguay",
    "officialName": "Oriental Republic of Uruguay",
    "code": "UY",
    "alpha3Code": "URY",
    "capital": "Montevideo",
    "region": "Americas",
    "subregion": "South America",
    "population": 3473730,
    "area": 181034,
    "currency": "UYU",
    "currencyName": "Uruguayan peso",
    "currencySymbol": "$",
    "languages": [
      "Spanish"
    ],
    "flag": "🇺🇾",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/uy.svg",
    "callingCode": "+598",
    "borders": [
      "ARG",
      "BRA"
    ],
    "latlng": [
      -33,
      -56
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".uy"
    ]
  },
  {
    "name": "Uzbekistan",
    "officialName": "Republic of Uzbekistan",
    "code": "UZ",
    "alpha3Code": "UZB",
    "capital": "Tashkent",
    "region": "Asia",
    "subregion": "Central Asia",
    "population": 33469203,
    "area": 447400,
    "currency": "UZS",
    "currencyName": "Uzbekistani soʻm",
    "currencySymbol": "so'm",
    "languages": [
      "Uzbek"
    ],
    "flag": "🇺🇿",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/uz.svg",
    "callingCode": "+998",
    "borders": [
      "AFG",
      "KAZ",
      "KGZ",
      "TJK",
      "TKM"
    ],
    "latlng": [
      41,
      64
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".uz"
    ]
  },
  {
    "name": "Vanuatu",
    "officialName": "Republic of Vanuatu",
    "code": "VU",
    "alpha3Code": "VUT",
    "capital": "Port Vila",
    "region": "Oceania",
    "subregion": "Melanesia",
    "population": 307145,
    "area": 12189,
    "currency": "VUV",
    "currencyName": "Vanuatu vatu",
    "currencySymbol": "Vt",
    "languages": [
      "English",
      "French"
    ],
    "flag": "🇻🇺",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/vu.svg",
    "callingCode": "+678",
    "borders": [],
    "latlng": [
      -16,
      167
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".vu"
    ]
  },
  {
    "name": "Vatican City",
    "officialName": "Vatican City State",
    "code": "VA",
    "alpha3Code": "VAT",
    "capital": "Vatican City",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 801,
    "area": 0.44,
    "currency": "EUR",
    "currencyName": "Euro",
    "currencySymbol": "€",
    "languages": [
      "Latin",
      "Italian"
    ],
    "flag": "🇻🇦",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/va.svg",
    "callingCode": "+379",
    "borders": [
      "ITA"
    ],
    "latlng": [
      41.9,
      12.45
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".va"
    ]
  },
  {
    "name": "Venezuela",
    "officialName": "Bolivarian Republic of Venezuela",
    "code": "VE",
    "alpha3Code": "VEN",
    "capital": "Caracas",
    "region": "Americas",
    "subregion": "South America",
    "population": 28435940,
    "area": 916445,
    "currency": "VES",
    "currencyName": "Venezuelan bolívar soberano",
    "currencySymbol": "Bs.S.",
    "languages": [
      "Spanish"
    ],
    "flag": "🇻🇪",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ve.svg",
    "callingCode": "+58",
    "borders": [
      "BRA",
      "COL",
      "GUY"
    ],
    "latlng": [
      8,
      -66
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ve"
    ]
  },
  {
    "name": "Vietnam",
    "officialName": "Socialist Republic of Vietnam",
    "code": "VN",
    "alpha3Code": "VNM",
    "capital": "Hanoi",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 97338579,
    "area": 331212,
    "currency": "VND",
    "currencyName": "Vietnamese đồng",
    "currencySymbol": "₫",
    "languages": [
      "Vietnamese"
    ],
    "flag": "🇻🇳",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/vn.svg",
    "callingCode": "+84",
    "borders": [
      "KHM",
      "CHN",
      "LAO"
    ],
    "latlng": [
      16.16666666,
      107.83333333
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".vn"
    ]
  },
  {
    "name": "Yemen",
    "officialName": "Republic of Yemen",
    "code": "YE",
    "alpha3Code": "YEM",
    "capital": "Sana'a",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 29825964,
    "area": 527968,
    "currency": "YER",
    "currencyName": "Yemeni rial",
    "currencySymbol": "﷼",
    "languages": [
      "Arabic"
    ],
    "flag": "🇾🇪",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ye.svg",
    "callingCode": "+967",
    "borders": [
      "OMN",
      "SAU"
    ],
    "latlng": [
      15,
      48
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".ye"
    ]
  },
  {
    "name": "Zambia",
    "officialName": "Republic of Zambia",
    "code": "ZM",
    "alpha3Code": "ZMB",
    "capital": "Lusaka",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 18383955,
    "area": 752612,
    "currency": "ZMW",
    "currencyName": "Zambian kwacha",
    "currencySymbol": "ZK",
    "languages": [
      "English"
    ],
    "flag": "🇿🇲",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/zm.svg",
    "callingCode": "+260",
    "borders": [
      "AGO",
      "BWA",
      "COD",
      "MWI",
      "MOZ",
      "NAM",
      "TZA",
      "ZWE"
    ],
    "latlng": [
      -15,
      30
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".zm"
    ]
  },
  {
    "name": "Zimbabwe",
    "officialName": "Republic of Zimbabwe",
    "code": "ZW",
    "alpha3Code": "ZWE",
    "capital": "Harare",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 14862924,
    "area": 390757,
    "currency": "ZWL",
    "currencyName": "Botswana pula",
    "currencySymbol": "P",
    "languages": [
      "English"
    ],
    "flag": "🇿🇼",
    "flagSvg": "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/zw.svg",
    "callingCode": "+263",
    "borders": [
      "BWA",
      "MOZ",
      "ZAF",
      "ZMB"
    ],
    "latlng": [
      -20,
      30
    ],
    "timezones": [
      "UTC"
    ],
    "tld": [
      ".zw"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COUNTRIES_DATA };
}
