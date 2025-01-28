//--------------------------------------------- WEB APIs -------------------------------------------------------
// Web APIs are web-based, HTTP-based interfaces that allow software applications to communicate over the internet.
// They enable different systems to share data and functionality, often using HTTP protocols.

// Originally called Ajax (Asynchronous JavaScript and XML)
// But XML is now rarely used.

// Now we use AJAJ (Asynchronous JavaScript and JSON)

// AJAJ: Asynchronous JavaScript and JSON
// JSON (JavaScript Object Notation) is a format for sending data, based on JavaScript objects.
// JSON consists of key-value pairs where keys are double-quoted strings.
// Refer to json.org for detailed information on JSON.

// Sample JSON data
const data = `{
  "USD": {
    "15m": 57527.96,
    "last": 57527.96,
    "buy": 57527.96,
    "sell": 57527.96,
    "symbol": "$"
  },
  "AUD": {
    "15m": 74266.92,
    "last": 74266.92,
    "buy": 74266.92,
    "sell": 74266.92,
    "symbol": "$"
  },
  "BRL": {
    "15m": 308021.94,
    "last": 308021.94,
    "buy": 308021.94,
    "sell": 308021.94,
    "symbol": "R$"
  }
}`;

// Convert JSON string to JavaScript object using JSON.parse
const parseData = JSON.parse(data);

const USD = parseData.USD;
const lastUSD = parseData.USD.last;

// Example with JSON.parse and a reviver function
// const data = '{"USD": {"last": 1.12}}';
// const parseData = JSON.parse(data, (key, value) => {
//   if (key === 'last') return value * 2;
//   return value;
// });

// --Destructuring assignment with nested objects
// ({ USD, USD: { last: lastUSD } } = parseData);
