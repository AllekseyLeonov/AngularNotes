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
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
})
export class NotesListComponent implements OnInit {

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  @Input() notes: Note[] = [];
  @Output() onActiveNoteChange: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() onCreateNewNote: EventEmitter<Note> = new EventEmitter<Note>();

  activeNoteId: number = 0;
  input: string = "";
  select: number = 0;

  filters: { value: number, viewValue: string }[] = [
    {value: 0, viewValue: "none"},
    {value: 1, viewValue: "name asc"},
    {value: 2, viewValue: "name des"},
    {value: 3, viewValue: "date asc"},
    {value: 4, viewValue: "date des"},
  ]


  getFilteredArray = () => {
    const filteredArray: Note[] = this.notes.filter(note => note.title.includes(this.input) || note.description.includes(this.input));
    filteredArray.sort((note1, note2) => {
      switch (this.select) {
        case 1:
          return note1.title < note2.title ? 1 : -1
        case 2:
          return note1.title > note2.title ? 1 : -1
        case 3:
          return note1.date > note2.date ? 1 : -1
        case 4:
          return note1.date < note2.date ? 1 : -1
      }
      return 1;
    })
    return filteredArray;
  }

  getDescriptionPreview(note: Note): string {
    const descriptionPreviewLength = 35;
    return note.description.length > descriptionPreviewLength ?
      note.description.substring(0, descriptionPreviewLength) + "..."
      : note.description;
  }

  onListItemClick(note: Note): void {
    this.activeNoteId = note.id;
    this.onActiveNoteChange.emit(note);
  }

  onCreateButtonClick(): void {
    const config = {
      position: {
        top: '10px',
        right: '10px'
      },
      height: '98%',
      width: '100vw',
      panelClass: 'full-screen-modal',
    };
    const createNoteDialog = this.dialog.open(CreateNoteDialogComponent, config);
    createNoteDialog.afterClosed().subscribe(note => this.onCreateNewNote.emit(note));
  }
}
