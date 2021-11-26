import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import convertDate from "./DayMonthYear";
import { useState } from "react";
import Edit from "./Edit";
import Delete from "./Delete";

const DataList = () => {
  const [ShowEditInvoice, setShowEditInvoice] = useState(false);
  const [ShowDeleteModal, setShowDeleteModal] = useState(false);

  let location = useLocation();

  const invoice = JSON.parse(localStorage.getItem("allInvoices")).filter((inv) => inv.id === location.state.id)[0];

  // const invoice = location.state;

  const navigate = useNavigate();
  function goBack(invoice) {
    navigate(`/`);
  }
  // function deletePage(invoice) {
  //   console.log(invoice.id);
  // }

  let bgColorCard = "";
  let colorCircleAndText = "";
  if (invoice.status === "paid") {
    bgColorCard = "rgba(51, 214, 159, 0.06)";
    colorCircleAndText = "#33d69f";
  } else if (invoice.status === "pending") {
    bgColorCard = "rgba(255, 143, 0, 0.06)";
    colorCircleAndText = "#FF8F00";
  } else {
    bgColorCard = "rgba(55, 59, 83, 0.06)";
    colorCircleAndText = "#373B53";
  }

  return (
    <div className="main light-version">
      <div className="column light-version">
        <div key={invoice.id} className="invoice-page">
          <div className="client-header">
            <div className="back-btn">
              <button
                className="go-back"
                onClick={() => {
                  goBack(invoice);
                }}
              >
                <img className="arrow-left" src={require("../assets/icon-arrow-left.svg").default} alt="arrow-left" />
                Go back
              </button>
            </div>
            <div className="btn-up-bar">
              <div className="up-bar-left">
                <p>Status</p>
                <div className="invoice-status-2" style={{ backgroundColor: bgColorCard }}>
                  <div className="circle" style={{ backgroundColor: colorCircleAndText }}></div>
                  <p className="letter" style={{ color: colorCircleAndText }}>
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </p>
                </div>
              </div>
              <div className="up-bar-right">
                <button className="no-color-btn-4" onClick={() => setShowEditInvoice(true)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => {
                    // deletePage(invoice);
                    setShowDeleteModal(true);
                  }}
                >
                  Delete
                </button>
                <button className="violet-btn-3">Mark as Paid</button>
              </div>
            </div>
          </div>
          <div className="client-section">
            <div className="invoice-data">
              <div className="inv-data-left">
                <h4 className="invoice-id-heading">
                  <span>#</span>
                  {invoice.id}
                </h4>
                <p>{invoice.description}</p>
              </div>

              <div className="inv-data-right">
                <p>{invoice.senderAddress.street}</p>
                <p>{invoice.senderAddress.city}</p>
                <p>{invoice.senderAddress.postCode}</p>
                <p>{invoice.senderAddress.country}</p>
              </div>
            </div>
            <div className="sending-data">
              <div className="date-payment-due">
                <div>
                  <p className="invoice-info-heading">Invoice Data</p>
                  <h4>{convertDate(invoice.createdAt)}</h4>
                </div>
                <div>
                  <p className="invoice-info-heading">Payment Due</p>
                  <h4>{convertDate(invoice.paymentDue)}</h4>
                </div>
              </div>
              <div className="bill-to">
                <p className="invoice-info-heading">Bill To</p>
                <h4 className="invoice-client-name-heading">{invoice.clientName}</h4>
                <p>{invoice.clientAddress.street}</p>
                <p>{invoice.clientAddress.city}</p>
                <p>{invoice.clientAddress.postCode}</p>
                <p>{invoice.clientAddress.country}</p>
              </div>
              <div className="sent-to">
                <p className="invoice-info-heading">Sent to</p>
                <h4>{invoice.clientEmail}</h4>
              </div>
            </div>

            <div className="payment-data">
              <div className="payment-data-headings">
                <div className="item-name-edit">
                  <p>Item Name</p>
                </div>
                <div className="quantity-edit">
                  <p>QTY.</p>
                </div>
                <div className="price-edit">
                  <p>Price</p>
                </div>
                <div className="total-edit">
                  <p>Total</p>
                </div>
              </div>

              {invoice.items.map((item, index) => (
                <div key={index} className="item-list-names">
                  <div className="item-name-invoice-edit">
                    <p className="bold-text">{item.name}</p>
                  </div>

                  <div className=" item-quantity-invoice-edit">
                    <p className="bold">{item.quantity}</p>
                  </div>

                  <div className=" item-price-invoice-edit">
                    <p className="bold">£ {item.price.toFixed(2)}</p>
                  </div>

                  <div className=" item-total-invoice-edit">
                    <p className="bold-text">£ {item.total.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="dark-part">
              <p>Amount Due</p>
              <h2 className="color-white">£ {invoice.total.toFixed(2)}</h2>
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>
      {ShowEditInvoice ? <Edit showEditInvoiceForm={setShowEditInvoice} /> : null}
      {ShowDeleteModal ? <Delete showDeleteForm={setShowDeleteModal} /> : null}
    </div>
  );
};

export default DataList;
