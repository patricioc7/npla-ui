import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../MaterialKitComponets/Grid/GridContainer.js";
import GridItem from "../../../MaterialKitComponets/Grid/GridItem.js";
import Button from "../../../MaterialKitComponets/CustomButtons/Button.js";
import Card from "../../../MaterialKitComponets/Card/Card.js";
import CardBody from "../../../MaterialKitComponets/Card/CardBody.js";
import CardFooter from "../../../MaterialKitComponets/Card/CardFooter.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import logo from "../../../assets/img/nplalogo.jpg";
import team2 from "../../../assets/img/faces/christian.jpg";
import team3 from "../../../assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
        <GridContainer>
          <GridItem>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={logo} alt="..." className={imageClasses} />
              </GridItem>
            </Card>
          </GridItem>
        </GridContainer>
    </div>
  );
}
