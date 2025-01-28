import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterProductOnOrders1738032972378 implements MigrationInterface {
    name = 'AlterProductOnOrders1738032972378'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "product"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "product" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "product"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "product" character NOT NULL`);
    }

}
