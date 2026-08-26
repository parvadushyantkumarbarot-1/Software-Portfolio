export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/systems", label: "Systems" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];
