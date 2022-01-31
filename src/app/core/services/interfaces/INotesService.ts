import {Observable} from "rxjs";

import {Note} from "../../models/Note";
import {NoteDTO} from "../../models/NoteDTO";

export interface INotesService{
  getNotesByUserId$() : Observable<Note[]>
  createNote$(note: NoteDTO): Observable<Note>
  deleteNote$(noteId: number): Observable<Note>
  editNote$(note: Note): Observable<Note>
}
