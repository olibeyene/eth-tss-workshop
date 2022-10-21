import { bitgo, coinName, enterprise } from ".";

createWallet({
  label: '',
  passphrase: '',
  passcodeEncryptionCode: '',
  enterprise,
  multisigType: 'tss',
  walletVersion: 3,
}).catch(e => console.log(e));

async function createWallet(params: CreateWalletParams) {
  throw new Error('Implement me!');
}

interface CreateWalletParams {
  label: string;
  passphrase: string;
  passcodeEncryptionCode: string;
  enterprise: string;
  walletVersion?: number;
  multisigType?: "onchain" | "tss" | "blsdkg";
}
