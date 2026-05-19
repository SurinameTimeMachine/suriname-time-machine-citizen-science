export type NavLink = {
  label: string;
  href: string;
};

export type DomainLink = {
  label: string;
  href: string;
  /** Highlights with teal-strong and adds aria-current="page". */
  isCurrent?: boolean;
};

export type Stat = {
  label: string;
  value: string;
};

export type MediaAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};
