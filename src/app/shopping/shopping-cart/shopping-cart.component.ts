import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent implements OnInit {
  @Input() value: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
