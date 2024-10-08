const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer"); // Import multer
const path = require("path");
const mysql = require("mysql2/promise");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // specify your frontend URL
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

// Set up storage for multer to store images in the 'uploads' directory
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // folder to save images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique file name
  },
});

// Multer middleware to handle image uploads
const upload = multer({ storage: storage });

async function createDatabase() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Yaksh@2222",
  });
  try {
    await connection.query("CREATE DATABASE IF NOT EXISTS myntra");
    console.log("DATABASE CREATED!!!");

    await connection.query("USE myntra");

    await connection.query(`CREATE TABLE IF NOT EXISTS product(
    id INT AUTO_INCREMENT PRIMARY KEY,
    company VARCHAR(255),
    product_details VARCHAR(255),
    current_price INT,
    original_price INT,
    discount_percentage INT,
    rating INT,
    return_date INT,
    delivery_date VARCHAR(255),
    image VARCHAR(255)
  )`);
    console.log("TABLE CREATED!!!");
  } catch (error) {
    console.log(error);
  }
}

createDatabase();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Yaksh@2222",
  database: "myntra", // Your database name
});

// Post route to add a product with image upload
app.post("/addProduct", upload.single("image"), async (req, res) => {
  const {
    company,
    product_details,
    original_price,
    discount_percentage,
    rating,
    return_date,
    delivery_date,
  } = req.body;

  const current_price =
    original_price - (discount_percentage / 100) * original_price;

  // File path for the uploaded image
  const image = req.file ? req.file.filename : null;

  const sql = `INSERT INTO product(company,
    product_details,
    current_price,
    original_price,
    discount_percentage,
    rating,
    return_date,
    delivery_date,
    image) VALUES(?,?,?,?,?,?,?,?,?)`;

  const [results] = await pool.query(sql, [
    company,
    product_details,
    current_price,
    original_price,
    discount_percentage,
    rating,
    return_date,
    delivery_date,
    image,
  ]);

  return res
    .status(201)
    .json({ message: "Product added successfully", results });
});

// Route to serve uploaded images
app.use("/uploads", express.static("uploads")); // To serve the image files

app.get("/", async (req, res) => {
  const sql = `SELECT * FROM product`;
  const [results] = await pool.query(sql);
  return res.json(results);
});

// ---------------------------------------------------------
const PORT = 7000;
app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
