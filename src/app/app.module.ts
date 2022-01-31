import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {declarations} from "./settings/declarations";
import {imports} from "./settings/imports";
import {providers} from "./settings/providers";

@NgModule({
  declarations: declarations,
  imports: imports,
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
