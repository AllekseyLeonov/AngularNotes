import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";

import {INotesService} from "./interfaces/INotesService";
import {Note} from "../models/Note";
import {environment} from "../../../environments/environment";

@Injectable()
export default class NotesService implements INotesService{
  constructor(private client: HttpClient) {}

  getNotesByUserId$(userId: number): Observable<Note[]> {
    return this.client.get<Note[]>(`${environment.apiRootAddress}/notes?userId=${userId}`);
  }

  createNote$(note: Note): Observable<Note>{
    return this.client.post<Note>(`${environment.apiRootAddress}/createNote`, note);
  }
}
