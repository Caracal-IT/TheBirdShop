import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';

import { AppComponent } from "./app.component";
import { ShopService } from './shop.service';
import { BirdComponent } from './bird.component';

@NgModule({
    imports: [    
        BrowserModule,
        FormsModule,
        HttpModule,
        DragulaModule     
    ],
    declarations: [
        AppComponent,
        BirdComponent 
    ],
    providers: [ShopService, DragulaService],
    bootstrap: [AppComponent]
})
export class AppModule { }