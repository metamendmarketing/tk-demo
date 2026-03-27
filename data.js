window.MaterialsMatchData = (() => {
  const stockImages = {
    aerospace: "https://images.pexels.com/photos/1443894/pexels-photo-1443894.jpeg?cs=srgb&dl=pexels-reto-burkler-640438-1443894.jpg&fm=jpg",
    defense: "https://images.pexels.com/photos/19252039/pexels-photo-19252039.jpeg?cs=srgb&dl=pexels-pinamon-19252039.jpg&fm=jpg",
    medical: "https://images.pexels.com/photos/7088492/pexels-photo-7088492.jpeg?cs=srgb&dl=pexels-mart-production-7088492.jpg&fm=jpg",
    electrical: "https://images.pexels.com/photos/17321814/pexels-photo-17321814.jpeg?cs=srgb&dl=pexels-roman-castillo-326726117-17321814.jpg&fm=jpg",
    fabrication: "https://images.pexels.com/photos/26953858/pexels-photo-26953858.jpeg?cs=srgb&dl=pexels-sejio402-26953858.jpg&fm=jpg",
    machine: "https://images.pexels.com/photos/5846271/pexels-photo-5846271.jpeg?auto=compress&cs=tinysrgb&w=4082&fit=max",
    marine: "https://images.pexels.com/photos/12324749/pexels-photo-12324749.jpeg?cs=srgb&dl=pexels-jamizan-ninetyfour-107930758-12324749.jpg&fm=jpg",
    conductivity: "https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lightweight: "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=1600",
    corrosion: "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=1600",
    indoor: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1600",
    outdoor: "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1600",
    visible: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1600",
    flat: "https://images.pexels.com/photos/5691633/pexels-photo-5691633.jpeg?auto=compress&cs=tinysrgb&w=1600",
    round: "https://images.pexels.com/photos/162568/steel-industry-tools-workshop-162568.jpeg?auto=compress&cs=tinysrgb&w=1600",
    tube: "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=1600",
    unsure: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
  };

  const products = {
    aluminum_6061: {
      id: "aluminum_6061",
      name: "6061 Aluminum",
      family: "Aluminum",
      use: "Best all-around choice for structural, lightweight, and fabricatable applications.",
      pitch: "A strong default for general-purpose projects where you need lightweight performance, good corrosion resistance, and broad fabrication flexibility.",
      benefits: [
        "Good balance of strength, weight, corrosion resistance, and availability",
        "Common fit for structural frames, brackets, bases, and fabricated parts",
        "Easy to position as the safe default when requirements are broad"
      ]
    },
    aluminum_7075: {
      id: "aluminum_7075",
      name: "7075 Aluminum",
      family: "Aluminum",
      use: "High-strength option when performance matters more than general fabrication ease.",
      pitch: "Built for buyers who need a stronger, aerospace-style aluminum path and are willing to trade some formability for mechanical performance.",
      benefits: [
        "High strength-to-weight ratio",
        "Strong fit for performance parts and demanding mechanical loads",
        "Useful upsell path when 6061 may feel too general-purpose"
      ]
    },
    aluminum_6101: {
      id: "aluminum_6101",
      name: "6101 Aluminum",
      family: "Aluminum",
      use: "Electrical aluminum for conductivity-driven applications.",
      pitch: "Recommended when the buyer needs strong electrical performance with a lighter-weight alternative to copper.",
      benefits: [
        "Designed for electrical and power distribution applications",
        "Conductive path without defaulting straight to copper",
        "Strong match for bus bar and power transmission conversations"
      ]
    },
    stainless_304: {
      id: "stainless_304",
      name: "304 Stainless Steel",
      family: "Stainless Steel",
      use: "General corrosion-resistant stainless for everyday industrial environments.",
      pitch: "A practical stainless choice when corrosion resistance matters but the environment is not aggressively marine or chemical.",
      benefits: [
        "Strong all-purpose corrosion resistance",
        "Trusted fit for general industrial, food-adjacent, and clean-looking parts",
        "Easy answer for buyers who know they need stainless but not which grade"
      ]
    },
    stainless_316: {
      id: "stainless_316",
      name: "316 Stainless Steel",
      family: "Stainless Steel",
      use: "Premium corrosion-resistant stainless for marine, washdown, and harsh environments.",
      pitch: "Recommended for buyers exposed to salt, moisture, chemicals, or demanding sanitation environments where 304 may not be enough.",
      benefits: [
        "Better corrosion resistance than 304 in harsh environments",
        "Strong fit for marine and aggressive exposure conditions",
        "Good premium alternative when durability is the key buying trigger"
      ]
    },
    stainless_17_4: {
      id: "stainless_17_4",
      name: "17-4 Stainless Steel",
      family: "Stainless Steel",
      use: "High-strength stainless for performance-critical machined components.",
      pitch: "This path works when the buyer needs stainless plus higher strength and more engineered performance than a standard 300 series grade.",
      benefits: [
        "Combines corrosion resistance with higher strength",
        "Useful for performance parts and engineered components",
        "Creates a premium industrial recommendation path"
      ]
    },
    copper_110: {
      id: "copper_110",
      name: "110 Copper",
      family: "Copper",
      use: "High-conductivity copper for electrical, thermal, and general red metal applications.",
      pitch: "The right answer when conductivity is the leading requirement and the buyer wants a familiar copper solution.",
      benefits: [
        "Excellent electrical and thermal conductivity",
        "Strong fit for electrical components, connectors, and conductive parts",
        "Simple recommendation when performance is driven by conductivity"
      ]
    },
    copper_145: {
      id: "copper_145",
      name: "145 Copper",
      family: "Copper",
      use: "Machinable copper when conductivity still matters.",
      pitch: "Useful when the buyer needs copper performance but also expects the material to machine more efficiently than pure copper options.",
      benefits: [
        "Improved machinability relative to standard copper grades",
        "Retains strong electrical performance",
        "Best fit for precision copper components or machined electrical parts"
      ]
    }
  };

  const questions = [
    {
      id: "industry",
      title: "Which industry best fits your job?",
      description: "Start with the industry your application serves.",
      options: [
        { value: "aerospace", label: "Aerospace", copy: "Aluminum, stainless steel, and red metals for aviation programs with global supply support, AS9100 and ISO 9001 capabilities.", image: "https://materialsplus.com/medias/?context=bWFzdGVyfHJvb3R8MTA3Mjc2fGltYWdlL2pwZWd8YUdFMEwyaGlNQzh4TWpnek16STNOamsxTWpZd05nfDUzYWY2ZjNiOGUzY2JiNjg5MzVkNTgzNjM5Y2VkYWMxNzczZDVhOGYwZGQwYzk2MWNkZTFkNzc3ZjY5YjIwZmI" },
        { value: "defense", label: "Defense", copy: "Aluminum, stainless, nickel, and copper for critical components with custom processing and program-ready supply support.", image: "https://materialsplus.com/medias/?context=bWFzdGVyfHJvb3R8MTE2MzM4fGltYWdlL2pwZWd8YURSa0wyaGlNQzh4TWpnek16STNOams0TlRNM05BfDEyNjhlNTQ3MGZmM2JjY2FlNWFhZTQ4YmRiNjAzMTQxMjE4NGFhMTNhMGMyNmIxNWM3M2U0MTQ1ZWEyYTEwODM" },
        { value: "medical", label: "Medical", copy: "Precision metals for instrument and device manufacturing with high-quality standards, cut-to-length, waterjet, kitting, and logistics support.", image: "https://materialsplus.com/medias/?context=bWFzdGVyfHJvb3R8MTA2Mzc3fGltYWdlL2pwZWd8YUdaaEwyZzJOUzh4TWpnek16STNOekF4T0RFME1nfDUyNTZlNTBkYTBmYzZhMThhNzFjMjljMDZhMjFmNGE5NzI0NGIyMjcwYzc0YmRiODRlNWMxM2IzNjIyN2NlY2E" },
        { value: "power_distribution", label: "Power Distribution", copy: "Aluminum, stainless, and red metals for electrical OEMs and data center equipment, including fabricated bus bars and JIT support.", image: "https://materialsplus.com/medias/?context=bWFzdGVyfHJvb3R8MTc1MTA2fGltYWdlL2pwZWd8YURreEwyZzJOUzh4TWpnek16STNOekExTURreE1BfDg5OWY1ZDg0ZGU2YmM4MmI2MGRhMTU2ZWQyODNkMmIxZTVjYzRlMmJkM2Y4ZmQ1YWVhYTY5ODNkMWIxMDdiYWE" }
      ]
    },
    {
      id: "application",
      title: "What are you buying material for?",
      description: "Start with the job, not the alloy. We’ll use the application to narrow the recommendation path quickly.",
      options: [
        { value: "electrical", label: "Electrical or power distribution", copy: "Conductive parts, bus bar, connectors, terminals, electrical assemblies", image: stockImages.electrical },
        { value: "structural", label: "General structural or fabricated parts", copy: "Frames, brackets, supports, housings, machine bases", image: stockImages.fabrication },
        { value: "performance", label: "High-performance mechanical component", copy: "Strength-critical parts, engineered components, premium industrial use", image: stockImages.aerospace },
        { value: "corrosion", label: "Corrosion-prone or washdown environment", copy: "Outdoor, wet, food-adjacent, marine, or chemical exposure", image: stockImages.marine }
      ]
    },
    {
      id: "priority",
      title: "Which requirement matters most?",
      description: "Pick the top buying driver. This helps us choose between materials that can look similar on the surface.",
      options: [
        { value: "conductivity", label: "Electrical or thermal conductivity", copy: "Best when current flow or heat transfer is the main requirement", image: stockImages.conductivity },
        { value: "strength_weight", label: "Strength with lower weight", copy: "Best when performance and reduced mass both matter", image: stockImages.lightweight },
        { value: "corrosion_resistance", label: "Corrosion resistance", copy: "Best when long-term durability in harsh conditions matters most", image: stockImages.corrosion },
        { value: "machinability", label: "Machinability", copy: "Best when you need efficient chip control and cleaner machine work", image: stockImages.machine }
      ]
    },
    {
      id: "environment",
      title: "What environment will it live in?",
      description: "Environmental exposure often decides whether a buyer should step up to a more corrosion-resistant material.",
      options: [
        { value: "indoor", label: "Indoor or controlled environment", copy: "General industrial use with minimal corrosion exposure", image: stockImages.indoor },
        { value: "outdoor", label: "Outdoor exposure", copy: "Weather, moisture, and more day-to-day environmental stress", image: stockImages.outdoor },
        { value: "marine", label: "Marine, washdown, or chemical exposure", copy: "Salt, aggressive moisture, sanitation, or corrosive conditions", image: stockImages.marine },
        { value: "electrical_enclosure", label: "Electrical system or conductive assembly", copy: "Power transmission, connectors, electrical distribution, conductive components", image: stockImages.electrical }
      ]
    },
    {
      id: "process",
      title: "How will the material be used downstream?",
      description: "We use the planned process to steer buyers toward alloys that are easier to machine, fabricate, or deploy.",
      options: [
        { value: "machine", label: "Machined into a finished part", copy: "Turning, milling, drilling, precision component work", image: stockImages.machine },
        { value: "fabricate", label: "Cut, weld, or fabricate", copy: "General shop work, formed parts, structural fabrication", image: stockImages.fabrication },
        { value: "conductive_component", label: "Installed as a conductive component", copy: "Electrical part where conductivity is the main functional requirement", image: stockImages.electrical },
        { value: "appearance", label: "Visible part with durability concerns", copy: "Buyer wants a clean-looking, durable material choice", image: stockImages.visible }
      ]
    },
    {
      id: "form",
      title: "What form do you likely need?",
      description: "The shape helps us steer the user into a catalog path that feels more concrete and quote-ready.",
      options: [
        { value: "flat", label: "Sheet, plate, or flat product", copy: "Panels, gussets, covers, plate components, bus plates", image: stockImages.flat },
        { value: "round", label: "Round bar or rod", copy: "Shafts, machined components, conductive rods", image: stockImages.round },
        { value: "tube", label: "Tube or hollow section", copy: "Frames, structure, corrosion-resistant tubing, fluid-adjacent systems", image: stockImages.tube },
        { value: "not_sure", label: "Not sure yet", copy: "Still early. I want the right material first, then I’ll pick the shape", image: stockImages.unsure }
      ]
    },
    {
      id: "size_profile",
      title: "What size range best fits the parts in this job?",
      description: "This helps us recommend a more realistic stock size instead of a generic default.",
      options: [
        { value: "compact_precision", label: "Compact or precision parts", copy: "Typically smaller than 12 in, tighter blanks, smaller machined or formed parts" },
        { value: "standard_component", label: "Standard component sizes", copy: "Typical parts, brackets, housings, supports, and common production blanks" },
        { value: "large_format", label: "Large panels or longer members", copy: "Longer lengths, wider flats, frames, channels, or structural sections" },
        { value: "mixed_job", label: "A mix of sizes", copy: "This job likely needs more than one cut size or stock size" }
      ]
    },
    {
      id: "order_volume",
      title: "How much material do you expect to need for this job?",
      description: "We use release volume to recommend a more realistic quantity and fulfillment path.",
      options: [
        { value: "prototype", label: "Prototype or one-off", copy: "A few pieces for a first build, trial, repair, or urgent replacement" },
        { value: "short_run", label: "Short production run", copy: "A small batch for an initial release or limited program" },
        { value: "production", label: "Production quantity", copy: "A larger release with multiple assemblies, units, or finished parts" },
        { value: "ongoing", label: "Ongoing replenishment", copy: "Repeat buys, scheduled releases, or continuing program demand" }
      ]
    },
  ];

  const selectorSteps = [
    {
      id: "material",
      title: "Choose your material family",
      description: "Start with the primary material group, then refine the path through available alloys, shapes, and product types.",
      options: [
        { value: "aluminum", label: "Aluminum", copy: "Lightweight, structural, conductive, and performance aluminum paths" },
        { value: "stainless_steel", label: "Stainless Steel", copy: "Corrosion-resistant and high-performance stainless options" },
        { value: "copper", label: "Copper", copy: "Conductive copper grades for electrical and machined applications" }
      ]
    },
    {
      id: "alloy",
      title: "Choose the alloy",
      description: "Filtered alloy choices reflect the selected material family.",
      dependsOn: "material"
    },
    {
      id: "shape",
      title: "Choose the shape",
      description: "Shape options narrow the product family and help push the visitor into a quote-ready path.",
      dependsOn: "alloy"
    },
    {
      id: "product",
      title: "Choose the product type",
      description: "The final step gives the buyer a concrete product path instead of a raw catalog dump.",
      dependsOn: "shape"
    }
  ];

  const selectorCatalog = {
    aluminum: {
      label: "Aluminum",
      alloys: {
        "6061": {
          label: "6061 Aluminum",
          shapes: {
            plate: {
              label: "Plate",
              products: [
                { value: "6061_plate_standard", label: "6061 Plate", copy: "General structural and machined plate stock" },
                { value: "6061_plate_precision", label: "6061 Precision Plate", copy: "Closer-tolerance plate for machined components" }
              ]
            },
            bar: {
              label: "Bar",
              products: [
                { value: "6061_bar_round", label: "6061 Round Bar", copy: "General-purpose round bar for machining and fabrication" },
                { value: "6061_bar_rect", label: "6061 Rectangle Bar", copy: "Flat structural or machined bar stock" }
              ]
            },
            tube: {
              label: "Tube",
              products: [
                { value: "6061_tube_round", label: "6061 Round Tube", copy: "Lightweight structural tube" },
                { value: "6061_tube_rect", label: "6061 Rectangle Tube", copy: "Frame and support applications" }
              ]
            }
          }
        },
        "7075": {
          label: "7075 Aluminum",
          shapes: {
            plate: {
              label: "Plate",
              products: [
                { value: "7075_plate", label: "7075 Plate", copy: "High-strength plate for demanding mechanical parts" }
              ]
            },
            bar: {
              label: "Bar",
              products: [
                { value: "7075_bar_round", label: "7075 Round Bar", copy: "Performance round bar for machined components" },
                { value: "7075_bar_rect", label: "7075 Rectangle Bar", copy: "High-strength flat bar stock" }
              ]
            }
          }
        },
        "6101": {
          label: "6101 Aluminum",
          shapes: {
            bar: {
              label: "Bar",
              products: [
                { value: "6101_bus_bar", label: "6101 Bus Bar", copy: "Electrical aluminum path for power distribution" },
                { value: "6101_round_bar", label: "6101 Round Bar", copy: "Conductive bar stock for electrical applications" }
              ]
            },
            plate: {
              label: "Plate",
              products: [
                { value: "6101_plate", label: "6101 Plate", copy: "Flat conductive stock for electrical fabrication" }
              ]
            }
          }
        }
      }
    },
    stainless_steel: {
      label: "Stainless Steel",
      alloys: {
        "304": {
          label: "304 Stainless Steel",
          shapes: {
            sheet: {
              label: "Sheet",
              products: [
                { value: "304_sheet", label: "304 Sheet", copy: "General corrosion-resistant sheet stock" }
              ]
            },
            plate: {
              label: "Plate",
              products: [
                { value: "304_plate", label: "304 Plate", copy: "General-purpose stainless plate" }
              ]
            },
            tube: {
              label: "Tube",
              products: [
                { value: "304_round_tube", label: "304 Round Tube", copy: "Standard corrosion-resistant tubing" },
                { value: "304_square_tube", label: "304 Square Tube", copy: "Clean structural stainless tubing" }
              ]
            }
          }
        },
        "316": {
          label: "316 Stainless Steel",
          shapes: {
            sheet: {
              label: "Sheet",
              products: [
                { value: "316_sheet", label: "316 Sheet", copy: "Premium corrosion-resistant sheet for harsh environments" }
              ]
            },
            plate: {
              label: "Plate",
              products: [
                { value: "316_plate", label: "316 Plate", copy: "Marine and washdown-ready stainless plate" }
              ]
            },
            tube: {
              label: "Tube",
              products: [
                { value: "316_round_tube", label: "316 Round Tube", copy: "Tube path for harsh and marine exposure" }
              ]
            }
          }
        },
        "17-4": {
          label: "17-4 Stainless Steel",
          shapes: {
            bar: {
              label: "Bar",
              products: [
                { value: "17-4_round_bar", label: "17-4 Round Bar", copy: "High-strength stainless bar for machined parts" }
              ]
            },
            plate: {
              label: "Plate",
              products: [
                { value: "17-4_plate", label: "17-4 Plate", copy: "Performance stainless plate for engineered applications" }
              ]
            }
          }
        }
      }
    },
    copper: {
      label: "Copper",
      alloys: {
        "110": {
          label: "110 Copper",
          shapes: {
            plate: {
              label: "Plate",
              products: [
                { value: "110_plate", label: "110 Copper Plate", copy: "High-conductivity copper plate" }
              ]
            },
            sheet: {
              label: "Sheet",
              products: [
                { value: "110_sheet", label: "110 Copper Sheet", copy: "Conductive flat stock for electrical and thermal applications" }
              ]
            },
            bar: {
              label: "Bar",
              products: [
                { value: "110_bar", label: "110 Copper Bar", copy: "Bar stock for conductive components and bus applications" }
              ]
            }
          }
        },
        "145": {
          label: "145 Copper",
          shapes: {
            bar: {
              label: "Bar",
              products: [
                { value: "145_round_bar", label: "145 Round Bar", copy: "Machinable copper bar for precision components" },
                { value: "145_rect_bar", label: "145 Rectangle Bar", copy: "Flat machinable copper stock" }
              ]
            }
          }
        }
      }
    }
  };

  const scoringRules = {
    industry: {
      aerospace: { aluminum_7075: 5, stainless_17_4: 4, aluminum_6061: 2 },
      defense: { stainless_17_4: 5, aluminum_7075: 4, stainless_316: 2 },
      medical: { stainless_304: 4, stainless_316: 5, aluminum_6061: 1 },
      power_distribution: { aluminum_6101: 6, copper_110: 5, copper_145: 2 },
      electrical: { copper_110: 6, aluminum_6101: 5, copper_145: 3 }
    },
    application: {
      electrical: { copper_110: 6, copper_145: 4, aluminum_6101: 6, aluminum_6061: 1 },
      structural: { aluminum_6061: 6, stainless_304: 2, stainless_316: 1, aluminum_7075: 2 },
      performance: { aluminum_7075: 5, stainless_17_4: 5, aluminum_6061: 2 },
      corrosion: { stainless_304: 4, stainless_316: 6, aluminum_6061: 2, copper_110: 1 }
    },
    priority: {
      conductivity: { copper_110: 6, aluminum_6101: 5, copper_145: 4 },
      strength_weight: { aluminum_7075: 6, aluminum_6061: 4, stainless_17_4: 3 },
      corrosion_resistance: { stainless_316: 6, stainless_304: 5, aluminum_6061: 2 },
      machinability: { copper_145: 6, aluminum_6061: 3, stainless_17_4: 2, aluminum_7075: 2 }
    },
    environment: {
      indoor: { aluminum_6061: 2, stainless_304: 2, copper_145: 1 },
      outdoor: { stainless_304: 3, aluminum_6061: 3, stainless_316: 2 },
      marine: { stainless_316: 7, stainless_304: 2, aluminum_6061: 2 },
      electrical_enclosure: { copper_110: 4, copper_145: 3, aluminum_6101: 5 }
    },
    process: {
      machine: { copper_145: 5, aluminum_7075: 3, stainless_17_4: 3, aluminum_6061: 2 },
      fabricate: { aluminum_6061: 5, stainless_304: 3, stainless_316: 2 },
      conductive_component: { copper_110: 5, aluminum_6101: 5, copper_145: 3 },
      appearance: { stainless_304: 4, stainless_316: 4, aluminum_6061: 2 }
    },
    form: {
      flat: { copper_110: 2, aluminum_6061: 2, stainless_304: 2, stainless_316: 2, aluminum_6101: 2 },
      round: { copper_145: 2, aluminum_7075: 2, stainless_17_4: 2, copper_110: 1 },
      tube: { stainless_304: 2, stainless_316: 2, aluminum_6061: 2 },
      not_sure: { aluminum_6061: 1, stainless_304: 1, copper_110: 1 }
    }
  };

  const summaryLabels = {
    industry: {
      aerospace: "Industry: Aerospace",
      defense: "Industry: Defense",
      medical: "Industry: Medical",
      power_distribution: "Industry: Power Distribution",
      electrical: "Industry: Electrical"
    },
    application: {
      electrical: "Electrical application",
      structural: "Structural or fabricated",
      performance: "Performance-critical part",
      corrosion: "Corrosion-prone environment"
    },
    priority: {
      conductivity: "Prioritizes conductivity",
      strength_weight: "Needs strength-to-weight",
      corrosion_resistance: "Needs corrosion resistance",
      machinability: "Needs machinability"
    },
    environment: {
      indoor: "Indoor use",
      outdoor: "Outdoor exposure",
      marine: "Marine or harsh exposure",
      electrical_enclosure: "Electrical assembly"
    },
    process: {
      machine: "Machined part",
      fabricate: "Fabricated or welded",
      conductive_component: "Conductive component",
      appearance: "Visible durable part"
    },
    form: {
      flat: "Flat product",
      round: "Round bar or rod",
      tube: "Tube or hollow section",
      not_sure: "Shape undecided"
    },
    size_profile: {
      compact_precision: "Compact or precision-sized parts",
      standard_component: "Standard component sizing",
      large_format: "Large panels or long members",
      mixed_job: "Mixed part sizes"
    },
    order_volume: {
      prototype: "Prototype quantity",
      short_run: "Short production run",
      production: "Production quantity",
      ongoing: "Ongoing replenishment"
    },
    material: {
      aluminum: "Material: Aluminum",
      stainless_steel: "Material: Stainless Steel",
      copper: "Material: Copper"
    },
    alloy: {
      "6061": "Alloy: 6061",
      "7075": "Alloy: 7075",
      "6101": "Alloy: 6101",
      "304": "Alloy: 304",
      "316": "Alloy: 316",
      "17-4": "Alloy: 17-4",
      "110": "Alloy: 110",
      "145": "Alloy: 145"
    },
    shape: {
      plate: "Shape: Plate",
      bar: "Shape: Bar",
      tube: "Shape: Tube",
      sheet: "Shape: Sheet"
    },
    product: {
      "6061_plate_standard": "Product: 6061 Plate",
      "6061_plate_precision": "Product: 6061 Precision Plate",
      "6061_bar_round": "Product: 6061 Round Bar",
      "6061_bar_rect": "Product: 6061 Rectangle Bar",
      "6061_tube_round": "Product: 6061 Round Tube",
      "6061_tube_rect": "Product: 6061 Rectangle Tube",
      "7075_plate": "Product: 7075 Plate",
      "7075_bar_round": "Product: 7075 Round Bar",
      "7075_bar_rect": "Product: 7075 Rectangle Bar",
      "6101_bus_bar": "Product: 6101 Bus Bar",
      "6101_round_bar": "Product: 6101 Round Bar",
      "6101_plate": "Product: 6101 Plate",
      "304_sheet": "Product: 304 Sheet",
      "304_plate": "Product: 304 Plate",
      "304_round_tube": "Product: 304 Round Tube",
      "304_square_tube": "Product: 304 Square Tube",
      "316_sheet": "Product: 316 Sheet",
      "316_plate": "Product: 316 Plate",
      "316_round_tube": "Product: 316 Round Tube",
      "17-4_round_bar": "Product: 17-4 Round Bar",
      "17-4_plate": "Product: 17-4 Plate",
      "110_plate": "Product: 110 Copper Plate",
      "110_sheet": "Product: 110 Copper Sheet",
      "110_bar": "Product: 110 Copper Bar",
      "145_round_bar": "Product: 145 Round Bar",
      "145_rect_bar": "Product: 145 Rectangle Bar"
    }
  };

  const storageKey = "materials-match-answers";
  const modeKey = "materials-match-mode";
  const selectionKey = "materials-match-selection";

  function getAnswers() {
    try {
      return JSON.parse(window.sessionStorage.getItem(storageKey) || "{}");
    } catch (error) {
      return {};
    }
  }

  function setAnswer(questionId, value) {
    const answers = getAnswers();
    answers[questionId] = value;
    window.sessionStorage.setItem(storageKey, JSON.stringify(answers));
  }

  function clearAnswers() {
    window.sessionStorage.removeItem(storageKey);
  }

  function setMode(mode) {
    window.sessionStorage.setItem(modeKey, mode);
  }

  function getMode() {
    return window.sessionStorage.getItem(modeKey) || "";
  }

  function clearMode() {
    window.sessionStorage.removeItem(modeKey);
  }

  function setSelection(selection) {
    window.sessionStorage.setItem(selectionKey, JSON.stringify(selection));
  }

  function getSelection() {
    try {
      return JSON.parse(window.sessionStorage.getItem(selectionKey) || "null");
    } catch (error) {
      return null;
    }
  }

  function clearSelection() {
    window.sessionStorage.removeItem(selectionKey);
  }

  function scoreProducts(answers) {
    const scores = Object.keys(products).reduce((acc, id) => {
      acc[id] = 0;
      return acc;
    }, {});

    Object.entries(answers).forEach(([questionId, value]) => {
      const map = scoringRules[questionId];
      if (!map || !map[value]) {
        return;
      }

      Object.entries(map[value]).forEach(([productId, score]) => {
        scores[productId] += score;
      });
    });

    if (answers.application === "electrical" && answers.priority === "machinability") {
      scores.copper_145 += 3;
    }

    if (answers.environment === "marine") {
      scores.stainless_316 += 2;
    }

    if (answers.application === "performance" && answers.process === "machine") {
      scores.stainless_17_4 += 2;
      scores.aluminum_7075 += 2;
    }

    if (answers.application === "structural" && answers.process === "fabricate") {
      scores.aluminum_6061 += 2;
    }

    if (answers.priority === "conductivity" && answers.environment === "electrical_enclosure") {
      scores.aluminum_6101 += 2;
      scores.copper_110 += 2;
    }

    return Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .map(([productId, score]) => ({ product: products[productId], score }));
  }

  return {
    products,
    questions,
    selectorSteps,
    selectorCatalog,
    summaryLabels,
    getAnswers,
    setAnswer,
    clearAnswers,
    setMode,
    getMode,
    clearMode,
    setSelection,
    getSelection,
    clearSelection,
    scoreProducts
  };
})();
