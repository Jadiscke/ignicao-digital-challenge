import { loadavg } from "os";
import React, { createContext, useState } from "react";
import { getUsers, getFilterUsers } from "../services/users";
type Customer = {
  _id: string;
  name: string;
  email: string;
  tags: Array<string>;
};

type CustomerContextData = {
  customers: Array<Customer>;
  load(): Promise<void>;
  setFilters: React.Dispatch<
    React.SetStateAction<{
      filter: string;
      value: string;
    }>
  >;
  filters: {
    filter: string;
    value: string;
  };
};

const defaultCustomers: Array<Customer> = [] as Array<Customer>;

const CustomerContext = createContext<CustomerContextData>(
  {} as CustomerContextData
);

export const CustomerProvider: React.FC = ({ children }) => {
  const [customers, setCustomers] = useState(defaultCustomers);
  const [filters, setFilters] = useState({ filter: "", value: "" });
  async function load() {
    if (filters.filter !== "") {
      const data = await loadWithFilters();
      setCustomers(data);
    } else {
      const data = await getUsers();
      setCustomers(data);
    }
  }

  async function loadWithFilters() {
    return await getFilterUsers(filters);
  }
  return (
    <CustomerContext.Provider value={{ customers, load, setFilters, filters }}>
      {children}
    </CustomerContext.Provider>
  );
};
export type { Customer };
export default CustomerContext;
