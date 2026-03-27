const {
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
} = window.MaterialsMatchData;

const materialImages = {
  aluminum: "https://materialsplus.com/medias/aluminum.jpg?context=bWFzdGVyfGltYWdlc3w0MzcxMHxpbWFnZS9qcGVnfGFEbGxMMmcwTUM4eE16RTNNREV3TURFd09UTTBNaTloYkhWdGFXNTFiUzVxY0djfGQ4YmRhMzcwYWUwNjY1NGI0MWI0ZjY0OTlkZjA3ZTI5MzZjOTI2ZmM5ZWNjNjY3ZDQ1YjMzNWIzMWQyZGZkYzQ",
  stainless_steel: "https://materialsplus.com/medias/stainless-steel.jpg?context=bWFzdGVyfGltYWdlc3w3NjUwN3xpbWFnZS9qcGVnfGFEQTVMMmcwTVM4eE16RTNNREV3TURFME1qRXhNQzl6ZEdGcGJteGxjM010YzNSbFpXd3VhbkJufDUzNjVkMDU5NDU5MjQ0MTFlNGVhMTU5NDQ5NjkyNDc0ZjkxMzc4YjlmMGYzNGI1ZDM4NmE4OGQwMjFhOGVmY2U",
  copper: "https://materialsplus.com/medias/copper.jpg?context=bWFzdGVyfGltYWdlc3w3MTQwMHxpbWFnZS9qcGVnfGFHRXdMMmd6WkM4eE16RTNNREV3TURBME16Z3dOaTlqYjNCd1pYSXVhbkJufDVjNWY5OWI2YWI3ODg4ZWUzOWVlOWI1MjJlZTZiZjMzNTBkMTViNjBmNGM1NTMzZmU2ODdjZmUwMDIwYzc1NzY",
  banner: "https://materialsplus.com/medias/CBS-homepage-metal-bar-banner-image-dark-overlay-2.jpg?context=bWFzdGVyfGltYWdlc3w4Mjc1N3xpbWFnZS9qcGVnfGFEZ3hMMmd3TUM4eE16RTNNRFEyT0RnME56WTBOaTlEUWxNdGFHOXRaWEJoWjJVdGJXVjBZV3d0WW1GeUxXSmhibTVsY2kxcGJXRm5aUzFrWVhKckxXOTJaWEpzWVhrdE1pNXFjR2N8NmVkYTYzNzE2YzEyYTM2YjM2NWQ5NTIzM2NlOTkyYmQ3OTVlZjI4MzUxMzQ5MGU3ODMxMWY0OTZiMmUwMTA2Zg"
};

const productAssetMap = {
  "6061 Aluminum|Channel": {
    image: "https://materialsplus.com/medias/-1200Wx1200H-aluminum-channel.jpg-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMjIxNnxpbWFnZS9qcGVnfGFEZzVMMmc0T1M4NE9ESXlOakV6T0RBek1ETTRMeTh4TWpBd1YzZ3hNakF3U0M5aGJIVnRhVzUxYlMxamFHRnVibVZzTG1wd1oxOHpNREJYZERNd01FZ3w2NTllNGMxN2I5MmVjYTg5Mzc3NDE0NWE1OGJiZDYxOWVjMjU0ZWM5NDQ4MzhlYjZiMjRiZjg3ZjNjMDMzOTQy",
    pdpUrl: "https://materialsplus.com/products/aluminum/6061/channel/2-000/0-130/1-000/buy/ALCHA00013"
  },
  "6061 Aluminum|Plate": {
    image: materialImages.aluminum,
    pdpUrl: "https://materialsplus.com/products/aluminum/6061"
  },
  "6061 Aluminum|Bar": {
    image: materialImages.aluminum,
    pdpUrl: "https://materialsplus.com/products/aluminum/6061"
  },
  "6061 Aluminum|Tube": {
    image: materialImages.aluminum,
    pdpUrl: "https://materialsplus.com/products/aluminum/6061"
  },
  "7075 Aluminum|Plate": {
    image: materialImages.aluminum,
    pdpUrl: "https://materialsplus.com/products/aluminum/7075"
  },
  "7075 Aluminum|Bar": {
    image: materialImages.aluminum,
    pdpUrl: "https://materialsplus.com/products/aluminum/7075"
  },
  "6101 Aluminum|Bus Bar": {
    image: materialImages.aluminum,
    pdpUrl: "https://materialsplus.com/products/aluminum/6101"
  },
  "6101 Aluminum|Bar": {
    image: materialImages.aluminum,
    pdpUrl: "https://materialsplus.com/products/aluminum/6101"
  },
  "304 Stainless Steel|Sheet": {
    image: materialImages.stainless_steel,
    pdpUrl: "https://materialsplus.com/products/stainless-steel/304"
  },
  "304 Stainless Steel|Plate": {
    image: materialImages.stainless_steel,
    pdpUrl: "https://materialsplus.com/products/stainless-steel/304"
  },
  "304 Stainless Steel|Tube": {
    image: materialImages.stainless_steel,
    pdpUrl: "https://materialsplus.com/products/stainless-steel/304"
  },
  "316 Stainless Steel|Sheet": {
    image: materialImages.stainless_steel,
    pdpUrl: "https://materialsplus.com/products/stainless-steel/316"
  },
  "316 Stainless Steel|Plate": {
    image: materialImages.stainless_steel,
    pdpUrl: "https://materialsplus.com/products/stainless-steel/316"
  },
  "316 Stainless Steel|Tube": {
    image: materialImages.stainless_steel,
    pdpUrl: "https://materialsplus.com/products/stainless-steel/316"
  },
  "17-4 Stainless Steel|Bar": {
    image: materialImages.stainless_steel,
    pdpUrl: "https://materialsplus.com/products/stainless-steel/17-4"
  },
  "17-4 Stainless Steel|Plate": {
    image: materialImages.stainless_steel,
    pdpUrl: "https://materialsplus.com/products/stainless-steel/17-4"
  },
  "110 Copper|Plate": {
    image: materialImages.copper,
    pdpUrl: "https://materialsplus.com/products/copper/110"
  },
  "110 Copper|Sheet": {
    image: materialImages.copper,
    pdpUrl: "https://materialsplus.com/products/copper/110"
  },
  "110 Copper|Bar": {
    image: materialImages.copper,
    pdpUrl: "https://materialsplus.com/products/copper/110"
  },
  "145 Copper|Bar": {
    image: materialImages.copper,
    pdpUrl: "https://materialsplus.com/products/copper/145"
  },
  "6061_plate_standard": {
    pdpUrl: "https://materialsplus.com/products/aluminum/6061"
  },
  "6061_plate_precision": {
    pdpUrl: "https://materialsplus.com/products/aluminum/6061"
  },
  "6061_bar_round": {
    pdpUrl: "https://materialsplus.com/products/aluminum/6061"
  },
  "7075_plate": {
    pdpUrl: "https://materialsplus.com/products/aluminum/7075"
  },
  "6101_bus_bar": {
    pdpUrl: "https://materialsplus.com/products/aluminum/6101"
  },
  "304_sheet": {
    pdpUrl: "https://materialsplus.com/products/stainless-steel/304"
  },
  "316_plate": {
    pdpUrl: "https://materialsplus.com/products/stainless-steel/316"
  },
  "17-4_round_bar": {
    pdpUrl: "https://materialsplus.com/products/stainless-steel/17-4"
  },
  "110_bar": {
    pdpUrl: "https://materialsplus.com/products/copper/110"
  },
  "145_round_bar": {
    pdpUrl: "https://materialsplus.com/products/copper/145"
  }
};

