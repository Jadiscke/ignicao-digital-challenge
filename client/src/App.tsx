import { ThemeProvider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Body from "./components/Body";
import Layout from "./components/Layout";
import UsersTable from "./components/UsersTable";
import { getUsers } from "./services/users";
import theme from "./Theme";

const App = () => {
  const [rows, setRows] = useState([
    { _id: "", name: "", email: "", tags: [""] },
  ]);

  useEffect(() => {
    getUsers().then((users) => {
      setRows(users);
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Body title="Usuários Cadastrados">
          <UsersTable rows={rows} />
        </Body>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
