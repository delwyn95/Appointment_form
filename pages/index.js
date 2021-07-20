import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import Form from '../components/Form'
import CustomForm from '../components/CustomForm'
import serviceData from '../data/services.json'

import '../styles.scss'

export default function Index() {
  const [selectedService, setSelectedService] = useState('')
  const [listOfServices, setListOfServices] = useState(serviceData)
  const [service, setService] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [country, setCountry] = useState('')
  const [details, setDetails] = useState('')
  const [formValue, setFormValue] = useState('')

  //this will update the state hooks depending on which input field was modified.
  const onChangeForm = (e) => {
    if (e.target.name === 'first_name') {
      setFirstName(e.target.value)
    } else if (e.target.name === 'last_name') {
      setLastName(e.target.value)
    } else if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'phone_number') {
      setPhoneNumber(e.target.value)
    } else if (e.target.name === 'country') {
      setCountry(e.target.value)
    } else if (e.target.name === 'details') {
      setDetails(e.target.value)
    }
  }

  return (
    <div>
      <Head>
        <title>Appointment Form</title>
      </Head>

      <div style={{ textAlign: 'center' }} className='example'>
        Request an Appointment
        <Form
          listOfServices={listOfServices}
          name={'Select Service'}
          setService={setService}
          service={service}
        />
        <CustomForm
          selectedService={service}
          onChangeForm={onChangeForm}
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
          country={country}
          details={details}
          setFormValue={setFormValue}
        />
      </div>
    </div>
  )
}
