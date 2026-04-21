-- AlterEnum
ALTER TYPE "PaymentProvider" ADD VALUE 'WOMPI';

-- AlterTable
ALTER TABLE "addresses" ADD COLUMN     "fullName" TEXT,
ADD COLUMN     "phone" TEXT;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "mpPreferenceId" TEXT,
ADD COLUMN     "paidAt" TIMESTAMP(3);
