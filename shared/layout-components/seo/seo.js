import React from 'react'
import Head from "next/head"
import favicon from "../../../public/assets/img/brand/favicon.ico"

const Seo = ({title}) => {
  let i = `Spruha - ${title}`
  return (
    <Head>
        <title>{i}</title>
        <link rel="icon" href={favicon.src} />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet"></link>
    </Head>
  )
}

export default Seo