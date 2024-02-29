-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Idea" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "voteCount" INTEGER NOT NULL DEFAULT 0,
    "submittedBy" TEXT,
    "hasModel" BOOLEAN DEFAULT false,
    "hasPlan" BOOLEAN DEFAULT false,
    "isFavorite" BOOLEAN DEFAULT false,
    "isTaken" BOOLEAN DEFAULT false
);
INSERT INTO "new_Idea" ("date", "description", "hasModel", "hasPlan", "id", "isFavorite", "isTaken", "submittedBy", "title") SELECT "date", "description", "hasModel", "hasPlan", "id", "isFavorite", "isTaken", "submittedBy", "title" FROM "Idea";
DROP TABLE "Idea";
ALTER TABLE "new_Idea" RENAME TO "Idea";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
