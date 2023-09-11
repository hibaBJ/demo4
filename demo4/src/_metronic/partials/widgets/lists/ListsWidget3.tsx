/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
//import {KTSVG} from '../../../helpers'
//import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className?: string
}

const ListsWidget3: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>Liste à faire</h3>
        
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2'>
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-success'></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Brainstorming
            </a>
            <span className='text-muted fw-semibold d-block'>dans 2 jours</span>
          </div>
          {/* end::Description */}
          <span className='badge badge-light-success fs-8 fw-bold'>New</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-primary'></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Marketing Meeting
            </a>
            <span className='text-muted fw-semibold d-block'>dans 3 jours</span>
          </div>
          {/* end::Description */}
          <span className='badge badge-light-primary fs-8 fw-bold'>New</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-warning'></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Scoping &amp; Estimations
            </a>
            <span className='text-muted fw-semibold d-block'>dans 5 jours</span>
          </div>
          {/* end::Description */}
          <span className='badge badge-light-warning fs-8 fw-bold'>New</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
       
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-danger'></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
             réunion projet
            </a>
            <span className='text-muted fw-semibold d-block'>dans 3 jours</span>
          </div>
          {/* end::Description */}
          <span className='badge badge-light-danger fs-8 fw-bold'>New</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        
        {/* end:Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget3}
