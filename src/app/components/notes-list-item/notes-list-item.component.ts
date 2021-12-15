import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../../core/models/Note";
import {defaultNote} from "../../constans/notesDefaults";

@Component({
  selector: 'app-notes-list-item',
  templateUrl: './notes-list-item.component.html',
  styleUrls: ['./notes-list-item.component.css']
})
export class NotesListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Input() note: Note = defaultNote;

  getDescriptionPreview(): string {
    const descriptionPreviewLength = 35;
    return this.note.description.length > descriptionPreviewLength ?
      this.note.description.substring(0, descriptionPreviewLength) + "..."
      : this.note.description;
  }
}
