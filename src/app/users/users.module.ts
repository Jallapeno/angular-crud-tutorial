import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent, ListComponent, LayoutComponent, AddEditComponent } from './index';

@NgModule({
  declarations: [UsersComponent, LayoutComponent, ListComponent, AddEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
