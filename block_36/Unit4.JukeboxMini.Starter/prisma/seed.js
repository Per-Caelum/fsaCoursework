const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const seed = async (numUsers = 3, numPlaylists = 5) => {
  for (let i = 0; i < numUsers; i++) {
    // Create a user
    const user = await prisma.user.create({
      data: {
        username: faker.internet.username(),
      },
    });

    // Create playlists for this user
    for (let j = 0; j < numPlaylists; j++) {
      await prisma.playlist.create({
        data: {
          name: faker.music.genre() + " Vibes",
          description: faker.lorem.sentence(),
          ownerId: user.id, // Assign the user as the owner
        },
      });
    }
  }
};

seed()
  .then(async () => {
    console.log("Seeding completed successfully!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error during seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });

// const seed = async () => {
//   // A loop must be used because `prisma.user.createMany` fails here
//   for (let i = 0; i < 3; i++) {
//     // For each user, create an array of 5 playlists
//     const playlists = [];
//     for (let j = 0; j < 5; j++) {
//       playlists.push({
//         name: `Person ${i}${j}`,
//         email: `${i}${j}@foo.bar`,
//         partySize: Math.floor(Math.random() * 10) + 1,
//       });
//     }

//     // Create a single user with nested playlists
//     await prisma.user.create({
//       data: {
//         name: `user ${i + 1}`,
//         playlists: {
//           create: playlists,
//         },
//       },
//     });
//   }
// };

// const { prisma } = require("./common");
// const { faker } = require("@faker-js/faker");

// const seed = async (numPlaylists = 5, numUsers = 3) => {
//   try {
//     console.log("Seeding database...");

//     const users = Array.from({ length: numUsers }, (_, j) => {
//       return {
//         username: faker.internet.username(),
//       };
//     });

//     await prisma.playlist.create({
//       data: {
//         // username: faker.internet.userName(),

//         name: faker.music.genre() + " Vibes",
//         description: faker.lorem.sentence(),
//         users: {
//           create: users,
//         },
//       },
//     });
//     console.log("User seeded:", user); // Log the seeded user data
//   } catch (error) {
//     console.error("Error seeding database:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// seed()
//   .then(async () => await prisma.$disconnect())
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
