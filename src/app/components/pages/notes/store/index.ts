import {Note} from "../../../../core/models/Note";

export interface State {
  notesState: Note[],
  isLoading: boolean,
  error: string | null,
}

export const initialState : State = {
  notesState: [],
  isLoading: false,
  error: null,
}

