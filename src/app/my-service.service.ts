import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  a = 0;
  constructor() { 
   
  }
  set(){
     this.a ++;
  }
  get(){
    return this.a;
  }
}
