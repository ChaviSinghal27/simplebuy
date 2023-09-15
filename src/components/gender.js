export function filterByGender(gender, sortedProducts) {
  if (gender === "MEN") {
    return sortedProducts.filter((product) => product.gender === "Men");
  } else if (gender === "WOMEN") {
    return sortedProducts.filter((product) => product.gender === "Women");
  } else return sortedProducts;
}
