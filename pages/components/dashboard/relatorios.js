import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import Seo from '../../../shared/layout-components/seo/seo';

import dynamic from 'next/dynamic';
const Datatable = dynamic(()=>import('../../../shared/data/table/datatable'), { ssr: false })
import {downloadCSV} from '../../../shared/data/table/data-tables'


const DataTable = () => {
  async function handleExport() {
	await createExcel()
  }

  return (
    <>
    <Seo title="Data Tables"/>

      <PageHeader handle={()=> handleExport()} title="Relatorio" item="Relatorio dos uploads" active_item="Relatorio"/>

	  <Datatable />
	
    </>
  )
}
DataTable.layout = "Contentlayout"

export default DataTable