/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import AjoutObjectif from '../../modals/AjoutObjectif'
import { useState } from 'react'

type Props = {
  className?: string
 
  
}
const TablesWidget10: React.FC<Props> = ({className}) => {


  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Liste des Objectifs</span>

        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Cliquer pour ajouter un objectif'
        >
         <AjoutObjectif/>
          
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-9-check'
                    />
                  </div>
                </th>
                <th className='min-w-150px'>Projet</th>
                <th className='min-w-140px'>Les Taches</th>
                <th className='min-w-120px'>Objectifs</th>
                <th className='min-w-100px text-end'>Temps estimés</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>

                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
                      
                    </div>
                  </div>
                </td>

                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      bla
                  </a>
                  
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                    <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        bla
                      </a>
                    </div>
                    
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                  
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                 bla
                      </a> 
                  </div>
                </td>
                <td className='text-end'>
                  <button
                    
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    View
                  </button>
                  <button
                  
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4'
                    
                  >
                    Edit
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>

                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                       bla
                      </a>
                      
                    </div>
                  </div>
                </td>

                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                    bla
                  </a>
                  
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                    bla
                    </a>
                    </div>
                   
                  </div>
                </td>
                
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                    bla
                    </a>
                   
                    
                  </div>
                </td>
                <td className='text-end'>
                  <button
                    
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    View
                  </button>
                  <button
                    
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4'
                  >
                    Edit
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        bla
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                   bla

                  </a>
                  
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                   
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                    bla
                    </a>
                    </div>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    
                  <div className='d-flex justify-content-end flex-shrink-0'>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                    bla
                    </a>
                  </div> 
                  </div>
                </td>
                <td className='text-end'>
                  <button
                    
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    View
                  </button>
                  <button
                    
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4'
                  >
                    Edit
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                       bla
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                   bla
                  </a>
                </td>
                <td className='text-end'>
                <div className='d-flex align-items-center'>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                     bla
                      </a>
                    
                  </div>
                </td>
                <td>
                <div className='d-flex justify-content-end flex-shrink-0'>
                    
                  <div className='d-flex justify-content-end flex-shrink-0'>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                  bla
                    </a>
                  </div> 
                  </div>
                </td>
                <td className='text-end'>
                  <button
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    View
                  </button>
                  <button
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4'
                  >
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
                    
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                    bla
                      </a>
                      
                    </div>
                  </div>
                </td>

                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                   bla
                  </a>
               
                </td>
                <td className='text-end'>
                <div className='d-flex align-items-center'>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                   bla
                  </a>
                  </div>
                </td>

                <td>
                <div className='d-flex justify-content-end flex-shrink-0'>
                    
                    <div className='d-flex justify-content-end flex-shrink-0'>
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                   bla
                      </a>
                    </div> 
                    </div>
                </td>
                <td className='text-end'>
                  <button
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    View
                  </button>
                  <button
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4'
                  >
                    Edit
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

export {TablesWidget10}
