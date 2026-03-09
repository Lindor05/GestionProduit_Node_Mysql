import express from "express";
import authRoutes from "./routes/auth.rout.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
    res.status(403).json( "Access denied" );
});


app.use("/api/auth", authRoutes);

export default app;