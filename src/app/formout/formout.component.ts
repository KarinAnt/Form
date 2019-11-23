import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-formout',
  templateUrl: './formout.component.html',
  styleUrls: ['./formout.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class FormoutComponent implements OnInit {
  @Input() value;
  ab ;
  constructor(private myServiceService: MyServiceService) {
   }

  ngOnInit() {
    this.ab = this.myServiceService.a;
  }
  onSubmit(){
    this.myServiceService.set();
    this.ab = this.myServiceService.a;
  }
}
