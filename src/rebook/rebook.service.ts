import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Rebook } from './schemas/rebook.schema';

@Injectable()
export class RebookService {
    constructor (
        @InjectModel(Rebook.name)
        private rebookModel:mongoose.Model<Rebook>
    ) {}

    async findAll(): Promise <Rebook[]> {
        const rebooks = await this.rebookModel.find();
        return rebooks;
    }

    async create(rebook: Rebook): Promise <Rebook> {
        const res = await this.rebookModel.create(rebook);
        return res;
    }

    async findById(id: string): Promise <Rebook> {
        const rebook = await this.rebookModel.findById(id)

        if (!rebook) {
            throw new NotFoundException('BOOK NOT FOUND.');
        }
        return rebook;
    }

    async updateById(id: string, rebook: Rebook): Promise <Rebook> {
        return await this.rebookModel.findByIdAndUpdate(id, rebook, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise <Rebook> {
        return await this.rebookModel.findByIdAndDelete(id);
    }
}
