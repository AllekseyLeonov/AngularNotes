import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

import {Note} from "../../core/models/Note";
import {defaultNote} from "../../constans/notesDefaults";
import {createRequest, deleteRequest, editRequest, getRequest, notesSelector} from "../../store";


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

  constructor(private store$:Store, private  cdr: ChangeDetectorRef,){}

  ngOnInit(): void {
    this.store$.dispatch(getRequest());
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
    if(editedNote && editedNote.title && editedNote.description){
      this.activeNote = editedNote;
      this.store$.dispatch(editRequest({note: editedNote}));
    }
  }

  onCreateNote(note: NoteViewModel){
    if(note && note.title && note.description){
      const date = new Date();
      const newNote = {
        id: Math.max.apply(null, this.notes.map(note=> note.id)) + 1,
        title: note.title,
        description: note.description,
        date: `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`,
      }
      this.store$.dispatch(createRequest({note: newNote}));
    }
  }

  onDeleteNote(note: Note){
    this.store$.dispatch(deleteRequest({noteId: note.id}));
    this.activeNote = defaultNote;
  }
}
