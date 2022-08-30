import React from "react";
import Ecosystem3D from "./Ecosystem/Ecosystem3D";
import EcosystemContent from "./Ecosystem/EcosystemContent";
export default function Ecosystem() {
  return(
    <div className="ecosystem flex relative w-full justify-center items-center " style={{height: "80vh"}}>
       
        <div className="z-0 absolute w-full">
            <Ecosystem3D/>
        </div>

        <div className="z-1 w-5/6 flex justify-center" 
        // style={{border: "1px yellow solid"}} 
        >
            <EcosystemContent/>
        </div>
    </div>
  );
}