import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";



export const signup = async (req,res)=>{
    try {
        const {fullname, username, password, confirmPassword, gender}=req.body;
        if(password!==confirmPassword){
            return res.status(400).json({error:"passwords do not match"})
        }
        const user= await User.findOne({username});
        if(user){
            return res.status(400).json({error:"username already exists"})
        }
        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        // profile pics
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser= new User({
            fullname,
            username,
            password: hashPassword,
            gender,
            profilePic: gender==="male"?boyProfilePic: girlProfilePic
        })
        if(newUser){
            // generate token
            generateTokenAndSetCookie(newUser._id,res);

            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        }
        else{
            res.status(400).json({error: "error in creating user"});
        }

    } catch (error) {
        console.log("Erron in singup controller", error.message);
        res.status(400).json({error: "internal srver error from signup"});
        
    }

    console.log("signup user");
}
export const login = async (req,res)=>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if(!user || !isPasswordCorrect){
            return res.status(400).json({ 
                error: "Incorrect password or user name"
            });
        }
        generateTokenAndSetCookie(user._id, res);

        res.status(201).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic
        });
        
    } catch (error) {
        console.log("Erron in login controller", error.message);
        res.status(400).json({error: "internal srver error from login"});
        
    }
    console.log("login user");
}
export const logout = async (req,res)=>{
    try {
        res.cookie("jwt", "" ,{maxAge: 0});
        res.status(201).json({message: "logged out successfully"});
        
    } catch (error) {
        console.log("Erron in logout controller", error.message);
        res.status(400).json({error: "internal srver error from logout"});
        
    }
    
}