import React, { Component } from 'react';
import ItemToReplace from "../item-to-replace/item-to-replace.component";
import AdditionalItemList from "../additional-item-list/additional-item-list.component";
import ChosenItem from "../chosen-item/chosen-item.component";
import "./item-to-replace-list.style.scss";


const ItemToReplaceList = ({items,chosenItems, onShowAdditionalItemsClick,onRemoveChosenItemClick}) => {
    const itemsArr = items.map(item => {
        if(chosenItems.get(item.Code)) {
            return item.AlternativeItems.map (altItem => {
                if(chosenItems.get(item.Code) === altItem.Code) {
    
                    return <ChosenItem 
                     key={item.Code}
                     item={item}
                     altItemImg={altItem.Image}
                     onShowAdditionalItemsClick={onShowAdditionalItemsClick}
                     onRemoveChosenItemClick={onRemoveChosenItemClick} />
                }
            });
    
        } else {
            
            return (
                <ItemToReplace key={item.Code} 
                item={item}
                onShowAdditionalItemsClick={onShowAdditionalItemsClick}/>
            );
        }
    })
   /*  const component = items.map(item => {
        return (
            <ItemToReplace key={item.Code} 
            item={item}
            onShowAdditionalItemsClick={onShowAdditionalItemsClick}/>
        );
    }); */
    return (  
        <div className="content">
            {itemsArr}
        </div> );
}
 
export default ItemToReplaceList;

