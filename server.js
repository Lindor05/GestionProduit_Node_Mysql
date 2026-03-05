import app from './app.js';
import dotenv from 'dotenv';
import { sequelize } from './models/index.js';

dotenv.config();

sequelize.sync({force: false}) // paramettre force: false pour éviter de supprimer les données existantes
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is available  on port ${process.env.PORT}`);
    });
})


export default app;