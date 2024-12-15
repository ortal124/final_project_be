import express from 'express';
import connectDB from './utils/db';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import authRoutes from './routes/auth_route'

const app = express();
const port = process.env.PORT || 3000;
const swaggerDocument = YAML.load('./src/swagger.yaml');

connectDB();

app.use("/auth", authRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
