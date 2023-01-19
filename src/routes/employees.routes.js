import { Router } from "express";
import {getEmployees, postEmployees, updateEmployees, delEmployees, getEmployee} from '../controllers/employees.controllers.js'

const router = Router()

router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)

router.post('/employees', postEmployees)

router.patch('/employees/:id', updateEmployees)

router.delete('/employees/:id', delEmployees)


export default router