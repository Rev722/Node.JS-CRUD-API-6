import { Module } from '@nestjs/common';
import { RebookService } from './rebook.service';
import { RebookController } from './rebook.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RebookSchema } from './schemas/rebook.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Rebook', schema: RebookSchema }])],
  providers: [RebookService],
  controllers: [RebookController],
})
export class RebookModule {}
