import { serve } from "inngest/express";
import { inngest, functions } from "../inngest/index.js";
import connectDB from "../configs/db.js";

// Initialize database connection (important for Inngest functions that interact with DB)
connectDB();

export default serve({ client: inngest, functions });