const optionIcons = {
  aerospace: "plane",
  defense: "shield",
  medical: "cross",
  power_distribution: "bolt",
  electrical: "bolt",
  structural: "beam",
  performance: "target",
  corrosion: "drop",
  conductivity: "bolt",
  strength_weight: "feather",
  corrosion_resistance: "shield",
  machinability: "gear",
  indoor: "building",
  outdoor: "sun",
  marine: "wave",
  electrical_enclosure: "plug",
  machine: "gear",
  fabricate: "wrench",
  conductive_component: "plug",
  appearance: "spark",
  flat: "square",
  round: "circle",
  tube: "pipe",
  not_sure: "help",
  compact_precision: "target",
  standard_component: "square",
  large_format: "beam",
  mixed_job: "help",
  prototype: "dot",
  short_run: "circle",
  production: "square",
  ongoing: "bolt"
};

function getOptionIcon(value) {
  const icon = optionIcons[value] || "dot";
  return `<span class="option-icon" aria-hidden="true" data-icon="${icon}"></span>`;
}

function renderSummaryChips(target, answers) {
  const allKeys = [...questions.map((question) => question.id), ...selectorSteps.map((step) => step.id)];
  const entries = allKeys
    .map((key) => {
      const value = answers[key];
      return value && summaryLabels[key] ? summaryLabels[key][value] : null;
    })
    .filter(Boolean);

  target.innerHTML = "";

  if (!entries.length) {
    const chip = document.createElement("span");
    chip.className = "chip chip-muted";
    chip.textContent = "No answers yet";
    target.appendChild(chip);
    return;
  }

  entries.forEach((entry) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = entry;
    target.appendChild(chip);
  });
}

function getIndustryLabel(value) {
  return summaryLabels.industry?.[value]?.replace("Industry: ", "") || value;
}

function personalizeQuestion(question, answers) {
  const industry = answers.industry ? getIndustryLabel(answers.industry) : "";
  const application = answers.application ? summaryLabels.application[answers.application] : "";

  if (question.id === "application" && industry) {
    return {
      title: `What are you making for ${industry}?`,
      description: "Choose the use case that best matches the actual part or assembly you need to build."
    };
  }

  if (question.id === "priority" && (industry || application)) {
    return {
      title: "What matters most for this job?",
      description: `Based on ${industry || application}, choose the requirement that would be most costly to get wrong.`
    };
  }

  if (question.id === "environment") {
    return {
      title: "What environment will this part actually live in?",
      description: "We use the real exposure conditions to avoid recommending a material that looks acceptable on paper but fails in service."
    };
  }

  if (question.id === "process") {
    return {
      title: "How will this material be used in production?",
      description: "Choose the downstream process that best reflects how your team will actually cut, machine, form, or install it."
    };
  }

  if (question.id === "form") {
    return {
      title: "What stock form best matches this job?",
      description: "Pick the form you expect to order so we can narrow into a more realistic product path."
    };
  }

  if (question.id === "size_profile") {
    return {
      title: "How big are the parts or stock pieces in this job?",
      description: "We use this to recommend a stock size that feels closer to the actual build instead of a generic catalog default."
    };
  }

  if (question.id === "order_volume") {
    return {
      title: "What volume are you trying to cover with this buy?",
      description: "Tell us whether this is a prototype, short run, or repeat release so we can recommend a more realistic order quantity."
    };
  }

  return {
    title: question.title,
    description: question.description
  };
}

function getGuidedOptions(question, answers) {
  const options = [...question.options];

  if (question.id === "application") {
    if (answers.industry === "medical") {
      return options.filter((option) => option.value !== "electrical");
    }
    if (answers.industry === "power_distribution" || answers.industry === "electrical") {
      return options.filter((option) => option.value !== "corrosion");
    }
  }

  if (question.id === "priority") {
    if (answers.application === "electrical") {
      return options.filter((option) => option.value !== "strength_weight");
    }
    if (answers.application === "corrosion") {
      return options.filter((option) => option.value !== "conductivity");
    }
  }

  if (question.id === "environment") {
    if (answers.priority === "corrosion_resistance" || answers.application === "corrosion") {
      return options.filter((option) => option.value !== "indoor");
    }
    if (answers.application === "electrical") {
      return options.filter((option) => option.value !== "marine");
    }
  }

  if (question.id === "process") {
    if (answers.application === "electrical") {
      return options.filter((option) => option.value !== "appearance");
    }
    if (answers.priority === "machinability") {
      return options.filter((option) => option.value !== "fabricate");
    }
  }

  if (question.id === "form") {
    if (answers.application === "electrical") {
      return options.filter((option) => option.value !== "tube");
    }
    if (answers.process === "conductive_component") {
      return options.filter((option) => option.value !== "tube");
    }
  }

  return options;
}

