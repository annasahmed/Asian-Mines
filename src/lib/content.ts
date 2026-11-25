export const products = [
  {
    index: "AM-01",
    title: "Lumpy chrome ore",
    kicker: "Metallurgical",
    imageBase: "/media/products/chrome ore lumpy",
    alt: "Lumpy chrome ore from Muslim Bagh, prepared by Asian Mines and Minerals",
    variant: 0,
    summary:
      "Larger pieces for furnaces that want a sized rock rather than a fine.",
  },
  {
    index: "AM-02",
    title: "Concentrates",
    kicker: "Beneficiated",
    imageBase: "/media/products/chrome ore concentrate",
    alt: "Chrome ore concentrate from Asian Mines and Minerals",
    variant: 1,
    summary:
      "Ore worked so more of the chromium stays and more of the waste leaves.",
  },
  {
    index: "AM-03",
    title: "Fines",
    kicker: "Screened",
    imageBase: "/media/products/chrome ore fines",
    alt: "Chrome ore fines from Muslim Bagh",
    variant: 2,
    summary:
      "The smaller fraction, for a blend or a process that calls for it.",
  },
  {
    index: "AM-04",
    title: "Natural grade",
    kicker: "As mined",
    imageBase: "/media/products/chrome ore natural",
    alt: "Natural grade chrome ore from Muslim Bagh",
    variant: 5,
    summary: "Ore sold closer to the state in which it leaves the ground.",
  },
  {
    index: "AM-05",
    title: "Refractory",
    kicker: "Refractory",
    imageBase: "/media/products/chrome ore refactory",
    alt: "Refractory grade chrome ore exported by Asian Mines and Minerals",
    variant: 3,
    summary:
      "For refractory use. The chemistry and the size are not the metallurgical specification.",
  },
  {
    index: "AM-06",
    title: "Semi-refractory",
    kicker: "Refractory",
    imageBase: "/media/products/chrome ore semi-refactory",
    alt: "Semi-refractory chrome ore from Pakistan",
    variant: 4,
    summary: "The grade that sits between metallurgical ore and a full refractory spec.",
  },
] as const;

export const films = [
  {
    base: "/media/videos/plant",
    title: "Asian Mines",
    kind: "Company",
    caption:
      "The company film. The ore, the people, and the export work out of Pakistan.",
    variant: 3,
  },
  {
    base: "/media/videos/metallurgical",
    title: "Metallurgical grade",
    kind: "Product",
    caption:
      "A closer look at the metallurgical chrome ore prepared for buyers.",
    variant: 0,
  },
] as const;

export const visits = [
  {
    index: "01",
    title: "Buyers in China",
    kicker: "China",
    imageBase: "/media/company/aziz-china",
    alt: "Asian Mines and Minerals meeting buyers in China",
    summary: "A working meeting with buyers in China.",
    ratio: "square" as const,
  },
  {
    index: "02",
    title: "In China",
    kicker: "China",
    imageBase: "/media/company/aziz-shabbir-china",
    alt: "Asian Mines and Minerals with partners during a visit to China",
    summary: "The China trade, in person.",
    ratio: "square" as const,
  },
] as const;

export const gallery = [
  {
    index: "AM-04",
    title: "Plant yard",
    kicker: "Works",
    imageBase: "/media/products/yard",
    alt: "Chrome ore sitting in a plant yard",
    variant: 3,
    summary: "Where the ore sits between preparation and loading.",
  },
  {
    index: "AM-05",
    title: "Hand sample",
    kicker: "Specimen",
    imageBase: "/media/products/sample",
    alt: "Close specimen of chromite",
    variant: 5,
    summary: "A close look at the rock a buyer is actually purchasing.",
  },
  {
    index: "AM-06",
    title: "Loading",
    kicker: "Export",
    imageBase: "/media/products/loading",
    alt: "Chrome ore being loaded for shipment",
    variant: 4,
    summary: "The lot, once it is ready to leave the plant.",
  },
  {
    index: "AM-07",
    title: "Stockpile",
    kicker: "Lot",
    imageBase: "/media/products/stockpile",
    alt: "A pile of chrome ore held for a shipment",
    variant: 3,
    summary: "A pile held against a shipment, not a brochure grade.",
  },
] as const;

