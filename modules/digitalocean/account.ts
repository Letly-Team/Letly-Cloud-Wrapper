export class Account {
  private client: any;

  constructor(client: any) {
    this.client = client.request;
    Object.assign(this, client);
  }

  public info() {
    return this.client("account");
  }
}
