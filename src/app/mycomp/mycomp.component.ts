import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {
  value=0;
  ab;
  constructor(private myServiceService: MyServiceService) { }

  ngOnInit() {

  }
  onClick(){
    this.value++;
  }
  onSubmit(){
    this.myServiceService.set();
    this.ab = this.myServiceService.a;
  }
}
