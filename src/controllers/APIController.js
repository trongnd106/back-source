const connection = require('../config/database');

const getAllUsers = async (req,res) => {
    let [results, fields] = await connection.query('Select * from Users');

    return res.status(200).json({
        message: 'ok',
        data: results
    })
}

const createNewUser = async (req,res) => {
    let {email, name, city} = req.body
    if (!email || !name || !city){
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await connection.query(
        `Insert into Users (email, name, city) 
         values (?, ?, ?)`,[email, name, city]
    )
    return res.status(200).json({
        message: 'ok'
    })
}

const updateUser = async (req,res) => {
    let {id, email, name, city} = req.body
    if (!id || !email || !name || !city){
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await connection.query(
        `Update Users set email = ?, name = ?, city = ?
        where id = ?`, [email, name, city, id]
    )
    return res.status(200).json({
        message: 'ok'
    })
}

const deleteUser = async (req,res) => {
    let userId = req.params.id
    if(!userId){
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await connection.query(
        `Delete from Users where id = ?`, [userId]
    )
    return res.status(200).json({
        message: 'ok'
    })
}

module.exports = {getAllUsers, createNewUser, updateUser,deleteUser}