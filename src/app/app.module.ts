import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
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
import {MatSliderModule,MatProgressSpinnerModule,MdToolbarModule, MdButtonModule, MdCheckboxModule,MatListModule,MatGridListModule,MatCardModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatSlideToggleModule} from '@angular/material';

//Service COmponents
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import {LeaderService} from './services/leader.service'
import {ProcessHttpmsgService} from './services/process-httpmsg.service'
import {FormsubmitService} from './services/formsubmit.service'
//App routing module
import {AppRoutingModule} from './app-routing/app-routing.module';

//base url
import { baseURL } from './shared/baseurl';


//Restangular services
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';
import { HighlightDirective } from './directives/highlight.directive';
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
    LoginComponent,
    HighlightDirective
    
  ],
  imports: [
    RestangularModule.forRoot(RestangularConfigFactory),
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatDialogModule,
    MdToolbarModule,
    MdButtonModule,
    MatSliderModule,
    MdCheckboxModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
   
    AppRoutingModule
  ],

  entryComponents:[LoginComponent],//to open login component from header
  providers: [DishService,PromotionService,LeaderService,{provide: 'BaseURL', useValue: baseURL},ProcessHttpmsgService,FormsubmitService],
  
  
  bootstrap: [AppComponent]
})
export class AppModule { }
