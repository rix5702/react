import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Children } from 'react'
export default function Layout({children}) {
    return (
      <>
      <div className='header'> {' '} <Header /></div>
      <div className='container p-0 outlet'>
        {children}
        </div>
        
      <div className='footer'>{' '}<Footer/></div>
  
      
      </>
    )
  }