function renderQuestionPage() {
  const params = new URLSearchParams(window.location.search);
  const step = Number(params.get("step") || "1");
  const safeStep = Math.min(Math.max(step, 1), questions.length);
  const question = questions[safeStep - 1];
  const answers = getAnswers();
  const content = personalizeQuestion(question, answers);
  const questionOptions = getGuidedOptions(question, answers);

  document.getElementById("progress-step").textContent = String(safeStep);
  document.getElementById("progress-total").textContent = String(questions.length);
  document.getElementById("progress-bar").style.width = `${(safeStep / questions.length) * 100}%`;
  document.getElementById("question-kicker").textContent = `Question ${safeStep}`;
  document.getElementById("question-title").textContent = content.title;
  document.getElementById("question-description").textContent = content.description;

  const optionsGrid = document.getElementById("options-grid");
  optionsGrid.innerHTML = "";
  const selected = answers[question.id];

  questionOptions.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-card";
    if (selected === option.value) {
      button.classList.add("active");
    }
    const showImage = question.id === "industry" && option.image;
    button.innerHTML = `
      ${showImage ? `<span class="option-image"><img src="${option.image}" alt="${option.label}"></span>` : ""}
      <span class="option-body">
        <span class="option-title-row">${!showImage ? getOptionIcon(option.value) : ""}<span class="option-title">${option.label}</span></span>
        <span class="option-copy">${option.copy}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      setAnswer(question.id, option.value);
      if (safeStep === questions.length) {
        window.location.href = "results.html";
        return;
      }
      window.location.href = `question.html?step=${safeStep + 1}`;
    });
    optionsGrid.appendChild(button);
  });

  renderSummaryChips(document.getElementById("summary-chips"), answers);

  const backButton = document.getElementById("back-button");
  backButton.disabled = safeStep === 1;
  backButton.addEventListener("click", () => {
    if (safeStep > 1) {
      window.location.href = `question.html?step=${safeStep - 1}`;
    }
  });

  document.getElementById("restart-button").addEventListener("click", () => {
    clearAnswers();
    window.location.href = "question.html?step=1";
  });
}

function getSelectorOptions(stepId, answers) {
  if (stepId === "material") {
    return selectorSteps[0].options.map((option) => ({
      ...option,
      image: materialImages[option.value]
    }));
  }

  if (stepId === "alloy" && answers.material) {
    const alloys = selectorCatalog[answers.material].alloys;
    return Object.entries(alloys).map(([value, alloy]) => ({
      value,
      label: alloy.label,
      copy: `View ${alloy.label} product paths`,
      image: materialImages[answers.material]
    }));
  }

  if (stepId === "shape" && answers.material && answers.alloy) {
    const shapes = selectorCatalog[answers.material].alloys[answers.alloy].shapes;
    return Object.entries(shapes).map(([value, shape]) => ({
      value,
      label: shape.label,
      copy: `Refine into ${shape.label.toLowerCase()} products`,
      image: materialImages[answers.material]
    }));
  }

  if (stepId === "product" && answers.material && answers.alloy && answers.shape) {
    return selectorCatalog[answers.material].alloys[answers.alloy].shapes[answers.shape].products.map((product) => ({
      ...product,
      image: materialImages[answers.material]
    }));
  }

  return [];
}

function renderSelectorPage() {
  const params = new URLSearchParams(window.location.search);
  const step = Number(params.get("step") || "1");
  const safeStep = Math.min(Math.max(step, 1), selectorSteps.length);
  const stepConfig = selectorSteps[safeStep - 1];
  const answers = getAnswers();
  const options = getSelectorOptions(stepConfig.id, answers);

  if (stepConfig.dependsOn && !answers[stepConfig.dependsOn]) {
    window.location.href = `selector.html?step=${safeStep - 1}`;
    return;
  }

  document.getElementById("progress-step").textContent = String(safeStep);
  document.getElementById("progress-total").textContent = String(selectorSteps.length);
  document.getElementById("progress-bar").style.width = `${(safeStep / selectorSteps.length) * 100}%`;
  document.getElementById("question-kicker").textContent = `Selector step ${safeStep}`;
  document.getElementById("question-title").textContent = stepConfig.title;
  document.getElementById("question-description").textContent = stepConfig.description;

  const optionsGrid = document.getElementById("options-grid");
  optionsGrid.innerHTML = "";
  const selected = answers[stepConfig.id];

  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-card";
    if (selected === option.value) {
      button.classList.add("active");
    }
    button.innerHTML = `
      <span class="option-body">
        <span class="option-title-row">${getOptionIcon(option.value)}<span class="option-title">${option.label}</span></span>
        <span class="option-copy">${option.copy}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      setAnswer(stepConfig.id, option.value);
      if (safeStep === selectorSteps.length) {
        window.location.href = "results.html";
        return;
      }
      window.location.href = `selector.html?step=${safeStep + 1}`;
    });
    optionsGrid.appendChild(button);
  });

  renderSummaryChips(document.getElementById("summary-chips"), answers);

  const backButton = document.getElementById("back-button");
  backButton.disabled = safeStep === 1;
  backButton.addEventListener("click", () => {
    if (safeStep > 1) {
      window.location.href = `selector.html?step=${safeStep - 1}`;
    }
  });

  document.getElementById("restart-button").addEventListener("click", () => {
    clearAnswers();
    window.location.href = "selector.html?step=1";
  });
}

function buildReason(product, answers) {
  const labels = [];
  const { industry, application, priority, environment, process } = answers;

  if (industry) labels.push(summaryLabels.industry[industry]);
  if (application) labels.push(summaryLabels.application[application]);
  if (priority) labels.push(summaryLabels.priority[priority]);
  if (environment) labels.push(summaryLabels.environment[environment]);
  if (process) labels.push(summaryLabels.process[process]);

  return `${product.pitch} This recommendation aligns with a buyer profile centered on ${labels.slice(0, 3).join(", ").toLowerCase()}.`;
}

function buildSizeQuantityReason(selection, answers) {
  const configuration = inferConfiguration(selection, answers).recommended;
  const jobDefaults = inferJobDefaults(selection, answers);
  const sizeProfileLabel = summaryLabels.size_profile?.[answers.size_profile]?.toLowerCase() || "the part profile you selected";
  const volumeLabel = summaryLabels.order_volume?.[answers.order_volume]?.toLowerCase() || "the release volume you selected";

  return `We suggested ${configuration.size} and a starting quantity of ${configuration.quantity} based on ${sizeProfileLabel}, ${volumeLabel}, and an estimated job size of ${jobDefaults.units} unit(s) at ${jobDefaults.piecesPerUnit} piece(s) per unit.`;
}

function buildNextStep(primary) {
  return `Continue into ${primary.name}, choose the right size and finish, then review the configured product before adding it to cart or saving it for later.`;
}

function buildShippingMessage(selection, answers) {
  const processing = inferConfiguration(selection, answers).recommended.processing;
  const volume = answers.order_volume;
  const sizeProfile = answers.size_profile;

  if (volume === "ongoing") {
    return "This job looks like an ongoing release. Plan for staged shipments, cut-to-size support, and repeat replenishment rather than a single one-time parcel shipment.";
  }

  if (volume === "production") {
    return "This recommendation is configured for a larger production release. Freight and cut-prep requirements will matter more than parcel speed, especially if you keep the processing step.";
  }

  if (sizeProfile === "large_format") {
    return `Because this job trends toward longer or larger stock, expect freight handling and planned cut lengths to affect the ship method. ${processing !== "None" ? `Processing is currently set to ${processing.toLowerCase()}.` : ""}`.trim();
  }

  return `This recommendation fits a smaller or mid-size release and can be staged with ${processing.toLowerCase()} before shipment when needed.`;
}

function getTrustReasons(answers) {
  const industryLead = {
    aerospace: "Program-ready support for aerospace material supply and processing.",
    defense: "Support for demanding defense programs and critical component sourcing.",
    medical: "Precision-focused supply and processing support for medical manufacturing.",
    power_distribution: "Strong fit for electrical OEM, bus bar, and power distribution work."
  };

  return [
    industryLead[answers.industry] || "Industrial material supply backed by thyssenkrupp materialsPLUS.",
    "Value-added processing support including cut-to-length, waterjet, fabrication, and kitting paths.",
    "Domestic material options and logistics support for repeat releases and staged fulfillment."
  ];
}

function getFamilyImageKey(family) {
  if (family === "Aluminum") return "aluminum";
  if (family === "Stainless Steel") return "stainless_steel";
  if (family === "Copper") return "copper";
  return "banner";
}

