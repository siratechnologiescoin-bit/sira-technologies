import { useMemo, useState } from "react";
import {
  Search,
  Sparkles,
  X,
  SlidersHorizontal,
  ArrowUpRight,
  Package,
} from "lucide-react";

import Container from "../components/common/Container";

/* =========================================================
   SEARCH SYNONYMS
========================================================= */

const SEARCH_SYNONYMS = {
  camera: [
    "camera",
    "cctv",
    "surveillance",
    "security camera",
    "ip camera",
  ],

  cctv: [
    "cctv",
    "camera",
    "surveillance",
    "security camera",
    "ip camera",
  ],

  indoor: [
    "indoor",
    "inside",
    "internal",
    "indoor camera",
  ],

  outdoor: [
    "outdoor",
    "outside",
    "external",
    "weatherproof",
    "weather resistant",
    "bullet camera",
  ],

  wifi: [
    "wifi",
    "wi-fi",
    "wireless",
    "wireless camera",
    "wifi camera",
  ],

  wireless: [
    "wireless",
    "wifi",
    "wi-fi",
    "wifi camera",
  ],

  ptz: [
    "ptz",
    "pan tilt zoom",
    "speed dome",
    "ptz camera",
    "zoom camera",
  ],

  dome: [
    "dome",
    "dome camera",
    "indoor dome",
  ],

  bullet: [
    "bullet",
    "bullet camera",
    "outdoor bullet",
  ],

  night: [
    "night",
    "night vision",
    "low light",
    "infrared",
    "ir",
    "night camera",
  ],

  "2mp": [
    "2mp",
    "2 mp",
    "1080p",
    "full hd",
  ],

  "3mp": [
    "3mp",
    "3 mp",
  ],

  "4mp": [
    "4mp",
    "4 mp",
    "1440p",
  ],

  "5mp": [
    "5mp",
    "5 mp",
  ],

  "6mp": [
    "6mp",
    "6 mp",
  ],

  "8mp": [
    "8mp",
    "8 mp",
    "4k",
    "uhd",
    "3840x2160",
  ],

  "4k": [
    "4k",
    "8mp",
    "uhd",
    "ultra hd",
  ],

  recorder: [
    "recorder",
    "dvr",
    "nvr",
    "xvr",
    "recording",
  ],

  nvr: [
    "nvr",
    "network video recorder",
    "ip recorder",
  ],

  dvr: [
    "dvr",
    "digital video recorder",
    "analog recorder",
  ],

  storage: [
    "storage",
    "hdd",
    "hard disk",
    "ssd",
    "nas",
    "surveillance hdd",
  ],

  network: [
    "network",
    "networking",
    "switch",
    "router",
    "lan",
    "ethernet",
    "wifi",
  ],

  switch: [
    "switch",
    "network switch",
    "poe switch",
    "gigabit switch",
  ],

  poe: [
    "poe",
    "poe switch",
    "power over ethernet",
  ],

  cable: [
    "cable",
    "cat6",
    "lan cable",
    "ethernet cable",
    "fiber cable",
  ],

  access: [
    "access control",
    "door access",
    "biometric",
    "rfid",
    "attendance",
    "door lock",
  ],

  biometric: [
    "biometric",
    "fingerprint",
    "attendance",
    "access control",
  ],

  linux: [
    "linux",
    "ubuntu",
    "rhel",
    "redhat",
    "centos",
    "debian",
    "linux server",
  ],

  windows: [
    "windows",
    "windows server",
    "active directory",
    "domain",
    "microsoft",
  ],

  server: [
    "server",
    "linux server",
    "windows server",
    "rack server",
    "tower server",
  ],

  rack: [
    "rack",
    "rack server",
    "server rack",
    "network rack",
  ],

  led: [
    "led",
    "led wall",
    "led display",
    "video wall",
    "screen",
    "display",
  ],

  outdoorled: [
    "outdoor led",
    "outdoor display",
    "billboard",
    "advertising display",
  ],

  security: [
    "security",
    "cctv",
    "access control",
    "biometric",
    "rfid",
    "surveillance",
  ],

  ups: [
    "ups",
    "power backup",
    "backup power",
    "online ups",
    "rack ups",
  ],
};

