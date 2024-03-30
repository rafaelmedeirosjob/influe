import Form from '@/src/app/ui/invoices/create-form';
import Breadcrumbs from '@/src/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/src/app/lib/data';


export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}