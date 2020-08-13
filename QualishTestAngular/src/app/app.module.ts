import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Store } from './redux/store';
import { Reducer } from './redux/reducer';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { AppRoutingModule } from './modules/app-routing.module';

import { FooterComponent } from './components/design-elements/footer/footer.component';
import { HeaderComponent } from './components/design-elements/header/header.component';
import { LayoutComponent } from './components/design-elements/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { 
  public constructor(redux:NgRedux<Store>){
    redux.configureStore(Reducer.reduce, new Store());
  }
}
