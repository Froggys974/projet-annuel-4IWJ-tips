/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `icon_url` on the `Badge` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `tip_id` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Conversation` table. All the data in the column will be lost.
  - You are about to drop the column `is_group` on the `Conversation` table. All the data in the column will be lost.
  - The primary key for the `ConversationParticipant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `conversation_id` on the `ConversationParticipant` table. All the data in the column will be lost.
  - You are about to drop the column `joined_at` on the `ConversationParticipant` table. All the data in the column will be lost.
  - You are about to drop the column `last_read_at` on the `ConversationParticipant` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `ConversationParticipant` table. All the data in the column will be lost.
  - You are about to drop the column `xp_required` on the `Grade` table. All the data in the column will be lost.
  - You are about to drop the column `conversation_id` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `action_type` on the `ModerationAction` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `ModerationAction` table. All the data in the column will be lost.
  - You are about to drop the column `moderator_id` on the `ModerationAction` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `ModerationAction` table. All the data in the column will be lost.
  - The primary key for the `Moderator` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `is_active` on the `Moderator` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Moderator` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Tip` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Tip` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Tip` table. All the data in the column will be lost.
  - You are about to drop the column `nb_views` on the `TipsView` table. All the data in the column will be lost.
  - You are about to drop the column `tip_id` on the `TipsView` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `TipsView` table. All the data in the column will be lost.
  - You are about to drop the column `viewed_at` on the `TipsView` table. All the data in the column will be lost.
  - You are about to drop the column `avatar_profile` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `grade_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `is_two_factor_enabled` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `trust_index` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `badge_id` on the `UserBadge` table. All the data in the column will be lost.
  - You are about to drop the column `earned_at` on the `UserBadge` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `UserBadge` table. All the data in the column will be lost.
  - The primary key for the `UserSubscription` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `UserSubscription` table. All the data in the column will be lost.
  - You are about to drop the column `followed_id` on the `UserSubscription` table. All the data in the column will be lost.
  - You are about to drop the column `follower_id` on the `UserSubscription` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Vote` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conversationId` to the `ConversationParticipant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `ConversationParticipant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `xpRequired` to the `Grade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conversationId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actionType` to the `ModerationAction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moderatorId` to the `ModerationAction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `ModerationAction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Moderator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Tip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Tip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipId` to the `TipsView` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `badgeId` to the `UserBadge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserBadge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followedId` to the `UserSubscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followerId` to the `UserSubscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Vote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_tip_id_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_user_id_fkey";

-- DropForeignKey
ALTER TABLE "ConversationParticipant" DROP CONSTRAINT "ConversationParticipant_conversation_id_fkey";

-- DropForeignKey
ALTER TABLE "ConversationParticipant" DROP CONSTRAINT "ConversationParticipant_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_conversation_id_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_user_id_fkey";

-- DropForeignKey
ALTER TABLE "ModerationAction" DROP CONSTRAINT "ModerationAction_moderator_id_fkey";

-- DropForeignKey
ALTER TABLE "ModerationAction" DROP CONSTRAINT "ModerationAction_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Moderator" DROP CONSTRAINT "Moderator_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Tip" DROP CONSTRAINT "Tip_user_id_fkey";

-- DropForeignKey
ALTER TABLE "TipsView" DROP CONSTRAINT "TipsView_tip_id_fkey";

-- DropForeignKey
ALTER TABLE "TipsView" DROP CONSTRAINT "TipsView_user_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_grade_id_fkey";

-- DropForeignKey
ALTER TABLE "UserBadge" DROP CONSTRAINT "UserBadge_badge_id_fkey";

-- DropForeignKey
ALTER TABLE "UserBadge" DROP CONSTRAINT "UserBadge_user_id_fkey";

-- DropForeignKey
ALTER TABLE "UserSubscription" DROP CONSTRAINT "UserSubscription_followed_id_fkey";

-- DropForeignKey
ALTER TABLE "UserSubscription" DROP CONSTRAINT "UserSubscription_follower_id_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_user_id_fkey";

-- AlterTable
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("userId");

-- AlterTable
ALTER TABLE "Badge" DROP COLUMN "icon_url",
ADD COLUMN     "iconUrl" TEXT;

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "created_at",
DROP COLUMN "tip_id",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "tipId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Conversation" DROP COLUMN "created_at",
DROP COLUMN "is_group",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isGroup" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ConversationParticipant" DROP CONSTRAINT "ConversationParticipant_pkey",
DROP COLUMN "conversation_id",
DROP COLUMN "joined_at",
DROP COLUMN "last_read_at",
DROP COLUMN "user_id",
ADD COLUMN     "conversationId" INTEGER NOT NULL,
ADD COLUMN     "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lastReadAt" TIMESTAMP(3),
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "ConversationParticipant_pkey" PRIMARY KEY ("conversationId", "userId");

-- AlterTable
ALTER TABLE "Grade" DROP COLUMN "xp_required",
ADD COLUMN     "xpRequired" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "conversation_id",
DROP COLUMN "created_at",
DROP COLUMN "user_id",
ADD COLUMN     "conversationId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ModerationAction" DROP COLUMN "action_type",
DROP COLUMN "created_at",
DROP COLUMN "moderator_id",
DROP COLUMN "user_id",
ADD COLUMN     "actionType" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "moderatorId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Moderator" DROP CONSTRAINT "Moderator_pkey",
DROP COLUMN "is_active",
DROP COLUMN "user_id",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Moderator_pkey" PRIMARY KEY ("userId");

-- AlterTable
ALTER TABLE "Report" DROP COLUMN "created_at",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tip" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TipsView" DROP COLUMN "nb_views",
DROP COLUMN "tip_id",
DROP COLUMN "user_id",
DROP COLUMN "viewed_at",
ADD COLUMN     "tipId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER,
ADD COLUMN     "viewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar_profile",
DROP COLUMN "created_at",
DROP COLUMN "grade_id",
DROP COLUMN "is_two_factor_enabled",
DROP COLUMN "trust_index",
DROP COLUMN "updated_at",
ADD COLUMN     "avatarProfile" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "gradeId" INTEGER,
ADD COLUMN     "isTwoFactorEnabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "trustIndex" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "UserBadge" DROP COLUMN "badge_id",
DROP COLUMN "earned_at",
DROP COLUMN "user_id",
ADD COLUMN     "badgeId" INTEGER NOT NULL,
ADD COLUMN     "earnedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserSubscription" DROP CONSTRAINT "UserSubscription_pkey",
DROP COLUMN "created_at",
DROP COLUMN "followed_id",
DROP COLUMN "follower_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "followedId" INTEGER NOT NULL,
ADD COLUMN     "followerId" INTEGER NOT NULL,
ADD CONSTRAINT "UserSubscription_pkey" PRIMARY KEY ("followerId", "followedId");

-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "created_at",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "Comment_userId_idx" ON "Comment"("userId");

-- CreateIndex
CREATE INDEX "Comment_tipId_idx" ON "Comment"("tipId");

-- CreateIndex
CREATE INDEX "Message_conversationId_idx" ON "Message"("conversationId");

-- CreateIndex
CREATE INDEX "Message_userId_idx" ON "Message"("userId");

-- CreateIndex
CREATE INDEX "ModerationAction_moderatorId_idx" ON "ModerationAction"("moderatorId");

-- CreateIndex
CREATE INDEX "ModerationAction_userId_idx" ON "ModerationAction"("userId");

-- CreateIndex
CREATE INDEX "Report_userId_idx" ON "Report"("userId");

-- CreateIndex
CREATE INDEX "Report_tipId_idx" ON "Report"("tipId");

-- CreateIndex
CREATE INDEX "Report_commentId_idx" ON "Report"("commentId");

-- CreateIndex
CREATE INDEX "Tip_userId_idx" ON "Tip"("userId");

-- CreateIndex
CREATE INDEX "TipCategory_tipId_idx" ON "TipCategory"("tipId");

-- CreateIndex
CREATE INDEX "TipCategory_categoryId_idx" ON "TipCategory"("categoryId");

-- CreateIndex
CREATE INDEX "TipsView_userId_idx" ON "TipsView"("userId");

-- CreateIndex
CREATE INDEX "TipsView_tipId_idx" ON "TipsView"("tipId");

-- CreateIndex
CREATE INDEX "UserBadge_userId_idx" ON "UserBadge"("userId");

-- CreateIndex
CREATE INDEX "UserBadge_badgeId_idx" ON "UserBadge"("badgeId");

-- CreateIndex
CREATE INDEX "UserSubscription_followerId_idx" ON "UserSubscription"("followerId");

-- CreateIndex
CREATE INDEX "UserSubscription_followedId_idx" ON "UserSubscription"("followedId");

-- CreateIndex
CREATE INDEX "Vote_userId_idx" ON "Vote"("userId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "Grade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tip" ADD CONSTRAINT "Tip_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_tipId_fkey" FOREIGN KEY ("tipId") REFERENCES "Tip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipsView" ADD CONSTRAINT "TipsView_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipsView" ADD CONSTRAINT "TipsView_tipId_fkey" FOREIGN KEY ("tipId") REFERENCES "Tip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBadge" ADD CONSTRAINT "UserBadge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBadge" ADD CONSTRAINT "UserBadge_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "Badge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModerationAction" ADD CONSTRAINT "ModerationAction_moderatorId_fkey" FOREIGN KEY ("moderatorId") REFERENCES "Moderator"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModerationAction" ADD CONSTRAINT "ModerationAction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Moderator" ADD CONSTRAINT "Moderator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversationParticipant" ADD CONSTRAINT "ConversationParticipant_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversationParticipant" ADD CONSTRAINT "ConversationParticipant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD CONSTRAINT "UserSubscription_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD CONSTRAINT "UserSubscription_followedId_fkey" FOREIGN KEY ("followedId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
