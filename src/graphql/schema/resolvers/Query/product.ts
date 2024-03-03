import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";

export const product: NonNullable<QueryResolvers["product"]> = async (
  _parent,
  arg,
  _ctx,
) => {
  /* Implement Query.product resolver logic here */
  const product = await prisma.product.findUnique({
    where: {
      id: arg.id,
    },
  });

  if (!product) {
    return null;
  }

  return product;
};

// export const productsByCategory: NonNullable<
//   QueryResolvers["products"]
// > = async (_parent, _arg, _ctx) => {
//   const productsIdsByCategory = await prisma.category.findMany({
//     where: {
//       id: _arg.id,
//     },
//     include: {
//       products: true,
//     },
//   });

//   return productsIdsByCategory;
// };
