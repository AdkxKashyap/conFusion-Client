import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish'
import {DISHES} from '../shared/Globaldishes'
import { Observable } from 'rxjs/Observable';

import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class DishService {                               //->map is used to store all values in an array 


  constructor(private http:Http,
              private processHTTPMsgService: ProcessHttpmsgService  ) { }

getDishes(): Observable<Dish[]> {  
    return this.http.get(baseURL + 'dishes')
                    .map(res => { return this.processHTTPMsgService.extractData(res); })//For more about map function =>https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464
                    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getDish(id: number): Observable<Dish> {
    return  this.http.get(baseURL + 'dishes/'+ id)
                    .map(res => { return this.processHTTPMsgService.extractData(res); })
                    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get(baseURL + 'dishes?featured=true')
                    .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
                    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

   getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => { return dishes.map(dish => dish.id) });}
      
                                                                
}

