import { Component, Input } from "@angular/core";
import { Bird } from './bird';

@Component({
    selector: "bird", 
    styleUrls: ['./app/bird.component.css'],     
    templateUrl: './app/bird.component.html'
})
export class BirdComponent  {
    @Input()
    bird : Bird    
}