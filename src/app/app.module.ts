import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-root/app.component';
import { ClockComponent } from './components/clock/clock.component';
import { TimerComponent } from './components/timer/timer.component';
import { WhoWatchComponent } from './components/who-watch/who-watch.component';
import { UserPreviewComponent } from './components/user-preview/user-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TimerComponent,
    WhoWatchComponent,
    UserPreviewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
