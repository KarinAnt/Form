import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {
  
  // user = {name:"Ani", city:'Yerevan'};
  // count = 0;
  
  parentNumbers = [5, 10, 15, 20];
  
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.parentNumbers.push(this.parentNumbers[this.parentNumbers.length - 1] + 5);
      // this.parentNumbers = this.parentNumbers.concat([this.parentNumbers[this.parentNumbers.length - 1] + 5]);
    }, 1000);
  }
  // onClick(){
  //   // this.user.name = 'Vard';
  //   this.user = {name:"Vard", city:'Yerevan'};
  //   if(this.user.name !== "Ani"){
  //     console.log(this.user.name)
  //     this.count ++;
  //   }
  // }
}
//REFERENCE
