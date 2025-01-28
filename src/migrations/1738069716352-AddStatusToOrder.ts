import { MigrationInterface, QueryRunner } from "typeorm";

export class AddStatusToOrder1738069716352 implements MigrationInterface {
    name = 'AddStatusToOrder1738069716352'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ADD "status" text NOT NULL DEFAULT 'PENDING'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "status"`);
    }

}
