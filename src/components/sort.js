import { productData } from "../utilities/data";

export function sort(sortBy, productList) {
  if (sortBy === "LOW_TO_HIGH") {
    return productList.sort((item1, item2) => item1["price"] - item2["price"]);
  } else if (sortBy === "HIGH_TO_LOW") {
    return productList.sort((item1, item2) => item2["price"] - item1["price"]);
  } else return productList;
}
