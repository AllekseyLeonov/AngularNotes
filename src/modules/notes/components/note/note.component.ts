import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {Note} from "../../core/models/Note";
import {defaultNote, defaultNoteId} from "../../../../app/constans/notesDefaults";
import {DeleteDialogComponent} from "./delete-dialog/delete-dialog.component";
import {EditDialogComponent} from "./edit-dialog/edit-dialog.component";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  @Input() note: Note = defaultNote;
  @Output() onEditNote : EventEmitter<Note> = new EventEmitter<Note>();
  @Output() onDeleteNote : EventEmitter<Note> = new EventEmitter<Note>();
  defaultNoteId: number = defaultNoteId;

  openDeleteDialog() {
    const deleteDialog = this.dialog.open(DeleteDialogComponent);
    deleteDialog.afterClosed().subscribe(result=> this.onDeleteNote.emit(this.note));
  }

  openEditDialog() {
    const config = {
      data: {...this.note},
      position: {
        top: '10px',
        right: '10px'
      },
      height: '98%',
      width: '100vw',
      panelClass: 'full-screen-modal',
    };
    const editDialogRef = this.dialog.open(EditDialogComponent, config);
    editDialogRef.afterClosed().subscribe(result => this.onEditNote.emit(result));
  }
}
