import React from 'react';
import {render} from 'react-dom';
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
import { Link } from 'react-router-dom';

import { store } from '../../../init/store'
import { toursFilterActions } from '../../../redux/toursFilter/actions'
import useTour from '../hooks/useTour'
import { reservationActions } from '../../../redux/reservation/actions';
import { useSelector } from 'react-redux';
import { history } from '../../../navigation/history'

const disableBookedDays = (date) => {
    const bookedDays = store.getState().reservation.data?.bookedDays || []
    
    const jsDate = date.toDate() 
    jsDate.setHours(0)
    jsDate.setMinutes(0)
    jsDate.setSeconds(0)
    jsDate.setMilliseconds(0)
    console.log('jsDate',jsDate)
    
    const jsBookedDays = bookedDays.map(d => d.toDate())
    console.log('date', jsBookedDays)
    // console.log(jsBookedDays.includes(jsDate))
    return jsBookedDays.includes(jsDate)
}

const ReservationForm = ({tourId}) => {
    const tour = useTour(tourId)
    const { id } = useSelector(state => state.auth.data || {})
    console.log(id)

    return (
        <>
          <Formik
      initialValues={{
        toCity: '',
        datetime: new Date(),
        duration: '',
        adultsCount: 1,
        kidsCount: 1,
      }}
      validate={(values) => {
        const errors = {};
        return errors;
      }}
      onSubmit={(values, {setSubmitting}) => {
        store.dispatch(reservationActions.saveOrderAsync({
          ...values,
          tourId,
          userId: id,
        }))
        history.back()
      }}
    >
      {({submitForm, isSubmitting, touched, errors}) => (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Form>
            <Box margin={1}>
              <Field
                component={TextField}
                type="text"
                name="toCity"
                label="Місто"
                variant="standard"
                margin="normal"
                value={tour?.toCity.name || ''}
                InputLabelProps={{
                  shrink: true,
                }}
                disabled
              >  
              </Field>
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                type="text"
                name="hotel"
                label="Готель"
                variant="standard"
                margin="normal"
                value={tour?.hotel.name || ''}
                InputLabelProps={{
                  shrink: true,
                }}
                disabled
              >  
              </Field>
            </Box>
            <Box margin={1}>
                <Field 
                    component={DatePicker} 
                    disablePast
                    name="datetime" 
                    label="Початок туру" 
                    shouldDisableDate={disableBookedDays}
                />
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                type="text"
                name="duration"
                label="Тривалість туру"
                variant="standard"
                margin="normal"
                value={`${tour?.duration || ''}`}
                InputLabelProps={{
                  shrink: true,
                }}
                disabled
              >
              </Field>
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                name="adultsCount"
                type="number"
                label="Adults"
                inputProps={{
                    min: 1,
                    max: tour?.hotel.maxAdultsCount || 6
                }}
              />
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                name="kidsCount"
                type="number"
                label="Kids"
                inputProps={{
                    min: 0,
                    max: tour?.hotel.maxKidsCount || 6
                }}
              />
            </Box>
            <Box margin={1}>
              <Button
                variant="contained"
                color="primary"
                // disabled={isSubmitting}
                onClick={submitForm}
              >
                Submit
              </Button>
            </Box>
          </Form>
        </MuiPickersUtilsProvider>
      )}
    </Formik>
    </>
      )
}

export default ReservationForm

