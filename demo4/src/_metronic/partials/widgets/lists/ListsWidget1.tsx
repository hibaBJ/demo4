/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import AjoutGroupe from '../../modals/AjoutGroupe'

type Props = {
  className?: string
}

const ListsWidget1: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-dark'>Gestion des Groupes</span>
          
        </h3>

        <div className='card-toolbar'>
          {/* begin::Menu */}
          <AjoutGroupe/>
        
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body pt-5'>
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Symbol */}
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className='d-flex flex-column'>
            <a href='#' className='text-dark text-hover-primary fs-6 fw-bold'>
              Groupe A
            </a>
            <span className='text-muted fw-semibold'>Front</span>
            <a href='#' className='text-dark text-hover-primary fs-6 fw-bold'>
              Les Membres:
            </a>
            <button  style={{position:"absolute",right:"5%"}}className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4">Modifier</button>
            
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Symbol */}
          
          {/* end::Symbol */}

          {/* begin::Text */}
          <div className='d-flex flex-column'>
            <a href='#' className='text-dark text-hover-primary fs-6 fw-bold'>
              Groupe B
            </a>
            <span className='text-muted fw-semibold'>Back</span>
            <a href='#' className='text-dark text-hover-primary fs-6 fw-bold'>
              bla bla
            </a>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Symbol */}
          
          {/* end::Symbol */}

          {/* begin::Text */}
          <div className='d-flex flex-column'>
            <a href='#' className='text-dark text-hover-primary fs-6 fw-bold'>
              Group ..
            </a>
            <span className='text-muted fw-semibold'>Mobile</span>
            <a href='#' className='text-dark text-hover-primary fs-6 fw-bold'>
              Group ..
            </a>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Symbol */}
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className='d-flex flex-column'>
            <a href='#' className='text-dark text-hover-primary fs-6 fw-bold'>
              Full stack
            </a>
            <span className='text-muted fw-semibold'>DevOps</span>
            <a href='#' className='text-dark text-hover-primary fs-6 fw-bold'>
              mokhtar,rim,farah 
            </a>
            
            action
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center'>
          {/* begin::Symbol */}
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className='d-flex flex-column'>
            <a href='#' className='text-dark text-hover-primary fs-6 fw-bold'>
              group
            </a>
            <span className='text-muted fw-semibold'>.</span>
            <a href='#' className='text-dark text-hover-primary fs-6 fw-bold'>
              group
            </a>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
  </div>
  )
}

export {ListsWidget1}
