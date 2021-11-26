import React from "react";
import Data from "../data.json";
import { useNavigate } from "react-router-dom";
import convertDate from "./DayMonthYear";

const DataList = (props) => {
  const navigate = useNavigate();

  const filters = props.filters; // ['draft']

  function openInvoice(invoice) {
    navigate(`/client`, { state: invoice });
  }

  let invoices = JSON.parse(localStorage.getItem("allInvoices"));

  if (filters.length !== 0) {
    invoices = invoices.filter((inv) => filters.includes(inv.status)); // ako su filteri cekirani
  }

  const items = invoices.map((invoice) => {
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
      <div
        key={invoice.id}
        className="item"
        onClick={() => {
          openInvoice(invoice);
        }}
      >
        <div className="invoice-number">
          <span>#</span>
          {invoice.id}
        </div>
        <div className="invoice-date">{`Due ${convertDate(invoice.createdAt)}`}</div>
        <div className="invoice-name">{invoice.clientName}</div>
        <div className="invoice-price">
          <span className="pound">£ </span>
          {invoice.total.toFixed(2)}
        </div>
        <div className="invoice-status" style={{ backgroundColor: bgColorCard }}>
          <div className="circle" style={{ backgroundColor: colorCircleAndText }}></div>
          <p className="letter" style={{ color: colorCircleAndText }}>
            {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
          </p>
        </div>
        <img className="arrow right" src={require("../assets/icon-arrow-right.svg").default} alt="arrow-right" />
      </div>
    );
  });

  return <div className="invoices">{items}</div>;
};

export default DataList;
