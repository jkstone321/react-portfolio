import { Container } from "@mui/system";
import "./MyProjects.css";
import Box from "@mui/material/Box";

function MyProjects() {
  return (
    <>
      <Container id="my-header-container">
        <h2 id="projects-header">My Projects</h2>
      </Container>
      <Container id="my-project-container">
        <Box
          className="project-box"
          id="box1"
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
          }}
        ><h1 id="project-name">iDunno</h1></Box>
        <Box
        className="project-box"
          id="box2"
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
          }}
        ><h1 id="project-name">Planted</h1></Box>
        <Box
        className="project-box"
          id="box3"
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
          }}
        ><h1 id="project-name">Project 3</h1></Box>

        <Container id="overlay-container">
          <Box
            id="box-overlay"
            sx={{
              width: 300,
              height: 300,
              "&:hover": {
                opacity: 0.0,
              },
            }}
          ></Box>
          <Box
            id="box-overlay"
            sx={{
              width: 300,
              height: 300,
              "&:hover": {
                opacity: 0.0,
              },
            }}
          ></Box>
          <Box
            id="box-overlay"
            sx={{
              width: 300,
              height: 300,
              "&:hover": {
                opacity: 0.0,
              },
            }}
          ></Box>
        </Container>
      </Container>
    </>
  );
}

export default MyProjects;
