export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Tools", href: "#tools" },
  { label: "Install", href: "#install" },
  { label: "Docs", href: "#" },
  { label: "Pricing", href: "#" },
];

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Tools", href: "#tools" },
      { label: "Install", href: "#install" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "API", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "imagine.art", href: "https://imagine.art" },
      { label: "Twitter", href: "#" },
      { label: "Discord", href: "#" },
    ],
  },
];

export const FOOTER_LEGAL: NavLink[] = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];
