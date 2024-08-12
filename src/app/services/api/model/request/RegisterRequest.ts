
export class RegisterRequest {
  username?: string;
  password?: string;
  fullName?: string;
  role?: Role;
  userType?: UserType;
}
export enum Role {
  VENDOR = "VENDOR",
  CUSTOMER = "CUSTOMER"
}
export enum UserType {
  VENDOR = "VENDOR",
  CUSTOMER = "CUSTOMER"
}

