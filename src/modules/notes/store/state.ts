import {Note} from "../core/models/Note";

export interface NotesState {
  notesState: Note[],
  isLoading: boolean,
  error: string | null,
}

export const initialState : NotesState = {
  notesState: [],
  isLoading: false,
  error: null,
}

