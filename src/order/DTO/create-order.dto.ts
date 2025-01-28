import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateOrderDTO {
  @IsString()
  @ApiProperty({ description: 'Nome do produto', required: true })
  product: string;

  @IsInt()
  @ApiProperty({
    description: 'Quantidade do produto',
    type: 'integer',
    required: true,
  })
  quantity: number;

  @IsInt()
  @ApiProperty({
    description: 'Preço do pedido',
    type: 'number',
    required: true,
  })
  price: number;

  @IsString()
  @ApiProperty({
    description: 'Informações sobre o cliente',
    required: true,
  })
  clientInfo: string;
}
