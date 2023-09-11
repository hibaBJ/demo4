/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
//import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import AjoutAccessoire from '../../modals/AjoutAccessoire'

type Props = {
  className?: string
}

const TablesWidget11: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          
         
        </h3>
        <div className='card-toolbar'>
       <AjoutAccessoire/>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted bg-light'>
                <th className='ps-4 min-w-325px rounded-start'>Code</th>
                <th className='min-w-325px'>Intitulé</th>
                <th className='min-w-125px'>Employés</th>
                
                <th className='min-w-200px text-end rounded-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        01
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    PC Dell
                  </a>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    mokhtar
                  </a>
                  
                </td>
              
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        02
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Disque
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Eya
                  </a>
                  
                </td>
              
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        03
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Casque
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  Sarra
                  </a>
                  
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        04
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    écran
                  </a>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Ahmed
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        05
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    PC 
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Houda
                  </a>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesWidget11}
