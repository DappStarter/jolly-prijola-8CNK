require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strike decrease pizza evil hockey another army giggle'; 
let testAccounts = [
"0x5f799d8488739291bde2e124108738256ace6fad4462730343d0d4fdcff19d0f",
"0x47b29e2e7726e6b5a6c9b3a96949a649a2091599e0afdac6be710564d59778d0",
"0xf5adf27049ffd56e353cd66f1a81025d8529958f8554a345fd9f26c28df2f88b",
"0xda848cb3a8702fc4fdb62d1c66cf996d061adcbb9e3d4f183b62de2184ae8b6e",
"0x3103511e22f9a8711c9f2701a4e7f7b4a988bcfb322b4fa46557653a57360e78",
"0x6ae33ffba86bec25bb53453b6f57061c46a1fd3acd165ba0d22437a6d95e416c",
"0x0e648312848d11f33856693211da336114037a451dae590313250cb8afd966e7",
"0xe53bacbffb9a8fa1c94c99587bbf0e10f46ab4b7e93623c782e4207dc8390c7b",
"0xb7cb788a11bded0ada78424dbf144ceacbeabb5f194a7fd5b6417bb0282ed776",
"0x6b195ad2b97ada72dd62470adcc245a89af8f44e9f82ccbaf129880f31b52d63"
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


