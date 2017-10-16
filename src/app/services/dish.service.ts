import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish'
import {DISHES} from '../shared/Globaldishes'
@Injectable()
export class DishService {


  constructor() { }

  getDishes():Dish[]{
  return DISHES;
}
getDish(id: number): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];//Use of arrow function filter method alwayz return a array of item dat passes the condition. 
  }

getFeaturedDish():Dish{
  return DISHES.filter((dish)=>(dish.featured))[0];
}
}
