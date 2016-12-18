import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';

import { AppComponent } from "./app.component";
import { ShopComponent } from './shop.component';
import { BirdComponent } from './bird.component';

import { ShopService } from './shop.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [    
        BrowserModule,
        FormsModule,
        HttpModule,        
        AppRoutingModule,
        DragulaModule     
    ],
    declarations: [
        AppComponent,
        BirdComponent,
        ShopComponent
    ],
    providers: [
        ShopService,
        DragulaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }