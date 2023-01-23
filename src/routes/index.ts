import { Router } from "express";
import { body } from "express-validator";

const router = Router();

router.get("/messages");
router.post("/login");
router.put("/message");

export default router;
