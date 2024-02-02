import { Router } from 'express';
import {authorize, protect } from "../middleware/auth"

import { CreateIssue, UpdateIssue, deleteIssue, getAllIssues, getAllIssuesAssigneTome } from '../controller/issue';
import { Role } from '../types';

const router = Router();
router.route('/create/issue').post(protect,authorize([Role.SYSADMIN,Role.PROJECTMANAGER,Role.USER]),CreateIssue)
router.route('/issues/all').get(protect, authorize([Role.SYSADMIN,Role.PROJECTMANAGER,Role.USER]), getAllIssues)
router.route('/issues/mine').get(protect,authorize([Role.SYSADMIN,Role.PROJECTMANAGER,Role.USER]), getAllIssuesAssigneTome);
router.route('/:id').delete(protect, authorize([Role.SYSADMIN,Role.PROJECTMANAGER,Role.USER]), deleteIssue);
router.route('/:id').patch(protect,authorize([Role.SYSADMIN,Role.PROJECTMANAGER,Role.USER]), UpdateIssue);

export { router as IssuesRoute };
