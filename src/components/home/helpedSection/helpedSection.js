import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";

import locationImg from "../../../assets/images/location.svg";
import eyeImg from "../../../assets/images/eye.svg";
import infoImg from "../../../assets/images/info.svg";
import timeImg from "../../../assets/images/time.svg";
import faceImg from "../../../assets/images/face.svg";
import mobileImg from "../../../assets/images/mobile.svg";
import plusImg from "../../../assets/images/plus.svg";

function HelpedSection () {
  const items = [
    { id: 1, name: "Find place", image: locationImg },
    { id: 2, name: "A’awen", image: eyeImg },
    { id: 3, name: "Omniyat", image: infoImg },
    { id: 4, name: "Give Time", image: timeImg },
    { id: 5, name: "Tofoula", image: faceImg },
    { id: 6, name: "Fundraising", image: mobileImg },
    { id: 7, name: "Zakat", image: plusImg },
  ];
  return (
    <Box textAlign="center" mt="5rem" py="5rem" className="homeFooter-container">
      <Box className="content">
        <Typography variant="h3">How we have helped</Typography>
        <Typography variant="h6">
          See how Al Foundation have promoted change locally and to the world
        </Typography>

        <Container>
          <Grid
            direction="row"
            justifyContent="center"
            alignItems="center"
            container
          >
            <Grid item>
              <Box display="flex" className="cards-container" my="4rem">
                {items.map((item) => (
                  <Box
                    className="card"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    id={item.id}
                  >
                    <Box className="card-content">
                      <img src={item.image} alt={item.name} />
                      <Typography variant="body1">{item.name}</Typography>

                      <AddIcon />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
export default HelpedSection