function slugifyLabel(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function inferShape(primary, answers) {
  if (answers.form === "tube") return "Tube";
  if (answers.form === "round") return "Bar";
  if (answers.form === "flat") {
    if (answers.application === "electrical" || answers.process === "conductive_component") {
      return "Bus Bar";
    }
    return "Plate";
  }
  if (primary.family === "Copper") return "Bar";
  if (primary.family === "Stainless Steel") return "Plate";
  return "Channel";
}

function inferTemper(primary) {
  if (/6061|6101|7075/i.test(primary.name)) return "T6";
  if (/17-4/i.test(primary.name)) return "H900";
  if (/304|316/i.test(primary.name)) return "Annealed";
  if (/145/i.test(primary.name)) return "H02";
  return "H00";
}

function inferManufacturingMethod(primary, shape) {
  if (shape === "Tube" || shape === "Channel" || shape === "Bus Bar") return "Extruded";
  if (shape === "Plate") return "Rolled";
  if (shape === "Bar") return "Drawn";
  return primary.family === "Copper" ? "Drawn" : "Extruded";
}

function inferWeight(primary, shape) {
  if (primary.family === "Copper") return "1.92 lb/ft";
  if (primary.family === "Stainless Steel") return shape === "Tube" ? "1.08 lb/ft" : "2.34 lb/ft";
  if (/7075/i.test(primary.name)) return "0.71 lb/ft";
  if (/6101/i.test(primary.name)) return "0.62 lb/ft";
  return shape === "Channel" ? "0.56 lb/ft" : "0.48 lb/ft";
}

function inferSpecRevision(primary) {
  if (/6061/i.test(primary.name)) return "ASTM B221 | SAE AMS-QQ-A-200/8";
  if (/7075/i.test(primary.name)) return "ASTM B221 | AMS-QQ-A-200/11";
  if (/6101/i.test(primary.name)) return "ASTM B317 | ASTM B241";
  if (/304/i.test(primary.name)) return "ASTM A276 | ASTM A479";
  if (/316/i.test(primary.name)) return "ASTM A276 | ASTM A479";
  if (/17-4/i.test(primary.name)) return "ASTM A564";
  if (/145/i.test(primary.name)) return "ASTM B301";
  return "ASTM B187";
}

function inferProductImage(primary, shape) {
  const mapped = productAssetMap[`${primary.name}|${shape}`];
  if (mapped?.image) return mapped.image;
  return materialImages[getFamilyImageKey(primary.family)];
}

function getMappedProductImage(primary, shape, productValue) {
  if (productValue && productAssetMap[productValue]?.image) {
    return productAssetMap[productValue].image;
  }
  return inferProductImage(primary, shape);
}

function getMappedPdpUrl(primary, shape, productValue) {
  if (productValue && productAssetMap[productValue]?.pdpUrl) {
    return productAssetMap[productValue].pdpUrl;
  }
  return productAssetMap[`${primary.name}|${shape}`]?.pdpUrl || "";
}

function getProductDetail(primary, answers) {
  const selection = {
    label: primary.name,
    family: primary.family
  };
  const configuration = inferConfiguration(selection, answers);
  const config = configuration.recommended;
  const shape = inferShape(primary, answers);
  const temper = inferTemper(primary);
  const method = inferManufacturingMethod(primary, shape);
  const basePrices = {
    "6061 Aluminum": 189,
    "7075 Aluminum": 329,
    "6101 Aluminum": 214,
    "304 Stainless Steel": 248,
    "316 Stainless Steel": 296,
    "17-4 Stainless Steel": 372,
    "110 Copper": 318,
    "145 Copper": 344
  };
  const partPrefix = primary.family === "Aluminum" ? "AL" : primary.family === "Stainless Steel" ? "SS" : "CU";
  const partNumber = `${partPrefix}-${slugifyLabel(primary.name).toUpperCase().replace(/-/g, "")}-${shape.slice(0, 3).toUpperCase()}-${answers.form ? answers.form.slice(0, 2).toUpperCase() : "ST"}`;
  const pdpUrl = getMappedPdpUrl(primary, shape);

  return {
    image: inferProductImage(primary, shape),
    pdpUrl,
    price: `$${basePrices[primary.name] || 245} / stock length`,
    sizes: configuration.sizes,
    lengths: ["12 ft", "6 ft cut", "24 in cut", "Custom cut"],
    cuts: ["Mill length", "Cut to size", "Deburr and prep"],
    meta: [
      { label: "Part Number", value: partNumber },
      { label: "Material", value: primary.family },
      { label: "Alloy", value: primary.name.replace(` ${primary.family}`, "") },
      { label: "Shape", value: shape },
      { label: "Temper", value: temper },
      { label: "Mfg Method", value: method },
      { label: "Weight", value: inferWeight(primary, shape) },
      { label: "Specification/Revision", value: inferSpecRevision(primary) },
      { label: "Material Origin", value: "Domestic" }
    ],
    specs: [
      { label: "Alloy", value: primary.name },
      { label: "Family", value: primary.family },
      { label: "Suggested form", value: config.formFactor },
      { label: "Suggested finish", value: config.finish },
      { label: "Suggested cut", value: config.cut },
      { label: "Use case", value: primary.use }
    ]
  };
}

function renderSelectableChips(target, values, activeValue, groupName) {
  target.innerHTML = "";
  values.forEach((value, index) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `size-chip${(activeValue ? value === activeValue : index === 0) ? " active" : ""}`;
    chip.dataset.group = groupName;
    chip.textContent = value;
    chip.addEventListener("click", () => {
      target.querySelectorAll(`.size-chip[data-group="${groupName}"]`).forEach((node) => node.classList.remove("active"));
      chip.classList.add("active");
    });
    target.appendChild(chip);
  });
}

function getActiveChipText(target) {
  return target.querySelector(".size-chip.active")?.textContent || "";
}

function buildSelectionFromPdp(baseSelection, detail, answers) {
  const recommended = inferConfiguration(baseSelection, answers).recommended;
  const size = getActiveChipText(document.getElementById("size-options")) || recommended.size;
  const selectedLength = getActiveChipText(document.getElementById("length-options")) || detail.lengths[0];
  const cutChoice = getActiveChipText(document.getElementById("cut-options")) || detail.cuts[0];
  const quantity = document.getElementById("primary-qty")?.value || recommended.quantity;
  const jobDefaults = inferJobDefaults(baseSelection, answers);

  return {
    ...baseSelection,
    config: {
      formFactor: recommended.formFactor,
      size,
      cut: selectedLength === "Custom cut" ? "Custom cut" : cutChoice === "Mill length" ? "Mill length" : `Cut to ${selectedLength}`,
      finish: recommended.finish,
      quantity,
      processing: cutChoice === "Mill length" ? recommended.processing : cutChoice
    },
    job: jobDefaults
  };
}

function renderBenefits(target, benefits) {
  target.innerHTML = "";
  benefits.forEach((benefit) => {
    const item = document.createElement("li");
    item.textContent = benefit;
    target.appendChild(item);
  });
}

function getSelectionImage(selection) {
  if (!selection) return materialImages.banner;
  if (selection.materialKey && materialImages[selection.materialKey]) {
    return materialImages[selection.materialKey];
  }
  if (selection.family === "Aluminum") return materialImages.aluminum;
  if (selection.family === "Stainless Steel") return materialImages.stainless_steel;
  if (selection.family === "Copper") return materialImages.copper;
  return materialImages.banner;
}

function buildConfigOptions(selection) {
  const isFlat = /plate|sheet/i.test(selection.label);
  const isTube = /tube/i.test(selection.label);
  const isBar = /bar|rod/i.test(selection.label);

  return {
    formFactors: isFlat ? ["Plate", "Sheet", "Cut blank"] : isTube ? ["Round tube", "Square tube", "Rectangle tube"] : isBar ? ["Round bar", "Rectangle bar", "Square bar"] : ["Standard product"],
    sizes: isFlat ? ['0.125" x 12" x 24"', '0.250" x 24" x 48"', '0.500" x 48" x 96"'] : isTube ? ['1.00" OD x .065" wall x 12 ft', '2.00" OD x .120" wall x 12 ft', '3.00" x 2.00" x .125" x 12 ft'] : ['0.50" dia x 12 ft', '1.00" dia x 12 ft', '2.00" x 0.50" x 12 ft'],
    cuts: ["Mill length", "Cut to 12 in", "Cut to 24 in", "Custom cut"],
    finishes: selection.family === "Stainless Steel" ? ["Mill finish", "Polished", "Brushed"] : ["Mill finish", "Standard", "Precision"]
  };
}

