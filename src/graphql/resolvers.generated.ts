/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Category } from "./schema/resolvers/Category";
import { Product } from "./schema/resolvers/Product";
import { category as Query_category } from "./schema/resolvers/Query/category";
import { product as Query_product } from "./schema/resolvers/Query/product";
import { productsByCategory as Query_productsByCategory } from "./schema/resolvers/Query/productsByCategory";
export const resolvers: Resolvers = {
  Query: {
    category: Query_category,
    product: Query_product,
    productsByCategory: Query_productsByCategory,
  },

  Category: Category,
  Product: Product,
};
