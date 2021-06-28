import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[buttonDirective]'
})
export class ButtonDirective implements AfterViewInit{
    constructor(private el: ElementRef,
        private renderer2: Renderer2){
    }

    @HostListener('') onMouseOver(){
        alert('Mouser Over event occured');
        this.renderer2.setStyle(this.el.nativeElement, 'background-colour', 'green');
    }
    @HostBinding('style.border') border: string;
    ngAfterViewInit(){
        this.border = '2px solid red';
    }
    
}