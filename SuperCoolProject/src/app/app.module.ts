import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddBillComponent } from './add-bill/add-bill.component';
import { RemoveBillComponent } from './remove-bill/remove-bill.component';
import { UpdateBillComponent } from './update-bill/update-bill.component';
import { SearchBillsComponent } from './search-bills/search-bills.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBillComponent,
    RemoveBillComponent,
    UpdateBillComponent,
    SearchBillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
