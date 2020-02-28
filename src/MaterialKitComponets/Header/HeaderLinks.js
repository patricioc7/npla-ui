/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
export default function HeaderLinks(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Nuestra Misión"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                        <Link to="/" className={classes.dropdownLink}>
                            Activismo
                        </Link>,
                        <a
                            href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
                            target="_blank"
                            className={classes.dropdownLink}
                        >
                            Preguntas Frecuentes
                        </a>
                    ]}
                />
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-facebook"
                    title="Seguinos en Facebook"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        color="transparent"
                        href="https://www.facebook.com/nuevoparadigmaliberacionanimal/"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-facebook"} />
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-tooltip"
                    title="Seguinos en Instagram"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        color="transparent"
                        href="https://www.instagram.com/npliberacionanimal/"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-instagram"} />
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}
