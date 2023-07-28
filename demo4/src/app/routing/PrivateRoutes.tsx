import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import  Groupes  from '../pages/administration/Groupes'
import { Accessoires } from '../pages/Accessoires'
import { Pointage } from '../pages/Pointage/Pointage'
import { Attachements } from '../pages/Attachements/Attachement'
import { Objectifs } from '../pages/Objectifs/Objectifs'
import { Taches } from '../pages/Taches/Taches'
import { Paiement } from '../pages/Paiement/Paiement'
import {Conges} from '../pages/Conges/Conges'
import AccountPage from '../modules/accounts/AccountPage'
import Administration from '../pages/administration/Administration'
import  { Role } from '../pages/administration/Role'
import { Droits } from '../pages/administration/Droits.js'
import Employees from '../pages/administration/Employees'
import LoginApp from '../pages/LoginApp'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
//import Acceuil from '../pages/Acceuil'



const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
         <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        
        {/* Pages */}
        <Route path='/dashboard' element={<DashboardWrapper />} />
       {/**  <Route path='/acceuil' element={<Acceuil/>}/> */}
        <Route path='/administration' element={<Administration/>}/>
        <Route path='/employees'element={<Employees/>}/>
        <Route path='/groupes' element={<Groupes/>}/>
        <Route path='/accessoires' element={<Accessoires/>}/>
        <Route path='/pointage'element={<Pointage/>}/>
        <Route path='/attachements'element={<Attachements/>}/>
        <Route path='/objectifs'element={<Objectifs/>}/>
        <Route path='/taches'element={<Taches/>}/>
        <Route path='/paiement'element={<Paiement/>}/>
        <Route path='/Conges'element={<Conges/>}/>
        <Route path='/Role'element={<Role/>}/>
        <Route path='/Droits'element={<Droits/>}/>
        <Route path='/Loginapp'element={<LoginApp/>}/>

        
        
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
       
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
       
       <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
