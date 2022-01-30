import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {Note} from "../../core/models/Note";
import {MatDialog} from "@angular/material/dialog";
import {CreateNoteDialogComponent} from "./create-note-dialog/create-note-dialog.component";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
})
export class NotesListComponent implements OnInit {

  constructor(public dialog: MatDialog, private  cdr: ChangeDetectorRef) { }

  ngOnInit(): void {}

  @Input() notes: Note[] = [];
  @Output() onActiveNoteChange: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() onCreateNewNote: EventEmitter<Note> = new EventEmitter<Note>();

  activeNoteId: number = 0;
  input: string = ""

  getFilteredArray = () => {
    return this.notes.filter(note => note.title.includes(this.input) || note.description.includes(this.input))
  }

  getDescriptionPreview(note : Note): string {
    const descriptionPreviewLength = 35;
    return note.description.length > descriptionPreviewLength ?
      note.description.substring(0, descriptionPreviewLength) + "..."
      : note.description;
  }

  onListItemClick(note: Note): void {
    this.activeNoteId = note.id;
    this.onActiveNoteChange.emit(note);
  }

  onCreateButtonClick() : void {
    const createNoteDialog = this.dialog.open(CreateNoteDialogComponent);
    createNoteDialog.afterClosed().subscribe(note => note && this.onCreateNewNote.emit(note));
  }
}
