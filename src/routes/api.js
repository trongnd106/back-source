const express = require('express');
const router = express.Router();
const {getAllUsers, createNewUser, updateUser,deleteUser} 
    = require('../controllers/APIController')

// router.METHOD('/route', handler)

const initAPIRoute = (app) => {    //bo sung
    router.get('/users', getAllUsers)               // http:localhost:8081/api/v1/users
    router.post('/create-user', createNewUser)      // http:localhost:8081/api/v1/create-user
    router.put('/update-user', updateUser)          // http:localhost:8081/api/v1/update-user
    router.delete('/delete-user/:id', deleteUser)   // http:localhost:8081/api/v1/delete-user/2
 
    return app.use('/api/v1/', router)    //bo sung
}


module.exports = initAPIRoute
// module.exports = router;    //export default
