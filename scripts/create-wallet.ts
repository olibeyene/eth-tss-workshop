import { BitGoAPI } from "@bitgo/sdk-api";
import { Gteth } from "@bitgo/sdk-coin-eth";

const accessToken = '';
const enterpriseId = '';

const bitgo = new BitGoAPI({
  env: 'test',
  accessToken,
});

const coinName = 'gteth';
bitgo.register(coinName, Gteth.createInstance);

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
