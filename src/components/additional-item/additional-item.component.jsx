import React from 'react'
import "./additional-item.style.scss";
import pic from "../../assets/korn.png";


const AdditionalItem = ({item, onAdditionalItemClick}) => {
    return ( 
        <div className="additional-item-frame">
            <button className="additional-item-frame__box-btn btn" onClick={() => onAdditionalItemClick(item.Code)}>
                 <strong><p className="item-frame__topic">{item.Name}</p></strong>
                <img className="additional-item-frame__image" src={item.Image} alt="additional-item" />
                <div className="additional-item-frame__details">
                    <span><strong>&#8362;{`${item.SalePrice}`}</strong>{` / ${item.ContentQty}`}</span>
                    <span className="additional-item-frame__qty">{`כמות: ${item.Qty} יח'`}</span> 
                    <strong><p>{`סה"כ:`} &#8362;{`${item.SalePrice * item.Qty}`}</p></strong>
                </div>
            </button>
        </div>
     );
}
 
export default AdditionalItem;