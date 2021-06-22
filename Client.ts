import { RequestMethod } from "./types.ts";

export class Client {
  public token: string;
  public apiUrl: string;
  public apiUrls: { [key: string]: string } = {
    digitalocean: "https://api.digitalocean.com/v2/",
    G_AppEngine: "https://appengine.googleapis.com"
  };

  constructor(provider: string, token: string) {
    this.token = token;
    this.apiUrl = this.apiUrls[provider];
  }

  public async request(
    url: string,
    options: {
      method?: RequestMethod;
      body?: BodyInit;
      isRetry?: Boolean;
    },
  ): Promise<any> {
    console.log(this.token)
    console.log(this.apiUrl + url);
    const res = await fetch(this.apiUrl + url, {
      method: options?.method || "GET",
      headers: {
        "Authorization": `Bearer ${this.token}`,
        "content_type": "application/json",
      },
      body: options?.body,
    });
    if (res.status === 403 && options.isRetry === false) {
      const xcsrf = res.headers.get("x-csrf-token");
      if (!xcsrf) {
        return res.json();
      }

      options["isRetry"] = true;
      return await this.request(url, options);
    } else {
      if (res.ok) {
        return res.json();
      }
    }
  }
}
