import {
  Container,
  Icon,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import React, { ChangeEvent, FormEvent, ReactNode, useContext } from "react";
import CustomerContext from "../../context/Customer";

interface BodyProps {
  title: string;
  children: ReactNode;
}
const useStyles = makeStyles((theme) => ({
  wrapper: {
    boxSizing: "border-box",
    padding: theme.spacing(2),
    margin: "1em auto",
    width: "95%",
    boxShadow: "0 0.3em 0.5em 0.01em grey",
    backgroundColor: orange[700],
  },
  bodyTitle: {
    margin: "1em auto",
  },
  filterWrapper: {
    margin: "1em auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  filterForm: {
    margin: "1em auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    maxWidth: 400,
  },
  filter: {
    width: "100%",
  },
}));

const Body = ({ children, title }: BodyProps) => {
  const { filters, setFilters, load } = useContext(CustomerContext);
  const classes = useStyles();
  const mapFilterLabels = new Map([
    ["name", "Nome"],
    ["tag", "Tag"],
    ["email", "Email"],
  ]);

  const handleChangeFilterType = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      filter: event.target.value,
    });
  };

  const handleChangeFilterValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      value: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await load();
    } catch (error) {}
  };
  return (
    <Container maxWidth="xl" className={classes.wrapper}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        color="textPrimary"
        className={classes.bodyTitle}
      >
        {title}
      </Typography>
      <form onSubmit={handleSubmit} className={classes.filterForm}>
        <TextField
          select
          defaultValue="name"
          color="secondary"
          className={classes.filter}
          value={filters.filter}
          onChange={handleChangeFilterType}
        >
          <option value="name">Nome</option>
          <option value="tag">Tag</option>
          <option value="email">Email</option>
        </TextField>
        <div className={classes.filterWrapper}>
          <TextField
            color="secondary"
            label={mapFilterLabels.get(filters.filter)}
            className={classes.filter}
            onChange={handleChangeFilterValue}
          />
          <IconButton type="submit">
            <Icon fontSize="small">search</Icon>
          </IconButton>
        </div>
      </form>

      {children}
    </Container>
  );
};

export default Body;
