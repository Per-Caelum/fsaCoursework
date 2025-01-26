const { prisma } = require("./common");
const { faker } = require("@faker-js/faker");

const seed = async () => {
  try {
    console.log("Seeding database...");
    const user = await prisma.user.create({
      data: {
        username: faker.internet.userName(),
        playlist: {
          create: [
            {
              name: `${faker.music.genre()} Vibe`,
              description: faker.lorem.sentence(),
            },
          ],
        },
      },
    });
    console.log("User seeded:", user); // Log the seeded user data
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
