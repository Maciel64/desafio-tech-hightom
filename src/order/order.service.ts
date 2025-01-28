import { Injectable } from '@nestjs/common';
import { IOrderRepository, OrderRepository } from './order.repository';
import { OrderDTO } from './DTO/order.dto';
import { IOrderQueue, OrderQueue } from './order.queue';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  async get(id: string, orderRepository: OrderRepository) {
    return orderRepository.get(id);
  }

  async getAll(orderRepository: OrderRepository) {
    return orderRepository.getAll();
  }

  async create(
    data: OrderDTO,
    orderRepository: OrderRepository,
    orderQueue: OrderQueue,
  ) {
    const order = await orderRepository.create(data);

    orderQueue.register(order);

    return order;
  }

  async update(id: string, data: OrderDTO, orderRepository: OrderRepository) {
    return orderRepository.update(id, data);
  }

  async delete(id: string, orderRepository: OrderRepository) {
    return orderRepository.delete(id);
  }
}

export interface IOrderService {
  get: () => Promise<Order>;
  getAll: () => Promise<Order[]>;
  create: (
    data: OrderDTO,
    orderRepository: IOrderRepository,
    orderQueue: IOrderQueue,
  ) => Promise<Order>;
}
