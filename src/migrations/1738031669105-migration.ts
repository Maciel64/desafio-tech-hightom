import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1738031669105 implements MigrationInterface {
  name = 'Migration1738031669105';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "order" ("id" SERIAL NOT NULL, "product" character NOT NULL, "quantity" integer NOT NULL, "price" integer NOT NULL, "clientInfo" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "closedAt" TIMESTAMP, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "order"`);
  }
}
