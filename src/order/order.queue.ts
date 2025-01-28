import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { Order } from './entities/order.entity';

Injectable();
export class OrderQueue implements IOrderQueue {
  constructor(@InjectQueue('orders') private readonly orderQueue: Queue) {}

  async register(order: Order) {
    await this.orderQueue.add(order);
  }
}

export interface IOrderQueue {
  register: (order: Order) => Promise<void>;
}
