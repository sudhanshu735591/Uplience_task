import { useState } from "react";

function Home(){

    const [idGenerator, setIdGenerator] = useState();

    const [flag, setFlag] = useState();

    const [name, setName] = useState();


    const [flag1 , setFlag1] = useState(false);

    const [flag2 , setFlag2] = useState(false);


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
        if(count<100){
            setCount(count+10);
        }
    }

    const decreaseHanlder = ()=>{
        if(count>0){
            setCount(count- 10);
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

        setFlag2(true);

        if(userData.address && userData.email && userData.phone){
            setFlag1(true);
        }


    }




    return(
        <div className="border w-[80%] m-auto flex flex-col mt-20 rounded-xl gap-3 p-10 bg-[cadetblue]">
            <div className="flex rounded-xl">

                <div className="flex m-auto gap-10  w-[81%] ">
                    <div className="border p-3 w-[46%] rounded-xl flex flex-col gap-3 text-center">
                        <div className="text-white text-xl font-bold">Counter: {count}</div>

                        <div className="flex gap-3 justify-center flex-wrap ">
                            <button onClick={increaseHandler} className="bg-green-400 rounded pl-4 pr-4 text-white pb-1 font-bold">+</button>
                            <button onClick={resetHanlder} className="bg-yellow-400 pl-4 rounded pr-4 text-white pb-1 font-bold">Reset</button>
                            <button onClick={decreaseHanlder} className="bg-red-800 pl-4 rounded pr-4 text-white pb-1 font-bold">-</button>
                        </div>
                    </div>



                    <div className="border p-3 w-[50%] rounded-xl text-white">
                        <div className="text-xl text-white font-bold text-center">Rich text editor</div>
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
                <div className="border rounded-xl w-[38%] h-[40%] flex flex-col items-center p-4 gap-3 text-white">
                    <input onChange={(e)=>setName(e.target.value)} className="w-full border p-3 rounded focus:outline-none text-black" type="text" placeholder="Enter any name"/>
                    {!name && flag && <p className="text-red-700">Please Enter Name !!</p>}

                    <p className="w-full border p-3 rounded font-bold" >Id generator : {idGenerator}</p>
                    <button onClick={handleIdgenerator} className="w-full p-2 bg-violet-700	rounded-lg text-white font-boldf">Save</button>
                </div>

                    <div className="border p-3 w-[40%] rounded-xl">
                        <div className="flex flex-col  items-start">
                            <label className="text-lg text-white font-bold" for="name">Enter your address: *</label>
                            <input onChange={(e)=>setUserData({...userData, address:e.target.value})} className="border rounded w-full pl-2 p-3 focus:outline-none" type="text"  placeholder="Enter your address"/>
                            {flag2 && !userData.address && <p className="text-red-500">Please Enter your address</p>}
                        </div>

                        <div className="flex flex-col  items-start">
                            <label className="text-lg text-white font-bold" for="email">Enter your email: *</label>
                            <input onChange={(e)=>setUserData({...userData, email:e.target.value})} 
                            className="border rounded w-full pl-2 p-3 focus:outline-none" type="email"  placeholder="Enter your email"/>
                            {flag2 && !userData.email && <p className="text-red-500">Please Enter your email</p>}
                        </div>


                    <div className="flex flex-col  items-start">
                        <label className="text-lg text-white font-bold" for="number">Enter your number: *</label>
                        <input 
                            onChange={(e)=>setUserData({...userData, phone:e.target.value})} 
                        
                        className="border rounded w-full pl-2 p-3 focus:outline-none" type="number"  placeholder="Enter your number"/>
                        {flag2 && !userData.phone && <p className="text-red-500">Please Enter your number</p>}
                    </div>


                    <div className="flex flex-col mt-5 items-start hover:bg-violet-900">
                        <button onClick={handleSubmit} className="bg-violet-700	 w-full p-2 rounded-lg text-white font-bold" type="submit">Submit</button>
                    </div>
                </div>

            </div>

            <div className="w-[81%] m-auto">
                <div className="border rounded">
                    <div style={{ width:`${count}%` , padding:"10px"}} className="bg-violet-700"></div>
                </div>
            </div>


        </div>
    )
}

export default Home;