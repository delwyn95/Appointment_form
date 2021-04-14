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
  const [name, setName] = useState('')
	//create useState for the remaining fields

	//this will update the state hooks depending on which input field was modified.
  const onChangeForm = (e) => {

    if (e.target.name === 'first_name') {
      setName(e.target.value)
    } else if (e.target.name === 'last_name') {
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
        <CustomForm service={service} onChangeForm={onChangeForm} name={name} />
      </div>
    </div>
  )
}
