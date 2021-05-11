import { Router } from 'express';
import { version } from '../../package.json';

import pixels from './pixels';

export default () => {
  const api = Router({mergeParams: true});

  api.use('/pixels', pixels(api));
  
  api.get('/', (req, res) => {
    res.json(version);
  });

  return api;
}