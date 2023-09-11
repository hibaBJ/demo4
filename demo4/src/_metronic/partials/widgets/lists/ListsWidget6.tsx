/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
//import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className?: string
}

const ListsWidget6: React.FC<Props> = ({className}) => {
  return (
    <div className='card card-xl-stretch mb-5 mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>Notifications</h3>
        
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-0'>
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-warning rounded p-5 mb-7'>
          {/* begin::Icon */}
          <span className='svg-icon svg-icon-warning me-5'>
            <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className='flex-grow-1 me-2'>
            <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
              Cloture de projet mobile
            </a>
            <span className='text-muted fw-semibold d-block'>dans 2 jours</span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          
          {/* end::Lable */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-danger rounded p-5 mb-7'>
          {/* begin::Icon */}
          <span className='svg-icon svg-icon-danger me-5'>
            <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className='flex-grow-1 me-2'>
            <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
              Planning de projet 
            </a>
            <span className='text-muted fw-semibold d-block'>dans 5 jours</span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          
          {/* end::Lable */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-info rounded p-5'>
          {/* begin::Icon */}
          <span className='svg-icon svg-icon-info me-5'>
            <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className='flex-grow-1 me-2'>
            <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
              Brainstorming 
            </a>
            <span className='text-muted fw-semibold d-block'>dans 7 jours</span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          {/* end::Lable */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget6}