function inferConfiguration(selection, answers) {
  const config = buildConfigOptions(selection);
  const industry = answers.industry;
  const application = answers.application;
  const process = answers.process;
  const form = answers.form;
  const sizeProfile = answers.size_profile;
  const volume = answers.order_volume;

  let formFactor = config.formFactors[0];
  let size = config.sizes[0];
  let cut = config.cuts[0];
  let finish = config.finishes[0];
  let quantity = "1";
  let processing = "None";

  if (industry === "aerospace" || application === "performance") {
    size = config.sizes[Math.min(1, config.sizes.length - 1)];
    cut = "Custom cut";
    finish = config.finishes.includes("Precision") ? "Precision" : config.finishes[0];
    processing = "Precision cut";
  }

  if (industry === "medical") {
    finish = config.finishes.includes("Polished") ? "Polished" : config.finishes[0];
    cut = "Cut to 24 in";
    processing = "Precision cut";
  }

  if (industry === "power_distribution" || industry === "electrical" || application === "electrical") {
    formFactor = config.formFactors.find((value) => /bar|round bar|rectangle bar|standard/i.test(value)) || config.formFactors[0];
    size = config.sizes[Math.min(1, config.sizes.length - 1)];
    cut = "Cut to 24 in";
    finish = config.finishes[0];
    quantity = "8";
    processing = "Cut to length";
  }

  if (application === "structural" || process === "fabricate") {
    formFactor = config.formFactors.find((value) => /tube|plate|sheet/i.test(value)) || config.formFactors[0];
    size = config.sizes[Math.min(1, config.sizes.length - 1)];
    cut = "Mill length";
    finish = config.finishes[0];
    quantity = "3";
    processing = "Fabrication support";
  }

  if (application === "corrosion" || answers.environment === "marine") {
    finish = selection.family === "Stainless Steel" ? "Brushed" : finish;
    cut = "Cut to 24 in";
  }

  if (sizeProfile === "compact_precision") {
    size = config.sizes[0];
    cut = config.cuts.includes("Cut to 12 in") ? "Cut to 12 in" : "Custom cut";
    processing = processing === "None" ? "Precision cut" : processing;
  }

  if (sizeProfile === "standard_component") {
    size = config.sizes[Math.min(1, config.sizes.length - 1)];
  }

  if (sizeProfile === "large_format") {
    size = config.sizes[config.sizes.length - 1];
    cut = "Mill length";
    processing = process === "fabricate" ? "Fabrication support" : processing;
  }

  if (sizeProfile === "mixed_job") {
    size = config.sizes[Math.min(1, config.sizes.length - 1)];
    cut = "Custom cut";
    processing = processing === "None" ? "Cut to length" : processing;
  }

  if (volume === "prototype") quantity = "1";
  if (volume === "short_run") quantity = selection.family === "Copper" ? "3" : "4";
  if (volume === "production") quantity = selection.family === "Copper" ? "10" : "12";
  if (volume === "ongoing") quantity = selection.family === "Copper" ? "16" : "24";

  if (form === "round" && config.formFactors.some((value) => /round/i.test(value))) {
    formFactor = config.formFactors.find((value) => /round/i.test(value)) || formFactor;
  }
  if (form === "tube" && config.formFactors.some((value) => /tube/i.test(value))) {
    formFactor = config.formFactors.find((value) => /tube/i.test(value)) || formFactor;
  }
  if (form === "flat" && config.formFactors.some((value) => /plate|sheet/i.test(value))) {
    formFactor = config.formFactors.find((value) => /plate|sheet/i.test(value)) || formFactor;
  }

  return {
    ...config,
    recommended: {
      formFactor,
      size,
      cut,
      finish,
      quantity,
      processing
    }
  };
}

function inferJobDefaults(selection, answers) {
  let units = 1;
  let piecesPerUnit = 1;
  let cutLength = 24;
  let waste = "10";

  if (answers.industry === "aerospace" || answers.industry === "defense") {
    units = 12;
    piecesPerUnit = 2;
    cutLength = 18;
    waste = "10";
  } else if (answers.industry === "medical") {
    units = 25;
    piecesPerUnit = 1;
    cutLength = 12;
    waste = "5";
  } else if (answers.industry === "power_distribution" || answers.industry === "electrical") {
    units = 8;
    piecesPerUnit = 4;
    cutLength = 36;
    waste = "10";
  } else if (answers.application === "structural") {
    units = 6;
    piecesPerUnit = 3;
    cutLength = 48;
    waste = "15";
  } else if (answers.application === "corrosion") {
    units = 10;
    piecesPerUnit = 2;
    cutLength = 24;
    waste = "10";
  }

  if (answers.form === "tube") cutLength = Math.max(cutLength, 72);
  if (answers.form === "round") cutLength = Math.max(cutLength, 24);

  if (answers.size_profile === "compact_precision") {
    cutLength = Math.min(cutLength, 12);
    piecesPerUnit = Math.max(piecesPerUnit, 2);
    waste = "5";
  } else if (answers.size_profile === "standard_component") {
    cutLength = Math.max(18, Math.min(cutLength, 36));
  } else if (answers.size_profile === "large_format") {
    cutLength = Math.max(cutLength, answers.form === "flat" ? 96 : 144);
    piecesPerUnit = Math.max(1, piecesPerUnit);
    waste = "15";
  } else if (answers.size_profile === "mixed_job") {
    cutLength = Math.max(cutLength, 36);
    piecesPerUnit += 1;
    waste = "12";
  }

  if (answers.order_volume === "prototype") {
    units = Math.min(units, 2);
    piecesPerUnit = Math.min(piecesPerUnit, 2);
  } else if (answers.order_volume === "short_run") {
    units = Math.max(units, 6);
  } else if (answers.order_volume === "production") {
    units = Math.max(units, 20);
    piecesPerUnit = Math.max(piecesPerUnit, 3);
  } else if (answers.order_volume === "ongoing") {
    units = Math.max(units, 36);
    piecesPerUnit = Math.max(piecesPerUnit, 4);
    waste = "15";
  }

  return { units, piecesPerUnit, cutLength, waste };
}

function parseStockLength(cut) {
  if (/12 in/i.test(cut)) return 12;
  if (/24 in/i.test(cut)) return 24;
  if (/custom/i.test(cut)) return 144;
  return 144;
}

function buildJobOrder(selection) {
  const job = selection.job;
  const config = selection.config;
  const totalPieces = job.units * job.piecesPerUnit;
  const requiredLength = totalPieces * job.cutLength;
  const wasteMultiplier = 1 + Number(job.waste) / 100;
  const adjustedLength = Math.ceil(requiredLength * wasteMultiplier);
  const stockLength = parseStockLength(config.cut);
  const piecesPerStock = Math.max(1, Math.floor(stockLength / job.cutLength));
  const stockQty = Math.ceil(totalPieces / piecesPerStock * wasteMultiplier);

  const lines = [
    {
      title: selection.label,
      details: `${config.formFactor} | ${config.size} | ${config.finish}`,
      quantity: `${stockQty} stock length(s)`,
      note: `${totalPieces} finished piece(s) needed across ${job.units} unit(s)`
    }
  ];

  if (config.processing !== "None") {
    lines.push({
      title: `${config.processing} service`,
      details: `${selection.label} processing support`,
      quantity: "1 service line",
      note: `Applied to ${stockQty} stock length(s)`
    });
  }

  if (job.waste !== "0") {
    lines.push({
      title: "Material allowance",
      details: `${job.waste}% waste factor`,
      quantity: `${adjustedLength - requiredLength} in extra material`,
      note: "Included to protect against cut loss and yield variance"
    });
  }

  if (selection.bundle && selection.bundle.length) {
    selection.bundle.forEach((item) => {
      const scaledQty = item.kind === "service"
        ? "1 service line"
        : `${Math.max(1, Math.ceil(stockQty * item.multiplier))} ${item.unit}`;
      lines.push({
        title: item.title,
        details: item.details,
        quantity: scaledQty,
        note: item.note
      });
    });
  }

  return {
    totalPieces,
    requiredLength,
    adjustedLength,
    stockQty,
    lines
  };
}

