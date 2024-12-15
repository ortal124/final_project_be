import express from 'express';
import connectDB from './utils/db';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const swaggerDocument = YAML.load('./src/swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
