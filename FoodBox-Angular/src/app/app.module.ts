import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './component/main/main.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { applicationRoutes } from './app-routing.module';
import { FooterComponent } from './component/footer/footer.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './component/result/result.component';
import { MenuComponent } from './component/menu/menu.component';
import { CuisineService } from './component/models/cuisine.service';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './component/add-product/add-product.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { SuccesspageComponent } from './component/successpage/successpage.component';
import { SignupComponent } from './component/signup/signup.component';
import { LogoutComponent } from './component/logout/logout.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    PagenotfoundComponent,
    FooterComponent,
    QuizComponent,
    ResultComponent,
    MenuComponent,
    CartComponent,
    ProductComponent,
    ProductDetailComponent,
    LoginComponent,
    AddProductComponent,
    CheckoutComponent,
    SuccesspageComponent,
    SignupComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [CuisineService],
  bootstrap: [MainComponent]
})
export class AppModule { }