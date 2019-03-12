import { Directive, Input, HostListener, ElementRef, HostBinding }
from "@angular/core";

@Directive({
  selector: '[appRainbow]'
})
export class AttributeDirective {
  // constructor(private el: ElementRef) { }

  possibleColors = [
    'violet', 'indigo', 'blue', 'green', 'yellow',
    'orange', 'red', 'black', 'pink'
  ];

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.borderColor = this.possibleColors[colorPick];

  }
}
