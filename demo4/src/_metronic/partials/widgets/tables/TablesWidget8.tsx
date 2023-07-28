/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'

type Props = {
  className?: string
}

const TablesWidget8: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Liste des  Projets</span>
          </h3>
        
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_8_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                <tr className='fw-bold text-muted'>
                <th className='w-25px'></th>
                    <th className='min-w-150px'> Projet</th>
                    <th className='min-w-140px'> Language</th>
                    <th className='min-w-120px'> Progress</th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                       
                      </div>
                    </td>

                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        School Music Festival
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>by Rose Liam</span>
                    </td>

                    <td>
                      <span className='text-dark fw-bold d-block fs-7'>4:20PM, 03 Sep</span>
                      <span className='text-muted fw-semibold d-block fs-8'>React </span>
                    </td>
                    <td >
                    <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-muted me-2 fs-7 fw-semibold'>50%</span>
                    </div>
                    <div className='progress h-6px w-100'>
                      <div
                        className='progress-bar bg-primary'
                        role='progressbar'
                        style={{width: '50%'}}
                      ></div>
                    </div>
                  </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Maths Championship
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>By Tom Gere</span>
                    </td>
                    <td >
                      <span className='text-dark fw-bold d-block fs-7'>10:05PM, 25 Oct</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-muted me-2 fs-7 fw-semibold'>90%</span>
                    </div>
                    <div className='progress h-6px w-100'>
                      <div
                        className='progress-bar bg-info'
                        role='progressbar'
                        style={{width: '90%'}}
                      ></div>
                    </div>
                  </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Who Knows Geography
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span>
                    </td>
                    <td>
                      <span className='text-dark fw-bold d-block fs-7'>3:22PM, 07 Sep</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-muted me-2 fs-7 fw-semibold'>70%</span>
                    </div>
                    <div className='progress h-6px w-100'>
                      <div
                        className='progress-bar bg-danger'
                        role='progressbar'
                        style={{width: '70%'}}
                      ></div>
                    </div>
                  </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Napoleon Days
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>By Luke Owen</span>
                    </td>
                    <td>
                      <span className='text-dark fw-bold d-block fs-7'>1:20PM, 02 Dec</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-muted me-2 fs-7 fw-semibold'>60%</span>
                    </div>
                    <div className='progress h-6px w-100'>
                      <div
                        className='progress-bar bg-success'
                        role='progressbar'
                        style={{width: '60%'}}
                      ></div>
                    </div>
                  </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      
                     
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        The School Art Leads
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>By Ellie Cole</span>
                    </td>
                    <td>
                      <span className='text-dark fw-bold d-block fs-7'>6:20PM, 07 Sep</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-muted me-2 fs-7 fw-semibold'>40%</span>
                    </div>
                    <div className='progress h-6px w-100'>
                      <div
                        className='progress-bar bg-warning'
                        role='progressbar'
                        style={{width: '40%'}}
                      ></div>
                    </div>
                  </div>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          </div>
          </div>
      {/* end::Body */}
    </div>
  )
}

export {TablesWidget8}
