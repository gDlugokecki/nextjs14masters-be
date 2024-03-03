import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";

export const productsByCategory: NonNullable<
  QueryResolvers["productsByCategory"]
> = async (_parent, arg, _ctx) => {
  console.log(arg.categoryId);

  const productsIdsByCategory = await prisma.product.findMany({
    where: {
      categories: {
        some: {
          categoryId: arg.categoryId,
        },
      },
    },
  });
  return productsIdsByCategory;
};
