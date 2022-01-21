import {HttpClient} from "@angular/common/http";

import {Note} from "../../models/Note";
import {Observable} from "rxjs";

export interface INotesService{
  getNotesByUserId(client: HttpClient, userId: number) : Observable<Note[]>
}
