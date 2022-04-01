import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types

const AllPhotosOfAllUsers = new mongoose.Schema({
    uploaderId: {
        type: ObjectId,
        ref: "User"
    },
    uploadername: {
        type: String,

    },
    uploaderprofileimage: {
        type: String,
    },
    imagename: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    },
    imageURL: {
        type: String,
        required: true
    }


});
export default mongoose.models.AllPhotos || mongoose.model("AllPhotos", AllPhotosOfAllUsers)