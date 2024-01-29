import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { ideas } from "../mockData";

const prisma = new PrismaClient();

async function seed() {
  const email = "dcerniglia@gmail.com";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  await prisma.idea.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  }
  );

  const hashedPassword = await bcrypt.hash("davidiscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  for (const idea of ideas) {
    await prisma.idea.create({
      data: {
        title: idea.title,
        description: idea.description,
        date: new Date(idea.date),
        submittedBy: idea.submittedBy,
        hasModel: idea.hasModel,
        hasPlan: idea.hasPlan,
        isFavorite: idea.isFavorite,
        isTaken: idea.isTaken,
      },
    });
  }
  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
