import { Request, Response, Router } from "express";
import { createUser, loginUser } from "./services/UserService";
import jsonwebtoken from "jsonwebtoken";

import pg from "pg";
const router = Router();

// router.post("/user", async (req: Request, res: Response) => {
//   const user = req.body;

//   try {
//     const result = await createUser(user);
//     console.log(result);
//   } catch (e: any) {
//     if (e.constructor === pg.DatabaseError) return res.status(400).send();
//     else return res.status(400).send();
//   }

//   res.status(201).send();
// });

router.post("/login", async (req: Request, res: Response) => {
  const user = req.body;
  let email;
  try {
    const payload = await loginUser(user);
    email = payload[0].email;
    if (!email) throw "user does not exist";
  } catch (e: any) {
    if (e.constructor === pg.DatabaseError) return res.status(400).send();
    else return res.status(401).send();
  }
  const authCookie = jsonwebtoken.sign({ email }, "secret-passowrd", {
    expiresIn: "1 day",
  });

  res.cookie("auth", authCookie, {
    maxAge: 60 * 60 * 24,
    secure: true,
    httpOnly: true,
  });
  res.status(200).send();
});

export default router;
