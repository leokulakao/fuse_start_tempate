export class SignUpModel {
  public email: String;
  public password: String;

  constructor(data: any) {
      this.email = data.email || null;
      this.password = data.password || null;
  }
}
