import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { Order, Status } from './entities/order.entity';
import { OrderRepository } from './order.repository';

Injectable();
export class OrderQueue implements IOrderQueue {
  constructor(
    @InjectQueue('orders') private readonly orderQueue: Queue,
    private readonly orderRepository: OrderRepository,
  ) {}

  async register(order: Order) {
    await this.orderRepository.update(order.id, { status: Status.PROCESSING });

    await this.orderQueue.add(order);

    await this.orderRepository.update(order.id, { status: Status.FINISHED });
  }
}

export interface IOrderQueue {
  register: (order: Order) => Promise<void>;
}
