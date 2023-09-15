export function categoryFilter(category, filteredProducts) {
  if (category === "BAGS") {
    return filteredProducts.filter((products) => products.category === "Bags");
  } else if (category === "ACCESORIES") {
    return filteredProducts.filter(
      (products) => products.category === "Accesories"
    );
  } else if (category === "SHOES") {
    return filteredProducts.filter((products) => products.category === "Shoes");
  } else return filteredProducts;
}
