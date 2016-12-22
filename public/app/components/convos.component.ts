import {Component,HostListener, ElementRef,Input,ViewChild} from '@angular/core'

@Component({
    moduleId:module.id,
    selector:"convo",
    templateUrl:"convos.component.html"
})
export class convosComponent{
    name:string = "hello";
}