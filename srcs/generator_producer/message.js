const IOTA = require('iota.lib.js');
const Mam = require('../../libs/mam.client.js');

var iota = new IOTA({
  'provider': 'https://p101.iotaledger.net:14700'
});

let mamState = Mam.init(iota);

var display = async (message) => {
  console.log('DISPLAY');
  var str = await JSON.parse(iota.utils.fromTrytes(message));
  console.log('message: ', str);
};

async function get_message(address) {
  try {
  console.log('Address: ', address);
  var resp = await Mam.fetch(address, 'public', null, display);
  console.log('RESP: ', resp);
  return (resp);
} catch(e) {
  console.error('Error: ', e);
}
};

async function main(address) {
  // address = await get_message(address);
  // while (address.nextRoot != null) {
    console.log('');
    console.log('GET NEW MSG');
    console.log('');
    address = await get_message(address);
    console.log('NEXT: ==> ', address.nextRoot);
    setInterval(main(address.nextRoot), 60000);
  // }
};

main(process.argv[2]);
