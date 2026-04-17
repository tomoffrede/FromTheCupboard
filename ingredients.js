// ingredients.js — all ingredient data for From the Cupboard
// Each category has a `subcategories` array for visual grouping.
// The flat `items` array is derived from subcategories at the bottom of this file
// and is what the rest of the app uses — do not edit `items` directly.
//
// SHARED INGREDIENTS: items whose `n` string appears in both INGREDIENTS_RAW and
// DESSERT_INGREDIENTS_RAW share state automatically (state is keyed by name).

const INGREDIENTS_RAW = {
  pantry: {
    icon: '\uD83E\uDDC2',
    label: 'Pantry',
    persistAcrossSessions: true,
    subcategories: [
      {
        label: 'Basics',
        items: [
          { n: 'salt',            defaultOn: true  },
          { n: 'black pepper',    defaultOn: true  },
          { n: 'olive oil',       defaultOn: true  },
          { n: 'vegetable oil',   defaultOn: true  },
          { n: 'flour',           defaultOn: true  },
          { n: 'sugar',           defaultOn: true  },
          { n: 'vinegar',         defaultOn: true  },
          { n: 'sesame oil',      defaultOn: false },
        ]
      },
      {
        label: 'Condiments & sauces',
        items: [
          { n: 'soy sauce',         defaultOn: false },
          { n: 'miso',              defaultOn: false },
          { n: 'tahini',            defaultOn: false },
          { n: 'tomato paste',      defaultOn: false },
          { n: 'coconut milk',      defaultOn: false },
          { n: 'mustard',           defaultOn: false },
          { n: 'hot sauce',         defaultOn: false },
          { n: 'balsamic vinegar',  defaultOn: false },
        ]
      }
    ]
  },

  produce: {
    icon: '\uD83E\uDD66',
    label: 'Fresh produce',
    persistAcrossSessions: false,
    subcategories: [
      {
        label: 'Aromatics',
        items: [
          { n: 'yellow onion',  defaultOn: true  },
          { n: 'garlic',        defaultOn: true  },
          { n: 'red onion',     defaultOn: false },
          { n: 'ginger',        defaultOn: false },
          { n: 'leek',          defaultOn: false },
					{ n: 'spring onion',	defaultOn: false },
          { n: 'chili pepper',  defaultOn: false },
        ]
      },
      {
        label: 'Veg',
        items: [
          { n: 'tomatoes',      defaultOn: false },
          { n: 'bell pepper',   defaultOn: false },
          { n: 'zucchini',      defaultOn: false },
          { n: 'eggplant',      defaultOn: false },
          { n: 'mushrooms',     defaultOn: false },
          { n: 'carrots',       defaultOn: false },
          { n: 'potatoes',      defaultOn: false },
          { n: 'sweet potato',  defaultOn: false },
          { n: 'cucumber',      defaultOn: false },
          { n: 'avocado',       defaultOn: false },
          { n: 'corn',          defaultOn: false },
          { n: 'green beans',   defaultOn: false },
          { n: 'peas',          defaultOn: false },
          { n: 'asparagus',     defaultOn: false },
        ]
      },
      {
        label: 'Leaves & brassicas',
        items: [
          { n: 'spinach',       defaultOn: false },
          { n: 'kale',          defaultOn: false },
          { n: 'broccoli',      defaultOn: false },
          { n: 'cauliflower',   defaultOn: false },
          { n: 'cabbage',       defaultOn: false },
          { n: 'celery',        defaultOn: false },
        ]
      },
      {
        label: 'Citrus',
        items: [
          { n: 'lemon',  defaultOn: false },
          { n: 'lime',   defaultOn: false },
          { n: 'orange', defaultOn: false },
        ]
      }
    ]
  },

  flavor: {
    icon: '\uD83C\uDF36\uFE0F',
    label: 'Flavor',
    persistAcrossSessions: true,
    subcategories: [
      {
        label: 'Dried spices',
        items: [
          { n: 'paprika',           defaultOn: false },
          { n: 'smoked paprika',    defaultOn: false },
          { n: 'cumin',             defaultOn: false },
          { n: 'turmeric',          defaultOn: false },
          { n: 'coriander',         defaultOn: false },
          { n: 'chili flakes',      defaultOn: false },
          { n: 'bay leaves',        defaultOn: false },
          { n: 'cinnamon',          defaultOn: false },
          { n: 'cardamom',          defaultOn: false },
          { n: 'garam masala',      defaultOn: false },
          { n: 'fennel seeds',      defaultOn: false },
          { n: 'mustard seeds',     defaultOn: false },
          { n: 'nutritional yeast', defaultOn: false },
        ]
      },
      {
        label: 'Fresh herbs',
        items: [
          { n: 'basil',      defaultOn: false },
          { n: 'parsley',    defaultOn: false },
          { n: 'cilantro',   defaultOn: false },
          { n: 'mint',       defaultOn: false },
          { n: 'rosemary',   defaultOn: false },
          { n: 'thyme',      defaultOn: false },
          { n: 'dill',       defaultOn: false },
          { n: 'chives',     defaultOn: false },
          { n: 'oregano',    defaultOn: false },
          { n: 'sage',       defaultOn: false },
          { n: 'tarragon',   defaultOn: false },
        ]
      }
    ]
  },

  grains: {
    icon: '\uD83C\uDF3E',
    label: 'Grains & dry goods',
    persistAcrossSessions: true,
    subcategories: [
      {
        label: 'Grains',
        items: [
          { n: 'rice',     defaultOn: false },
          { n: 'pasta',    defaultOn: false },
          { n: 'bread',    defaultOn: false },
          { n: 'oats',     defaultOn: false },
          { n: 'quinoa',   defaultOn: false },
          { n: 'couscous', defaultOn: false },
          { n: 'bulgur',   defaultOn: false },
          { n: 'polenta',  defaultOn: false },
        ]
      },
      {
        label: 'Legumes & protein',
        items: [
          { n: 'lentils',       defaultOn: false },
          { n: 'chickpeas',     defaultOn: false },
          { n: 'black beans',   defaultOn: false },
          { n: 'white beans',   defaultOn: false },
          { n: 'kidney beans',  defaultOn: false },
          { n: 'tofu',          defaultOn: false },
          { n: 'tempeh',        defaultOn: false },
        ]
      },
      {
        label: 'Nuts & seeds',
        items: [
          { n: 'almonds',         defaultOn: false },
          { n: 'walnuts',         defaultOn: false },
          { n: 'cashews',         defaultOn: false },
          { n: 'peanuts',         defaultOn: false },
          { n: 'pine nuts',       defaultOn: false },
          { n: 'sesame seeds',    defaultOn: false },
          { n: 'sunflower seeds', defaultOn: false },
          { n: 'pumpkin seeds',   defaultOn: false },
          { n: 'flaxseeds',       defaultOn: false },
          { n: 'chia seeds',      defaultOn: false },
        ]
      }
    ]
  }
};

