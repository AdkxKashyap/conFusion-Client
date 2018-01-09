import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotions'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { RestangularModule, Restangular } from 'ngx-restangular';
@Injectable()
export class PromotionService {
//Using observable
  constructor(private restangular:Restangular) { }

getPromotions():Observable<Promotion[]>{
  return this.restangular.all('promotions').getList();
}

getPromotion(id:number):Observable<Promotion>{
  return this.restangular.one('promotions',id).get();
}
getFeaturedPromotion():Observable<Promotion>{
  return this.restangular.all('promotions').getList({featured:true})
  .map(promotion=>promotion[0]);
  
}

}

