import React from "react";
//import { ListsWidget2, ListsWidget3, TablesWidget8,ListsWidget6 } from '/src/_metronic/partials/widgets/lists'
//import { MixedWidget8 } from '/src/_metronic/partials/widgets/mixed'
//'/_metronic/partials/widgets/' 
import { MixedWidget8 } from "../../_metronic/partials/widgets";
import { ListsWidget2 } from "../../_metronic/partials/widgets";
import { ListsWidget3 } from "../../_metronic/partials/widgets";
import { ListsWidget6 } from "../../_metronic/partials/widgets";
import { TablesWidget8 } from "../../_metronic/partials/widgets";
import {useIntl} from 'react-intl'
import {useEffect} from 'react'
//import {PageTitle} from '../../../_metronic/layout/core'
import { PageTitle } from "../../_metronic/layout/core";
export function Acceuil(){
  const DashboardPage = () => {
  
    useEffect(() => {
      // We have to show toolbar only for dashboard page
      document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
      return () => {
        document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
      }
    }, [])
    return (
      <>
     
      </>
    )
  }  
  const intl = useIntl()
    return(
      <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
        <div>
        <div className='row g-5 g-xl-8'>
        {/* begin::Col  */}
        <div className='col-xxl-4'>
          <MixedWidget8 className='card-xxl-stretch' chartColor='warning' chartHeight='150px' />
        </div>
        <div className='col-xxl-8'>
          <TablesWidget8 className='card-xxl-stretch mb-5 mb-xl-8' />
        </div>
        </div>
        <div className='row g-5 g-xl-8'>
        <div className='col-xl-4'>
          <ListsWidget3 className='card-xl-stretch mb-xl-8' />
        </div>
        <div className='col-xl-4'>
          <ListsWidget2 className='card-xl-stretch mb-xl-8' />
        </div>
        <div className='col-xl-4'>
          <ListsWidget6 className='card-xl-stretch mb-5 mb-xl-8' />
        </div>
      </div>
      </div>
      </>
    )
    
}
export default Acceuil;
