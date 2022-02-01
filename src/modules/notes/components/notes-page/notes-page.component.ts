import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

import {Note} from "../../core/models/Note";
import {defaultNote} from "../../../../app/constans/notesDefaults";
import {createRequest, deleteRequest, editRequest, getRequest} from "../../store/actions";
import {notesSelector} from "../../store/selectors";
import {NoteDTO} from "../../core/models/NoteDTO";

@Component({
  selector: 'app-notes',
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

  onCreateNote(note: NoteDTO){
    if(note && note.title && note.description){
      this.store$.dispatch(createRequest({note: note}));
    }
  }

  onDeleteNote(note: Note) {
    if (note) {
      this.store$.dispatch(deleteRequest({noteId: note.id}));
      this.activeNote = defaultNote;
      this.cdr.detectChanges();
    }
  }
}
