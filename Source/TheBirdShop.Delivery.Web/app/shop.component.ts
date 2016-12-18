import { Component, OnInit } from "@angular/core";
import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { Bird } from './bird';
import { ShopService } from './shop.service';

@Component({    
    styleUrls: ['./app/shop.component.css'],
    templateUrl: './app/shop.component.html'
})
export class ShopComponent implements OnInit {
    birds: Bird[];

    constructor(
        private shopService: ShopService,
        private dragulaService: DragulaService
    ) { }

    ngOnInit(): void {
        this.shopService
            .getBirds()
            .subscribe(birds => this.birds = birds);            
        
        this.dragulaService.drop.subscribe((value) => {
            this.onDrop(value[1].id, value[2].id);
        });
    }
    
    private onDrop(itemId: number, bagId: string): void {
        var bird = this.birds[itemId - 1];


        if (bird.basket == "1" && bagId == "3" || bird.basket == "3" && bagId == "1") {
            this.dragulaService.find('bag1').drake.cancel(true);
            return;
        }

        console.log(bird.basket);
        if (bird.basket == "1" || bagId == "3") {
            //this.balance += 5;
        }

        if (bird.basket == "3" || bagId == "1") {
            //this.balance -= 5;
        }


        this.dragulaService.find('bag1').drake.cancel(true);
        bird.basket = bagId;
    }
}

