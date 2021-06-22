export class Droplets {
  private client: any;

  constructor(client: any) {
    this.client = client.request;
    Object.assign(this, client);
  }

  public all() {
    return this.client("droplets");
  }
}
