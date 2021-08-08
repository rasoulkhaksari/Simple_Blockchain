// const Block = require('./blockchain/block');
// // const block = new Block('fooz', 'bar', 'zoo', 'baz');
// // console.log(block.toString());

// // console.log(Block.genesis().toString());

// const fooBlock=Block.mineBlock(Block.genesis(),'foo');
// console.log(fooBlock.toString());

// var forge = require('node-forge');

// var forge = require('node-forge');
// forge.options.usePureJavaScript = true;
// let ed25519 = forge.pki.ed25519;

// // let rsa = forge.pki.rsa;
// let pki = forge.pki;
// // let kp= rsa.generateKeyPair({bits: 512, e: 0x10001});
// let kp = ed25519.generateKeyPair();
// console.log(kp.publicKey)
// console.log('\n');
// console.log(kp.publicKey.toString('hex'))
// console.log('\n');
// hex = forge.util.bytesToHex(kp.publicKey)
// console.log(hex)
// // console.log(new forge.util.ByteStringBuffer(hex))
// console.log(forge.util.createBuffer(hex)==kp.publicKey)

// // console.log(pki.publicKeyToAsn1(kp.publicKey))
// // console.log(kp.publicKey)


// const {ChainUtil} = require('./chain-util');

// let kp = ChainUtil.genKeyPair();
// console.log(kp.publicKey);
// console.log('\n\n\n');
// console.log(kp.publicKey.toString('hex'));
// kp.publicKey.


// a = [
//     [
//         {
//             amount: 450,
//             address: 'ae3c1c3c5f8375182c87e2c130aa39b4c1c9ecd0d62cbf772c8570cb05fbd81f'
//         },
//         { amount: 50, address: 'r3c1p13nt' }
//     ]
// ]

// b=[{adr:1,bcd:2},{adr:10,bcd:20}]
// console.log(b.find(i=>i.adr===10));

// c=[[{"a":1}],[{"a":2}]]
// c=[1,2]
// console.log(c.find(i=>i.a===1))
// c.map(i=>console.log(i[0].a))
// console.log(c.find(i=>i.find(j=>j===[0])))

// console.log(a.find(i=>i[0].address==='r3c1p13nt'));
// console.log()



/* var forge = require('node-forge');
var ed25519 = forge.pki.ed25519;
let kp=ed25519.generateKeyPair();
console.log(kp.publicKey.toString('hex'))
console.log(kp.publicKey.toString()) */


const Wallet = require('./wallet');
const wallet = new Wallet();
console.log(wallet.toString());
const wallet2 = new Wallet();
console.log(wallet2.toString());

/* const ChainUtil = require('./chain-util');
console.log(ChainUtil.genKeyPair())
console.log(ChainUtil.genKeyPair())
console.log(ChainUtil.genKeyPair())  */



/* const Blockchain = require('./blockchain');

const bc = new Blockchain();

for (let i = 0; i < 10; i++) {
    console.log(bc.addBlock(`foo ${i}`).toString());
} */