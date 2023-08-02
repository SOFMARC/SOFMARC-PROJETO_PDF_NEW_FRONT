import React from 'react'
import PageHeader from '../../../../shared/layout-components/page-header/page-header'
import Seo from '../../../../shared/layout-components/seo/seo';

import dynamic from 'next/dynamic';
const Datatable = dynamic(()=>import('../../../../shared/data/table/datatable'), { ssr: false })

const DataTable = () => {
  return (
    <>
    <Seo title="Data Tables"/>

    <PageHeader title="DataTable" item="Maps & Tables" active_item="DataTable"/>
	  <Datatable/>
	
    </>
  )
}
DataTable.layout = "Contentlayout"

export default DataTable