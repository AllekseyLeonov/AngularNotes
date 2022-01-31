import {NotesPageComponent} from "../../modules/notes/components/notes-page/notes-page.component";
import {Routes} from "@angular/router";
import {AboutComponent} from "../components/about/about.component";

export const routerConfig : Routes = [
  {
    path: 'notes',
    component: NotesPageComponent,
    loadChildren: () => import("../../modules/notes/notes.module").then(mod => mod.default)
  },
  {path: 'about', component: AboutComponent},
  {path: "**", redirectTo: "notes"},
];
