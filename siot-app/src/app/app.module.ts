import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {TextFieldModule} from '@angular/cdk/text-field';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { ProductDetailsComponent } from './supplier/product-details/product-details.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { SupplierProfileComponent } from './supplier/supplier-profile/supplier-profile.component';
import { AddProductComponent } from './supplier/add-product/add-product.component';
import { ViewProductsComponent } from './supplier/view-products/view-products.component';
import { FeedbackComponent } from './supplier/feedback/feedback.component';
import { SupplierSupportComponent } from './supplier/supplier-support/supplier-support.component';
import { SupplierHistoryComponent } from './supplier/supplier-history/supplier-history.component';
import { ConsumerSupportComponent } from './consumer/consumer-support/consumer-support.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    LayoutComponent,
    AdminDashboardComponent,
    CreateUserComponent,
    UserDetailsComponent,
    SupplierProfileComponent,
    AddProductComponent,
    ViewProductsComponent,
    FeedbackComponent,
    SupplierSupportComponent,
    SupplierHistoryComponent,
    ConsumerSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatAutocompleteModule,
    TextFieldModule,
    SharedModuleModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
