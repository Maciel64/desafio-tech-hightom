import { Injectable } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { OrderDTO } from './DTO/order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderRepository {
  constructor(
    @InjectRepository(Order) private typeormOrderAdapter: Repository<Order>,
  ) {}

  async get(id: string): Promise<Order> {
    return this.typeormOrderAdapter.findOne({ where: { id } });
  }

  async getAll(): Promise<Order[]> {
    return this.typeormOrderAdapter.find();
  }

  async create(data: OrderDTO): Promise<Order> {
    const order = this.typeormOrderAdapter.create(data);
    return this.typeormOrderAdapter.save(order);
  }

  async update(id: string, data: OrderDTO): Promise<Order> {
    await this.typeormOrderAdapter.update(id, data);
    return this.typeormOrderAdapter.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.typeormOrderAdapter.delete(id);
  }
}
