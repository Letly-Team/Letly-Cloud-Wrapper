import { DigitalOcean } from "./clouds/Digitalocean.ts";

const DoCli = new DigitalOcean("YOUR_TOKEN");

console.log(await DoCli.account.info());

