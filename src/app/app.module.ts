import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ModalTemplateComponent } from './modal-template.component';
import { ModalTestComponent } from './modal-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [BrowserModule,
        BrowserAnimationsModule],
    providers: [],
    declarations: [
        AppComponent,
        ModalTestComponent,
        ModalTemplateComponent
    ],
    entryComponents: [ModalTemplateComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() { }
}

