export type NavLink = {
  label: string;
  href: string;
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

export type ResourceItem = {
  id: string;
  description: string;
  asset: MediaAsset;
};
