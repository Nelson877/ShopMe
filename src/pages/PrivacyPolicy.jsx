import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from './BreadCrumb'

function PrivacyPolicy() {
  return (
    <div>
        <Meta title={"Privacy Policy"} />
      <BreadCrumb title="Privacy Policy" />
      <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className="contaner-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="policy">

                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy