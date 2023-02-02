import { style } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  OnInit,
  Inject,
  Renderer2,
  Input,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[hinvHover]',
})
export class HoverDirective implements OnInit {
  @Input() hinvHover: string = 'red';
  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    private render: Renderer2
  ) {
    
  }
  ngOnInit(): void {
    // this.element.nativeElement.style = `
    // color:red;
    // background-color:black;
    // `;
    console.log(this.hinvHover);

    this.render.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      "white"
    );
    //  console.log(this.document.getElementById('loginForm'))
  }

  @HostListener('mouseenter') OnMouseEnter() {
    this.render.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.hinvHover
    );
  }

  @HostListener('mouseout') OnMouseOut(){
    this.render.setStyle(
      this.element.nativeElement,
      'backgroundColor',
    'white'
    );
  }
}
