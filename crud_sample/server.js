// ----------------------------------------------------------------------------
// Server By Express
// ----------------------------------------------------------------------------

import express    from 'express'
import bodyParser from 'body-parser'

const app  = express();
const port = 3001

// body-parserを適用
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// GET
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
app.get("/", (request, response) => {
  // do nothing ...
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// POST
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// CREATE
app.post("/api/characters", (request, response) => {
  const { name, age } = request.body;
  console.log(`Saving... name: ${name}, age: ${age}`);
  lc_database.push({id: ++lc_id, name: name, age: age});

  response.status(200).send();
  // if error occurd
  // response.status(500).send();
});

// PUT
//app.put("url", (request, response) => {
//  // do nothing ...
//});


// DELETE
//app.delete("url", (request, response) => {
//  // do nothing ...
//});

// Run Server
app.listen(port, err => {
  if (err) throw new Error(err);
  else console.log(`listening on port ${port}`)
});


// ----------------------------------------------------------------------------
// DB variable
// ----------------------------------------------------------------------------
const lc_database = [];
let   lc_id=0;

