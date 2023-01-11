const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ books });
};

const getbyId = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "No Book found" });
  }
};

const addBook = async (req, res, next) => {
  // const { name, author, description, price, available, image } = req.body;
  // let book;
  // console.log(req.body);

  try {
    const book = await Book.create(req.body);
    // let book = new Book(
    //   req.body
    //   // name,
    //   // author,
    //   // description,
    //   // price,
    //   // available,
    //   // image,
    // );
    // await book.save();
    if (book) {
      console.log(`saved`);
    } else {
      console.log(`not saved`);
    }
  } catch (err) {
    console.log(err);
  }
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable to Update by this ID" });
  }
  return res.status(201).json({ book });
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable to Delete by this ID" });
  }
  return res.status(200).json({ message: "Product successfully Deleted" });
};
exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getbyId = getbyId;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
