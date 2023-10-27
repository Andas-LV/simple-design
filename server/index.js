import express, { json } from "express";
import { connect, model } from "mongoose";
import { hash, compare } from "bcrypt";
import cors from "cors";
import sv from "jsonwebtoken";
const { sign, verify } = sv; 

const app = express();
app.use(json());
app.use(cors());

connect(
  "mongodb+srv://andassatybaldy:AOCLLnUWAuZ9oeU3@cluster0.whktpxa.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const User = model("User", {
  username: String,
  passwordHash: String,
});

const secret = "mySuperSecretKey123";

// Registration
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const passwordHash = await hash(password, 10);
  const user = new User({ username, passwordHash });
  await user.save();
  res.status(201).json({ message: "User registered successfully" });
});

// Login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (await compare(password, user.passwordHash)) {
    const token = sign({ username }, secret);
    return res.json({ token });
  } else {
    return res.status(401).json({ message: "Authentication failed" });
  }
});

// Protected Route
app.get("/protected", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const payload = verify(token, secret);
    res.json({
      message: `Hello, ${payload.username}! This is a protected route.`,
    });
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
