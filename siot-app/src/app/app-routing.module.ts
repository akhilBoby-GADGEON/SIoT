import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './supplier/product-details/product-details.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { SupplierProfileComponent } from './supplier/supplier-profile/supplier-profile.component';
import { AddProductComponent } from './supplier/add-product/add-product.component';
import { ViewProductsComponent } from './supplier/view-products/view-products.component';
import { FeedbackComponent } from './supplier/feedback/feedback.component';
import { SupplierSupportComponent } from './supplier/supplier-support/supplier-support.component';
import { AddDispatcherComponent } from './supplier/add-dispatcher/add-dispatcher.component';
import { SupplierHistoryComponent } from './supplier/supplier-history/supplier-history.component';
import { ConsumerSupportComponent } from './consumer/consumer-support/consumer-support.component';

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
        path: "add-dispatcher",
        component: AddDispatcherComponent
      },
      {
        path: "supplier-profile",
        component: SupplierProfileComponent
      },
      {
        path: "feedback",
        component: FeedbackComponent
      },
      {
        path: "adminDashboard",
        component: AdminDashboardComponent,
      },
      {
        path: "userDetails",
        component: UserDetailsComponent
      },
      {
        path: "view-products",
        component: ViewProductsComponent
      },
      {
        path: "support",
        component: SupplierSupportComponent
      },
      {
        path: "history",
        component: SupplierHistoryComponent
      },
      {
        path: "consumer-support",
        component: ConsumerSupportComponent
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
