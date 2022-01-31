import {createReducer, on} from "@ngrx/store";
import {
  createRequest,
  createRequestError,
  createRequestSuccess,
  deleteRequest,
  deleteRequestError,
  deleteRequestSuccess,
  editRequest,
  editRequestError,
  editRequestSuccess,
  getRequest,
  getRequestError,
  getRequestSuccess
} from "./actions";
import {initialState} from "./state";

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
