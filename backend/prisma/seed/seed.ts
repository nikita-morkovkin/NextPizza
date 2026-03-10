import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import { Pool } from 'pg';
import { CATEGORIES } from 'shared/constants/categories.constant';
import { INGREDIENTS } from 'shared/constants/ingredients.constant';
import { PRODUCTS } from 'shared/constants/products.constant';
import { SALT_ROUND } from 'shared/constants/salt-round.constant';
import { PrismaClient } from '../../generated/prisma/client';

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const clearDatabase = async () => {
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.product.deleteMany();
  await prisma.ingredient.deleteMany();
  await prisma.category.deleteMany();
};

async function main() {
  await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      fullName: 'Alice',
      password: await bcrypt.hash('123456qw', SALT_ROUND),
      verifiedAt: new Date(),
    },
  });
  await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      fullName: 'Bob',
      password: await bcrypt.hash('123456qw', SALT_ROUND),
      verifiedAt: new Date(),
    },
  });

  await clearDatabase();

  await prisma.ingredient.createMany({
    data: INGREDIENTS,
  });

  await prisma.category.createMany({
    data: CATEGORIES,
  });

  const ingredients = await prisma.ingredient.findMany();
  const categories = await prisma.category.findMany();

  const pizzaCategory = categories.find((c) => c.name === 'Пиццы');

  if (pizzaCategory) {
    await prisma.product.create({
      data: {
        name: 'Маргарита',
        imageUrl:
          'https://media.dodostatic.net/api/v1/pizzas/render/11EE7D610D32E76283C0F12FD3B27C44',
        categoryId: pizzaCategory.id,
        ingredients: {
          connect: ingredients.slice(0, 3).map((i) => ({ id: i.id })),
        },
        productVariants: {
          createMany: {
            data: [
              { price: 450, size: 25, pizzaType: 1 },
              { price: 550, size: 30, pizzaType: 2 },
              { price: 650, size: 35, pizzaType: 1 },
            ],
          },
        },
      },
    });

    await prisma.product.create({
      data: {
        name: 'Пепперони',
        imageUrl:
          'https://media.dodostatic.net/api/v1/pizzas/render/11EE7D612FC3B7248066160539304388',
        categoryId: pizzaCategory.id,
        ingredients: {
          connect: ingredients.slice(2, 5).map((i) => ({ id: i.id })),
        },
        productVariants: {
          createMany: {
            data: [
              { price: 590, size: 25, pizzaType: 1 },
              { price: 690, size: 30, pizzaType: 2 },
              { price: 790, size: 35, pizzaType: 2 },
            ],
          },
        },
      },
    });
  }

  for (const product of PRODUCTS) {
    const categoryIndex = parseInt(product.categoryId) - 1;
    const category = categories[categoryIndex] || categories[0];

    await prisma.product.create({
      data: {
        name: product.name,
        imageUrl: product.imageUrl,
        categoryId: category.id,
        productVariants: {
          create: {
            price: 300,
          },
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
