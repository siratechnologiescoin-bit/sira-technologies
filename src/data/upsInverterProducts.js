import {
  Battery,
  Zap,
  ShieldCheck,
  Server,
  Monitor,
  Laptop,
  Wifi,
  Router,
  HardDrive,
  Database,
  Building2,
  Home,
  Factory,
  Settings,
  Gauge,
  Power,
  Cable,
  Activity,
} from "lucide-react";

const upsInverterProducts = [
  // =========================================================
  // UPS SYSTEMS
  // =========================================================

  {
    id: "ups-offline",
    name: "Offline UPS",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "UPS",
    subtype: "Offline UPS",

    description:
      "Basic backup power solution that provides battery power to connected devices when the main electricity supply fails.",

    useCases: [
      "Home computers",
      "Desktop PCs",
      "Small office systems",
      "Wi-Fi routers",
      "Modems",
      "Small networking devices",
      "Basic electronic equipment",
    ],

    environments: [
      "Home",
      "Small Office",
      "Shop",
      "Small Business",
    ],

    specifications: {
      topology: "Offline / Standby",
      backup: "Battery Backup",
      transfer: "Automatic Transfer",
      application: "Basic Power Protection",
    },

    features: [
      "Power failure backup",
      "Automatic switchover",
      "Compact design",
      "Battery backup",
      "Basic power protection",
    ],

    keywords: [
      "offline ups",
      "standby ups",
      "computer ups",
      "home ups",
      "small office ups",
      "basic ups",
    ],

    tags: ["Offline UPS", "Home", "Office"],

    icon: Zap,
  },

  {
    id: "ups-line-interactive",
    name: "Line Interactive UPS",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "UPS",
    subtype: "Line Interactive UPS",

    description:
      "UPS system that provides battery backup and voltage regulation for computers, networking equipment, office systems, and other sensitive electronics.",

    useCases: [
      "Desktop computers",
      "Office workstations",
      "Networking equipment",
      "Wi-Fi systems",
      "POS systems",
      "Small servers",
      "CCTV systems",
    ],

    environments: [
      "Home",
      "Office",
      "Shop",
      "Small Business",
      "Network Room",
    ],

    specifications: {
      topology: "Line Interactive",
      protection: "Voltage Regulation + Backup",
      backup: "Battery",
      application: "IT and Electronic Equipment",
    },

    features: [
      "Battery backup",
      "Voltage regulation",
      "Automatic voltage correction",
      "Overload protection",
      "Short-circuit protection",
      "Battery protection",
    ],

    keywords: [
      "line interactive ups",
      "office ups",
      "computer backup ups",
      "network ups",
      "cctv ups",
      "small server ups",
    ],

    tags: ["Line Interactive", "UPS", "Office"],

    icon: ShieldCheck,
  },

  {
    id: "ups-online",
    name: "Online UPS",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "UPS",
    subtype: "Online UPS",

    description:
      "Continuous power protection system designed for sensitive and critical equipment by providing regulated backup power through double-conversion technology.",

    useCases: [
      "Servers",
      "Data centers",
      "Network equipment",
      "Medical equipment",
      "CCTV systems",
      "Industrial equipment",
      "Storage systems",
      "Critical IT infrastructure",
    ],

    environments: [
      "Server Room",
      "Data Center",
      "Hospital",
      "Factory",
      "Network Room",
      "Enterprise",
    ],

    specifications: {
      topology: "Online Double Conversion",
      output: "Continuous Conditioned Power",
      backup: "Battery",
      application: "Critical Equipment",
    },

    features: [
      "Continuous power protection",
      "Voltage regulation",
      "Frequency regulation",
      "Battery backup",
      "Overload protection",
      "Critical equipment support",
      "Monitoring options",
    ],

    keywords: [
      "online ups",
      "double conversion ups",
      "server ups",
      "data center ups",
      "critical power ups",
      "industrial ups",
    ],

    tags: ["Online UPS", "Critical Power", "Server"],

    icon: Server,
  },

  {
    id: "ups-rack-mount",
    name: "Rack Mount UPS",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "UPS",
    subtype: "Rack Mount UPS",

    description:
      "Rack-mounted UPS designed to provide backup power and protection for servers, switches, storage systems, and other rack-mounted equipment.",

    useCases: [
      "Server racks",
      "Network racks",
      "Switches",
      "Servers",
      "Storage systems",
      "Firewall equipment",
      "CCTV NVR systems",
    ],

    environments: [
      "Server Room",
      "Data Center",
      "Network Room",
      "Control Room",
    ],

    specifications: {
      formFactor: "Rack Mount",
      topology: "Online / Line Interactive depending on model",
      installation: "19-inch Rack",
      application: "IT Infrastructure",
    },

    features: [
      "Rack installation",
      "Battery backup",
      "Equipment protection",
      "Rack-friendly design",
      "Monitoring support",
      "Network equipment compatibility",
    ],

    keywords: [
      "rack mount ups",
      "rack ups",
      "server rack ups",
      "network rack ups",
      "data center ups",
      "rack server backup",
    ],

    tags: ["Rack Mount", "Server", "UPS"],

    icon: Server,
  },

  {
    id: "ups-tower",
    name: "Tower UPS",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "UPS",
    subtype: "Tower UPS",

    description:
      "Standalone floor or desktop UPS designed for servers, workstations, networking equipment, and office electronics.",

    useCases: [
      "Servers",
      "Workstations",
      "Office computers",
      "Network equipment",
      "CCTV systems",
      "Small business IT systems",
    ],

    environments: [
      "Office",
      "Server Room",
      "Home",
      "Shop",
      "Business",
    ],

    specifications: {
      formFactor: "Tower",
      topology: "Online / Line Interactive depending on model",
      installation: "Floor / Desktop",
      application: "IT Equipment",
    },

    features: [
      "Standalone design",
      "Battery backup",
      "Power protection",
      "Overload protection",
      "Equipment monitoring options",
    ],

    keywords: [
      "tower ups",
      "tower type ups",
      "server tower ups",
      "office tower ups",
      "desktop ups",
    ],

    tags: ["Tower", "UPS", "IT Equipment"],

    icon: Monitor,
  },

  // =========================================================
  // UPS CAPACITY
  // =========================================================

  {
    id: "ups-1kva",
    name: "1KVA UPS",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "UPS",
    subtype: "1KVA UPS",

    description:
      "Compact UPS capacity suitable for smaller IT setups, individual workstations, networking equipment, and small CCTV installations.",

    useCases: [
      "Single computer",
      "Workstation",
      "Wi-Fi router",
      "Network switch",
      "Small CCTV system",
      "POS machine",
      "Small office equipment",
    ],

    environments: [
      "Home",
      "Small Office",
      "Shop",
      "Small Business",
    ],

    specifications: {
      capacity: "1KVA",
      application: "Small IT Load",
      backup: "Battery Backup",
    },

    features: [
      "Compact capacity",
      "Battery backup",
      "Power protection",
      "Suitable for small loads",
    ],

    keywords: [
      "1kva ups",
      "1000va ups",
      "1 kva ups",
      "small ups",
      "computer 1kva ups",
    ],

    tags: ["1KVA", "UPS", "Small Load"],

    icon: Gauge,
  },

  {
    id: "ups-2kva",
    name: "2KVA UPS",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "UPS",
    subtype: "2KVA UPS",

    description:
      "UPS solution for small offices, multiple workstations, networking equipment, CCTV systems, and small server loads.",

    useCases: [
      "Multiple computers",
      "Office workstations",
      "Network switches",
      "CCTV systems",
      "Small servers",
      "POS systems",
    ],

    environments: [
      "Office",
      "Shop",
      "Small Server Room",
      "Business",
    ],

    specifications: {
      capacity: "2KVA",
      application: "Small to Medium IT Load",
      backup: "Battery Backup",
    },

    features: [
      "Higher capacity than 1KVA",
      "Battery backup",
      "Power protection",
      "Suitable for multiple devices",
    ],

    keywords: [
      "2kva ups",
      "2000va ups",
      "2 kva ups",
      "office 2kva ups",
      "server 2kva ups",
    ],

    tags: ["2KVA", "UPS", "Office"],

    icon: Gauge,
  },

  {
    id: "ups-3kva",
    name: "3KVA UPS",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "UPS",
    subtype: "3KVA UPS",

    description:
      "Higher-capacity UPS for small server rooms, network infrastructure, multiple workstations, and business-critical equipment.",

    useCases: [
      "Server room",
      "Network rack",
      "Multiple workstations",
      "CCTV infrastructure",
      "Storage systems",
      "Business IT equipment",
    ],

    environments: [
      "Office",
      "Server Room",
      "Network Room",
      "Business",
    ],

    specifications: {
      capacity: "3KVA",
      application: "Medium IT Load",
      backup: "Battery Backup",
    },

    features: [
      "Medium capacity",
      "Critical equipment backup",
      "Power conditioning",
      "Overload protection",
      "Monitoring options",
    ],

    keywords: [
      "3kva ups",
      "3000va ups",
      "3 kva ups",
      "server room 3kva ups",
    ],

    tags: ["3KVA", "UPS", "Server Room"],

    icon: Gauge,
  },

  {
    id: "ups-5kva",
    name: "5KVA UPS",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "UPS",
    subtype: "5KVA UPS",

    description:
      "Business-grade UPS for server rooms, network infrastructure, storage equipment, CCTV systems, and larger IT loads.",

    useCases: [
      "Server room",
      "Network infrastructure",
      "Storage systems",
      "CCTV systems",
      "Multiple servers",
      "Business-critical systems",
    ],

    environments: [
      "Server Room",
      "Data Center",
      "Enterprise",
      "Control Room",
    ],

    specifications: {
      capacity: "5KVA",
      application: "Medium to High IT Load",
      backup: "Battery Backup",
    },

    features: [
      "High-capacity backup",
      "Critical equipment support",
      "Power conditioning",
      "Monitoring",
      "Overload protection",
    ],

    keywords: [
      "5kva ups",
      "5000va ups",
      "5 kva ups",
      "server ups 5kva",
      "data center 5kva ups",
    ],

    tags: ["5KVA", "UPS", "Business"],

    icon: Server,
  },

  {
    id: "ups-10kva",
    name: "10KVA UPS",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "UPS",
    subtype: "10KVA UPS",

    description:
      "High-capacity UPS system for larger server rooms, data center equipment, network infrastructure, and critical business loads.",

    useCases: [
      "Data center",
      "Server room",
      "Multiple servers",
      "Network infrastructure",
      "Storage systems",
      "Critical business systems",
    ],

    environments: [
      "Data Center",
      "Server Room",
      "Enterprise",
      "Industrial",
    ],

    specifications: {
      capacity: "10KVA",
      application: "High IT Load",
      backup: "Battery Bank",
    },

    features: [
      "High-capacity backup",
      "Critical power protection",
      "Battery bank support",
      "Monitoring",
      "Overload protection",
      "Professional installation",
    ],

    keywords: [
      "10kva ups",
      "10000va ups",
      "10 kva ups",
      "data center 10kva ups",
      "server room 10kva",
    ],

    tags: ["10KVA", "High Capacity", "Data Center"],

    icon: Server,
  },

  {
    id: "ups-20kva-plus",
    name: "20KVA+ Online UPS",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "UPS",
    subtype: "High Capacity UPS",

    description:
      "Large-capacity online UPS solution for data centers, industrial facilities, large server rooms, and critical infrastructure.",

    useCases: [
      "Data centers",
      "Large server rooms",
      "Industrial systems",
      "Critical infrastructure",
      "Network operations",
      "Large storage systems",
    ],

    environments: [
      "Data Center",
      "Industrial",
      "Enterprise",
      "Critical Facility",
    ],

    specifications: {
      capacity: "20KVA and above",
      topology: "Online Double Conversion",
      application: "High-Capacity Critical Load",
      backup: "External Battery Bank",
    },

    features: [
      "High-capacity power backup",
      "Online power protection",
      "External battery support",
      "Monitoring",
      "Scalable configuration options",
      "Critical infrastructure support",
    ],

    keywords: [
      "20kva ups",
      "20 kva ups",
      "high capacity ups",
      "large online ups",
      "data center ups",
      "industrial ups",
    ],

    tags: ["20KVA+", "Online UPS", "Data Center"],

    icon: Power,
  },

  // =========================================================
  // INVERTERS
  // =========================================================

  {
    id: "inverter-home",
    name: "Home Inverter",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "Inverter",
    subtype: "Home Inverter",

    description:
      "Power backup inverter designed for homes to keep essential electrical and electronic equipment running during power interruptions.",

    useCases: [
      "Home lighting",
      "Fans",
      "Wi-Fi router",
      "TV",
      "Computer",
      "Small appliances",
      "Home office",
    ],

    environments: [
      "Home",
      "Apartment",
      "Villa",
    ],

    specifications: {
      type: "Home Inverter",
      output: "AC Power",
      backup: "Battery Based",
      application: "Essential Home Loads",
    },

    features: [
      "Power backup",
      "Battery charging",
      "Automatic changeover",
      "Home appliance support",
      "Battery protection",
    ],

    keywords: [
      "home inverter",
      "house inverter",
      "home power backup",
      "inverter for home",
      "electricity backup home",
    ],

    tags: ["Home", "Inverter", "Power Backup"],

    icon: Home,
  },

  {
    id: "inverter-office",
    name: "Office Inverter",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "Inverter",
    subtype: "Office Inverter",

    description:
      "Inverter-based backup power solution for offices requiring continuity for computers, networking equipment, lights, and other essential loads.",

    useCases: [
      "Office computers",
      "Wi-Fi",
      "Network switches",
      "Printers",
      "Lighting",
      "POS systems",
      "Small office equipment",
    ],

    environments: [
      "Office",
      "Shop",
      "Small Business",
    ],

    specifications: {
      type: "Office Inverter",
      application: "Office Electrical and IT Loads",
      backup: "Battery Based",
    },

    features: [
      "Office power backup",
      "Automatic changeover",
      "Battery charging",
      "Essential equipment support",
    ],

    keywords: [
      "office inverter",
      "business inverter",
      "office power backup",
      "shop inverter",
      "computer inverter",
    ],

    tags: ["Office", "Inverter", "Business"],

    icon: Building2,
  },

  {
    id: "inverter-commercial",
    name: "Commercial Inverter",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "Inverter",
    subtype: "Commercial Inverter",

    description:
      "Higher-capacity inverter solution for commercial locations requiring backup power for essential electrical and electronic equipment.",

    useCases: [
      "Shops",
      "Restaurants",
      "Offices",
      "Small warehouses",
      "Clinics",
      "Commercial buildings",
      "Retail stores",
    ],

    environments: [
      "Shop",
      "Office",
      "Restaurant",
      "Clinic",
      "Warehouse",
      "Commercial Building",
    ],

    specifications: {
      type: "Commercial Inverter",
      application: "Commercial Loads",
      backup: "Battery Based",
      installation: "Site Specific",
    },

    features: [
      "Commercial backup",
      "Higher load capacity",
      "Battery support",
      "Automatic changeover",
      "Power monitoring options",
    ],

    keywords: [
      "commercial inverter",
      "shop power backup",
      "business power backup",
      "commercial power inverter",
      "office backup inverter",
    ],

    tags: ["Commercial", "Inverter", "Backup"],

    icon: Building2,
  },

  {
    id: "inverter-industrial",
    name: "Industrial Inverter",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "Inverter",
    subtype: "Industrial Inverter",

    description:
      "Industrial power conversion and backup solution designed for selected industrial electrical loads and site-specific power requirements.",

    useCases: [
      "Factory equipment",
      "Industrial control systems",
      "Production support systems",
      "Industrial lighting",
      "Control panels",
      "Critical electrical loads",
    ],

    environments: [
      "Factory",
      "Industrial Facility",
      "Plant",
      "Workshop",
    ],

    specifications: {
      type: "Industrial Inverter",
      application: "Industrial Electrical Loads",
      installation: "Site Specific",
      backup: "Battery Based",
    },

    features: [
      "Industrial-duty applications",
      "High-load support options",
      "Battery backup",
      "Protection functions",
      "Professional installation",
    ],

    keywords: [
      "industrial inverter",
      "factory inverter",
      "industrial power backup",
      "plant inverter",
      "industrial backup power",
    ],

    tags: ["Industrial", "Inverter", "Power"],

    icon: Factory,
  },

  // =========================================================
  // SOLAR / HYBRID INVERTERS
  // =========================================================

  {
    id: "inverter-solar",
    name: "Solar Inverter",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "Inverter",
    subtype: "Solar Inverter",

    description:
      "Inverter designed for solar power systems to convert solar-generated DC electricity into usable AC power for electrical loads.",

    useCases: [
      "Home solar systems",
      "Office solar systems",
      "Commercial solar",
      "Solar backup",
      "Renewable energy systems",
    ],

    environments: [
      "Home",
      "Office",
      "Commercial",
      "Industrial",
    ],

    specifications: {
      type: "Solar Inverter",
      input: "Solar DC",
      output: "AC",
      application: "Solar Power System",
    },

    features: [
      "Solar energy conversion",
      "AC power output",
      "Solar monitoring options",
      "System protection",
      "Grid integration depending on model",
    ],

    keywords: [
      "solar inverter",
      "solar power inverter",
      "home solar inverter",
      "commercial solar inverter",
      "solar backup inverter",
    ],

    tags: ["Solar", "Inverter", "Renewable Energy"],

    icon: Zap,
  },

  {
    id: "inverter-hybrid",
    name: "Hybrid Inverter",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "Inverter",
    subtype: "Hybrid Inverter",

    description:
      "Hybrid inverter designed to manage power from multiple sources such as solar, batteries, and the electrical grid according to the system configuration.",

    useCases: [
      "Solar homes",
      "Office solar backup",
      "Commercial solar",
      "Battery energy storage",
      "Hybrid power systems",
    ],

    environments: [
      "Home",
      "Office",
      "Commercial",
      "Industrial",
    ],

    specifications: {
      type: "Hybrid Inverter",
      sources: "Solar / Grid / Battery",
      output: "AC",
      application: "Hybrid Energy System",
    },

    features: [
      "Multiple power sources",
      "Battery charging",
      "Solar integration",
      "Energy management",
      "Backup power",
      "System monitoring",
    ],

    keywords: [
      "hybrid inverter",
      "solar hybrid inverter",
      "battery inverter",
      "solar battery backup",
      "hybrid solar system",
    ],

    tags: ["Hybrid", "Solar", "Battery"],

    icon: Activity,
  },

  // =========================================================
  // BATTERIES
  // =========================================================

  {
    id: "ups-battery",
    name: "UPS Battery",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "Battery",
    subtype: "UPS Battery",

    description:
      "Rechargeable battery used with UPS systems to provide backup power when the main electrical supply is unavailable.",

    useCases: [
      "UPS replacement",
      "Server backup",
      "Office UPS",
      "CCTV backup",
      "Network equipment backup",
      "Home UPS",
    ],

    environments: [
      "Home",
      "Office",
      "Server Room",
      "Network Room",
      "Business",
    ],

    specifications: {
      type: "Rechargeable Battery",
      application: "UPS Backup",
      chemistry: "Model Dependent",
      installation: "UPS / Battery Cabinet",
    },

    features: [
      "Rechargeable",
      "UPS compatible",
      "Backup power",
      "Replacement option",
      "Battery bank configuration",
    ],

    keywords: [
      "ups battery",
      "ups replacement battery",
      "backup battery",
      "server ups battery",
      "inverter battery",
    ],

    tags: ["Battery", "UPS", "Replacement"],

    icon: Battery,
  },

  {
    id: "inverter-battery",
    name: "Inverter Battery",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "Battery",
    subtype: "Inverter Battery",

    description:
      "Rechargeable battery designed for inverter-based home, office, and commercial power backup systems.",

    useCases: [
      "Home inverter",
      "Office inverter",
      "Shop backup",
      "Commercial backup",
      "Power failure backup",
    ],

    environments: [
      "Home",
      "Office",
      "Shop",
      "Commercial",
    ],

    specifications: {
      type: "Rechargeable Inverter Battery",
      application: "Inverter Backup",
      capacity: "Model Dependent",
      installation: "Battery Bank / Inverter",
    },

    features: [
      "Rechargeable",
      "Inverter compatible",
      "Backup power storage",
      "Replacement support",
      "Battery bank options",
    ],

    keywords: [
      "inverter battery",
      "home inverter battery",
      "office inverter battery",
      "power backup battery",
      "inverter replacement battery",
    ],

    tags: ["Battery", "Inverter", "Backup"],

    icon: Battery,
  },

  {
    id: "battery-bank",
    name: "UPS Battery Bank",
    category: "UPS & Inverters",
    service: "Power Backup",
    type: "Battery System",
    subtype: "Battery Bank",

    description:
      "Configured group of batteries used with larger UPS systems to provide the required backup capacity for servers, data centers, and critical equipment.",

    useCases: [
      "Large UPS systems",
      "Data centers",
      "Server rooms",
      "Industrial UPS",
      "Longer backup requirements",
    ],

    environments: [
      "Data Center",
      "Server Room",
      "Industrial",
      "Enterprise",
    ],

    specifications: {
      type: "Battery Bank",
      application: "High-Capacity UPS Backup",
      configuration: "Series / Parallel as required",
      installation: "Battery Rack / Cabinet",
    },

    features: [
      "Scalable battery capacity",
      "Longer backup configurations",
      "Large UPS compatibility",
      "Battery monitoring options",
      "Professional installation",
    ],

    keywords: [
      "battery bank",
      "ups battery bank",
      "large ups battery",
      "data center battery bank",
      "server room battery bank",
    ],

    tags: ["Battery Bank", "UPS", "Data Center"],

    icon: Battery,
  },

  // =========================================================
  // POWER DISTRIBUTION
  // =========================================================

  {
    id: "ups-pdu",
    name: "Rack Power Distribution Unit",
    category: "UPS & Inverters",
    service: "Power Distribution",
    type: "Power Distribution",
    subtype: "PDU",

    description:
      "Rack-mounted power distribution unit used to distribute electrical power from a UPS or power source to multiple rack-mounted IT devices.",

    useCases: [
      "Server racks",
      "Network racks",
      "Data centers",
      "Server rooms",
      "Switch racks",
      "Storage racks",
    ],

    environments: [
      "Server Room",
      "Data Center",
      "Network Room",
      "IT Facility",
    ],

    specifications: {
      type: "Rack PDU",
      installation: "19-inch Rack",
      function: "Power Distribution",
      input: "Site and Model Dependent",
    },

    features: [
      "Rack power distribution",
      "Multiple outlets",
      "Rack installation",
      "Cable organization support",
      "Power monitoring on selected models",
    ],

    keywords: [
      "pdu",
      "rack pdu",
      "server rack pdu",
      "power distribution unit",
      "data center pdu",
      "network rack power",
    ],

    tags: ["PDU", "Rack", "Power Distribution"],

    icon: Cable,
  },

  {
    id: "ups-surge-protector",
    name: "Surge Protector",
    category: "UPS & Inverters",
    service: "Power Protection",
    type: "Power Protection",
    subtype: "Surge Protector",

    description:
      "Power protection device designed to help protect connected electrical and electronic equipment from transient voltage surges.",

    useCases: [
      "Computers",
      "Networking equipment",
      "CCTV equipment",
      "TVs",
      "Office electronics",
      "Home electronics",
    ],

    environments: [
      "Home",
      "Office",
      "Shop",
      "Server Room",
    ],

    specifications: {
      type: "Surge Protection",
      application: "Electrical and Electronic Equipment",
      installation: "Plug-in / Distribution",
    },

    features: [
      "Surge protection",
      "Multiple outlet options",
      "Equipment protection",
      "Compact installation",
    ],

    keywords: [
      "surge protector",
      "power surge protector",
      "computer surge protector",
      "cctv surge protection",
      "network surge protector",
    ],

    tags: ["Surge Protection", "Power"],

    icon: ShieldCheck,
  },

  // =========================================================
  // STABILIZER
  // =========================================================

  {
    id: "power-stabilizer",
    name: "Voltage Stabilizer",
    category: "UPS & Inverters",
    service: "Power Protection",
    type: "Power Protection",
    subtype: "Voltage Stabilizer",

    description:
      "Voltage regulation device designed to maintain the output voltage within a suitable range for connected equipment when the incoming supply fluctuates.",

    useCases: [
      "Computers",
      "Servers",
      "Networking equipment",
      "CCTV systems",
      "Office electronics",
      "Industrial equipment",
      "Home electronics",
    ],

    environments: [
      "Home",
      "Office",
      "Server Room",
      "Factory",
      "Shop",
    ],

    specifications: {
      type: "Voltage Stabilizer",
      function: "Voltage Regulation",
      application: "Equipment Protection",
      capacity: "Model Dependent",
    },

    features: [
      "Voltage regulation",
      "Equipment protection",
      "Input voltage monitoring",
      "Overload protection",
      "Multiple capacity options",
    ],

    keywords: [
      "voltage stabilizer",
      "power stabilizer",
      "computer stabilizer",
      "server stabilizer",
      "cctv stabilizer",
      "office stabilizer",
    ],

    tags: ["Stabilizer", "Voltage Protection", "Power"],

    icon: Gauge,
  },

  // =========================================================
  // POWER MONITORING
  // =========================================================

  {
    id: "power-monitoring",
    name: "Power Monitoring System",
    category: "UPS & Inverters",
    service: "Power Monitoring",
    type: "Power Management",
    subtype: "Power Monitoring",

    description:
      "Monitoring solution for observing electrical power conditions, UPS status, energy parameters, and equipment power information.",

    useCases: [
      "Data centers",
      "Server rooms",
      "Industrial facilities",
      "Office buildings",
      "UPS monitoring",
      "Critical infrastructure",
    ],

    environments: [
      "Data Center",
      "Server Room",
      "Industrial",
      "Enterprise",
      "Commercial Building",
    ],

    specifications: {
      monitoring: "Power and Energy Parameters",
      integration: "UPS / Meter / Power Equipment",
      dashboard: "Local / Network",
      alerts: "Configuration Dependent",
    },

    features: [
      "Power monitoring",
      "UPS status monitoring",
      "Energy information",
      "Alerts",
      "Historical data",
      "Dashboard",
    ],

    keywords: [
      "power monitoring",
      "ups monitoring",
      "energy monitoring",
      "server room power monitoring",
      "data center power monitoring",
    ],

    tags: ["Power Monitoring", "UPS", "Data Center"],

    icon: Activity,
  },

  // =========================================================
  // COMPLETE POWER SOLUTIONS
  // =========================================================

  {
    id: "power-backup-office",
    name: "Office Power Backup Solution",
    category: "UPS & Inverters",
    service: "Power Backup Solution",
    type: "Complete Power Solution",
    subtype: "Office Backup",

    description:
      "Complete power backup solution planned for office computers, networking equipment, CCTV, Wi-Fi, and other essential business systems.",

    useCases: [
      "Office power backup",
      "Computer backup",
      "Network backup",
      "CCTV backup",
      "Wi-Fi backup",
      "Business continuity",
    ],

    environments: [
      "Office",
      "Small Business",
      "Shop",
      "Commercial Building",
    ],

    specifications: {
      solution:
        "UPS / Inverter + Batteries + Power Distribution",
      design: "Site and Load Based",
      backup: "Capacity Based on Required Runtime",
      installation: "Professional Installation",
    },

    features: [
      "Load assessment",
      "UPS or inverter selection",
      "Battery sizing",
      "Power distribution",
      "Installation",
      "Testing",
      "Maintenance support",
    ],

    keywords: [
      "office power backup",
      "office ups solution",
      "business power backup",
      "computer backup solution",
      "office inverter solution",
    ],

    tags: ["Office", "Complete Solution", "Power Backup"],

    icon: Building2,
  },

  {
    id: "power-backup-server-room",
    name: "Server Room Power Backup Solution",
    category: "UPS & Inverters",
    service: "Power Backup Solution",
    type: "Complete Power Solution",
    subtype: "Server Room Backup",

    description:
      "Power backup solution designed for servers, network switches, storage, firewalls, CCTV systems, and other critical IT equipment.",

    useCases: [
      "Server room backup",
      "Network infrastructure backup",
      "Server protection",
      "Storage backup power",
      "Firewall backup",
      "CCTV NVR backup",
    ],

    environments: [
      "Server Room",
      "Network Room",
      "Data Center",
      "Control Room",
    ],

    specifications: {
      solution:
        "Online UPS + Battery Bank + Rack PDU + Monitoring",
      design: "Load and Runtime Based",
      backup: "Configured According to Critical Load",
      installation: "Professional Installation",
    },

    features: [
      "Load assessment",
      "UPS sizing",
      "Battery bank sizing",
      "Rack power distribution",
      "Power monitoring",
      "Installation",
      "Testing",
    ],

    keywords: [
      "server room ups",
      "server room power backup",
      "data center power backup",
      "server backup power",
      "network room ups",
      "rack power backup",
    ],

    tags: ["Server Room", "Online UPS", "Power Solution"],

    icon: Server,
  },

  {
    id: "power-backup-cctv",
    name: "CCTV Power Backup Solution",
    category: "UPS & Inverters",
    service: "CCTV Power Backup",
    type: "Complete Power Solution",
    subtype: "CCTV Backup",

    description:
      "Power backup solution for CCTV cameras, NVR/DVR systems, PoE switches, monitors, and related surveillance equipment.",

    useCases: [
      "CCTV camera backup",
      "NVR backup",
      "DVR backup",
      "PoE switch backup",
      "Security room backup",
      "Continuous surveillance support",
    ],

    environments: [
      "Home",
      "Office",
      "Shop",
      "Warehouse",
      "Factory",
      "Apartment",
      "Security Room",
    ],

    specifications: {
      solution:
        "UPS / Inverter + Battery sized for CCTV Equipment",
      loads: "Cameras / NVR / DVR / PoE Switch / Monitor",
      backup: "Runtime Based",
    },

    features: [
      "CCTV load calculation",
      "UPS selection",
      "Battery sizing",
      "PoE equipment protection",
      "NVR/DVR backup",
      "Testing",
    ],

    keywords: [
      "cctv ups",
      "cctv power backup",
      "camera power backup",
      "nvr ups",
      "dvr ups",
      "poe switch ups",
      "security system backup power",
    ],

    tags: ["CCTV", "UPS", "Security Backup"],

    icon: Monitor,
  },
];

export default upsInverterProducts;