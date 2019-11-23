import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-formout',
  templateUrl: './formout.component.html',
  styleUrls: ['./formout.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class FormoutComponent implements OnInit {
  
  // @Input() user;
  // @Input() count;
  
  @Input() parentNumbers;
  numbers = [1, 2, 3, 4];

  constructor() {
   }

  ngOnInit() {
    setInterval(() => {
      this.numbers.push(this.numbers[this.numbers.length - 1] + 1);
      // this.numbers = this.numbers.concat([this.numbers[this.numbers.length - 1] + 1]);
      // console.log(this.numbers);
    }, 1000);
  }

}
