import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../MaterialKitComponets/Grid/GridContainer.js";
import GridItem from "../../MaterialKitComponets/Grid/GridItem.js";
import Button from "../../MaterialKitComponets/CustomButtons/Button.js";
import Parallax from "../../MaterialKitComponets/Parallax/Parallax.js";

import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import WorkSection from "./Sections/WorkSection.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function LandingPage(props) {
    const [modal, setModal] = React.useState(false);
    const classes = useStyles();
  const { ...rest } = props;
    return (
    <div>

      <Parallax filter image={require("../../assets/img/bg_8.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>Podés cambiar el mundo.</h1>
              <h4>
                  Un activismo destinado a informar y educar a quienes todavía no pueden comprender el
                  Veganismo, ni que el Veganismo no es un hecho aislado, sino que forma parte de un nuevo paradigma donde
                  todas las formas de esclavitud y explotación originadas en la cosificación impuesta por la cultura patriarcal
                  están destinadas a desaparecer.
              </h4>
              <br />
              <Button
                  onClick={() => setModal(true)}
                color="primary"
                size="lg"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Ver video
              </Button>
                <Dialog
                    classes={{
                        root: classes.center,
                        paper: classes.modal
                    }}
                    open={modal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setModal(false)}
                    aria-labelledby="modal-slide-title"
                    aria-describedby="modal-slide-description"
                >
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0bGUzBJY43o" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </Dialog>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <WorkSection />
        </div>
      </div>
    </div>
  );
}
