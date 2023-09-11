/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
//import {Dropdown1} from '../../content/dropdown/Dropdown1'
//import Ajout from '../../modals/Ajout'

type Props = {
  className?: string
}

const ListsWidget2: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>Les Employés</h3>
        
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2'>
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-6.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
              Abla
            </a>
            <span className='text-muted d-block fw-semibold'>Project Manager</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-5.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
              Zitouni Mohamed
            </a>
            <span className='text-muted d-block fw-semibold'>node js,.net,spring boot</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-11.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
              Ismail
            </a>
            <span className='text-muted d-block fw-semibold'>Technicien</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-9.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
              Khawla hmila
            </a>
            <span className='text-muted d-block fw-semibold'>administrateur serveur</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-23.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
              Mokhtar Chouchen
            </a>
            <span className='text-muted d-block fw-semibold'>React js ,.net .sql server</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
    
  )
}

export {ListsWidget2}
