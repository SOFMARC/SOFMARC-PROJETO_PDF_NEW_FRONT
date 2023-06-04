import React from 'react'
import Seo from '../shared/layout-components/seo/seo'

const Custom404 = () => {
    return (
        <div>
          {/* <!-- Page --> */}
      <Seo title="Error"/>

            <div className="page main-signin-wrapper bg-primary construction">
                <div className="d-flex header-setting-icon demo-icon fa-spin">
                    <a className="nav-link icon" href="javascript:void(0)">
                        <i className="fe fe-settings settings-icon "></i>
                    </a>
                </div>
    
                <div className="container ">
                    <div className="construction1 text-center details text-white">
                        <div className="">
                            <div className="col-lg-12">
                                <h1 className="tx-140 mb-0">404</h1>
                            </div>
                            <div className="col-lg-12 ">
                                <h1>Oops.The Page you are looking  for {`doesn't`}  exit..</h1>
                                <h6 className="tx-15 mt-3 mb-4 text-white-50">You may have mistyped the address or the page may have moved. Try searching below.</h6>
                                <a className="btn ripple btn-success text-center mb-2" href="index.html">Back to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
            {/* <!-- End Page --> */}
        </div>
      )
}

export default Custom404