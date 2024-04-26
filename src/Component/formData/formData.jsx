import { useState } from "react";
import { useNavigate } from "react-router-dom";


function FormData(){

    const [userData, setUserData] = useState({
        name: "",
        address:"",
        email:"",
        phone:"",
        id:"",

        highSchool:{
            English: "",
            CSE : "",
            Maths: "",
            Science: "",
            Social_Science: "",
        },

        
        Intermidiete:{
            English: "",
            CSE : "",
            Maths: "",
            Physics: "",
            Chemistry: "",
        }

    });


    const [flag, setFlag] = useState(false);

    const navigate = useNavigate();

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const randomNumber = Math.floor(1000 + Math.random() * 900000); 
    const randomAlphabet = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    const id = `${randomNumber}${randomAlphabet}`;

    function handleClick(){
        setFlag(true);

        if (userData.name && userData.address && userData.email && userData.phone && userData.id) {
            let storedData = localStorage.getItem("userData");
            if (storedData) {
                try {
                    let parsedData = JSON.parse(storedData);
                    if (Array.isArray(parsedData)) {
                        if(!parsedData.some(item=>item.email===userData.email)){
                            localStorage.setItem("userData", JSON.stringify([...parsedData, userData]));
                            navigate("/userprofile");
                        }
                        else{
                            alert("Email already exist")
                        }

                    } 

                } 
                catch (error) {
                    console.error("Error parsing stored data:", error);
                }
            } 
            else {
                localStorage.setItem("userData", JSON.stringify([userData]));
                navigate("/userprofile");

            }
        }



    }


   

    return(
        <div className="flex-col flex gap-3 border  p-10  justify-center m-auto rounded-xl bg-cyan-50 shadow-xl">
            {/* <div>
                <h1 className="text-lg font-bold">Registration Form</h1>
                <p>Please register the form</p>

            </div> */}

            {/* <div className="flex flex-col items-start">
                <label className="text-lg" for="name">Enter your name: *</label>
                <input onChange={(e)=>setUserData({...userData, name:e.target.value})} className="border rounded w-full pl-2 p-3 focus:outline-none" type="text"  placeholder="Enter your name"/>
                {flag && !userData.name && <p className="text-red-500">Please Enter your name</p>}
            </div> */}


            <div className="flex flex-col  items-start">
                <label className="text-lg" for="name">Enter your address: *</label>
                <input onChange={(e)=>setUserData({...userData, address:e.target.value})} className="border rounded w-full pl-2 p-3 focus:outline-none" type="text"  placeholder="Enter your address"/>
                {flag && !userData.address && <p className="text-red-500">Please Enter your address</p>}

            </div>

            <div className="flex flex-col  items-start">
                <label className="text-lg" for="email">Enter your email: *</label>
                <input onChange={(e)=>setUserData({...userData, email:e.target.value})} 
                className="border rounded w-full pl-2 p-3 focus:outline-none" type="email"  placeholder="Enter your email"/>
                {flag && !userData.email && <p className="text-red-500">Please Enter your email</p>}

            </div>


            <div className="flex flex-col  items-start">
                <label className="text-lg" for="number">Enter your number: *</label>
                <input 
                    onChange={(e)=>setUserData({...userData, phone:e.target.value, id:id,
                        highSchool:{...userData.highSchool, English: Math.floor(Math.random() * 41) + 60, CSE: Math.floor(Math.random() * 41) + 60, Maths: Math.floor(Math.random() * 41) + 60, Science: Math.floor(Math.random() * 41) + 60, Social_Science: Math.floor(Math.random() * 41) + 60},
                        Intermidiete:{...userData.Intermidiete, English:59, CSE:83, Maths:74, Physics:73, Chemistry:91}
                    })} 
                
                className="border rounded w-full pl-2 p-3 focus:outline-none" type="number"  placeholder="Enter your number"/>
                {flag && !userData.phone && <p className="text-red-500">Please Enter your number</p>}
            </div>


            <div className="flex flex-col mt-5 items-start hover:bg-violet-900">
                <button onClick={handleClick} className="bg-red-500 w-full p-1 rounded-xl text-white text-lg" type="submit">Submit</button>
            </div>

        </div>
    )
}

export default FormData;