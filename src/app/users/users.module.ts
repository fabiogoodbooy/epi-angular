import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [ListComponent, AddComponent, ItemComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
