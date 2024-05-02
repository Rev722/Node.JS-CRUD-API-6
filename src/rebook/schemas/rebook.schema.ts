import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {

    BOOK1 = 'CATE1',
    BOOK2 = 'CATE2',
    BOOK3 = 'CATE3',
    BOOK4 = 'CATE4',
}

@Schema({
    timestamps: true,
})

    export class Rebook {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;
    }


export const RebookSchema = SchemaFactory.createForClass(Rebook)