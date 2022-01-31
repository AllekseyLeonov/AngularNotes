import {HttpClient} from "@angular/common/http";

import {Note} from "../../models/Note";
import {Observable} from "rxjs";

export interface INotesService{
  getNotesByUserId$() : Observable<Note[]>
  createNote$(note: Note): Observable<Note>
  deleteNote$(noteId: number): Observable<Note>
  editNote$(note: Note): Observable<Note>
}
