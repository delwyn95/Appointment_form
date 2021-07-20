import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { BasicForm } from '../components/Form'

import formData from '../data/form.json'

export default function CustomForm({
  selectedService,
  onChangeForm,
  ...props
}) {
  // Choose which form to display

  //Pass all the data
  function handleSubmit(event) {
    event.preventDefault()
    console.log(
      `Submitted:\n First Name: ${props.firstName} \n Last Name: ${props.lastName} \n email: ${props.email} \n phoneNumber: ${props.phoneNumber} country: ${props.country}  details: ${props.details} `
    )
  }

  const dynamicForm = formData.filter((form, formIndex) => {
    const servicesForForms = form.services

    // console.log(i, form)
    //If there is no match, return the last data for the field to display
    if (formIndex + 1 == formData.length) {
      return true
    }

    //iterate through the array of the Services, return the one that matches.
    for (let i = 0; i < servicesForForms.length; i++) {
      if (servicesForForms[i] == selectedService) {
        return true
      }
    }
  })

  //return fields but in text
  const dynamicFieldsToDisplay = dynamicForm[0]['fields'].map(
    (formInformation) => {
      if (formInformation.type == 'dropdown') {
        return (
          <BasicForm
            key={formInformation.name}
            name={formInformation.name}
            label={formInformation.label}
            listOfOptions={formInformation.options}
            setValue={props.setFormValue}
          />
        )
      } else {
        return (
          <TextField
            key={formInformation.name}
            name={formInformation.name}
            id='filled-basic'
            label={formInformation.label}
            variant='filled'
            onChange={(e) => onChangeForm(e)}
          />
        )
      }
    }
  )

  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit}>
      {dynamicFieldsToDisplay}
      <Button type='submit'> Submit </Button>
    </form>
  )
}
