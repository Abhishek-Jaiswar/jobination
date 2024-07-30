import Router from 'express'
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { applyToJobs, getApplicatsForAdmin, getAppliedJobs, updateStatus } from '../controllers/application.controller.js';

const router = Router()

router.route('/apply/:id').post( isAuthenticated, applyToJobs);
router.route('/getappliedjobs').get(isAuthenticated, getAppliedJobs);
router.route('/:id/applicants').get(isAuthenticated, getApplicatsForAdmin);
router.route('/status/:id/update').patch(isAuthenticated, updateStatus)

export default router