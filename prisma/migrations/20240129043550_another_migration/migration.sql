/*
  Warnings:

  - The primary key for the `Idea` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `date` on the `Idea` table. All the data in the column will be lost.
  - You are about to drop the column `hasModel` on the `Idea` table. All the data in the column will be lost.
  - You are about to drop the column `hasPlan` on the `Idea` table. All the data in the column will be lost.
  - You are about to drop the column `isFavorite` on the `Idea` table. All the data in the column will be lost.
  - You are about to drop the column `isTaken` on the `Idea` table. All the data in the column will be lost.
  - You are about to drop the column `submittedBy` on the `Idea` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Idea" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Idea" ("description", "id", "title") SELECT "description", "id", "title" FROM "Idea";
DROP TABLE "Idea";
ALTER TABLE "new_Idea" RENAME TO "Idea";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