// ---------------------------------------------------------------------------
// DESSERT MODE
// ---------------------------------------------------------------------------

const DESSERT_INGREDIENTS_RAW = {
  baking: {
    icon: '\uD83C\uDF6C',
    label: 'Baking',
    persistAcrossSessions: true,
    subcategories: [
      {
        label: 'Dry basics',
        items: [
          { n: 'flour',           defaultOn: false },
          { n: 'sugar',           defaultOn: false },
          { n: 'brown sugar',     defaultOn: false },
          { n: 'icing sugar',     defaultOn: false },
          { n: 'baking powder',   defaultOn: false },
          { n: 'baking soda',     defaultOn: false },
          { n: 'salt',            defaultOn: false },
          { n: 'cornstarch',      defaultOn: false },
          { n: 'cocoa powder',    defaultOn: false },
          { n: 'dark chocolate',  defaultOn: false },
          { n: 'chocolate chips', defaultOn: false },
        ]
      },
      {
        label: 'Wet & fat',
        items: [
          { n: 'vegetable oil',   defaultOn: false },
          { n: 'coconut oil',     defaultOn: false },
          { n: 'vanilla extract', defaultOn: false },
          { n: 'maple syrup',     defaultOn: false },
          { n: 'agave',           defaultOn: false },
          { n: 'plant milk',      defaultOn: false },
          { n: 'coconut milk',    defaultOn: false },
          { n: '(veg) yogurt',    defaultOn: false },
          { n: '(veg) cream',     defaultOn: false },
          { n: 'apple cider vinegar', defaultOn: false },
        ]
      },
      {
        label: 'Spreads & pastes',
        items: [
          { n: 'peanut butter',   defaultOn: false },
          { n: 'almond butter',   defaultOn: false },
          { n: 'tahini',          defaultOn: false },
          { n: 'jam',             defaultOn: false },
          { n: 'date paste',      defaultOn: false },
        ]
      }
    ]
  },

  dfruit: {
    icon: '\uD83C\uDF53',
    label: 'Fruit',
    persistAcrossSessions: false,
    subcategories: [
      {
        label: 'Tropical & stone',
        items: [
          { n: 'banana',      defaultOn: false },
          { n: 'mango',       defaultOn: false },
          { n: 'peach',       defaultOn: false },
          { n: 'pear',        defaultOn: false },
          { n: 'apple',       defaultOn: false },
          { n: 'pineapple',   defaultOn: false },
          { n: 'dates',       defaultOn: false },
        ]
      },
      {
        label: 'Berries',
        items: [
          { n: 'strawberries',  defaultOn: false },
          { n: 'blueberries',   defaultOn: false },
          { n: 'raspberries',   defaultOn: false },
          { n: 'blackberries',  defaultOn: false },
        ]
      },
      {
        label: 'Citrus',
        items: [
          { n: 'lemon',   defaultOn: false },
          { n: 'lime',    defaultOn: false },
          { n: 'orange',  defaultOn: false },
        ]
      }
    ]
  },

  dflavor: {
    icon: '\uD83C\uDF6B',
    label: 'Flavor',
    persistAcrossSessions: true,
    subcategories: [
      {
        label: 'Spices & powders',
        items: [
          { n: 'cinnamon',        defaultOn: false },
          { n: 'cardamom',        defaultOn: false },
          { n: 'ginger powder',   defaultOn: false },
          { n: 'nutmeg',          defaultOn: false },
          { n: 'cloves',          defaultOn: false },
          { n: 'matcha',          defaultOn: false },
          { n: 'espresso powder', defaultOn: false },
          { n: 'turmeric',        defaultOn: false },
        ]
      },
      {
        label: 'Fresh & zesty',
        items: [
          { n: 'ginger',    defaultOn: false },
          { n: 'mint',      defaultOn: false },
          { n: 'lemon',     defaultOn: false },
          { n: 'orange',    defaultOn: false },
        ]
      }
    ]
  },

  dnuts: {
    icon: '\uD83E\uDD5C',
    label: 'Nuts & dry',
    persistAcrossSessions: true,
    subcategories: [
      {
        label: 'Nuts',
        items: [
          { n: 'almonds',   defaultOn: false },
          { n: 'walnuts',   defaultOn: false },
          { n: 'cashews',   defaultOn: false },
          { n: 'peanuts',   defaultOn: false },
          { n: 'pecans',    defaultOn: false },
          { n: 'hazelnuts', defaultOn: false },
          { n: 'pine nuts', defaultOn: false },
        ]
      },
      {
        label: 'Seeds & grains',
        items: [
          { n: 'oats',                defaultOn: false },
          { n: 'chia seeds',          defaultOn: false },
          { n: 'flaxseeds',           defaultOn: false },
          { n: 'sesame seeds',        defaultOn: false },
          { n: 'desiccated coconut',  defaultOn: false },
          { n: 'rice flour',          defaultOn: false },
          { n: 'ground almonds',      defaultOn: false },
        ]
      }
    ]
  }
};

