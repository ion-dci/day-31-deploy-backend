import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import guitarsRoute from "./routes/guitars.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 5000;
const clientUrl = "http://localhost:5000";

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("Database connected successfully! 🥳");
  })
  .catch((error) => {
    console.log("Database connected failed ☹️");
    console.log(error);
  });

app.use("/api/guitars", guitarsRoute);

// !! Your middleware should not go below this line !!
// Serve frontend client/build folder
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
  console.log(`Visit ${clientUrl} in your browser`);
});
