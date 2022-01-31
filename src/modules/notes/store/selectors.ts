import {createFeatureSelector, createSelector} from "@ngrx/store";
import {NotesState} from "./state";

export const featureSelector = createFeatureSelector<NotesState>("notesState");
export const notesSelector = createSelector(featureSelector, state => state.notesState);
export const isLoadingSelector = createSelector(featureSelector, state => state.isLoading);
export const errorSelector = createSelector(featureSelector, state => state.error);
