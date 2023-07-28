/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

const InviteUsers: FC = () => {
  /*const users = [
    {
      avatar: '/media/avatars/300-6.jpg',
      name: 'Emma Smith',
      email: 'e.smith@kpmg.com.au',
      access: '1',
    },
    {
      state: 'danger',
      name: 'Melody Macy',
      email: 'melody@altbox.com',
      access: '1',
    },
    {
      avatar: '/media/avatars/300-1.jpg',
      name: 'Max Smith',
      email: 'max@kt.com',
      access: '3',
    },
    {
      avatar: '/media/avatars/300-1.jpg',
      name: 'Sean Bean',
      email: 'sean@dellito.com',
      access: '2',
    },
    {
      avatar: '/media/avatars/300-25.jpg',
      name: 'Brian Cox',
      email: 'brian@exchange.com',
      access: '3',
    },
    {
      state: 'warning',
      name: 'Mikaela Collins',
      email: 'mikaela@pexcom.com',
      access: '2',
    },
    {
      avatar: '/media/avatars/300-9.jpg',
      name: 'Francis Mitcham',
      email: 'f.mitcham@kpmg.com.au',
      access: '3',
    },
    {
      state: 'danger',
      name: 'Olivia Wild',
      email: 'olivia@corpmail.com',
      access: '2',
    },
    {
      state: 'info',
      name: 'Neil Owen',
      email: 'owen.neil@gmail.com',
      access: '1',
    },
    {
      avatar: '/media/avatars/300-23.jpg',
      name: 'Dan Wilson',
      email: 'dam@consilting.com',
      access: '3',
    },
    {
      state: 'danger',
      name: 'Emma Bold',
      email: 'emma@intenso.com',
      access: '2',
    },
    {
      avatar: '/media/avatars/300-12.jpg',
      name: 'Ana Crown',
      email: 'ana.cf@limtel.com',
      access: '1',
    },
    {
      state: 'primary',
      name: 'Robert Doe',
      email: 'robert@benko.com',
      access: '3',
    },
    {
      avatar: '/media/avatars/300-13.jpg',
      name: 'John Miller',
      email: 'miller@mapple.com',
      access: '3',
    },
    {
      state: 'success',
      name: 'Lucy Kunic',
      email: 'lucy.m@fentech.com',
      access: '2',
    },
    {
      avatar: '/media/avatars/300-21.jpg',
      name: 'Ethan Wilder',
      email: 'ethan@loop.com.au',
      access: '1',
    },
    {
      avatar: '/media/avatars/300-12.jpg',
      name: 'Ana Crown',
      email: 'ana.cf@limtel.com',
      access: '3',
    },
  ]*/

  return (
   
    <div className='modal fade' id='kt_modal_invite_friends' aria-hidden='true'>
      <div className='modal-dialog mw-650px'>
        <div className='modal-content'>
          <div className='modal-header pb-0 border-0 justify-content-end'>
            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
            </div>
          </div>

          <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
            <div className='text-center mb-13'>
              <h1 className='mb-3'>Remplir un Congés</h1>

              
            </div>
            <form action='Conges'>
            <div className="mb-10">
                <label className="required form-label">Employé</label>
                  <input
                     type="text"
                     className="form-control"
                    placeholder="Saisir le nom "
                  />
              </div>
              <div className="mb-10">
                <label className="required form-label">Date de début </label>
                  <input
                    type="date"
                    className="form-control form-control-solid"
                  placeholder="name@example.com"
                />
              </div>
                  <div className="mb-10">
                  <label className="required form-label">Date de fin</label>
                  <input
                    type="date"
                    className="form-control form-control-solid"
                    placeholder=""
                  />
                </div>
                <div className="mb-10">
                  <label className="required form-label">Nombre</label>
                  <input
                    type="number"
                    className="form-control form-control-white"
                    placeholder="Séléctionner le nombre"
                  />
                </div>
                <div className="mb-10">
                <label className="required form-label">Type de Congés</label>
                  <select className="form-select form-select-white" aria-label="Select example">Type de Congés
                  <option>séléctionner un type </option>
                  <option value={1}>
                    Congés Annuaire </option>
                  <option value={2}>Congés de  maladie </option>
                  <option value={3}>Congés de repos</option>
                  </select>
                </div>
                <div  className='modal-footer'>

                  <input
                    type="submit"
                    className="form-control form-control-solid"
                    style={{width:"100px"}}
                  
                  />
                  <button
                  type="button"
                  className="btn btn-light"
                  data-bs-dismiss="modal"
                  >
                    Fermer
                  </button>
        
                </div>
               

            </form>
            </div>
            </div>

            
          </div>
        </div>
     
  )
}

export {InviteUsers}