// ---------------------------------------------------------------------------
// Derive flat items arrays
// ---------------------------------------------------------------------------

const INGREDIENTS = {};
Object.entries(INGREDIENTS_RAW).forEach(([id, cat]) => {
  INGREDIENTS[id] = {
    icon: cat.icon,
    label: cat.label,
    persistAcrossSessions: cat.persistAcrossSessions,
    subcategories: cat.subcategories,
    items: cat.subcategories.flatMap(sc => sc.items),
  };
});

const DESSERT_INGREDIENTS = {};
Object.entries(DESSERT_INGREDIENTS_RAW).forEach(([id, cat]) => {
  DESSERT_INGREDIENTS[id] = {
    icon: cat.icon,
    label: cat.label,
    persistAcrossSessions: cat.persistAcrossSessions,
    subcategories: cat.subcategories,
    items: cat.subcategories.flatMap(sc => sc.items),
  };
});

// ---------------------------------------------------------------------------
// Savory mood / cuisine lists
// ---------------------------------------------------------------------------

const FLAVORS = [
  'spicy', 'fresh & light', 'rich & hearty', 'smoky',
  'tangy', 'umami-rich', 'comforting', 'aromatic', 'sweet'
];

const CUISINES = [
  'italian', 'mexican', 'japanese', 'indian',
  'middle eastern', 'thai', 'korean', 'ethiopian',
  'greek', 'french', 'spanish', 'chinese'
];

// ---------------------------------------------------------------------------
// Dessert mood / style lists
// ---------------------------------------------------------------------------

const DESSERT_FLAVORS = [
  'chocolatey', 'fruity', 'nutty', 'creamy',
  'spiced', 'zesty', 'caramelized', 'light & fresh', 'indulgent'
];

const DESSERT_CUISINES = [
  'american', 'french', 'italian', 'japanese',
  'middle eastern', 'scandinavian', 'british', 'indian'
];

// ---------------------------------------------------------------------------
// TRANSLATIONS
// Keys are English ingredient names (the canonical `n` value).
// Category labels, subcategory labels, mood/cuisine chips, and all UI strings
// are in the TRANSLATIONS object below.
// ---------------------------------------------------------------------------

