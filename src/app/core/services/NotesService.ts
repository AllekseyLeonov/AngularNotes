import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {INotesService} from "./interfaces/INotesService";
import {Note} from "../models/Note";

export default class NotesService implements INotesService{
  getNotesByUserId(client: HttpClient, userId: number): Observable<Note[]> {
    return client.get<Note[]>(`https://localhost:7063/notes?userId=${userId}`);
  }
}
