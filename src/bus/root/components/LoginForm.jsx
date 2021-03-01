import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import {
  Formik, 
  Form, 
  Field,
} from 'formik'
import {
  Button,
  Typography,
} from '@material-ui/core'
import {
  TextField,
} from 'formik-material-ui'
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import Box from '@material-ui/core/Box'

import { store } from '../../../init/store'
import { authActions } from '../../../redux/auth/actions'
// import { history } from '../../../navigation/history'
import { book } from '../../../navigation/book'
import useAuth from '../../../global/hooks/useAuth'
import { initialValues } from '../initialValues/signIn'
import { validationSchema } from '../validation/signIn'
import useFirstLoadedPage from '../../../global/hooks/useFirstLoadedPage'
import GoHomeBar from '../../../global/components/GoHomeBar'

const signInWithGoogle = () => {
  store.dispatch(authActions.signInWithGoogle())
}

const signInWithFacebook = () => {
  store.dispatch(authActions.signInWithFacebook())
}

const SignUpForm = () => {
  const history = useHistory()
  const [open, setOpen] = React.useState(true)
  const auth = useAuth()
  const firstLoadedPage = useFirstLoadedPage()
  const formJSX = <div>
    <Typography>Вхід</Typography>
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
            store.dispatch(authActions.signIn(values))
            if(['/login', '/signup'].includes(firstLoadedPage)) {
              history.replace('/')
            }
            else if(firstLoadedPage === '/profile') {
              history.replace('/profile')
            }
            else {
              history.back()
            }
            
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
                <Button
                variant="contained"
                color="default"
                onClick={() => {
                  history.replace('/signup')
                }}
                >
                Зареєструватись
                </Button>
            </Box>
            <Box margin={1}>
                <Button
                variant="contained"
                color="primary"
                onClick={signInWithGoogle}
                >
                Увійти через Google
                </Button>
            </Box>
            <Box margin={1}>
                <Button
                variant="contained"
                color="primary"
                onClick={signInWithFacebook}
                >
                Увійти через Facebook
                </Button>
                
            </Box>
        </Form>
    </MuiPickersUtilsProvider>
    )}
    </Formik>
</div>

  const redirectTo = firstLoadedPage === '/login' ? book.root : firstLoadedPage

  const page = <>
    <GoHomeBar/>
    {formJSX}
  </>
  const content = auth.data ? <Redirect to={redirectTo}/> : page 
  return <>
    {content}
  </>
}

export default SignUpForm