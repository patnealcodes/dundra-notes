-- CreateEnum
CREATE TYPE "Race" AS ENUM ('AASIMAR', 'AIR_GENASI', 'BUGBEAR', 'DRAGONBORN', 'DWARF', 'EARTH_GENASI', 'ELF', 'FIRBOLG', 'FIRE_GENASI', 'GNOME', 'GOBLIN', 'GOLIATH', 'HALF_ELF', 'HALF_ORC', 'HALFLING', 'HOBGOBLIN', 'HUMAN', 'KOBOLD', 'ORC', 'SATYR', 'TABAXI', 'TIEFLING', 'WATER_GENASI', 'YUAN_TI');

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "race" "Race",
    "imageUrl" TEXT NOT NULL,
    "playableCharacter" BOOLEAN NOT NULL DEFAULT false,
    "locationId" INTEGER,
    "factionId" INTEGER,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "questgiverId" INTEGER,

    CONSTRAINT "Quest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faction" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "logoUrl" TEXT NOT NULL,
    "keyLocationId" INTEGER,

    CONSTRAINT "Faction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_factionId_fkey" FOREIGN KEY ("factionId") REFERENCES "Faction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quest" ADD CONSTRAINT "Quest_questgiverId_fkey" FOREIGN KEY ("questgiverId") REFERENCES "Character"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Faction" ADD CONSTRAINT "Faction_keyLocationId_fkey" FOREIGN KEY ("keyLocationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
