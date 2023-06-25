import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-capacity',
  templateUrl: './button-capacity.component.html',
  styleUrls: ['./button-capacity.component.scss']
})
export class ButtonCapacityComponent {
  @Input() player?: any;
  constructor() {
  }

  ngOnInit(): void {
  }
  onClick() {
    console.log('aie !');
  }
}
