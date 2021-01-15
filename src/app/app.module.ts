import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonaComponenteComponent } from './Componentes/persona-componente/persona-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PersonaComponenteComponent]
})
export class AppModule { }
