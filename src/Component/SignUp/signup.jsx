import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp(){

    const [data, setData] = useState({
        username:"",
        email:"",
        password:""
    });

    const [flag, setFlag] = useState(false);


    const navigate = useNavigate();



    function handleClick(){
        setFlag(true);
        console.log(data);
        if(data.username && data.password){
            localStorage.setItem("username", data.username);
            localStorage.setItem("password", data.password);
            alert("Account created successfully");
            navigate("/");
        }
    }

    function handleNavigate(){
        navigate("/");
    }

    return(
        <div className="border w-[40%] mt-10 m-auto p-4 flex flex-col gap-3  rounded-lg shadow-xl">
            <div className="text-center font-bold text-2xl p-4">Please Enter your details : (SIGN UP)</div>
            <div className="flex flex-col items-start gap-2">
                <label className="text-lg " for="name">Enter username: *</label>
                <input onChange={(e)=>setData({...data, username:e.target.value})} className="rounded w-full pl-2 p-3 focus:outline-none border" type="text"  placeholder="Enter username"/>
                {flag && !data.username && <p className="text-red-500">Please Enter your username</p>}

            </div>

            <div className="flex flex-col items-start gap-2">
                <label className="text-lg " for="name">Enter your email: *</label>
                <input onChange={(e)=>setData({...data, email:e.target.value})} className="rounded w-full pl-2 p-3 focus:outline-none border" type="email"  placeholder="Enter your email"/>
                {flag && !data.email && <p className="text-red-500">Please Enter your email</p>}

            </div>


            <div className="flex flex-col items-start gap-2">
                <label className="text-lg " for="name">Enter your Password: *</label>
                <input onChange={(e)=>setData({...data, password:e.target.value})} className="rounded w-full pl-2 p-3 focus:outline-none border" type="password"  placeholder="Enter your password"/>
                {flag && !data.password && <p className="text-red-500">Please Enter your password</p>}

            </div>


            <div className="flex flex-col items-start gap-2">
                <button onClick={handleClick} className="bg-blue-400 text-white w-full p-3 rounded-xl" type="submit">Submit</button>
            </div>


            <div className="flex flex-col items-start gap-2 items-center">
                <p className="text-lg">Already account !! <span onClick={handleNavigate} className="text-blue-800 cursor-pointer underline"> Log In</span></p>
            </div>
        </div>
    )
}

export default SignUp;