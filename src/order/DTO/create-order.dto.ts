import { IsString, IsInt } from 'class-validator';

export class CreateOrderDTO {
  @IsString()
  product: string;

  @IsInt()
  quantity: number;

  @IsInt()
  price: number;

  @IsString()
  clientInfo: string;
}
