import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "react-animated-3d-card";

export default function DividerStack() {
  return (
    <Box>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {listItems}
      </Grid>
    </Box>
  );
}
const cards = [
  {
    title: "Build faster",
    text: "C, C#, C++, Python, Dart, Java, HTML, Javascript, PHP, SQL"
  },
  {
    title: "Build f",
    text:
      "ROS, OpenCL, CUDA, OpenCV, TensorFlow, Pytorch, .NET, Flutter, Unity, NodeJS, Express"
  },
  {
    title: "Build a",
    text: "C, C#, C++, Python, Dart, Java, HTML, Javascript, PHP, SQL"
  },
  {
    title: "Build d",
    text:
      "ROS, OpenCL, CUDA, OpenCV, TensorFlow, Pytorch, .NET, Flutter, Unity, NodeJS, Express"
  }
];
const listItems = cards.map((item) => (
  <Grid item xs={2} sm={4} md={4} key={item.title}>
    <Card
      style={{
        width: "200px",
        height: "180px",
        cursor: "pointer"
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.text}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
));
