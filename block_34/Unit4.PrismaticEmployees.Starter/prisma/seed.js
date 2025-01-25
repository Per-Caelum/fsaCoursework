const prisma = require("../prisma");

const seed = async () => {
  const employees = [];
  for (let i = 0; i < 10; i++) {
    employees.push({ name: `Employee ${i}` });
  }

  try {
    //const result =
    await prisma.employees.createMany({ data: employees });
    // console.log(`${result.count} employees created`);
  } catch (error) {
    console.error("Error seeding employees:", error);
  }
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
