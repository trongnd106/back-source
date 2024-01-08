const connection = require('../config/database');
const {getAllUsers, getUserById, 
    updateUserById, deleteUserById} = require('../services/CRUDService')

const getHomePage = async (req, res) => {
    // let users = []; 
    // // query
    // connection.query(
    //     'select * from Users u',
    //     function(err, results, fields) {
    //         users = results;
    //         console.log(">>>results home page = ", results); // results contains rows returned by server
    //         res.send(JSON.stringify(users));
    //     }
    // );
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results})    // x <- y
}

const getABC = (req, res) => {
    res.send('Check ABC')
}

const getTrong = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req,res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    // // let {email, name, city} = req.body

    // connection.query(
    //     ` INSERT INTO Users (email, name, city) 
    //       VALUES (?, ?, ?) `,
    //     [email, name, city],
    //     function(err, results) {
    //         // console.log(results)
    //         res.send('Create user succeed!')
    //     }
    // )

    // let {email, name, city} = req.body
    let [results, fields] = await connection.query(
        ` INSERT INTO Users (email, name, city) 
          VALUES (?, ?, ?) `, [email, name, city]
    );
    // res.send('Created user succeed!')
    res.redirect('/')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId)
    res.render('edit.ejs', {userEdit: user})
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

    await updateUserById(email, city, name, userId)
    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId)
    res.render('delete.ejs', {userEdit: user})
}

const postHandleRemoveUser = async (req, res) => {
    let id = req.body.userId
    await deleteUserById(id)
    res.redirect('/')
}

module.exports = {
    getHomePage, getABC, getTrong, postCreateUser, 
    getCreatePage, getUpdatePage, postUpdateUser,
    postDeleteUser, postHandleRemoveUser
}