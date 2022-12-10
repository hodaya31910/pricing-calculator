import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsTableComponent} from "./components-table.component";



@NgModule({
  declarations: [ComponentsTableComponent],
  imports: [
    CommonModule
  ],
  exports:[ComponentsTableComponent]
})
export class ComponentsTableModule { }
