/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import AjoutConges from '../../modals/AjoutConges'




type Props = {
  className?: string
}

const TablesWidget3: React.FC<Props> = ({className}) => {



  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Liste des Congés</span>
          
        </h3>
       
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Cliquer pour ajouter un congés'
        >
          <AjoutConges/>
          
        </div>

          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead>
              <tr  className='fw-bold text-muted'>
                <th className='min-w-150px' >Employé</th>
                <th className='min-w-140px'>Date de Début</th>
                <th className='min-w-120px'>Date de Fin</th>
                <th className='min-w-100px'>Nombre</th>
                <th className='min-w-100px'>Type de Congés</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='symbol symbol-50px me-2'>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    bla
                    </a>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                  22/05/2023
                  </a>
                </td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>25/05/2023</td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>3</td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>repos</td>
              </tr>

              <tr>
                <td>
                <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    bla
                    </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    ble
                  </a>
                </td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
              </tr>
              
              <tr>
                <td>
                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    
                  </a>
                </td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'></td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'></td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'></td>
              </tr>
              <tr>
                <td>
                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                   bla
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    bla
                  </a>
                </td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
              </tr>

              <tr>
                <td>
                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    bla
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    bla
                  </a>
                </td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
              </tr>
              <tr>
                <td>
                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    bla
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    bla
                  </a>
                </td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
              </tr>

              <tr>
                <td>
                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    bla
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    bla
                  </a>
                </td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
              </tr>

              <tr>
                <td>
                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    bla
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    bla
                  </a>
                </td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
                <td className='text-dark fw-bold text-hover-primary mb-1 fs-6'>bla</td>
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


export {TablesWidget3}
