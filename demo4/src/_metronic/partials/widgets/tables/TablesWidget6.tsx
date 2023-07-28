/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';

type Props = {
  className?: string
}

const TablesWidget6: React.FC<Props> = ({className}) => {
  //  const data=[
   // {Name:'Mokhtar',id:0},
    //{Name:'Sarra',id:1},
    //{Name:'Houda',id:2},
    //{Name:'Mohamed',id:3},
    //{Name:'Abla',id:4},
      //]
    //const [options]=useState(data);
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column '>
          <span className='card-label fw-bold fs-3 mb-1'>Gestion de Pointage</span>
          
        </h3>
        <div className='card-toolbar'>
          
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_6_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr className='fw-bold text-muted'>
                    <th className='min-w-150px' >Employé</th>
                    <th className='min-w-140px'> Entrée </th>
                    <th className='min-w-120px'> Sortie</th>
                    <th className='min-w-100px'>Entrée </th>
                    <th className='min-w-100px'>Sortie </th>
                    <th className='min-w-100px'> Total</th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  {/**begin tr */}
                  <tr>
                    <td>
                     <select style={{fontSize:'12px',width:'120px'}} className="form-select" aria-label="Default select example">
                      <option selected>Choisir..</option>
                      <option value="1">Mokhtar</option>
                      <option value="2">Abla</option>
                      <option value="3">Sarra</option>
                     </select>
                    </td>
                    <td>
                      <input className="form-control" type='datetime-local'></input>
                    </td>
                    <td>
                        <input  className="form-control"type='datetime-local'></input>
                    </td>
                    <td >
                      <input  className="form-control"type='datetime-local'></input>
                    </td>
                    <td >
                      <input   className="form-control"type='datetime-local'></input>
                    </td>
                    <td>
                    <input  className="form-control" style={{fontSize:'12px',width:'120px'}} type="number" />
                    </td>

                  </tr>
                  {/**end tr */}
                  {/**begin tr */}
                  <tr>

                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <select style={{fontSize:'12px',width:'120px'}} className="form-select" aria-label="Default select example">
                      <option selected>Choisir..</option>
                      <option value="1">Mokhtar</option>
                      <option value="2">Abla</option>
                      <option value="3">Sarra</option>
                     </select>
                      </div>
                    </td>
                    <td>
                    <input  className="form-control"type='datetime-local'></input>
                    </td>
                    <td>
                     <input  className="form-control"type='datetime-local'></input>
                    </td>
                    <td>
                    <input  className="form-control"type='datetime-local'></input>
                    </td>
                    <td>
                    <input  className="form-control"type='datetime-local'></input>
                    </td>
                    <td>
                    <input   className="form-control"style={{fontSize:'12px',width:'120px'}}type="number" />
                    </td>
                   
                  </tr>
                  {/**end tr */}
                  {/**begin tr */}
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <select style={{fontSize:'12px',width:'120px'}} className="form-select" aria-label="Default select example">
                      <option selected>Choisir..</option>
                      <option value="1">Mokhtar</option>
                      <option value="2">Abla</option>
                      <option value="3">Sarra</option>
                     </select>
                      
                      </div>
                    </td>
                    <td>
                    <input className="form-control" type='datetime-local'></input>
                      
                    </td>

                    <td>
                      
                    <input  className="form-control"type='datetime-local'></input>
                    </td>
                    <td>
                    <input className="form-control" type='datetime-local'></input>
                    </td>
                    <td >
                    <input className="form-control" type='datetime-local'></input>
                    </td>
                    <td>
                    <input   className="form-control" style={{fontSize:'12px',width:'120px'}}type="number" />
                    </td>
                  </tr>
                    {/**end tr */}

                    {/**begin tr */}
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <select style={{fontSize:'12px',width:'120px'}} className="form-select" aria-label="Default select example">
                      <option selected>Choisir..</option>
                      <option value="1">Mokhtar</option>
                      <option value="2">Abla</option>
                      <option value="3">Sarra</option>
                     </select>
                      </div>
                    </td>
                    <td>
                    <input className="form-control" type='datetime-local'></input>
                    </td>
                    <td>
                    <input  className="form-control"type='datetime-local'></input>
                    </td>
                    <td >
                    <input  className="form-control"type='datetime-local'></input>
                    </td>
                    <td >
                    <input  className="form-control"type='datetime-local'></input>
                    </td>
                    <td>
                    <input  className="form-control" style={{fontSize:'12px',width:'120px'}}type="number" />
                    </td>
                  </tr>
                  {/**end tr */}

                  {/**begin tr */}

                  <tr>
                   
                    <td>
                    <div className='symbol symbol-50px me-2'>
                      <select style={{fontSize:'12px',width:'120px'}} className="form-select" aria-label="Default select example">
                      <option selected>Choisir..</option>
                      <option value="1">Mokhtar</option>
                      <option value="2">Abla</option>
                      <option value="3">Sarra</option>
                     </select>
                      </div>
                      
                    </td>
                    <td>
                    <input className="form-control" type='datetime-local'></input>
                    </td>

                    <td >
                    <input  className="form-control"type='datetime-local'></input>
                    </td>
                    <td >
                    <input className="form-control" type='datetime-local'></input>
                    </td>
                    <td>
                    <input  className="form-control"type='datetime-local'></input>
                    </td>
                    <td>
                      <input className="form-control" style={{fontSize:'12px',width:'120px'}} type="number" />
                    </td>
                  </tr>
                  {/**end tr */}
                  
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          
               
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          
                          
              </div>          
        </div>
        )
    
      {/* end::Body */}
  
  
};

export {TablesWidget6}
