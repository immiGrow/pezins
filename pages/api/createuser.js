import User from '../../models/User'
import dbConnect from '../../mongodb/db'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Collection from '../../models/Collection';



dbConnect()

export default function createuser(req, res) {
    if (req.method === "GET") {
        res.json({
            message: "Everything is ok"
        })
    }
    if (req.method === "POST") {
        createNewUser(req, res)
    }
}
const createNewUser = async(req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        return res.json({
            success: false,
            message: "Please add all fields"
        })
    }

    const findUser = await User.findOne({
        email

    })
    if (findUser) {
        return res.json({
            error: "Sorry, A user with this email and username already exists"
        })
    }


    let salt = await bcrypt.genSalt(10)
    let secpass = await bcrypt.hash(password, salt)
    const newAddedUser = await new User({
        username,
        email,
        password: secpass

    }).save()
    await new Collection({
        user: newAddedUser._id
    }).save()

    const data = {
        userId: newAddedUser._id
    }


    const authtoken = await jwt.sign(data, process.env.JWT_SECRET)

    await res.status(200).json({
        authtoken,
        userId: data.userId
    })
}