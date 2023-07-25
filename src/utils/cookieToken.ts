import { Response } from "express";
import getJwtTokens from "./getJwt";

const cookieToken = (user: User, res: Response) => {
  const token = getJwtTokens(user?.id);
  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  const { password, ...rest } = user;
  res.status(200).cookie("token", token, options).json({
    success: true,
    token,
    user: rest,
  });
};

export default cookieToken;
