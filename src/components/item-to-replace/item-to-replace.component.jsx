import React from 'react'
import "./item-to-replace.style.scss";
import Korn from "../../assets/korn.png";


const ItemToReplace = ({item, onShowAdditionalItemsClick}) => {
    return ( 
        <div className="item-frame">
           
            <strong><p className="item-frame__topic">{item.Name}</p></strong>
            <div className="item-frame__box">
                <div className="item-frame__image-holder">
                    <img className="item-frame__image" src={item.Image} alt="brenflex" />
                </div>
                <div className="item-frame__details">
                    <span className="item-frame__sticker">חסר במלאי!</span>
                     {/* <span className="item-frame__qty"><strong>כמות:</strong></span> */}
                    <span><strong>&#8362;{`${item.SalePrice}`}</strong>{` / ${item.ContentQty}`}</span>
                     <span className="item-frame__qty">{`כמות: ${item.Qty} יח'`}</span> 
                    <strong><span>{`סה"כ:`} &#8362;{`${item.SalePrice * item.Qty}`}</span></strong>
                    <button className="item-frame__more-items btn" onClick={() => 
                        onShowAdditionalItemsClick(item.AlternativeItems, item.Code)}>פריטים חליפיים &#8592;</button>
                </div>
            </div>
   
        </div>
     );
}
 
export default ItemToReplace;