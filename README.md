# Eth TSS Workshop
This workshop's focus is to create Ethereum wallets and send transcations in Georli test network. 

## Set up

Create a working directory for this workshop.
```
mkdir activate
cd activate
```

Let's initialize our directory.
```
npm init -y
```

Install typescript and tsnode for developing
```
npm i typescript ts-node --save-dev
```

Initialize typescript configuration 
```
npx tsc --init
```

Create a initial file
```
touch index.ts
```

Install bitgo sdk modules
  ```
  npm i @bitgo/sdk-api @bitgo/sdk-coin-eth --save
  ```

Let's test everything is working
add the following console log to index.ts file
```
  console.log('My set up worked');
```

then run the following command
```
  npx ts-node index.ts
```

console output should be
```
  My set up worked
```

## create wallet function
```
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
```

## Sending Ether function
```
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
```

## Accelerating Transcation
```
async function sendFunds() {
  const wallet = await bitgo.coin(coinName).wallets().get({ id: walletId });

  const transaction = await wallet.sendMany({
    recipients: [
      {
        amount: amountToSend,
        address: receiverAddress,
      }
    ],
    walletPassphrase,
    type: 'acceleration',
    isTss: true,
    nonce: '0',
  });

  console.log(`Wallet ID: ${wallet.id()} `);
  console.log(`Wallet Address: ${wallet.receiveAddress()}`);
  console.log(`New Transaction: ${JSON.stringify(transaction, null, 4)}`);
}
```