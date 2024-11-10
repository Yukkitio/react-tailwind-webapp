import React from 'react';
import * as Icons from 'lucide-react';

import { LineChart } from '../components/charts/LineChart';
import { PieChart } from '../components/charts/PieChart';
import { Card } from '../components/common/Card';
import { DataTableComponent } from '../components/charts/DataTableComponent';
import { useFetchData } from '../hook/useFetchData';
import { fetchStatsData, fetchSalesData, fetchMarketShareData, fetchRecentOrders } from '../api';
import { ActionButtons } from '../components/common/ActionButtons';

export function HomePage() {
  const { data: statsData, loading: loadingStats, error: errorStats } = useFetchData(fetchStatsData);
  const { data: salesData, loading: loadingSales, error: errorSales } = useFetchData(fetchSalesData);
  const { data: marketShareData, loading: loadingMarketShare, error: errorMarketShare } = useFetchData(fetchMarketShareData);
  const { data: recentOrders, loading: loadingOrders, error: errorOrders } = useFetchData(fetchRecentOrders);

  const handleInfo = (row) => {
    console.log(`Info:`, row);
  };
  
  const orderColumns = [
    { name: 'ID', selector: row => row.id, omit: true },
    { name: 'Customer', selector: row => row.customer, sortable: true },
    { name: 'Status', selector: row => row.status, sortable: true },
    { name: 'Amount', selector: row => row.amount, sortable: true },
    {
      name: 'Actions',
      cell: row => (
        <ActionButtons
          row={row}
          showEdit={false}
          showDelete={false}
          showInfo={true}
          onInfo={() => handleInfo(row)}
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
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mr-4">Dashboard</h1>
        <div className="flex-grow border-b border-neutral-300 dark:border-neutral-700"></div>
        <span className="ml-4 text-sm text-neutral-500 dark:text-neutral-400">
          Last updated: {new Date().toLocaleString()}
        </span>
      </header>

      {/* Stat Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {(loadingStats || errorStats ? [...Array(4)] : statsData).map((stat, i) => {
          const IconComponent = Icons[stat?.icon];
          return (
            <Card key={i} loading={loadingStats} error={errorStats} type="Text">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">{stat?.label}</p>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{stat?.value}</h3>
                </div>
                <div className={`px-3 pt-6 rounded-full text-${stat?.color}-600 bg-opacity-10`}>
                  {IconComponent && <IconComponent className={`h-6 w-6 text-${stat?.color}-600`} />}
                </div>
              </div>
              <p className={`text-sm mt-2 text-${stat?.color}-600`}>{stat?.change} from last month</p>
            </Card>
          );
        })}
      </section>

      {/* Sales and Market Share Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card loading={loadingSales} error={errorSales} className="lg:col-span-2 h-[300px]" type="Graph">
          {!loadingSales && !errorSales && <LineChart data={salesData} title="Revenue Trend" />}
        </Card>
        <Card loading={loadingMarketShare} error={errorMarketShare} className="h-[300px]" type="Graph">
          {!loadingMarketShare && !errorMarketShare && <PieChart data={marketShareData} title="Market Share" />}
        </Card>
      </section>

      {/* Recent Orders Table */}
      <Card loading={loadingOrders} error={errorOrders} type="Table">
        {!loadingOrders && !errorOrders && (
          <DataTableComponent title="Recent Orders" columns={orderColumns} data={recentOrders} />
        )}
      </Card>
    </>
  );
}

export default HomePage;
