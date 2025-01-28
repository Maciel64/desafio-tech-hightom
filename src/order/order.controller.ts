import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderRepository } from './order.repository';
import { CreateOrderDTO } from './DTO/create-order.dto';
import { OrderQueue } from './order.queue';
import { UpdateOrderDTO } from './DTO/update-order.dto';
import { QueryOrderDTO } from './DTO/query-order.dto';

@Controller('api/v1/orders')
export class OrderController {
  public constructor(
    private readonly orderService: OrderService,
    private readonly orderRepository: OrderRepository,
    private readonly orderQueue: OrderQueue,
  ) {}

  @Get()
  getAll(@Query() query: QueryOrderDTO) {
    return this.orderService.getAll(query, this.orderRepository);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.orderService.get(id, this.orderRepository);
  }

  @Post()
  create(@Body() data: CreateOrderDTO) {
    return this.orderService.create(
      data,
      this.orderRepository,
      this.orderQueue,
    );
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateOrderDTO) {
    return this.orderService.update(id, data, this.orderRepository);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.orderService.delete(id, this.orderRepository);
  }
}
