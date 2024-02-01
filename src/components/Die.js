import React from "react";
export default function Die(props){
    const styles = {
        backgroundColor: props.isOn ?  "#59E391":"#FFFFFF" 
    }
    return(
        <div className="Die">
        <button style={styles} onClick={()=>props.handleClick(props.id)}>{props.value}</button>
        </div>
    )
}