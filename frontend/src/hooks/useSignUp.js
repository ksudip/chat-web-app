import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {

    const [loading, setLoading] =  useState(false);
    const {authUser, setAuthUser} = useAuthContext();

    const signup = async({fullname, username, password, confirmPassword, gender})=>{
        const success = handleInputError({fullname, username, password, confirmPassword, gender})
        if(!success) return;
        setLoading(true);
        try {
            const res  = await fetch("/api/auth/signup",{
                method: "POST",
                headers: {"content-Type": "application/json"},
                body: JSON.stringify({fullname, username, password, confirmPassword, gender})
            })

            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            // console.log(data);

            // local storage to get user datails after signin from local storage
                localStorage.setItem("chat-user",JSON.stringify(data));

            // context
            setAuthUser(data);

            
        } catch (error) {
            toast.error(error.message)
        } finally{
            setLoading(false);
        }

    };
    return {loading, signup};
}

export default useSignUp


function handleInputError({fullname, username, password, confirmPassword, gender}){
    if(!fullname || !username || !password || !confirmPassword || !gender){
        toast.error('please fill all the fields') 
        return false
    }
    if(password!==confirmPassword){
        toast.error('password do not match')
        return false
    }
    if(password.length<6){
        toast.error('password must be atleast 6 characters')
        return false
    }
    return true
}
