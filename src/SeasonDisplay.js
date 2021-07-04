// Determine the User Location and month
import React from 'react';
import './seasonDisplay.css'
const seasonConfig={
    summer:{
        text:"Bro, lets hit the beach!!",
        iconName:"sun"
    },
    winter:{
        text:"Bruh! its very chill ",
        iconName:"snowflake"
    }
}
const getSeason=(lat,month)=>{
    if(month>2 && month<9){
      return  lat > 0 ? "summer" : "winter" ;
    }else{
        return lat > 0 ? "winter":"summer";
    }

}
const SeasonDisplay=(props)=>{
    const season = getSeason(props.lat,new Date().getMonth());
    const {text,iconName}=seasonConfig[season];
    return (
    <div className={`${season} parent`}>
        <i className={`icon-left massive ${iconName} icon`}></i>
        <h1 className="content">{text}</h1>
         <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
    );
}
 export default SeasonDisplay;