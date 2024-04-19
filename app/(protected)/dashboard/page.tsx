import { Card } from '@/components/ui/card';
import RevenueChart from '@/components/ui/dashboard/revenue-chart';
import LatestInvoices from '@/components/ui/dashboard/latest-invoices';
import { lusitana } from '@/lib/fonts';
import { getCountAllProposes } from '@/lib/dashboard';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/components/ui/skeletons';

export default async function Page() {
    const cardData = await getCountAllProposes(); 
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={cardData} type="collected" />
        <Card title="Pending" value={cardData} type="pending" />
        <Card title="Total Invoices" value={cardData} type="invoices" />
        <Card
          title="Total Customers"
          value={1}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
            <RevenueChart />
        </Suspense>
        <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}