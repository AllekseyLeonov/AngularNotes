import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {INotesService} from "./interfaces/INotesService";
import {Note} from "../models/Note";
import {environment} from "../../../environments/environment";

export default class NotesService implements INotesService{
  getNotesByUserId(client: HttpClient, userId: number): Observable<Note[]> {
    return client.get<Note[]>(`${environment.apiRootAddress}/notes?userId=${userId}`);
  }

  createNote(client: HttpClient, note: Note): Observable<Note>{
    return client.post<Note>(`${environment.apiRootAddress}/createNote`, note);
  }
}
