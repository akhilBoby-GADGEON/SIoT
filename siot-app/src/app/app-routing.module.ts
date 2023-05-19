import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './supplier/product-details/product-details.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { SupplierProfileComponent } from './supplier/supplier-profile/supplier-profile.component';
import { AddProductComponent } from './supplier/add-product/add-product.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "layout",
    component: LayoutComponent,
    children: [
      {
        path: "details",
        component: ProductDetailsComponent
      },
      {
        path: "add-product",
        component: AddProductComponent
      },
      {
        path: "supplier-profile",
        component: SupplierProfileComponent
      },
      {
        path: "adminDashboard",
        component: AdminDashboardComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
