import React from 'react';
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";

function PaletteList({paletteList,classes,history}) {
  const goToPalette = (id)=>{
     history.push(`/palette/${id}`)
  }
  return (
     <div className={classes.root}>
     <div className={classes.container}>
         <nav className={classes.nav}>
            <h1>Color Picker</h1>
             
         </nav> 
          <div className={classes.palettes}>
             {paletteList.map((palette) =>(
   
          <MiniPalette  {...palette} handleClick={()=>goToPalette(palette.id)}/>

     ))}
          </div>
     </div>
     </div>
  );
}

export default withStyles(styles)(PaletteList);
