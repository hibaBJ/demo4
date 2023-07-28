/* eslint-disable react/jsx-no-target-blank */
import { useIntl } from 'react-intl'
import { AsideMenuItemWithSubMain } from './AsideMenuItemWithSubMain'
import { AsideMenuItem } from './AsideMenuItem'
import { useState } from 'react'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'





const AsideMenuMain = () => {
  const intl = useIntl()
  const [isAdministration, setIsAdministration] = useState(false);
  const [isCurrentState, setIsCurrenState] = useState(isAdministration);
  function updateSide() {

  }
  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        fontIcon='bi-bar-chart-line'
        bsTitle={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        className='py-3'
      />

      <AsideMenuItemWithSubMain to='/crafted/administration' title='Administration' bsTitle='Administration' fontIcon='bi bi-grid-fill' hasBullet={true}>
        <AsideMenuItem
          to='/Employees'
          title='Employee'
          bsTitle='Employee'
          hasBullet={true}
        />
        <AsideMenuItem to='/Groupes' title='Groupes'  bsTitle="Groupes"hasBullet={true}></AsideMenuItem>
        <AsideMenuItem
          to='/Role'
          title='Role'
          bsTitle='Role'
          hasBullet={true}
        />
        <AsideMenuItem to='/Droits' title='Droits'  bsTitle="Droits"hasBullet={true}></AsideMenuItem>
     
       
      </AsideMenuItemWithSubMain>

      <AsideMenuItem
        to='/Taches'
        title='Taches'
        bsTitle='Taches'
        fontIcon='bi bi-list-check'
        className='py-3'
      />
      
   
      <AsideMenuItem
        to='/Objectifs'
        title='Objectifs'
        bsTitle='Objectifs'
        fontIcon='bi bi-clipboard-check-fill'
        className='py-3'
      />
      <AsideMenuItem
        to='/Attachements'
        title='Attachements'
        bsTitle='Attachements'
        fontIcon='bi bi-paperclip'
        className='py-3'
      />
      <AsideMenuItem
        to='/Accessoires'
        title='Accessoires'
        bsTitle='Accessoires'
        fontIcon='bi bi-mouse-fill'
        className='py-3'
      />
      <AsideMenuItem
        to='/Conges'
        title='Congés'
        bsTitle='Congés'
        fontIcon='bi bi-calendar-check-fill'
        className='py-3'
      />
      <AsideMenuItem
        to='/Pointage'
        title='Pointage'
        bsTitle='Pointage'
        fontIcon='bi bi-fingerprint'
        className='py-3'
      />
      <AsideMenuItem
        to='/Paiement'
        title='Paiement'
        bsTitle='Paiement'
        fontIcon='bi bi-credit-card-2-back-fill'
        className='py-3'
      />

    </>
  )
}
export { AsideMenuMain }
