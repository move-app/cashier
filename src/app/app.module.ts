import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandsBarComponent } from './component/products-manager/commands-bar.component';
import { FormsModule } from '@angular/forms';
import { SalesManagerComponent } from './component/sales-manager/sales-manager.component';
import { SalesListComponent } from './component/sales-list/sales-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandsBarComponent,
    SalesManagerComponent,
    SalesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
