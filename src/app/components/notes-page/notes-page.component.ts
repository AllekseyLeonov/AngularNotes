import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

import {Note} from "../../core/models/Note";
import {defaultNote, defaultNotesArray} from "../../constans/notesDefaults";
import NotesService from "../../core/services/NotesService";
import {createRequest, notesListChange, notesSelector} from "../../store";


export interface NoteViewModel {
  title: string,
  description: string,
}

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesPageComponent implements OnInit {

  constructor(private notesService: NotesService, private store$:Store, private  cdr: ChangeDetectorRef,){}

  ngOnInit(): void {
    this.notesService.getNotesByUserId$(1)
      .subscribe(
        notes => {
          this.store$.dispatch(notesListChange({notes: notes}));
          this.cdr.detectChanges();
        }
      );
    this.notes$.subscribe(notesFromStore => {
      this.notes = notesFromStore;
      this.cdr.detectChanges();
    });
  }

  activeNote: Note = defaultNote;
  notes$: Observable<Note[]> = (this.store$.select(notesSelector));
  notes: Note[] = [];

  onActiveNoteChange(activeNote: Note){
    this.activeNote = activeNote;
  }

  onEditNote(editedNote: Note){
    this.activeNote = editedNote;
  }

  onCreateNote(note: NoteViewModel){
    const date = new Date();
    const newNote = {
      id: Math.max.apply(null, this.notes.map(note=> note.id)) + 1,
      title: note.title,
      description: note.description,
      date: `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`,
      userId: 1,
    }
    this.store$.dispatch(createRequest({note: newNote}));
  }
}
