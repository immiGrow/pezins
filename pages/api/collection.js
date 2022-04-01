import dbConnect from '../../mongodb/db'
import Authenticated from '../../middleware/Authenticated'
import Collection from '../../models/Collection'
dbConnect()
export default function UserCollection(req, res) {
    if (req.method === "GET") {
        fetchUserCollection(req, res)
    }
    if (req.method === "PUT") {
        userCollectionCreate(req, res)
    }
}
const fetchUserCollection = Authenticated(async(req, res) => {
    const getCollect = await Collection.findOne({ user: req.userId })
        .populate("Images.ImageId")



    await res.status(200).json({
        success: true,
        getCollect
    })
})
const userCollectionCreate = Authenticated(async(req, res) => {
    const { photoId } = req.body
    const findExist = await Collection.findOne({
        Images: {
            $elemMatch: {
                ImageId: photoId
            }
        }
    })
    if (findExist) {
        await res.status(409).json({
            success: false,
            message: "Image already exists in your collection"
        })
    }

    const pushObj = {
        ImageId: photoId
    }
    const userFind = await Collection.findOneAndUpdate({ user: req.userId }, {
        $push: {
            Images: pushObj


        },

    }, {
        new: true
    })

    await res.status(200).json({
        success: true,
        message: "Added to Collection",
        userFind
    })
})