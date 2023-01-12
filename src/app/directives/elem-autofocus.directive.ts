import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appElemAutofocus]'
})
export class ElemAutofocusDirective implements AfterViewInit{

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.focus()
  }

}
