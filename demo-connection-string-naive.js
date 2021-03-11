const { Client } = require("pg");
require("dotenv").config();
async function doDemo() {
  //Bad practice here!
  //Good practice would be to read this string from an environment variable
  //NOT embed it in our code.

  //However, this is the simplest way to see how a pg client can be configured with a connection string

  const connectionString = process.env.DATABASE_URL;
    // "postgresql://olivianeiljones@localhost:5432/olivianeiljones"; 
    // DB url or connection string: a scrunched up config object

  const client = new Client({ //still a config object, but just 1 field
    connectionString,
    //connectionString: "postgresql://olivianeiljones@localhost:5432/olivianeiljones"; 
  });

  await client.connect();

  const result = await client.query("SELECT NOW()");
  console.log(result.rows);

  await client.end();
}

doDemo();
