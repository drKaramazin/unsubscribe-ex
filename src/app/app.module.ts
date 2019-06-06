import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnsubscribeComponent } from './sections/unsubscribe/unsubscribe.component';
import { TakeWhileComponent } from './sections/take-while/take-while.component';
import { TakeUntilComponent } from './sections/take-until/take-until.component';

@NgModule({
  declarations: [
    AppComponent,
    UnsubscribeComponent,
    TakeWhileComponent,
    TakeUntilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
