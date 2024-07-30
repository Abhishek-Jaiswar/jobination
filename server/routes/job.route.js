import Router from 'express'
import { getAdminPostedJob, getJob, getJobById, postJob, updateJob } from '../controllers/job.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = Router();

router.route('/post-job').post(isAuthenticated, postJob);
router.route('/getjobs').get(isAuthenticated, getJob);
router.route('/getjobs/:id').get(isAuthenticated, getJobById);
router.route('/getadminjobs').get(isAuthenticated, getAdminPostedJob);
router.route('/updatejob/:id').patch(isAuthenticated, updateJob)

export default router;