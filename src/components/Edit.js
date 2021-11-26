import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import convertDate from "./DayMonthYear";

export default function Edit(props) {
  const showEditInvoiceForm = props.showEditInvoiceForm;

  const invoiceFromNavigation = useLocation().state; // { id: 3}

  let invoice = JSON.parse(localStorage.getItem("allInvoices")).filter((inv) => inv.id === invoiceFromNavigation.id)[0];

  const [terms, setTerms] = useState(false);
  const [arrow, setArrow] = useState(true);

  const [senderStreet, setSenderStreet] = useState(invoice.senderAddress.street);
  const [senderCountry, setSenderCountry] = useState(invoice.senderAddress.country);
  const [senderPostCode, setSenderPostCode] = useState(invoice.senderAddress.postCode);
  const [clientName, setClientName] = useState(invoice.clientName);
  const [clientEmail, setClientEmail] = useState(invoice.clientEmail);
  const [clientStreet, setClientStreet] = useState(invoice.clientAddress.street);
  const [clientCity, setClientCity] = useState(invoice.clientAddress.city);
  const [clientPostCode, setClientPostCode] = useState(invoice.clientAddress.postCode);
  const [clientCountry, setClientCountry] = useState(invoice.clientAddress.country);
  const [invoiceDate, setInvoiceDate] = useState(invoice.createdAt);

  const [projectDescription, setProjectDescription] = useState(invoice.description);

  //{convertDate(invoice.paymentDue)}

  // pozovi ovu metodu na confirm
  function editInvoice() {
    const allInvoices = JSON.parse(localStorage.getItem("allInvoices"));

    const invoiceIndex = allInvoices.findIndex((inv) => inv.id === invoice.id);

    allInvoices[invoiceIndex].senderAddress.street = senderStreet;
    allInvoices[invoiceIndex].senderAddress.country = senderCountry;
    allInvoices[invoiceIndex].senderAddress.postCode = senderPostCode;
    allInvoices[invoiceIndex].clientName = clientName;
    allInvoices[invoiceIndex].clientEmail = clientEmail;
    allInvoices[invoiceIndex].clientAddress.street = clientStreet;
    allInvoices[invoiceIndex].clientAddress.city = clientCity;
    allInvoices[invoiceIndex].clientAddress.postCode = clientPostCode;
    allInvoices[invoiceIndex].clientAddress.country = clientCountry;
    allInvoices[invoiceIndex].createdAt = invoiceDate;
    allInvoices[invoiceIndex].description = projectDescription;

    // ... za sve ostale podatke sa forme isto tako

    // i onda posle

    localStorage.setItem("allInvoices", JSON.stringify(allInvoices));
    showEditInvoiceForm(false);
  }

  function openTerms() {
    setTerms(true);
    setArrow(false);
    if (terms) {
      setArrow(true);
      setTerms(false);
    }
  }

  return (
    <div className="edit light-version">
      <div className="left-side">
        <div className="headline-left">
          <h2 className="number-of-invoice">
            Edit <span> #</span>
            {invoice.id}
          </h2>
        </div>
        <div className="bill-form">
          <p className=" new-subHeading-form violet-text">Bill From</p>
          <p className="new-address small-text-heading">Street Address</p>
          <div className="light-border">
            <input
              type="text"
              className="text-field"
              value={senderStreet}
              placeholder="Street Address"
              className="text-field"
              onChange={(e) => setSenderStreet(e.target.value)}
            />
          </div>
          <div className="adress">
            <div className="city">
              <p className="small-text-heading">City</p>
              <div className="light-border">
                <input type="text" className="text-field" placeholder="City" />
              </div>
            </div>

            <div className="postcode">
              <p className="small-text-heading">Post Code</p>
              <div className="light-border">
                <input
                  type="text"
                  value={senderPostCode}
                  placeholder="City"
                  className="text-field"
                  onChange={(e) => setSenderPostCode(e.target.value)}
                />
              </div>
            </div>

            <div className="country">
              <p className="small-text-heading">Country</p>
              <div className="light-border">
                <input
                  type="text"
                  value={senderCountry}
                  placeholder="City"
                  className="text-field"
                  onChange={(e) => setSenderCountry(e.target.value)}
                />
              </div>
            </div>
          </div>

          <p className="new-subHeading-form violet-text">Bill To</p>
          <p className="small-text-heading">Client's Name</p>
          <div className="light-border">
            <input
              type="text"
              className="text-field"
              value={clientName}
              placeholder="City"
              className="text-field"
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>

          <p className="small-text-heading">Client's Email</p>
          <div className="light-border">
            <input
              type="text"
              className="text-field"
              value={clientEmail}
              placeholder="City"
              className="text-field"
              onChange={(e) => setClientEmail(e.target.value)}
            />
          </div>

          <p className="small-text-heading">Street Address</p>
          <div className="light-border">
            <input
              type="text"
              value={clientStreet}
              placeholder="City"
              className="text-field"
              onChange={(e) => setClientStreet(e.target.value)}
            />
          </div>

          <div className="adress">
            <div className="city">
              <p className="small-text-heading">City</p>
              <div className="light-border">
                <input
                  type="text"
                  value={clientCity}
                  placeholder="City"
                  className="text-field"
                  onChange={(e) => setClientCity(e.target.value)}
                />
              </div>
            </div>

            <div className="postcode">
              <p className="small-text-heading">Post Code</p>
              <div className="light-border">
                <input
                  type="text"
                  value={clientPostCode}
                  placeholder="City"
                  className="text-field"
                  onChange={(e) => setClientPostCode(e.target.value)}
                />
              </div>
            </div>

            <div className="country">
              <p className="small-text-heading">Country</p>
              <div className="light-border">
                <input
                  type="text"
                  value={clientCountry}
                  placeholder="City"
                  className="text-field"
                  onChange={(e) => setClientCountry(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="invoice-date-new">
            <div className="date">
              <p className="small-text-heading">Invoice Date</p>
              <div className="light-border">
                <input
                  type="text"
                  value={invoiceDate}
                  placeholder="City"
                  className="text-field"
                  onChange={(e) => {
                    convertDate(setInvoiceDate(e.target.value));
                  }}
                />

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
            <input
              type="text"
              value={projectDescription}
              placeholder="City"
              className="text-field"
              onChange={(e) => setProjectDescription(e.target.value)}
            />
          </div>

          <h3 className="item-list-heading">Item List</h3>

          <div className="item-list-names">
            <div className="item-name">
              <p className="small-text-heading">Item Name</p>
            </div>

            <div className="quantity">
              <p className="small-text-heading">Qty.</p>
            </div>

            <div className="price">
              <p className="small-text-heading">Price</p>
            </div>

            <div className="total">
              <p className="small-text-heading">Total</p>
            </div>
          </div>

          {invoice.items.map((item, index) => {
            return (
              <div key={index} className="item-list-names item-list-inputs">
                <div className="item-name">
                  <div className="light-border">
                    <p className="bold-text">{item.name}</p>
                    <input type="text" className="text-field" />
                  </div>
                </div>

                <div className="quantity">
                  <div className="light-border">
                    <p className="bold-text">{item.quantity}</p>
                  </div>
                </div>

                <div className="price">
                  <div className="light-border">
                    <p className="bold-text">{item.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="total">
                  <div className="no-border">
                    <p className="bold">{(item.quantity * item.price).toFixed(2)}</p>
                  </div>
                </div>

                <img className="trash" src={require("../assets/icon-delete.svg").default} alt="delete" />
              </div>
            );
          })}

          <button className="no-color-btn-2">+ Add New Item</button>
        </div>
        //odavde se ne vazi///////////////////////////////////////////////////////////////////////
        <div className="buttons-down-2">
          <div className="buttons-right">
            <button className="no-color-btn-3" onClick={() => showEditInvoiceForm(false)}>
              Cancel
            </button>
            <button className="violet-btn-2" onClick={editInvoice}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
