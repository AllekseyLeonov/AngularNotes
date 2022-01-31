import { NgModule } from '@angular/core';

import {NotesPageComponent} from "./components/notes-page/notes-page.component";
import {declarations} from "./settings/declarations";
import {imports} from "./settings/imports";

@NgModule({
  declarations: declarations,
  imports: imports,
  exports: [
    NotesPageComponent,
  ]
})
export default class NotesModule { }
