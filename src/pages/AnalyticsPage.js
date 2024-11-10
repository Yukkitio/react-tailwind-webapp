import React from 'react';
import { Card } from '../components/common/Card';
import { DataTableComponent } from '../components/charts/DataTableComponent';
import { useFetchData } from '../hook/useFetchData';
import { fetchAnalyticsData } from '../api';
import { ActionButtons } from '../components/common/ActionButtons';

export function AnalyticsPage() {
  const { data: analyticsData, loading: loadingAnalytics, error: errorAnalytics } = useFetchData(fetchAnalyticsData);

  const handleEdit = (row) => {
    console.log(`Edit:`, row);
  };

  const handleDelete = (row) => {
    console.log(`Delete:`, row);
  };

  const handleInfo = (row) => {
    console.log(`Info:`, row);
  };

  const analyticsColumns = [
    { name: 'ID', selector: row => row.id, omit: true },
    { name: 'Metric', selector: row => row.metric, sortable: true },
    { name: 'Value', selector: row => row.value, sortable: true },
    { name: 'Change', selector: row => row.change, sortable: true },
    {
      name: 'Actions',
      cell: row => (
        <ActionButtons
          row={row}
          onEdit={() => handleEdit(row)}
          onDelete={() => handleDelete(row)}
          onInfo={() => handleInfo(row)}
          showEdit={true}
          showDelete={true}
          showInfo={true}
        />
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <>
      <header className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mr-4">Analytics</h1>
        <div className="flex-grow border-b border-neutral-300 dark:border-neutral-700"></div>
        <span className="ml-4 text-sm text-neutral-500 dark:text-neutral-400">
          Last updated: {new Date().toLocaleString()}
        </span>
      </header>

      {/* Analytics Data Table */}
      <section className="mb-6">
        <Card loading={loadingAnalytics} error={errorAnalytics} type="Table">
          {!loadingAnalytics && !errorAnalytics && (
            <DataTableComponent
              title="Analytics Data"
              columns={analyticsColumns}
              data={analyticsData}
              selectableRows={true}
              searchable={true}
              onRowSelected={(state) => {
                const selectedIds = state.selectedRows.map(row => row.id);
                console.log('Selected IDs:', selectedIds);
              }}
            />
          )}
        </Card>
      </section>
    </>
  );
}