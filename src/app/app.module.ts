import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatRippleModule} from "@angular/material/core";
import {RouterModule, Routes} from "@angular/router";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { HeaderComponent } from './components/header/header.component';
import { NotesPageComponent } from './components/notes-page/notes-page.component';
import {NotesListComponent} from "./components/notes-list/notes-list.component";
import { SharedNotesPageComponent } from './components/shared-notes-page/shared-notes-page.component';
import { AboutComponent } from './components/about/about.component';
import { DeleteDialogComponent } from './components/note/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './components/note/edit-dialog/edit-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

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
    DeleteDialogComponent,
    EditDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
