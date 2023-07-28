/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import AjoutAttachement from '../../modals/AjoutAttachement'


type Props = {
  className?: string;

}

const TablesWidget13: React.FC<Props> = ({className}) => {
 
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
      <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Liste des Attachments</span>

      </h3>
       
        <div className='card-toolbar'>
          {/* begin::Menu */}
         
          {/* begin::Menu 2 */}
          <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title=' Cliquer pour ajouter un nouveau employé'
        >
          <AjoutAttachement/>
        </div>
        </div>
        </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
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
                      data-kt-check-target='.widget-13-check'
                    />
                  </div>
                </th>
                <th className='min-w-150px'>Les employées</th>
                <th className='min-w-140px'>Attachements</th>
                
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                    
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    
                  </a>
                  <select style={{width:'100px',height:'30px',backgroundColor:'#f2f2f2',color:'#333',fontSize:"13px",border:'none',borderRadius:'5px',padding:'6px'}}>
                    <option value="option1">Contrat</option>
                    <option value="option2">CV</option>
                    <option value="option3">Fiche de paie</option>
                    <option value="option3">Assurance</option>
                  </select>
                  </td>
                  <td className='text-end'>
                 
                  <button className='btn btn-bg-light btn-color-primary'>
                    View
                  </button>
                </td>
                <td className='text-end'>
                 
               <button                   
                   className='btn btn-bg-light btn-color-primary'>
                  Add Attachment
                 </button>
                

               </td>
               
              </tr>

              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                   
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    
                  </a>
                  <select style={{width:'100px',height:'30px',backgroundColor:'#f2f2f2',color:'#333',fontSize:"13px",border:'none',borderRadius:'5px',padding:'6px'}}>
                    <option value="option1">Contrat</option>
                    <option value="option2">CV</option>
                    <option value="option3">Fiche de paie</option>
                  </select>
                </td>
               
                <td className='text-end'>
                 
                 <button
                   
                   className='btn btn-bg-light btn-color-primary'
                 >
                  View
                 </button>
               </td>
               <td className='text-end'>
                 
                 <button
                   
                   className='btn btn-bg-light btn-color-primary'
                 >
                  Add Attachment
                 </button>
               </td>
              </tr>

              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                    
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  </a>
                  <select style={{width:'100px',height:'30px',backgroundColor:'#f2f2f2',color:'#333',fontSize:"13px",border:'none',borderRadius:'5px',padding:'6px'}}>
                    <option value="option1">Contrat</option>
                    <option value="option2">CV</option>
                    <option value="option3">Fiche de paie</option>
                  </select>
                </td>
                <td className='text-end'>
                 
                 <button
                   className='btn btn-bg-light btn-color-primary'
                 >
                   View
                 </button>
               </td>
               <td className='text-end'>
                 
                 <button
                   
                   className='btn btn-bg-light btn-color-primary'
                 >
                  Add Attachment
                 </button>
               </td>
              </tr>
              <tr>

                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                  
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                 
                  
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                   
                  </a>
                  <select style={{width:'100px',height:'30px',backgroundColor:'#f2f2f2',color:'#333',fontSize:"13px",border:'none',borderRadius:'5px',padding:'6px'}} >
                    <option value="option1">Contrat</option>
                    <option value="option2">CV</option>
                    <option value="option3">Fiche de paie</option>
                    <option value="option3">Carnet CNSS</option>
                  </select>
                </td>
                <td className='text-end'>
                 
                 <button
                   
                   className='btn btn-bg-light btn-color-primary'
                 >
                   View
                 </button>
               </td>
               <td className='text-end'>
                 
                 <button
                   
                   className='btn btn-bg-light btn-color-primary'
                 >
                  Add Attachment
                 </button>
               </td>
              </tr>

              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                  
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                  
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                   
                  </a>
                  <select style={{width:'100px',height:'30px',backgroundColor:'#f2f2f2',color:'#333',fontSize:"13px",border:'none',borderRadius:'5px',padding:'6px'}}>
                    <option value="option1">Contrat</option>
                    <option value="option2">CV</option>
                    <option value="option3">Fiche de paie</option>
                  </select>
                </td>
                <td className='text-end'>
                 
                 <button
                   
                   className='btn btn-bg-light btn-color-primary'
                 >
                   View
                 </button>
               </td>
               <td className='text-end'>
                 
                 <button
                   
                   className='btn btn-bg-light btn-color-primary'
                 >
                  Add Attachment
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

export {TablesWidget13}
