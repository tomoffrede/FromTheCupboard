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
// Shared ingredients (same `n` as above) carry state automatically.
// New dessert-only ingredients are simply not present in INGREDIENTS_RAW.

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
          { n: 'vegan yogurt',    defaultOn: false },
          { n: 'vegan cream',     defaultOn: false },
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
