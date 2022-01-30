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

const initialState = {
  notes: [],
}

export interface State {
  notesState: Note[]
}

export const notesListChange = createAction(notesKey + "changeNotesList", props<{notes: Note[]}>());
export const notesReducer = createReducer(initialState.notes,
  on(notesListChange, (state, action) => ({...state, notesState: action.notes}))
)

export const featureSelector = createFeatureSelector<State>("notesState");
export const notesSelector = createSelector(featureSelector, state => state.notesState);

