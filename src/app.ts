import dotenv from "dotenv";
dotenv.config();

import express from "express";
import usersRoute from "./routes/users.route";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/users", usersRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});