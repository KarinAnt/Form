import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  el = this.elementRef.nativeElement;
   a = 0;
  constructor( private elementRef: ElementRef) { }
  @HostListener('keyup', ['$event.target.value'])
  keyUp(value) {
    this.el.value = value.replace(/[^\s0-9]+/, '');
    if(Math.floor(value.length/4) === (value.length%4 + 1)){
      this.el.value = value + ' ';
    }
    // if(value.charCodeAt(value.length-1) < 48 || value.charCodeAt(value.length-1)>57 ){
      // this.el.value = value.slice(0,value.length-1);
    // }
    if(value.length >= 19){
      this.el.disabled = true;
    }
  }
}

