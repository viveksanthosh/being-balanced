import { Request, Response, Router } from "express";
import { createUser } from "./services/UserService";
const router = Router();

router.post("/user", async (req: Request, res: Response) => {
  const user = req.body;

  try {
    const result = await createUser(user);
    console.log(result);
  } catch (e) {}

  res.send(200);
});

export default router;
