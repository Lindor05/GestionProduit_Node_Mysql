import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).json( "Bienvenu sur mon serveur");
});

export default app;