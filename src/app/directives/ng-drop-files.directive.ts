import { Directive, EventEmitter, ElementRef, HostListener, 
        Input, Output } from '@angular/core';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Output() mouseAbove: EventEmitter<boolean> = new EventEmitter
  constructor() { }

@HostListener('dragover', ['$event'])

public onDragEnter( event: any) {
  
this.mouseAbove.emit(true);
    
  }

}
