const { httpError } = require('../helpers/hanledeError')
const { encrypt, compare } = require('../helpers/Bcript')
const { tokenSign } = require('../helpers/token')
const userModel = require('../models/user')





const signup = async (req, res) => {

    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })

        if (!user) {
            res.status(404)
            res.send({ error: 'User not found' })
        }

        const checkPassword = await compare(password, user.password) //TODO: Contraseña!

        //TODO JWT 👉
        const tokenSession = await tokenSign(user) //TODO: 2d2d2d2d2d2d2

        if (checkPassword) { //TODO Contraseña es correcta!
            res.send({
                data: user,
                tokenSession
            })
            return
        }

        if (!checkPassword) {
            res.status(409)
            res.send({
                error: 'Invalid password'
            })
            return
        }

    } catch (e) {
        httpError(res, e)
    }
};



const signin = async (req, res) => {
    try {
        //TODO: Datos que envias desde el front (postman)
        const { email, password, name } = req.body



        const passwordHash = await encrypt(password) //TODO: (123456)<--- Encriptando!!

        const registerUser = await userModel.create({
            email,
            name,
            password: passwordHash
        })

        res.send({ data: registerUser })

    } catch (e) {
        res.json(`paso algo ${e}`)
    }
}







module.exports = { signup, signin }