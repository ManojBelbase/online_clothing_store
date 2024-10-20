import { User } from "../Model/user.model.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  const { email } = req.body;
  try {
    const check = await User.findOne({ email: email });

    if (check) {
      return res
        .status(400)
        .json({ success: false, error: "This email is already exist" });
    }

    let Cart = {};
    for (let i = 0; i < 300; i++) {
      Cart[i] = 0;
    }

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      cardData: Cart,
    });

    await user.save();

    const data = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
    res.json({ success: true, token, user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// login user

export const loginUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      let passCompare = req.body.password === user.password;

      if (passCompare) {
        const data = {
          user: {
            id: user.id,
          },
        };
        const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
        res.json({ success: true, token, user });
      } else {
        res.json({ errors: "Password doesnot match" });
      }
    } else {
      res.json({ errors: "Email doesnot match" });
    }
  } catch (error) {
    res.status(500).json({ success: false, errors: "Internal server error" });
  }
};
