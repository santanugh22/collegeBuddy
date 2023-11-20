import { Router } from "express";
const router=Router()


// creating classroom
router.post('/create',)


// deleting a classroom
router.delete('/:classid')


// updating classroom details
router.put('/:classid')


// see classroom details
router.get('/:classid')


// saving materials or uploading materials in the route
router.post('/:classid')


// fetching files from a classroom
router.get('/:classid/:filename')

// deleting an material from classroom
router.delete('/:classroom/:filename')


// this is the doubt zone of the classroom

// creating a doubt for the classroom
router.post('/doubt/:classid/:user_id')








export default router
