import { ChangeDetectorRef, Component } from '@angular/core';
import { Product } from './shopping/model/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
    console.log('AppComponent constructor');
    this.fetchProducts();
  }

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

  products: Product[] = [];

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

  fetchProducts() {
    this.http.get<Product[]>('/api/product').subscribe((response) => {
      this.products = response;
      this.filterProducts = this.products;
    });
  }

  // doWidthChanged(value: number) {
  //   this.sqaureWidth = value;
  // }
}
