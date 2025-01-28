import { IsString, IsInt, IsOptional } from 'class-validator';
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
  @IsString()
  status?: Status;
}
