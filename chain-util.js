const SHA256 = require('crypto-js/sha256');

// var forge = require('node-forge');
// forge.options.usePureJavaScript = true;
// let ed25519 = forge.pki.ed25519;
// let rsa = forge.pki.rsa;


const EC = require('elliptic').ec;
const uuid = require('uuid');
const ec = new EC('secp256k1');

class ChainUtil {
    static genKeyPair() {
        // return rsa.generateKeyPair({bits: 256, e: 0x10001});
        // return ed25519.generateKeyPair();
        return ec.genKeyPair();
        // return null;
    }

    static id() {
        return uuid.v1();
    }

    static hash(data) {
        return SHA256(JSON.stringify(data)).toString();
    }

    static verifySignature(publicKey, signature, dataHash) {
        return ec.keyFromPublic(publicKey, 'hex').verify(dataHash, signature);
        // return ed25519.verify({
        //     message: dataHash,
        //     encoding: 'utf8',
        //     signature: signature,
        //     publicKey: ed25519. //publicKey
        // });
    }
}

module.exports = { ChainUtil };


