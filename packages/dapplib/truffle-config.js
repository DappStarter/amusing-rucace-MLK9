require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note six property gesture brass equal gesture'; 
let testAccounts = [
"0x9b8f747362cee16155749359c3ef603ee1855fad4c30ff4c8fcd8fdabd9264f5",
"0xcd3a869dbd5c155facb28280e5e55bfe532cfc4531cb68d844b741f040006261",
"0x1f00b7a942783159d70c9524f35acd0372409138f82879e7784138a6519eb874",
"0x03b6b0e55a61ef10bd03170837c8d4efca49171b0c514c5f2154cc4b5e3308e9",
"0x9c5ef5b56635472f2b437a1bd1dd48bc9500c4b0a830d4de0804435107458fc1",
"0xc15fd39feb388158d03ec485c8aa8bc5c9053b3bb75f2fe9c9e735fcd01d2943",
"0xfddb22fedfb0444953e4ffc2aa6cf00eca96f2000b1dd727ff459d7fa438a2e0",
"0x133f41b23a1635657dc24a4f520cd0b4c3bc046e48e5c3594ff16b3ffbebba5a",
"0xfce3e579656de4669acc6aaae2e18c2a9214db6deb3ba60914eadfce5d60b741",
"0x7208a9045bf7d9e2f3f6d1465671ac1e30edb1d4f2dcacbbd6ad765e27ba367c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


