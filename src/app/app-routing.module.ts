import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';

const routes: Routes = [
   { path:'home',component:HomeComponent},
   { path:'products',component:ProductsComponent},
  { path:'productsdetails/:id',component:ProductsDetailsComponent },
   { path:'about',component:AboutComponent},
   {path: 'contactus', component:ContactUsComponent},
   { path:' **',component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
