import Pagination from '@/src/app/ui/invoices/pagination';
import Search from '@/src/app/ui/search';
import Table from '@/src/app/ui/invoices/table';
import { CreateInvoice } from '@/src/app/ui/invoices/buttons';
import { lusitana } from '@/src/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/src/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/src/app/lib/data';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Invoices',
};
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}