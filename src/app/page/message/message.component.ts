import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from "../../services/api/message.service";
import {FilterMessageRequest} from "../../services/api/model/view/messenger/filter.message.request";
import {MessageRequest} from "../../services/api/model/request/message.request";
import {MessageModelView} from "../../services/api/model/view/messenger/message.model.view";
import {MessageGallery} from 'src/app/services/api/model/view/messenger/message.gallery';
import {APIListResponse} from "../../services/api/model/response/APIListResponse";
import {Utils} from "../../services/utils";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messageRequest: MessageRequest = new MessageRequest();
  galleries?: APIListResponse<MessageModelView>;
  messageChat: MessageModelView = new MessageModelView();
  messageDetails?: APIListResponse<MessageModelView>

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageService.getMessageGallery(new MessageGallery())
      .subscribe({
        next: apiResponse => {
          if (apiResponse.status === 200) {
            this.galleries = apiResponse;
          } else {
            alert(apiResponse.message)
          }
        }
      })
  }

  @Input()
  isOpenChat: boolean = false

  getMessageDetails(message: MessageModelView) {
    const filter = new FilterMessageRequest()
    filter.toEntityId = this.getToEntityId(message);
    this.messageService.getMessageDetails(filter)
      .subscribe({
        next: apiResponse => {
          if (apiResponse.status === 200) {
            this.messageDetails = apiResponse;
          } else {
            alert(apiResponse.message)
          }
        }
      })
  }

  private getToEntityId(message: MessageModelView) {
    const fromUserId = Utils.getAuth().userId;
    const toEntityId = message.fromUser?.id !== fromUserId
      ? message.fromUser?.id
      : message.destination?.entityType?.entityId
    return toEntityId;
  }

  sendMessage() {
    this.messageRequest.toEntityType = this.messageChat.destination?.entityType;
    this.messageRequest.fromUserId = Utils.getAuth().userId;

    const formData = new FormData();
    formData.set("messageRequest", JSON.stringify(this.messageRequest))
    formData.set("files", "null");
    this.messageService.createMessage(formData)
      .subscribe()
  }

}
