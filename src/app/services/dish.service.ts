import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish'
import {DISHES} from '../shared/Globaldishes'

@Injectable()
export class DishService {


  constructor() { }

  getDishes():Promise<Dish[]>{
  return new Promise((resolve)=>{    //see mozilla docs for more promise info
setTimeout(()=>resolve(DISHES),2000);
  }) ;
}
getDish(id: number):Promise<Dish> {
    return new Promise (resolve=>{
      setTimeout(()=>resolve(DISHES.filter((dish) => dish.id === id)[0]),2000);
    });//Use of arrow function filter method alwayz return a array of item dat passes the condition. 
  }                                                     //the dish type is Dish which occurs automatically.

getFeaturedDish():Promise <Dish>{
  return new Promise(resolve=>{
    setTimeout(()=>resolve(DISHES.filter((dish)=>(dish.featured))[0]),2000);
  });
}
}
