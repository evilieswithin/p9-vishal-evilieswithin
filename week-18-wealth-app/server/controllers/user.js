import People from '../models/People.js';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await People.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        email: user.email,
      },
      'secret'
    );
    return res.json({ status: 'ok', token: token, user: user });
  } else {
    return res.json({ status: 'error', user: null });
  }
};

export const signUp = async (req, res) => {
  const { email, password } = req.body;

  const user = await People.findOne({
    email: email,
  });

  if (user) {
    res.json({ status: 'error', error: 'Duplicate email' });
  } else {
    const user = await People.create({
      email: email,
      password: password,
      id: uuidv4(),
    });

    res.json({ status: 'ok', message: 'user created', user: user });
  }
};
