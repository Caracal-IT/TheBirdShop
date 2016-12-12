import { Component, OnInit } from "@angular/core";

import { Bird } from './bird';
import { ShopService } from './shop.service';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
    selector: "the-bird-shop",
    styles: [`
  .container2{
     border: 1px solid red;
     width: 336px;
     height: 69px;
  }
  `],
    templateUrl: `./app/app.component.html`
})
export class AppComponent implements OnInit {
    username = "Kathleen Healy";
    balance: number = 40.00;
    birds: Bird[];

    constructor(private shopService: ShopService, private dragulaService: DragulaService) { }

    ngOnInit(): void {
        this.shopService
            .getBirds()
            .then(birds => this.birds = birds)

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
            this.balance += 5;
        }

        if (bird.basket == "3" || bagId == "1") {
            this.balance -= 5;
        }
          
             
        this.dragulaService.find('bag1').drake.cancel(true);
        bird.basket = bagId;                         
    }
}