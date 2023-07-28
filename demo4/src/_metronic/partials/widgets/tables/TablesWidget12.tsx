/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import AjoutSalarié from '../../modals/AjoutSalarié'

type Props = {
  className?: string
}

const TablesWidget12: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          
          <AjoutSalarié/>
         
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
                <th className='ps-4 min-w-300px rounded-start'>Employé</th>
                <th className='min-w-125px'>Salaire</th>
                <th className='min-w-125px'>Coefficient</th>
                <th className='min-w-200px'>Prime</th>
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
                        Mokhtar
                      </a>
                      
                    </div>
                  </div>
                </td>

                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    3500
                  </a>
                
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                   2
                  </a>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    300
                  </a>
                 
                </td>
                
                <td className='text-end'>
                <button
                    className='btn btn-light-primary'
                  >
                    View
                  </button>
                  <button
                    className='btn btn-light-primary'
                  >
                    Supprimer
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    </div>
                  <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Farah
                      </a>
                      
                    </div>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    2500
                  </a>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    1
                  </a>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                   0
                  </a>
                 
                </td>
                
                <td className='text-end'>
                  <button
                    className='btn btn-light-primary'
                  >
                    View
                  </button>
                  <button
                    className='btn btn-light-primary'
                  >
                   Supprimer
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                      Maram
                      </a>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                   3000
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                      2
                  </a>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    150
                  </a>
                
                </td>
                
                <td className='text-end'>
                <button
                    className='btn btn-light-primary'
                  >
                    View
                  </button>
                  <button
                    className='btn btn-light-primary'
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                   
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                       Mohamed
                      </a>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                   4000
                  </a>
               
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  3
                  </a>

                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    500
                  </a>
                  
                </td>
               
                <td className='text-end'>
                <button
                    className='btn btn-light-primary'
                  >
                    View
                  </button>
                  <button
                    className='btn btn-light-primary'
                  >
                   Supprimer
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                       Sarra
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                   2900
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                   1
                  </a>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  250
                  </a>
                  
                </td>
                
                <td className='text-end'>
                <button
                    className='btn btn-light-primary'
                  >
                    View
                  </button>
                  <button
                    className='btn btn-light-primary'
                  >
                   Supprimer
                  </button>
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

export {TablesWidget12}
