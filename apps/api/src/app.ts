import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import { useContainer, useExpressServer } from "routing-controllers";
import { Container } from "typedi";
import { TasksController } from "./app/controllers/tasks.controller";

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({message: 'Welcome to api!'});
});

useContainer(Container);

useExpressServer(app, {
  // register created express server in routing-controllers
  controllers: [TasksController],
});

export default app;
