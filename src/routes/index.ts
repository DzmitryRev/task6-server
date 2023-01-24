import { Router } from "express";
import { body } from "express-validator";
import events from "events";
import mailController from "../controllers/mail-controller";

const emitter = new events.EventEmitter();

const router = Router();

router.get("/messages/:userName", mailController.getUserMessages);
router.post(
  "/message",
  body("name").not().isEmpty(),
  body("message.author").not().isEmpty(),
  body("message.message").not().isEmpty(),
  body("message.subject").not().isEmpty(),
  mailController.sendMessage
);

export default router;
