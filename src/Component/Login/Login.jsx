import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){

    const [data, setData] = useState({
        username:"",
        password:""
    });

    const [flag, setFlag] = useState(false);


    const [successMessage, setSuccessMessage] = useState(false);

    const navigate = useNavigate();


    function handleNavigate(){
        navigate("/signup");
    }


    function handleSubmit(){
        setFlag(true);
        if(data.username===localStorage.getItem("username") && data.password===localStorage.getItem("password")){
            setSuccessMessage(true);
            setTimeout(() => {
            navigate("/home");
            }, 800);
        }
        else{
            alert("Wrong Email id or password")
        }
    }

    return(
        <div className="border w-[40%] mt-20 m-auto p-4 flex flex-col gap-3 bg-yellow-300 rounded-xl shadow-xl">
            <div className="text-center font-bold text-2xl p-4">Please Enter your details : (LOGIN)</div>
            <div className="flex flex-col items-start gap-2">
                <label className="text-lg " for="name">Enter username: *</label>
                <input onChange={(e)=>setData({...data, username:e.target.value})} className="rounded w-full pl-2 p-3 focus:outline-none border" type="text"  placeholder="Enter username"/>
                {flag && !data.username && <p className="text-red-500">Please Enter your username</p>}

            </div>

            <div className="flex flex-col items-start gap-2">
                <label className="text-lg " for="name">Enter your Password: *</label>
                <input onChange={(e)=>setData({...data, password:e.target.value})} className="rounded w-full pl-2 p-3 focus:outline-none border" type="password"  placeholder="Enter your password"/>
                {flag && !data.password && <p className="text-red-500">Please Enter your password</p>}

            </div>


            <div className="flex flex-col items-start gap-2">
                <button onClick={handleSubmit} className="bg-blue-400 text-white w-full p-3 rounded-xl" type="submit">Submit</button>
            </div>


            <div className="flex flex-col items-start gap-2 items-center">
                <p className="text-lg">Don't have account !! <span onClick={handleNavigate} className="text-blue-800 cursor-pointer underline"> Sign up</span></p>
            </div>


            <div className="flex flex-col items-start gap-2 items-center">
                {successMessage && 
                <p className="text-lg text-red-700 text-lg">Login successful !! </p>
                
                }
            </div>
        </div>
    )
}


export default Login