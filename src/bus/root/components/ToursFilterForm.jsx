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

import useCities from '../hooks/useCities' 
import GoogleMap from './GoogleMap';
import useToursFilter from '../hooks/useToursFilter';
import { store } from '../../../init/store'
import { toursActions } from '../../../redux/tours/actions'

const ranges = [
    {
      value: 'Київ',
      label: 'Київ',
    },
    {
      value: 'Львів',
      label: 'Львів',
    },
    {
      value: 'Харків',
      label: 'Харків',
    },
    {
      value: 'Одеса',
      label: 'Одеса',
    },
    {
      value: 'Запоріжжя',
      label: 'Запоріжжя',
    },
  ];

const ToursFilterForm = () => {

  const citiesRes = useCities()
  const cities = citiesRes.data
  const countries = new Set(cities?.map(city => city.country))
  const countriesTo = []
  const daysCounts = new Array(19).fill(0).map((_, i) => i).map(n => n + 3)
  console.log('counts', daysCounts)

  for(let country of countries) {
    const citiesByCountry = cities.filter(city => city.country === country)
    countriesTo.push({
      country,
      cities: citiesByCountry,
    })
  }

    return (
        <Formik
    initialValues={{
      fromCity: '',
      toCity: '',
      datetime: new Date(),
      duration: '',
      adultsCount: '',
      kidsCount: '',
    }}
    validate={(values) => {
      const errors = {};
      return errors;
    }}
    onSubmit={(values, {setSubmitting}) => {
      setTimeout(() => {
        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
      }, 500);
      store.dispatch(toursActions.fetchAsync(values))
    }}
  >
    {({submitForm, isSubmitting, touched, errors}) => (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Form>
        <Box margin={1}>
            <Field
              component={TextField}
              type="text"
              name="fromCity"
              label="Звідки"
              select
              variant="standard"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            >
              {cities?.filter(city => city.isFrom === true).map((city) => (
                <MenuItem key={city.id} value={city.id}>
                  {city.name}
                </MenuItem>
              ))}
            </Field>
          </Box>
          {isSubmitting && <LinearProgress />}
          
          
          <Box margin={1}>
            <Field
              component={TextField}
              type="text"
              name="toCity"
              label="Куди"
              select
              variant="standard"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            >
              {/* {countriesTo?.map(country => {
                const headerJSX = <ListSubheader>{country.country}</ListSubheader>
                const citiesJSX = country.cities.map(city => <MenuItem key={city.id} value={city.name}>{city.name}</MenuItem>)
                return <>
                  {headerJSX}
                  {citiesJSX}
                </>
                
              })} */}
              {cities?.map((city) => (
                <MenuItem key={city.id} value={city.id}>
                  {city.name}
                </MenuItem>
              ))}
            </Field>
          </Box>
          <Box margin={1}>
            <Field component={DatePicker} disablePast={true} name="datetime" label="Початок туру" />
          </Box>
          <Box margin={1}>
            <Field
              component={TextField}
              type="text"
              name="duration"
              label="Тривалість туру"
              select
              variant="standard"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            >
              
              {daysCounts.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Field>
          </Box>
          <Box margin={1}>
            <Field
              component={TextField}
              name="adultsCount"
              type="number"
              label="Adults"
            />
          </Box>
          <Box margin={1}>
            <Field
              component={TextField}
              name="kidsCount"
              type="number"
              label="Kids"
            />
          </Box>
          <Box margin={1}>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Box>
        </Form>
      </MuiPickersUtilsProvider>
    )}
  </Formik>
    )
}


export default ToursFilterForm
