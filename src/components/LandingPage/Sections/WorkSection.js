import React, {useState} from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../MaterialKitComponets/Grid/GridContainer.js";
import GridItem from "../../../MaterialKitComponets/Grid/GridItem.js";
import CustomInput from "../../../MaterialKitComponets/CustomInput/CustomInput.js";
import Button from "../../../MaterialKitComponets/CustomButtons/Button.js";
import emailjs from 'emailjs-com';

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);


const INITIAL_STATE = {
    user_name: '',
    user_email: '',
    message: '',

};
const INITIAL = {
     isSent : false,
    error: false
};

export default function WorkSection() {

    const classes = useStyles();
    const [form, setValues] = useState({...INITIAL_STATE});
    const [state, setState] = useState({...INITIAL});

    const onChange = event => {
        console.log(event.target.name)
        console.log(event.target.value)

        setValues({ ...form, [event.target.name]: event.target.value });
    };

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_ZXIokmO2', e.target, 'user_jBM8sAQLjIt1YP9oDhrgE')
            .then((result) => {
                console.log(result.text);
                setState({...state, isSent : true});
            }, (error) => {
                console.log(error.text);
                setState({error: true, isSent : false});
            });
    }

 return (
    <div className={classes.section}>
      <GridContainer justify="center">
          {!state.isSent &&
          <GridItem cs={12} sm={12} md={8}>
              ' <h2 className={classes.title}>Querés ser parte?</h2>
              <h4 className={classes.description}>
                  Contactate con nosotros.
              </h4>

              <form onSubmit={sendEmail}>
                  <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                          <CustomInput
                              labelText="Nombre"
                              id="user_name"
                              formControlProps={{
                                  fullWidth: true
                              }}
                              inputProps={{
                                  onChange: onChange,
                                  type: "text",
                                  name: "user_name",
                                  value: form.name
                              }}
                          />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                          <CustomInput
                              labelText="Email"
                              id="user_emailz"
                              formControlProps={{
                                  fullWidth: true
                              }}
                              inputProps={{
                                  onChange: onChange,
                                  type: "email",
                                  name: "user_email",
                                  value: form.email
                              }}
                          />
                      </GridItem>
                      <CustomInput
                          labelText="Mensaje"
                          id="message"
                          formControlProps={{
                              fullWidth: true,
                              className: classes.textArea
                          }}
                          inputProps={{
                              onChange: onChange,
                              type: "text",
                              name: "message",
                              value: form.message,
                              multiline: true,
                              rows: 5
                          }}
                      />
                      <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                              <Button type="submit" value="Send" color="primary">Enviar</Button>
                          </GridItem>
                      </GridContainer>
                  </GridContainer>
              </form>
          </GridItem>
          }
          {(!state.err && state.isSent) &&
          <h2 className={classes.title}>Muchas gracias! En breve nos comunicaremos.</h2>
          }
          {state.err &&
          <h2 className={classes.title}>Ocurrió un error.</h2>
          }
      </GridContainer>
    </div>
  );
}
