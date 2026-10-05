export type ProductStatus = "live" | "building" | "dead";
export type ProductVisual = "route" | "timeline" | "payslip" | "print" | "nodes" | "funnel";
export type ProductSpan = "feature" | "tall" | "standard";

export interface Product {
  name: string;
  /** Short label used on the hero constellation. */
  mark: string;
  description: string;
  url: string;
  status: ProductStatus;
  tags: string[];
  featured: boolean;
  visual: ProductVisual;
  /** Controls bento width. `feature` is wide, `tall` pairs beside it, `standard` is a third. */
  span: ProductSpan;
}

/**
 * The whole product index. Add one object to publish another card.
 */
export const products: Product[] = [
  {
    name: "FounderTriage",
    mark: "TRIAGE",
    description:
      "Diagnose whether the bottleneck is traffic, positioning, activation, pricing, demand or retention — before you waste another month building.",
    url: "https://triage.alexworks.app",
    status: "live",
    tags: ["Startups", "Diagnostics"],
    featured: true,
    visual: "funnel",
    span: "feature",
  },
  {
    name: "MCP X-Ray",
    mark: "XRAY",
    description:
      "Inspect an MCP server's tools, schemas, capabilities and annotations before you connect it. Free, fast, and no signup.",
    url: "https://mcpxray.alexworks.app",
    status: "live",
    tags: ["AI", "Tools"],
    featured: false,
    visual: "nodes",
    span: "tall",
  },
  {
    name: "FreeRun",
    mark: "RUN",
    description:
      "Generate running routes around you based on distance, time, pace, heart-rate goals and elevation preferences.",
    url: "https://run.alexworks.app",
    status: "live",
    tags: ["Running", "Tools"],
    featured: false,
    visual: "route",
    span: "standard",
  },
  {
    name: "BabyLog",
    mark: "BABY",
    description:
      "A simple newborn tracker for feeds, sleep, diapers and the things exhausted parents don't want to remember manually.",
    url: "https://baby.alexworks.app",
    status: "live",
    tags: ["Family", "Tracking"],
    featured: false,
    visual: "timeline",
    span: "standard",
  },
  {
    name: "Paycheque",
    mark: "PAY",
    description:
      "Free Canadian salary, tax and employment calculators built to make pay easier to understand.",
    url: "https://paycheque.app",
    status: "live",
    tags: ["Finance", "Canada"],
    featured: false,
    visual: "payslip",
    span: "standard",
  },
  {
    name: "PrintFileCheck",
    mark: "PRINT",
    description:
      "Free browser-based tools for checking whether files are actually ready to print.",
    url: "https://print.alexworks.app",
    status: "live",
    tags: ["Print", "Utility"],
    featured: false,
    visual: "print",
    span: "standard",
  },
  {
    name: "ReplyDesk",
    mark: "REPLY",
    description:
      "A practical X marketing AI for post automation and semi-automated replies.",
    url: "https://replydesk.alexworks.app",
    status: "building",
    tags: ["X", "AI"],
    featured: false,
    visual: "nodes",
    span: "standard",
  },
  {
    name: "MicroFoundry",
    mark: "FOUNDRY",
    description:
      "An experiment in discovering, validating and operating small internet businesses with autonomous agents.",
    url: "https://foundry.alexworks.app",
    status: "dead",
    tags: ["AI", "Experiment"],
    featured: false,
    visual: "nodes",
    span: "standard",
  },
];

export function productHost(url: string): string {
  return new URL(url).hostname.replace(/^www\./, "");
}

export function displayName(name: string): string {
  if (name.length < 14) return name;
  return name.replace(/([a-z])([A-Z])/g, "$1\u200b$2");
}
