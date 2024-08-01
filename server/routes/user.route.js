import Router from "express"
import { login, logout, register, updateProfile } from "../controllers/user.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js"
import { singleUpload } from "../middlewares/multer.js"

const router = Router()

router.route('/register').post(singleUpload ,register)
router.route('/login').post(login)
router.route('/logout').post(logout)
router.route('/profile/update').patch(isAuthenticated,updateProfile)

export default router