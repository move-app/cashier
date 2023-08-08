import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandsBarComponent } from './component/products-manager/commands-bar.component';
import { FormsModule } from '@angular/forms';
import { SalesManagerComponent } from './component/sales-manager/sales-manager.component';
import { SalesListComponent } from './component/sales-list/sales-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalReceiptComponent } from './component/modal-receipt/modal-receipt.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TesteComponent } from './component/teste/teste.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandsBarComponent,
    SalesManagerComponent,
    SalesListComponent,
    ModalReceiptComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
