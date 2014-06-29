var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.livenet = {
  name: 'livenet',
  magic: hex('fdc2b8dd'),
  addressVersion: 0x35,
  privKeyVersion: 181,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e, //Neutrino: Used for the version when creating extended keys using BIP32. Not presently relevant.
  hkeyPrivateVersion: 0x0488ade4, //Neutrino: Used for the version when creating extended keys using BIP32. Not presently relevant.
  genesisBlock: {
    hash: hex('E77AF92F6432F6AEDB8D899CA25E402815B88B05101E5ABFFA4F21EB07DFFAD4'),
    merkle_root: hex('229AA68D953A7ADC41B8178280D033EC91189F0B33CBB1B07D13CF6AC8B7B5D5'),
    height: 0,
    nonce: 177184,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1396290660,
    bits: 504365040,
  },
  dnsSeeds: [],
  defaultClientPort: 8777
};

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf, //Neutrino: Used for the version when creating extended keys using BIP32. Not presently relevant.
  hkeyPrivateVersion: 0x04358394, //Neutrino: Used for the version when creating extended keys using BIP32. Not presently relevant.
  genesisBlock: {
    hash: hex(''),
    merkle_root: hex(''),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [],
  defaultClientPort: 18777
};
