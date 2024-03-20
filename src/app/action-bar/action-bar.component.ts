import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss',
})
export class ActionBarComponent implements OnInit {
  @Input() counter: number = 0;
  @Input() step: number = 1;
  @Input() inputDisplay = true;

  @Output() counterChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  decrease() {
    if (this.counter > 0) {
      this.counter -= this.step;
      this.counterChange.emit(this.counter);
    }
  }

  increase() {
    if (this.counter < 100) {
      this.counter += this.step;
      this.counterChange.emit(this.counter);
    }
  }
}
