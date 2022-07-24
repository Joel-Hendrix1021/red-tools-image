const UserService = require("./user.service");
const bcrypt = require("bcrypt");
const { generateToken, destroyToken } = require("../utils");

class AuthService {
  async register ({ user }) {
    try {
      const userFoundEmail = await UserService.getUserByEmail(user.email);
      if (userFoundEmail) {
        throw new Error(`User with this email ${user.email} already`);
      }

      const hashedPassword = await bcrypt.hash(user.password, 10);
      const userSave = await UserService.createUser({ ...user, password: hashedPassword });
      const tokenData = await generateToken(userSave);
      return {
        token: tokenData
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  async login ({ email, password }) {
    try {
      const existedUserEmail = await UserService.getUserByEmail(email);
      if (!existedUserEmail) { throw new Error("credentails incorret"); }

      const matchPasword = await bcrypt.compare(password, existedUserEmail.password);

      if (matchPasword) {
        const token = await generateToken(existedUserEmail);
        return token;
      } else throw new Error("credentails incorret");
    } catch (error) {
      throw new Error(error);
    }
  }

  async logout (req) {
    const authLogout = req.headers.authorization;
    const islogout = await destroyToken(authLogout);
    return islogout;
  }
}

module.exports = new AuthService();