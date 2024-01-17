import { User } from '../models/user';
import {
  validateEmail,
  //validateMobile,
  validatePassword,
} from '@react-monorepo/design-system/validators';

import bcrypt from 'bcrypt';

import {
  userCreateSchema,
  userUpdateSchema,
  emailLoginSchema,
  //   mobileLoginSchema,
} from '@react-monorepo/shared/types';
import {
  EmailLogin,
  MeInput,
  TokenReturn,
  UserCreate,
  UserDelete,
  UserGet,
  UserGetByEmail,
  UserProtected,
  UserUpdate,
  //   LoginWithMobileInput,
} from '@react-monorepo/shared/types';

import jwt from 'jsonwebtoken';


const jwtSecret = process.env.JWT_SECRET;
export const UserService = {
  async me(input: MeInput) {
    // see if input.token has a valid jwt that is both valid and not expired, if so return a fresh token

    const { token } = input;

    const decoded = jwt.verify(token, jwtSecret);

    if (!decoded) {
      throw new Error('Invalid token');
    }
    const { email } = decoded as { email: string };

    const user = await User.findByEmail({ email });

    if (!user) {
      throw new Error('User not found');
    }

    return { token } as TokenReturn;
  },

  async create(input: UserCreate) {
    const validInput = await userCreateSchema.validateAsync(input);

    if (!validInput) {
      throw new Error('Invalid input');
    }

    const { email, password, mobile } = input;

    // see if user exists with email or mobile

    const doesEmailExistOnUser = await User.findByEmail({ email });

    if (doesEmailExistOnUser) {
      throw new Error('Email already exists');
    }

    const doesMobileExistOnUser = await User.findByMobile({ mobile });

    if (doesMobileExistOnUser) {
      throw new Error('Mobile already exists');
    }

    const emailError = !validateEmail(email);
    if (emailError) {
      throw new Error('Invalid email');
    }

    const passwordError = !validatePassword(password);
    if (passwordError) {
      throw new Error('Invalid password');
    }

    const hashedPassword = await bcrypt.hash(password, Number(jwtSecret));

    const user = await User.create({
      ...input,
      password: hashedPassword,
    });

    return user as UserProtected;
  },

  async update(input: UserUpdate) {
    const validInput = await userUpdateSchema.validateAsync(input);

    if (!validInput) {
      throw new Error('Invalid input');
    }

    const { email, password } = input;

    const emailError = !validateEmail(email);
    if (emailError) {
      throw new Error('Invalid email');
    }

    const passwordError = !validatePassword(password);
    if (passwordError) {
      throw new Error('Invalid password');
    }

    const hashedPassword = await bcrypt.hash(password, jwtSecret);

    const user = await User.update({
      ...input,
      password: hashedPassword,
    });

    return user as UserProtected;
  },

  async loginWithEmail(input: EmailLogin) {
    console.log('input', input);
    const validInput = await emailLoginSchema.validateAsync(input);

    if (!validInput) {
      throw new Error('Invalid input');
    }

    const { email, password } = input;

    const emailError = !validateEmail(email);

    if (emailError) {
      throw new Error('Invalid email');
    }

    // check password against db

    const user = await User.findByEmailWithPassword({ email });

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error('Invalid password');
    }

    console.log('user', user);
    // generate jwt
    const token = jwt.sign(
      {
        user_id: user.user_id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        mobile: user.mobile,
      },
      jwtSecret,
      {
        expiresIn: '1d',
      }
    );

    // remove password
    delete user.password;

    return { ...user, token } as UserProtected & TokenReturn;
  },

  // TODO: Set up mobile code relationship
  //   async loginWithMobile(input: LoginWithMobileInput) {
  //   },

  async findByUserId({ user_id }: UserGet) {
    const user = await User.findByUserId({ user_id });

    return user as UserProtected;
  },

  async findByEmail({ email }: UserGetByEmail) {
    const user = await User.findByEmail({ email });

    return user as UserProtected;
  },

  async delete({ user_id }: UserDelete) {
    const user = await User.delete({ user_id });

    return user as UserProtected;
  },
};
