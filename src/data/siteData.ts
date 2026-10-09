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
    "garage-door-installation": {
      slug: "garage-door-installation",
      title: "Garage Door Installation",
      tagline: "Professional installation of insulated steel, modern flush & carriage house garage doors.",
      image: "/service-install.png",
      description:
        "Expert garage door installation for new construction, detached garages, and home renovations across Northwest Georgia. Measured, fitted, and safety-tested to showroom standards.",
      overview:
        "We specialize in precision installation of high R-value insulated steel doors, sleek dark modern flush panels, traditional carriage house designs, and full-view glass doors. Every installation includes new tracks, heavy-duty springs, nylon rollers, weather sealing, and complete job site cleanup.",
      highlights: [
        "Precision laser measurement & custom fitting",
        "High R-value thermal insulation upgrades for energy savings",
        "New track, spring & nylon roller assembly included",
        "Perimeter bottom & side weather seal installation",
        "12-Month written labor warranty on all installs",
      ],
      pricingNote: "Flat-rate written installation quotes provided before work begins.",
      faqs: [
        {
          q: "How long does a garage door installation take?",
          a: "A new garage door installation typically takes 3 to 5 hours from track alignment to safety-testing the finished system.",
        },
        {
          q: "What types of garage doors do you install?",
          a: "We install insulated steel doors, modern flush panels, carriage house styles, and full-view glass doors from top manufacturers like Clopay, Amarr, and C.H.I.",
        },
        {
          q: "Is warranty included with new door installations?",
          a: "Yes! Every installation includes our 12-month labor warranty plus manufacturer coverage up to lifetime on select doors.",
        },
      ],
    },

    "garage-door-replacement": {
      slug: "garage-door-replacement",
      title: "Garage Door Replacement",
      tagline: "Upgrade worn, dented, or rusted doors in a single day with old door haul-away included.",
      image: "/after-door.png",
      description:
        "Replace sagging, rusted, or uninsulated raised-panel doors with modern, energy-efficient garage doors. Instant curb appeal boost with same-day tear-down and installation.",
      overview:
        "Our replacement team removes and hauls away your old door, installs heavy-duty tracks, balances matched torsion springs, calibrates your opener, and performs a magnetic site sweep to leave your driveway spotless.",
      highlights: [
        "Same-day old door tear-down & haul-away included",
        "Curb appeal transformation in under 5 hours",
        "Insulated R-16 steel & wind-rated panels",
        "Opener recalibration & safety reverse testing",
        "Lifetime manufacturer coverage on select doors",
      ],
      pricingNote: "Itemized replacement quote with zero hidden removal fees.",
      faqs: [
        {
          q: "Do you haul away our old garage door?",
          a: "Yes! Complete removal, haul-away of old sections/hardware, and a magnetic sweep for stray screws are included with every replacement.",
        },
        {
          q: "Can I keep my existing garage door opener when replacing the door?",
          a: "In most cases yes, provided your current opener is in good working condition and compatible with the weight of the new door.",
        },
      ],
    },

    "repair-maintenance": {
      slug: "repair-maintenance",
      title: "Repair & Maintenance",
      tagline: "Fast diagnostic repairs, spring rebalancing & 25-point tune-ups for silent operation.",
      image: "/service-repair-new.png",
      description:
        "From squeaking hinges and sticking tracks to broken springs and off-track doors, our experienced technicians diagnose and repair your garage door issues fast.",
      overview:
        "We perform comprehensive diagnostics and 25-point precision tune-ups: balancing torsion spring tension, torquing hardware to spec, aligning tracks, lubricating bearing plates, and tuning opener travel limits.",
      highlights: [
        "Same-day diagnostic repairs for stuck or noisy doors",
        "25-Point precision safety inspection",
        "High-cycle spring tension balancing",
        "Noise reduction tuning & synthetic lubrication",
        "Repair-first policy — fix instead of push replacement",
      ],
      pricingNote: "Flat-rate diagnostic & tune-up pricing documented upfront.",
      faqs: [
        {
          q: "Why is my garage door making a loud grinding or squeaking noise?",
          a: "Squeaking is typically caused by unlubricated springs, worn steel rollers, or dry bearing plates. Our tune-up and lubrication service restores quiet operation immediately.",
        },
        {
          q: "How often should a garage door receive maintenance?",
          a: "We recommend an annual 25-point precision tune-up to keep spring tension balanced and hardware torqued to spec.",
        },
      ],
    },

    "roller-replacement": {
      slug: "roller-replacement",
      title: "Roller Replacement",
      tagline: "Eliminate up to 70% of garage door noise with heavy-duty sealed nylon roller upgrades.",
      image: "/service-maintenance.png",
      description:
        "Old metal rollers squeak, grind, pop, and wear down door tracks over time. Upgrade to sealed ball-bearing nylon rollers for whisper-quiet, smooth door operation.",
      overview:
        "Standard steel rollers have exposed bearings that rust and stick. We install heavy-duty 13-ball bearing nylon rollers rated for 100,000 cycles, delivering silent operation and reduced strain on your opener motor.",
      highlights: [
        "Whisper-quiet 13-ball bearing nylon roller upgrades",
        "Eliminates metal-on-metal track grinding & squeaking",
        "Rated for 100,000 cycles (lasts up to 4x longer than steel)",
        "Reduces motor stress & extends opener lifespan",
        "Complete track cleaning & roller hinge inspection",
      ],
      pricingNote: "Itemized roller replacement flat-rate pricing with no surprise charges.",
      faqs: [
        {
          q: "What is the benefit of nylon rollers over steel rollers?",
          a: "Sealed nylon rollers run virtually silent compared to steel, do not require track grease, and reduce vibration and wear on track walls.",
        },
        {
          q: "How many rollers are on a typical garage door?",
          a: "Standard residential garage doors typically have 10 to 12 rollers. We replace the full set at once for balanced operation.",
        },
      ],
    },

    "garage-door-inspections": {
      slug: "garage-door-inspections",
      title: "Garage Door Inspections",
      tagline: "Detailed 25-point safety inspection & written status report for homeowners & buyers.",
      image: "/hero-bg.png",
      description:
        "Ensure your garage door is safe, balanced, and compliant. Ideal for annual home maintenance, pre-purchase home inspections, or post-storm safety checks.",
      overview:
        "Garage doors are the largest moving object in your home. Our licensed technicians inspect spring cycle life, cable fraying, track alignment, opener safety reverse sensors, auto-force limits, and weather seals.",
      highlights: [
        "Comprehensive 25-Point hardware & safety audit",
        "Spring cycle life & cable tension measurement",
        "Opener auto-reverse & safety sensor testing",
        "Written photo inspection report provided",
        "Clear repair-first recommendations if issues found",
      ],
      pricingNote: "Low flat-rate safety inspection fee.",
      faqs: [
        {
          q: "What is checked during a 25-point garage door inspection?",
          a: "We inspect springs, cables, drums, rollers, hinges, track alignment, opener logic boards, force limits, safety infrared sensors, and perimeter seals.",
        },
        {
          q: "Do I get a written report?",
          a: "Yes! We provide an itemized written report detailing component conditions and any recommended maintenance.",
        },
      ],
    },

    "garage-door-opener-installation": {
      slug: "garage-door-opener-installation",
      title: "Garage Door Opener Installation",
      tagline: "Quiet, smart, heavy-duty belt & chain drive garage door opener installations.",
      image: "/service-opener.png",
      description:
        "Professional installation and replacement of smart Wi-Fi garage door openers, quiet belt drives, and heavy-duty chain drives with battery backup.",
      overview:
        "We install top-rated LiftMaster, Chamberlain, and Genie openers equipped with smartphone control, soft start/stop motors, integrated LED illumination, auto-locks, and safety reverse sensors.",
      highlights: [
        "Whisper-quiet belt drive & high-torque chain drive models",
        "Smart myQ / Wi-Fi smartphone remote operation",
        "Battery backup for power outage security",
        "Safety beam sensor installation & calibration",
        "Includes wireless wall console & 2 remote keyfobs",
      ],
      pricingNote: "Flat-rate opener installation with transparent upfront pricing.",
      faqs: [
        {
          q: "How long does a garage door opener installation take?",
          a: "Standard installation of a new garage door opener takes approximately 1.5 to 2.5 hours.",
        },
        {
          q: "Can I control my new garage door opener from my smartphone?",
          a: "Yes! All modern openers we install feature built-in Wi-Fi and smartphone app compatibility.",
        },
      ],
    },
  };
}

