import React,{Fragment} from 'react';
import {Route,Switch} from 'react-router-dom';
import Palette from "./Palette"
import seedColors from "./seedColors"
import {generatePalette} from "./colorHelpers"
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette"

function App() {
	const findPalette = (id) => {
    return seedColors.find((palette)=>{
     	return palette.id === id;
     })
	};
  return (
    <Fragment>
  	<Switch>
  	<Route path="/" exact  
           render={(routeProps)=> <PaletteList paletteList={seedColors} {...routeProps}/> } />
  	<Route path="/palette/:id"  
           render={(routeProps) => <Palette colorId={routeProps.match.params.colorId} palette={generatePalette(findPalette(routeProps.match.params.id))} /> } />
    <Route path="/palette/:id/:colorId" exact 
           render={(routeProps)=> <SingleColorPalette palette={generatePalette(findPalette(routeProps.match.params.paletteId))}/>}/>
    </Switch>
    </Fragment>
  );
}

export default App;
