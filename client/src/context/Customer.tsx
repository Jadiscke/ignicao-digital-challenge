import React, { createContext, useState } from "react";
import { getUsers } from "../services/users";
type Customer = {
  _id: string;
  name: string;
  email: string;
  tags: Array<string>;
};

type CustomerContextData = {
  customers: Array<Customer>;
  load(): Promise<void>;
};

const defaultCustomers: Array<Customer> = [] as Array<Customer>;

const CustomerContext = createContext<CustomerContextData>(
  {} as CustomerContextData
);

export const CustomerProvider: React.FC = ({ children }) => {
  const [customers, setCustomers] = useState(defaultCustomers);
  async function load() {
    const data = await getUsers();
    setCustomers(data);
  }
  return (
    <CustomerContext.Provider value={{ customers, load }}>
      {children}
    </CustomerContext.Provider>
  );
};
export type { Customer };
export default CustomerContext;
