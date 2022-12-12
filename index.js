const express = require("express");
const PORT = 3000;
const app = express();
const db=require('./db');
db()
const cors = require("cors");
app.use(cors())
app.use(express.json());
const indexRouter=require('./routes/index')

app.use('/', indexRouter);


app.listen(PORT, async () => {
  console.log(`Server Listeining on ${PORT}`);
});
