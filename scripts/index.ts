async function createWallet(params: CreateWalletParams) {
  const wallet = await bitgo.coin(coinName).wallets().generateWallet({
    ...params
  });

  const walletInstance = wallet.wallet;
  console.log(`Wallet ID: ${walletInstance.id()}`);
  console.log(`Receive address ${walletInstance.receiveAddress()}`);
}

async function sendFundsFromWallet(params: SendFundsFromWalletParams) {
  bitgo.unlock({ otp: "000000", duration: 3600 });
  const wallet = await bitgo.coin(coinName).wallets().get({ id: params.walletId });

  const transaction = await wallet.sendMany({...params});

  console.log(`Wallet ID: ${wallet.id()} `);
  console.log(`Wallet Address: ${wallet.receiveAddress()}`);
  console.log(`New Transaction: ${JSON.stringify(transaction, null, 4)}`);
}