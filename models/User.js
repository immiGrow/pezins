import mongoose from "mongoose";


const UserDetails = new mongoose.Schema({
    profileimage: {
        type: String,
    },
    bgimage: {
        type: String
    },
    username: {
        type: String,
        required: true,
        minlength: 5

    },
    email: {
        type: String,
        required: true,
        minlength: 3

    },
    password: {
        type: String,
        required: true,
        minlength: 5

    },
    mobilenumber: {
        type: Number
    },

    country: {
        type: String
    },
    yourintroline: {
        type: String,

    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    youtube: {
        type: String
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String
    },
    pinterest: {
        type: String
    },
    twitter: {
        type: String
    },
    UPhotos: [{
        PhotoURL: {
            type: String
        }
    }]



});
export default mongoose.models.User || mongoose.model("User", UserDetails)