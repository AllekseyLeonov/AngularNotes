import {Guid} from "guid-typescript";
import {Note} from "./Note";

export interface SharedNote extends Note{
  token: Guid
}
