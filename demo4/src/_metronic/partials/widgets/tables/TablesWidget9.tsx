/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import AjoutTache from '../../modals/AjoutTache'
//import { AjouTache } from '../../modals/AjoutTache'

type Props = {
  className?: string
}

const TablesWidget9: React.FC<Props> = ({className}) => {
  function Button(){}
   return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Liste des taches</span>
          
        </h3>
       {<div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Cliquer pour ajouter une tache'
        >
          <AjoutTache></AjoutTache>
          
          
          
        </div>}
       
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
                <th className='min-w-150px'>Nom de la tache</th>
                <th className='min-w-140px'>Taches</th>
                <th className='min-w-120px'>Type</th>
                <th className='min-w-100px text-end'>Module</th>
                <th className='min-w-100px text-end'>Projet</th>
                <th className='min-w-100px text-end'>Durée</th>
                <th className='min-w-100px text-end'>Temps estimé</th>
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
                <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
                      
                    </div>
                    </td>
        
                <td>
                <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      bla
                  </a>
                </td>
                <td >
                <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      bla
                  </a>
                </td>
                <td className='text-end'>
             
                
                    <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        bla
                      </a>
                    
                </td>
                <td className='text-end'>
                    <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        bla
                      </a>
                  </td>
                <td className='text-end'>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        bla
                      </a>
                      </td>
                <td className='text-end'>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        bla
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
                <td>
              
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
                      
                    
                </td>
                <td>
                <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      bla
                  </a>
                </td>
                <td>
                <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      bla
                  </a>
                </td>
                <td className='text-end'>
                <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      bla
                  </a>
                    
                </td>
                <td className='text-end'>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      bla
                  </a>
                  </td>
                <td className='text-end'>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      bla
                  </a>
                  </td>
                  <td className='text-end'>
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      bla
                  </a>
                  </td>
              </tr>

              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
                <td >
                <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
                </td>
                <td >
                <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
                </td>
                <td >
                <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
                </td>
                <td className='text-end'>
                <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
               
                </td>
                <td className='text-end'><a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a></td>
                <td className='text-end'><a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a></td>
                <td className='text-end'><a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a></td>
              </tr>

              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
                <td><a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
                 
                </td>
                <td>
                <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
                </td>
                <td >
                <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
                  
                </td>
                <td className='text-end'>
                <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
                </td>
                <td className='text-end'><a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a></td>
                <td className='text-end'><a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a></td>
                <td className='text-end'><a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a></td>
              </tr>

              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
                <td>
                <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
                </td>
                <td>
                <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
                </td>
                <td>
                <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
                </td>
                <td className='text-end'>
                <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
                </td>
                <td className='text-end'>
                <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
                </td>
                <td className='text-end'>
                <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
                      </a>
                </td>
                <td className='text-end'>
                <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                      bla
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

export {TablesWidget9}
