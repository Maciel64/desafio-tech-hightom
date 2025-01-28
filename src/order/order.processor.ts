import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('orders')
export class OrderProcessor {
  @Process()
  async handleOrderProcessing(job: Job) {
    console.log(`[${new Date()}] Processing order: `, job.data.id);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log(
      `[${new Date()}] Order`,
      job.data.id,
      'processed successfully!',
    );

    return {
      status: 'success',
      processedAt: new Date(),
    };
  }
}
