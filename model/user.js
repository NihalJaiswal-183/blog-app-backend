import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        default: "https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
    },
    followers: {
        type: []
    },
    following: {
        type: []
    }
})

const User = mongoose.model("User", userSchema);
export default User;