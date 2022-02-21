import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonComponent } from './components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './components/grid/grid.component';
import { CommonModule } from '@angular/common';
import { CellComponent } from './components/cell/cell.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ButtonComponent,
    GridComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
