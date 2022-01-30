import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatRippleModule} from "@angular/material/core";
import {RouterModule, Routes} from "@angular/router";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

import {AppComponent} from './app.component';
import {NoteComponent} from './components/note/note.component';
import {HeaderComponent} from './components/header/header.component';
import {NotesPageComponent} from './components/notes-page/notes-page.component';
import {NotesListComponent} from "./components/notes-list/notes-list.component";
import {SharedNotesPageComponent} from './components/shared-notes-page/shared-notes-page.component';
import {AboutComponent} from './components/about/about.component';
import {DeleteDialogComponent} from './components/note/delete-dialog/delete-dialog.component';
import {EditDialogComponent} from './components/note/edit-dialog/edit-dialog.component';
import {CreateNoteDialogComponent} from './components/notes-list/create-note-dialog/create-note-dialog.component';
import {notesReducer} from "./store";
import {EffectsModule} from "@ngrx/effects";
import {notesEffects} from "./store/notesEffects";
import NotesService from "./core/services/NotesService";
import NotesStoreModule from "./store/notes-store/notes-store.module";


const appRoutes: Routes = [
  {
    path: 'notes',
    component: NotesPageComponent,
    loadChildren: () => import("./store/notes-store/notes-store.module").then(mod => mod.default)
  },
  {path: 'shared-notes', component: SharedNotesPageComponent},
  {path: 'about', component: AboutComponent},
  {path: "**", redirectTo: "notes"},
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
    CreateNoteDialogComponent,
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
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NotesStoreModule,
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}, NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
