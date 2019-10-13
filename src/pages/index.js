import React from 'react'
import '../assets/layout.scss'
import styled from 'styled-components'
import Devices from '../core/Devices'
import useDarkMode from '../hooks/useDarkMode'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import IntroBlock from '../components/IntroBlock'
import Experience from '../components/Experience'

const Wrapper = styled.div`
  padding: 0 20px;
  color: ${props => props.darkMode ? '#a0aec0' : '#1a202c'};
  background-color: ${props => props.darkMode ? '#1a202c' : '#f3f3f3'};
  background-image: url('data:image/svg+xml;utf8,<svg width="1440" height="950" xmlns="http://www.w3.org/2000/svg"><path d="M0 949.875c1.154 0 27.617-178.906 270.484-210.46 242.868-31.556 225.766-103.83 303.86-187.493 78.093-83.664 175.695-158.54 430.468-129.54 254.774 29 375.696 7.509 435.188-104.071-.215 0 0-318.311 0-318.311H0s.336 949.875 0 949.875z" fill="%23${props => props.darkMode ? '2d3748' : 'ffffff'}" fill-rule="evenodd"/></svg>');
  background-position: 0 0;
  background-size: 100%;
  background-repeat: no-repeat;
  transition: all 0.3s ease-out;
  ${Devices.medium} {
    border: 8px solid black;
    background-position: 0 -75px;
  }
`
const Container = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`
const IndexPage = () => {
  const [darkMode, setDarkMode] = useDarkMode()
  return (
    <Wrapper darkMode={darkMode}>
      <SEO title="Home" keywords={[
        `gatsby`,
        `application`,
        `react`,
        `portfolio`,
        `Rick Booth`,
        `Richard Booth`,
        `Rick`,
        `Richard`,
        `Web Developer`,
        `Software Developer`,
        `Front End Developer`,
        `Back End Developer`,
        `Full Stack Developer`,
        `Rixcy`,
        `Rixcy Developer`
      ]} />
      <Container>
        <IntroBlock darkMode={darkMode} setDarkMode={setDarkMode} />
        <Experience />
      </Container>
      <Footer />
    </Wrapper>
  )
}

export default IndexPage
