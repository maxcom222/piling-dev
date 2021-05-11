/*
  Warnings:

  - You are about to drop the `pixel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `pixel`;

-- CreateTable
CREATE TABLE `pixels` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` JSON,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
