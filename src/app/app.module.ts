import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatRippleModule} from "@angular/material/core";
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { HeaderComponent } from './components/header/header.component';
import { NotesPageComponent } from './components/notes-page/notes-page.component';
import {NotesListComponent} from "./components/notes-list/notes-list.component";
import { SharedNotesPageComponent } from './components/shared-notes-page/shared-notes-page.component';
import { AboutComponent } from './components/about/about.component';

/*
 TODO: remove every page to a separate module
*/

const appRoutes: Routes =[
  { path: 'notes', component: NotesPageComponent},
  { path: 'shared-notes', component: SharedNotesPageComponent},
  { path: 'about', component: AboutComponent },
  { path:"**", redirectTo: "notes" }
];

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    HeaderComponent,
    NotesPageComponent,
    NotesListComponent,
    SharedNotesPageComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
