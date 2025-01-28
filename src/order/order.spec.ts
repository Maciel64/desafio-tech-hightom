import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { OrderRepository } from './order.repository';
import { OrderQueue } from './order.queue';
import { OrderNotFoundException } from './order.error';
import { Order, Status } from './entities/order.entity';
import { CreateOrderDTO } from './DTO/create-order.dto';
import { UpdateOrderDTO } from './DTO/update-order.dto';

describe('OrderService', () => {
  let orderService: OrderService;
  let mockOrderRepository: jest.Mocked<OrderRepository>;
  let mockOrderQueue: jest.Mocked<OrderQueue>;

  beforeEach(async () => {
    mockOrderRepository = {
      get: jest.fn(),
      getAll: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    } as unknown as jest.Mocked<OrderRepository>;

    mockOrderQueue = {
      register: jest.fn(),
    } as unknown as jest.Mocked<OrderQueue>;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        { provide: OrderRepository, useValue: mockOrderRepository },
        { provide: OrderQueue, useValue: mockOrderQueue },
      ],
    }).compile();

    orderService = module.get<OrderService>(OrderService);
  });

  it('should be defined', () => {
    expect(orderService).toBeDefined();
  });

  describe('get', () => {
    it('should return an order', async () => {
      const mockOrder = { id: '1', product: 'Product A' } as Order;
      mockOrderRepository.get.mockResolvedValue(mockOrder);

      const result = await orderService.get('1', mockOrderRepository);

      expect(result).toEqual(mockOrder);
      expect(mockOrderRepository.get).toHaveBeenCalledWith('1');
    });

    it('should throw OrderNotFoundException if order is not found', async () => {
      mockOrderRepository.get.mockResolvedValue(null);

      await expect(orderService.get('1', mockOrderRepository)).rejects.toThrow(
        OrderNotFoundException,
      );
      expect(mockOrderRepository.get).toHaveBeenCalledWith('1');
    });
  });

  describe('getAll', () => {
    it('should return all orders', async () => {
      const mockOrders = [
        { id: '1', product: 'Product A' },
        { id: '2', product: 'Product B' },
      ] as Order[];

      mockOrderRepository.getAll.mockResolvedValue(mockOrders);

      const result = await orderService.getAll(mockOrderRepository);

      expect(result).toEqual(mockOrders);
      expect(mockOrderRepository.getAll).toHaveBeenCalled();
    });

    it('should return an empty array if no orders are found', async () => {
      mockOrderRepository.getAll.mockResolvedValue([]);

      const result = await orderService.getAll(mockOrderRepository);

      expect(result).toEqual([]);
      expect(mockOrderRepository.getAll).toHaveBeenCalled();
    });
  });

  describe('create', () => {
    it('should create a new order and add it to the queue', async () => {
      const mockOrder = {
        id: '1',
        product: 'Product A',
        quantity: 1,
        price: 10000,
        clientInfo: 'John Doe',
        status: Status.FINISHED,
      } as Order;

      const createOrderDTO: CreateOrderDTO = {
        product: 'Product A',
        quantity: 1,
        price: 100,
        clientInfo: 'John Doe',
      };

      mockOrderRepository.create.mockResolvedValue(mockOrder);

      const result = await orderService.create(
        createOrderDTO,
        mockOrderRepository,
        mockOrderQueue,
      );

      expect(result.clientInfo).toEqual(mockOrder.clientInfo);
      expect(result.price).toEqual(mockOrder.price);
      expect(result.product).toEqual(mockOrder.product);
      expect(result.quantity).toEqual(mockOrder.quantity);
      expect(result.status).toBeDefined();

      expect(mockOrderRepository.create).toHaveBeenCalled();
      expect(mockOrderQueue.register).toHaveBeenCalledWith(mockOrder);
    });
  });

  describe('update', () => {
    it('should update an existing order', async () => {
      const mockOrder = { id: '1', product: 'Product A' } as Order;
      const updateOrderDTO: UpdateOrderDTO = { status: Status.FINISHED };

      mockOrderRepository.get.mockResolvedValue(mockOrder);
      mockOrderRepository.update.mockResolvedValue({
        ...mockOrder,
        ...updateOrderDTO,
      });

      const result = await orderService.update(
        '1',
        updateOrderDTO,
        mockOrderRepository,
      );

      expect(result).toEqual({ ...mockOrder, ...updateOrderDTO });
      expect(mockOrderRepository.get).toHaveBeenCalledWith('1');
      expect(mockOrderRepository.update).toHaveBeenCalledWith(
        '1',
        updateOrderDTO,
      );
    });

    it('should throw OrderNotFoundException if order is not found', async () => {
      mockOrderRepository.get.mockResolvedValue(null);

      await expect(
        orderService.update(
          '1',
          { status: Status.FINISHED },
          mockOrderRepository,
        ),
      ).rejects.toThrow(OrderNotFoundException);

      expect(mockOrderRepository.get).toHaveBeenCalledWith('1');
    });
  });

  describe('delete', () => {
    it('should delete an order', async () => {
      mockOrderRepository.delete.mockResolvedValue(undefined);

      const result = await orderService.delete('1', mockOrderRepository);

      expect(result).toBeUndefined();
      expect(mockOrderRepository.delete).toHaveBeenCalledWith('1');
    });
  });
});
