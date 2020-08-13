import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import styles from "./styles/PaletteStyles";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";


function SingleColorPalette({palette,colorId, paletteName, emoji, id,classes}) {
  const [format,setFormat] = useState("hex");
  const gatherShades = (palette,colorToFilterBy)=>{
       let shades = [];
       const allColors = palette.colors;
      for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };
   const changeFormat = (val) =>{
     setFormat(val);
  };
  const _shades = gatherShades(palette,colorId);
   const colorBoxes = _shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ));
     return (
      <div className={classes.Palette}>
        <Navbar handleChange={changeFormat}  showingFullPalette={false} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>GO BACK</Link>
          </div>
        </div>
          <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
}

export default withStyles(styles)(SingleColorPalette);
