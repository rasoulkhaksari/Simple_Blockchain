const Wallet = require('./index');
const TransactionPool = require('./transaction-pool');
const Blockchain = require('../blockchain');
const { INITIAL_BALANCE } = require('../config');

describe('Wallet', () => {
    let wallet, tp, bc;
    beforeEach(() => {
        wallet = new Wallet();
        tp = new TransactionPool();
        bc = new Blockchain();
    });

    describe('create a transaction', () => {
        let transaction, sendAmount, recipient;
        beforeEach(() => {
            sendAmount = 50;
            recipient = 'r4nd0m-4ddr355';
            transaction = wallet.createTransaction(recipient, sendAmount, bc, tp);
        });
        describe('and doing the same transaction', () => {
            beforeEach(() => {
                wallet.createTransaction(recipient, sendAmount, bc, tp);
            });

            it('doubles the `sendAmount` subtracted from the wallet balance', () => {
                expect(transaction.outputs.find(o => o.address === wallet.publicKey).amount).toEqual(wallet.balance - sendAmount * 2);
            });

            it('clones the `sendAmount` output for the recipient', () => {
                expect(transaction.outputs.filter(o => o.address === recipient).map(o => o.amount)).toEqual([sendAmount, sendAmount]);
            });
        });
    });

    // describe('calculating a balance', () => {
    //     let addBalance, repeatAdd, senderWallet;
    //     beforeEach(() => {
    //         senderWallet = new Wallet();
    //         addBalance = 100;
    //         repeatAdd = 1;
    //         for (let i = 0; i < repeatAdd; i++) { senderWallet.createTransaction(wallet.publicKey, addBalance, bc, tp); }
    //         bc.addBlock(tp.transactions);
    //     });


    //     it('wallet initial balance', () => {
    //         // console.log(senderWallet);
    //         // console.log(bc);    
    //         expect(wallet.calculateBalance(bc)).toEqual(INITIAL_BALANCE+(addBalance * repeatAdd));
    //     });

    //     // it('calculates the balance for blockchain transactions matching the recipient', () => {
    //     //     expect(wallet.calculateBalance(bc)).toEqual(INITIAL_BALANCE + (addBalance * repeatAdd));
    //     // });

    //     // it('calculates the balance for blockchain transactions matching the sender', () => {
    //     //     expect(senderWallet.calculateBalance(bc)).toEqual(INITIAL_BALANCE - (addBalance * repeatAdd));
    //     // });

    // });


});