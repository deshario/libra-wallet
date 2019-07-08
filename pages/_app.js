import App, { Container } from 'next/app'
import React from 'react'
import Head from 'next/head'
import { Container as BootstrapContainer } from 'react-bootstrap';

// import '../styles/bootstrap.scss';
 
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>Deshario Wallet</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        </Head>
        <BootstrapContainer style={{marginTop:'15px'}}>
          <Component {...pageProps} />  
        </BootstrapContainer>      
      </Container>
    )
  }
}

export default MyApp