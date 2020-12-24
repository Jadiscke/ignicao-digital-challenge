import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Grid,
  makeStyles,
} from "@material-ui/core";
import theme from "../../Theme";
import { orange } from "@material-ui/core/colors";

interface Row {
  _id: string;
  name: string;
  email: string;
  tags: Array<string>;
}
interface UserTableProps {
  rows: Array<Row>;
}

interface TagProps {
  tag: string;
  index: number;
}
const Tag = ({ tag, index }: TagProps) => {
  return (
    <Box
      component="span"
      margin="1em 0.3em"
      border="#fff solid"
      padding="0.3em"
      bgcolor={orange[300]}
      color="#333"
      key={index}
    >
      {tag}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  userStyle: {
    border: `solid 1px ${theme.palette.text.primary}`,
    margin: "0.3em",
  },
  tableContainer: {
    width: "90%",
    margin: "0 auto",
  },
}));

const UsersTable = ({ rows }: UserTableProps) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={10}
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.tableContainer}
    >
      {rows.map((row) => (
        <Grid
          key={row._id}
          container
          item
          xs={12}
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          className={classes.userStyle}
        >
          <Grid item xs={12} sm={6} md={4}>
            {row.name}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {row.email}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {row.tags.map((tag, index) => (
              <Tag tag={tag} index={index} />
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default UsersTable;
