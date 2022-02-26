import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CellComponent } from './components/cell/cell.component';
import { GridComponent } from './components/grid/grid.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';



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
    HttpClientModule,
    CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
