import { Router } from 'express';
import { router as v1 } from './routes/get-expense';
import '@nc/utils/async';

export const router = Router();

router.use('/v1', v1);