import dbConnect from '../../mongodb/db';

import AllPhotos from '../../models/AllPhotos';
import User from '../../models/User'
import Authenticated from '../../middleware/Authenticated'

dbConnect()
export default function UploadAllPhotos(req, res) {

    if (req.method === "GET") {
        fetchPhoto(req, res)
    }

    if (req.method === "PUT") {
        saveNewPhoto(req, res)
    }
}


const saveNewPhoto = Authenticated(async(req, res) => {
    const { imagename, category, tags, imageURL } = req.body
    if (!imagename || !category || !tags || !imageURL) {
        return res.status(400).json({
            error: 'Please add all the field'
        })
    }

    const photoUploadedUser = await User.findOne({ _id: req.userId })


    const newPhoto = await new AllPhotos({
        uploaderId: photoUploadedUser._id,
        uploadername: photoUploadedUser.username,
        uploaderprofileimage: photoUploadedUser.profileimage,
        imagename,
        category,
        tags,
        imageURL
    }).save()



    await res.status(200).json({
        message: "Successfully Uploaded ",
        success: true


    })
})
const fetchPhoto = Authenticated(async(req, res) => {

    const data = await AllPhotos.find({ uploaderId: req.userId })
    await res.status(200).json({
        success: true,
        data
    })

})