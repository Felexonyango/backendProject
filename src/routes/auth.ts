import { Router } from 'express';

import { authorize, protect } from "../middleware/auth"
import {
  validate,
  loginValidation,
  signUpValidation,
  changePasswordValidation,
} from "../validation/index"
import { Role } from '../types';
import { changedPassword, login, signUp } from '../controller/auth';

const router = Router();
/**
 * @openapi
 * /api/auth/signUp:
 *   post:
 *     tags:
 *       - SignUp
 *     summary: create a  user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstname
 *                - lastname
 *               - email
 *               - password
 *             properties:
 *               firstname:
 *                 type: string
 *                 default: john
 *               lastname:
 *                 type: string
 *                 default:  doe
 *               email:
 *                 type: string
 *                 default: johndoe@mail.com
 *               password:
 *                 type: string
 *                 default: johnDoe20!@
 *     responses:
 *       201:
 *         description: Created
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */
router.route('/signUp').post(signUpValidation(), validate, signUp);
/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags:
 *       - login
 *     summary: login  user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               
 *               email:
 *                 type: string
 *                 default: johndoe@mail.com
 *               password:
 *                 type: string
 *                 default: johnDoe20!@
 *     responses:
 *       201:
 *         description: Created
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */

router.route('/login').post(loginValidation(), validate, login);

/**
 * @openapi
 * /api/auth/change-password:
 *   post:
 *     tags:
 *       - change-password
 *     summary: change password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               
 *               email:
 *                 type: string
 *                 default: johndoe@mail.com
 *               password:
 *                 type: string
 *                 default: johnDoe20!@
 *     responses:
 *       201:
 *         description: Created
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */


router
  .route('/change-password')
  .patch(changePasswordValidation(), validate, changedPassword);

export { router as authRoutes };
