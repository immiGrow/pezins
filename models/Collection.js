import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types
const UserCollection = new mongoose.Schema({

    user: {
        type: ObjectId,
        ref: "User"
    },
    Images: [{
        ImageId: {
            type: ObjectId,
            ref: 'AllPhotos'

        }
    }]


});
export default mongoose.models.Collection || mongoose.model("Collection", UserCollection)