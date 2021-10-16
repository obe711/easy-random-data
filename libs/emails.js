const { getRandomInt } = require("./randomInt");
const { firstName, lastName } = require("./names");

function email() {
  return `${firstName()}${getRandomInt(100, 999)}.${lastName()}@sigconsultingservices.com`;
}

module.exports = email;
