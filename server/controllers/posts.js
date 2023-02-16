import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    //res.send('Dang hoat dong roi???');
    try {
        const postMessage = await PostMessage.find();         //find trong model do se mat thoi gian vi kh dong bo khuyen cao xai async/await
        
        //console.log(postMessage);

        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) =>{
    //const { title, message, selectedFile, creator, tags } = req.body;
    //res.send('Post creation')
    const post = req.body;

    const newPost = new PostMessage(post);
    try {
        await newPost.save();

        //https://www.restapitutorial.com/httpstatuscodes.html

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}