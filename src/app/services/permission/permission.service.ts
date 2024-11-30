import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
class PermissionService {
  hasPermission(permission: string): boolean {
    return true
  }
}
