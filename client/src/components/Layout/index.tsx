import React, { ReactNode } from "react";
import {
  AppBar,
  Box,
  Button,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

interface LayoutProps {
  children: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#ffffff",
  },
  title: {
    flexGrow: 1,
  },
}));
const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}>
            <Icon>menu</Icon>
          </IconButton>
          <Typography
            variant="h6"
            color="textPrimary"
            className={classes.title}
          >
            Ignição Digital
          </Typography>
          <Button color="inherit">
            <Typography color="textPrimary" variant="button">
              Login
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

export default Layout;
