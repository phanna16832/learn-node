import express from "express";

const app = express();

// Register EJS as the template engine
app.set("view engine", "ejs");

// Define a route
app.get("/", (req, res) => {
  res.render("home"); // Ensure you have a "views/home.ejs" file
});

// Set the port to work with Vercel or locally
const PORT = process.env.PORT || 8000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
