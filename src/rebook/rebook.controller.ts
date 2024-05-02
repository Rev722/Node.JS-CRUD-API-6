import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RebookService } from './rebook.service';
import { Rebook } from './schemas/rebook.schema';
import { CreateRebookDto } from './dto/create-rebook.dto';
import { UpdateRebookDto } from './dto/update-rebook.dto';

@Controller('rebooks')
export class RebookController {
    constructor (private rebookService: RebookService) {}

    @Get()
    async getAllRebooks(): Promise <Rebook[]> {
        return this.rebookService.findAll();
    }

    @Post()
    async createRebook (
        @Body()
        rebook: CreateRebookDto,
    ): Promise <Rebook> {
        return this.rebookService.create(rebook);
    }

    @Get(':id')
    async getRebook(
        @Param('id')
        id: string,
    ): Promise <Rebook> {
        return this.rebookService.findById(id);
    }

    @Put(':id')
    async updateRebook (
        @Param('id')
        id: string,
        @Body()
        rebook: UpdateRebookDto,
    ): Promise <Rebook> {
        return this.rebookService.updateById(id, rebook);
    }

    @Delete(':id')
    async deleteRebook(
        @Param('id')
        id: string,
    ): Promise <Rebook> {
        return this.rebookService.deleteById(id);
    }
}
