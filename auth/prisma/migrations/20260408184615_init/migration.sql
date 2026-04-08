-- CreateTable
CREATE TABLE "AuthCredential" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AuthCredential_userId_key" ON "AuthCredential"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AuthCredential_email_key" ON "AuthCredential"("email");
