import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/enviroment";
import {APIResponse} from "./model/response/APIResponse";
import {Utils} from "../utils";
import {APIListResponse} from "./model/response/APIListResponse";
import {MessageModelView} from "./model/view/messenger/message.model.view";
import {FilterMessageRequest} from "./model/view/messenger/filter.message.request";
import {MessageGallery} from "./model/view/messenger/message.gallery";


@Injectable({
  providedIn: "root"
})
export class MessageService {
  constructor(private httpClient: HttpClient) {
  }


  private base_url_api : string = environment.REST_API_SERVER;

  createMessage(formData: FormData) {
    return this.httpClient.post<APIResponse<any>>(
      `${this.base_url_api}/messenger/chat`,
      formData,
      {headers: Utils.getHeader()}
    )
  }

  getMessageDetails(request: FilterMessageRequest) {
    return this.httpClient.post<APIListResponse<MessageModelView>>(
      `${this.base_url_api}/messages/details`,
      request,
      {headers: Utils.getHeader()}
    )
  }

  getMessageGallery(gallery: MessageGallery) {
    return this.httpClient.post<APIListResponse<MessageModelView>>(
      `${this.base_url_api}/messages/galleries?page=${gallery.page}&limit=${gallery.limit}`,
      null,
      {headers: Utils.getHeader()}
    )
  }

}