const INGREDIENT_TRANSLATIONS = {
  de: {
    // Pantry – Basics
    'salt': 'Salz',
    'black pepper': 'schwarzer Pfeffer',
    'olive oil': 'Oliven\u00f6l',
    'vegetable oil': 'Pflanzen\u00f6l',
    'flour': 'Mehl',
    'sugar': 'Zucker',
    'vinegar': 'Essig',
    'sesame oil': 'Sesamöl',
    // Pantry – Condiments
    'soy sauce': 'Sojas\u00f6e',
    'miso': 'Miso',
    'tahini': 'Tahini',
    'tomato paste': 'Tomatenmark',
    'coconut milk': 'Kokosmilch',
    'mustard': 'Senf',
    'hot sauce': 'scharfe So\u00dfe',
    'balsamic vinegar': 'Balsamico',
    // Produce – Aromatics
    'yellow onion': 'gelbe Zwiebel',
    'garlic': 'Knoblauch',
    'red onion': 'rote Zwiebel',
    'ginger': 'Ingwer',
    'leek': 'Lauch',
		'spring onion': 'Frühlingszwiebel',
    'chili pepper': 'Chilischote',
    // Produce – Veg
    'tomatoes': 'Tomaten',
    'bell pepper': 'Paprika',
    'zucchini': 'Zucchini',
    'eggplant': 'Aubergine',
    'mushrooms': 'Champignons',
    'carrots': 'Karotten',
    'potatoes': 'Kartoffeln',
    'sweet potato': 'S\u00fc\u00dfkartoffel',
    'cucumber': 'Gurke',
    'avocado': 'Avocado',
    'corn': 'Mais',
    'green beans': 'gr\u00fcne Bohnen',
    'peas': 'Erbsen',
    'asparagus': 'Spargel',
    // Produce – Leaves & brassicas
    'spinach': 'Spinat',
    'kale': 'Gr\u00fcnkohl',
    'broccoli': 'Brokkoli',
    'cauliflower': 'Blumenkohl',
    'cabbage': 'Kohl',
    'celery': 'Sellerie',
    // Produce – Citrus
    'lemon': 'Zitrone',
    'lime': 'Limette',
    'orange': 'Orange',
    // Flavor – Dried spices
    'paprika': 'Paprikapulver',
    'smoked paprika': 'ger\u00e4uchertes Paprikapulver',
    'cumin': 'Kr\u00e4uzelk\u00fcmmel',
    'turmeric': 'Kurkuma',
    'coriander': 'Koriander',
    'chili flakes': 'Chiliflocken',
    'bay leaves': 'Lorbeerbl\u00e4tter',
    'cinnamon': 'Zimt',
    'cardamom': 'Kardamom',
    'garam masala': 'Garam Masala',
    'fennel seeds': 'Fenchelsamen',
    'mustard seeds': 'Senfsamen',
    'nutritional yeast': 'Hefeflocken',
    // Flavor – Fresh herbs
    'basil': 'Basilikum',
    'parsley': 'Petersilie',
    'cilantro': 'Koriander (frisch)',
    'mint': 'Minze',
    'rosemary': 'Rosmarin',
    'thyme': 'Thymian',
    'dill': 'Dill',
    'chives': 'Schnittlauch',
    'oregano': 'Oregano',
    'sage': 'Salbei',
    'tarragon': 'Estragon',
    // Grains – Grains
    'rice': 'Reis',
    'pasta': 'Nudeln',
    'bread': 'Brot',
    'oats': 'Haferflocken',
    'quinoa': 'Quinoa',
    'couscous': 'Couscous',
    'bulgur': 'Bulgur',
    'polenta': 'Polenta',
    // Grains – Legumes
    'lentils': 'Linsen',
    'chickpeas': 'Kichererbsen',
    'black beans': 'schwarze Bohnen',
    'white beans': 'wei\u00dfe Bohnen',
    'kidney beans': 'Kidneybohnen',
    'tofu': 'Tofu',
    'tempeh': 'Tempeh',
    // Grains – Nuts & seeds
    'almonds': 'Mandeln',
    'walnuts': 'Waln\u00fcsse',
    'cashews': 'Cashews',
    'peanuts': 'Erdnüsse',
    'pine nuts': 'Pinienk\u00f6rner',
    'sesame seeds': 'Sesamsamen',
    'sunflower seeds': 'Sonnenblumenkerne',
    'pumpkin seeds': 'K\u00fcrbiskerne',
    'flaxseeds': 'Leinsamen',
    'chia seeds': 'Chiasamen',
    // Dessert – Baking dry
    'brown sugar': 'brauner Zucker',
    'icing sugar': 'Puderzucker',
    'baking powder': 'Backpulver',
    'baking soda': 'Natron',
    'cornstarch': 'St\u00e4rke',
    'cocoa powder': 'Kakaopulver',
    'dark chocolate': 'Zartbitterschokolade',
    'chocolate chips': 'Schokoladenst\u00fcckchen',
    // Dessert – Wet & fat
    'coconut oil': 'Kokos\u00f6l',
    'vanilla extract': 'Vanilleextrakt',
    'maple syrup': 'Ahornsirup',
    'agave': 'Agavendicksaft',
    'plant milk': 'Pflanzenmilch',
    '(veg) yogurt': '(veganer) Joghurt',
    '(veg) cream': '(vegane) Sahne',
    'apple cider vinegar': 'Apfelessig',
    // Dessert – Spreads
    'peanut butter': 'Erdn\u00fcssbutter',
    'almond butter': 'Mandelbutter',
    'jam': 'Marmelade',
    'date paste': 'Dattelpaste',
    // Dessert – Fruit
    'banana': 'Banane',
    'mango': 'Mango',
    'peach': 'Pfirsich',
    'pear': 'Birne',
    'apple': 'Apfel',
    'pineapple': 'Ananas',
    'dates': 'Datteln',
    'strawberries': 'Erdbeeren',
    'blueberries': 'Blaubeeren',
    'raspberries': 'Himbeeren',
    'blackberries': 'Brombeeren',
    // Dessert – Flavor spices
    'ginger powder': 'Ingwerpulver',
    'nutmeg': 'Muskatn\u00fcsse',
    'cloves': 'Nelken',
    'matcha': 'Matcha',
    'espresso powder': 'Espressopulver',
    // Dessert – Nuts & dry
    'pecans': 'Pekann\u00fcsse',
    'hazelnuts': 'Haseln\u00fcsse',
    'desiccated coconut': 'Kokosraspeln',
    'rice flour': 'Reismehl',
    'ground almonds': 'gemahlene Mandeln',
  },
  pt: {
    // Pantry – Basics
    'salt': 'sal',
    'black pepper': 'pimenta-preta',
    'olive oil': 'azeite',
    'vegetable oil': '\u00f3leo vegetal',
    'flour': 'farinha',
    'sugar': 'a\u00e7\u00facar',
    'vinegar': 'vinagre',
    'sesame oil': '\u00f3leo de gergelim',
    // Pantry – Condiments
    'soy sauce': 'molho de soja',
    'miso': 'miss\u00f4',
    'tahini': 'tahine',
    'tomato paste': 'extrato de tomate',
    'coconut milk': 'leite de coco',
    'mustard': 'mostarda',
    'hot sauce': 'molho picante',
    'balsamic vinegar': 'vinagre bals\u00e2mico',
    // Produce – Aromatics
    'yellow onion': 'cebola amarela',
    'garlic': 'alho',
    'red onion': 'cebola roxa',
    'ginger': 'gengibre',
    'leek': 'alho-por\u00f3',
		'spring onion': 'cebolinha',
    'chili pepper': 'pimenta chili',
    // Produce – Veg
    'tomatoes': 'tomates',
    'bell pepper': 'piment\u00e3o',
    'zucchini': 'abobrinha',
    'eggplant': 'berinjela',
    'mushrooms': 'cogumelos',
    'carrots': 'cenouras',
    'potatoes': 'batatas',
    'sweet potato': 'batata-doce',
    'cucumber': 'pepino',
    'avocado': 'abacate',
    'corn': 'milho',
    'green beans': 'vagem',
    'peas': 'ervilhas',
    'asparagus': 'aspargos',
    // Produce – Leaves & brassicas
    'spinach': 'espinafre',
    'kale': 'couve-manteiga',
    'broccoli': 'br\u00f3colis',
    'cauliflower': 'couve-flor',
    'cabbage': 'repolho',
    'celery': 'salsão',
    // Produce – Citrus
    'lemon': 'lim\u00e3o-siciliano',
    'lime': 'lim\u00e3o',
    'orange': 'laranja',
    // Flavor – Dried spices
    'paprika': 'p\u00e1prica',
    'smoked paprika': 'p\u00e1prica defumada',
    'cumin': 'cominho',
    'turmeric': 'c\u00farc\u00fama',
    'coriander': 'coentro (seco)',
    'chili flakes': 'pimenta vermelha em flocos',
    'bay leaves': 'folhas de louro',
    'cinnamon': 'canela',
    'cardamom': 'cardamomo',
    'garam masala': 'garam masala',
    'fennel seeds': 'sementes de erva-doce',
    'mustard seeds': 'sementes de mostarda',
    'nutritional yeast': 'levedura nutricional',
    // Flavor – Fresh herbs
    'basil': 'manjeric\u00e3o',
    'parsley': 'salsa',
    'cilantro': 'coentro (fresco)',
    'mint': 'hortel\u00e3',
    'rosemary': 'alecrim',
    'thyme': 'tomilho',
    'dill': 'endro',
    'chives': 'cebolinha',
    'oregano': 'or\u00e9gano',
    'sage': 's\u00e1lvia',
    'tarragon': 'estrag\u00e3o',
    // Grains – Grains
    'rice': 'arroz',
    'pasta': 'macarr\u00e3o',
    'bread': 'p\u00e3o',
    'oats': 'aveia',
    'quinoa': 'quinoa',
    'couscous': 'cuscuz',
    'bulgur': 'bulgur',
    'polenta': 'polenta',
    // Grains – Legumes
    'lentils': 'lentilhas',
    'chickpeas': 'gr\u00e3o-de-bico',
    'black beans': 'feij\u00e3o-preto',
    'white beans': 'feij\u00e3o-branco',
    'kidney beans': 'feij\u00e3o-vermelho',
    'tofu': 'tofu',
    'tempeh': 'tempeh',
    // Grains – Nuts & seeds
    'almonds': 'am\u00eandoas',
    'walnuts': 'nozes',
    'cashews': 'castanhas de caju',
    'peanuts': 'amendoim',
    'pine nuts': 'pinhões',
    'sesame seeds': 'gergelim',
    'sunflower seeds': 'sementes de girassol',
    'pumpkin seeds': 'sementes de ab\u00f3bora',
    'flaxseeds': 'linhaça',
    'chia seeds': 'sementes de chia',
    // Dessert – Baking dry
    'brown sugar': 'a\u00e7\u00facar mascavo',
    'icing sugar': 'a\u00e7\u00facar de confeiteiro',
    'baking powder': 'fermento em p\u00f3',
    'baking soda': 'bicarbonato de s\u00f3dio',
    'cornstarch': 'amido de milho',
    'cocoa powder': 'cacau em p\u00f3',
    'dark chocolate': 'chocolate amargo',
    'chocolate chips': 'gotas de chocolate',
    // Dessert – Wet & fat
    'coconut oil': '\u00f3leo de coco',
    'vanilla extract': 'extrato de baunilha',
    'maple syrup': 'xarope de bordo',
    'agave': 'agave',
    'plant milk': 'leite vegetal',
    '(veg) yogurt': 'iogurte (vegano)',
    '(veg) cream': 'creme (vegano)',
    'apple cider vinegar': 'vinagre de ma\u00e7\u00e3',
    // Dessert – Spreads
    'peanut butter': 'pasta de amendoim',
    'almond butter': 'pasta de am\u00eandoas',
    'jam': 'geleia',
    'date paste': 'pasta de t\u00e2maras',
    // Dessert – Fruit
    'banana': 'banana',
    'mango': 'manga',
    'peach': 'pêssego',
    'pear': 'pera',
    'apple': 'ma\u00e7\u00e3',
    'pineapple': 'abacaxi',
    'dates': 't\u00e2maras',
    'strawberries': 'morangos',
    'blueberries': 'mirtilo',
    'raspberries': 'framboesas',
    'blackberries': 'amoras',
    // Dessert – Flavor spices
    'ginger powder': 'gengibre em p\u00f3',
    'nutmeg': 'noz-moscada',
    'cloves': 'cravos',
    'matcha': 'matcha',
    'espresso powder': 'p\u00f3 de espresso',
    // Dessert – Nuts & dry
    'pecans': 'nozes-pec\u00e3',
    'hazelnuts': 'avel\u00e3s',
    'desiccated coconut': 'coco ralado',
    'rice flour': 'farinha de arroz',
    'ground almonds': 'am\u00eandoas mo\u00eddas',
  }
};