export const parameters = [
  {
    name: "Cr₂O₃",
    meaning: "Chromium oxide. This is the grade buyers lead with.",
  },
  {
    name: "Cr/Fe",
    meaning: "Chromium set against iron. It shapes the yield in ferrochrome.",
  },
  {
    name: "SiO₂",
    meaning: "Silica. Metallurgical buyers usually want it kept in check.",
  },
  {
    name: "MgO and Al₂O₃",
    meaning: "Gangue oxides. They travel into the furnace with the ore.",
  },
  {
    name: "Moisture",
    meaning: "Water in the lot. It changes weight, handling, and the freight you pay for.",
  },
  {
    name: "Size",
    meaning: "Lumpy, chip, fines, or concentrate. The fraction has to suit the mill.",
  },
] as const;

export const steps = [
  {
    title: "Inquiry",
    text: "You send a quantity in metric tons, a destination, and the chemistry you need.",
  },
  {
    title: "Specification",
    text: "Cr₂O₃, Cr/Fe, silica, moisture, and size are written down for that lot.",
  },
  {
    title: "Preparation",
    text: "At the plant the ore is crushed, sized, and beneficiated to meet that sheet.",
  },
  {
    title: "Inspection",
    text: "The lot is checked against the sheet. A buyer may appoint an independent surveyor.",
  },
  {
    title: "Documents",
    text: "Commercial and shipping papers follow the cargo out of Pakistan.",
  },
  {
    title: "Shipment",
    text: "The ore sails for China, Oman, or Europe. The contract says which.",
  },
] as const;

export const faqs = [
  {
    question: "What do you export?",
    answer:
      "Chrome ore from Muslim Bagh: lumpy, concentrate, fines, natural grade, and refractory and semi-refractory grades. The form follows the contract.",
  },
  {
    question: "Where do you ship?",
    answer:
      "China is the main market. The same ore also goes to Oman and to Europe. The head office is in Karachi, with a presence in Muslim Bagh.",
  },
  {
    question: "Why is there no single grade on this website?",
    answer:
      "Chrome ore is not one number. The face, the preparation, and the size all move the assay. Publishing one Cr₂O₃ figure would pretend every pile is the same pile. The grade belongs on the shipment sheet.",
  },
  {
    question: "Do you own the mine?",
    answer:
      "The ore is mined at Muslim Bagh and prepared for export. Finished lots are held in yards at Muslim Bagh and in Karachi, together more than 44,000 square yards. Asian Mines and Minerals was established in 2018. Title papers are shared with a buyer when a contract needs them.",
  },
  {
    question: "What should the first message include?",
    answer:
      "Your company, the destination, an approximate quantity in metric tons, and the form you want. If you already have a target for Cr₂O₃ and size, add that too. A long introduction is not required.",
  },
  {
    question: "Can I see the plant?",
    answer:
      "Two films are on this site: the company film, and the metallurgical grade. A visit is a separate conversation, once there is a real cargo to talk about.",
  },
] as const;

export const markets = {
  china: {
    name: "China",
    role: "Primary market",
    summary:
      "China is where most of the ore is meant to go. The buyers are usually feeding ferrochrome and stainless steel, and they contract on chemistry and size rather than on a brand name.",
    points: [
      "Say the discharge plan, or the mill, if either one changes the specification.",
      "Lead with Cr₂O₃, Cr/Fe, silica, moisture, and the size fraction.",
      "Quantity in metric tons is more useful than a range of adjectives.",
    ],
  },
  oman: {
    name: "Oman",
    role: "Also shipped",
    summary:
      "Oman is the second market. The crossing from Pakistan is the shorter one, over the Arabian Sea, for industrial and trading buyers in the Gulf.",
    points: [
      "The same written specification is used. A shorter voyage does not make the assay informal.",
      "Tell us the discharge port if you already know it.",
      "If the cargo is for re-export, say so. It changes the papers, not the rock.",
    ],
  },
  europe: {
    name: "Europe",
    role: "Also shipped",
    summary:
      "The same Muslim Bagh ore is offered into Europe. The specification is written the same way as a China cargo. The voyage and the papers are what change.",
    points: [
      "Lead with Cr₂O₃, Cr/Fe, silica, moisture, and the size fraction.",
      "Name the discharge if you already know it.",
      "Quantity in metric tons, and the form: lumpy, concentrate, fines, or a refractory grade.",
    ],
  },
} as const;
