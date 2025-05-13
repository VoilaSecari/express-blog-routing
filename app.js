//base x impostare express

const express = require("express");
const app = express();
const port = 3000;

//importo router
const blogRouter = require("./routers/posts.js");

// routers
app.use("/posts", blogRouter);

//implementazione servizio public

app.use(express.static("public"));

// ascolto

app.listen(port, () => {
  console.log("Server in ascolto alla porta " + port);
});
