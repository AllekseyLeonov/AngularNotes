import {MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material/dialog";
import NotesService from "../../modules/notes/services/NotesService";

export const providers = [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}, NotesService]
