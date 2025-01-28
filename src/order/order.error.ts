import { NotFoundException } from '@nestjs/common';

export class OrderNotFoundException extends NotFoundException {
  constructor(message: string = 'The requested order was not found') {
    super(message);
  }
}
