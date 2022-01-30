import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {notesEffects} from "../notesEffects";
import {StoreModule} from "@ngrx/store";
import {notesReducer} from "../index";
import {RouterModule} from "@angular/router";
import {NotesPageComponent} from "../../components/notes-page/notes-page.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([notesEffects]),
    StoreModule.forFeature("notesState", notesReducer),
    RouterModule.forChild([{
      path: "",
      component: NotesPageComponent
    }])
  ]
})
export default class NotesStoreModule { }
