import React, { useContext, useEffect } from "react";
import {
  Grid,
  makeStyles,
  Card,
  Typography,
  CardContent,
  Divider,
  IconButton,
  Icon,
  Modal,
} from "@material-ui/core";

import Tag from "../Tag";
import CustomerContext from "../../context/Customer";
import ModalContext, { ModalProvider } from "../../context/Modal";
import type { Customer } from "../../context/Customer";
import { relative } from "path";
import ModalForm from "../ModalForm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tableContainer: {
    width: "100%",
    margin: "0 auto",
    flexGrow: 1,
  },
  userCard: {
    boxSizing: "border-box",
    padding: "1.5em 0.5em 0.5em",
    width: "100%",
    position: "relative",
  },
  divider: {
    margin: "0.5em 0",
  },
  editButton: {
    position: "absolute",
    top: "0",
    right: "0",
  },
}));
const CardWithEdit = ({ row }: { row: Customer }) => {
  const classes = useStyles();
  const { modal, openModal, closeModal } = useContext(ModalContext);
  const handleModalClick = () => {
    openModal();
  };
  const handleModalClose = () => {
    closeModal();
  };
  return (
    <>
      <IconButton className={classes.editButton} onClick={handleModalClick}>
        <Icon>edit</Icon>
      </IconButton>
      <CardContent>
        <Typography color="textSecondary" variant="h6">
          {row.name}
        </Typography>
        <Typography color="textSecondary">{row.email}</Typography>
        <Divider variant="fullWidth" className={classes.divider} />
        <Grid
          container
          direction="row"
          item
          spacing={1}
          alignItems="center"
          justify="space-between"
        >
          {row.tags.map((tag, index) => (
            <Tag tag={tag} index={index} key={index} />
          ))}
        </Grid>
      </CardContent>
      <Modal open={modal} onClose={handleModalClose}>
        <ModalForm
          title="Editar Cliente"
          name={row.name}
          email={row.email}
          tags={row.tags}
          formType="update-form"
          id={row._id}
        />
      </Modal>
    </>
  );
};

const UsersTable = () => {
  const { customers, load } = useContext(CustomerContext);

  const classes = useStyles();

  useEffect(() => {
    load();
  }, []);
  return (
    <Grid
      container
      spacing={4}
      direction="row"
      justify="space-between"
      wrap="wrap"
      alignItems="stretch"
      className={classes.tableContainer}
    >
      {customers.map((row) => (
        <Grid
          key={row._id}
          container
          item
          xs={12}
          sm={6}
          lg={5}
          xl={4}
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          wrap="wrap"
          className={classes.root}
        >
          <Card elevation={10} className={classes.userCard}>
            <ModalProvider>
              <CardWithEdit row={row} />
            </ModalProvider>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default UsersTable;
