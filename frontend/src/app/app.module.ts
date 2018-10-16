import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { ConductoresComponent } from './components/conductores/conductores.component';
import { HttpClientModule } from "@angular/common/http";
import { TerminalsComponent } from './components/terminals/terminals.component';


@NgModule({
  declarations: [
    AppComponent,
    ConductoresComponent,
    TerminalsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
