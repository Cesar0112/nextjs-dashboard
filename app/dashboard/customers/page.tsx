import { fetchFilteredCustomers } from "@/app/lib/data";

import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Customers",
};
export default async function Page(
  props: Readonly<{
    searchParams?: Promise<{
      query?: string;
      page?: string;
    }>;
  }>,
) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const rowCustomers = await fetchFilteredCustomers(query);

  return <CustomersTable customers={rowCustomers} />;
}
