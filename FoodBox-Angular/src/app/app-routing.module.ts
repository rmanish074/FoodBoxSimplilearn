import {Routes} from "@angular/router"
import { AboutComponent } from "./component/about/about.component"
import { AddProductComponent } from "./component/add-product/add-product.component"
import { CartComponent } from "./component/cart/cart.component"
import { CheckoutComponent } from "./component/checkout/checkout.component"
import { HomeComponent } from "./component/home/home.component"
import { LoginComponent } from "./component/login/login.component"
import { LogoutComponent } from "./component/logout/logout.component"
import { MenuComponent } from "./component/menu/menu.component"
import { PagenotfoundComponent } from "./component/pagenotfound/pagenotfound.component"
import { ProductDetailComponent } from "./component/product-detail/product-detail.component"
import { ProductComponent } from "./component/product/product.component"
import { QuizComponent } from "./component/quiz/quiz.component"
import { ResultComponent } from "./component/result/result.component"
import { SignupComponent } from "./component/signup/signup.component"
import { SuccesspageComponent } from "./component/successpage/successpage.component"

export const applicationRoutes: Routes = [
    // {path: '', component: HomeComponent},
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'quiz', component: QuizComponent},
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'cart', component: CartComponent},
    {path: 'product', component: ProductComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    { path: 'product-detail/:id', component: ProductDetailComponent },
    {path: 'signup', component: SignupComponent},
    {path: 'add-product', component: AddProductComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'success', component: SuccesspageComponent},
    {path: 'about', component: AboutComponent},
    {path: 'result', component: ResultComponent},
    {path: '**', component: PagenotfoundComponent}
]