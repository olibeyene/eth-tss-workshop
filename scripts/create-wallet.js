const BitGoJS = require('bitgo');
const bitgo = new BitGoJS.BitGo({
  env: 'test'
});

// TODO
const accessToken = '';
const enterpriseId = '';
const label = '';
const passphrase = '';
const passcodeEncryptionCode = '';
const multisigType = 'tss'; // 'onchain' | 'tss' | 'blsdkg'
const walletVersion = 3;

const coin = 'gteth';

async function createWallet() {
  bitgo.authenticateWithAccessToken({ accessToken });

  const walletOptions = {
    enterprise: enterpriseId,
    label,
    passphrase,
    walletVersion,
    multisigType,
    passcodeEncryptionCode,
  };

  const wallet = await bitgo.coin(coin).wallets().generateWallet(walletOptions);

  const walletInstance = wallet.wallet;
  console.log(`Wallet ID: ${walletInstance.id()}`);
  console.log(`Receive address: ${walletInstance.receiveAddress()}`);
}

createWallet().catch((e) => console.error(e));
