import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {
  parentNumbers = [5, 10, 15, 20];
  constructor(private myServiceService: MyServiceService) { }

  ngOnInit() {
    setInterval(() => {
      // this.parentNumbers.push(this.parentNumbers[this.parentNumbers.length - 1] + 5);
      this.parentNumbers = this.parentNumbers.concat([this.parentNumbers[this.parentNumbers.length - 1] + 5]);
    }, 1000);
  }
}
//REFERENCE
