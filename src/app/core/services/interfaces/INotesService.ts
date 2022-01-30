import {HttpClient} from "@angular/common/http";

import {Note} from "../../models/Note";
import {Observable} from "rxjs";

export interface INotesService{
  getNotesByUserId$(userId: number) : Observable<Note[]>
  createNote$(note: Note): Observable<Note>
}
