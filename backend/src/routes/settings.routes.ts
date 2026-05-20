import { Router } from 'express';
import * as settingsController from '../controllers/settings.controller.js';
import { adminOnly } from '../middleware/adminOnly.js';
import { validateBody } from '../middleware/validateRequest.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { appSettingsSchema } from '../validators/settings.validator.js';

export const settingsRouter = Router();

settingsRouter.use('/settings', adminOnly);

settingsRouter.get('/settings', asyncHandler(settingsController.getSettings));
settingsRouter.patch('/settings', validateBody(appSettingsSchema), asyncHandler(settingsController.updateSettings));
