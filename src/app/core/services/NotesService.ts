import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";

import {INotesService} from "./interfaces/INotesService";
import {Note} from "../models/Note";
import {environment} from "../../../environments/environment";
import {NoteDTO} from "../models/NoteDTO";

@Injectable()
export default class NotesService implements INotesService{
  constructor(private client: HttpClient) {}

  getNotesByUserId$(): Observable<Note[]> {
    return this.client.get<Note[]>(`${environment.apiRootAddress}/notes`);
  }

  createNote$(note: NoteDTO): Observable<Note>{
    return this.client.post<Note>(`${environment.apiRootAddress}/createNote`, note);
  }

  deleteNote$(noteId: number): Observable<Note>{
    return this.client.delete<Note>(`${environment.apiRootAddress}/deleteNote?noteId=` + noteId);
  }

  editNote$(note: Note): Observable<Note>{
    return this.client.patch<Note>(`${environment.apiRootAddress}/editNote`, note);
  }
}
