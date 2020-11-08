import React from "react"
import Header from "../../components/header"
import Layout from "../../components/panda/layout"
export default function Home() {
  return (
    <Layout>
      <Header headerText="Amazing Pandas Eating Things" />
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
    </Layout>
  )
}