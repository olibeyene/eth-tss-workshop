import { BitGoAPI } from "@bitgo/sdk-api";
import { Gteth } from "@bitgo/sdk-coin-eth";

// TODO
export const enterprise = '';
export const accessToken = '';

export const bitgo = new BitGoAPI({
  env: "test",
  accessToken: accessToken,
});

export const coinName = Gteth.name;
bitgo.register(coinName, Gteth.createInstance);
