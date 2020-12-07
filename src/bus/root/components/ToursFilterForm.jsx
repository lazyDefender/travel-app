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

  const res = useCities()

    return (
        <Formik
    initialValues={{
      fromCity: 'none',
      toCity: 'none',
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
              {ranges.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
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
              <ListSubheader>Italy</ListSubheader>
              {ranges.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Field>
          </Box>
          <Box margin={1}>
            <Field component={DatePicker} name="datetime" label="Початок туру" />
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
              
              {ranges.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
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
