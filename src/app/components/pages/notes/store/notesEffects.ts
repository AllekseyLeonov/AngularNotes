import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  createRequest,
  createRequestError,
  createRequestSuccess, deleteRequest, deleteRequestSuccess, editRequest, editRequestError, editRequestSuccess,
  getRequest,
  getRequestError,
  getRequestSuccess
} from "./actions";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import NotesService from "../../../../core/services/NotesService";

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

  getNoteRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType(getRequest),
        switchMap(action => {
            return this.notesService.getNotesByUserId$().pipe(
              map(result => {
                return getRequestSuccess({notes: result})
              }),
              catchError(error => of(getRequestError({ error })))
            )
          }
        )
      );
    }
  )

  deleteNoteRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType(deleteRequest),
        switchMap(action => {
            return this.notesService.deleteNote$(action.noteId).pipe(
              map(result => {
                return deleteRequestSuccess({note: result})
              }),
              catchError(error => of(getRequestError({ error })))
            )
          }
        )
      );
    }
  )

  editNoteRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType(editRequest),
        switchMap(action => {
            return this.notesService.editNote$(action.note).pipe(
              map(result => {
                return editRequestSuccess({note: result})
              }),
              catchError(error => of(editRequestError({ error })))
            )
          }
        )
      );
    }
  )
}