// Category and subcategory label translations
const CATEGORY_TRANSLATIONS = {
  de: {
    // Savory categories
    'Pantry': 'Vorratskammer',
    'Fresh produce': 'Frischware',
    'Flavor': 'Aromen',
    'Grains & dry goods': 'Getreide & Trockenwaren',
    // Dessert categories
    'Baking': 'Backen',
    'Fruit': 'Obst',
    'Nuts & dry': 'N\u00fcsse & Trockenes',
    // Subcategories
    'Basics': 'Grundzutaten',
    'Condiments & sauces': 'Saucen & Gew\u00fcrze',
    'Aromatics': 'Aromatik',
    'Veg': 'Gem\u00fcse',
    'Leaves & brassicas': 'Bl\u00e4tter & Kohl',
    'Citrus': 'Zitrusfr\u00fcchte',
    'Dried spices': 'Getrocknete Gew\u00fcrze',
    'Fresh herbs': 'Frische Kr\u00e4uter',
    'Grains': 'Getreide',
    'Legumes & protein': 'H\u00fclsenfr\u00fcchte & Protein',
    'Nuts & seeds': 'N\u00fcsse & Samen',
    'Dry basics': 'Trockengrundlagen',
    'Wet & fat': 'Fl\u00fcssiges & Fette',
    'Spreads & pastes': 'Aufstriche & Pasten',
    'Tropical & stone': 'Tropisch & Steinfr\u00fcchte',
    'Berries': 'Beeren',
    'Spices & powders': 'Gew\u00fcrze & Pulver',
    'Fresh & zesty': 'Frisch & Spritzig',
    'Nuts': 'N\u00fcsse',
    'Seeds & grains': 'Samen & Getreide',
  },
  pt: {
    'Pantry': 'Despensa',
    'Fresh produce': 'Hortali\u00e7as frescas',
    'Flavor': 'Aromas',
    'Grains & dry goods': 'Gr\u00e3os & secos',
    'Baking': 'Confeitaria',
    'Fruit': 'Frutas',
    'Nuts & dry': 'Castanhas & secos',
    'Basics': 'B\u00e1sicos',
    'Condiments & sauces': 'Temperos & molhos',
    'Aromatics': 'Arom\u00e1ticos',
    'Veg': 'Legumes',
    'Leaves & brassicas': 'Folhas & brassicas',
    'Citrus': 'C\u00edtricos',
    'Dried spices': 'Especiarias secas',
    'Fresh herbs': 'Ervas frescas',
    'Grains': 'Gr\u00e3os',
    'Legumes & protein': 'Leguminosas & prote\u00edna',
    'Nuts & seeds': 'Castanhas & sementes',
    'Dry basics': 'B\u00e1sicos secos',
    'Wet & fat': 'L\u00edquidos & gorduras',
    'Spreads & pastes': 'Pastas & cremes',
    'Tropical & stone': 'Tropical & car\u00f3\u00e7o',
    'Berries': 'Frutas vermelhas',
    'Spices & powders': 'Especiarias & p\u00f3s',
    'Fresh & zesty': 'Fresco & c\u00edtrico',
    'Nuts': 'Castanhas',
    'Seeds & grains': 'Sementes & gr\u00e3os',
  }
};

