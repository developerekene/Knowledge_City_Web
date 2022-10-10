import React from 'react'
import { COLORS } from '../../utills/Tools';

const FooterCopyright = () => {
  return (
    <div className='footer' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, height: 40}}>
      <div style={{ marginLeft: 20, fontWeight: 'bold'}}>
       © 2021 Knowledge City. All Rights Reserved.
      </div>
      <div style={{display: 'flex', alignItems: 'centre',  color: COLORS.baseColorSix, fontWeight: 'bold', marginRight: 20}}>
        <div style={{paddingRight: 20}}>
        Developers
        </div>
        <div>
        Cookies settings
        </div>
      </div>
    </div>
  )
}

export default FooterCopyright
