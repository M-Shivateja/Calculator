const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Signup Logic
exports.signup = async (req, res) => {
  const { name, email, password, operator } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, operator });
    await user.save();
    res.status(201).json({ message: "User registered" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
};

// Login Logic
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      operator: user.operator,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
};
