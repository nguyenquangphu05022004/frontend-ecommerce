import {UserSimpleModelView} from "../UserSimpleModelView";
import {Destination} from "./destination";

export class MessageModelView {
  content?: string
  fromUser?: UserSimpleModelView
  watched?: boolean
  urlsImage?: Array<string>
  destination?: Destination
}
