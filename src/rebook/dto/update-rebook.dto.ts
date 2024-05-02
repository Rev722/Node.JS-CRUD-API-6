import { Category } from "../schemas/rebook.schema";



export class UpdateRebookDto{
    readonly title: string; 
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}