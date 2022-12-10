import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from "../shared/product-table/product-table.component";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {ProductTableModule} from "../shared/product-table/product-table.module";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      // { path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },
    ]
  }
];
@NgModule({
  declarations: [HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,ProductTableModule, RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
