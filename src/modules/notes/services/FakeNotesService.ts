import {Observable} from "rxjs";

import {INotesService} from "./interfaces/INotesService";
import {NoteDTO} from "../core/models/NoteDTO";
import {Note} from "../core/models/Note";


export class FakeNotesService implements INotesService {
  private notes: Note[] = [];

  createNote$(note: NoteDTO): Observable<Note> {
    const newNote: Note = {
      id: this.notes.length + 1,
      title: note.title,
      description: note.description,
      date: new Date().toDateString()
    }
    this.notes = this.notes.concat(newNote);

    return new Observable<Note>(observer => {
      observer.next(newNote);
      observer.complete();
    });
  }

  deleteNote$(noteId: number): Observable<Note> {
    const noteToDelete = this.notes.find(note => note.id == noteId);
    this.notes = this.notes.filter(note => note.id != noteId);

    return new Observable<Note>(observer => {
      observer.next(noteToDelete);
      observer.complete();
    });
  }

  editNote$(editedNote: Note): Observable<Note> {
    this.notes.map(note => note.id == editedNote.id ? editedNote : note)
    return new Observable<Note>(observer => {
      observer.next(editedNote);
      observer.complete();
    });
  }

  getNotes$(): Observable<Note[]> {
    return new Observable<Note[]>(observer => {
      observer.next(this.notes);
      observer.complete();
    });
  }

}
