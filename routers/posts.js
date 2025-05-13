// baseline
const express = require("express");
const router = express.Router();

//importo data
let { posts } = require("../data/posts.js");

// definizione delle rotte

// INDEX (base, indice insomma)
// .get
router.get("", (req, res) => {
  res.json("Lettura sul blog dei posts.");
});

// SHOW (QUI PER LO SPECIFICO POST)
// .get
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json("Lettura sul blog del post " + id);
});

// STORE (qui si crea nuovo post)
// .post
router.post("", (req, res) => {
  res.json("Creazione sul blog di un nuovo post.");
});

// UPDATE (qui si sostituisce un post del blog)
// .put
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json("Sostituzione sul blog del post " + id);
});

// MODIFY (qui si modifica un post del blog)
// .patch
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.json("Modifica sul blog del post " + id);
});

// DESTROY (con questo si elimina un post)
// .delete
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json("Eliminazione sul blog del post " + id);
});

// export router

module.exports = router;