// Mood/cuisine chip translations
const CHIP_TRANSLATIONS = {
  de: {
    // Savory flavors
    'spicy': 'scharf',
    'fresh & light': 'frisch & leicht',
    'rich & hearty': 'kr\u00e4ftig & herzhaft',
    'smoky': 'rauchig',
    'tangy': 's\u00e4uerlich',
    'umami-rich': 'umami-reich',
    'comforting': 'wohltuend',
    'aromatic': 'aromatisch',
    'sweet': 's\u00fc\u00df',
    // Savory cuisines
    'italian': 'italienisch',
    'mexican': 'mexikanisch',
    'japanese': 'japanisch',
    'indian': 'indisch',
    'middle eastern': 'nahöstlich',
    'thai': 'thai',
    'korean': 'koreanisch',
    'ethiopian': '\u00e4thiopisch',
    'greek': 'griechisch',
    'french': 'franz\u00f6sisch',
    'spanish': 'spanisch',
    'chinese': 'chinesisch',
    // Dessert flavors
    'chocolatey': 'schokoladig',
    'fruity': 'fruchtig',
    'nutty': 'nussig',
    'creamy': 'cremig',
    'spiced': 'gew\u00fcrzt',
    'zesty': 'spritzig',
    'caramelized': 'karamellisiert',
    'light & fresh': 'leicht & frisch',
    'indulgent': 'dekadent',
    // Dessert styles
    'american': 'amerikanisch',
    'scandinavian': 'skandinavisch',
    'british': 'britisch',
    // Meal contexts
    'full meal': 'vollst\u00e4ndige Mahlzeit',
    'side dish': 'Beilage',
    'starter': 'Vorspeise',
    'snack': 'Snack',
    'finger food': 'Fingerfood',
  },
  pt: {
    'spicy': 'picante',
    'fresh & light': 'fresco & leve',
    'rich & hearty': 'encorpado & robusto',
    'smoky': 'defumado',
    'tangy': '\u00e1cido',
    'umami-rich': 'rico em umami',
    'comforting': 'reconfortante',
    'aromatic': 'arom\u00e1tico',
    'sweet': 'doce',
    'italian': 'italiano',
    'mexican': 'mexicano',
    'japanese': 'japon\u00eas',
    'indian': 'indiano',
    'middle eastern': 'do Oriente M\u00e9dio',
    'thai': 'tail\u00e2ndes',
    'korean': 'coreano',
    'ethiopian': 'eti\u00f3pico',
    'greek': 'grego',
    'french': 'franc\u00eas',
    'spanish': 'espanhol',
    'chinese': 'chin\u00eas',
    'chocolatey': 'chocolatado',
    'fruity': 'frutado',
    'nutty': 'amadeirado',
    'creamy': 'cremoso',
    'spiced': 'condimentado',
    'zesty': 'c\u00edtrico',
    'caramelized': 'caramelizado',
    'light & fresh': 'leve & fresco',
    'indulgent': 'indulgente',
    'american': 'americano',
    'scandinavian': 'escandinavo',
    'british': 'brit\u00e2nico',
    'full meal': 'refeição completa',
    'side dish': 'acompanhamento',
    'starter': 'entrada',
    'snack': 'lanche',
    'finger food': 'petisco',
  }
};

