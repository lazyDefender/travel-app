import React from 'react';
import {Formik, Form, Field} from 'formik';
import {
  Button,
  LinearProgress,
  MenuItem,
  Grid,
  Box,
} from '@material-ui/core';
import {
  TextField,
} from 'formik-material-ui';
import {
  DatePicker,
} from 'formik-material-ui-pickers';
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';

import useCities from '../hooks/useCities' 
import { store } from '../../../init/store'
import { toursFilterActions } from '../../../redux/toursFilter/actions'

const ToursFilterForm = () => {

  const citiesRes = useCities()
  const cities = citiesRes.data
  const countries = new Set(cities?.map(city => city.country))
  const countriesTo = []

  for(let country of countries) {
    const citiesByCountry = cities.filter(city => city.country === country)
    countriesTo.push({
      country,
      cities: citiesByCountry,
    })
  }

    return (
      <>
        <Formik
    initialValues={{
      toCity: 'Південний Мале Атол',
      datetime: new Date(),
      duration: 8,
      adultsCount: 1,
      kidsCount: 1,
    }}
    validate={(values) => {
      const errors = {};
      return errors;
    }}
    onSubmit={(values, {setSubmitting}) => {
      store.dispatch(toursFilterActions.fetchAsync(values))
      setSubmitting(false);
    }}
  >
    {({submitForm, isSubmitting, touched, errors}) => (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Form>
          <Grid container direction="row" alignItems="center">
          
          {isSubmitting && <LinearProgress />}
          
          <Grid item>
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
                {cities?.map((city) => (
                  <MenuItem key={city.id} value={city.id}>
                    {city.name}
                  </MenuItem>
                ))}
              </Field>
            </Box>
          </Grid>
          
          <Grid item>
            <Box margin={1}>
              <Field component={DatePicker} disablePast={true} name="datetime" label="Початок туру" />
            </Box>
          </Grid>
          
          <Grid item>
            <Box margin={1}>
              <Field
                component={TextField}
                type="text"
                name="duration"
                label="Ночей"
                select
                variant="standard"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              >
                <MenuItem value={8}>
                    8
                  </MenuItem>
              </Field>
            </Box>
          </Grid>
          <Grid item>
            <Box margin={1}>
              <Field
                component={TextField}
                name="adultsCount"
                type="number"
                label="К-сть дорослих"
                inputProps={{
                  min: 1,
                  max: 6,
                }}
              />
            </Box>
          </Grid>

          <Grid item>
            <Box margin={1}>
              <Field
                component={TextField}
                name="kidsCount"
                type="number"
                label="К-сть дітей"
                inputProps={{
                  min: 0,
                  max: 6,
                }}
              />
            </Box>
          </Grid>
          
          <Box margin={1}>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Знайти
            </Button>
          </Box>
          </Grid>
        </Form>
      </MuiPickersUtilsProvider>
    )}
  </Formik>
  </>
    )
}


export default ToursFilterForm
