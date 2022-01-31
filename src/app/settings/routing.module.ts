import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {routerConfig} from "./router-config";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routerConfig),
    RouterModule,
  ]
})
export class RoutingModule { }
