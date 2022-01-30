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

export const notesListChange = createAction(notesKey + "changeNotesList", props<{notes: Note[]}>());
export const createRequest = createAction(notesKey + "createRequest", props<{note: Note}>());
export const createRequestSuccess = createAction(notesKey + "createRequestSuccess", props<{note: Note}>());
export const createRequestError = createAction(notesKey + "createRequestError", props<{error:string}>());

export const notesReducer = createReducer(initialState,
  on(notesListChange, (state, action) => ({...state, notesState: action.notes})),
  on(createRequest, (state) => ({...state, isLoading: true})),
  on(createRequestSuccess, (state, action) => ({...state, isLoading: false, notesState: [...state.notesState, action.note]})),
  on(createRequestError, (state, action) => ({...state, isLoading: false, error: action.error})),
)

export const featureSelector = createFeatureSelector<State>("notesState");
export const notesSelector = createSelector(featureSelector, state => state.notesState);
export const isLoadingSelector = createSelector(featureSelector, state => state.isLoading);
export const errorSelector = createSelector(featureSelector, state => state.error);

