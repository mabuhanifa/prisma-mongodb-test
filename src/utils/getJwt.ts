import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const getJwtTokens = (userId: string) => {
  return jwt.sign(
    {
      userId: userId,
    },
    String(process.env.JWT_SECRET),
    { expiresIn: "7d" }
  );
};

export default getJwtTokens;
