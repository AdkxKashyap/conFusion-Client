import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish'
import {DISHES} from '../shared/Globaldishes'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
@Injectable()
export class DishService {


  constructor() { }

  getDishes():Promise<Dish[]>{
  return new Promise((resolve)=>{    //see mozilla docs for more promise info
setTimeout(()=>resolve(DISHES),2000);
  }) ;
}
 getDish(id: number): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.id == id))[0]).delay(2000);
  }

getFeaturedDish():Promise <Dish>{
  return new Promise(resolve=>{
    setTimeout(()=>resolve(DISHES.filter((dish)=>(dish.featured))[0]),2000);
  });
}
 getDishIds(): Observable<number[]> {
    return Observable.of(DISHES.map(dish => dish.id ));
  }                                                             //->Returns an array of type observable all dish ids .
                                                                //->map is used to store all values in an array 
}

