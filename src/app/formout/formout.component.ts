import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-formout',
  templateUrl: './formout.component.html',
  styleUrls: ['./formout.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class FormoutComponent implements OnInit {
  @Input() parentNumbers;
  numbers = [1, 2, 3, 4];
  constructor(private myServiceService: MyServiceService) {
   }

  ngOnInit() {
    setInterval(() => {
      // this.numbers.push(this.numbers[this.numbers.length - 1] + 1);
      this.numbers = this.numbers.concat([this.numbers[this.numbers.length - 1] + 1]);
      console.log(this.numbers);
    }, 1000);
  }

}
