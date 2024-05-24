// import React from 'react'
import CompanyDetails from './CompanyDetails'
import CompanyMainPage from './CompanyMainPage'
import OtherCompanies from './OtherCompanies'

const Body = () => {
  return (
    <div>
      <CompanyMainPage />
      <OtherCompanies />
      <CompanyDetails />
    </div>
  )
}

export default Body