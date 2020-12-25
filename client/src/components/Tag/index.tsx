import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

interface TagProps {
  tag: string;
  index: number;
}

const useTagStyles = makeStyles((theme) => ({
  tagBox: {
    display: "inline-block",
    boxSizing: "border-box",
    maxWidth: "100px",
  },
}));
const Tag = ({ tag, index }: TagProps) => {
  const classes = useTagStyles();
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box
        border="solid 1px"
        borderColor={orange[300]}
        bgcolor={orange[100]}
        component="div"
        display="inline-block"
        padding="0.3em"
      >
        <Typography color="secondary">{tag}</Typography>
      </Box>
    </Grid>
  );
};

export default Tag;
