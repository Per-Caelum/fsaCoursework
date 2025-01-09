const prisma = require("../prisma");
const seed = async () => {
  const employee = [];
  for (let i = 0; i < 10; i++) {
    employee.push({ title: `Employee ${i}` });
  }

  try {
    const result = await prisma.employee.createMany({ data: employee });
    console.log(`${result.count} employees created`);
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
