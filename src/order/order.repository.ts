import { Injectable } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { CreateOrderDTO } from './DTO/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateOrderDTO } from './DTO/update-order.dto';

@Injectable()
export class OrderRepository implements IOrderRepository {
  constructor(
    @InjectRepository(Order) private typeormOrderAdapter: Repository<Order>,
  ) {}

  async get(id: string): Promise<Order> {
    return this.typeormOrderAdapter.findOne({ where: { id } });
  }

  async getAll(): Promise<Order[]> {
    return this.typeormOrderAdapter.find();
  }

  async create(data: CreateOrderDTO): Promise<Order> {
    const order = this.typeormOrderAdapter.create(data);
    return this.typeormOrderAdapter.save(order);
  }

  async update(id: string, data: UpdateOrderDTO): Promise<Order> {
    await this.typeormOrderAdapter.update(id, data);
    return this.typeormOrderAdapter.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.typeormOrderAdapter.delete(id);
  }
}

export interface IOrderRepository {
  get: (id: string) => Promise<Order>;
  getAll: () => Promise<Order[]>;
  create: (data: CreateOrderDTO) => Promise<Order>;
  update: (id: string, data: UpdateOrderDTO) => Promise<Order>;
  delete: (id: string) => Promise<void>;
}
