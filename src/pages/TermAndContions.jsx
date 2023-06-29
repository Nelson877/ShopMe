import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from './BreadCrumb'

function TermAndContions() {
  return (
    <div>
        <Meta title={"Term & Contions"} />
      <BreadCrumb title="Term & Contions" />
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

export default TermAndContions