import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res)=>{
    try {
        const loggeInUserId = req.user._id;
        const filteredUsers = await User.find({_id : {$ne :  loggeInUserId}}).select("-password"); 
        res.status(200).json(filteredUsers);
        
    } catch (error) {
        console.log("error in user controller", error.message);
        res.status(500).json({error: "Internal server error from user controller"});
        
    }
}