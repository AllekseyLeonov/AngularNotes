import {Note} from "../core/models/Note";
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props
} from "@ngrx/store";

const notesKey = "[NOTES]"

const initialState : State = {
  notesState: [],
  isLoading: false,
  error: null,
}

export interface State {
  notesState: Note[],
  isLoading: boolean,
  error: string | null,
}

export const createRequest = createAction(notesKey + "createRequest", props<{note: Note}>());
export const createRequestSuccess = createAction(notesKey + "createRequestSuccess", props<{note: Note}>());
export const createRequestError = createAction(notesKey + "createRequestError", props<{error:string}>());

export const getRequest = createAction(notesKey + "getRequest", props<{userId: number}>());
export const getRequestSuccess = createAction(notesKey + "getRequestSuccess", props<{notes: Note[]}>());
export const getRequestError = createAction(notesKey + "getRequestError", props<{error:string}>());

export const deleteRequest = createAction(notesKey + "deleteRequest", props<{noteId: number}>());
export const deleteRequestSuccess = createAction(notesKey + "deleteRequestSuccess", props<{note: Note}>());
export const deleteRequestError = createAction(notesKey + "deleteRequestError", props<{error:string}>());

export const editRequest = createAction(notesKey + "editRequest", props<{note: Note}>());
export const editRequestSuccess = createAction(notesKey + "editRequestSuccess", props<{note: Note}>());
export const editRequestError = createAction(notesKey + "editRequestError", props<{error:string}>());

export const notesReducer = createReducer(initialState,
  on(createRequest, (state) => ({...state, isLoading: true})),
  on(createRequestSuccess, (state, action) =>
    ({...state, isLoading: false, notesState: [...state.notesState, action.note]})),
  on(createRequestError, (state, action) => ({...state, isLoading: false, error: action.error})),
  on(getRequest, (state) => ({...state, isLoading: true})),
  on(getRequestSuccess, (state, action) => ({...state, isLoading: false, notesState: action.notes})),
  on(getRequestError, (state, action) => ({...state, isLoading: false, error: action.error})),
  on(deleteRequest, (state) => ({...state, isLoading: true})),
  on(deleteRequestSuccess, (state, action) =>
    ({...state, isLoading: false, notesState: state.notesState.filter(note => note.id != action.note.id)})),
  on(deleteRequestError, (state, action) => ({...state, isLoading: false, error: action.error})),
  on(editRequest, (state) => ({...state, isLoading: true})),
  on(editRequestSuccess, (state, action) =>
    ({...state, isLoading: false, notesState: state.notesState.map(note => note.id != action.note.id ? note : action.note)})),
  on(editRequestError, (state, action) => ({...state, isLoading: false, error: action.error})),
)

export const featureSelector = createFeatureSelector<State>("notesState");
export const notesSelector = createSelector(featureSelector, state => state.notesState);
export const isLoadingSelector = createSelector(featureSelector, state => state.isLoading);
export const errorSelector = createSelector(featureSelector, state => state.error);

