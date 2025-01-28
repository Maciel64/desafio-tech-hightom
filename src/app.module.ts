import { Module } from '@nestjs/common';
import OrderModule from './order/order.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeorm from './domain/typeorm/typeorm.datasource';
import { BullModule } from '@nestjs/bull';
import { BullConfigService } from './domain/bull/bull.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    BullModule.forRootAsync({
      inject: [ConfigService],
      useClass: BullConfigService,
    }),
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