function inferBundle(primary, secondary, answers) {
  const bundle = [];

  if (answers.industry === "power_distribution" || answers.industry === "electrical") {
    bundle.push({
      title: primary.name === "6101 Aluminum" ? "110 Copper connector stock" : "6101 Aluminum bus support stock",
      details: "Support line for jumpers, connector pads, or secondary conductive parts in the same assembly",
      multiplier: 0.35,
      unit: "stock length(s)",
      note: "Recommended when the job includes conductive support components beyond the main line",
      kind: "material"
    });
    bundle.push({
      title: "Cut to length service",
      details: "Prepared conductive stock for easier installation",
      multiplier: 0,
      unit: "service",
      note: "Recommended for consistent field-ready lengths",
      kind: "service"
    });
  }

  if (answers.industry === "medical" || answers.environment === "marine" || answers.application === "corrosion") {
    bundle.push({
      title: `${secondary.name} support stock`,
      details: "Secondary corrosion-resistant line for covers, brackets, or exposed support parts",
      multiplier: 0.25,
      unit: "stock length(s)",
      note: "Recommended where the whole job includes additional exposed components",
      kind: "material"
    });
  }

  if (answers.application === "structural" || answers.process === "fabricate") {
    bundle.push({
      title: `${primary.name} support stock`,
      details: "Additional stock allowance for brackets, gussets, or reinforcement pieces",
      multiplier: 0.2,
      unit: "stock length(s)",
      note: "Recommended when the assembly includes secondary fabricated pieces",
      kind: "material"
    });
    bundle.push({
      title: "Fabrication support service",
      details: "Cutting or fabrication service attached to the primary stock",
      multiplier: 0,
      unit: "service",
      note: "Recommended when the job includes welded or fabricated assemblies",
      kind: "service"
    });
  }

  if (answers.industry === "aerospace" || answers.industry === "defense" || answers.application === "performance") {
    bundle.push({
      title: `${secondary.name} support stock`,
      details: "Secondary high-strength line for adjacent parts, stiffeners, or reinforced components",
      multiplier: 0.2,
      unit: "stock length(s)",
      note: "Recommended where the job includes secondary performance-sensitive components",
      kind: "material"
    });
    bundle.push({
      title: "Precision cut service",
      details: "Higher-accuracy prep for tighter-tolerance parts",
      multiplier: 0,
      unit: "service",
      note: "Recommended for performance-critical assemblies",
      kind: "service"
    });
  }

  return bundle.slice(0, 3);
}

function renderBundleCards(items) {
  const bundleLines = document.getElementById("bundle-lines");
  bundleLines.innerHTML = "";
  items.forEach((item) => {
    const line = document.createElement("article");
    line.className = "bundle-card";
    const bundleImage = /copper/i.test(item.title) ? materialImages.copper : /stainless|corrosion/i.test(item.title) ? materialImages.stainless_steel : materialImages.aluminum;
    line.innerHTML = `
      <img src="${bundleImage}" alt="${item.title}">
      <div class="bundle-card-body">
        <strong>${item.title}</strong>
        <p>${item.details}</p>
        <span>${item.note}</span>
      </div>
    `;
    bundleLines.appendChild(line);
  });
}

function getSelectorBundle(material, alloy, shape, product) {
  return [
    {
      title: `${alloy.label} cut service`,
      details: `Prepared ${shape.label.toLowerCase()} stock for the same program or release`,
      note: "Common next step for buyers who need production-ready material"
    },
    {
      title: `${material.label} alternate size`,
      details: `Adjacent ${shape.label.toLowerCase()} option in the ${alloy.label} family`,
      note: "Often reviewed alongside the selected item before ordering"
    },
    {
      title: `${product.label} support line`,
      details: `Secondary stock for brackets, reinforcements, or companion parts`,
      note: "Frequently added when one finished job needs more than one line item"
    }
  ];
}

