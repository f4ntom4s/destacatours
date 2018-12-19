import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { ConductoresComponent } from "./components/conductores/conductores.component";
import {TerminalsComponent} from "./components/terminals/terminals.component";
import {BusesComponent} from "./components/buses/buses.component";


const appRoutes: Routes = [
  { path: '', component: ConductoresComponent },
  { path: 'conductores', component: ConductoresComponent },
  { path: 'terminales', component: TerminalsComponent },
  { path: 'buses', component: BusesComponent }
];


export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
