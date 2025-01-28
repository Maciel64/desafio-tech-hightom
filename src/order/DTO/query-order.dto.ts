import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Status } from '../entities/order.entity';

export class QueryOrderDTO {
  @IsOptional()
  @IsString()
  product?: string;

  @IsOptional()
  @IsEnum(Status, {
    message:
      'Os valores permitidos para status são "PENDING", "PROCESSING" e "FINISHED"',
  })
  status?: Status;
}
