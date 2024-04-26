import { useEffect, useState } from "react";

import BarChartData from "../barChartData/BarChartData";


function UserProfile(){
    const data = JSON.parse(localStorage.getItem("userData"));
    const [filterData, setFilterData] = useState();

    function handleClick(email){
        const filtered = data.filter((val)=>val.email===email);
        setFilterData(filtered);
    }

    return(
        <div className="bg-blue-100">
            <div className="font-bold text-center capitalize underline text-2xl">User Profile Data Management</div>
           {
            !filterData && !localStorage.getItem("userData")?<><p className="text-center mt-10 text-red-800 bg-white">No Data Found !!</p></>:
            <div className="flex gap-10 mt-10 justify-center">
            <div className="border w-[40%] mt-10 flex flex-col gap-2 p-2 bg-blue-500 text-white p-3">
                {
                    
                    data.map((val)=>{
                        return(
                            <div onClick={()=>handleClick(val.email)} className="border cursor-pointer p-4 text-xl rounded font-bold capitalize">{val.name}</div>
                        )
                    })
                }
            </div>


            <div className="border mt-10 w-[50%] text-start p-4 bg-red-500 text-white rounded capitalize gap-5">
                {
                    filterData ? filterData.map((val)=>{
                        return(
                            <>
                                <p>Name : {val.name}</p>
                                <p>Address: {val.address}</p>
                                <p>Email: {val.email}</p>
                                <p>Phone: {val.phone}</p>

                                <div className="flex flex-col gap-5">
                                    <p className="mt-5 font-bold">Intermidiete Details</p>

                                    <BarChartData getData = {val.Intermidiete}/>

                                    <p className="font-bold">High School Details</p>


                                    <BarChartData getData = {val.highSchool}/>
                                </div>
                            </>
                        )
                    }): [JSON.parse(localStorage.getItem("userData"))[0]].map((val) => {
                        return (
                            <>
                                <p>Name : {val.name}</p>
                                <p>Address: {val.address}</p>
                                <p>Email: {val.email}</p>
                                <p>Phone: {val.phone}</p>

                                <div className="flex flex-col gap-5">
                                    <p className="mt-5 font-bold">Intermidiete Details</p>

                                    <BarChartData getData = {val.Intermidiete}/>

                                    <p className="font-bold">High School Details</p>


                                    <BarChartData getData = {val.highSchool}/>
                               </div>
                                
                            </>
                        )
                    })
                }
            </div>
        </div>
           }

        </div>
    )
}

export default UserProfile;