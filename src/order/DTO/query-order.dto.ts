import { IsDate, IsEnum, IsOptional } from 'class-validator';
import { Status } from '../entities/order.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class QueryOrderDTO {
  @IsOptional()
  @IsDate()
  @ApiProperty({
    description:
      'Data de fechamento do pedido. Filtra pedidos fechados após a data informada',
    type: String,
    required: false,
    format: 'date-time',
    example: '2025-01-28T10:00:00Z',
  })
  @Transform(({ value }) => (value ? new Date(value) : value))
  closedAt?: Date;

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
}
