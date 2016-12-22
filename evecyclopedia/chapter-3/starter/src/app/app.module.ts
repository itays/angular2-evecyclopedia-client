import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ShipDetailsComponent} from './ui/ship-details/ship-details.component';
import { InfoCapsuleComponent } from './ui/ship-details/info-capsule/info-capsule.component';
import {ElipsisPipe} from './pipes/ellipsis/elipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShipDetailsComponent,
    InfoCapsuleComponent,
    ElipsisPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
