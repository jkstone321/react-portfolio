import BackgroundImage1 from "./images/background1.jpg";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import "./MyHeader.css";

function MyHeader() {
  return (
    <>
      <Box id="header-box">
        <Container
          id="header-container"
          style={{
            backgroundColor: "black",
            color: "white",
          }}
          className="container1"
        >
          <h5>Hello, my name is</h5>
          <h1>Jordan Stone</h1>
          <h5>and I create websites.</h5>
        </Container>
      </Box>
    </>
  );
}

export default MyHeader;
