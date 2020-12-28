import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

interface TagProps {
  tag: string;
  index: number;
}
const Tag = ({ tag, index }: TagProps) => {
  return (
    <Grid item xs={12} md={6} lg={4} key={`${tag}-${index}`}>
      <Box
        border="solid 1px"
        borderColor={orange[300]}
        bgcolor={orange[100]}
        component="div"
        display="inline-block"
        padding="0.3em"
      >
        <Typography>{tag}</Typography>
      </Box>
    </Grid>
  );
};

export default Tag;
