import React from 'react';

import Korn from "../../assets/korn.png";
import ReplacementIcon from "../../assets/tab.svg";
import "./chosen-item.style.scss";

const ChosenItem = ({item, altItemImg,onShowAdditionalItemsClick,onRemoveChosenItemClick}) => {

    return ( 
        <div className="chosen-item-frame">
            <div className="chosen-item-frame__box">
                <div  className="chosen-item-frame__image-frame">
                    <img className="chosen-item-frame__image" src={item.Image} alt="brenflex"/>
                </div>
                {/* <span className="chosen-item-frame__arrow">&#8592;</span> */}
                <img className="chosen-item-frame__image" src={ReplacementIcon} alt="brenflex"/>
                <div className="chosen-item-frame__image-frame">
                     <button className="chosen-item-frame__close-btn btn" 
                        onClick={() => onRemoveChosenItemClick(item.Code)}>&#10006;</button>
                    <img className="chosen-item-frame__image" src={altItemImg} alt="brenflex"/>
                </div>
            </div>
            <button className="item-frame__more-items btn" onClick={() =>
            onShowAdditionalItemsClick(item.AlternativeItems, item.Code)}>פריטים חליפיים &#8592;</button>
        </div>
     );
}
 
export default ChosenItem;