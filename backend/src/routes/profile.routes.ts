import { Router } from 'express';
import * as profileController from '../controllers/profile.controller.js';
import { authenticate } from '../middleware/auth.js';
import { validateBody } from '../middleware/validateRequest.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { profilePasswordSchema, profileUpdateSchema } from '../validators/profile.validator.js';

export const profileRouter = Router();

profileRouter.use('/profile', authenticate);

profileRouter.get('/profile/me', asyncHandler(profileController.me));
profileRouter.patch('/profile/me', validateBody(profileUpdateSchema), asyncHandler(profileController.updateMe));
profileRouter.patch('/profile/password', validateBody(profilePasswordSchema), asyncHandler(profileController.updatePassword));
