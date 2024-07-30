import Router from 'express'
import { getCompany, getCompanyById, registerCompany, updateCompany } from '../controllers/company.controller.js'
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = Router()

router.route('/register-company').post( isAuthenticated, registerCompany);
router.route('/get').get(isAuthenticated, getCompany);
router.route('/get/:id').get(isAuthenticated, getCompanyById)
router.route('/update/:id').patch(isAuthenticated, updateCompany)

export default router