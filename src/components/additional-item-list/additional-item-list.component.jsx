import React from 'react'
import AdditionalItem from "../additional-item/additional-item.component";
import "./additional-item-list.style.scss";



const AdditionalItemList = ({additionalItems, onShowAdditionalItemsClick, onAdditionalItemClick}) => {

    const itemsArr = additionalItems.map(item => {
        return <AdditionalItem key={item.Code} 
        item={item} 
        onAdditionalItemClick={onAdditionalItemClick} />
        });

    return ( 
    <div className="background-color-dark">
        <div className="additional-items-window">
            <button className="additional-items-window__close-btn btn" 
            onClick={() => onShowAdditionalItemsClick(null, null, true)}> &#10006;</button>
            {itemsArr}
        </div>
        
    </div> );
}
 
export default AdditionalItemList;