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
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Order } from './entities/order.entity';

@Controller('api/v1/orders')
@ApiTags('orders')
export class OrderController {
  public constructor(
    private readonly orderService: OrderService,
    private readonly orderRepository: OrderRepository,
    private readonly orderQueue: OrderQueue,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Obter os pedidos por filtro ' })
  @ApiResponse({ status: 200, description: 'Pedido encontrado', type: [Order] })
  @ApiResponse({ status: 404, description: 'Pedido não encontrado' })
  @ApiQuery({
    name: 'queryOrder',
    type: QueryOrderDTO,
    description: 'Filtros de pesquisa para os pedidos',
    required: false,
  })
  getAll(@Query() query: QueryOrderDTO) {
    return this.orderService.getAll(query, this.orderRepository);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um pedido' })
  @ApiResponse({ status: 201, description: 'Pedido criado', type: Order })
  create(@Body() data: CreateOrderDTO) {
    return this.orderService.create(
      data,
      this.orderRepository,
      this.orderQueue,
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um pedido por ID' })
  @ApiResponse({ status: 200, description: 'Pedido encontrado', type: Order })
  get(@Param('id') id: string) {
    return this.orderService.get(id, this.orderRepository);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um pedido' })
  @ApiResponse({ status: 200, description: 'Pedido atualizado', type: Order })
  @ApiResponse({ status: 404, description: 'Pedido não encontrado' })
  update(@Param('id') id: string, @Body() data: UpdateOrderDTO) {
    return this.orderService.update(id, data, this.orderRepository);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Apagar um pedido' })
  @ApiResponse({ status: 200, description: 'Pedido apagado' })
  delete(@Param('id') id: string) {
    return this.orderService.delete(id, this.orderRepository);
  }
}
