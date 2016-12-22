import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[submit-on-enter]' })
export class SubmitOnEnterDirective {
    
    @Input("submit-on-enter") form:any;
    event:any;
    constructor(el: ElementRef) {
       el.nativeElement.addEventListener("keypress",function(e:any){
           if(e.keyCode==13){
                 e.preventDefault();
                 try{
                 event = document.createEvent("HTMLEvents");
                 event.initEvent("submit", true, true);
                 this.form.dispatchEvent(event);
                 }
                 catch(e){
                   //  event = document.createEventObject();
                   //  event.eventType="onsubmit";
                     this.form.fireEvent(event);
                 }
           }
               
       })
    }
}