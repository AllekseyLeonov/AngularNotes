import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {Note} from "../../core/models/Note";
import {defaultNote} from "../../constans/notesDefaults";
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

  openDeleteDialog() {
    this.dialog.open(DeleteDialogComponent);
  }

  openEditDialog() {
    let editDialogRef = this.dialog.open(EditDialogComponent, {data: {...this.note}});
    editDialogRef.afterClosed().subscribe(result => this.onEditNote.emit(result));
  }
}
