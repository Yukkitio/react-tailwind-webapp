import React from 'react';
import DataTable from 'react-data-table-component';

const orderColumns = [
  { name: 'Order ID', selector: row => row.id, sortable: true },
  { name: 'Customer', selector: row => row.customer, sortable: true },
  { name: 'Status', selector: row => row.status, sortable: true },
  { name: 'Amount', selector: row => row.amount, sortable: true },
];

export function DataTableComponent({ data }) {
  return (
    <div className="datatable-container">
      <DataTable
        columns={orderColumns}
        data={data}
        customStyles={customStyles}
      />
    </div>
  );
}

const customStyles = {
  rows: {
    style: {
      minHeight: '72px',
    },
  },
  headCells: {
    style: {
      fontSize: '16px',
      fontWeight: '600',
    },
  },
  cells: {
    style: {
      padding: '12px',
    },
  },
};

export default DataTableComponent;
