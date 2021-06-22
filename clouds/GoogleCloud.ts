import { Client } from "../Client.ts";
import * as Module from "../modules/gcloud/index.ts";

export class GoogleCloud{
  public token: string;
  public client: any;

  public AppEngine: Module.AppEngine;

  constructor(token: string) {
    this.token = token;
    this.client = new Client("G_AppEngine", token);

    this.AppEngine = new Module.AppEngine(this.client);
  }
}


// todo..