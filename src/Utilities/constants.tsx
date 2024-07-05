export interface defaultValueTypes {
  name?: string;
  brand?: string;
  image?: string;
  description?: string;
  [key: string]: any;
}

export type smartPhoneTypes = {
  id: number;
  name: string;
  brand: string;
  image: string | null;
  description: string;
};

export const initialDefaultValues: defaultValueTypes = {
  name: "",
  brand: "",
  image: "",
  description: "",
};

export const menus = [
  {
    id: 1,
    name: "Dashboard",
    path: "dashboard",
  },
  {
    id: 2,
    name: "Smartphones",
    path: "smartphones",
  },
];

export const themes = [
  { id: "1", Title: "Light", variant: "light" },
  { id: "2", Title: "Dark", variant: "dark" },
];
