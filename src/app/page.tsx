"use client"
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { useState } from 'react'
import Ahero from './components/Ahero'
import Testimonials from "./components/Testimonials"
import Steps from './components/Steps'
import Component from './components/Profiles'
import Visions from './components/Visions'

export default function Page() {
  const [Load, setLoad] = useState(true);
  
  return (
    <>
      {Load ? (
        <div onClick={() => setLoad(false)}>
          <Hero/>
        </div>
      ) : (
        <>
          <Header/>
          <Ahero/>
          <Testimonials/>
          <Steps/>
          <Visions/>
          <Component/>
        </>
      )}
    </>
  )
}