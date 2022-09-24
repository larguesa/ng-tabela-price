import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabelaPriceComponent } from './tabela-price/tabela-price.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeaderComponent, TabelaPriceComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
