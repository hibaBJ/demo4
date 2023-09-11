/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
//import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import AjoutGroupe from '../../modals/AjoutGroupe'
//import Multiselect from 'multiselect-react-dropdown'

type Props = {
  className?: string
}


const TablesWidget5: React.FC<Props> = ({className}) => {
  
  
  
//  const data=[
//  {Name:'Mokhtar',id:0},
//  {Name:'Sarra',id:1},
//  {Name:'Houda',id:2},
//  {Name:'Mohamed',id:3},
//  {Name:'Abla',id:4},
//]
 //const [options]=useState(data);
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Gestion des Groupes</span>
          
        </h3>
        <div className='card-toolbar'>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Cliquer pour ajouter un objectif'
        >
         <AjoutGroupe/>
          
        </div>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_5_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr className='fw-bold text-muted'>
                  <th className='w-25px'></th>
                    <th className='min-w-150px'>Nom Du Groupe</th>
                    <th className='min-w-140px'>Spécialité</th>
                    <th className='min-w-120px'>Les Membres</th>
                    <th className='min-w-100px text-end'>Action</th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                 
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

export {TablesWidget5}
