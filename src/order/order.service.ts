import { Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { OrderDTO } from './DTO/order.dto';

@Injectable()
export class OrderService {
  get(id: string, orderRepository: OrderRepository) {
    return orderRepository.get(id);
  }

  getAll(orderRepository: OrderRepository) {
    return orderRepository.getAll();
  }

  create(data: OrderDTO, orderRepository: OrderRepository) {
    return orderRepository.create(data);
  }

  update(id: string, data: OrderDTO, orderRepository: OrderRepository) {
    return orderRepository.update(id, data);
  }

  delete(id: string, orderRepository: OrderRepository) {
    return orderRepository.delete(id);
  }
}
