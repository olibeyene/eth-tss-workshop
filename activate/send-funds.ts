import { bitgo, coinName } from ".";

sendFundsFromWallet({
  walletId: '',
  recipients:[
    {
      amount: '',
      address: '',
    }
  ],
  walletPassphrase: '',
  type: '',
  isTss: true,
}).catch(e => console.log(e));

async function sendFundsFromWallet(params: SendFundsFromWalletParams) {
  throw new Error('Implement me!');
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
