import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotions'
import { PROMOTIONS } from '../shared/Globalpromotions'
@Injectable()
export class PromotionService {

  constructor() { }

getPromotions():Promotion[]{
  return PROMOTIONS;
}

getPromotion(id:number):Promotion{
return PROMOTIONS.filter((promotion)=>(promotion.id=id))[0]
}
getFeaturedPromotion():Promotion{
  return PROMOTIONS.filter((promotion)=>(promotion.featured))[0];
}

}
