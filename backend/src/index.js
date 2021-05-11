import http from 'http';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import api from './api';

const app = express();
app.server = http.createServer(app);

app.use(morgan('dev'));

app.use(cors());

app.use('/api', api());
app.use('/', (req, res) => res.send('app is running!'));

app.server.listen(process.env.PORT || 4000, () => {
  console.log(`Started on port ${app.server.address().port}`);
});

export default app;