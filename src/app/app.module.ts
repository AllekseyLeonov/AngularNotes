import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { HeaderComponent } from './components/header/header.component';
import { NotesPageComponent } from './components/notes-page/notes-page.component';
import {NotesListComponent} from "./components/notes-list/notes-list.component";
import {MatListModule} from "@angular/material/list";
import {MatRippleModule} from "@angular/material/core";

/*
 TODO: remove 'notes' page to a separate module
*/

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    HeaderComponent,
    NotesPageComponent,
    NotesListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
