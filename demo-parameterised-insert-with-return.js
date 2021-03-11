const { Client } = require("pg");

console.log(process.env.PGDATABASE); //can change the environment variable in the terminal: export PGDATABASE=omdb

async function doDemo() {
  const client = new Client(); //defaults to localhost: creating a DEFAULT config object by accessing ENVIRONMENT VARIABLES (that i don't have to specify i a .env file - they already exist!!)
  await client.connect();

  const text =
    "INSERT INTO words(word, category_id) VALUES($1, $2) RETURNING * "; //the numbering is important
  const values = ["invorio", 1]; //values are ordered

  const res = await client.query(text, values); //query method is built up with these parameters!

  //The returning clause causes the newly created row to be returned
  //including, for example, any auto-assigned ID.
  console.log(res.rows[0]); //don't even need the index in this case because you're only inserting 1 row!

  await client.end();
}

doDemo();
