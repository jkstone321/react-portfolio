import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Picture from "./images/potfriend.png";
import "./AboutMe.css";
import { Container } from "@mui/system";
// const PicOfMe = require("./images/background1.jpg");

function AboutMe() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Container id="about-me-container">
        <Grid container justifyContent="space-around">
          <Grid item>
            <p style={{ width: "40rem" }}>
              <h2>About Me</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Grid>
          <Grid item>
            <img src={Picture} alt="Me" id="image-of-me" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AboutMe;
