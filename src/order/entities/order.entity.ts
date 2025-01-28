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
  id: string;

  @Column('text')
  product: string;

  @Column('int')
  quantity: number;

  @Column('int')
  price: number;

  @Column('text')
  clientInfo: string;

  @Column('text', { default: Status.PENDING })
  status: Status;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @Column({ nullable: true })
  closedAt: Date;
}
