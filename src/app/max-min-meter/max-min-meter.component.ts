import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrl: './max-min-meter.component.scss',
})
export class MaxMinMeterComponent implements OnInit {
  @Input() minLabel = 'minLabel';
  @Input() maxLabel = 'maxLabel';

  @Output() minChanged = new EventEmitter();
  @Output() maxChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('init');
  }

  doMinChanged(value: number) {
    this.minChanged.emit(value);
    console.log('Min changed', value);
  }

  doMaxChanged(value: number) {
    this.maxChanged.emit(value);
    console.log('Max changed', value);
  }
}
