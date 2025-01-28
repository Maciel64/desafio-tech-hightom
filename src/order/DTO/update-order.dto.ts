import { IsString, IsInt, IsOptional, IsEnum, IsDate } from 'class-validator';
import { Status } from '../entities/order.entity';

export class UpdateOrderDTO {
  @IsOptional()
  @IsString()
  product?: string;

  @IsOptional()
  @IsInt()
  quantity?: number;

  @IsOptional()
  @IsInt()
  price?: number;

  @IsOptional()
  @IsString()
  clientInfo?: string;

  @IsOptional()
  @IsEnum(Status, {
    message:
      'Os valores permitidos para status são "PENDING", "PROCESSING" e "FINISHED"',
  })
  status?: Status;

  @IsOptional()
  @IsDate()
  closedAt?: Date;
}
