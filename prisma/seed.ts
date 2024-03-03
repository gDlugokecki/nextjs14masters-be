import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const productsCount = 5;
const categoryCount = 5;
const categories = [];

for (let i = 0; i < categoryCount; i++) {
  const categoryName = faker.commerce.department();

  const createdCategory = await prisma.category.create({
    data: {
      name: categoryName,
      slug: faker.helpers.slugify(categoryName).toLowerCase(),
      description: faker.commerce.department(),
    },
  });
  categories.push(createdCategory);
  console.log(`Created category with id: ${createdCategory.id}`);
}

for (let i = 0; i < productsCount; i++) {
  const name = faker.commerce.productName();
  const assignedCategories = faker.helpers
    .shuffle(categories)
    .slice(0, faker.number.int({ min: 1, max: categories.length }));

  const createdProduct = await prisma.product.create({
    data: {
      name: name,
      slug: faker.helpers.slugify(name).toLowerCase(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price()) * 100,
      categories: {
        create: assignedCategories.map((cat) => ({
          Category: {
            connect: { id: cat.id },
          },
        })),
      },
    },
  });
  console.log(`Created product with id: ${createdProduct.id}`);
}
