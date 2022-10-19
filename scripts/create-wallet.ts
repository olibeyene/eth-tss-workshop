import { BitGoAPI } from "@bitgo/sdk-api";
import { Gteth } from "@bitgo/sdk-coin-eth";

const accessToken = 'v2xe5b2a483ab2d9369561709fe491a232f61d65d487b2bc5a0dcb68c1b761b0474';
const bitgo = new BitGoAPI({
  env: 'test',
  accessToken,
});

const coinName = 'gteth';
bitgo.register(coinName, Gteth.createInstance);

const enterpriseId = '';
const label = '';
const passphrase = '';
const passcodeEncryptionCode = '';
const multisigType = 'tss'; // 'onchain' | 'tss' | 'blsdkg'
const walletVersion = 3;

async function createWallet() {

  const wallet = await bitgo.coin(coinName).wallets().generateWallet({
    enterprise: enterpriseId,
    label,
    passphrase,
    passcodeEncryptionCode,
    multisigType,
    walletVersion,
  });

  const walletInstance = wallet.wallet;
  console.log(`Wallet ID: ${walletInstance.id()}`);
  console.log(`Receive address ${walletInstance.receiveAddress()}`);
  
};

createWallet().catch(e => console.error(e));