export class ServiceAreasDataRecord {
  static citiesList: { slug: string; name: string }[] = [
    { slug: "dallas-ga", name: "Dallas, GA" },
    { slug: "acworth-ga", name: "Acworth, GA" },
    { slug: "marietta-ga", name: "Marietta, GA" },
    { slug: "kennesaw-ga", name: "Kennesaw, GA" },
    { slug: "hiram-ga", name: "Hiram, GA" },
    { slug: "cartersville-ga", name: "Cartersville, GA" },
    { slug: "smyrna-ga", name: "Smyrna, GA" },
    { slug: "woodstock-ga", name: "Woodstock, GA" },
    { slug: "mableton-ga", name: "Mableton, GA" },
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
      description: `Level Up Garage Door Service brings fast, transparent flat-rate repair and replacement to homeowners and businesses throughout ${cityName} and surrounding areas.`,
      arrivalWindow: "Under 3 hours for emergency repairs · Same or next day for scheduled appointments",
      zipCodes: ["30701", "30720", "30161", "30120", "30705"],
      popularServices: [
        "Emergency Torsion Spring Replacement",
        "Garage Door Opener Installation",
        "25-Point Precision Maintenance & Inspection",
        "Insulated Steel Door Installation",
      ],
      localNote: `Our local trucks are fully stocked with high-cycle springs, cables, remote keypads, and LiftMaster openers so 92% of jobs in ${cityName} are completed on the first visit.`,
    };
  }
}
