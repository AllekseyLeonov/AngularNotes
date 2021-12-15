import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../../core/models/Note";
import {defaultNotesArray} from "../../constans/notesDefaults";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Input() notesArray: Note[] = defaultNotesArray;
}
