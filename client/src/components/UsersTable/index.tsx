import React from "react";
import {
  Grid,
  makeStyles,
  Card,
  Typography,
  CardContent,
  Divider,
} from "@material-ui/core";

import Tag from "../Tag";

interface Row {
  _id: string;
  name: string;
  email: string;
  tags: Array<string>;
}
interface UserTableProps {
  rows: Array<Row>;
}

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
    padding: "0.5em",
    width: "100%",
  },
  divider: {
    margin: "0.5em 0",
  },
}));

const UsersTable = ({ rows }: UserTableProps) => {
  const classes = useStyles();
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
      {rows.map((row) => (
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
                  <Tag tag={tag} index={index} />
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default UsersTable;
