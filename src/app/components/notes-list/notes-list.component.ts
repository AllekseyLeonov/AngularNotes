import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../../core/models/Note";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Input() notes: Note[] = [];
  @Output() onActiveNoteChange: EventEmitter<Note> = new EventEmitter<Note>();

  activeNoteId: number = 0;

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
}
