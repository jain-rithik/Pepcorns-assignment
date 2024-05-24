// import React from 'react'
import CompanyHeader from './CompanyHeader'
import CompanyBody from './CompanyBody'

const CompanyMainPage = () => {
  return (
    <div className='max-w-[1170px] lg:mx-auto px-4 md:px-8 md:pt-20 pt-12 pb-12'>
        <CompanyHeader />
        <CompanyBody />
    </div>
  )
}

export default CompanyMainPage