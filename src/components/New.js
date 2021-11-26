import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function New(props) {
  const showNewInvoiceForm = props.showNewInvoiceForm;

  let invoice = useLocation().state;

  const [terms, setTerms] = useState(false);
  const [arrow, setArrow] = useState(true);

  function openTerms() {
    setTerms(true);
    setArrow(false);
    if (terms) {
      setArrow(true);
      setTerms(false);
    }
  }

  return (
    <div className="new light-version">
      <div className="left-side">
        <div className="headline-left">
          <h1 className="new-invoice-heading">New Invoice</h1>
        </div>

        <div className="bill-form">
          <p className=" new-subHeading-form violet-text">Bill From</p>
          <p className="new-address small-text-heading">Street Address</p>
          <div className="light-border">
            <input type="text" className="text-field" />
          </div>
          <div className="adress">
            <div className="city">
              <p className="small-text-heading">City</p>
              <div className="light-border">
                <input type="text" className="text-field" />
              </div>
            </div>

            <div className="postcode">
              <p className="small-text-heading">Post Code</p>
              <div className="light-border">
                <input type="text" className="text-field" />
              </div>
            </div>

            <div className="country">
              <p className="small-text-heading">Country</p>
              <div className="light-border">
                <input type="text" className="text-field" />
              </div>
            </div>
          </div>

          <p className="new-subHeading-form violet-text">Bill To</p>
          <p className="small-text-heading">Client's Name</p>
          <div className="light-border">
            <input type="text" className="text-field" />
          </div>

          <p className="small-text-heading">Client's Email</p>
          <div className="light-border">
            <input type="text" className="text-field" />
          </div>

          <p className="small-text-heading">Street Adress</p>
          <div className="light-border">
            <input type="text" className="text-field" />
          </div>

          <div className="adress">
            <div className="city">
              <p className="small-text-heading">City</p>
              <div className="light-border">
                <input type="text" className="text-field" />
              </div>
            </div>

            <div className="postcode">
              <p className="small-text-heading">Post Code</p>
              <div className="light-border">
                <input type="text" className="text-field" />
              </div>
            </div>

            <div className="country">
              <p className="small-text-heading">Country</p>
              <div className="light-border">
                <input type="text" className="text-field" />
              </div>
            </div>
          </div>

          <div className="invoice-date-new">
            <div className="date">
              <p className="small-text-heading">Invoice Date</p>
              <div className="light-border">
                <input type="text" className="text-field" />

                <img className="calendar" src={require("../assets/icon-calendar.svg").default} alt="calendar" />
              </div>
            </div>

            <div className="date">
              <p className="small-text-heading">Payment Terms</p>
              <div onClick={openTerms} className="light-border dropdown-terms">
                {arrow ? (
                  <img className="arrow down" src={require("../assets/icon-arrow-down.svg").default} alt="arrow-down" />
                ) : (
                  <img
                    className="arrow down up"
                    src={require("../assets/icon-arrow-down.svg").default}
                    alt="arrow-down"
                  />
                )}
              </div>
              {terms ? (
                <div className="filter-2">
                  <label className="container-1">
                    <p className="bold-text">Net 1 Day</p>
                  </label>
                  <label className="container-1">
                    <p className="bold-text">Net 7 Days</p>
                  </label>
                  <label className="container-1">
                    <p className="bold-text">Net 14 Days</p>
                  </label>
                  <label className="container-1">
                    <p className="bold-text">Net 30 Days</p>
                  </label>
                </div>
              ) : null}
            </div>
          </div>

          <p className="small-text-heading">Project Description</p>
          <div className="light-border">
            <input type="text" className="text-field" />
          </div>

          <h3 className="item-list-heading">Item List</h3>

          <div className="item-list-names">
            <div className="item-name">
              <p className="small-text-heading">Item Name</p>
              <div className="light-border">
                <input type="text" className="text-field" />
              </div>
            </div>

            <div className="quantity">
              <p className="small-text-heading">Qty.</p>
              <div className="light-border">
                <input type="text" className="text-field" />
              </div>
            </div>

            <div className="price">
              <p className="small-text-heading">Price</p>
              <div className="light-border">
                <input type="text" className="text-field" />
              </div>
            </div>

            <div className="total">
              <p className="small-text-heading">Total</p>
              <div className="no-border">
                <input type="text" className="text-field-total" />
              </div>
            </div>

            <img className="trash" src={require("../assets/icon-delete.svg").default} alt="delete" />
          </div>

          <button className="no-color-btn-2">+ Add New Item</button>
        </div>

        <div className="buttons-down">
          <button className="no-color-btn-3" onClick={() => showNewInvoiceForm(false)}>
            Discard
          </button>
          <div className="buttons-right">
            <button className="draft-btn">Save as Draft</button>
            <button className="violet-btn-2">Save & Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
