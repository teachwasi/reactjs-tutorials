import React from "react";
import { sampleData } from "./SampleData";
import Card from "./Card";

const Amazon=()=>{
    return(
        <Card cardImage={sampleData[3].cardImage} cardLink={sampleData[3].cardLink} cardTitle={sampleData[3].cardTitle} cardCategory={sampleData[3].cardCategory}/>
    )
}
export default Amazon;