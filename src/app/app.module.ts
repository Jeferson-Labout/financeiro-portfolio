
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }, {
    provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
