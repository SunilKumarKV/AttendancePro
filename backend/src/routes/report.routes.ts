import { Router } from 'express';
import * as reportController from '../controllers/report.controller.js';
import { adminOnly } from '../middleware/adminOnly.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const reportRouter = Router();

reportRouter.use('/reports', adminOnly);

reportRouter.get('/reports/overview', asyncHandler(reportController.overview));
reportRouter.get('/reports/low-attendance', asyncHandler(reportController.lowAttendance));
reportRouter.get('/reports/monthly', asyncHandler(reportController.monthly));
reportRouter.get('/reports/export/csv', asyncHandler(reportController.csv));
reportRouter.get('/reports/export/pdf', asyncHandler(reportController.pdf));
reportRouter.get('/reports/student/:studentId', asyncHandler(reportController.student));
reportRouter.get('/reports/class/:classId', asyncHandler(reportController.classReport));
reportRouter.get('/reports/subject/:subjectId', asyncHandler(reportController.subject));
