import { IsString, IsInt, IsOptional, IsEnum, IsDate } from 'class-validator';
import { Status } from '../entities/order.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class UpdateOrderDTO {
  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'Nome do produto', required: false })
  product?: string;

  @IsOptional()
  @IsInt()
  @ApiProperty({
    description: 'Quantidade do produto',
    type: 'integer',
    required: false,
  })
  quantity?: number;

  @IsOptional()
  @IsInt()
  @ApiProperty({
    description: 'Preço do pedido',
    type: 'number',
    required: false,
  })
  price?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Informações sobre o cliente',
    required: false,
  })
  clientInfo?: string;

  @IsOptional()
  @IsEnum(Status, {
    message:
      'Os valores permitidos para status são "PENDING", "PROCESSING" e "FINISHED"',
  })
  @ApiProperty({
    description: 'Status do pedido',
    enum: Status,
    required: false,
  })
  status?: Status;

  @IsOptional()
  @IsDate()
  @Transform(({ value }) => (value ? new Date(value) : value))
  @ApiProperty({
    description: 'Data de fechamento do pedido',
    type: 'string',
    required: false,
    format: 'date-time',
    example: '2025-01-28T10:00:00Z',
  })
  closedAt?: Date;
}
