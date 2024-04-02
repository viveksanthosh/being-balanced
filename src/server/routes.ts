import { Request, Response, Router } from "express";
import { createUser } from "./services/UserService";

import pg from "pg";
const router = Router();

router.post("/user", async (req: Request, res: Response) => {
  const user = req.body;

  try {
    const result = await createUser(user);
    console.log(result);
  } catch (e: any) {
    if (e.constructor === pg.DatabaseError) return res.status(400).send();
    else return res.status(400).send();
  }

  res.status(201).send();
});

export default router;
