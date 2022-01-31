import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import {NotesStoreModule} from "../notes/store/notes-store.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NotesStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})

export class RootStoreModule { }
