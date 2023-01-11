const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../conrollers/books-controller");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getbyId);
router.put("/id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
