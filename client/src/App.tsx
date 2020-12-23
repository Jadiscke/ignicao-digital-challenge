import { ThemeProvider } from "@material-ui/core";
import React from "react";
import Body from "./components/Body";
import Layout from "./components/Layout";
import UsersTable from "./components/UsersTable";
import theme from "./Theme";

const rows = [
  {
    id: "1",
    name: "vinicius",
    email: "vjtasso@gmail.com",
    tags: ["empreendedor", "aluno"],
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Body title="Usuários Cadastrados">
          <UsersTable rows={rows} />
        </Body>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
