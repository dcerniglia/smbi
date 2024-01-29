import type { User, Note, Idea } from "@prisma/client";

import { prisma } from "~/db.server";

// export function getIdea({
//   id,
//   userId,
// }: Pick<Idea, "id"> & {
//   userId: User["id"];
// }) {
//   return prisma.idea.findFirst({
//     select: { id: true, , title: true, description: true},
//     where: { id, userId },
//   });
// }

export function getAllIdeas() {
  return prisma.idea.findMany();
}

export function createIdea({
  title,
  description
}: {
  title: Idea["title"];
  description: Idea["description"];
}) {
  return prisma.idea.create({
    data: {
      title,
      description,
    },
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
