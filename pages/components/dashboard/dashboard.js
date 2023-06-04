'use client'
import React,{useState} from 'react'
import PageHeader from "../../../shared/layout-components/page-header/page-header"
import Seo from '../../../shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import {parseCookies} from 'nookies'

const Dashboardshare = dynamic(()=>import('../../../shared/data/dashboard/dashboard'), { ssr: false })


const Dashboard = () => {
	
  return (
    <>
    <Seo title="Dashboard"/>

    <PageHeader title="Welcome To Dashboard" item="Home" active_item="Project Dashboard"/>
    
    <Dashboardshare/>

    </>
  )
}

Dashboard.layout = "Contentlayout"


export default Dashboard

export async function getServerSideProps(ctx) {
  console.log('serversideprops')

  const {['pdfreader.token']: token} = parseCookies(ctx)


  if(!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }


  return {
    props:{}
  }

}