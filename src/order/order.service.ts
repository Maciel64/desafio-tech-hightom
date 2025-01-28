import { Injectable } from '@nestjs/common';
import { IOrderRepository, OrderRepository } from './order.repository';
import { CreateOrderDTO } from './DTO/create-order.dto';
import { IOrderQueue, OrderQueue } from './order.queue';
import { Order } from './entities/order.entity';
import { OrderNotFoundException } from './order.error';
import { UpdateOrderDTO } from './DTO/update-order.dto';

@Injectable()
export class OrderService implements IOrderService {
  async get(id: string, orderRepository: OrderRepository) {
    const order = await orderRepository.get(id);

    if (!order) {
      throw new OrderNotFoundException();
    }

    return order;
  }

  async getAll(orderRepository: OrderRepository) {
    return orderRepository.getAll();
  }

  async create(
    data: CreateOrderDTO,
    orderRepository: OrderRepository,
    orderQueue: OrderQueue,
  ) {
    const order = await orderRepository.create(data);

    orderQueue.register(order);

    return order;
  }

  async update(
    id: string,
    data: UpdateOrderDTO,
    orderRepository: OrderRepository,
  ) {
    const order = await orderRepository.get(id);

    if (!order) {
      throw new OrderNotFoundException();
    }

    return orderRepository.update(id, data);
  }

  async delete(id: string, orderRepository: OrderRepository) {
    return orderRepository.delete(id);
  }
}

export interface IOrderService {
  get: (id: string, orderRepository: OrderRepository) => Promise<Order>;
  getAll: (orderRepository: OrderRepository) => Promise<Order[]>;
  create: (
    data: CreateOrderDTO,
    orderRepository: IOrderRepository,
    orderQueue: IOrderQueue,
  ) => Promise<Order>;
  update: (
    id: string,
    data: UpdateOrderDTO,
    orderRepository: OrderRepository,
  ) => Promise<Order>;
  delete: (id: string, orderRepository: OrderRepository) => Promise<void>;
}
