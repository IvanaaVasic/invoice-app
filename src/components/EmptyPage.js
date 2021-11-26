
import React from "react";

export default function EmptyPage(props) {
    return (

        <div className="empty-page"> 
            <img src={require('../assets/illustration-empty.svg').default} alt="empty-page"/>
            <h3>There is nothing here</h3>
            <p className="empty-page-text">Create an invoice by clicking the <span className="bold">New Invoice</span> button and get started</p>
        </div>
    )
}