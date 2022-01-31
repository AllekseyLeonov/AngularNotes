import {createAction, props} from "@ngrx/store";
import {Note} from "../../../../core/models/Note";
import {NoteDTO} from "../../../../core/models/NoteDTO";

const notesKey = "[NOTES]"

export const createRequest = createAction(notesKey + "createRequest", props<{note: NoteDTO}>());
export const createRequestSuccess = createAction(notesKey + "createRequestSuccess", props<{note: Note}>());
export const createRequestError = createAction(notesKey + "createRequestError", props<{error:string}>());

export const getRequest = createAction(notesKey + "getRequest");
export const getRequestSuccess = createAction(notesKey + "getRequestSuccess", props<{notes: Note[]}>());
export const getRequestError = createAction(notesKey + "getRequestError", props<{error:string}>());

export const deleteRequest = createAction(notesKey + "deleteRequest", props<{noteId: number}>());
export const deleteRequestSuccess = createAction(notesKey + "deleteRequestSuccess", props<{note: Note}>());
export const deleteRequestError = createAction(notesKey + "deleteRequestError", props<{error:string}>());

export const editRequest = createAction(notesKey + "editRequest", props<{note: Note}>());
export const editRequestSuccess = createAction(notesKey + "editRequestSuccess", props<{note: Note}>());
export const editRequestError = createAction(notesKey + "editRequestError", props<{error:string}>());
