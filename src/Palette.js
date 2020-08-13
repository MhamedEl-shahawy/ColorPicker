import React,{useState} from 'react';
import ColorBox from "./ColorBox";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

function Palette({palette,paletteName,emoji,id,classes}) {
  const [level,setLevel] = useState(500);
  const [format,setFormat] = useState("hex");
  const colorsEle = palette.colors[level].map((color)=><ColorBox background={color[format]} key={color.id} id={color.id} moreUrl={`/palette/${id}/${color.id}`} paletteId={id} name={color.name}/>);
  const changeLevel = (newLevel)=>{
      setLevel(newLevel)
  };
  const changeFormat = (val) =>{
     setFormat(val);
  };
  return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={changeLevel}
          handleFormatChange={changeFormat}
          showingAllColors
        />
        <div className={classes.colors}>{colorsEle}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
}


export default withStyles(styles)(Palette);
