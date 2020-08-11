import React,{useState} from 'react';
import   "./ColorBox.css";
import {CopyToClipboard} from "react-copy-to-clipboard";
function ColorBox({background,name}) {
  const [copied,setCopied] = useState([{copied:false}]);
  const copiedState = ()=>{
     setCopied({copied:true})
     setTimeout(()=> setCopied({copied:false}),1500);
  };
  return (
  	<CopyToClipboard text={background} onCopy={copiedState}>
    <div style={{background}} className="ColorBox">
    <div  style={{background}} className={`copy-overlay ${copied.copied&&"show"}`}/>
    <div className={`copy-msg ${copied.copied&&"show"}`}>
       <h1>Copied!</h1>
        <p>{background}</p>
    </div>
    <div className="copy-container">
      <div className="box-content">
         <span>{name}</span>
      </div>
      <button className="copy-button">Copy</button>
    </div>
    <span className="see-more">More</span>
    </div>
    </CopyToClipboard>
  );
}


export default ColorBox;
