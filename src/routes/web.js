const express = require('express');
const router = express.Router();
const { getHomePage, getABC, getTrong, postCreateUser, 
        getCreatePage, getUpdatePage, postUpdateUser,
        postDeleteUser, postHandleRemoveUser
    } 
    = require('../controllers/homeController')

// router.METHOD('/route', handler)

const initWebRoute = (app) => {    //bo sung
    router.get('/', getHomePage)
    router.get('/abc', getABC)   
    router.get('/trongdz', getTrong)  
    router.get('/create', getCreatePage)
    router.get('/update/:id', getUpdatePage)

    router.post('/create-user', postCreateUser)
    router.post('/update-user', postUpdateUser)
    router.post('/delete-user/:id', postDeleteUser)
    router.post('/delete-user', postHandleRemoveUser)
 
    return app.use('/', router)    //bo sung
}


module.exports = initWebRoute
// module.exports = router;    //export default
