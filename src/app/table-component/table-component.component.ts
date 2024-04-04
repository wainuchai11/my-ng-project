import { Component } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.scss',
})
export class TableComponentComponent {
  cars = [
    {
      year: 2019,
      brand: 'Toyota',
    },
    {
      year: 2020,
      brand: 'Honda',
    },
    {
      year: 2021,
      brand: 'BMW',
    },
    {
      year: 2022,
      brand: 'Audi',
    },
    {
      year: 2023,
      brand: 'Mercedes',
    },
  ];
}
