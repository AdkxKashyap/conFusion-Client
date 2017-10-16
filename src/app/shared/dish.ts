//Can be accessed by all.
import { Comments } from './comments'
export class Dish{                  //Export is used to create components that can be imported.
    id:number;
    name:string;
    image: string;
    category: string;
    label: string;
    price: string;
    description: string;
    featured:boolean;
    comments:Comments[];
    
}