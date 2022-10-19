const BitGoJS = require('bitgo');

const bitgo = new BitGoJS.BitGo({
  env: 'test'
});

// TODO
const accessToken = '';
const walletId = '';
const walletPassphrase = '';

const coin = 'gteth';
const basecoin = bitgo.coin(coin);
async function sendTx() {
  bitgo.authenticateWithAccessToken({ accessToken });
  await bitgo.unlock({ otp: '000000', duration: 3600 });

  const walletInstance = await basecoin.wallets().get({ id: walletId });

  const receiverAddress = '0x0c59a90b4cb9eeb28615f801De00777CF5f185C5';

  const amountToSend = '1';
  const transaction = await walletInstance.sendMany({
    recipients:[
      {
        amount: amountToSend,
        address: receiverAddress,
      }
    ],
    walletPassphrase: walletPassphrase,
    type: 'transfer',
    isTss: true,
  });

  console.log('Wallet ID:', walletInstance.id());
  console.log('Current Receive Address:', walletInstance.receiveAddress());
  console.log('New Transaction:', JSON.stringify(transaction, null, 4));
};

sendTx().catch((e) => console.error(e));