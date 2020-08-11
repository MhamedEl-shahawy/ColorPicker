import React,{useState} from 'react';
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";

function Palette({palette}) {
  const [level,setLevel] = useState(500);
  const colorsEle = palette.colors[level].map((color)=><ColorBox background={color.hex} name={color.name}/>);
  const changeLevel = (newLevel)=>{
      setLevel(newLevel)
  };
  return (
    <div className="Palette">
    <div className="slider">
    <Navbar level={level} changeLevel={changeLevel}/>
    </div>
     {/*Navbar goes here*/}
     <div className="Palette-colors">
        {colorsEle}  
     </div>
     {/*Footer eventualy*/}
       
    </div>
  );
}


export default Palette;
