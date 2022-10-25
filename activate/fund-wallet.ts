import { bitgo, coinName } from ".";

// TODO
const walletAddress = '';


fundWallet({
  walletId: '6357f0d25fe3f4000732360784f4eaf8',
  recipients:[
    {
      amount: '300000000000000000', // 0.3 gteth
      address: walletAddress,
    }
  ],
  walletPassphrase: 'abcd',
  type: 'transfer',
  isTss: true,
}).catch(e => console.log(e));

async function fundWallet(params: SendFundsFromWalletParams) {
  bitgo.unlock({ otp: "000000", duration: 3600 });
  const wallet = await bitgo.coin(coinName).wallets().get({ id: params.walletId });

  const transaction = await wallet.sendMany({...params});

  console.log(`Wallet ID: ${wallet.id()} `);
  console.log(`Wallet Address: ${wallet.receiveAddress()}`);
  console.log(`New Transaction: ${JSON.stringify(transaction, null, 4)}`);
}

interface SendFundsFromWalletParams {
  walletId: string;
  recipients?: {
    address: string;
    amount: string | number;
    feeLimit?: string;
    data?: string;
    tokenName?: string;
  }[];
  walletPassphrase: string;
  type?: string;
  isTss?: boolean;
  feeOptions?: {
    maxFeePerGas: number;
    maxPriorityFeePerGas: number;
  };
  nonce?: string;
}
