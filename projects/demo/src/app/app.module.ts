
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app.component';
import {MonsterModule} from './modules/monster/monster.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MonsterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
