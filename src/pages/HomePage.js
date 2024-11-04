import React from 'react';
import { LineChart } from '../components/charts/LineChart';
import { PieChart } from '../components/charts/PieChart';
import { DollarSign, Users, Package, ShoppingCart } from 'lucide-react';
import { Card } from '../components/common/Card';

const statsData = [
  { icon: DollarSign, label: 'Revenue', value: '$24,567', change: '+12.5%', color: 'text-green-600' },
  { icon: Users, label: 'Active Users', value: '1,234', change: '+8.2%', color: 'text-blue-600' },
  { icon: ShoppingCart, label: 'Orders', value: '456', change: '+5.7%', color: 'text-purple-600' },
  { icon: Package, label: 'Products', value: '789', change: '+3.4%', color: 'text-orange-600' },
];

const salesData = [
  { label: 'Jan', value: 65 },
  { label: 'Feb', value: 45 },
  { label: 'Mar', value: 75 },
  { label: 'Apr', value: 55 },
  { label: 'May', value: 85 },
  { label: 'Jun', value: 70 },
];

const marketShareData = [
  { label: 'Product A', value: 35, color: '#4F46E5' },
  { label: 'Product B', value: 25, color: '#10B981' },
  { label: 'Product C', value: 20, color: '#F59E0B' },
  { label: 'Others', value: 20, color: '#6B7280' },
];

const recentOrders = [
  { id: '#12345', customer: 'John Doe', status: 'Delivered', amount: '$234.50' },
  { id: '#12346', customer: 'Jane Smith', status: 'Pending', amount: '$125.99' },
  { id: '#12347', customer: 'Bob Wilson', status: 'Processing', amount: '$599.99' },
  { id: '#12348', customer: 'Alice Brown', status: 'Delivered', amount: '$99.99' },
];

export function HomePage() {
  return (
    <>
      <header className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mr-4">Dashboard</h1>
        <div className="flex-grow border-b border-neutral-300 dark:border-neutral-700"></div>
        <span className="ml-4 text-sm text-neutral-500 dark:text-neutral-400">Last updated: {new Date().toLocaleString()}</span>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statsData.map((stat, i) => (
          <Card key={i}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
            <p className={`text-sm mt-2 ${stat.color}`}>{stat.change} from last month</p>
          </Card>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2">
          <LineChart data={salesData} title="Revenue Trend" />
        </Card>
        <Card>
          <PieChart data={marketShareData} title="Market Share" />
        </Card>
      </section>

      <Card>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-neutral-800 divide-y divide-gray-200 dark:divide-neutral-700">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-neutral-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300'
                          : order.status === 'Processing'
                          ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300'
                          : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {order.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
