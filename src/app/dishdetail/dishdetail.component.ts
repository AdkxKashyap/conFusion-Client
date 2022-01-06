import { Component, OnInit,Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/Globaldishes';
import { DishService } from '../services/dish.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Comments} from '../shared/comments'
import { visibility } from '../animations/app.animation';
import { flyInOut,expand } from '../animations/app.animation';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  animations: [
   visibility(),
   flyInOut(),
   expand()
  ],
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  }
})
export class DishdetailComponent implements OnInit {

  //for animation
  visibility="shown";
  dish: Dish;
  dishcopy=null //REST save
  dishIds: number[];
  prev: number;
  next: number;
  //Form fields
  valueAuthor:string;
  valueRating:number;
  valueComment:string;
  private fgroup:FormGroup


  
  constructor(private dishservice: DishService,  //Constructor is first called so all the dependencies are initialied here so that the cud be used later in the code.
    private route: ActivatedRoute,
    private location: Location,
    private router:Router,
    private fb:FormBuilder,
    @Inject('BaseURL') private BaseURL)
    
     {
     
     }
    //Applying validations
formErrors={comment:'',author:''}

errorMessages={
  comment:{
    required:'Enter Comment'
  },
  author:{
    required:'Name Required',
    minlength:'Name must be at least 2 characters long.',
    maxlength:'Name cannot be more than 25 characters long.'
  }
  }
onValueChange(data?:any)
{
if(!(this.fgroup)){return}
const form=this.fgroup;

for(const field in this.formErrors)
  {
 this.formErrors[field]='';
 const control=form.get(field);
 if(control && control.dirty && !control.valid){
const message=this.errorMessages[field];
for(const key in control.errors)
  {
    this.formErrors[field]+=message[key]+'';
  }
 }
  }
}


  ngOnInit() {

    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params
      .switchMap((params: Params) => {this.visibility='hidden'; return this.dishservice.getDish(+params['id'])})
      .subscribe(dish => { this.dish = dish; this.dishcopy=dish; this.setPrevNext(dish.id);this.visibility='shown'; });
      this.createForm();
      //Monitors values changed in each form field for preview display
     this.fgroup.get('author').valueChanges.subscribe((valueAuthor:string)=>this.valueAuthor=valueAuthor);
     this.fgroup.get('rating').valueChanges.subscribe((valueRating:number)=>this.valueRating=valueRating);
     this.fgroup.get('comment').valueChanges.subscribe((valueComment:string)=>this.valueComment=valueComment)


  }
    //Form Model
createForm()
{
this.fgroup=this.fb.group(
  {
    rating:['5'],
    comment:['',Validators.required],
    author: ['',[Validators.minLength(2),Validators.required,Validators.maxLength(25)]]
  }  
      
  
)
 //subscribe to value changes
      this.fgroup.valueChanges.subscribe(data=>this.onValueChange(data));
}
  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
  }
 
  valueComments:Comments;
 
d=new Date().toString();
 
onSubmit()
  {
this.valueComments=this.fgroup.value;
this.valueComments.date=this.d;
this.dishcopy.comments.push(this.valueComments);
this.dishcopy.save().subscribe(dish => { this.dish = dish; })//when contents are saved the server returns an object observable of the saved dish.
this.fgroup.reset({ 
     author: '',
      rating: '5',
      comment: '',
     

    })
}
 }
  
 
 
     /*goBack(): void {
    this.router.navigateByUrl('./menu.component.html');
  }
    
    on selecting a dish from menu the snapshot of  url is taken(present in toutes.ts) from which then id is taken. 
    let id = +this.route.snapshot.params['id'];         
     this.dishservice.getDish(id).then(dish=>this.dish=dish);*/
  


 

