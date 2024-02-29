import type { User, Idea } from "@prisma/client";

import { prisma } from "~/db.server";

export function getIdea({
  id,
}: Pick<Idea, "id">) {
  return prisma.idea.findUnique({
    where: { id },
  });
}

export function getAllIdeas() {
  return prisma.idea.findMany();
}

export function createIdea({
  title,
  description,
  hasModel,
  hasPlan
}: {
  title: Idea["title"];
  description: Idea["description"];
  hasModel: any
  hasPlan: any
}) {

  const hasModelBoolean = hasModel === "true" ? true : false
  const hasPlanBoolean = hasPlan === "true" ? true : false
  return prisma.idea.create({
    data: {
      title,
      description,
      hasModel: hasModelBoolean,
      hasPlan: hasPlanBoolean
    },
  });
}

export function deleteIdea({ id }: Pick<Idea, "id">) {
  return prisma.idea.delete({
    where: { id },
  });
}

export async function saveVote({userId, ideaId, userVoteCount} : {userId: User["id"], ideaId: Idea["id"], userVoteCount: number}) {
  const vote = await prisma.vote.upsert({
    where: {
      userId_ideaId: {
        userId: userId,
        ideaId: ideaId,
      },
    },
    update: {
      value: userVoteCount,
    },
    create: {
      value: userVoteCount,
      userId: userId,
      ideaId: ideaId,
    },
  });

  return vote;
}

// export function deleteIdea({
//   id,
//   userId,
// }: Pick<Note, "id"> & { userId: User["id"] }) {
//   return prisma.note.deleteMany({
//     where: { id, userId },
//   });
// }
