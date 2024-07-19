import React from "react";
import './NewsFeed.css'
import '../index.css'


const LanguagesNTools = ({item}) =>{
    return ( 
        <div className="joblisting flex  gap1 wrap">
                <button>{item.role}</button>
                <button>{item.level}</button> 
                {(item.languages).map((lang, index) => 
                    <button key={index}>{lang}</button>
                    )}
                {item.tools ? (item.tools).map((tool, index) => 
                <button key={index}>{tool}</button>)
                 : ""}
              
            
        </div>
    )
}

export default LanguagesNTools;