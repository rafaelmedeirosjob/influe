import { Card } from '@/components/ui/dashboard/cards';
import RevenueChart from '@/components/ui/dashboard/revenue-chart';
import LatestInvoices from '@/components/ui/dashboard/latest-invoices';
import { lusitana } from '@/lib/fonts';
import { getCountAllProposes } from '@/lib/dashboard';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/components/ui/skeletons';

export default async function Page() {
    const countProposesPending = await getCountAllProposes(); 
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="New Fallows" value={1} type="collected" />
        <Card title="Proposes Pending" value={countProposesPending} type="pending" />
        <Card title="Payments Received" value={3} type="invoices" />
        <Card
          title="Proposes Customers"
          value={1}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
            <RevenueChart />
        </Suspense>
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}