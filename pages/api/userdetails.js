import User from "../../models/User"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import dbConnect from '../../mongodb/db';
dbConnect()
export default function UserDetails(req, res) {

    if (req.method === "GET") {
        fetchUserProfile(req, res)
    }
    if (req.method === "PUT") {
        updateUserProfile(req, res)
    }
}

function Authenticated(icomponent) {
    return (req, res) => {
        const { authorization } = req.headers
        console.log(authorization)
        if (!authorization) {
            return res.status(401).json({
                error: "First You must Logged In"
            })
        }

        const data = jwt.verify(authorization, process.env.JWT_SECRET)
        req.userId = data.userId
        console.log(req.userId, data)

        return icomponent(req, res)
    }
}
const fetchUserProfile = Authenticated(async(req, res) => {
    const userDetails = await User.findOne({ _id: req.userId })
    await res.status(200).json({
        success: true,
        message: "Successfully fetched profile",
        detail: userDetails
    })

})

const updateUserProfile = Authenticated(async(req, res) => {
    const { username, email, country, bgimage, yourintroline, mobilenumber, profileimage, age, gender, facebook, youtube, twitter, instagram, pinterest } = req.body
    const findUserProfile = await User.findOneAndUpdate({
            _id: req.userId
        }, {
            $set: {
                username,
                email,
                country,
                bgimage,
                yourintroline,
                profileimage,
                mobilenumber,
                age,
                gender,
                facebook,
                youtube,
                twitter,
                instagram,
                pinterest
            }
        }, {
            new: true
        }

    )

    await res.status(201).json({
        success: true,
        message: "Your Profile has successfully updated",
        findUserProfile
    })


})