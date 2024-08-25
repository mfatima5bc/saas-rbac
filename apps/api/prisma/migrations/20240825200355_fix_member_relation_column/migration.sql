/*
  Warnings:

  - Made the column `user_id` on table `members` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_user_id_fkey";

-- AlterTable
ALTER TABLE "members" ALTER COLUMN "user_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
