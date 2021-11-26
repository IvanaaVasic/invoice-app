import React from "react";
import DataList from "./DataList";
import Header from "./Header";
import { useState } from "react";

export default function Main(props) {
  // const [showNewInvoice, setShowNewInvoice] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState([]);

  const selectInvoiceStatus = (selectedStatus) => {
    let newFilters = [];
    if (selectedFilters.includes(selectedStatus)) {
      newFilters = selectedFilters.filter((filter) => filter != selectedStatus);
    } else {
      newFilters = selectedFilters.concat(selectedStatus);
    }

    setSelectedFilters(newFilters);
  };

  return (
    <main className="light-version">
      <Header selectFilterFn={selectInvoiceStatus} filters={selectedFilters} />
      <section>
        <DataList filters={selectedFilters} />
      </section>
    </main>
  );
}
