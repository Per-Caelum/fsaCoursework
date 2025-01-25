const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// const express = require("express");

const { faker } = require("@faker-js/faker");
const seed = async () => {
  try {
    const products = [];
    for (let i = 0; i < 20; i++) {
      products.push({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
      });
    }
    await prisma.product.createMany({ data: products });
  } catch (e) {
    console.error(e);
  }
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
