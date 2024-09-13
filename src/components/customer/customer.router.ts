import { Router, json } from 'express';
import * as controller from './customer.controller';

const router: Router = Router();



router.get('/', controller.findAll);

router.post('/', json(), controller.create);

router.put('/:id', json(), controller.update);


export const CustomerRouter = router;