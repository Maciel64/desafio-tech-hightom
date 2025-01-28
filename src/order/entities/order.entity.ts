import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Status {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  FINISHED = 'FINISHED',
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: 'Identificador único do pedido',
    type: String,
  })
  id: string;

  @Column('text')
  @ApiProperty({
    description: 'Nome do produto do pedido',
    type: String,
  })
  product: string;

  @Column('int')
  @ApiProperty({
    description: 'Quantidade do produto no pedido',
    type: Number,
  })
  quantity: number;

  @Column('int')
  @ApiProperty({
    description: 'Preço total do pedido',
    type: Number,
  })
  price: number;

  @Column('text')
  @ApiProperty({
    description: 'Informações do cliente que realizou o pedido',
    type: String,
  })
  clientInfo: string;

  @Column('text', { default: Status.PENDING })
  @ApiProperty({
    description: 'Status do pedido',
    enum: Status,
    default: Status.PENDING,
  })
  status: Status;

  @CreateDateColumn()
  @ApiProperty({
    description: 'Data de criação do pedido',
    type: Date,
  })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  @ApiProperty({
    description: 'Data da última atualização do pedido',
    type: Date,
    nullable: true,
  })
  updatedAt?: Date;

  @Column({ nullable: true })
  @ApiProperty({
    description: 'Data de fechamento do pedido',
    type: Date,
    nullable: true,
  })
  closedAt?: Date;
}
