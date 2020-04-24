import products from "../products.json";

let result = {};

products.forEach((product) => {
  result[product.name] = product;
});

class ItemsService {
  static getProducts() {
    return products;
  }

  static getManufactures() {
    return [...new Set(products.map((p) => p.manufacture))];
  }

  static getFeatured(type) {
    if (type === "desktop")
      return products.filter((p) => p.category === "desktop" && p.featured);
    else if (type === "tablet")
      return products.filter((p) => p.category === "tablet" && p.featured);
  }
  static getCartObjects() {
    return result;
  }
}

export default ItemsService;
