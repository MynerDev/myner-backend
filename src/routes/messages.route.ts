// src/routes/messageRoutes.ts
import express from "express";
import { syncChannelMessages } from "../controllers/message.controller";
import { parseWithLocalLLM } from "../services/parser.service";

const router = express.Router();

router.post("/test_parse", async (req, res) => {
    const { message } = req.body;
    const result = await parseWithLocalLLM(message);
    res.json(result);
});

export default router;
