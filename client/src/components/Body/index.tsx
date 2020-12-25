import { Container, makeStyles, Typography } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import React, { ReactNode } from "react";

interface BodyProps {
  title: string;
  children: ReactNode;
}
const useStyles = makeStyles((theme) => ({
  wrapper: {
    boxSizing: "border-box",
    padding: theme.spacing(2),
    margin: "1em auto",
    width: "90%",
    boxShadow: "0 0.3em 0.5em 0.01em grey",
    backgroundColor: orange[700],
  },
  bodyTitle: {
    margin: "1em auto",
  },
}));

const Body = ({ children, title }: BodyProps) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        color="textPrimary"
        className={classes.bodyTitle}
      >
        {title}
      </Typography>
      {children}
    </Container>
  );
};

export default Body;
