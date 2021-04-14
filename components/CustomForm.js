import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import formData from '../data/form.json'

export default function CustomForm({ selectedService, onChangeForm, name }) {
  // Choose which form to display
  //Pass all the data
  function handleSubmit() {
    event.preventDefault()
    console.log('Submitted: First Name ' + name)
  }

  const dynamicForm = formData.filter((form, i) => {
    const servicesForForms = form.services

    //If there is no match, return the last data for the field to display
    if (i == formData.length) {
      return true
    }

    //iterate through the array of the Services, return the one that matches.
    for (let i = 0; i < servicesForForms.length; i++) {
      if (servicesForForms[i].match(selectedService)) {
        return true
      }
    }
  })

  let fieldsToDisplay = ``
	// --NOT FUNCTIONAL
  // This logic is to generate which fields to display based on the dynamicForm object, the textfield should
	// generated depdning on the list on the objec.t
  // if (form.length == 5) {
  //   fieldsToDisplay = `
	// 		<TextField id="filled-basic" label="first_name" variant="filled"/>
  // 		<TextField id="filled-basic" label="last_name" variant="filled"/>`
  // } else {
  //   fieldsToDisplay = form[0]['fields'].map((formField) => (
  //     <TextField id='filled-basic' label={formField.name} variant='filled' />
  //   ))
  // }

  console.log('dynamicForm', dynamicForm)

  //return fields but in text
  const dynamicFieldsToDisplay = dynamicForm.forEach((formInformation) => {
    return (
      <TextField
        name={formInformation.name}
        id='filled-basic'
        label={formInformation.label}
        variant='filled'
        onChange={(e) => onChangeForm(e)}
      />
    )
  })

  return (
    <form noValidate autoComplete='off'>
      {dynamicFieldsToDisplay}
      <TextField
        name='first_name'
        id='filled-basic'
        label='First Name'
        variant='filled'
        onChange={(e) => onChangeForm(e)}
      />
      <TextField id='filled-basic' label='Last Name' variant='filled' />
      <br />
      <TextField id='filled-basic' label='Telephone' variant='filled' />
      <TextField id='filled-basic' label='Email' variant='filled' />
      <br />
      <TextField id='filled-basic' label='Details' variant='filled' />
      <Button onPress={() => handleSubmit()}>Submit</Button>
    </form>
  )
}
