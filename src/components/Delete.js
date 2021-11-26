import React from "react";
import { useLocation } from "react-router-dom";

export default function Delete(props) {
  const showDeleteForm = props.showDeleteForm;
  let location = useLocation();
  const invoice = location.state;

  function deleteInvoice() {
    const allInvoices = JSON.parse(localStorage.getItem("allInvoices"));
    const allInvoicesExceptThisOne = allInvoices.filter((inv) => inv.id !== invoice.id);
    localStorage.setItem("allInvoices", JSON.stringify(allInvoicesExceptThisOne));
  }

  return (
    <div className="delete-confirmation light-version">
      <div className="delete-modal">
        <h2 className="delete-heading">Confirm Deletion</h2>
        <p className="delete-paragraph">
          Are you sure you want to delete invoice <span>#</span>
          {invoice.id} This action cannot be undone.
        </p>
        <div className="btn-right">
          <button className="no-color-btn-4" onClick={() => showDeleteForm(false)}>
            Cancel
          </button>
          <button className="delete-btn" onClick={deleteInvoice}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
