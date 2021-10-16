import User from '../model/user.js'
import Post from '../model/post.js';
export const createUser = async (request, response) => {
    try {
        console.log(request.body);
        const user = await new User(request.body);
        user.save();

        response.status(200).json('Post saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}
export const getProfile = async (request, response) => {
    try {

        const post = await User.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        console.log(error);
        response.status(500).json(error)
    }
}

export const getUser = async (request, response) => {
    try {

        const post = await User.find({ email: request.query.username });

        response.status(200).json(post);
    } catch (error) {
        console.log(error);
        response.status(500).json(error)
    }
}
export const getUserbyID = async (request, response) => {
    try {

        const post = await User.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        console.log(error);
        response.status(500).json(error)
    }
}
export const getUserPost = async (request, response) => {
    try {
        let post = await User.findById(request.params.id);
        post = await Post.find({ username: post.email });
        response.status(200).json(post);
    } catch (error) {
        console.log(error);
        response.status(500).json(error)
    }
}

export const updatefollow = async (request, response) => {
    try {
        console.log(request.body);


        await User.findByIdAndUpdate(request.body.following, { $addToSet: { following: request.body.followers } });
        await User.findByIdAndUpdate(request.body.followers, { $addToSet: { followers: request.body.following } });
        response.status(200).json('follow request updated successfully');
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

export const updateUnfollow = async (request, response) => {
    try {
        console.log(request.body);


        await User.findByIdAndUpdate(request.body.following, { $pull: { following: request.body.followers } });
        await User.findByIdAndUpdate(request.body.followers, { $pull: { followers: request.body.following } });
        response.status(200).json('follow request updated successfully');
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

export const updateUser = async (request, response) => {
    try {
  console.log(request.body);
        await User.findByIdAndUpdate(request.params.id, { $set: request.body })

        response.status(200).json('post updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}