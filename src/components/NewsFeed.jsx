import React from "react";
import './NewsFeed.css';

import Feature from "./atom/Feature-tag";
import NewTag from "./atom/New-tag";
import Dot from "./atom/dot"; 
import LanguagesNTools from "./LanguagesNTools";
import '../index.css'
// import Header from "./Molecules/Header";


const NewFeed = ({item}) => {
    return (
        <div>
            <div className={`container ${item.featured ? 'new-product' : ""}`}>
                <div className="flex-container1">
                    <img src={item.logo} alt={`${item.company} - ${item.id} logo`} />
                    <div className="job-info flex flex-col gap-1">
                        <div className="job-list">
                            <h4>{item.company}</h4>
                            {/* {item.isNew && item.feature  ? <><NewBtn /> {item.feature ? <Feature /> : " "}</>  : ""} */}
                            {item.isNew && <><NewTag/></>}
                            {item.featured && <><Feature /></>}
                        </div>
                        <h3>{item.position}</h3>
                        <div className="nav flex justify-btw">
                            <p>{item.postedAt}</p>
                            <>
                            <Dot />
                            </>
                            <p>{item.contract}</p>
                            <>
                            <Dot />
                            </>
                            <p>{item.location}</p>
                        </div>
                     
                    </div>
                    
                </div>
                <div className="hr"></div>
                <div className="nav-links">
                    
                    <LanguagesNTools item = {item}/>
                </div>
            </div>
        </div>
    )
}

export default NewFeed;