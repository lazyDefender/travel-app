import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {Formik, Form, Field} from 'formik';
import {
  Button,
  LinearProgress,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  ListSubheader,
} from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField'
import {
  fieldToTextField,
  TextField,
  TextFieldProps,
  Select,
  Switch,
} from 'formik-material-ui';
import {
  TimePicker,
  DatePicker,
  DateTimePicker,
} from 'formik-material-ui-pickers';
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import Box from '@material-ui/core/Box';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { store } from '../../../init/store'
import { toursActions } from '../../../redux/tours/actions'
import { Link } from 'react-router-dom';
import { authActions } from '../../../redux/auth/actions';
import { history } from '../../../navigation/history'
import { profileActions } from '../../../redux/profile/actions';
import useAuth from '../../../global/hooks/useAuth'


const UserForm = () => {
    const { id } = useAuth() || {}
    return <>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
            }}
            validate={(values) => {
                const errors = {};
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                // alert(JSON.stringify(values, null, 2));
                store.dispatch(profileActions.updateUser({
                    ...values,
                    id,
                }))
            }}
        >
        {({submitForm, isSubmitting, touched, errors}) => (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            Змінити дані користувача
            <Form>
                <Box margin={1}>
                    <Field
                    component={TextField}
                    type="text"
                    name="firstName"
                    label="Ім'я"
                    disabled={false}
                    />
                </Box>
                <Box margin={1}>
                    <Field
                    component={TextField}
                    type="text"
                    name="lastName"
                    label="Прізвище"
                    disabled={false}
                    />
                </Box>
                <Box margin={1}>
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={submitForm}
                    >
                    Готово
                    </Button>
                </Box>
            </Form>
        </MuiPickersUtilsProvider>
        )}
    </Formik>
    </>
}

export default UserForm