/*
  Warnings:

  - You are about to alter the column `totalPaid` on the `TripReservation` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(8,2)`.

*/
-- AlterTable
ALTER TABLE "TripReservation" ADD COLUMN     "guests" INTEGER NOT NULL DEFAULT 5,
ALTER COLUMN "totalPaid" SET DATA TYPE DECIMAL(8,2);
