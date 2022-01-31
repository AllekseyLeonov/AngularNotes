import {Observable} from "rxjs";

import {Note} from "../../core/models/Note";
import {NoteDTO} from "../../core/models/NoteDTO";

export interface INotesService{
  getNotesByUserId$() : Observable<Note[]>
  createNote$(note: NoteDTO): Observable<Note>
  deleteNote$(noteId: number): Observable<Note>
  editNote$(note: Note): Observable<Note>
}
