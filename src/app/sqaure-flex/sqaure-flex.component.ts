import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sqaure-flex',
  templateUrl: './sqaure-flex.component.html',
  styleUrl: './sqaure-flex.component.scss',
})
export class SqaureFlexComponent implements OnInit {
  @Input() divWidth = 200;
  @Input() divHeight = 100;

  // @Output() widthChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // onChangeWidth(value: number) {
  //   this.widthChanged.emit(value);
  // }
}
