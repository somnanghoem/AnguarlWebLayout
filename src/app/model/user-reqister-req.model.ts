class Body {
  userID = '';
  serviceStatusCode = '';
  password = '';
  userLogin = '';
  subUserYN = '';
}

export class UserRegisterRequest {
  constructor() {
  }
  public body = new Body();
}
