import { setEnvironment } from './util/config.js';

setEnvironment();

const options = {
  ssl: Boolean(process.env.POSTGRES_URL),
};

export default options;
