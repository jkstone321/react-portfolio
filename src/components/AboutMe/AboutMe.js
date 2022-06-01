import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Picture from "../images/potfriend.png";
import "./AboutMe.css";
import { Container } from "@mui/system";
// const PicOfMe = require("./images/background1.jpg");

function AboutMe() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  let width = "40rem";
  let direction = "row";
  let justify = "space-around";
  {
    matches ? (width = "auto") : (width = "40rem");
  }
  return (
    <>
      <Container id="about-me-container">
        <Grid
          container
          justifyContent={matches ? "center" : "space-around"}
          direction="row"
        >
          <Grid item className="col-6">
            <p style={{ width }}>
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
          <Grid item className="col-6">
            <img src={Picture} alt="Me" id="image-of-me" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AboutMe;
