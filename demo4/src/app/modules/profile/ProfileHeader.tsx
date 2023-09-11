/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
//import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import AjoutProfil from '../../../_metronic/partials/modals/AjoutProfil'


const ProfileHeader: React.FC = () => {
 // const location = useLocation()

  return (
    <div className='card mb-5 mb-xl-10'>
      {/**emp1 */}
      <div className='card-body pt-9 pb-0'>
       
      <div className='card-toolbar'>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='bottom'
          data-bs-trigger='hover'
          title='Cliquer pour ajouter un objectif'
        >
         <AjoutProfil/>
          
        </div>
        </div>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='Metornic' />
              <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
            </div>
          </div>
          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    Mokhtar Chouchene 
                  </a>
                  <a href='#'>
                    <KTSVG
                      path='/media/icons/duotune/general/gen026.svg'
                      className='svg-icon-1 svg-icon-primary'
                    />
                  </a>
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTSVG
                      path='/media/icons/duotune/communication/com006.svg'
                      className='svg-icon-4 me-1'
                    />
                    Front Developer
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTSVG
                      path='/media/icons/duotune/general/gen018.svg'
                      className='svg-icon-4 me-1'
                    />
                    SF, Bay Area
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                  >
                    <KTSVG
                      path='/media/icons/duotune/communication/com011.svg'
                      className='svg-icon-4 me-1'
                    />
                    max@kt.com
                  </a>
                  
                </div>
              </div>

              <div className='d-flex my-4'>
               
             
              </div>
            </div>

            <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap'>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr066.svg'
                        className='svg-icon-3 svg-icon-success me-2'
                      />
                      <div className='fs-2 fw-bolder'>4500$</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Earnings</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr065.svg'
                        className='svg-icon-3 svg-icon-danger me-2'
                      />
                      <div className='fs-2 fw-bolder'>75</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Projects</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr066.svg'
                        className='svg-icon-3 svg-icon-success me-2'
                      />
                      <div className='fs-2 fw-bolder'>60%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Success Rate</div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      
           
      </div>



{/**Empl2 */}

      <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='Metornic' />
              <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
            </div>
          </div>
          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    Mokhtar Chouchene
                  </a>
                  <a href='#'>
                    <KTSVG
                      path='/media/icons/duotune/general/gen026.svg'
                      className='svg-icon-1 svg-icon-primary'
                    />
                  </a>
                </div>

                
              </div>

              <div className='d-flex my-4'>
               
             
              </div>
            </div>

            <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap'>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                     
                      <div className='fs-2 fw-bolder'>4500</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Salaire</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      
                      <div className='fs-2 fw-bolder'>75</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Projets</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                   

                <div className='fw-bold fs-6 text-gray-400'>Attachements</div>
                  </div>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                  <div className='fw-bold fs-6 text-gray-400'>Attachements
           
  
                  </div>
                  </div>
                  </div>

                </div>
                <div>
                <ul>
  <li>
    <h2>John Doe</h2>
    <button id="edit-john-doe">Modifier</button>
  </li>
  <li>
    <h2>Jane Smith</h2>
    <button id="edit-jane-smith">Modifier</button>
  </li>
</ul>
                </div>
               

              </div>
            </div>
          </div>
        </div>
        
      </div>
      
                
      </div>
      
  
  )
}

export {ProfileHeader}
