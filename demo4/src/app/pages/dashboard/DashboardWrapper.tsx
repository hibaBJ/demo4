
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import { ListsWidget2, ListsWidget3,ListsWidget6 } from '../../../_metronic/partials/widgets'
import { MixedWidget8 } from '../../../_metronic/partials/widgets'
import { TablesWidget8 } from '../../../_metronic/partials/widgets'
//import {useEffect} from 'react'
const DashboardPage = () => {
  
 
  return (
    <>
   
    </>
  )
}

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />

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
     
</>

  )
  }

export {DashboardWrapper}
