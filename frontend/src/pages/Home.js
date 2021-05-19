import React, { useState, useEffect } from "react";
import ProjectList from "../components/ProjectList";
import { Typography, Box } from "@material-ui/core";
import { getProjects } from "api-requests";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProjects().then((json) => setData(Object.values(json)));
  }, []);

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h2" component="h1" align="center">
        Projects
      </Typography>
      <ProjectList list={data} />
    </Box>
  );
};

export default Home;
