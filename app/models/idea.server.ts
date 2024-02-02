import type { User, Note, Idea } from "@prisma/client";

import { prisma } from "~/db.server";

export function getIdea({
  id,
}: Pick<Idea, "id"> ) {
  return prisma.idea.findUnique({
    where: { id },
  });
}

export function getAllIdeas() {
  return prisma.idea.findMany();
}

export function createIdea({
  title,
  description
}: {
  title: Idea["title"];
  description: Idea["description"];
  hasModel: any
  hasPlan: any
}) {
  return prisma.idea.create({
    data: {
      title,
      description,
      hasModel: false, // Provide an initializer for the hasModel property
      hasPlan: false
    },
  });
}

export function deleteIdea({ id }: Pick<Idea, "id">) {
  return prisma.idea.delete({
    where: { id },
  });
}


// export function deleteIdea({
//   id,
//   userId,
// }: Pick<Note, "id"> & { userId: User["id"] }) {
//   return prisma.note.deleteMany({
//     where: { id, userId },
//   });
// }
