import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish'

import { Observable } from 'rxjs/Observable';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Restangular } from 'ngx-restangular';


@Injectable()
export class DishService {                               //->map is used to store all values in an array 


  constructor(private restangular: Restangular,
              private processHTTPMsgService: ProcessHttpmsgService  ) { }//more about maps=>https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464

getDishes(): Observable<Dish[]> {
    return this.restangular.all('dishes').getList(); //fetches dishes from json server localhost/3000/dishes
  }

  getDish(id: number): Observable<Dish> {
    return  this.restangular.one('dishes',id).get();
  }

  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({featured: true})
      .map(dishes => dishes[0]);
  }

  getDishIds(): Observable<any>{
    return this.getDishes()
      .map(dishes => { return dishes.map(dish => dish.id) })
      .catch(error => { return error; } );
  }

}