// UI string translations (everything that is not an ingredient/chip)
const UI_TRANSLATIONS = {
  en: {
    subtitle: 'What\u2019s in your kitchen?',
    searchPlaceholder: 'Search or add an ingredient\u2026',
    lookingFor: 'I\u2019m looking for',
    hintText: 'Tap once to mark as <em>available</em> &nbsp;&middot;&nbsp; Tap again to mark as <strong>must use</strong> &nbsp;&middot;&nbsp; Tap again to remove',
    resetBtn: 'Reset to defaults',
    expandMore: 'show more',
    expandLess: 'show less',
    addedIngredients: 'Added ingredients',
    moreOptions: 'More options',
    extraPlaceholder: 'Any extra requirements?',
    flavorMoodTitle: 'Flavor mood',
    cuisineTitle: 'Cuisine',
    dessertCuisineTitle: 'Style',
    findBtn: 'Find recipe ideas \u00a0\u2192',
    loadingRummaging: 'Rummaging the cupboard\u2026',
    loadingBrewing: 'Brewing\u2026',
    backToIdeas: 'Back to ideas',
    changeIngredients: 'Change ingredients',
    getFullRecipe: 'Get full recipe',
    searchOnline: 'Search online \u2197',
    copyRecipe: '\uD83D\uDCCB Copy recipe',
    copied: '\u2713 Copied!',
    copyFailed: 'Copy failed',
    copyFooter: 'Generated by From the Cupboard \u2014 https://tomoffride.github.io/FromTheCupboard/',
    ingredientsLabel: 'Ingredients',
    methodLabel: 'Method',
    checklistHint: '\u2610 Tap any item to check it off as you cook',
    errorNoResponse: 'The AI didn\u2019t respond.<span class="error-sub">Please try again.</span>',
    addCustomPrefix: '+ Add \u201c',
    addCustomSuffix: '\u201d',
    colCountSuffix: ' selected',
    savoryBtn: 'savory',
    dessertBtn: 'dessert',
    footerAbout: 'About',
    footerImpressum: 'Impressum',
    footerDatenschutz: 'Datenschutz / Privacy',
    addedSubcatLabel: 'added',
  },
  de: {
    subtitle: 'Was ist in deiner K\u00fcche?',
    searchPlaceholder: 'Zutat suchen oder hinzuf\u00fcgen\u2026',
    lookingFor: 'Ich suche nach',
    hintText: 'Einmal tippen = <em>vorhanden</em> &nbsp;&middot;&nbsp; Nochmal = <strong>muss rein</strong> &nbsp;&middot;&nbsp; Nochmal = entfernen',
    resetBtn: 'Zur\u00fccksetzen',
    expandMore: 'mehr anzeigen',
    expandLess: 'weniger anzeigen',
    addedIngredients: 'Hinzugef\u00fcgte Zutaten',
    moreOptions: 'Weitere Optionen',
    extraPlaceholder: 'Besondere W\u00fcnsche?',
    flavorMoodTitle: 'Geschmacksrichtung',
    cuisineTitle: 'K\u00fcche',
    dessertCuisineTitle: 'Stil',
    findBtn: 'Rezeptideen finden \u00a0\u2192',
    loadingRummaging: 'Im Vorratsschrank kr\u00e4men\u2026',
    loadingBrewing: 'Wird zubereitet\u2026',
    backToIdeas: 'Zur\u00fcck zu den Ideen',
    changeIngredients: 'Zutaten \u00e4ndern',
    getFullRecipe: 'Vollst\u00e4ndiges Rezept',
    searchOnline: 'Online suchen \u2197',
    copyRecipe: '\uD83D\uDCCB Rezept kopieren',
    copied: '\u2713 Kopiert!',
    copyFailed: 'Kopieren fehlgeschlagen',
    copyFooter: 'Generiert von From the Cupboard \u2014 https://tomoffride.github.io/FromTheCupboard/',
    ingredientsLabel: 'Zutaten',
    methodLabel: 'Zubereitung',
    checklistHint: '\u2610 Tippe auf einen Punkt, um ihn beim Kochen abzuhaken',
    errorNoResponse: 'Die KI hat nicht geantwortet.<span class="error-sub">Bitte versuche es erneut.</span>',
    addCustomPrefix: '+ \u201e',
    addCustomSuffix: '\u201c hinzuf\u00fcgen',
    colCountSuffix: ' ausgew\u00e4hlt',
    savoryBtn: 'herzhaft',
    dessertBtn: 'S\u00fc\u00dfes',
    footerAbout: '\u00dcber',
    footerImpressum: 'Impressum',
    footerDatenschutz: 'Datenschutz',
    addedSubcatLabel: 'hinzugef\u00fcgt',
  },
  pt: {
    subtitle: 'O que tem na sua cozinha?',
    searchPlaceholder: 'Buscar ou adicionar ingrediente\u2026',
    lookingFor: 'Estou procurando',
    hintText: 'Um toque = <em>dispon\u00edvel</em> &nbsp;&middot;&nbsp; Outro toque = <strong>usar obrigatoriamente</strong> &nbsp;&middot;&nbsp; Outro = remover',
    resetBtn: 'Redefinir',
    expandMore: 'mostrar mais',
    expandLess: 'mostrar menos',
    addedIngredients: 'Ingredientes adicionados',
    moreOptions: 'Mais op\u00e7\u00f5es',
    extraPlaceholder: 'Algum requisito extra?',
    flavorMoodTitle: 'Sabor',
    cuisineTitle: 'Culin\u00e1ria',
    dessertCuisineTitle: 'Estilo',
    findBtn: 'Encontrar receitas \u00a0\u2192',
    loadingRummaging: 'Vasculhando a despensa\u2026',
    loadingBrewing: 'Preparando\u2026',
    backToIdeas: 'Voltar \u00e0s ideias',
    changeIngredients: 'Mudar ingredientes',
    getFullRecipe: 'Receita completa',
    searchOnline: 'Buscar online \u2197',
    copyRecipe: '\uD83D\uDCCB Copiar receita',
    copied: '\u2713 Copiado!',
    copyFailed: 'Falha ao copiar',
    copyFooter: 'Gerado por From the Cupboard \u2014 https://tomoffride.github.io/FromTheCupboard/',
    ingredientsLabel: 'Ingredientes',
    methodLabel: 'Modo de preparo',
    checklistHint: '\u2610 Toque em qualquer item para marc\u00e1-lo durante o preparo',
    errorNoResponse: 'A IA n\u00e3o respondeu.<span class="error-sub">Por favor, tente novamente.</span>',
    addCustomPrefix: '+ Adicionar \u201c',
    addCustomSuffix: '\u201d',
    colCountSuffix: ' selecionado(s)',
    savoryBtn: 'salgado',
    dessertBtn: 'doce',
    footerAbout: 'Sobre',
    footerImpressum: 'Impressum',
    footerDatenschutz: 'Privacidade',
    addedSubcatLabel: 'adicionado',
  }
};
