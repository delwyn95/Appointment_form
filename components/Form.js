import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'

export default function Form({ name, listOfServices, service, setService }) {
  // const classes = useStyles()

  const [open, setOpen] = useState(false)

  //
  const handleChange = (event) => {
    event.preventDefault()
    setService(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div>
      <FormControl style={{ minWidth: 150 }}>
        <InputLabel id='demo-controlled-open-select-label'>{name}</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={service}
          onChange={handleChange}
        >
          {listOfServices.map((service) => (
            <MenuItem value={service}>{service}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export function BasicForm({
  listOfOptions,
  label,
  formValue,
  setValue
}) {
  const handleChange = (event) => {
    event.preventDefault()
    setValue(event.target.value)
  }

  return (
    <FormControl style={{ minWidth: 150 }}>
      <InputLabel id='demo-controlled-open-select-label'>{label}</InputLabel>
      <Select onChange={handleChange} value={formValue}>
        {listOfOptions.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
