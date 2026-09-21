import {
  Network,
  Router,
  Wifi,
  Cable,
  Server,
  Radio,
  CableIcon,
  PanelsTopLeft,
  Shield,
} from "lucide-react";

/*
=========================================================
 SIRA TECHNOLOGIES
 NETWORKING PRODUCTS
=========================================================
*/

const networkingProducts = [

  // =====================================================
  // NETWORK SWITCHES
  // =====================================================

  {
    id: "network-unmanaged-switch",
    name: "Unmanaged Network Switch",
    category: "Networking",
    service: "Networking",
    type: "Network Switch",
    subtype: "Unmanaged Switch",

    description:
      "Simple plug-and-play network switch for connecting computers, printers, cameras and other network devices without requiring configuration.",

    useCases: [
      "Home network expansion",
      "Small office networking",
      "Connecting computers",
      "Connecting printers",
      "Connecting IP cameras",
      "Small shop networking",
      "Basic LAN expansion",
      "Connecting multiple network devices"
    ],

    environments: [
      "Homes",
      "Small Offices",
      "Shops",
      "Small Businesses",
      "Classrooms",
      "Small CCTV Installations"
    ],

    specifications: {
      management: "Unmanaged",
      configuration: "Plug and Play",
      ports: "5 / 8 / 16 / 24 / 48 - Model Dependent",
      speed: "Fast Ethernet / Gigabit - Model Dependent",
      poe: "Optional - Model Dependent"
    },

    features: [
      "Plug and Play",
      "No Configuration Required",
      "Multiple Ethernet Ports",
      "Easy Installation",
      "Compact Models Available",
      "Gigabit Models Available"
    ],

    keywords: [
      "unmanaged switch",
      "network switch",
      "switch without configuration",
      "plug and play switch",
      "basic network switch",
      "small office switch",
      "home network switch",
      "cctv switch",
      "lan switch"
    ],

    tags: [
      "Networking",
      "Switch",
      "Unmanaged",
      "Plug and Play",
      "LAN"
    ],

    icon: Network
  },

  {
    id: "network-managed-switch",
    name: "Managed Network Switch",
    category: "Networking",
    service: "Networking",
    type: "Network Switch",
    subtype: "Managed Switch",

    description:
      "Configurable network switch for businesses that need VLANs, traffic control, monitoring and network management.",

    useCases: [
      "Business network management",
      "Office VLAN configuration",
      "CCTV network separation",
      "IP phone networks",
      "Wi-Fi network management",
      "Department-wise network separation",
      "Server room networking",
      "Enterprise LAN management",
      "Network traffic monitoring"
    ],

    environments: [
      "Offices",
      "Enterprises",
      "Schools",
      "Hospitals",
      "Factories",
      "Server Rooms",
      "Data Centers"
    ],

    specifications: {
      management: "Managed",
      layer: "Layer 2 / Layer 3 - Model Dependent",
      ports: "8 / 16 / 24 / 48 - Model Dependent",
      speed: "Gigabit / 10G - Model Dependent",
      vlan: "Available - Model Dependent",
      monitoring: "Available - Model Dependent",
      qos: "Available - Model Dependent"
    },

    features: [
      "VLAN Support",
      "Traffic Management",
      "Network Monitoring",
      "Port Configuration",
      "Access Control",
      "QoS",
      "Centralized Management"
    ],

    keywords: [
      "managed switch",
      "configurable switch",
      "vlan switch",
      "business network switch",
      "enterprise switch",
      "cctv managed switch",
      "office managed switch",
      "network management switch"
    ],

    tags: [
      "Networking",
      "Switch",
      "Managed",
      "VLAN",
      "Enterprise"
    ],

    icon: Network
  },

  {
    id: "network-smart-managed-switch",
    name: "Smart Managed Switch",
    category: "Networking",
    service: "Networking",
    type: "Network Switch",
    subtype: "Smart Managed Switch",

    description:
      "Easy-to-manage network switch providing useful business networking features without the complexity of a full enterprise switch.",

    useCases: [
      "Small business networking",
      "Office VLANs",
      "CCTV networking",
      "IP phone networking",
      "Wi-Fi access point connectivity",
      "Network segmentation",
      "Traffic prioritization",
      "Small enterprise networking"
    ],

    environments: [
      "Small Offices",
      "Medium Businesses",
      "Retail Shops",
      "Schools",
      "Clinics",
      "CCTV Installations"
    ],

    specifications: {
      management: "Smart Managed",
      ports: "8 / 16 / 24 / 48 - Model Dependent",
      speed: "Gigabit - Model Dependent",
      vlan: "Available - Model Dependent",
      qos: "Available - Model Dependent"
    },

    features: [
      "Web-Based Management",
      "VLAN",
      "QoS",
      "Port Monitoring",
      "Basic Network Security",
      "Easy Configuration"
    ],

    keywords: [
      "smart managed switch",
      "easy managed switch",
      "small business managed switch",
      "office vlan switch",
      "smart network switch",
      "business switch"
    ],

    tags: [
      "Networking",
      "Smart Managed",
      "VLAN",
      "Business"
    ],

    icon: Network
  },

  {
    id: "network-layer2-switch",
    name: "Layer 2 Network Switch",
    category: "Networking",
    service: "Networking",
    type: "Network Switch",
    subtype: "Layer 2 Switch",

    description:
      "Layer 2 network switch for connecting devices within a local network and managing VLAN-based network segmentation.",

    useCases: [
      "Office LAN",
      "VLAN networking",
      "CCTV network",
      "IP phone network",
      "Wi-Fi network",
      "Department network separation",
      "Local network management"
    ],

    environments: [
      "Offices",
      "Schools",
      "Hospitals",
      "Factories",
      "Server Rooms",
      "Businesses"
    ],

    specifications: {
      layer: "Layer 2",
      vlan: "Available - Model Dependent",
      management: "Managed",
      ports: "8 / 16 / 24 / 48 - Model Dependent",
      speed: "Gigabit - Model Dependent"
    },

    features: [
      "VLAN Support",
      "MAC-Based Switching",
      "Network Segmentation",
      "QoS",
      "Port Management"
    ],

    keywords: [
      "layer 2 switch",
      "l2 switch",
      "vlan switch",
      "managed lan switch",
      "office vlan switch"
    ],

    tags: [
      "Networking",
      "Layer 2",
      "VLAN",
      "Managed"
    ],

    icon: Network
  },

  {
    id: "network-layer3-switch",
    name: "Layer 3 Network Switch",
    category: "Networking",
    service: "Networking",
    type: "Network Switch",
    subtype: "Layer 3 Switch",

    description:
      "Advanced network switch capable of routing traffic between different networks or VLANs.",

    useCases: [
      "Enterprise LAN routing",
      "Inter-VLAN routing",
      "Large office networks",
      "Campus networks",
      "Server network routing",
      "Department network routing",
      "Data center networking"
    ],

    environments: [
      "Enterprises",
      "Data Centers",
      "Large Offices",
      "Schools",
      "Universities",
      "Hospitals",
      "Factories"
    ],

    specifications: {
      layer: "Layer 3",
      routing: "Supported",
      vlan: "Supported",
      management: "Managed",
      ports: "Model Dependent",
      uplink: "Model Dependent"
    },

    features: [
      "Inter-VLAN Routing",
      "Static Routing",
      "Network Segmentation",
      "VLAN",
      "Advanced Management",
      "High-Speed Uplinks"
    ],

    keywords: [
      "layer 3 switch",
      "l3 switch",
      "network routing switch",
      "vlan routing",
      "enterprise switch",
      "inter vlan switch"
    ],

    tags: [
      "Networking",
      "Layer 3",
      "Routing",
      "Enterprise"
    ],

    icon: Network
  },

  {
    id: "network-poe-switch",
    name: "PoE Network Switch",
    category: "Networking",
    service: "Networking",
    type: "Network Switch",
    subtype: "PoE Switch",

    description:
      "Power over Ethernet switch that provides network connectivity and power to compatible devices through Ethernet cables.",

    useCases: [
      "CCTV camera networking",
      "IP camera installation",
      "Wi-Fi access point installation",
      "IP phone installation",
      "VoIP devices",
      "Access control devices",
      "Office CCTV systems",
      "Network device installation"
    ],

    environments: [
      "Homes",
      "Offices",
      "Shops",
      "Hospitals",
      "Schools",
      "Factories",
      "Warehouses",
      "Hotels"
    ],

    specifications: {
      poe: "Yes",
      management: "Managed / Unmanaged - Model Dependent",
      ports: "4 / 8 / 16 / 24 / 48 - Model Dependent",
      speed: "Fast Ethernet / Gigabit - Model Dependent",
      powerBudget: "Model Dependent"
    },

    features: [
      "Power over Ethernet",
      "Network Connectivity",
      "CCTV Support",
      "IP Camera Support",
      "Wi-Fi Access Point Support",
      "IP Phone Support"
    ],

    keywords: [
      "poe switch",
      "power over ethernet switch",
      "cctv poe switch",
      "ip camera switch",
      "wifi access point switch",
      "ip phone switch",
      "camera power switch"
    ],

    tags: [
      "Networking",
      "PoE",
      "CCTV",
      "IP Camera",
      "Wi-Fi"
    ],

    icon: Network
  },

  {
    id: "network-poe-plus-switch",
    name: "PoE+ Network Switch",
    category: "Networking",
    service: "Networking",
    type: "Network Switch",
    subtype: "PoE+ Switch",

    description:
      "Higher-power PoE switch for compatible devices that require more power than standard PoE applications.",

    useCases: [
      "PTZ camera installation",
      "High-power IP cameras",
      "Wi-Fi access points",
      "IP phones",
      "Access control devices",
      "Commercial CCTV systems"
    ],

    environments: [
      "Offices",
      "Factories",
      "Warehouses",
      "Hotels",
      "Schools",
      "Hospitals",
      "Commercial Buildings"
    ],

    specifications: {
      poeStandard: "PoE+",
      power: "Model Dependent",
      ports: "8 / 16 / 24 / 48 - Model Dependent",
      speed: "Gigabit - Model Dependent"
    },

    features: [
      "Higher PoE Power",
      "PTZ Camera Support",
      "IP Camera Support",
      "Access Point Support",
      "IP Phone Support"
    ],

    keywords: [
      "poe plus switch",
      "poe+ switch",
      "ptz camera switch",
      "high power poe switch",
      "cctv poe plus"
    ],

    tags: [
      "Networking",
      "PoE+",
      "CCTV",
      "PTZ",
      "Wi-Fi"
    ],

    icon: Network
  },

  {
    id: "network-poe-plus-plus-switch",
    name: "PoE++ Network Switch",
    category: "Networking",
    service: "Networking",
    type: "Network Switch",
    subtype: "PoE++ Switch",

    description:
      "Higher-power Ethernet switch for compatible devices requiring greater power delivery over network cabling.",

    useCases: [
      "High-power Wi-Fi access points",
      "PTZ cameras",
      "Advanced security devices",
      "IP video systems",
      "Specialized network equipment"
    ],

    environments: [
      "Enterprise Offices",
      "Factories",
      "Warehouses",
      "Campuses",
      "Data Centers",
      "Large CCTV Systems"
    ],

    specifications: {
      poeStandard: "PoE++",
      power: "Model Dependent",
      ports: "Model Dependent",
      speed: "Gigabit / 10G - Model Dependent"
    },

    features: [
      "High Power PoE",
      "PTZ Support",
      "Advanced Access Point Support",
      "IP Device Connectivity"
    ],

    keywords: [
      "poe++ switch",
      "high power poe",
      "poe++ network switch",
      "ptz poe switch",
      "high power cctv switch"
    ],

    tags: [
      "Networking",
      "PoE++",
      "High Power",
      "CCTV"
    ],

    icon: Network
  },

  {
    id: "network-gigabit-switch",
    name: "Gigabit Network Switch",
    category: "Networking",
    service: "Networking",
    type: "Network Switch",
    subtype: "Gigabit Switch",

    description:
      "High-speed Ethernet switch for connecting computers, servers, cameras and network devices on a Gigabit network.",

    useCases: [
      "Office LAN",
      "Server connectivity",
      "CCTV networking",
      "Fast file sharing",
      "NAS connectivity",
      "Desktop networking",
      "Wi-Fi access point connectivity",
      "Internet connectivity"
    ],

    environments: [
      "Offices",
      "Homes",
      "Schools",
      "Hospitals",
      "Factories",
      "Server Rooms",
      "Shops"
    ],

    specifications: {
      speed: "Gigabit Ethernet",
      ports: "5 / 8 / 16 / 24 / 48 - Model Dependent",
      management: "Managed / Unmanaged - Model Dependent"
    },

    features: [
      "Gigabit Ethernet",
      "High-Speed LAN",
      "Fast File Transfer",
      "CCTV Support",
      "Server Connectivity",
      "NAS Connectivity"
    ],

    keywords: [
      "gigabit switch",
      "gigabit network switch",
      "fast network switch",
      "office gigabit switch",
      "cctv gigabit switch",
      "server gigabit switch"
    ],

    tags: [
      "Networking",
      "Gigabit",
      "LAN",
      "High Speed"
    ],

    icon: Network
  },

  {
    id: "network-10g-switch",
    name: "10G Network Switch",
    category: "Networking",
    service: "Networking",
    type: "Network Switch",
    subtype: "10G Switch",

    description:
      "High-bandwidth network switch for servers, storage systems, workstations and applications requiring faster network connectivity.",

    useCases: [
      "Server networking",
      "NAS connectivity",
      "Data center networking",
      "High-speed file transfer",
      "Video production networks",
      "Virtualization networks",
      "High-performance workstations",
      "High-bandwidth applications"
    ],

    environments: [
      "Data Centers",
      "Server Rooms",
      "Enterprise Offices",
      "Studios",
      "Research Facilities"
    ],

    specifications: {
      speed: "10 Gigabit Ethernet",
      ports: "Model Dependent",
      uplink: "SFP+ / Ethernet - Model Dependent"
    },

    features: [
      "10G Connectivity",
      "High-Speed Data Transfer",
      "Server Support",
      "NAS Support",
      "SFP+ Uplinks"
    ],

    keywords: [
      "10g switch",
      "10 gigabit switch",
      "server switch",
      "data center switch",
      "high speed switch",
      "sfp plus switch"
    ],

    tags: [
      "Networking",
      "10G",
      "Server",
      "Data Center"
    ],

    icon: Network
  },

  {
    id: "network-industrial-switch",
    name: "Industrial Network Switch",
    category: "Networking",
    service: "Networking",
    type: "Network Switch",
    subtype: "Industrial Switch",

    description:
      "Industrial-grade network switch designed for demanding environments such as factories, plants and outdoor industrial installations.",

    useCases: [
      "Factory networking",
      "Industrial CCTV",
      "Machine networking",
      "PLC network connectivity",
      "Industrial automation",
      "Plant network connectivity",
      "Outdoor industrial networking"
    ],

    environments: [
      "Factories",
      "Industrial Plants",
      "Power Plants",
      "Warehouses",
      "Outdoor Industrial Areas",
      "Manufacturing Facilities"
    ],

    specifications: {
      type: "Industrial Ethernet",
      ports: "Model Dependent",
      speed: "Fast Ethernet / Gigabit - Model Dependent",
      mounting: "DIN Rail / Wall - Model Dependent"
    },

    features: [
      "Industrial Design",
      "DIN Rail Models",
      "Industrial Ethernet",
      "CCTV Support",
      "Automation Network Support"
    ],

    keywords: [
      "industrial switch",
      "industrial network switch",
      "factory switch",
      "industrial ethernet",
      "industrial cctv switch",
      "din rail switch"
    ],

    tags: [
      "Networking",
      "Industrial",
      "Factory",
      "Ethernet"
    ],

    icon: Network
  },

  {
    id: "network-fiber-switch",
    name: "Fiber Network Switch",
    category: "Networking",
    service: "Networking",
    type: "Network Switch",
    subtype: "Fiber Switch",

    description:
      "Network switch with fiber connectivity for long-distance or high-bandwidth network links.",

    useCases: [
      "Building-to-building networking",
      "Campus networking",
      "Long-distance network links",
      "Server room uplinks",
      "Data center connectivity",
      "Industrial networking",
      "Fiber CCTV networks"
    ],

    environments: [
      "Campuses",
      "Factories",
      "Data Centers",
      "Server Rooms",
      "Large Offices",
      "Industrial Plants"
    ],

    specifications: {
      connectivity: "Fiber / Ethernet",
      fiberType: "Single-Mode / Multi-Mode - Model Dependent",
      uplink: "SFP / SFP+ - Model Dependent",
      speed: "1G / 10G - Model Dependent"
    },

    features: [
      "Fiber Connectivity",
      "Long-Distance Networking",
      "SFP Support",
      "High-Speed Uplinks",
      "CCTV Support"
    ],

    keywords: [
      "fiber switch",
      "fiber network switch",
      "sfp switch",
      "fiber optic switch",
      "long distance network switch",
      "fiber cctv switch"
    ],

    tags: [
      "Networking",
      "Fiber",
      "SFP",
      "Long Distance"
    ],

    icon: Network
  },

  // =====================================================
  // ROUTERS
  // =====================================================

  {
    id: "network-home-router",
    name: "Home Wi-Fi Router",
    category: "Networking",
    service: "Networking",
    type: "Router",
    subtype: "Home Router",

    description:
      "Wi-Fi router for connecting home devices such as phones, laptops, TVs, computers and smart devices to the internet.",

    useCases: [
      "Home internet",
      "Family Wi-Fi",
      "Smart TV connectivity",
      "Laptop connectivity",
      "Mobile device connectivity",
      "Home CCTV connectivity",
      "Gaming devices",
      "Smart home devices"
    ],

    environments: [
      "Homes",
      "Apartments",
      "Small Residences"
    ],

    specifications: {
      connectivity: "WAN / LAN / Wi-Fi",
      wifi: "Model Dependent",
      ports: "Model Dependent",
      speed: "Model Dependent"
    },

    features: [
      "Wi-Fi",
      "Internet Sharing",
      "LAN Connectivity",
      "Guest Wi-Fi",
      "Basic Firewall",
      "Multiple Device Support"
    ],

    keywords: [
      "home router",
      "wifi router",
      "home wifi",
      "internet router",
      "wireless router",
      "house wifi router"
    ],

    tags: [
      "Networking",
      "Router",
      "Wi-Fi",
      "Home"
    ],

    icon: Router
  },

  {
    id: "network-business-router",
    name: "Business Router",
    category: "Networking",
    service: "Networking",
    type: "Router",
    subtype: "Business Router",

    description:
      "Business-focused router for managing internet connectivity, local networks, security and business network services.",

    useCases: [
      "Office internet sharing",
      "Business LAN connectivity",
      "Multiple device networking",
      "VPN connectivity",
      "Network security",
      "Guest network setup",
      "Multiple internet connections",
      "Business network management"
    ],

    environments: [
      "Offices",
      "Small Businesses",
      "Retail Shops",
      "Clinics",
      "Schools",
      "Hotels"
    ],

    specifications: {
      connectivity: "Ethernet / WAN",
      vpn: "Available - Model Dependent",
      firewall: "Available - Model Dependent",
      wifi: "Available - Model Dependent",
      wanPorts: "Model Dependent"
    },

    features: [
      "WAN Connectivity",
      "LAN Routing",
      "Firewall Features",
      "VPN Support",
      "Guest Network",
      "Traffic Management"
    ],

    keywords: [
      "business router",
      "office router",
      "company internet router",
      "business wifi router",
      "vpn router",
      "office internet router"
    ],

    tags: [
      "Networking",
      "Router",
      "Business",
      "Internet"
    ],

    icon: Router
  },

  {
    id: "network-vpn-router",
    name: "VPN Router",
    category: "Networking",
    service: "Networking",
    type: "Router",
    subtype: "VPN Router",

    description:
      "Router designed to support secure VPN connectivity between offices, remote users and business networks.",

    useCases: [
      "Office-to-office VPN",
      "Remote worker connectivity",
      "Secure remote access",
      "Branch office connectivity",
      "Business network security",
      "Remote site networking"
    ],

    environments: [
      "Offices",
      "Businesses",
      "Branch Offices",
      "Remote Sites"
    ],

    specifications: {
      vpn: "Supported - Model Dependent",
      connectivity: "WAN / LAN",
      encryption: "Model Dependent",
      firewall: "Model Dependent"
    },

    features: [
      "VPN Connectivity",
      "Secure Remote Access",
      "Site-to-Site VPN",
      "Firewall",
      "Business Networking"
    ],

    keywords: [
      "vpn router",
      "office vpn",
      "site to site vpn router",
      "remote access router",
      "secure router",
      "business vpn"
    ],

    tags: [
      "Networking",
      "VPN",
      "Security",
      "Router"
    ],

    icon: Shield
  },

  {
    id: "network-firewall-router",
    name: "Firewall Router",
    category: "Networking",
    service: "Networking",
    type: "Router",
    subtype: "Firewall Router",

    description:
      "Router combining network routing with firewall capabilities to help protect business networks from unwanted traffic.",

    useCases: [
      "Office internet security",
      "Network traffic control",
      "Internet access control",
      "Business firewall",
      "VPN connectivity",
      "Network protection"
    ],

    environments: [
      "Offices",
      "Businesses",
      "Schools",
      "Clinics",
      "Retail",
      "Factories"
    ],

    specifications: {
      firewall: "Yes",
      routing: "Yes",
      vpn: "Model Dependent",
      wan: "Model Dependent"
    },

    features: [
      "Firewall",
      "Routing",
      "Traffic Filtering",
      "VPN Support",
      "Network Protection"
    ],

    keywords: [
      "firewall router",
      "router firewall",
      "business firewall router",
      "internet security router",
      "network security router"
    ],

    tags: [
      "Networking",
      "Firewall",
      "Security",
      "Router"
    ],

    icon: Shield
  },

  {
    id: "network-load-balancing-router",
    name: "Load Balancing Router",
    category: "Networking",
    service: "Networking",
    type: "Router",
    subtype: "Load Balancing Router",

    description:
      "Router designed to manage multiple internet connections and distribute network traffic across available links.",

    useCases: [
      "Multiple ISP connections",
      "Internet failover",
      "Office internet load balancing",
      "Business continuity",
      "High-availability internet",
      "Automatic WAN failover"
    ],

    environments: [
      "Businesses",
      "Offices",
      "Hotels",
      "Schools",
      "Clinics",
      "Factories"
    ],

    specifications: {
      wan: "Multiple WAN - Model Dependent",
      loadBalancing: "Supported",
      failover: "Model Dependent",
      vpn: "Model Dependent"
    },

    features: [
      "Multiple WAN",
      "Load Balancing",
      "Internet Failover",
      "Traffic Distribution",
      "Business Continuity"
    ],

    keywords: [
      "load balancing router",
      "dual wan router",
      "multi wan router",
      "internet failover",
      "two internet connection router",
      "multiple isp router"
    ],

    tags: [
      "Networking",
      "Router",
      "Load Balancing",
      "Failover"
    ],

    icon: Router
  },

  {
    id: "network-4g-router",
    name: "4G SIM Router",
    category: "Networking",
    service: "Networking",
    type: "Router",
    subtype: "4G Router",

    description:
      "Router that provides internet connectivity using a 4G SIM card where fixed broadband connectivity may not be available.",

    useCases: [
      "Backup internet",
      "Remote office internet",
      "Construction site connectivity",
      "Farm internet",
      "Temporary office networking",
      "Remote CCTV connectivity",
      "Travel and mobile networking"
    ],

    environments: [
      "Remote Offices",
      "Construction Sites",
      "Farms",
      "Temporary Locations",
      "Remote CCTV Sites"
    ],

    specifications: {
      network: "4G LTE",
      sim: "Yes",
      wifi: "Model Dependent",
      ethernet: "Model Dependent"
    },

    features: [
      "SIM Connectivity",
      "4G Internet",
      "Wi-Fi",
      "Ethernet",
      "Remote Connectivity"
    ],

    keywords: [
      "4g router",
      "sim router",
      "4g wifi router",
      "sim card wifi",
      "remote internet",
      "4g cctv router"
    ],

    tags: [
      "Networking",
      "4G",
      "SIM",
      "Router"
    ],

    icon: Radio
  },

  {
    id: "network-5g-router",
    name: "5G SIM Router",
    category: "Networking",
    service: "Networking",
    type: "Router",
    subtype: "5G Router",

    description:
      "5G cellular router for high-speed internet connectivity using a compatible SIM card.",

    useCases: [
      "High-speed wireless internet",
      "Backup business internet",
      "Remote office connectivity",
      "Temporary office networking",
      "Remote CCTV",
      "Industrial connectivity"
    ],

    environments: [
      "Offices",
      "Remote Locations",
      "Construction Sites",
      "Factories",
      "Temporary Locations"
    ],

    specifications: {
      network: "5G",
      sim: "Yes",
      wifi: "Model Dependent",
      ethernet: "Model Dependent"
    },

    features: [
      "5G Connectivity",
      "SIM Support",
      "High-Speed Internet",
      "Wi-Fi",
      "Ethernet"
    ],

    keywords: [
      "5g router",
      "5g sim router",
      "5g wifi router",
      "5g internet router",
      "wireless business internet"
    ],

    tags: [
      "Networking",
      "5G",
      "SIM",
      "Router"
    ],

    icon: Radio
  },

  {
    id: "network-industrial-router",
    name: "Industrial Router",
    category: "Networking",
    service: "Networking",
    type: "Router",
    subtype: "Industrial Router",

    description:
      "Industrial networking router for connecting machines, remote sites and industrial systems.",

    useCases: [
      "Factory networking",
      "Industrial automation",
      "Remote machine connectivity",
      "PLC connectivity",
      "Industrial CCTV",
      "Remote monitoring",
      "Plant networking"
    ],

    environments: [
      "Factories",
      "Industrial Plants",
      "Power Plants",
      "Remote Industrial Sites"
    ],

    specifications: {
      connectivity: "Ethernet / Cellular - Model Dependent",
      mounting: "DIN Rail / Industrial",
      vpn: "Model Dependent",
      remoteManagement: "Model Dependent"
    },

    features: [
      "Industrial Networking",
      "Remote Connectivity",
      "VPN Support",
      "Machine Connectivity",
      "Remote Monitoring"
    ],

    keywords: [
      "industrial router",
      "factory router",
      "industrial network router",
      "machine router",
      "industrial vpn router"
    ],

    tags: [
      "Networking",
      "Industrial",
      "Router",
      "Automation"
    ],

    icon: Router
  },

  // =====================================================
  // WI-FI & WIRELESS
  // =====================================================

  {
    id: "network-indoor-wifi-ap",
    name: "Indoor Wi-Fi Access Point",
    category: "Networking",
    service: "Networking",
    type: "Wireless Network",
    subtype: "Indoor Wi-Fi Access Point",

    description:
      "Indoor wireless access point for providing reliable Wi-Fi coverage across offices, homes, shops and other indoor areas.",

    useCases: [
      "Office Wi-Fi",
      "Home Wi-Fi",
      "Guest Wi-Fi",
      "School Wi-Fi",
      "Hospital Wi-Fi",
      "Hotel Wi-Fi",
      "Shop Wi-Fi",
      "Employee wireless access"
    ],

    environments: [
      "Homes",
      "Offices",
      "Schools",
      "Hospitals",
      "Hotels",
      "Shops",
      "Restaurants"
    ],

    specifications: {
      wifiStandard: "Wi-Fi 5 / Wi-Fi 6 / Wi-Fi 7 - Model Dependent",
      installation: "Ceiling / Wall",
      ethernet: "Yes",
      poe: "Available - Model Dependent"
    },

    features: [
      "Indoor Wi-Fi Coverage",
      "Multiple User Support",
      "PoE Support",
      "Guest Wi-Fi",
      "Centralized Management - Model Dependent"
    ],

    keywords: [
      "wifi access point",
      "indoor wifi",
      "office wifi",
      "wifi ap",
      "business wifi",
      "ceiling wifi access point"
    ],

    tags: [
      "Networking",
      "Wi-Fi",
      "Access Point",
      "Wireless"
    ],

    icon: Wifi
  },

  {
    id: "network-outdoor-wifi-ap",
    name: "Outdoor Wi-Fi Access Point",
    category: "Networking",
    service: "Networking",
    type: "Wireless Network",
    subtype: "Outdoor Wi-Fi Access Point",

    description:
      "Weather-resistant wireless access point designed to provide Wi-Fi connectivity across outdoor areas.",

    useCases: [
      "Outdoor Wi-Fi",
      "Campus Wi-Fi",
      "Farm Wi-Fi",
      "Warehouse Wi-Fi",
      "Parking Wi-Fi",
      "Hotel outdoor Wi-Fi",
      "Factory outdoor Wi-Fi",
      "Garden Wi-Fi"
    ],

    environments: [
      "Factories",
      "Warehouses",
      "Schools",
      "Hotels",
      "Farms",
      "Campuses",
      "Parking Areas",
      "Outdoor Premises"
    ],

    specifications: {
      wifiStandard: "Wi-Fi 5 / Wi-Fi 6 / Wi-Fi 7 - Model Dependent",
      installation: "Wall / Pole",
      weatherResistance: "Model Dependent",
      poe: "Available - Model Dependent"
    },

    features: [
      "Outdoor Wi-Fi",
      "Weather-Resistant Models",
      "PoE Support",
      "Extended Coverage",
      "Multiple User Support"
    ],

    keywords: [
      "outdoor wifi",
      "outdoor wifi access point",
      "factory wifi",
      "farm wifi",
      "campus wifi",
      "warehouse wifi"
    ],

    tags: [
      "Networking",
      "Wi-Fi",
      "Outdoor",
      "Wireless"
    ],

    icon: Wifi
  },

  {
    id: "network-wifi5-ap",
    name: "Wi-Fi 5 Access Point",
    category: "Networking",
    service: "Networking",
    type: "Wireless Network",
    subtype: "Wi-Fi 5",

    description:
      "Wi-Fi 5 access point for reliable wireless connectivity in homes, offices and small business environments.",

    useCases: [
      "Office Wi-Fi",
      "Home Wi-Fi",
      "Small business Wi-Fi",
      "Guest Wi-Fi",
      "Internet access"
    ],

    environments: [
      "Homes",
      "Small Offices",
      "Shops",
      "Small Businesses"
    ],

    specifications: {
      standard: "Wi-Fi 5 / 802.11ac",
      ethernet: "Yes",
      poe: "Model Dependent"
    },

    features: [
      "Dual-Band Wi-Fi",
      "Wireless Connectivity",
      "Multiple Device Support",
      "PoE Models Available"
    ],

    keywords: [
      "wifi 5",
      "802.11ac access point",
      "wifi 5 ap",
      "ac wifi",
      "office wifi 5"
    ],

    tags: [
      "Networking",
      "Wi-Fi 5",
      "Wireless"
    ],

    icon: Wifi
  },

  {
    id: "network-wifi6-ap",
    name: "Wi-Fi 6 Access Point",
    category: "Networking",
    service: "Networking",
    type: "Wireless Network",
    subtype: "Wi-Fi 6",

    description:
      "Modern Wi-Fi 6 access point designed for higher device density and improved wireless network efficiency.",

    useCases: [
      "High-density office Wi-Fi",
      "Business Wi-Fi",
      "School Wi-Fi",
      "Hospital Wi-Fi",
      "Hotel Wi-Fi",
      "Large home Wi-Fi",
      "Guest Wi-Fi"
    ],

    environments: [
      "Offices",
      "Schools",
      "Hospitals",
      "Hotels",
      "Large Homes",
      "Businesses"
    ],

    specifications: {
      standard: "Wi-Fi 6 / 802.11ax",
      ethernet: "Yes",
      poe: "Model Dependent",
      capacity: "Model Dependent"
    },

    features: [
      "Wi-Fi 6",
      "High Device Capacity",
      "Improved Wireless Efficiency",
      "Guest Wi-Fi",
      "PoE Support"
    ],

    keywords: [
      "wifi 6",
      "wifi 6 access point",
      "802.11ax",
      "high density wifi",
      "business wifi 6"
    ],

    tags: [
      "Networking",
      "Wi-Fi 6",
      "Wireless",
      "Business"
    ],

    icon: Wifi
  },

  {
    id: "network-wifi6e-ap",
    name: "Wi-Fi 6E Access Point",
    category: "Networking",
    service: "Networking",
    type: "Wireless Network",
    subtype: "Wi-Fi 6E",

    description:
      "Wi-Fi 6E access point using supported 6 GHz wireless connectivity for compatible devices and environments.",

    useCases: [
      "High-performance office Wi-Fi",
      "High-density wireless networks",
      "Modern enterprise Wi-Fi",
      "Low-congestion wireless networking",
      "High-bandwidth applications"
    ],

    environments: [
      "Enterprise Offices",
      "Modern Campuses",
      "Research Facilities",
      "High-Performance Offices"
    ],

    specifications: {
      standard: "Wi-Fi 6E",
      band: "2.4 GHz / 5 GHz / 6 GHz - Model Dependent",
      ethernet: "Yes",
      poe: "Model Dependent"
    },

    features: [
      "6 GHz Support",
      "High-Speed Wireless",
      "High Device Capacity",
      "Modern Wi-Fi"
    ],

    keywords: [
      "wifi 6e",
      "6ghz wifi",
      "wifi 6e access point",
      "high performance wifi"
    ],

    tags: [
      "Networking",
      "Wi-Fi 6E",
      "6 GHz",
      "Wireless"
    ],

    icon: Wifi
  },

  {
    id: "network-wifi7-ap",
    name: "Wi-Fi 7 Access Point",
    category: "Networking",
    service: "Networking",
    type: "Wireless Network",
    subtype: "Wi-Fi 7",

    description:
      "Next-generation Wi-Fi access point for compatible devices requiring high wireless performance and capacity.",

    useCases: [
      "High-performance office Wi-Fi",
      "Enterprise wireless",
      "High-bandwidth applications",
      "Modern campus networks",
      "Advanced wireless connectivity"
    ],

    environments: [
      "Enterprise Offices",
      "Campuses",
      "Research Facilities",
      "High-Performance Workspaces"
    ],

    specifications: {
      standard: "Wi-Fi 7",
      band: "Model Dependent",
      ethernet: "Yes",
      uplink: "Model Dependent"
    },

    features: [
      "Wi-Fi 7",
      "High-Speed Wireless",
      "High Device Capacity",
      "Advanced Wireless Performance"
    ],

    keywords: [
      "wifi 7",
      "wifi 7 access point",
      "next generation wifi",
      "high speed wifi 7"
    ],

    tags: [
      "Networking",
      "Wi-Fi 7",
      "Wireless",
      "High Speed"
    ],

    icon: Wifi
  },

  {
    id: "network-mesh-wifi",
    name: "Mesh Wi-Fi System",
    category: "Networking",
    service: "Networking",
    type: "Wireless Network",
    subtype: "Mesh Wi-Fi",

    description:
      "Multi-node wireless system designed to provide more consistent Wi-Fi coverage across larger homes, offices and buildings.",

    useCases: [
      "Whole-home Wi-Fi",
      "Large office Wi-Fi",
      "Multi-room coverage",
      "Wi-Fi dead-zone reduction",
      "Hotel Wi-Fi",
      "Villa Wi-Fi",
      "Small campus Wi-Fi"
    ],

    environments: [
      "Homes",
      "Villas",
      "Offices",
      "Hotels",
      "Schools",
      "Small Campuses"
    ],

    specifications: {
      system: "Multiple Wireless Nodes",
      wifi: "Model Dependent",
      backhaul: "Wireless / Ethernet - Model Dependent"
    },

    features: [
      "Whole-Area Wi-Fi",
      "Multiple Nodes",
      "Roaming",
      "Easy Expansion",
      "Central Management - Model Dependent"
    ],

    keywords: [
      "mesh wifi",
      "whole home wifi",
      "wifi mesh",
      "wifi dead zone solution",
      "office mesh wifi",
      "large house wifi"
    ],

    tags: [
      "Networking",
      "Wi-Fi",
      "Mesh",
      "Wireless"
    ],

    icon: Wifi
  },

  {
    id: "network-wireless-bridge",
    name: "Wireless Network Bridge",
    category: "Networking",
    service: "Networking",
    type: "Wireless Network",
    subtype: "Wireless Bridge",

    description:
      "Wireless bridge for connecting two network locations without running a physical Ethernet cable between them.",

    useCases: [
      "Building-to-building connectivity",
      "Warehouse connectivity",
      "Factory-to-office connection",
      "CCTV network connection",
      "Remote building networking",
      "Campus connectivity"
    ],

    environments: [
      "Factories",
      "Warehouses",
      "Campuses",
      "Large Properties",
      "Industrial Sites"
    ],

    specifications: {
      connectivity: "Wireless",
      mode: "Point-to-Point / Point-to-Multipoint - Model Dependent",
      distance: "Model Dependent"
    },

    features: [
      "Wireless Building Link",
      "No Physical Cable Between Buildings",
      "CCTV Support",
      "Network Extension",
      "Long-Distance Models Available"
    ],

    keywords: [
      "wireless bridge",
      "building to building wifi",
      "wireless network link",
      "cctv wireless bridge",
      "point to point wifi",
      "long distance wifi"
    ],

    tags: [
      "Networking",
      "Wireless Bridge",
      "Point-to-Point",
      "CCTV"
    ],

    icon: Radio
  },

  {
    id: "network-point-to-point",
    name: "Point-to-Point Wireless Link",
    category: "Networking",
    service: "Networking",
    type: "Wireless Network",
    subtype: "Point-to-Point",

    description:
      "Dedicated wireless link for connecting two buildings or network locations over a distance.",

    useCases: [
      "Office-to-office connection",
      "Building-to-building networking",
      "CCTV connection",
      "Factory-to-warehouse networking",
      "Campus networking",
      "Remote site connectivity"
    ],

    environments: [
      "Factories",
      "Warehouses",
      "Campuses",
      "Offices",
      "Industrial Sites"
    ],

    specifications: {
      topology: "Point-to-Point",
      wireless: "Model Dependent",
      distance: "Model Dependent",
      throughput: "Model Dependent"
    },

    features: [
      "Long-Distance Wireless",
      "Building Connectivity",
      "CCTV Support",
      "Dedicated Wireless Link"
    ],

    keywords: [
      "point to point wireless",
      "ptp wireless",
      "building to building wireless",
      "office to office wireless",
      "cctv point to point"
    ],

    tags: [
      "Networking",
      "Wireless",
      "Point-to-Point",
      "Long Distance"
    ],

    icon: Radio
  },

  {
    id: "network-point-to-multipoint",
    name: "Point-to-Multipoint Wireless System",
    category: "Networking",
    service: "Networking",
    type: "Wireless Network",
    subtype: "Point-to-Multipoint",

    description:
      "Wireless networking system that connects one central location with multiple remote locations.",

    useCases: [
      "Campus networking",
      "Multiple building connectivity",
      "Factory site networking",
      "Warehouse connectivity",
      "Farm networking",
      "Multiple CCTV locations"
    ],

    environments: [
      "Campuses",
      "Factories",
      "Farms",
      "Warehouses",
      "Large Properties"
    ],

    specifications: {
      topology: "Point-to-Multipoint",
      distance: "Model Dependent",
      throughput: "Model Dependent"
    },

    features: [
      "Multiple Site Connectivity",
      "Wireless Network Expansion",
      "CCTV Support",
      "Long-Distance Connectivity"
    ],

    keywords: [
      "point to multipoint",
      "ptmp wireless",
      "multiple building wifi",
      "campus wireless",
      "wireless cctv network"
    ],

    tags: [
      "Networking",
      "Wireless",
      "Point-to-Multipoint"
    ],

    icon: Radio
  },

  // =====================================================
  // NETWORK CABLING
  // =====================================================

  {
    id: "network-cat5e-cable",
    name: "Cat5e Network Cable",
    category: "Networking",
    service: "Networking",
    type: "Network Cabling",
    subtype: "Cat5e",

    description:
      "Ethernet network cable commonly used for basic LAN installations and network device connections.",

    useCases: [
      "Home LAN",
      "Small office networking",
      "Computer networking",
      "Printer networking",
      "Basic CCTV networking",
      "Internet device connections"
    ],

    environments: [
      "Homes",
      "Small Offices",
      "Shops",
      "Small Businesses"
    ],

    specifications: {
      category: "Cat5e",
      type: "Twisted Pair Ethernet",
      termination: "RJ45"
    },

    features: [
      "LAN Connectivity",
      "Easy Installation",
      "RJ45 Compatible",
      "Network Device Connectivity"
    ],

    keywords: [
      "cat5e cable",
      "cat5 cable",
      "lan cable",
      "ethernet cable",
      "network cable",
      "internet cable"
    ],

    tags: [
      "Networking",
      "Cat5e",
      "LAN Cable"
    ],

    icon: Cable
  },

  {
    id: "network-cat6-cable",
    name: "Cat6 Network Cable",
    category: "Networking",
    service: "Networking",
    type: "Network Cabling",
    subtype: "Cat6",

    description:
      "Ethernet cable commonly used for office networks, CCTV installations and Gigabit network connections.",

    useCases: [
      "Office LAN",
      "CCTV installation",
      "IP camera networking",
      "Computer networking",
      "Wi-Fi access point connection",
      "Internet networking",
      "Printer networking",
      "Server networking"
    ],

    environments: [
      "Homes",
      "Offices",
      "Shops",
      "Schools",
      "Hospitals",
      "Factories",
      "Warehouses"
    ],

    specifications: {
      category: "Cat6",
      type: "Twisted Pair Ethernet",
      termination: "RJ45",
      speed: "Gigabit - Installation Dependent"
    },

    features: [
      "Gigabit Networking",
      "CCTV Support",
      "IP Camera Support",
      "Wi-Fi Access Point Support",
      "Office LAN Support"
    ],

    keywords: [
      "cat6 cable",
      "cat 6 cable",
      "lan cable",
      "ethernet cable",
      "cctv cable",
      "ip camera cable",
      "office network cable"
    ],

    tags: [
      "Networking",
      "Cat6",
      "LAN",
      "CCTV"
    ],

    icon: Cable
  },

  {
    id: "network-cat6a-cable",
    name: "Cat6A Network Cable",
    category: "Networking",
    service: "Networking",
    type: "Network Cabling",
    subtype: "Cat6A",

    description:
      "Higher-performance Ethernet cabling solution for structured network installations requiring higher bandwidth and improved cable performance.",

    useCases: [
      "Enterprise LAN",
      "Server room cabling",
      "High-speed networking",
      "Data center connections",
      "Office structured cabling",
      "High-bandwidth applications"
    ],

    environments: [
      "Enterprises",
      "Data Centers",
      "Server Rooms",
      "Large Offices",
      "Commercial Buildings"
    ],

    specifications: {
      category: "Cat6A",
      type: "Twisted Pair Ethernet",
      termination: "RJ45 / Compatible Hardware",
      speed: "10G - Installation Dependent"
    },

    features: [
      "High-Speed Networking",
      "Structured Cabling",
      "Enterprise LAN",
      "Server Room Networking"
    ],

    keywords: [
      "cat6a cable",
      "cat 6a",
      "10g network cable",
      "enterprise network cable",
      "server room cable",
      "high speed lan cable"
    ],

    tags: [
      "Networking",
      "Cat6A",
      "10G",
      "Enterprise"
    ],

    icon: Cable
  },

  {
    id: "network-cat7-cable",
    name: "Cat7 Network Cable",
    category: "Networking",
    service: "Networking",
    type: "Network Cabling",
    subtype: "Cat7",

    description:
      "High-performance shielded network cabling for demanding structured networking installations.",

    useCases: [
      "High-speed LAN",
      "Server rooms",
      "Data centers",
      "Enterprise networking",
      "High-bandwidth workstations"
    ],

    environments: [
      "Data Centers",
      "Server Rooms",
      "Enterprise Offices",
      "High-Performance Networks"
    ],

    specifications: {
      category: "Cat7",
      shielding: "Shielded",
      type: "Twisted Pair Ethernet",
      speed: "Model / Installation Dependent"
    },

    features: [
      "Shielded Cabling",
      "High-Speed Networking",
      "Enterprise Infrastructure"
    ],

    keywords: [
      "cat7 cable",
      "cat 7 network cable",
      "shielded network cable",
      "high speed network cable",
      "data center cable"
    ],

    tags: [
      "Networking",
      "Cat7",
      "Shielded",
      "High Speed"
    ],

    icon: Cable
  },

  {
    id: "network-cat8-cable",
    name: "Cat8 Network Cable",
    category: "Networking",
    service: "Networking",
    type: "Network Cabling",
    subtype: "Cat8",

    description:
      "High-bandwidth Ethernet cabling designed for high-performance server and data center network applications.",

    useCases: [
      "Data center networking",
      "Server connections",
      "High-speed switch connections",
      "High-performance workstations",
      "High-bandwidth applications"
    ],

    environments: [
      "Data Centers",
      "Server Rooms",
      "Enterprise Networks",
      "High-Performance Computing"
    ],

    specifications: {
      category: "Cat8",
      shielding: "Shielded",
      bandwidth: "High Bandwidth",
      speed: "Up to 25G / 40G - Installation Dependent"
    },

    features: [
      "Very High Bandwidth",
      "Server Connectivity",
      "Data Center Networking",
      "Shielded Cabling"
    ],

    keywords: [
      "cat8 cable",
      "cat 8 cable",
      "data center cable",
      "server cable",
      "25g network cable",
      "40g network cable"
    ],

    tags: [
      "Networking",
      "Cat8",
      "Data Center",
      "High Speed"
    ],

    icon: Cable
  },

  // =====================================================
  // FIBER OPTIC
  // =====================================================

  {
    id: "network-single-mode-fiber",
    name: "Single-Mode Fiber Cable",
    category: "Networking",
    service: "Networking",
    type: "Fiber Optic",
    subtype: "Single-Mode Fiber",

    description:
      "Fiber optic cabling designed for long-distance network connectivity between buildings, campuses and infrastructure locations.",

    useCases: [
      "Building-to-building networking",
      "Campus networking",
      "Long-distance connectivity",
      "Internet backbone",
      "Data center links",
      "Industrial networking"
    ],

    environments: [
      "Campuses",
      "Factories",
      "Data Centers",
      "Telecom Sites",
      "Large Offices",
      "Industrial Plants"
    ],

    specifications: {
      fiberType: "Single-Mode",
      core: "Model Dependent",
      distance: "Long Distance - Optics Dependent",
      connectors: "LC / SC / Other - Model Dependent"
    },

    features: [
      "Long-Distance Connectivity",
      "High-Speed Networking",
      "Building-to-Building Links",
      "Low-Loss Fiber Infrastructure"
    ],

    keywords: [
      "single mode fiber",
      "sm fiber",
      "single mode optical fiber",
      "long distance fiber",
      "fiber cable",
      "fiber networking"
    ],

    tags: [
      "Networking",
      "Fiber",
      "Single Mode",
      "Long Distance"
    ],

    icon: CableIcon
  },

  {
    id: "network-multi-mode-fiber",
    name: "Multi-Mode Fiber Cable",
    category: "Networking",
    service: "Networking",
    type: "Fiber Optic",
    subtype: "Multi-Mode Fiber",

    description:
      "Fiber optic cabling commonly used for shorter-distance high-speed connections within buildings and data centers.",

    useCases: [
      "Data center networking",
      "Server room uplinks",
      "Building network connections",
      "High-speed LAN backbone",
      "Short-distance fiber connectivity"
    ],

    environments: [
      "Data Centers",
      "Server Rooms",
      "Enterprise Buildings",
      "Campuses"
    ],

    specifications: {
      fiberType: "Multi-Mode",
      distance: "Short / Medium Distance - Optics Dependent",
      connectors: "LC / SC / Other - Model Dependent"
    },

    features: [
      "High-Speed Fiber",
      "Data Center Support",
      "Server Room Connectivity",
      "Backbone Networking"
    ],

    keywords: [
      "multimode fiber",
      "multi mode fiber",
      "mm fiber",
      "data center fiber",
      "fiber optic cable"
    ],

    tags: [
      "Networking",
      "Fiber",
      "Multi Mode",
      "Data Center"
    ],

    icon: CableIcon
  },

  {
    id: "network-fiber-patch-cord",
    name: "Fiber Optic Patch Cord",
    category: "Networking",
    service: "Networking",
    type: "Fiber Optic",
    subtype: "Fiber Patch Cord",

    description:
      "Pre-terminated fiber cable used to connect switches, patch panels, ODFs and fiber networking equipment.",

    useCases: [
      "Switch-to-ODF connection",
      "Patch panel connectivity",
      "Server room fiber connections",
      "Data center fiber connections",
      "Fiber equipment connections"
    ],

    environments: [
      "Server Rooms",
      "Data Centers",
      "Network Rooms",
      "Telecom Rooms"
    ],

    specifications: {
      fiberType: "Single-Mode / Multi-Mode - Model Dependent",
      connectors: "LC / SC / ST / Other - Model Dependent",
      length: "Model Dependent"
    },

    features: [
      "Pre-Terminated",
      "Easy Installation",
      "Fiber Equipment Connectivity",
      "Data Center Use"
    ],

    keywords: [
      "fiber patch cord",
      "optical patch cord",
      "lc fiber patch cord",
      "sc fiber patch cord",
      "fiber cable connector"
    ],

    tags: [
      "Networking",
      "Fiber",
      "Patch Cord",
      "Data Center"
    ],

    icon: CableIcon
  },

  // =====================================================
  // COPPER ACCESSORIES
  // =====================================================

  {
    id: "network-cat6-patch-cord",
    name: "Cat6 Patch Cord",
    category: "Networking",
    service: "Networking",
    type: "Network Cabling",
    subtype: "Patch Cord",

    description:
      "Pre-terminated Ethernet patch cable for connecting computers, switches, patch panels, routers and other network devices.",

    useCases: [
      "Switch connections",
      "Computer connections",
      "Router connections",
      "Patch panel connections",
      "Server connections",
      "CCTV connections"
    ],

    environments: [
      "Homes",
      "Offices",
      "Server Rooms",
      "Data Centers",
      "CCTV Installations"
    ],

    specifications: {
      category: "Cat6",
      connector: "RJ45",
      length: "Model Dependent"
    },

    features: [
      "Pre-Terminated",
      "RJ45 Connectors",
      "Easy Installation",
      "Network Device Connectivity"
    ],

    keywords: [
      "cat6 patch cord",
      "network patch cable",
      "rj45 patch cable",
      "ethernet patch cord",
      "lan patch cable"
    ],

    tags: [
      "Networking",
      "Cat6",
      "Patch Cord",
      "RJ45"
    ],

    icon: Cable
  },

  {
    id: "network-rj45-connector",
    name: "RJ45 Network Connector",
    category: "Networking",
    service: "Networking",
    type: "Network Cabling",
    subtype: "RJ45 Connector",

    description:
      "Ethernet connector used to terminate compatible twisted-pair network cables for LAN connections.",

    useCases: [
      "LAN cable termination",
      "Cat5e cable termination",
      "Cat6 cable termination",
      "Network cable repair",
      "Custom patch cable creation"
    ],

    environments: [
      "Homes",
      "Offices",
      "Network Installations",
      "CCTV Installations"
    ],

    specifications: {
      connector: "RJ45",
      cableType: "Compatible Ethernet Cable",
      installation: "Crimping Required"
    },

    features: [
      "Ethernet Termination",
      "Cable Repair",
      "Custom Cable Assembly"
    ],

    keywords: [
      "rj45 connector",
      "lan connector",
      "ethernet connector",
      "network connector",
      "cat6 connector"
    ],

    tags: [
      "Networking",
      "RJ45",
      "Connector",
      "LAN"
    ],

    icon: Cable
  },

  {
    id: "network-keystone-jack",
    name: "RJ45 Keystone Jack",
    category: "Networking",
    service: "Networking",
    type: "Network Cabling",
    subtype: "Keystone Jack",

    description:
      "Modular network jack used to terminate Ethernet cabling at wall outlets, patch panels and network faceplates.",

    useCases: [
      "Office network outlets",
      "Wall-mounted LAN points",
      "Structured cabling",
      "Patch panel installation",
      "Computer network points",
      "IP phone points"
    ],

    environments: [
      "Offices",
      "Homes",
      "Schools",
      "Hospitals",
      "Commercial Buildings"
    ],

    specifications: {
      connector: "RJ45",
      category: "Cat5e / Cat6 / Cat6A - Model Dependent",
      mounting: "Keystone Compatible"
    },

    features: [
      "Structured Cabling",
      "Wall LAN Outlet",
      "Patch Panel Compatible",
      "Easy Cable Termination"
    ],

    keywords: [
      "keystone jack",
      "rj45 keystone",
      "lan wall socket",
      "network wall outlet",
      "cat6 keystone"
    ],

    tags: [
      "Networking",
      "Keystone",
      "RJ45",
      "Structured Cabling"
    ],

    icon: Cable
  },

  // =====================================================
  // NETWORK INFRASTRUCTURE
  // =====================================================

  {
    id: "network-patch-panel",
    name: "Network Patch Panel",
    category: "Networking",
    service: "Networking",
    type: "Network Infrastructure",
    subtype: "Patch Panel",

    description:
      "Structured cabling panel used to organize and terminate Ethernet network cables in offices, server rooms and network racks.",

    useCases: [
      "Office structured cabling",
      "Server room cabling",
      "Network cable organization",
      "CCTV cable termination",
      "Data center cabling",
      "LAN point management"
    ],

    environments: [
      "Offices",
      "Server Rooms",
      "Data Centers",
      "Schools",
      "Hospitals",
      "Factories"
    ],

    specifications: {
      ports: "12 / 24 / 48 - Model Dependent",
      category: "Cat5e / Cat6 / Cat6A - Model Dependent",
      mounting: "19-inch Rack"
    },

    features: [
      "Cable Organization",
      "Structured Cabling",
      "Rack Mountable",
      "Easy Port Identification",
      "Professional Cable Management"
    ],

    keywords: [
      "patch panel",
      "network patch panel",
      "cat6 patch panel",
      "lan patch panel",
      "server rack patch panel",
      "cctv patch panel"
    ],

    tags: [
      "Networking",
      "Patch Panel",
      "Rack",
      "Structured Cabling"
    ],

    icon: PanelsTopLeft
  },

  {
    id: "network-fiber-odf",
    name: "Fiber ODF",
    category: "Networking",
    service: "Networking",
    type: "Network Infrastructure",
    subtype: "Fiber ODF",

    description:
      "Optical fiber distribution frame used to organize, terminate and manage fiber optic connections.",

    useCases: [
      "Fiber termination",
      "Fiber cable management",
      "Data center fiber management",
      "Server room fiber management",
      "Building-to-building fiber links",
      "Telecom fiber infrastructure"
    ],

    environments: [
      "Data Centers",
      "Server Rooms",
      "Telecom Rooms",
      "Factories",
      "Large Offices"
    ],

    specifications: {
      type: "Optical Distribution Frame",
      fiber: "Single-Mode / Multi-Mode - Model Dependent",
      mounting: "Rack / Wall - Model Dependent",
      ports: "Model Dependent"
    },

    features: [
      "Fiber Termination",
      "Fiber Organization",
      "Rack Mounting",
      "Cable Management",
      "Fiber Protection"
    ],

    keywords: [
      "fiber odf",
      "optical distribution frame",
      "fiber patch panel",
      "fiber termination box",
      "fiber management"
    ],

    tags: [
      "Networking",
      "Fiber",
      "ODF",
      "Infrastructure"
    ],

    icon: PanelsTopLeft
  },

  {
    id: "network-rack-cabinet",
    name: "Network Rack Cabinet",
    category: "Networking",
    service: "Networking",
    type: "Network Infrastructure",
    subtype: "Network Rack",

    description:
      "Rack cabinet for securely installing switches, routers, patch panels, CCTV equipment and other network devices.",

    useCases: [
      "Network equipment installation",
      "Switch installation",
      "Router installation",
      "Patch panel installation",
      "CCTV equipment installation",
      "Cable organization",
      "Network room setup"
    ],

    environments: [
      "Offices",
      "Server Rooms",
      "CCTV Rooms",
      "Factories",
      "Schools",
      "Hospitals",
      "Data Centers"
    ],

    specifications: {
      rackSize: "19-inch Standard",
      height: "Model Dependent",
      mounting: "Rack Mount",
      material: "Metal"
    },

    features: [
      "Secure Equipment Mounting",
      "Cable Management",
      "Rack Mounting",
      "Ventilation Options",
      "Professional Installation"
    ],

    keywords: [
      "network rack",
      "network rack cabinet",
      "server rack",
      "cctv rack",
      "19 inch rack",
      "network cabinet"
    ],

    tags: [
      "Networking",
      "Rack",
      "Cabinet",
      "Infrastructure"
    ],

    icon: Server
  },

  {
    id: "network-wall-mount-rack",
    name: "Wall-Mount Network Rack",
    category: "Networking",
    service: "Networking",
    type: "Network Infrastructure",
    subtype: "Wall-Mount Rack",

    description:
      "Compact wall-mounted rack for installing network switches, patch panels, routers and other small IT equipment.",

    useCases: [
      "Small office networking",
      "CCTV installation",
      "Small network equipment",
      "Router installation",
      "Switch installation",
      "Patch panel installation"
    ],

    environments: [
      "Small Offices",
      "Shops",
      "Homes",
      "Clinics",
      "Small CCTV Rooms"
    ],

    specifications: {
      mounting: "Wall Mount",
      rackSize: "19-inch Standard",
      height: "Model Dependent"
    },

    features: [
      "Space Saving",
      "Wall Mounting",
      "Cable Management",
      "Network Equipment Protection"
    ],

    keywords: [
      "wall mount rack",
      "wall network rack",
      "small network rack",
      "cctv wall rack",
      "wall mount cabinet"
    ],

    tags: [
      "Networking",
      "Rack",
      "Wall Mount",
      "CCTV"
    ],

    icon: Server
  },

  {
    id: "network-rack-pdu",
    name: "Rack PDU",
    category: "Networking",
    service: "Networking",
    type: "Network Infrastructure",
    subtype: "Rack PDU",

    description:
      "Rack-mounted power distribution unit for providing electrical power to network and IT equipment installed inside a rack.",

    useCases: [
      "Server rack power",
      "Network rack power",
      "Switch power distribution",
      "Router power distribution",
      "CCTV rack power",
      "Data center equipment power"
    ],

    environments: [
      "Server Rooms",
      "Network Rooms",
      "Data Centers",
      "CCTV Rooms"
    ],

    specifications: {
      mounting: "Rack Mount",
      outlets: "Model Dependent",
      input: "Model Dependent",
      output: "Model Dependent"
    },

    features: [
      "Rack Power Distribution",
      "Multiple Power Outlets",
      "Rack Mounting",
      "Equipment Power Management"
    ],

    keywords: [
      "rack pdu",
      "network rack pdu",
      "server rack power",
      "rack power distribution",
      "cctv rack power"
    ],

    tags: [
      "Networking",
      "PDU",
      "Rack",
      "Power"
    ],

    icon: PanelsTopLeft
  },

  {
    id: "network-cable-manager",
    name: "Network Cable Management Panel",
    category: "Networking",
    service: "Networking",
    type: "Network Infrastructure",
    subtype: "Cable Management",

    description:
      "Rack-mounted cable management accessory used to keep network cables organized and easy to maintain.",

    useCases: [
      "Server rack cable management",
      "Network rack organization",
      "CCTV cable management",
      "Patch panel cable organization",
      "Data center cabling"
    ],

    environments: [
      "Server Rooms",
      "Network Rooms",
      "Data Centers",
      "CCTV Rooms",
      "Offices"
    ],

    specifications: {
      mounting: "19-inch Rack",
      type: "Horizontal / Vertical - Model Dependent"
    },

    features: [
      "Cable Organization",
      "Rack Mounting",
      "Cleaner Network Installation",
      "Easy Maintenance"
    ],

    keywords: [
      "cable manager",
      "network cable management",
      "rack cable manager",
      "server rack cable management",
      "cctv cable management"
    ],

    tags: [
      "Networking",
      "Cable Management",
      "Rack",
      "Infrastructure"
    ],

    icon: Cable
  },

];

export default networkingProducts;