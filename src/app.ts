import express from 'express';
import connectDB from './utils/db';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import cors from 'cors';
import dotenv from "dotenv"
import authRoutes from "./routes/auth_routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());

app.use("/auth", authRoutes);

const swaggerDocument = YAML.load('./src/swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
