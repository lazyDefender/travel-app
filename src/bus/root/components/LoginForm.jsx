import React from 'react'
import firebase from 'firebase'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import {Formik, Form, Field} from 'formik'
import {
  Button,
} from '@material-ui/core'
import {
  TextField,
} from 'formik-material-ui'
import MomentUtils from '@date-io/moment'
import {MuiPickersUtilsProvider} from '@material-ui/pickers'
import Box from '@material-ui/core/Box'

import { store } from '../../../init/store'
import { authActions } from '../../../redux/auth/actions'
import { history } from '../../../navigation/history'



const SignUpForm = () => {
  const [open, setOpen] = React.useState(true)

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Вхід</DialogTitle>
        <DialogContent>
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validate={(values) => {
                const errors = {}
                return errors
            }}
            onSubmit={(values, {setSubmitting}) => {
                store.dispatch(authActions.signIn(values))
                history.back()
            }}
        >
        {({submitForm, isSubmitting, touched, errors}) => (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Form>
                <Box margin={1}>
                    <Field
                    component={TextField}
                    name="email"
                    label="Email"
                    disabled={false}
                    />
                </Box>
                <Box margin={1}>
                    <Field
                    component={TextField}
                    type="password"
                    name="password"
                    label="Пароль"
                    disabled={false}
                    />
                </Box>
                <Box margin={1}>
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={submitForm}
                    >
                    Увійти
                    </Button>
                </Box>
            </Form>
        </MuiPickersUtilsProvider>
        )}
        </Formik>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default SignUpForm