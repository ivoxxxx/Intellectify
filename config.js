const dotenv = require('dotenv');
const result = dotenv.config();
const apiKey = process.env.OPENAI_API;
require('dotenv').config();

dotenv.config();

if (result.error) {
  throw result.error;
}
console.log(result.parsed);
