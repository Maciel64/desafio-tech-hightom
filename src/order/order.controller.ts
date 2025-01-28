import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderRepository } from './order.repository';
import { OrderDTO } from './DTO/order.dto';
import { OrderQueue } from './order.queue';

@Controller('api/v1/orders')
export class OrderController {
  public constructor(
    private readonly orderService: OrderService,
    private readonly orderRepository: OrderRepository,
    private readonly orderQueue: OrderQueue,
  ) {}

  @Get()
  getAll() {
    return this.orderService.getAll(this.orderRepository);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.orderService.get(id, this.orderRepository);
  }

  @Post()
  create(@Body() data: OrderDTO) {
    return this.orderService.create(
      data,
      this.orderRepository,
      this.orderQueue,
    );
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: OrderDTO) {
    return this.orderService.update(id, data, this.orderRepository);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.orderService.delete(id, this.orderRepository);
  }
}
