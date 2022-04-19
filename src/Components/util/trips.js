import photos from "./photos";

const trips = [
  {
    id: 1,
    country: "Ísland",
    location: "Iceland",
    date: "August 2021",
    description: [
      [
        "As soon as my wife and I received our second jabs, we instantly booked flights to Iceland. We decided to drive across the country in a campervan, exploring at our own pace for 2 weeks.",
      ],

      [
        "We witnessed otherwordly scenes: from erupting volcanoes to iceberg beaches, impressive waterfalls, unique wildlife, steep mountains, immense fjords, and so much more.",
      ],

      ["2 weeks and 2.702 km later, we finished our long-awaited adventure."],
    ],
    photos: [
      [
        1,
        photos[12],
        "normal",
        "Daydreamer puffin on duty",
        "Dyrhólaey (Iceland)",
      ],
      [
        2,
        photos[13],
        "normal",
        "The fire that burns, the light that governs the heat",
        "Fagradalsfjall (Iceland)",
      ],
      [
        3,
        photos[6],
        "normal",
        "Mighty Hvalnes sends its regards",
        "Hvalnes (Iceland)",
      ],
      [
        4,
        photos[1],
        "special",
        "The rhymes of the mountain",
        "Kirkjufell (Iceland)",
      ],
      [5, photos[14], "normal", "Paradise lost", "Kirkjufell (Iceland)"],
      [
        6,
        photos[24],
        "normal",
        "I didn't know you could bend rocks like that",
        "Stuðlagil (Iceland)",
      ],
      [
        7,
        photos[11],
        "normal",
        "The feather river canyon",
        "Fjaðrárgljúfur (Iceland)",
      ],
      [8, photos[22], "special", "Icelandic lungs", "Ring road (Iceland)"],
      [9, photos[16], "normal", "A beautiful death", "Reynisfjara (Iceland)"],
      [
        10,
        photos[15],
        "normal",
        "Shadows of the dying sun",
        "Vík í Mýrdal (Iceland)",
      ],
      [11, photos[8], "normal", "Time stands still", "Jökulsarlón (Iceland)"],
      [
        12,
        photos[23],
        "special",
        "I'm headed for the stars, I'm leaving my house on Mars",
        "Ring road (Iceland)",
      ],
      [
        13,
        photos[0],
        "normal",
        "Twilight of the rainbow god",
        "Snæfellsnesvegur (Iceland)",
      ],
      [
        14,
        photos[3],
        "normal",
        "The waterfall of the gods",
        "Goðafoss (Iceland)",
      ],
      [
        15,
        photos[26],
        "normal",
        "May the force be with you",
        "Yoda cave (Iceland)",
      ],
    ],
  },
  {
    id: 2,
    country: "Sápmi",
    location: "Finnish Lapland",
    date: "October 2021",
    description: [
      [
        "One week roadtrip to hunt for the northern lights in the Finnish Lapland, inside the arctic circle.",
      ],

      [
        "There were tons of preparations from our side to make it happen. Picking the best location, specific dates, checking all forecasts, everything possible to increase the odds of success.",
      ],

      [
        "It all comes down to luck in the end. If you ever chased the northern lights, you know how cruel this factor can be.",
      ],
      [
        "But in the end, you only need to have luck once. And we did! The cosmos smiled at us.",
      ],
    ],
    photos: [
      [1, photos[32], "normal", "Cosmic hands", "Utsjoki (Finland)"],
      [2, photos[19], "normal", "Tornado of souls", "Utsjoki (Finland)"],
      [
        3,
        photos[18],
        "normal",
        "Our rainbow seems to be broken",
        "Utsjoki (Finland)",
      ],
      [4, photos[31], "special", "Primal darkness", "Utsjoki (Finland)"],
      [
        5,
        photos[35],
        "normal",
        "Being one with everything",
        "Utsjoki (Finland)",
      ],
      [6, photos[33], "normal", "The finite infinite", "Utsjoki (Finland)"],
      [7, photos[34], "normal", "Stream of consciousness", "Utsjoki (Finland)"],
    ],
  },
];

export default trips;
