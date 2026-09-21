import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  Lock,
  KeyRound,
  Fingerprint,
  ScanFace,
  BadgeCheck,
  DoorOpen,
  Siren,
  BellRing,
  Radio,
  Eye,
  Video,
  Monitor,
  Laptop,
  Router,
  Globe,
  Wifi,
  Network,
  Server,
  Database,
  Users,
  UserCheck,
  FileSearch,
  Activity,
  Settings,
  Smartphone,
  Cloud,
  HardDrive,
  Usb,
  MailWarning,
} from "lucide-react";

const securityProducts = [
  // =========================================================
  // ENDPOINT SECURITY
  // =========================================================

  {
    id: "security-antivirus",
    name: "Antivirus Protection",
    category: "Security",
    service: "Endpoint Security",
    type: "Endpoint Security",
    subtype: "Antivirus",

    description:
      "Security software designed to protect computers and servers from viruses, malicious files, unwanted programs, and common malware threats.",

    useCases: [
      "Office computers",
      "Home computers",
      "Business laptops",
      "Windows systems",
      "Linux systems where supported",
      "Small business security",
      "Server protection",
    ],

    environments: [
      "Office",
      "Home",
      "Business",
      "Server",
      "School",
      "Retail",
    ],

    specifications: {
      protection: "Malware and Virus Protection",
      deployment: "Endpoint Based",
      monitoring: "Real-Time Protection",
      management: "Local / Centralized depending on solution",
    },

    features: [
      "Real-time protection",
      "Malware detection",
      "Virus scanning",
      "Scheduled scanning",
      "Threat quarantine",
      "Security alerts",
      "Automatic updates",
    ],

    keywords: [
      "antivirus",
      "computer antivirus",
      "server antivirus",
      "malware protection",
      "virus protection",
      "endpoint antivirus",
      "pc security",
    ],

    tags: ["Antivirus", "Endpoint", "Malware Protection"],

    icon: ShieldCheck,
  },

  {
    id: "security-endpoint-protection",
    name: "Endpoint Protection",
    category: "Security",
    service: "Endpoint Security",
    type: "Endpoint Security",
    subtype: "Endpoint Protection",

    description:
      "Centralized endpoint security for protecting company computers and devices against malware, unauthorized activity, and common security threats.",

    useCases: [
      "Office computers",
      "Company laptops",
      "Employee systems",
      "Business networks",
      "Multi-user environments",
      "Remote workforce",
    ],

    environments: [
      "Office",
      "Enterprise",
      "Remote Work",
      "School",
      "Business",
    ],

    specifications: {
      protection: "Endpoint Security",
      management: "Centralized Management",
      monitoring: "Continuous",
      deployment: "Multiple Endpoints",
    },

    features: [
      "Centralized management",
      "Endpoint monitoring",
      "Threat detection",
      "Security policies",
      "Device protection",
      "Security alerts",
      "Reporting",
    ],

    keywords: [
      "endpoint protection",
      "endpoint security",
      "computer security",
      "business endpoint security",
      "company pc protection",
      "laptop security",
    ],

    tags: ["Endpoint", "Business Security", "Centralized"],

    icon: Laptop,
  },

  {
    id: "security-edr",
    name: "Endpoint Detection & Response",
    category: "Security",
    service: "Endpoint Security",
    type: "Endpoint Security",
    subtype: "EDR",

    description:
      "Advanced endpoint security solution that monitors device activity, detects suspicious behavior, and helps security teams investigate and respond to threats.",

    useCases: [
      "Business endpoints",
      "Server monitoring",
      "Security operations",
      "Threat investigation",
      "Suspicious activity detection",
      "Incident response",
    ],

    environments: [
      "Enterprise",
      "Office",
      "Data Center",
      "Security Operations",
    ],

    specifications: {
      technology: "Endpoint Detection and Response",
      monitoring: "Continuous",
      management: "Centralized",
      response: "Threat Investigation and Response",
    },

    features: [
      "Behavior monitoring",
      "Threat detection",
      "Security alerts",
      "Investigation support",
      "Endpoint visibility",
      "Incident response",
      "Activity monitoring",
    ],

    keywords: [
      "edr",
      "endpoint detection",
      "endpoint response",
      "threat detection",
      "security monitoring",
      "endpoint threat monitoring",
    ],

    tags: ["EDR", "Threat Detection", "Endpoint"],

    icon: ShieldAlert,
  },

  {
    id: "security-usb-control",
    name: "USB Device Control",
    category: "Security",
    service: "Endpoint Security",
    type: "Endpoint Security",
    subtype: "USB Control",

    description:
      "Security control for managing USB storage and removable devices connected to company computers.",

    useCases: [
      "Prevent unauthorized USB usage",
      "Protect company data",
      "Office computers",
      "Government offices",
      "Financial organizations",
      "Shared computers",
    ],

    environments: [
      "Office",
      "Enterprise",
      "Government",
      "School",
      "Business",
    ],

    specifications: {
      control: "USB and Removable Devices",
      management: "Centralized / Endpoint",
      policy: "Allow / Block / Restrict",
    },

    features: [
      "USB blocking",
      "Device control",
      "Access policies",
      "Removable storage management",
      "Security logging",
    ],

    keywords: [
      "usb security",
      "usb control",
      "block usb",
      "usb device control",
      "usb access control",
      "data protection usb",
    ],

    tags: ["USB", "Endpoint", "Data Protection"],

    icon: Usb,
  },

  {
    id: "security-application-control",
    name: "Application Control",
    category: "Security",
    service: "Endpoint Security",
    type: "Endpoint Security",
    subtype: "Application Control",

    description:
      "Security solution that controls which applications can run on company computers and helps reduce unauthorized software usage.",

    useCases: [
      "Office computers",
      "Shared systems",
      "Kiosk computers",
      "Business workstations",
      "Restricted environments",
    ],

    environments: [
      "Office",
      "Enterprise",
      "Kiosk",
      "School",
      "Business",
    ],

    specifications: {
      control: "Application Execution",
      policy: "Allow / Block",
      management: "Centralized / Endpoint",
    },

    features: [
      "Application allowlisting",
      "Application blocking",
      "Software control",
      "Security policies",
      "Centralized administration",
    ],

    keywords: [
      "application control",
      "software control",
      "application security",
      "block applications",
      "allowlist applications",
    ],

    tags: ["Application Control", "Endpoint"],

    icon: Settings,
  },

  // =========================================================
  // FIREWALL & NETWORK SECURITY
  // =========================================================

  {
    id: "security-firewall",
    name: "Network Firewall",
    category: "Security",
    service: "Network Security",
    type: "Firewall",
    subtype: "Network Firewall",

    description:
      "Network security system that controls incoming and outgoing network traffic according to configured security rules.",

    useCases: [
      "Office internet security",
      "Server protection",
      "Network segmentation",
      "Internet access control",
      "Business network security",
      "Branch office security",
    ],

    environments: [
      "Office",
      "Business",
      "Enterprise",
      "Server Room",
      "Data Center",
    ],

    specifications: {
      function: "Network Traffic Filtering",
      deployment: "Network Gateway",
      protection: "Inbound and Outbound Traffic",
      management: "Web / Centralized depending on solution",
    },

    features: [
      "Traffic filtering",
      "Access rules",
      "Network segmentation",
      "Port control",
      "IP filtering",
      "Logging",
      "Security policies",
    ],

    keywords: [
      "firewall",
      "network firewall",
      "office firewall",
      "server firewall",
      "internet firewall",
      "network security firewall",
    ],

    tags: ["Firewall", "Network Security"],

    icon: Shield,
  },

  {
    id: "security-ngfw",
    name: "Next Generation Firewall",
    category: "Security",
    service: "Network Security",
    type: "Firewall",
    subtype: "NGFW",

    description:
      "Advanced firewall platform combining network traffic control with additional security inspection and application-aware policies.",

    useCases: [
      "Business internet security",
      "Enterprise networks",
      "Branch offices",
      "Server networks",
      "Application control",
      "Advanced traffic inspection",
    ],

    environments: [
      "Enterprise",
      "Business",
      "Data Center",
      "Branch Office",
    ],

    specifications: {
      type: "Next Generation Firewall",
      inspection: "Application and Network Traffic",
      deployment: "Network Gateway",
      management: "Centralized / Web Management",
    },

    features: [
      "Application control",
      "Traffic inspection",
      "Security policies",
      "VPN support",
      "Threat prevention features",
      "Network visibility",
      "Logging",
    ],

    keywords: [
      "ngfw",
      "next generation firewall",
      "advanced firewall",
      "enterprise firewall",
      "application firewall",
      "business firewall",
    ],

    tags: ["NGFW", "Firewall", "Enterprise"],

    icon: ShieldCheck,
  },

  {
    id: "security-utm",
    name: "Unified Threat Management Firewall",
    category: "Security",
    service: "Network Security",
    type: "Firewall",
    subtype: "UTM",

    description:
      "Integrated security appliance combining multiple network protection functions into a single managed security platform.",

    useCases: [
      "Small business",
      "Medium business",
      "Office internet security",
      "Branch offices",
      "Network protection",
      "VPN connectivity",
    ],

    environments: [
      "Office",
      "SMB",
      "Branch Office",
      "Business",
    ],

    specifications: {
      type: "Unified Threat Management",
      deployment: "Network Gateway",
      functions: "Firewall / VPN / Filtering / Security Controls",
      management: "Centralized / Web",
    },

    features: [
      "Firewall",
      "VPN",
      "Web filtering",
      "Application control",
      "Traffic monitoring",
      "Security reporting",
    ],

    keywords: [
      "utm firewall",
      "utm",
      "unified threat management",
      "business security appliance",
      "office security appliance",
    ],

    tags: ["UTM", "Firewall", "SMB"],

    icon: Router,
  },

  {
    id: "security-ids",
    name: "Intrusion Detection System",
    category: "Security",
    service: "Network Security",
    type: "Network Security",
    subtype: "IDS",

    description:
      "Network security monitoring system designed to detect suspicious or potentially malicious network activity and generate alerts.",

    useCases: [
      "Network monitoring",
      "Security monitoring",
      "Server network protection",
      "Threat detection",
      "Security operations",
    ],

    environments: [
      "Enterprise",
      "Data Center",
      "Server Room",
      "Security Operations",
    ],

    specifications: {
      type: "Intrusion Detection",
      monitoring: "Network Traffic",
      response: "Alerting",
      deployment: "Network Monitoring",
    },

    features: [
      "Traffic analysis",
      "Threat alerts",
      "Suspicious activity detection",
      "Security logs",
      "Network visibility",
    ],

    keywords: [
      "ids",
      "intrusion detection",
      "network intrusion detection",
      "security monitoring",
      "network threat detection",
    ],

    tags: ["IDS", "Network Security", "Monitoring"],

    icon: Eye,
  },

  {
    id: "security-ips",
    name: "Intrusion Prevention System",
    category: "Security",
    service: "Network Security",
    type: "Network Security",
    subtype: "IPS",

    description:
      "Network security system designed to detect suspicious traffic and apply configured prevention actions.",

    useCases: [
      "Network threat prevention",
      "Enterprise security",
      "Server network protection",
      "Internet gateway protection",
      "Security operations",
    ],

    environments: [
      "Enterprise",
      "Data Center",
      "Server Room",
      "Business",
    ],

    specifications: {
      type: "Intrusion Prevention",
      monitoring: "Network Traffic",
      action: "Detection and Prevention",
      deployment: "Network Security Gateway",
    },

    features: [
      "Threat detection",
      "Traffic inspection",
      "Prevention policies",
      "Security alerts",
      "Network monitoring",
      "Logging",
    ],

    keywords: [
      "ips",
      "intrusion prevention",
      "network threat prevention",
      "intrusion prevention system",
      "network security",
    ],

    tags: ["IPS", "Network Security", "Threat Prevention"],

    icon: ShieldAlert,
  },

  {
    id: "security-vpn",
    name: "VPN Security Solution",
    category: "Security",
    service: "Network Security",
    type: "Network Security",
    subtype: "VPN",

    description:
      "Secure network connectivity solution for connecting remote users, offices, branches, and private networks over the internet.",

    useCases: [
      "Remote employee access",
      "Branch office connectivity",
      "Site-to-site connectivity",
      "Secure remote administration",
      "Private network access",
    ],

    environments: [
      "Office",
      "Remote Work",
      "Branch Office",
      "Enterprise",
      "Data Center",
    ],

    specifications: {
      type: "VPN",
      connectivity: "Encrypted Network Connection",
      deployment: "Gateway / Server / Client",
      access: "Remote / Site-to-Site",
    },

    features: [
      "Encrypted connection",
      "Remote access",
      "Site-to-site VPN",
      "User authentication",
      "Private network access",
      "Secure administration",
    ],

    keywords: [
      "vpn",
      "vpn firewall",
      "remote vpn",
      "office vpn",
      "site to site vpn",
      "secure remote access",
    ],

    tags: ["VPN", "Remote Access", "Network Security"],

    icon: Lock,
  },

  {
    id: "security-web-filtering",
    name: "Web & Content Filtering",
    category: "Security",
    service: "Network Security",
    type: "Network Security",
    subtype: "Web Filtering",

    description:
      "Network security service for controlling access to websites and web content according to organizational policies.",

    useCases: [
      "Office internet control",
      "School internet control",
      "Employee browsing policies",
      "Guest network protection",
      "Productivity management",
    ],

    environments: [
      "Office",
      "School",
      "College",
      "Business",
      "Public Network",
    ],

    specifications: {
      function: "Web Traffic Filtering",
      deployment: "Gateway / Network Security",
      policy: "Allow / Block / Category Based",
    },

    features: [
      "Website filtering",
      "Category blocking",
      "Access policies",
      "Internet usage monitoring",
      "Security reporting",
    ],

    keywords: [
      "web filtering",
      "content filtering",
      "website blocking",
      "internet filtering",
      "office internet control",
      "school internet filter",
    ],

    tags: ["Web Filtering", "Internet Security"],

    icon: Globe,
  },

  // =========================================================
  // IDENTITY & ACCESS CONTROL
  // =========================================================

  {
    id: "security-access-control",
    name: "Door Access Control System",
    category: "Security",
    service: "Access Control",
    type: "Physical Security",
    subtype: "Door Access Control",

    description:
      "Electronic access control system for managing who can enter authorized doors and restricted areas.",

    useCases: [
      "Office doors",
      "Server rooms",
      "Restricted areas",
      "Factories",
      "Schools",
      "Hospitals",
      "Apartment buildings",
    ],

    environments: [
      "Office",
      "Factory",
      "School",
      "Hospital",
      "Apartment",
      "Server Room",
    ],

    specifications: {
      authentication: "Card / PIN / Biometric depending on configuration",
      control: "Electronic Door Lock",
      management: "Access Controller / Software",
      logging: "Entry and Exit Events",
    },

    features: [
      "Controlled entry",
      "User management",
      "Access permissions",
      "Entry logs",
      "Door lock integration",
      "Restricted area management",
    ],

    keywords: [
      "access control",
      "door access control",
      "office access control",
      "electronic door lock",
      "security door system",
      "restricted access",
    ],

    tags: ["Access Control", "Door Security"],

    icon: DoorOpen,
  },

  {
    id: "security-biometric-access",
    name: "Biometric Access Control",
    category: "Security",
    service: "Access Control",
    type: "Physical Security",
    subtype: "Biometric Access",

    description:
      "Access control system using biometric identification such as fingerprint or facial recognition for authorized entry.",

    useCases: [
      "Office entry",
      "Restricted rooms",
      "Server rooms",
      "Factories",
      "Corporate buildings",
      "Employee access",
    ],

    environments: [
      "Office",
      "Factory",
      "Enterprise",
      "Server Room",
      "Restricted Area",
    ],

    specifications: {
      authentication: "Fingerprint / Face",
      control: "Electronic Door Access",
      management: "Centralized / Local",
      logging: "Access Events",
    },

    features: [
      "Biometric authentication",
      "User enrollment",
      "Access permissions",
      "Entry logs",
      "Restricted access",
      "Attendance integration where supported",
    ],

    keywords: [
      "biometric access",
      "fingerprint door access",
      "face access control",
      "biometric door lock",
      "office biometric security",
    ],

    tags: ["Biometric", "Access Control", "Fingerprint"],

    icon: Fingerprint,
  },

  {
    id: "security-face-access",
    name: "Face Recognition Access System",
    category: "Security",
    service: "Access Control",
    type: "Physical Security",
    subtype: "Face Recognition",

    description:
      "Access control system that uses facial recognition technology for authorized entry into secured areas.",

    useCases: [
      "Office entry",
      "Corporate buildings",
      "Restricted rooms",
      "Employee access",
      "High-security areas",
    ],

    environments: [
      "Office",
      "Enterprise",
      "Factory",
      "Restricted Area",
    ],

    specifications: {
      authentication: "Face Recognition",
      control: "Electronic Access",
      management: "Access Control Software",
      logging: "Entry Events",
    },

    features: [
      "Face-based authentication",
      "User management",
      "Access permissions",
      "Entry logs",
      "Contactless access",
    ],

    keywords: [
      "face recognition access",
      "face door access",
      "facial access control",
      "face biometric",
      "face recognition security",
    ],

    tags: ["Face Recognition", "Biometric", "Access"],

    icon: ScanFace,
  },

  {
    id: "security-rfid-access",
    name: "RFID Card Access Control",
    category: "Security",
    service: "Access Control",
    type: "Physical Security",
    subtype: "RFID Access",

    description:
      "Card-based access control system using RFID cards or tags to authorize entry to secured doors.",

    useCases: [
      "Office entry",
      "Employee access",
      "Apartment access",
      "Hotel access",
      "Restricted rooms",
      "Parking access",
    ],

    environments: [
      "Office",
      "Apartment",
      "Hotel",
      "Factory",
      "School",
      "Parking",
    ],

    specifications: {
      authentication: "RFID Card / Tag",
      control: "Electronic Door Controller",
      management: "Access Control Software",
      logging: "Entry Events",
    },

    features: [
      "RFID authentication",
      "Card management",
      "Access permissions",
      "Entry logging",
      "Card replacement",
    ],

    keywords: [
      "rfid access control",
      "rfid door access",
      "card access",
      "access card system",
      "rfid security",
    ],

    tags: ["RFID", "Access Control", "Card"],

    icon: BadgeCheck,
  },

  {
    id: "security-visitor-management",
    name: "Visitor Management System",
    category: "Security",
    service: "Access Control",
    type: "Security Management",
    subtype: "Visitor Management",

    description:
      "Visitor management system for registering guests, maintaining visitor records, issuing visitor identification, and controlling access.",

    useCases: [
      "Corporate offices",
      "Apartment communities",
      "Hospitals",
      "Schools",
      "Factories",
      "Business parks",
      "Reception areas",
    ],

    environments: [
      "Office",
      "Apartment",
      "Hospital",
      "School",
      "Factory",
      "Corporate Campus",
    ],

    specifications: {
      registration: "Visitor Registration",
      identification: "Visitor Pass / ID",
      management: "Digital Visitor Records",
      access: "Optional Access Control Integration",
    },

    features: [
      "Visitor registration",
      "Visitor records",
      "Host notification",
      "Visitor passes",
      "Entry and exit tracking",
      "Searchable history",
    ],

    keywords: [
      "visitor management",
      "visitor management system",
      "office visitor system",
      "visitor registration",
      "digital visitor register",
    ],

    tags: ["Visitor Management", "Office Security"],

    icon: UserCheck,
  },

  // =========================================================
  // ATTENDANCE
  // =========================================================

  {
    id: "security-biometric-attendance",
    name: "Biometric Attendance System",
    category: "Security",
    service: "Attendance",
    type: "Biometric System",
    subtype: "Attendance",

    description:
      "Employee attendance system using biometric or other supported authentication methods to record employee check-in and check-out times.",

    useCases: [
      "Employee attendance",
      "Office attendance",
      "Factory attendance",
      "School staff attendance",
      "Shift management",
      "Workforce tracking",
    ],

    environments: [
      "Office",
      "Factory",
      "School",
      "Warehouse",
      "Business",
    ],

    specifications: {
      authentication: "Fingerprint / Face / Card depending on device",
      records: "Check-in / Check-out",
      management: "Attendance Software",
      reporting: "Attendance Reports",
    },

    features: [
      "Employee enrollment",
      "Attendance recording",
      "Shift management",
      "Attendance reports",
      "Device synchronization",
      "Exportable records",
    ],

    keywords: [
      "biometric attendance",
      "fingerprint attendance",
      "face attendance",
      "employee attendance machine",
      "office attendance system",
      "attendance software",
    ],

    tags: ["Attendance", "Biometric", "Employee Management"],

    icon: Fingerprint,
  },

  // =========================================================
  // PHYSICAL SECURITY / ALARM
  // =========================================================

  {
    id: "security-alarm-system",
    name: "Security Alarm System",
    category: "Security",
    service: "Alarm & Intrusion Security",
    type: "Alarm System",
    subtype: "Security Alarm",

    description:
      "Electronic alarm system designed to alert occupants or security personnel when unauthorized entry or configured security events are detected.",

    useCases: [
      "Home security",
      "Office security",
      "Shop security",
      "Warehouse security",
      "Factory security",
      "Restricted areas",
    ],

    environments: [
      "Home",
      "Office",
      "Shop",
      "Warehouse",
      "Factory",
    ],

    specifications: {
      system: "Intrusion Alarm",
      detection: "Door / Motion / Sensor Inputs",
      alert: "Local Alarm / Notification depending on system",
      control: "Alarm Panel",
    },

    features: [
      "Intrusion alerts",
      "Alarm panel",
      "Sensor integration",
      "Arming and disarming",
      "Security notifications",
    ],

    keywords: [
      "alarm system",
      "security alarm",
      "office alarm",
      "shop alarm",
      "intrusion alarm",
      "burglar alarm",
    ],

    tags: ["Alarm", "Intrusion", "Physical Security"],

    icon: Siren,
  },

  {
    id: "security-motion-sensor",
    name: "Motion Detection Sensor",
    category: "Security",
    service: "Alarm & Intrusion Security",
    type: "Security Sensor",
    subtype: "Motion Sensor",

    description:
      "Motion detection sensor used to identify movement within a protected area and trigger configured security actions.",

    useCases: [
      "Room security",
      "Office security",
      "Home security",
      "Warehouse monitoring",
      "Alarm systems",
      "Restricted areas",
    ],

    environments: [
      "Home",
      "Office",
      "Warehouse",
      "Shop",
      "Factory",
    ],

    specifications: {
      sensorType: "Motion Detection",
      integration: "Alarm / Security System",
      installation: "Indoor / Outdoor depending on model",
      detection: "Movement Detection",
    },

    features: [
      "Motion detection",
      "Alarm integration",
      "Area monitoring",
      "Security event triggering",
      "Low-maintenance operation",
    ],

    keywords: [
      "motion sensor",
      "security motion sensor",
      "pir sensor",
      "intrusion sensor",
      "alarm motion sensor",
    ],

    tags: ["Motion Sensor", "Alarm", "Security"],

    icon: Radio,
  },

  {
    id: "security-door-sensor",
    name: "Door & Window Sensor",
    category: "Security",
    service: "Alarm & Intrusion Security",
    type: "Security Sensor",
    subtype: "Door Sensor",

    description:
      "Door and window contact sensor used to detect opening or closing of protected doors and windows.",

    useCases: [
      "Home security",
      "Office security",
      "Shop security",
      "Server room security",
      "Warehouse security",
      "Restricted rooms",
    ],

    environments: [
      "Home",
      "Office",
      "Shop",
      "Warehouse",
      "Server Room",
    ],

    specifications: {
      sensorType: "Door / Window Contact",
      detection: "Open / Close",
      integration: "Alarm / Access Control / Smart Security",
    },

    features: [
      "Door opening detection",
      "Window monitoring",
      "Alarm integration",
      "Security alerts",
      "Simple installation",
    ],

    keywords: [
      "door sensor",
      "window sensor",
      "door alarm sensor",
      "magnetic door sensor",
      "security door sensor",
    ],

    tags: ["Door Sensor", "Alarm", "Intrusion"],

    icon: DoorOpen,
  },

  // =========================================================
  // CCTV / VIDEO SECURITY
  // =========================================================

  {
    id: "security-video-door-phone",
    name: "Video Door Phone",
    category: "Security",
    service: "Physical Security",
    type: "Video Security",
    subtype: "Video Door Phone",

    description:
      "Door communication and video security system that allows occupants to see and communicate with visitors before granting access.",

    useCases: [
      "Homes",
      "Apartments",
      "Offices",
      "Villas",
      "Clinics",
      "Small businesses",
    ],

    environments: [
      "Home",
      "Apartment",
      "Office",
      "Villa",
      "Business",
    ],

    specifications: {
      system: "Video Door Communication",
      communication: "Two-Way Audio",
      video: "Visitor Video",
      access: "Optional Door Unlock Integration",
    },

    features: [
      "Visitor video",
      "Two-way communication",
      "Door unlock support",
      "Indoor monitor",
      "Outdoor calling unit",
    ],

    keywords: [
      "video door phone",
      "video doorbell",
      "office video door phone",
      "apartment video door phone",
      "visitor video system",
    ],

    tags: ["Video Door Phone", "Door Security"],

    icon: Video,
  },

  {
    id: "security-cctv-monitoring",
    name: "CCTV Monitoring System",
    category: "Security",
    service: "CCTV Security",
    type: "Video Surveillance",
    subtype: "CCTV Monitoring",

    description:
      "Centralized CCTV monitoring solution for viewing and managing security cameras across homes, offices, shops, warehouses, and other premises.",

    useCases: [
      "Office surveillance",
      "Home surveillance",
      "Shop monitoring",
      "Warehouse monitoring",
      "Factory security",
      "Apartment security",
      "School security",
      "Hospital security",
    ],

    environments: [
      "Home",
      "Office",
      "Shop",
      "Warehouse",
      "Factory",
      "School",
      "Hospital",
      "Apartment",
    ],

    specifications: {
      system: "CCTV Surveillance",
      monitoring: "Live and Recorded Video",
      storage: "NVR / DVR / Network Storage",
      access: "Local / Remote depending on configuration",
    },

    features: [
      "Live camera viewing",
      "Recording",
      "Playback",
      "Remote viewing",
      "Multi-camera monitoring",
      "Motion-based search where supported",
    ],

    keywords: [
      "cctv",
      "cctv monitoring",
      "security cameras",
      "camera surveillance",
      "office cctv",
      "shop cctv",
      "warehouse cctv",
    ],

    tags: ["CCTV", "Video Surveillance", "Monitoring"],

    icon: Video,
  },

  // =========================================================
  // SECURITY SOFTWARE
  // =========================================================

  {
    id: "security-vms",
    name: "Video Management System",
    category: "Security",
    service: "Security Software",
    type: "Security Software",
    subtype: "VMS",

    description:
      "Video management software for centrally viewing, recording, organizing, searching, and managing compatible security cameras.",

    useCases: [
      "CCTV monitoring",
      "Multi-site surveillance",
      "Security control rooms",
      "Enterprise CCTV",
      "Warehouse monitoring",
      "Campus surveillance",
    ],

    environments: [
      "Security Room",
      "Control Room",
      "Enterprise",
      "Warehouse",
      "Campus",
    ],

    specifications: {
      software: "Video Management System",
      cameras: "Compatible IP / Network Cameras",
      functions: "Live View / Recording / Playback",
      deployment: "Server / Workstation / Network",
    },

    features: [
      "Live camera viewing",
      "Recording management",
      "Playback",
      "Camera grouping",
      "User permissions",
      "Event search",
      "Multi-camera layouts",
    ],

    keywords: [
      "vms",
      "video management system",
      "cctv software",
      "camera management software",
      "surveillance software",
      "video surveillance software",
    ],

    tags: ["VMS", "CCTV Software", "Surveillance"],

    icon: Monitor,
  },

  {
    id: "security-remote-cctv",
    name: "Remote CCTV Monitoring",
    category: "Security",
    service: "Security Software",
    type: "CCTV Service",
    subtype: "Remote Monitoring",

    description:
      "Remote CCTV access solution that allows authorized users to monitor cameras and review recordings from supported computers or mobile devices.",

    useCases: [
      "Business owners monitoring shops",
      "Remote office monitoring",
      "Warehouse monitoring",
      "Home monitoring",
      "Multi-location businesses",
      "After-hours surveillance",
    ],

    environments: [
      "Home",
      "Office",
      "Shop",
      "Warehouse",
      "Factory",
      "Multi-Site Business",
    ],

    specifications: {
      access: "Remote CCTV Access",
      devices: "Computer / Smartphone / Tablet",
      functions: "Live View / Playback",
      connectivity: "Internet / Network",
    },

    features: [
      "Remote live view",
      "Remote playback",
      "Multi-location monitoring",
      "Mobile access",
      "User authentication",
    ],

    keywords: [
      "remote cctv",
      "remote camera monitoring",
      "mobile cctv",
      "cctv mobile app",
      "view cctv remotely",
      "remote surveillance",
    ],

    tags: ["Remote CCTV", "Mobile Monitoring"],

    icon: Smartphone,
  },

  {
    id: "security-network-monitoring",
    name: "Network Security Monitoring",
    category: "Security",
    service: "Security Software",
    type: "Security Monitoring",
    subtype: "Network Monitoring",

    description:
      "Network monitoring solution for observing devices, traffic, availability, and security-related events across an organization's network.",

    useCases: [
      "Office network monitoring",
      "Server monitoring",
      "Network troubleshooting",
      "Security monitoring",
      "Data center monitoring",
      "Branch network monitoring",
    ],

    environments: [
      "Office",
      "Enterprise",
      "Server Room",
      "Data Center",
      "Branch Office",
    ],

    specifications: {
      monitoring: "Network Devices and Traffic",
      devices: "Routers / Switches / Servers / Firewalls",
      alerts: "Availability / Performance / Events",
      management: "Centralized Dashboard",
    },

    features: [
      "Device monitoring",
      "Availability monitoring",
      "Performance monitoring",
      "Alerts",
      "Dashboards",
      "Historical reporting",
    ],

    keywords: [
      "network monitoring",
      "network security monitoring",
      "network monitoring software",
      "server network monitoring",
      "switch monitoring",
      "router monitoring",
    ],

    tags: ["Network Monitoring", "Security", "Infrastructure"],

    icon: Activity,
  },

  {
    id: "security-log-management",
    name: "Security Log Management",
    category: "Security",
    service: "Security Software",
    type: "Security Monitoring",
    subtype: "Log Management",

    description:
      "Centralized log management solution for collecting, organizing, searching, and reviewing security and system logs.",

    useCases: [
      "Server log monitoring",
      "Firewall log monitoring",
      "Security investigation",
      "System troubleshooting",
      "Compliance support",
      "Incident investigation",
    ],

    environments: [
      "Enterprise",
      "Data Center",
      "Server Room",
      "Security Operations",
    ],

    specifications: {
      function: "Centralized Log Collection",
      sources: "Servers / Firewalls / Network Devices / Applications",
      storage: "Centralized Log Repository",
      search: "Search and Filtering",
    },

    features: [
      "Centralized logs",
      "Search",
      "Filtering",
      "Log retention",
      "Security event review",
      "Alerting where supported",
    ],

    keywords: [
      "log management",
      "security logs",
      "centralized logging",
      "server logs",
      "firewall logs",
      "security log monitoring",
    ],

    tags: ["Logs", "Security Monitoring", "SIEM"],

    icon: FileSearch,
  },

  {
    id: "security-siem",
    name: "Security Information & Event Management",
    category: "Security",
    service: "Security Software",
    type: "Security Monitoring",
    subtype: "SIEM",

    description:
      "Security monitoring platform for collecting and analyzing security events and logs from multiple systems and security devices.",

    useCases: [
      "Security operations",
      "Centralized event monitoring",
      "Threat investigation",
      "Security incident analysis",
      "Enterprise security monitoring",
    ],

    environments: [
      "Enterprise",
      "Security Operations",
      "Data Center",
      "Large Business",
    ],

    specifications: {
      type: "SIEM",
      dataSources: "Servers / Firewalls / Endpoints / Applications",
      analysis: "Security Event Analysis",
      management: "Centralized Security Dashboard",
    },

    features: [
      "Security event collection",
      "Centralized monitoring",
      "Log analysis",
      "Alerting",
      "Event correlation where supported",
      "Investigation tools",
      "Security dashboards",
    ],

    keywords: [
      "siem",
      "security information event management",
      "security monitoring software",
      "security event monitoring",
      "enterprise security monitoring",
      "log analysis",
    ],

    tags: ["SIEM", "Security Monitoring", "Logs"],

    icon: FileSearch,
  },

  // =========================================================
  // DATA SECURITY
  // =========================================================

  {
    id: "security-backup",
    name: "Security Backup Solution",
    category: "Security",
    service: "Data Protection",
    type: "Data Security",
    subtype: "Backup",

    description:
      "Data protection solution designed to maintain recoverable copies of important business files, systems, and configurations.",

    useCases: [
      "Office data backup",
      "Server backup",
      "Business continuity",
      "Protection from accidental deletion",
      "System recovery",
      "Ransomware recovery planning",
    ],

    environments: [
      "Office",
      "Business",
      "Server Room",
      "Data Center",
    ],

    specifications: {
      protection: "Data Backup",
      sources: "Computers / Servers / Applications",
      destination: "NAS / Server / Cloud / External Storage",
      recovery: "File / System Recovery depending on solution",
    },

    features: [
      "Scheduled backups",
      "Data recovery",
      "Versioned backups where supported",
      "Centralized management",
      "Backup monitoring",
      "Recovery testing support",
    ],

    keywords: [
      "security backup",
      "business backup",
      "server backup",
      "data protection",
      "ransomware backup",
      "backup solution",
    ],

    tags: ["Backup", "Data Protection", "Security"],

    icon: HardDrive,
  },

  {
    id: "security-data-protection",
    name: "Data Protection Solution",
    category: "Security",
    service: "Data Security",
    type: "Data Security",
    subtype: "Data Protection",

    description:
      "Security solution focused on protecting important business information from unauthorized access, accidental loss, and common data security risks.",

    useCases: [
      "Business data protection",
      "Employee data protection",
      "Sensitive document protection",
      "File access control",
      "Data loss prevention",
    ],

    environments: [
      "Office",
      "Enterprise",
      "Business",
      "Server Room",
    ],

    specifications: {
      protection: "Business Data",
      controls: "Access / Backup / Monitoring",
      deployment: "Endpoint / Server / Network depending on solution",
    },

    features: [
      "Access control",
      "Data backup",
      "Data monitoring",
      "Permission management",
      "Security policies",
    ],

    keywords: [
      "data protection",
      "data security",
      "business data security",
      "file security",
      "data loss prevention",
      "company data protection",
    ],

    tags: ["Data Security", "Protection"],

    icon: Database,
  },

  // =========================================================
  // SECURITY MANAGEMENT
  // =========================================================

  {
    id: "security-central-management",
    name: "Centralized Security Management",
    category: "Security",
    service: "Security Management",
    type: "Security Platform",
    subtype: "Centralized Management",

    description:
      "Centralized platform for managing security devices, users, policies, alerts, and security events from a single management environment.",

    useCases: [
      "Multi-device security management",
      "Enterprise security",
      "Multiple office locations",
      "Security operations",
      "Centralized administration",
    ],

    environments: [
      "Enterprise",
      "Business",
      "Multi-Site",
      "Security Operations",
    ],

    specifications: {
      management: "Centralized",
      devices: "Security Devices / Endpoints / Network Devices",
      monitoring: "Security Events and Status",
      access: "Role-Based Management where supported",
    },

    features: [
      "Centralized dashboard",
      "Device management",
      "Security policies",
      "Alerts",
      "Reports",
      "User management",
      "Event monitoring",
    ],

    keywords: [
      "security management",
      "centralized security management",
      "security dashboard",
      "security management software",
      "enterprise security management",
    ],

    tags: ["Security Management", "Centralized", "Enterprise"],

    icon: Settings,
  },

  {
    id: "security-server-room",
    name: "Server Room Security",
    category: "Security",
    service: "Physical Security",
    type: "Security Solution",
    subtype: "Server Room Security",

    description:
      "Combined security solution for protecting server rooms through controlled access, CCTV monitoring, alarms, and security monitoring.",

    useCases: [
      "Server room protection",
      "Data center security",
      "Restricted IT rooms",
      "Network rooms",
      "Business infrastructure protection",
    ],

    environments: [
      "Server Room",
      "Data Center",
      "Network Room",
      "IT Facility",
    ],

    specifications: {
      solution:
        "Access Control + CCTV + Alarm + Security Monitoring",
      access: "Restricted Access",
      monitoring: "CCTV and Security Events",
    },

    features: [
      "Restricted door access",
      "CCTV monitoring",
      "Intrusion alarm",
      "Access logging",
      "Security event monitoring",
    ],

    keywords: [
      "server room security",
      "data center security",
      "server room access control",
      "server room cctv",
      "it room security",
    ],

    tags: ["Server Room", "Physical Security", "Access Control"],

    icon: Server,
  },

  {
    id: "security-smartphone-monitoring",
    name: "Mobile Security Monitoring",
    category: "Security",
    service: "Security Software",
    type: "Security Application",
    subtype: "Mobile Monitoring",

    description:
      "Mobile security monitoring solution that provides authorized users with access to selected security alerts, cameras, and system information.",

    useCases: [
      "Business owner monitoring",
      "Remote CCTV access",
      "Security alerts",
      "Multi-site monitoring",
      "Remote security management",
    ],

    environments: [
      "Office",
      "Shop",
      "Warehouse",
      "Factory",
      "Home",
      "Multi-Site Business",
    ],

    specifications: {
      platform: "Smartphone / Tablet",
      access: "Authenticated Remote Access",
      functions: "Alerts / Monitoring / CCTV depending on system",
    },

    features: [
      "Mobile alerts",
      "Remote monitoring",
      "CCTV access",
      "Security notifications",
      "Multi-location access",
    ],

    keywords: [
      "mobile security monitoring",
      "security mobile app",
      "cctv mobile app",
      "remote security app",
      "security alerts mobile",
    ],

    tags: ["Mobile", "Remote Monitoring", "Security"],

    icon: Smartphone,
  },
];

export default securityProducts;