import { useState } from "react";
import ColorButtons from "../Button/button";
import FormData from "../formData/formData";

function Home(){

    const [idGenerator, setIdGenerator] = useState();

    const [flag, setFlag] = useState();

    const [name, setName] = useState();


    const [flag1 , setFlag1] = useState(false);

    const [count, setCount] = useState(0);

    const [property, setProperty] = useState("");

    const [showList , setShowList] = useState(false);



    const [userData, setUserData] = useState({
        name: "",
        address:"",
        email:"",
        phone:"",
        id:"",

    });

    const increaseHandler = ()=>{
        if(count<20){
            setCount(count+1);
        }
    }

    const decreaseHanlder = ()=>{
        if(count>0){
            setCount(count- 1);
        }
    } 

    function resetHanlder(){
        setCount(0);
    }


    function handleFontWeight(e){
        console.log(e.target.innerText.toLowerCase());
        if(e.target.innerText.toLowerCase()==="bold"){
            setProperty("font-bold");
            setShowList(false);
        }


        else if(e.target.innerText.toLowerCase()==="italic"){
            setProperty("italic");
            setShowList(false);
        }


        else if(e.target.innerText.toLowerCase()==="underline"){
            setProperty("underline");
            setShowList(false);
        }

        else if(e.target.innerText.toLowerCase()==="lists"){
            setShowList(true);
        }

        // textDecoration
    }

    function handleIdgenerator(){
        setFlag(true);

        if(name){
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const randomNumber = Math.floor(1000 + Math.random() * 900000); 
            const randomAlphabet = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            const id = `${randomNumber}${randomAlphabet}`;
            setIdGenerator(id);
        }
    }

    function handleSubmit(){

        if(userData.address && userData.email && userData.phone){
            setFlag1(true);
        }


    }


    const number = Array.from({length:count}, (_, index)=>index+1);
    console.log("number", number);

    return(
        <div className="border w-[80%] m-auto flex flex-col mt-3 gap-3 p-10 ">
            <div className="flex rounded-xl">

                <div className="flex m-auto gap-10  w-[81%] ">
                    <div className="border p-3 w-[46%] rounded-xl flex flex-col gap-3 text-center">
                        <div className="text-red-500 text-lg">Counter: {count}</div>

                        <div className="flex gap-3 justify-center flex-wrap ">
                            <button onClick={increaseHandler} className="bg-blue-400 pl-4 pr-4 text-white pb-1">+</button>
                            <button onClick={resetHanlder} className="bg-yellow-400 pl-4 pr-4 text-white pb-1">Reset</button>
                            <button onClick={decreaseHanlder} className="bg-green-400 pl-4 pr-4 text-white pb-1">-</button>
                        </div>
                    </div>



                    <div className="border p-3 w-[50%] rounded-xl">
                        <div className="text-xl text-red-600">Rich text editor</div>
                        {flag1 && !showList && userData.address && <p className={property} >Address: {userData.address}</p>}
                        {flag1 && !showList && userData.email && <p className={property}>Email: {userData.email}</p>}
                        {flag1 && !showList && userData.phone && <p className={property}>Phone: {userData.phone}</p>}



                        
                        { showList && <ul style={{listStyleType:"square"}} className="p-3">
                            {flag1 && userData.address && <li>Address: {userData.address}</li>}
                            {flag1 && userData.email && <li>Email: {userData.email}</li>}
                            {flag1 && userData.phone && <li>Phone: {userData.phone}</li>}
                        </ul>}

                        {flag1 && 
                        <div className="flex gap-2 mt-3 flex-wrap">
                            <button onClick={handleFontWeight} className="bg-blue-400 pl-4 pr-4 text-white pb-1 rounded-lg">Bold</button>
                            <button onClick={handleFontWeight} className="bg-blue-400 pl-4 pr-4 text-white pb-1 rounded-lg">Italic</button>
                            <button onClick={handleFontWeight} className="bg-blue-400 pl-4 pr-4 text-white pb-1 rounded-lg">Underline</button>
                            <button onClick={handleFontWeight} className="bg-blue-400 pl-4 pr-4 text-white pb-1 rounded-lg">Lists</button>
                        </div>
                        }
                    </div>
                </div>
              
            </div>


            {/* userData */}
            <div className="flex justify-center gap-10">
                <div className="border rounded-xl w-[38%] h-[40%] flex flex-col items-center p-4 gap-3">
                    <input onChange={(e)=>setName(e.target.value)} className="w-full border p-3 rounded-xl focus:outline-none" type="text" placeholder="Enter any name"/>
                    {!name && flag && <p className="text-red-700">Please Enter Name !!</p>}

                    <p className="w-full border p-3 rounded-xl">Id generator : {idGenerator}</p>
                    <button onClick={handleIdgenerator} className="w-full p-2 bg-pink-300 rounded-lg text-white">Save</button>
                </div>

                    <div className="border p-3 w-[40%] rounded-xl">
                        <div className="flex flex-col  items-start">
                            <label className="text-lg" for="name">Enter your address: *</label>
                            <input onChange={(e)=>setUserData({...userData, address:e.target.value})} className="border rounded w-full pl-2 p-3 focus:outline-none" type="text"  placeholder="Enter your address"/>
                            {flag1 && !userData.address && <p className="text-red-500">Please Enter your address</p>}
                        </div>

                        <div className="flex flex-col  items-start">
                            <label className="text-lg" for="email">Enter your email: *</label>
                            <input onChange={(e)=>setUserData({...userData, email:e.target.value})} 
                            className="border rounded w-full pl-2 p-3 focus:outline-none" type="email"  placeholder="Enter your email"/>
                            {flag1 && !userData.email && <p className="text-red-500">Please Enter your email</p>}

                        </div>


                    <div className="flex flex-col  items-start">
                        <label className="text-lg" for="number">Enter your number: *</label>
                        <input 
                            onChange={(e)=>setUserData({...userData, phone:e.target.value,
                            
                            })} 
                        
                        className="border rounded w-full pl-2 p-3 focus:outline-none" type="number"  placeholder="Enter your number"/>
                        {flag1 && !userData.phone && <p className="text-red-500">Please Enter your number</p>}
                    </div>


                    <div className="flex flex-col mt-5 items-start hover:bg-violet-900">
                        <button onClick={handleSubmit} className="bg-red-500 w-full p-1 rounded-xl text-white text-lg" type="submit">Submit</button>
                    </div>
                </div>

            </div>

            


         

            <div>
                {number.map((val, index) => {
                    const borderRadius = `${(index + 1) * 5}px`; 
                    return (
                    <div key={index} className="border w-[100%] p-3 bg-red-400" style={{ borderBottomLeftRadius:borderRadius , borderBottomRightRadius:borderRadius}}>
                    </div>
                    );
                })}
            </div>


        </div>
    )
}

export default Home;