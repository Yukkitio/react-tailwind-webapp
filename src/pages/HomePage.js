import React from 'react';
import * as Icons from 'lucide-react';

import { LineChart } from '../components/charts/LineChart';
import { PieChart } from '../components/charts/PieChart';
import { Card } from '../components/common/Card';
import { DataTableComponent } from '../components/charts/DataTableComponent';

import statsData from '../components/data/statsData.json';
import salesData from '../components/data/salesData.json';
import marketShareData from '../components/data/marketShareData.json';
import recentOrders from '../components/data/recentOrders.json';

export function HomePage() {
  return (
    <>
      <header className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mr-4">Dashboard</h1>
        <div className="flex-grow border-b border-neutral-300 dark:border-neutral-700"></div>
        <span className="ml-4 text-sm text-neutral-500 dark:text-neutral-400">
          Last updated: {new Date().toLocaleString()}
        </span>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statsData.map((stat, i) => {
          const IconComponent = Icons[stat.icon];
          return (
            <Card key={i}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{stat.value}</h3>
                </div>
                <div className={`px-3 pt-6 rounded-full ${stat.color} bg-opacity-10`}>
                  {IconComponent && <IconComponent className={`h-6 w-6 ${stat.color}`} />}
                </div>
              </div>
              <p className={`text-sm mt-2 ${stat.color}`}>{stat.change} from last month</p>
            </Card>
          );
        })}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2 h-[300px]">
          <LineChart data={salesData} title="Revenue Trend" />
        </Card>
        <Card className="h-[300px]">
          <PieChart data={marketShareData} title="Market Share" />
        </Card>
      </section>

      <Card>
        <DataTableComponent data={recentOrders} />
      </Card>
    </>
  );
}
