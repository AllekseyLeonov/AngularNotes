import {MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material/dialog";
import NotesService from "../../modules/notes/services/NotesService";
import {FakeNotesService} from "../../modules/notes/services/FakeNotesService";

export const providers = [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}, FakeNotesService]
