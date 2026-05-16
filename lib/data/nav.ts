export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Tools", href: "#tools" },
  { label: "Install", href: "#install" },
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
    ],
  },
  {
    heading: "Company",
    links: [{ label: "imagine.art", href: "https://imagine.art" }],
  },
];
