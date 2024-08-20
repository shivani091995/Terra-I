import React from 'react'
import TableComponent from '../components/TableComponent'
import Filters from '../components/Filters'

const Cryptocurr = () => {
  return (
    <section
    className='w-[80%] h-full flex flex-col mt-16 mb-24 relative'>
      <Filters></Filters>
      <TableComponent/>
      </section>
  )
}

export default Cryptocurr