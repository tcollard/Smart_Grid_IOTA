const batteryFactory = require('./battery.js');


async function main() {
  const seed = 'KQH9XXWTECCVZFIMFZHAYRE9VLVXIZMTMJSENWKPGENBKRPYKOUPXMLMMYTCFYZZEQHMXJMLIIQSASBVF';

  let  battery = batteryFactory(seed, 1, 0.1);

  await battery.trade();
}

main();