/* =========================================================
   NORMALIZATION
========================================================= */

const normalizeText = (value = "") =>
  value
    .toLowerCase()
    .replace(/[^\w\s.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const tokenize = (value = "") =>
  normalizeText(value)
    .split(" ")
    .filter((word) => word.length > 1);

/* =========================================================
   SEARCH EXPANSION
========================================================= */

const expandSearchTerms = (query) => {
  const normalized = normalizeText(query);
  const tokens = tokenize(normalized);

  const terms = new Set(tokens);

  tokens.forEach((token) => {
    if (SEARCH_SYNONYMS[token]) {
      SEARCH_SYNONYMS[token].forEach((item) => {
        terms.add(normalizeText(item));
      });
    }
  });

  Object.entries(SEARCH_SYNONYMS).forEach(
    ([key, values]) => {
      if (normalized.includes(key)) {
        terms.add(key);

        values.forEach((value) => {
          terms.add(normalizeText(value));
        });
      }
    }
  );

  return [...terms];
};

/* =========================================================
   PRODUCT SEARCH TEXT
========================================================= */

const getProductText = (product) =>
  normalizeText(
    [
      product.name,
      product.category,
      product.subCategory,
      product.service,
      product.description,

      /* Camera information */
      product.resolution,
      product.cameraType,
      product.installationType,
      product.environment,
      product.coverage,
      product.recommendedDistance,
      product.nightVision,
      product.connectivity,

      /* Arrays */
      ...(product.bestFor || []),
      ...(product.keywords || []),
      ...(product.tags || []),
    ]
      .filter(Boolean)
      .join(" ")
  );

/* =========================================================
   RANK PRODUCTS
========================================================= */

const rankProducts = (products, query) => {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return products.map((product) => ({
      ...product,
      score: 0,
      matchedTerms: [],
    }));
  }

  const tokens = tokenize(normalizedQuery);
  const expandedTerms = expandSearchTerms(normalizedQuery);

  return products
    .map((product) => {
      const productName = normalizeText(product.name);
      const category = normalizeText(product.category);
      const subCategory = normalizeText(product.subCategory);
      const description = normalizeText(product.description);

      const fullText = getProductText(product);

      let score = 0;
      const matchedTerms = [];

      /* =====================================================
         EXACT PRODUCT NAME
      ===================================================== */

      if (productName.includes(normalizedQuery)) {
        score += 120;
        matchedTerms.push(normalizedQuery);
      }

      /* =====================================================
         EXACT FULL TEXT
      ===================================================== */

      if (fullText.includes(normalizedQuery)) {
        score += 50;
      }

      /* =====================================================
         WORD MATCHING
      ===================================================== */

      tokens.forEach((token) => {
        if (productName.includes(token)) {
          score += 30;
          matchedTerms.push(token);
        }

        if (category.includes(token)) {
          score += 20;
          matchedTerms.push(token);
        }

        if (subCategory.includes(token)) {
          score += 25;
          matchedTerms.push(token);
        }

        if (description.includes(token)) {
          score += 8;
        }

        if (
          normalizeText(product.resolution).includes(
            token
          )
        ) {
          score += 35;
          matchedTerms.push(token);
        }

        if (
          normalizeText(product.cameraType).includes(
            token
          )
        ) {
          score += 35;
          matchedTerms.push(token);
        }

        if (
          normalizeText(product.environment).includes(
            token
          )
        ) {
          score += 30;
          matchedTerms.push(token);
        }

        if (
          normalizeText(
            product.installationType
          ).includes(token)
        ) {
          score += 25;
          matchedTerms.push(token);
        }

        if (
          normalizeText(product.nightVision).includes(
            token
          )
        ) {
          score += 20;
          matchedTerms.push(token);
        }

        if (
          normalizeText(product.connectivity).includes(
            token
          )
        ) {
          score += 20;
          matchedTerms.push(token);
        }

        if (
          (product.bestFor || []).some((item) =>
            normalizeText(item).includes(token)
          )
        ) {
          score += 18;
          matchedTerms.push(token);
        }

        if (
          (product.keywords || []).some((keyword) =>
            normalizeText(keyword).includes(token)
          )
        ) {
          score += 20;
          matchedTerms.push(token);
        }
      });

      /* =====================================================
         SYNONYMS
      ===================================================== */

      expandedTerms.forEach((term) => {
        if (term.length < 2) return;

        if (productName.includes(term)) {
          score += 18;
          matchedTerms.push(term);
        }

        if (category.includes(term)) {
          score += 12;
          matchedTerms.push(term);
        }

        if (subCategory.includes(term)) {
          score += 15;
          matchedTerms.push(term);
        }

        if (fullText.includes(term)) {
          score += 7;
        }
      });

      return {
        ...product,
        score,
        matchedTerms: [...new Set(matchedTerms)],
      };
    })
    .filter((product) => product.score > 0)
    .sort((a, b) => b.score - a.score);
};

/* =========================================================
   QUERY UNDERSTANDING
========================================================= */

const understandQuery = (query) => {
  const text = normalizeText(query);

  const detected = [];

  const checks = [
    {
      label: "CCTV",
      words: [
        "camera",
        "cctv",
        "surveillance",
        "security camera",
      ],
    },

    {
      label: "Indoor",
      words: [
        "indoor",
        "inside",
        "internal",
      ],
    },

    {
      label: "Outdoor",
      words: [
        "outdoor",
        "outside",
        "external",
        "weatherproof",
      ],
    },

    {
      label: "Wi-Fi",
      words: [
        "wifi",
        "wi-fi",
        "wireless",
      ],
    },

    {
      label: "PTZ",
      words: [
        "ptz",
        "pan tilt zoom",
        "speed dome",
      ],
    },

    {
      label: "Night Vision",
      words: [
        "night",
        "night vision",
        "infrared",
        "low light",
      ],
    },

    {
      label: "2MP",
      words: [
        "2mp",
        "1080p",
        "full hd",
      ],
    },

    {
      label: "3MP",
      words: [
        "3mp",
      ],
    },

    {
      label: "4MP",
      words: [
        "4mp",
        "1440p",
      ],
    },

    {
      label: "5MP",
      words: [
        "5mp",
      ],
    },

    {
      label: "8MP / 4K",
      words: [
        "8mp",
        "4k",
        "uhd",
      ],
    },

    {
      label: "Recording",
      words: [
        "dvr",
        "nvr",
        "xvr",
        "recorder",
      ],
    },

    {
      label: "Storage",
      words: [
        "storage",
        "hdd",
        "hard disk",
        "ssd",
        "nas",
      ],
    },

    {
      label: "Networking",
      words: [
        "network",
        "networking",
        "switch",
        "router",
        "lan",
        "ethernet",
      ],
    },

    {
      label: "Access Control",
      words: [
        "access",
        "biometric",
        "rfid",
        "attendance",
      ],
    },

    {
      label: "Linux",
      words: [
        "linux",
        "ubuntu",
        "rhel",
        "redhat",
        "centos",
        "debian",
      ],
    },

    {
      label: "Windows",
      words: [
        "windows",
        "microsoft",
        "active directory",
        "domain",
      ],
    },

    {
      label: "Servers",
      words: [
        "server",
        "servers",
        "rack server",
        "tower server",
      ],
    },

    {
      label: "LED Display",
      words: [
        "led",
        "led wall",
        "display",
        "video wall",
        "screen",
      ],
    },

    {
      label: "UPS",
      words: [
        "ups",
        "power backup",
        "online ups",
      ],
    },
  ];

  checks.forEach((check) => {
    if (
      check.words.some((word) =>
        text.includes(word)
      )
    ) {
      detected.push(check.label);
    }
  });

  return [...new Set(detected)];
};

/* =========================================================
   PRODUCT CARD
========================================================= */

const ProductCard = ({ product }) => {
  const Icon = product.icon || Package;

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sira-gold/60 hover:shadow-xl">

      {/* =====================================================
          ICON AREA
      ===================================================== */}

      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-sira-light via-white to-gray-100">

        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sira-gold/10 transition-transform duration-500 group-hover:scale-150" />

        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-sira-red/5 transition-transform duration-500 group-hover:scale-150" />

        <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-sira-red/10 bg-white shadow-md transition-all duration-500 group-hover:scale-110 group-hover:border-sira-gold/50">

          <Icon
            size={58}
            strokeWidth={1.5}
            className="text-sira-red transition-colors duration-300 group-hover:text-sira-gold"
          />

        </div>

        {/* Resolution */}

        {product.resolution && (
          <span className="absolute right-3 top-3 rounded-full bg-sira-black px-3 py-1 text-[10px] font-bold text-white">
            {product.resolution}
          </span>
        )}

        {/* Badge */}

        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-sira-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-sira-black">
            {product.badge}
          </span>
        )}

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="p-5">

        {/* Category */}

        <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-sira-red">
          {product.category || "Product"}
        </p>

        {/* Sub Category */}

        {product.subCategory && (
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-sira-gold-dark">
            {product.subCategory}
          </p>
        )}

        {/* Title */}

        <div className="flex items-start justify-between gap-3">

          <h3 className="text-lg font-bold text-sira-dark">
            {product.name}
          </h3>

          <ArrowUpRight
            size={18}
            className="shrink-0 text-sira-red transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sira-gold"
          />

        </div>

        {/* Description */}

        <p className="mt-2 min-h-[72px] text-sm leading-6 text-sira-gray">
          {product.description ||
            "Professional technology product from SIRA Technologies."}
        </p>

        {/* =====================================================
            PRODUCT INFORMATION
        ===================================================== */}

        {(product.bestFor?.length > 0 ||
          product.coverage ||
          product.recommendedDistance ||
          product.nightVision ||
          product.connectivity ||
          product.environment ||
          product.cameraType) && (

          <div className="mt-4 space-y-2 rounded-xl bg-sira-light p-3">

            {product.cameraType && (
              <SpecRow
                label="Type"
                value={product.cameraType}
              />
            )}

            {product.environment && (
              <SpecRow
                label="Environment"
                value={product.environment}
              />
            )}

            {product.coverage && (
              <SpecRow
                label="Coverage"
                value={product.coverage}
              />
            )}

            {product.recommendedDistance && (
              <SpecRow
                label="Distance"
                value={product.recommendedDistance}
              />
            )}

            {product.nightVision && (
              <SpecRow
                label="Night Vision"
                value={product.nightVision}
              />
            )}

            {product.connectivity && (
              <SpecRow
                label="Connectivity"
                value={product.connectivity}
              />
            )}

            {product.bestFor?.length > 0 && (
              <SpecRow
                label="Best For"
                value={product.bestFor.join(", ")}
              />
            )}

          </div>
        )}

        {/* =====================================================
            TAGS
        ===================================================== */}

        {product.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">

            {product.tags
              .slice(0, 5)
              .map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white border border-gray-200 px-2.5 py-1 text-[10px] font-semibold text-sira-gray"
                >
                  {tag}
                </span>
              ))}

          </div>
        )}

        {/* =====================================================
            SEARCH MATCHES
        ===================================================== */}

        {product.matchedTerms?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">

            {product.matchedTerms
              .slice(0, 4)
              .map((term) => (
                <span
                  key={term}
                  className="rounded-full bg-sira-gold/10 px-2.5 py-1 text-[10px] font-semibold text-sira-gold-dark"
                >
                  Match: {term}
                </span>
              ))}

          </div>
        )}

      </div>
    </div>
  );
};

