import bcrypt from 'bcryptjs';
import User from '../../models/User';
import dbConnect from '../../mongodb/db'
import jwt from 'jsonwebtoken';
dbConnect()
export default async function loginUser(req, res) {

    if (req.method === "POST") {
        const { email, password } = req.body
        if (!email || !password) {
            return res.json({
                success: false,
                message: "Please Login with correct credentials"
            })
        }


        const logUser = await User.findOne({ email })
        if (!logUser) {
            return res.json({
                success: false,
                message: "Please Login with correct credentials"
            })
        }
        const passCompare = await bcrypt.compare(password, logUser.password)
        if (!passCompare) {
            return res.status(400).json({
                success: false,
                message: "Please Login with correct credentials"
            })
        }


        const data = {
            userId: logUser._id
        }


        const authtoken = await jwt.sign(data, process.env.JWT_SECRET)

        await res.status(200).json({
            success: true,
            authtoken,
            userId: data.userId
        })





    }
}