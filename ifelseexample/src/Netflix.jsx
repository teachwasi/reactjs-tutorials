import React from "react";
import { sampleData } from "./SampleData";
import Card from "./Card";

const Netflix=()=>{
    return(
        <Card cardImage={sampleData[1].cardImage} cardLink={sampleData[1].cardLink} cardTitle={sampleData[1].cardTitle} cardCategory={sampleData[1].cardCategory}/>
    )
}
export default Netflix;