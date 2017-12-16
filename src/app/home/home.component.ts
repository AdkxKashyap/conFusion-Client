import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotions';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import {LeaderService} from '../services/leader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
dish:Dish;
promotion:Promotion;
leader:Leader;
  constructor(private dishservice:DishService,private promo:PromotionService,private leaderservice:LeaderService) {}

  ngOnInit() {
    this.dishservice.getFeaturedDish().then((lish:Dish)=>(this.dish=lish));
    this.promotion=this.promo.getFeaturedPromotion();
    this.leader=this.leaderservice.getFeaturedLeader();
    
  }

}
