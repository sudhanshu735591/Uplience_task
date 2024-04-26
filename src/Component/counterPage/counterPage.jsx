import { useState } from "react";
import "./counterPage.css";

function CounterPage(){
    const [effectIntensity, setEffectIntensity] = useState(100);

    const increaseEffect = () => {
        setEffectIntensity(effectIntensity + 10);
      };


      const decreaseEffect = () => {
        setEffectIntensity(effectIntensity - 10);
      };

      const reset = ()=>{
        setEffectIntensity("100")
      }

    return(
        <div className="counter border w-[50%] m-auto mt-[10%] bg-pink-100 p-10 rounded-xl">
            <div className="flex flex-col gap-10 p-5 items-center ">
                <div>
                    <button 
                    style={{ filter: `brightness(${effectIntensity}%)`}}
                    className="bg-red-500 text-white pl-10 pr-10 pt-2 pb-2 rounded-lg font-bold">Effect </button>
                </div>

                <div className="flex gap-5">
                    <button onClick={increaseEffect} className="bg-yellow-500 text-white pl-10 pr-10 pt-2 pb-2 rounded-lg font-bold" type="submit">Increment</button>
                    <button onClick={decreaseEffect} className="bg-green-500 text-white pl-10 pr-10 pt-2 pb-2 rounded-lg font-bold">Decrement</button>
                    <button onClick={reset} className="bg-blue-500 text-white pl-10 pr-10 pt-2 pb-2 rounded-lg font-bold">Reset</button>
                </div>
            </div>
        </div>
    )
}
export default CounterPage;



