export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  overview: string;
  highlights: string[];
  pricingNote: string;
  faqs: { q: string; a: string }[];
}

export interface ServiceAreaData {
  slug: string;
  cityName: string;
  state: string;
  county: string;
  tagline: string;
  description: string;
  arrivalWindow: string;
  zipCodes: string[];
  popularServices: string[];
  localNote: string;
}

export class ServicesDataRecord {
  static services: Record<string, ServiceData> = {
    "opener-installation-repair": {
      slug: "opener-installation-repair",
      title: "Garage Door Opener Installation & Repair",
      tagline: "Ultra-quiet belt drive, smart Wi-Fi controls & precision diagnostics across Northwest Georgia.",
      image: "/service-opener.png",
      description:
        "Whether your opener motor is humming without moving, safety sensors are misaligned, or you want to upgrade to a smartphone-controlled belt drive system, Level Up Garage Services provides same-day repair and installation.",
      overview:
        "We diagnose logic boards, travel limits, safety sensors, sprocket drives, and remote frequencies instead of pushing unnecessary replacements. When replacement is needed, we install top-tier LiftMaster and Chamberlain Wi-Fi openers with battery backup.",
      highlights: [
        "Smart phone-controlled openers (myQ Wi-Fi integration)",
        "Ultra-quiet belt drive upgrades for noise reduction",
        "Same-day sensor alignment & force adjustment",
        "Keypad & wireless remote calibration",
        "Battery backup installation for power outages",
      ],
      pricingNote: "Transparent, itemized pricing confirmed on site before any work begins. Backed by our 12-month labor warranty.",
      faqs: [
        {
          q: "Why is my garage door opener humming but not opening?",
          a: "A humming sound usually indicates a stripped main drive gear or a failing motor capacitor. Our tech can replace worn gears on-site without needing a whole new motor.",
        },
        {
          q: "Can I control my new opener from my phone?",
          a: "Yes! All smart openers we install connect directly to your home Wi-Fi and allow you to open, close, and receive alerts from anywhere via the myQ mobile app.",
        },
        {
          q: "How long does an opener replacement take?",
          a: "A full opener replacement, including rail assembly, sensor alignment, keypad installation, and phone pairing, takes roughly 1.5 to 2 hours.",
        },
      ],
    },
    "service-maintenance": {
      slug: "service-maintenance",
      title: "Garage Door Service & Maintenance",
      tagline: "A 25-point precision tune-up to keep your garage door whisper-quiet, balanced, and safe year-round.",
      image: "/service-maintenance.png",
      description:
        "Garage door springs, cables, and rollers endure high tension daily. Regular 25-point maintenance prevents unexpected spring failure, reduces noise by up to 70%, and extends component lifespan.",
      overview:
        "Our technicians perform a comprehensive 25-point safety inspection: balancing spring tension, torquing hardware to spec, replacing noisy steel rollers with heavy-duty nylon rollers, checking cable fraying, and tuning travel limits.",
      highlights: [
        "25-point safety & balance inspection",
        "Spring tension measurement & calibration",
        "High-grade synthetic lubrication of springs, hinges & bearings",
        "Nylon roller upgrades for noise elimination",
        "Track alignment & hardware torque tightening",
      ],
      pricingNote: "Upfront flat-rate maintenance pricing on every invoice. No mystery fees.",
      faqs: [
        {
          q: "How often should my garage door be serviced?",
          a: "We recommend a professional 25-point tune-up once per year, especially before severe summer humidity or winter cold snaps.",
        },
        {
          q: "Why is my garage door squeaking or grinding?",
          a: "Squeaking is typically caused by dry spring coils, worn steel rollers, or dry bearing plates. Our lubrication and nylon roller upgrades eliminate noise immediately.",
        },
      ],
    },
    "installation-replacement": {
      slug: "installation-replacement",
      title: "Garage Door Installation & Replacement",
      tagline: "Insulated steel, modern flush, carriage house & full-view glass doors installed to showroom standards.",
      image: "/service-install.png",
      description:
        "Transform your home's curb appeal while improving thermal insulation and energy efficiency. We measure, supply, install, and haul away your old garage door in a single day.",
      overview:
        "Choose from insulated R-16 steel doors, sleek dark modern flush panels, traditional carriage house styles, or full-view glass doors. Every installation includes heavy-duty torsion springs, nylon rollers, perimeter weather sealing, and complete job site cleanup.",
      highlights: [
        "Insulated R-16 steel doors for energy efficiency",
        "Modern flush panels & full-view frosted glass styles",
        "Custom window inserts & decorative hardware options",
        "Complete removal & old door haul-away included",
        "12-month labor warranty + lifetime manufacturer warranty on select doors",
      ],
      pricingNote: "Itemized written quotes provided after a precision site measurement.",
      faqs: [
        {
          q: "How long does a garage door replacement take?",
          a: "Tear-down of the old door and complete installation of the new insulated door typically takes 3 to 5 hours in a single day visit.",
        },
        {
          q: "Do you dispose of our old garage door?",
          a: "Yes! Old door removal, hardware cleanup, and magnetic site sweep for stray nails/screws are included with every installation.",
        },
      ],
    },
  };
}

export class ServiceAreasDataRecord {
  static citiesList: { slug: string; name: string }[] = [
    { slug: "dalton-ga", name: "Dalton, GA" },
    { slug: "calhoun-ga", name: "Calhoun, GA" },
    { slug: "rome-ga", name: "Rome, GA" },
    { slug: "cartersville-ga", name: "Cartersville, GA" },
    { slug: "chatsworth-ga", name: "Chatsworth, GA" },
    { slug: "ringgold-ga", name: "Ringgold, GA" },
    { slug: "fort-oglethorpe-ga", name: "Fort Oglethorpe, GA" },
    { slug: "lafayette-ga", name: "LaFayette, GA" },
    { slug: "adairsville-ga", name: "Adairsville, GA" },
    { slug: "rockmart-ga", name: "Rockmart, GA" },
    { slug: "summerville-ga", name: "Summerville, GA" },
    { slug: "chickamauga-ga", name: "Chickamauga, GA" },
  ];

  static getArea(slug: string): ServiceAreaData {
    const found = this.citiesList.find((c) => c.slug === slug);
    const cityName = found ? found.name : slug.replace("-", " ").toUpperCase();

    return {
      slug,
      cityName,
      state: "GA",
      county: "Northwest Georgia Region",
      tagline: `Same-day garage door repair, spring replacement & opener installation in ${cityName}.`,
      description: `Level Up Garage Services brings fast, transparent flat-rate repair and replacement to homeowners and businesses throughout ${cityName} and surrounding areas.`,
      arrivalWindow: "Under 3 hours for emergency repairs · Same or next day for scheduled appointments",
      zipCodes: ["30701", "30720", "30161", "30120", "30705"],
      popularServices: [
        "Emergency Torsion Spring Replacement",
        "Smart Wi-Fi Opener Installation",
        "25-Point Precision Maintenance & Nylon Rollers",
        "Insulated Steel Door Upgrades",
      ],
      localNote: `Our local trucks are fully stocked with high-cycle springs, cables, remote keypads, and LiftMaster openers so 92% of jobs in ${cityName} are completed on the first visit.`,
    };
  }
}
