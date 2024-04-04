import { Component } from '@angular/core';
import { Product } from './shopping/model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-ng-project';
  appMinLabel = 'MyAppMinLabel';
  appMaxLabel = 'MyAppMaxLabel';
  appCounter = 20;
  sqaureHeight = 100;
  sqaureWidth = 250;
  activateValue = false;
  activateLabel = 'Activate';
  activateTextColor = 'green';

  cutomerList: string[] = [
    'Customer1',
    'Customer2',
    'Customer3',
    'Customer4',
    'Customer5',
  ];

  products: Product[] = [
    { name: 'Banana', decription: 'Fruit', price: 10 },
    { name: 'Apple', decription: 'Fruit', price: 20 },
    { name: 'Orange', decription: 'Fruit', price: 30 },
    { name: 'Mango', decription: 'Fruit', price: 40 },
    { name: 'Pineapple', decription: 'Fruit', price: 50 },
    { name: 'Grapes', decription: 'Fruit', price: 60 },
    { name: 'Watermelon', decription: 'Fruit', price: 70 },
    { name: 'Strawberry', decription: 'Fruit', price: 80 },
    { name: 'Blueberry', decription: 'Fruit', price: 90 },
    { name: 'Raspberry', decription: 'Fruit', price: 100 },
    { name: 'Blackberry', decription: 'Fruit', price: 110 },
  ];

  filterProducts: Product[] = this.products;

  testNumberChanged(value: number) {
    console.log('Number changed', value);
  }

  doAppMinChanged(value: number) {
    console.log('App min changed', value);
  }

  doAppMaxChanged(value: number) {
    console.log('App max changed', value);
  }

  handleActivate() {
    this.activateValue = !this.activateValue;
    if (this.activateValue) {
      this.activateLabel = 'Deactivate';
      this.activateTextColor = 'red';
    } else {
      this.activateLabel = 'Activate';
      this.activateTextColor = 'green';
    }
  }

  pushCustomer() {
    this.cutomerList.push('Customer' + (this.cutomerList.length + 1));
  }

  unShiftCustomer() {
    this.cutomerList.unshift('Customer' + (this.cutomerList.length + 1));
  }

  removeCustomer(index: number) {
    this.cutomerList.splice(index, 1);
  }

  searchProduct(text: string) {
    this.filterProducts = this.products.filter((product) => {
      const productName = product.name.toLowerCase();
      const searchText = text.toLowerCase();
      return productName.indexOf(searchText) !== -1;
    });
  }

  // doWidthChanged(value: number) {
  //   this.sqaureWidth = value;
  // }
}
