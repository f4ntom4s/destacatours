import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { ConductoresComponent } from "./components/conductores/conductores.component";
import {TerminalsComponent} from "./components/terminals/terminals.component";


const appRoutes: Routes = [
  { path: '', component: ConductoresComponent },
  { path: 'conductores', component: ConductoresComponent },
  { path: 'terminales', component: TerminalsComponent }
];


export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
