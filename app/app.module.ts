import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { WhatIsItComponent } from "./whatisit.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, HeaderComponent, WhatIsItComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}