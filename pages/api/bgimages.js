import Authenticated from '../../middleware/Authenticated'
import User from '../../models/User'
import dbConnect from '../../mongodb/db'
dbConnect()
export default async function bgImagesUpdater(req, res) {
    if (req.method === "DELETE") {
        DeleteBGImage(req, res)
    }
    if (req.method === "PUT") {
        bgMakerArray(req, res)
    }
}
const bgMakerArray = Authenticated(async(req, res) => {
    const { PhotoURL } = req.body
    const pushObj = {
        PhotoURL
    }
    const findUser = await User.findOneAndUpdate({ _id: req.userId }, {
        $push: {
            UPhotos: pushObj
        },
        new: true
    })

    await res.status(200).json({
        success: true,
        message: "Photo Uploaded Successfully",
        findUser
    })

})

const DeleteBGImage = Authenticated(async(req, res) => {

    const { deleteId } = req.body
    console.log(deleteId)
    const Userbg = await User.findOneAndUpdate({ _id: req.userId }, {
        $pull: {
            UPhotos: {
                _id: deleteId
            }
        },

    })
    await res.status(200).json({
        success: true,
        message: "Photo has been Deleted Successfully",
        Userbg
    })

})