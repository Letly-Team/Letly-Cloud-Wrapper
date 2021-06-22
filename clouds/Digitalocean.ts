import { Client } from "../Client.ts";
import * as Module from "../modules/digitalocean/index.ts";

export class DigitalOcean{
  public token: string;
  public client: any;

  public account: Module.Account;
  public droplets : Module.Droplets;

  constructor(token: string) {
    this.token = token;
    this.client = new Client("digitalocean", token);

    this.account = new Module.Account(this.client);
    this.droplets = new Module.Droplets(this.client);
  }
}
