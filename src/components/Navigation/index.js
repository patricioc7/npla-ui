import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import Button from "../../MaterialKitComponets/CustomButtons/Button";
import CustomDropdown from "../../MaterialKitComponets/CustomDropdown/CustomDropdown";
import Header from "../../MaterialKitComponets/Header/Header";

import styles from "../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import SignOutButton from "../SignOut";
import HeaderLinks from "../../MaterialKitComponets/Header/HeaderLinks";
const useStyles = makeStyles(styles);


const Navigation = (props) => (

    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? <NavigationAuth  {...props}/> : <NavigationNonAuth />
        }
    </AuthUserContext.Consumer>
);

const NavigationAuth = (props) => {
    const classes = useStyles();

    return(
        <Header
            color="dark"
            fixed
            brand = "Nuevo Paradigma Liberación Animal"
            changeColorOnScroll={{
                height: 100,
                color: "white"
            }}
            rightLinks={<HeaderLinks />}

        />
    )
}

const NavigationNonAuth = () => {
    const classes = useStyles();
    return(
        <Header
            color="dark"
            fixed
            brand = "Nuevo Paradigma Liberación Animal"
            changeColorOnScroll={{
                height: 100,
                color: "white"
            }}
            rightLinks={<HeaderLinks />}

        />)

}



export default Navigation;
