import { BitGoAPI } from "@bitgo/sdk-api";
import { Gteth } from "@bitgo/sdk-coin-eth";

const accessToken = '';

const bitgo = new BitGoAPI({
  env: 'test',
  accessToken
});

const coinName = 'gteth';

bitgo.register(coinName, Gteth.createInstance);

const walletId = '';
const walletPassphrase = '';
const receiverAddress = '';
const amountToSend = '1'; // 1 wei
async function sendFunds() {
  bitgo.unlock({ otp: "000000", duration: 3600 });
  const wallet = await bitgo.coin(coinName).wallets().get({ id: walletId });

  const transaction = await wallet.sendMany({
    recipients: [
      {
        amount: amountToSend,
        address: receiverAddress,
      }
    ],
    walletPassphrase,
    type: 'transfer',
    isTss: true,
  });

  console.log(`Wallet ID: ${wallet.id()} `);
  console.log(`Wallet Address: ${wallet.receiveAddress()}`);
  console.log(`New Transaction: ${JSON.stringify(transaction, null, 4)}`);
}

sendFunds().catch(e => console.error(e));