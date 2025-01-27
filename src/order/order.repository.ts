import { Injectable } from '@nestjs/common';
import { Order } from './entities/order';
import { OrderDTO } from './DTO/order.dto';

@Injectable()
export class OrderRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  get(id: string): Order {
    return new Order();
  }
  getAll(): Order[] {
    return [];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(data: OrderDTO): Order {
    return new Order();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: string, data: OrderDTO): Order {
    return new Order();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete(id: string): void {}
}
