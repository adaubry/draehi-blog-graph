-- CreateTable
CREATE TABLE "SavedHistory" (
    "id" SERIAL NOT NULL,
    "searchValue" TEXT NOT NULL,
    "resultsId" INTEGER,

    CONSTRAINT "SavedHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Results" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Node" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "deletable" BOOLEAN NOT NULL,
    "draggable" BOOLEAN NOT NULL,
    "positionX" DOUBLE PRECISION NOT NULL,
    "positionY" DOUBLE PRECISION NOT NULL,
    "selectable" BOOLEAN NOT NULL,
    "background" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "resultsId" INTEGER,

    CONSTRAINT "Node_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Edge" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "sourceId" INTEGER NOT NULL,
    "targetId" INTEGER NOT NULL,
    "stroke" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "resultsId" INTEGER,

    CONSTRAINT "Edge_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SavedHistory_resultsId_key" ON "SavedHistory"("resultsId");

-- AddForeignKey
ALTER TABLE "SavedHistory" ADD CONSTRAINT "SavedHistory_resultsId_fkey" FOREIGN KEY ("resultsId") REFERENCES "Results"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_resultsId_fkey" FOREIGN KEY ("resultsId") REFERENCES "Results"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Edge" ADD CONSTRAINT "Edge_resultsId_fkey" FOREIGN KEY ("resultsId") REFERENCES "Results"("id") ON DELETE SET NULL ON UPDATE CASCADE;
