import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {MatDialogModule} from '@angular/material';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { LoginComponent } from './login/login.component'
import {MdToolbarModule, MdButtonModule, MdCheckboxModule,MatListModule,MatGridListModule,MatCardModule,MatFormFieldModule,MatInputModule} from '@angular/material';
//Service COmponents
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import {LeaderService} from './services/leader.service'

//App routing module
import {AppRoutingModule} from './app-routing/app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MdToolbarModule,
    MdButtonModule,
    MdCheckboxModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule
  ],

  entryComponents:[LoginComponent],//to open login component from header
  providers: [DishService,PromotionService,LeaderService],
  
  
  bootstrap: [AppComponent]
})
export class AppModule { }
