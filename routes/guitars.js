import express from "express";
import { searchByBrand } from "../controllers/guitars.js";

const router = express.Router();

// http://localhost:3001/api/guitars/searchByBrand
router.get("/searchByBrand", searchByBrand);

export default router;