/* =========================================================
   SPEC ROW
========================================================= */

const SpecRow = ({ label, value }) => (
  <div className="flex items-start justify-between gap-3 text-xs">

    <span className="shrink-0 font-semibold text-sira-gray">
      {label}
    </span>

    <span className="text-right font-bold text-sira-dark">
      {value}
    </span>

  </div>
);

/* =========================================================
   MAIN COMPONENT
========================================================= */

const AIProductSearch = ({ products = [] }) => {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [showAll, setShowAll] = useState(false);

  /* =====================================================
     CATEGORIES
  ===================================================== */

  const categories = useMemo(() => {
    const unique = [
      ...new Set(
        products
          .map(
            (product) =>
              product.category ||
              product.service
          )
          .filter(Boolean)
      ),
    ];

    return ["All", ...unique];
  }, [products]);

  /* =====================================================
     SEARCH RESULTS
  ===================================================== */

  const results = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) =>
          (product.category ||
            product.service) ===
          selectedCategory
      );
    }

    if (submittedQuery) {
      filtered = rankProducts(
        filtered,
        submittedQuery
      );
    }

    return filtered;
  }, [
    products,
    submittedQuery,
    selectedCategory,
  ]);

  /* =====================================================
     DISPLAY
  ===================================================== */

  const displayedProducts = showAll
    ? results
    : results.slice(0, 12);

  /* =====================================================
     UNDERSTANDING
  ===================================================== */

  const understood = submittedQuery
    ? understandQuery(submittedQuery)
    : [];

  /* =====================================================
     SEARCH
  ===================================================== */

  const handleSearch = (event) => {
    event.preventDefault();

    setSubmittedQuery(query.trim());
    setShowAll(false);
  };

  /* =====================================================
     CLEAR
  ===================================================== */

  const clearSearch = () => {
    setQuery("");
    setSubmittedQuery("");
    setSelectedCategory("All");
    setShowAll(false);
  };

  return (
    <section className="sira-section bg-sira-light">

      <Container>

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-3 flex items-center justify-center gap-2">

            <Sparkles
              size={18}
              className="text-sira-gold"
            />

            <span className="sira-label">
              AI Product Assistant
            </span>

          </div>

          <h2 className="sira-title">
            Find the Right Product
          </h2>

          <p className="sira-description mx-auto mt-4">
            Search by product, camera resolution,
            camera type, location, connectivity,
            coverage or your actual requirement.
          </p>

        </div>

        {/* =================================================
            SEARCH BOX
        ================================================= */}

        <form
          onSubmit={handleSearch}
          className="mx-auto mt-10 max-w-4xl"
        >

          <div className="relative flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-lg sm:flex-row sm:items-center">

            <div className="flex flex-1 items-center gap-3 px-3">

              <Sparkles
                size={21}
                className="shrink-0 text-sira-red"
              />

              <input
                type="text"
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                placeholder='Try "4MP outdoor camera"'
                className="w-full border-none bg-transparent py-3 text-sm text-sira-dark outline-none placeholder:text-gray-400"
              />

              {query && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="text-gray-400 hover:text-sira-red"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}

            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-sira-red px-6 py-3 text-sm font-bold text-white transition hover:bg-sira-black"
            >
              <Search size={17} />
              Search Products
            </button>

          </div>

        </form>

        {/* =================================================
            EXAMPLES
        ================================================= */}

        {!submittedQuery && (

          <div className="mx-auto mt-5 flex max-w-5xl flex-wrap justify-center gap-2">

            {[
              "2MP indoor camera",
              "2MP outdoor camera",
              "4MP outdoor camera",
              "4MP WiFi camera",
              "4MP PTZ camera",
              "5MP shop camera",
              "8MP 4K outdoor camera",
              "Night vision camera",
              "NVR recorder",
              "PoE switch",
              "Linux server",
              "WiFi products",
              "Online UPS",
            ].map((example) => (

              <button
                key={example}
                type="button"
                onClick={() => {
                  setQuery(example);
                  setSubmittedQuery(example);
                  setShowAll(false);
                }}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-sira-gray transition hover:border-sira-gold hover:text-sira-red"
              >
                {example}
              </button>

            ))}

          </div>

        )}

        {/* =================================================
            UNDERSTANDING
        ================================================= */}

        {submittedQuery && (

          <div className="mx-auto mt-8 max-w-4xl rounded-xl border border-sira-gold/30 bg-white p-5">

            <p className="text-xs font-bold uppercase tracking-wider text-sira-red">
              Search Understanding
            </p>

            <p className="mt-1 text-sm font-semibold text-sira-dark">

              Matching products for:

              <span className="ml-1 text-sira-red">
                "{submittedQuery}"
              </span>

            </p>

            {understood.length > 0 && (

              <div className="mt-4 flex flex-wrap gap-2">

                {understood.map((item) => (

                  <span
                    key={item}
                    className="rounded-full bg-sira-gold/15 px-3 py-1.5 text-xs font-bold text-sira-dark"
                  >
                    {item}
                  </span>

                ))}

              </div>

            )}

          </div>

        )}

        {/* =================================================
            CATEGORY FILTER
        ================================================= */}

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-2">

            <SlidersHorizontal
              size={18}
              className="text-sira-red"
            />

            <span className="text-sm font-bold text-sira-dark">
              Product Categories
            </span>

          </div>

          <div className="flex flex-wrap gap-2">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                onClick={() => {
                  setSelectedCategory(category);
                  setShowAll(false);
                }}
                className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                  selectedCategory === category
                    ? "bg-sira-red text-white"
                    : "border border-gray-200 bg-white text-sira-gray hover:border-sira-gold hover:text-sira-red"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

        {/* =================================================
            RESULTS
        ================================================= */}

        <div className="mt-10">

          {results.length > 0 ? (

            <>

              <div className="mb-6">

                <p className="text-sm font-bold text-sira-dark">

                  {results.length}{" "}

                  {results.length === 1
                    ? "Product"
                    : "Products"}{" "}
                  Found

                </p>

                {submittedQuery && (

                  <p className="mt-1 text-xs text-sira-gray">
                    Results are ranked according to
                    product and requirement relevance.
                  </p>

                )}

              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {displayedProducts.map(
                  (product) => (

                    <ProductCard
                      key={product.id}
                      product={product}
                    />

                  )
                )}

              </div>

              {results.length > 12 && (

                <div className="mt-10 text-center">

                  <button
                    type="button"
                    onClick={() =>
                      setShowAll(
                        (current) => !current
                      )
                    }
                    className="rounded-xl border border-sira-red px-6 py-3 text-sm font-bold text-sira-red transition hover:bg-sira-red hover:text-white"
                  >
                    {showAll
                      ? "Show Less"
                      : `View All ${results.length} Products`}
                  </button>

                </div>

              )}

            </>

          ) : (

            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-14 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sira-gold/15 text-sira-red">

                <Search size={24} />

              </div>

              <h3 className="mt-5 text-xl font-bold text-sira-dark">
                No matching products found
              </h3>

              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-sira-gray">
                Try searching by resolution,
                camera type, indoor, outdoor,
                Wi-Fi, PTZ, night vision,
                product category or requirement.
              </p>

              <button
                type="button"
                onClick={clearSearch}
                className="mt-6 rounded-lg bg-sira-red px-5 py-2.5 text-sm font-bold text-white transition hover:bg-sira-black"
              >
                View All Products
              </button>

            </div>

          )}

        </div>

      </Container>

    </section>
  );
};

export default AIProductSearch;