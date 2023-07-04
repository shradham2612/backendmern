import { Router } from "express";

const router = Router();
/**import cotrollers */

import * as controller from '../controllers/controller.js';
/**Questions Routes */

router.get('/questions', controller.getQuestions)
router.post('/questions', controller.insertQuestions)
router.delete('/questions', controller.deleteQuestions)

router.get('/result', controller.getResult)
router.post('/result', controller.insertResult)
router.delete('/result', controller.deleteResult)




export default router;