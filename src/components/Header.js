import React from "react";
import Data from "../data.json";
import { useState } from "react";
import New from "./New";

export default function Header(props) {
  const [ShowNewInvoice, setShowNewInvoice] = useState(false);

  const selectFilterFn = props.selectFilterFn;
  const selectedFilters = props.filters;

  const [show, setShow] = useState(false);
  const [arrow, setArrow] = useState(true);

  function showModal() {
    setShow(!show);
    setArrow(!arrow);
  }

  return (
    <header>
      <div className="header-wrapper">
        <div className="headline">
          <div className="headline-left">
            <h1 className="invoices-heading">Invoices</h1>
            <p>{`There are ${Data.invoices.length} total invoices`}</p>
          </div>
        </div>

        <div className="headline-right">
          <div className="filter-dropdown">
            <button onClick={showModal} className="no-color-btn">
              Filter by status
              {arrow ? (
                <img className="arrow down" src={require("../assets/icon-arrow-down.svg").default} alt="arrow-down" />
              ) : (
                <img
                  className="arrow down up"
                  src={require("../assets/icon-arrow-down.svg").default}
                  alt="arrow-down"
                />
              )}
            </button>

            {show ? (
              <div className="filter">
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    onChange={() => selectFilterFn("draft")}
                    checked={selectedFilters.includes("draft")}
                  ></input>
                  <span className="checkmark"></span> Draft
                </label>
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    onChange={() => selectFilterFn("pending")}
                    checked={selectedFilters.includes("pending")}
                  ></input>
                  <span className="checkmark"></span> Pending
                </label>
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    onChange={() => selectFilterFn("paid")}
                    checked={selectedFilters.includes("paid")}
                  ></input>
                  <span className="checkmark"></span> Paid
                </label>
              </div>
            ) : null}
          </div>
          <button onClick={() => setShowNewInvoice(true)} className="violet-btn">
            <img className="btn-plus" src={require("../assets/icon-plus.svg").default} alt="plus" /> New Invoice
          </button>
        </div>
      </div>

      {ShowNewInvoice ? <New showNewInvoiceForm={setShowNewInvoice} show={show} /> : null}
    </header>
  );
}
