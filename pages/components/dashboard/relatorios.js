import React,{useContext} from 'react'
import Seo from '../../../shared/layout-components/seo/seo';

import dynamic from 'next/dynamic';
const Datatable = dynamic(()=>import('../../../shared/data/table/datatable'), { ssr: false })


const Relatorio = () => {
  return (
    <>
    <Seo title="Data Tables"/>

    <br />
    <br />
	  <Datatable />
	
    </>
  )
}
Relatorio.layout = "Contentlayout"


export default Relatorio