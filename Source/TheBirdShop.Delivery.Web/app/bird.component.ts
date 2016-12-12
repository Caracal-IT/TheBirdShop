import { Component, Input } from "@angular/core";
import { Bird } from './bird';

@Component({
    selector: "bird",
    template: `
        <div *ngIf="bird" class="bird" style="margin:5px auto 5px auto">
                    <i class="sprite sprite-birdSprite{{bird.id}}"></i>
                    <div style="position:relative;float:right;top:-90px;">
                        <div>
                            <input class="checkbox-custom" type="checkbox" [checked]="bird.chirps">
                            <label class="checkbox-custom-label">Chirps</label><br />
                        </div>
                        <div>
                            <input class="checkbox-custom" type="checkbox" [checked]="bird.flies">
                            <label class="checkbox-custom-label">Flies</label><br />
                        </div>
                        <div>
                            <input class="checkbox-custom" type="checkbox" [checked]="bird.talks">
                            <label class="checkbox-custom-label">Talks</label>
                        </div>
                    </div>
                    {{bird.name}}
                </div>
        `
})
export class BirdComponent  {
    @Input()
    bird : Bird    
}