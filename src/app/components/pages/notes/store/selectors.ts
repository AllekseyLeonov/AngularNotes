import {createFeatureSelector, createSelector} from "@ngrx/store";
import {State} from "./index";

export const featureSelector = createFeatureSelector<State>("notesState");
export const notesSelector = createSelector(featureSelector, state => state.notesState);
export const isLoadingSelector = createSelector(featureSelector, state => state.isLoading);
export const errorSelector = createSelector(featureSelector, state => state.error);
