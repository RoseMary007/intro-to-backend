import express from "express";

const app=express(); 


app.use(express.json());
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.router.js";


app.use("/api/users",userRoutes);
app.use("/api/posts",postRoutes);

export default app;