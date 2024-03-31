import { Application, Request, Response, Router } from "express";
const router = Router();

router.post("/test", (req: Request, res: Response) => {
  console.log(req.body);

  res.send("connecteeed");
});

export default router;
