// // This is your Prisma schema file,
// // learn more about it in the docs: https://pris.ly/d/prisma-schema

// // Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// // Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

// generator client {
//   provider = "prisma-client-js"
// }

// datasource db {
//   provider = "postgresql"
// }

// // --- Full schema generated from ER diagram ---

// enum ReportStatus {
//   OPEN
//   REVIEWED
//   RESOLVED
//   REJECTED
// }

// model User {
//   id                    Int                      @id @default(autoincrement())
//   firstname             String?
//   lastname              String?
//   email                 String                   @unique
//   phone                 String?
//   password              String
//   avatar_profile        String?
//   bio                   String?
//   address               String?
//   trust_index           Int?                     @default(0)
//   is_two_factor_enabled Boolean                  @default(false)
//   created_at            DateTime                 @default(now())
//   updated_at            DateTime                 @updatedAt

//   grade_id              Int?
//   grade                 Grade?                   @relation(fields: [grade_id], references: [id])

//   tips                  Tip[]
//   comments              Comment[]
//   votes                 Vote[]
//   views                 TipsView[]
//   user_badges           UserBadge[]
//   reports               Report[]                 @relation("reports_by_user")

//   moderator             Moderator?
//   admin                 Admin?

//   // Conversations
//   conversations         ConversationParticipant[]
//   messages              Message[]
//   moderation_actions    ModerationAction[]

//   // Followers / subscriptions
//   following             UserSubscription[]        @relation("following")
//   followers             UserSubscription[]        @relation("followers")
// }

// model Grade {
//   id         Int    @id @default(autoincrement())
//   name       String
//   xp_required Int
//   users      User[]
// }

// model Tip {
//   id          Int           @id @default(autoincrement())
//   title       String
//   content     String?
//   created_at  DateTime      @default(now())
//   updated_at  DateTime?

//   user_id     Int
//   user        User          @relation(fields: [user_id], references: [id], onDelete: Cascade)

//   comments    Comment[]
//   votes       Vote[]
//   views       TipsView[]

//   categories  TipCategory[]
//   reports     Report[]      @relation("reports_on_tips")
// }

// model Category {
//   id          Int           @id @default(autoincrement())
//   name        String         @unique
//   description String?

//   tips        TipCategory[]
// }

// model TipCategory {
//   id          Int      @id @default(autoincrement())
//   tipId       Int
//   tip         Tip      @relation(fields: [tipId], references: [id], onDelete: Cascade)
//   categoryId  Int
//   category    Category @relation(fields: [categoryId], references: [id], onDelete: Cascade)

//   @@unique([tipId, categoryId])
// }

// model Comment {
//   id         Int      @id @default(autoincrement())
//   content    String
//   created_at DateTime @default(now())

//   user_id    Int
//   user       User     @relation(fields: [user_id], references: [id], onDelete: Cascade)

//   tip_id     Int
//   tip        Tip      @relation(fields: [tip_id], references: [id], onDelete: Cascade)

//   votes      Vote[]
//   reports    Report[] @relation("reports_on_comments")
// }

// model Vote {
//   id         Int      @id @default(autoincrement())
//   value      Int
//   created_at DateTime @default(now())

//   user_id    Int
//   user       User     @relation(fields: [user_id], references: [id], onDelete: Cascade)

//   tipId      Int?
//   tip        Tip?     @relation(fields: [tipId], references: [id], onDelete: Cascade)

//   commentId  Int?
//   comment    Comment? @relation(fields: [commentId], references: [id], onDelete: Cascade)

//   @@index([tipId])
//   @@index([commentId])
// }

// model TipsView {
//   id         Int      @id @default(autoincrement())
//   viewed_at  DateTime @default(now())
//   nb_views   Int?     @default(1)

//   user_id    Int?
//   user       User?    @relation(fields: [user_id], references: [id], onDelete: SetNull)

//   tip_id     Int
//   tip        Tip      @relation(fields: [tip_id], references: [id], onDelete: Cascade)
// }

// model Badge {
//   id          Int         @id @default(autoincrement())
//   name        String
//   description String?
//   icon_url    String?

//   user_badges UserBadge[]
// }

// model UserBadge {
//   id        Int      @id @default(autoincrement())
//   earned_at DateTime @default(now())

//   user_id   Int
//   user      User     @relation(fields: [user_id], references: [id], onDelete: Cascade)

//   badge_id  Int
//   badge     Badge    @relation(fields: [badge_id], references: [id], onDelete: Cascade)
// }

// model Report {
//   id         Int          @id @default(autoincrement())
//   reason     String
//   status     ReportStatus @default(OPEN)
//   created_at DateTime     @default(now())

//   user_id    Int
//   user       User         @relation("reports_by_user", fields: [user_id], references: [id], onDelete: Cascade)

//   tipId      Int?
//   tip        Tip?         @relation("reports_on_tips", fields: [tipId], references: [id], onDelete: Cascade)

//   commentId  Int?
//   comment    Comment?     @relation("reports_on_comments", fields: [commentId], references: [id], onDelete: Cascade)
// }

// model ModerationAction {
//   id           Int      @id @default(autoincrement())
//   action_type  String
//   created_at   DateTime @default(now())
//   reason       String?

//   moderator_id Int
//   moderator    Moderator @relation("moderator_actions", fields: [moderator_id], references: [user_id], onDelete: Cascade)

//   user_id      Int
//   user         User      @relation(fields: [user_id], references: [id], onDelete: Cascade)
// }

// model Moderator {
//   user_id   Int    @id
//   is_active Boolean @default(true)
//   user      User   @relation(fields: [user_id], references: [id], onDelete: Cascade)
//   actions   ModerationAction[] @relation("moderator_actions")
// }

// model Admin {
//   user_id Int @id
//   user    User @relation(fields: [user_id], references: [id], onDelete: Cascade)
// }

// model Conversation {
//   id         Int      @id @default(autoincrement())
//   title      String?
//   is_group   Boolean  @default(false)
//   created_at DateTime @default(now())

//   participants ConversationParticipant[]
//   messages     Message[]
// }

// model ConversationParticipant {
//   conversation_id Int
//   user_id         Int
//   joined_at       DateTime @default(now())
//   last_read_at    DateTime?

//   conversation    Conversation @relation(fields: [conversation_id], references: [id], onDelete: Cascade)
//   user            User         @relation(fields: [user_id], references: [id], onDelete: Cascade)

//   @@id([conversation_id, user_id])
// }

// model Message {
//   id              Int      @id @default(autoincrement())
//   content         String
//   created_at      DateTime @default(now())

//   conversation_id Int
//   conversation    Conversation @relation(fields: [conversation_id], references: [id], onDelete: Cascade)

//   user_id         Int
//   user            User    @relation(fields: [user_id], references: [id], onDelete: Cascade)
// }

// model UserSubscription {
//   follower_id  Int
//   followed_id  Int
//   created_at   DateTime @default(now())

//   follower     User @relation("following", fields: [follower_id], references: [id], onDelete: Cascade)
//   followed     User @relation("followers", fields: [followed_id], references: [id], onDelete: Cascade)

//   @@id([follower_id, followed_id])
// }

