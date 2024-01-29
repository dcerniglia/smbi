-- CreateTable
CREATE TABLE "Idea" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "submittedBy" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hasModel" BOOLEAN NOT NULL,
    "hasPlan" BOOLEAN NOT NULL,
    "isFavorite" BOOLEAN NOT NULL,
    "isTaken" BOOLEAN DEFAULT false
);
