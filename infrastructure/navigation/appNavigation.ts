import { routes } from "~/routes";

export const navigation = (context: any) => {
  const links = [
    { id: 1, name: "Home", to: routes.blog },
    { id: 2, name: "About", to: routes.blog },
    { id: 3, name: "Shop", to: routes.blog },
    { id: 4, name: "Blog", to: routes.blog },
    { id: 5, name: "Elements", to: routes.blog },
    { id: 6, name: "Pages", to: routes.blog },
    { id: 7, name: "Contact", to: routes.blog },
  ];
  return links;
};
