import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import NotesService from "../core/services/NotesService";
import {createRequest, createRequestError, createRequestSuccess} from "./index";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";

@Injectable()
export class notesEffects{
  constructor(private notesService: NotesService, private actions$: Actions) {}

  createNoteRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType(createRequest),
        switchMap(action => {
          console.log(action);
          return this.notesService.createNote$(action.note).pipe(
              map(result => {
                console.log(result);
                return createRequestSuccess({note: result})
              }),
              catchError(error => of(createRequestError({ error })))
            )
          }
        )
      );
    }
  )

}
