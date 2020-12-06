import { Router } from 'express';
import Search from './search';
import Tradutor from './traduccion'
import Translate from './traducao';

const routes = Router();


routes.use('/search', Search);
routes.use('/traduction', Tradutor);
routes.use('/traducao', Translate);

export default routes;
