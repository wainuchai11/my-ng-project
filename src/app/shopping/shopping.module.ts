import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingSearchComponent } from './shopping-search/shopping-search.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [ShoppingCartComponent, ShoppingSearchComponent],
  imports: [CommonModule, IconFieldModule, InputIconModule, InputTextModule],
  exports: [ShoppingCartComponent, ShoppingSearchComponent],
})
export class ShoppingModule {}