function renderResultsPage() {
  const answers = getAnswers();
  const mode = getMode();
  const isGuided = mode === "guided";
  const isSelector = mode === "selector";

  if (!isGuided && !isSelector) {
    window.location.href = "index.html";
    return;
  }

  if (isGuided) {
    const missing = questions.some((question) => !answers[question.id]);
    if (missing) {
      window.location.href = "question.html?step=1";
      return;
    }

    const ranked = scoreProducts(answers);
    const primary = ranked[0].product;
    const secondary = ranked[1].product;

    document.getElementById("mode-badge").textContent = "Job descriptor flow";
    const detail = getProductDetail(primary, answers);
    document.getElementById("primary-name").textContent = primary.name;
    document.getElementById("primary-use").textContent = primary.use;
    document.getElementById("primary-price").textContent = detail.price;
    document.getElementById("primary-reason").textContent = buildReason(primary, answers);
    document.getElementById("size-quantity-reason").textContent = buildSizeQuantityReason({ label: primary.name, family: primary.family }, answers);
    renderBenefits(document.getElementById("primary-benefits"), primary.benefits);
    document.getElementById("primary-product-image").src = detail.image;
    document.getElementById("primary-product-image").alt = primary.name;

    const metaGrid = document.getElementById("pdp-meta-grid");
    metaGrid.innerHTML = detail.meta.map((item) => `
      <div class="pdp-meta-item">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
      </div>
    `).join("");

    renderSelectableChips(document.getElementById("size-options"), detail.sizes, detail.sizes[0], "size");
    renderSelectableChips(document.getElementById("length-options"), detail.lengths, detail.lengths[0], "length");
    renderSelectableChips(document.getElementById("cut-options"), detail.cuts, detail.cuts[0], "cut");
    document.getElementById("primary-qty").value = inferConfiguration({ label: primary.name, family: primary.family }, answers).recommended.quantity;

    const specGrid = document.getElementById("spec-grid");
    specGrid.innerHTML = "";
    detail.specs.forEach((spec) => {
      const row = document.createElement("div");
      row.className = "spec-row";
      row.innerHTML = `<span>${spec.label}</span><strong>${spec.value}</strong>`;
      specGrid.appendChild(row);
    });

    const bundle = inferBundle(primary, secondary, answers);
    renderBundleCards(bundle.length ? bundle : [
      {
        title: `${secondary.name} alternate line`,
        details: "Nearby product path often reviewed when application requirements tighten or expand",
        note: "Best backup option for this same job"
      }
    ]);

    document.getElementById("result-title").textContent = `${primary.name} is the strongest match for your application.`;
    document.getElementById("result-subtitle").textContent = `${secondary.name} is also a strong alternative depending on your final requirements.`;
    document.getElementById("shipping-copy").textContent = buildShippingMessage({ label: primary.name, family: primary.family }, answers);
    document.getElementById("back-link").href = `question.html?step=${questions.length}`;
    const currentSelection = {
      label: primary.name,
      family: primary.family,
      materialKey: getFamilyImageKey(primary.family),
      source: "guided",
      bundle
    };
    setSelection(currentSelection);
  } else {
    const missing = selectorSteps.some((step) => !answers[step.id]);
    if (missing) {
      window.location.href = "selector.html?step=1";
      return;
    }

    const material = selectorCatalog[answers.material];
    const alloy = material.alloys[answers.alloy];
    const shape = alloy.shapes[answers.shape];
    const product = shape.products.find((entry) => entry.value === answers.product);

    document.getElementById("mode-badge").textContent = "Material selector";
    document.getElementById("primary-name").textContent = product.label;
    document.getElementById("primary-use").textContent = `${alloy.label} ${shape.label} in the ${material.label} family`;
    document.getElementById("primary-price").textContent = "$228 / stock length";
    document.getElementById("primary-reason").textContent = `You selected ${material.label}, then narrowed into ${alloy.label} and ${shape.label.toLowerCase()} products to arrive at this product path.`;
    document.getElementById("size-quantity-reason").textContent = `The default size and quantity are set as a practical starting point for this ${shape.label.toLowerCase()} product path and can be adjusted before you continue into the job build.`;
    document.getElementById("primary-product-image").src = getMappedProductImage(
      { name: alloy.label, family: material.label },
      shape.label,
      product.value
    );
    document.getElementById("primary-product-image").alt = product.label;
    renderBenefits(document.getElementById("primary-benefits"), [
      `Material family: ${material.label}`,
      `Selected alloy: ${alloy.label}`,
      `Selected shape: ${shape.label}`,
      "Structured product drill-down"
    ]);
    document.getElementById("pdp-meta-grid").innerHTML = `
      <div class="pdp-meta-item"><span>Part Number</span><strong>${(product.value || "ITEM").toUpperCase()}</strong></div>
      <div class="pdp-meta-item"><span>Material</span><strong>${material.label}</strong></div>
      <div class="pdp-meta-item"><span>Alloy</span><strong>${alloy.label}</strong></div>
      <div class="pdp-meta-item"><span>Shape</span><strong>${shape.label}</strong></div>
      <div class="pdp-meta-item"><span>Temper</span><strong>${/6061|7075|6101/.test(alloy.label) ? "T6" : "Mill"}</strong></div>
      <div class="pdp-meta-item"><span>Availability</span><strong>In stock</strong></div>
    `;
    renderSelectableChips(document.getElementById("size-options"), ['0.125" x 12" x 24"', '0.250" x 24" x 48"', '0.500" x 48" x 96"'], '0.125" x 12" x 24"', "size");
    renderSelectableChips(document.getElementById("length-options"), ["12 ft", "6 ft cut", "24 in cut", "Custom cut"], "12 ft", "length");
    renderSelectableChips(document.getElementById("cut-options"), ["Mill length", "Cut to size", "Deburr and prep"], "Mill length", "cut");
    document.getElementById("primary-qty").value = "1";
    const specGrid = document.getElementById("spec-grid");
    specGrid.innerHTML = `
      <div class="spec-row"><span>Material</span><strong>${material.label}</strong></div>
      <div class="spec-row"><span>Alloy</span><strong>${alloy.label}</strong></div>
      <div class="spec-row"><span>Shape</span><strong>${shape.label}</strong></div>
      <div class="spec-row"><span>Product</span><strong>${product.label}</strong></div>
      <div class="spec-row"><span>Availability</span><strong>In stock</strong></div>
      <div class="spec-row"><span>Processing</span><strong>Cut to size available</strong></div>
    `;

    renderBundleCards(getSelectorBundle(material, alloy, shape, product));

    document.getElementById("result-title").textContent = `${product.label} matches your selected path.`;
    document.getElementById("result-subtitle").textContent = "Review this product path or continue exploring related options in the same alloy and shape.";
    document.getElementById("shipping-copy").textContent = "This selected product path is set up for stock release, cut-to-size preparation, and staged shipment when the job needs more than one release quantity.";
    document.getElementById("back-link").href = "selector.html?step=4";
    setSelection({
      label: product.label,
      family: material.label,
      materialKey: answers.material,
      source: "selector",
      bundle: []
    });
  }

  const buyerSummary = document.getElementById("buyer-summary");
  buyerSummary.innerHTML = "";
  const intro = document.createElement("p");
  intro.textContent = isGuided
    ? "This recommendation reflects the job conditions, part type, stock form, and release volume you selected."
    : "This product path reflects the exact material, alloy, shape, and product drill-down you selected.";
  buyerSummary.appendChild(intro);
  const wrapper = document.createElement("div");
  wrapper.className = "buyer-summary-list";
  Object.entries(answers).forEach(([questionId, value]) => {
    const tag = document.createElement("span");
    tag.textContent = summaryLabels[questionId][value];
    wrapper.appendChild(tag);
  });
  buyerSummary.appendChild(wrapper);

  renderSummaryChips(document.getElementById("summary-chips"), answers);
  renderBenefits(document.getElementById("primary-benefits"), getTrustReasons(answers));

  document.getElementById("cta-buy").addEventListener("click", () => {
    const selection = getSelection();
    if (!selection) return;
    const detail = isGuided
      ? getProductDetail({ name: selection.label, family: selection.family }, answers)
      : {
          lengths: ["12 ft", "6 ft cut", "24 in cut", "Custom cut"],
          cuts: ["Mill length", "Cut to size", "Deburr and prep"]
        };
    setSelection(buildSelectionFromPdp(selection, detail, answers));
    window.location.href = "buy.html";
  });
  document.getElementById("cta-configure").addEventListener("click", () => {
    const selection = getSelection();
    if (selection) {
      const detail = isGuided
        ? getProductDetail({ name: selection.label, family: selection.family }, answers)
        : {
            lengths: ["12 ft", "6 ft cut", "24 in cut", "Custom cut"],
            cuts: ["Mill length", "Cut to size", "Deburr and prep"]
          };
      setSelection(buildSelectionFromPdp(selection, detail, answers));
    }
    window.location.href = "configure.html";
  });
  document.getElementById("restart-button").addEventListener("click", () => {
    clearAnswers();
    clearMode();
    clearSelection();
    window.location.href = "index.html";
  });

}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  if (page === "question") {
    renderQuestionPage();
    return;
  }

  if (page === "selector") {
    renderSelectorPage();
    return;
  }

  if (page === "results") {
    renderResultsPage();
    return;
  }

  if (page === "sku") {
    const skuInput = document.getElementById("sku-input");
    const skuSubmit = document.getElementById("sku-submit");
    const skuResult = document.getElementById("sku-result");
    const restartSku = document.getElementById("restart-sku");
    const renderSkuMatch = () => {
      const value = skuInput.value.trim();
      if (!value) {
        skuResult.classList.remove("hidden");
        skuResult.innerHTML = "<p>Please enter a SKU, partial SKU, or product code to continue.</p>";
        return;
      }

      const normalized = value.toUpperCase();
      let match = {
        title: "Matched product family",
          subtitle: "Closest product path found",
          body: "We matched your entry to the nearest product family. Review the likely product path and confirm dimensions, availability, and quote details."
      };

      if (normalized.includes("6061")) {
        match = {
          title: "6061 Aluminum product path",
          subtitle: "Closest match: 6061 plate or bar family",
          body: "We found a likely 6061 aluminum match. Continue into the 6061 product family and compare nearby plate, bar, and tube variations."
        };
      } else if (normalized.includes("316")) {
        match = {
          title: "316 Stainless product path",
          subtitle: "Closest match: 316 corrosion-resistant products",
          body: "We found a likely 316 stainless match. Continue into 316 product families and compare related corrosion-resistant options."
        };
      } else if (normalized.includes("145")) {
        match = {
          title: "145 Copper product path",
          subtitle: "Closest match: machinable copper bar stock",
          body: "We found a likely 145 copper match. Continue into machinable copper bar products and compare related conductive options."
        };
      }

      skuResult.classList.remove("hidden");
      skuResult.innerHTML = `
        <p class="card-label">${match.title}</p>
        <h4>${match.subtitle}</h4>
        <p>${match.body}</p>
      `;
    };

    skuSubmit.addEventListener("click", renderSkuMatch);
    skuInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        renderSkuMatch();
      }
    });
    restartSku.addEventListener("click", () => {
      skuInput.value = "";
      skuResult.innerHTML = "";
      skuResult.classList.add("hidden");
    });
    return;
  }

  if (page === "configure") {
    const selection = getSelection();
    const answers = getAnswers();
    if (!selection) {
      window.location.href = "index.html";
      return;
    }
    const config = inferConfiguration(selection, answers);
    document.getElementById("configure-image").src = getSelectionImage(selection);
    document.getElementById("configure-product-name").textContent = selection.label;
    document.getElementById("configure-product-meta").textContent = selection.family;

    const fillSelect = (id, values) => {
      const element = document.getElementById(id);
      element.innerHTML = values.map((value) => `<option value="${value}">${value}</option>`).join("");
    };

    fillSelect("config-form-factor", config.formFactors);
    fillSelect("config-size", config.sizes);
    fillSelect("config-cut", config.cuts);
    fillSelect("config-finish", config.finishes);

    document.getElementById("config-form-factor").value = config.recommended.formFactor;
    document.getElementById("config-size").value = config.recommended.size;
    document.getElementById("config-cut").value = config.recommended.cut;
    document.getElementById("config-finish").value = config.recommended.finish;
    document.getElementById("config-qty").value = config.recommended.quantity;
    document.getElementById("config-processing").value = config.recommended.processing;

    const jobDefaults = inferJobDefaults(selection, answers);
    document.getElementById("job-units").value = String(jobDefaults.units);
    document.getElementById("job-pieces-per-unit").value = String(jobDefaults.piecesPerUnit);
    document.getElementById("job-cut-length").value = String(jobDefaults.cutLength);
    document.getElementById("job-waste").value = String(jobDefaults.waste);

    document.getElementById("config-recommendation").innerHTML = `
      <p class="card-label">Recommended From Your Answers</p>
      <p>Based on your selected application, we prefilled a likely starting configuration for <strong>${selection.label}</strong>.</p>
      <div class="buyer-summary-list">
        <span>${config.recommended.formFactor}</span>
        <span>${config.recommended.size}</span>
        <span>${config.recommended.cut}</span>
        <span>${config.recommended.finish}</span>
        <span>Qty ${config.recommended.quantity}</span>
        <span>${config.recommended.processing}</span>
        <span>${jobDefaults.units} unit(s)</span>
        <span>${jobDefaults.piecesPerUnit} piece(s) per unit</span>
      </div>
    `;
    const bundleRecommendation = document.getElementById("bundle-recommendation");
    if (selection.bundle && selection.bundle.length) {
      bundleRecommendation.innerHTML = `
        <p class="card-label">Also Recommended For This Job</p>
        <div class="buyer-summary-list">
          ${selection.bundle.map((item) => `<span>${item.title}</span>`).join("")}
        </div>
      `;
    } else {
      bundleRecommendation.innerHTML = `
        <p class="card-label">Also Recommended For This Job</p>
        <p>No additional support lines were inferred for this path.</p>
      `;
    }

    document.getElementById("config-form").addEventListener("submit", (event) => {
      event.preventDefault();
      setSelection({
        ...selection,
        config: {
          formFactor: document.getElementById("config-form-factor").value,
          size: document.getElementById("config-size").value,
          cut: document.getElementById("config-cut").value,
          finish: document.getElementById("config-finish").value,
          quantity: document.getElementById("config-qty").value,
          processing: document.getElementById("config-processing").value
        },
        job: {
          units: Number(document.getElementById("job-units").value),
          piecesPerUnit: Number(document.getElementById("job-pieces-per-unit").value),
          cutLength: Number(document.getElementById("job-cut-length").value),
          waste: document.getElementById("job-waste").value
        }
      });
      window.location.href = "buy.html";
    });
    return;
  }

  if (page === "buy") {
    const selection = getSelection();
    if (!selection || !selection.config || !selection.job) {
      window.location.href = "configure.html";
      return;
    }
    const order = buildJobOrder(selection);
    document.getElementById("buy-image").src = getSelectionImage(selection);
    document.getElementById("buy-product-name").textContent = selection.label;
    document.getElementById("buy-line-title").textContent = `${selection.label} full-job order`;
    document.getElementById("buy-line-copy").textContent = `${order.totalPieces} finished piece(s) across ${selection.job.units} unit(s), built from ${order.stockQty} stock length(s) with ${selection.job.waste}% waste included.`;

    const items = [
      `Form: ${selection.config.formFactor}`,
      `Size: ${selection.config.size}`,
      `Cut: ${selection.config.cut}`,
      `Finish: ${selection.config.finish}`,
      `Assemblies: ${selection.job.units}`,
      `Pieces per assembly: ${selection.job.piecesPerUnit}`,
      `Cut length per piece: ${selection.job.cutLength} in`,
      `Stock qty: ${order.stockQty}`,
      `Processing: ${selection.config.processing}`
    ];
    const list = document.getElementById("buy-line-items");
    renderBenefits(list, items);

    const summary = document.getElementById("buy-summary");
    summary.innerHTML = "";
    items.forEach((item) => {
      const tag = document.createElement("span");
      tag.textContent = item;
      summary.appendChild(tag);
    });

    order.lines.forEach((line) => {
      const item = document.createElement("li");
      item.textContent = `${line.title}: ${line.quantity} | ${line.details} | ${line.note}`;
      list.appendChild(item);
    });

    document.getElementById("add-cart").addEventListener("click", () => {
      window.alert("This full recommended job order would be added to cart as multiple line items.");
    });
    document.getElementById("buy-quote").addEventListener("click", () => {
      window.alert("A quote request would open with the full recommended job order attached.");
    });
    document.getElementById("save-config").addEventListener("click", () => {
      window.alert("This full job configuration would be saved for later or shared with purchasing.");
    });
    return;
  }

  const startInline = document.getElementById("start-guided-inline");
  const startSelectorInline = document.getElementById("start-selector-inline");
  const startSkuInline = document.getElementById("start-sku-inline");
  const restartLanding = document.getElementById("restart-landing");
  const launchGuided = () => {
    clearAnswers();
    setMode("guided");
    window.location.href = "question.html?step=1";
  };
  const launchSelector = () => {
    clearAnswers();
    setMode("selector");
    window.location.href = "selector.html?step=1";
  };
  const launchSku = () => {
    clearAnswers();
    clearMode();
    window.location.href = "sku.html";
  };
  if (startInline) {
    startInline.addEventListener("click", launchGuided);
  }
  if (startSelectorInline) {
    startSelectorInline.addEventListener("click", launchSelector);
  }
  if (startSkuInline) {
    startSkuInline.addEventListener("click", launchSku);
  }
  if (restartLanding) {
    restartLanding.addEventListener("click", () => {
      clearAnswers();
      clearMode();
      window.location.href = "index.html";
    });
  }
});
