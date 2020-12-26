import { ThemeProvider } from "@material-ui/core";
import React from "react";
import Body from "./components/Body";
import Layout from "./components/Layout";
import UsersTable from "./components/UsersTable";
import { CustomerProvider } from "./context/Customer";
import theme from "./Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomerProvider>
        <Layout>
          <Body title="Usuários Cadastrados">
            <UsersTable />
          </Body>
        </Layout>
      </CustomerProvider>
    </ThemeProvider>
  );
};

export default App;
