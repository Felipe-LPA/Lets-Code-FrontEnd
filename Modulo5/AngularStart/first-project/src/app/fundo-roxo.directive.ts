import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFundoRoxo]'
})
export class FundoRoxoDirective {

  constructor( private elementRef: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'purple');
    console.log(elementRef.nativeElement)
  }

}
