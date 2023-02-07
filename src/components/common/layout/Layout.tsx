import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer';

export interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
    <Header />
        <div className='h-full'>
            {children}
        </div>
    <Footer />
    </>
  )
}

export default Layout;